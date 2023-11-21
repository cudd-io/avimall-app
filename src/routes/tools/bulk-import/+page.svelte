<script lang="ts" context="module">
  import type { BoothItem } from '$lib/types';
  import { Switch } from '$lib/components/ui/switch';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { z } from 'zod';

  import { superValidate } from 'sveltekit-superforms/server';
  import { slide } from 'svelte/transition';
  import { cn, translateToEnglish } from '$lib/utils';

  type ButtonStatus = boolean | 'waiting';

  export type ImportItem = {
    urlOrId: string;
    translated: RequestStatus;
    fetched: RequestStatus;
    showMore: boolean;
    creator: string;
    type?: any;
    itemId?: any;
    description?: string;
    name: string;
    tags: string[];
  };

  enum RequestStatus {
    idle = 'idle',
    waiting = 'waiting',
    success = 'success',
    error = 'error',
  }
</script>

<script lang="ts">
  import DeleteDialog from './DeleteDialog.svelte';
  import { getBoothItem } from '$lib/utils/booth/api';
  import { transformBoothItem } from '$lib/utils/booth/transformers';

  const itemFactory = (): ImportItem => {
    return {
      urlOrId: '3741802',
      name: '',
      translated: RequestStatus.idle,
      description: '',
      tags: [],
      creator: '',
      showMore: false,
      fetched: RequestStatus.idle,
    };
  };

  let importItems: ImportItem[] = [itemFactory()];

  const fakeRequest = async () => {
    console.log('fakeRequest');
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const isUrl = (urlOrId: string) => {
    return urlOrId.startsWith('https://');
  };

  const getItemId = (urlOrId: string) => {
    if (!isUrl(urlOrId)) {
      return urlOrId;
    }

    const baseUrl = 'https://booth.pm/en/items/';
    return urlOrId.replace(baseUrl, '');
  };

  const fetchDetails = async (itemIndex: number) => {
    importItems[itemIndex].fetched = RequestStatus.waiting;
    const originalItem = importItems[itemIndex];
    const itemId = getItemId(importItems[itemIndex].urlOrId);

    try {
      const item = await getBoothItem(itemId);

      const itemString = JSON.stringify(item, null, 2);
      console.log(itemString);
      // transform BoothItem to ImportItem
      const transformedItem: ImportItem = {
        ...originalItem,
        ...{
          urlOrId: `${item.id}`,
          name: item.name,
          translated: originalItem.translated,
          description: item.description,
          tags: [], // TODO: convert tags
          creator: item.shop?.subdomain || '',
          showMore: originalItem.showMore,
          fetched: RequestStatus.success,
        },
      };

      importItems[itemIndex] = transformedItem;
    } catch (error) {
      console.error(error);
      console.log({ error });
      originalItem.fetched = RequestStatus.error;

      importItems[itemIndex] = originalItem;
    }
    importItems = importItems; // force re-render
  };

  const translateRow = async (itemIndex: number) => {
    importItems[itemIndex].translated = RequestStatus.waiting;
    console.log('translateRow');

    const rowJson = JSON.stringify(importItems[itemIndex], null, 2);
    // const translatedJson = await translateToEnglish(rowJson);

    const fieldsToTranslate = ['name', 'description', 'tags'];

    for (const field of fieldsToTranslate) {
      const translatedField = await translateToEnglish(rowJson, field);
      const item = importItems[itemIndex] as any;
      item[field] = translatedField;

      importItems[itemIndex] = item;

      importItems = importItems;
    }

    importItems[itemIndex].translated = RequestStatus.success;

    return;
  };

  const deleteRow = (itemIndex: number) => {
    importItems = importItems.filter((_, index) => index !== itemIndex);
  };

  let gridCols = 6;
  let deleteDialogOpen = false;
</script>

<div class="card mx-auto my-8 p-8 bg-base-200 container">
  <h2 class="text-center text-2xl">Bulk Importer</h2>

  <ul class="w-full my-2">
    {#each importItems as item, itemIndex}
      <li class="w-full border-b-1">
        <div class="w-full my-2 gap-2 grid grid-cols-{gridCols}">
          <Input
            class="w-full col-span-2"
            bind:value={item.urlOrId}
            placeholder="https://booth.pm/en/items/5058077"
          ></Input>
          <Input bind:value={item.name} placeholder={`Original 3D Model "Manuka" ver1.01.1`}
          ></Input>
          <Button
            class={cn({
              // 'btn-success': item.translated === 'success',
              // 'btn-secondary': item.translated === 'waiting' || item.translated === 'idle',
              // 'btn-error': item.translated === 'error',
              'btn-success': item.translated === RequestStatus.success,
              'btn-secondary':
                item.translated === RequestStatus.waiting || item.translated === RequestStatus.idle,
              'btn-error': item.translated === RequestStatus.error,
            })}
            disabled={item.translated === 'waiting'}
            on:click={() => translateRow(itemIndex)}
          >
            {#if item.translated === RequestStatus.waiting}
              <span class="loading loading-spinner" aria-label="Loading" />
            {:else if item.translated === RequestStatus.success}
              Translated
            {:else}
              Translate
            {/if}
          </Button>
          <Button
            class={cn({
              'btn-success': item.fetched === RequestStatus.success,
              'btn-primary':
                item.fetched === RequestStatus.waiting || item.fetched === RequestStatus.idle,
              'btn-error': item.translated === RequestStatus.error,
            })}
            disabled={item.fetched === 'waiting'}
            on:click={() => fetchDetails(itemIndex)}
          >
            {#if item.fetched === 'waiting'}
              <span class="loading loading-spinner" aria-label="Loading" />
            {:else if item.fetched}
              Fetched
            {:else if item.fetched === 'error'}
              Error
            {:else}
              Fetch
            {/if}
          </Button>
          <Button class="btn-outline width-auto" on:click={() => (item.showMore = !item.showMore)}
            >&#9660; Show more</Button
          >
        </div>

        {#if item.showMore}
          <div
            class="w-full my-2 gap-2 grid grid-cols-6 grid-rows-[auto_1fr]"
            in:slide={{ duration: 200, axis: 'y' }}
            out:slide={{ duration: 200, axis: 'y' }}
          >
            <Textarea
              class="col-span-3 row-span-2"
              bind:value={item.description}
              placeholder="Description"
            ></Textarea>
            <Input class="col-span-2" bind:value={item.creator} placeholder="Creator"></Input>
            <DeleteDialog
              bind:open={deleteDialogOpen}
              on:accept={() => deleteRow(itemIndex)}
              let:showDialog
            >
              <Button class="btn-error width-auto text-error-content" on:click={() => showDialog()}
                >Delete</Button
              >
              <svelte:fragment slot="header" let:Title let:Description>
                <Title>Are you sure you want to delete this item?</Title>
                <Description>This action cannot be undone.</Description>
                <!-- Are you sure you want to delete this item? This action cannot be undone. -->
              </svelte:fragment>
            </DeleteDialog>
            <Input class="col-span-2" bind:value={item.tags} placeholder="Tags"></Input>
          </div>
        {/if}
      </li>
    {/each}
    <li class="w-full">
      <div class="w-full my-2 grid grid-cols-{gridCols} gap-2">
        <!-- Just for spacing -->
        <div class="col-span-{gridCols - 1}" aria-hidden></div>
        <Button
          on:click={() => (importItems = [...importItems, itemFactory()])}
          class="btn-success text-success-content max-w-full w-full text grid "
        >
          Add
        </Button>
      </div>
    </li>
  </ul>

  <Button class="btn-primary">Import</Button>
</div>

<style lang="postcss">
</style>
