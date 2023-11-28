<script lang="ts">
  const questions = [
    {
      question: `What's the point of this website?`,
      answer: `Finding avatars and compatible outfits/accessories on Booth can often be a huge pain. 
      This website is here to help by archiving items from Booth.pm and organizing them to make them easier to discover.`,
    },
    {
      question: `Can you remove my avatars from the website?`,
      answer: `
Absolutely! Please contact me at [my email here] with a link to your avatar and some form of proof of ownership. 
Please keep in mind, though, that we do not store or link to avatar downloads from the website. 
We only direct people to purchase your avatar from your Booth.pm store`,
    },
    {
      question: 'How do I reset my password?',
      answer: `
You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions. 
If you've lost access to the email address used, please contact me at [my email here] with some sort of proof that the account belongs to you.`,
    },
    {
      question: 'How do I update my profile picture?',
      answer:
        'To update your profile picture, go to your account settings and click on the "Edit Profile Picture" button.',
    },
    {
      question: 'How do I download the avatars?',
      answer: `We don't store any avatars on our servers. Each avatar and accessory has a link to the Booth page where you can purchase and download it.`,
    },
  ];
</script>

<!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
      You might be wondering...
    </h2>
  </div>
  <!-- End Title -->

  {#each questions as question}
    <div
      class="
      max-w-2xl mx-auto divide-y
      align-top
      border-base-300 border-b py-4
      last-of-type:border-b-0 first-of-type:pt-0"
    >
      <div class="py-8 first:pt-0 last:pb-0">
        <div class="flex gap-x-5">
          <svg
            class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path
              d="M12 17h.01"
            /></svg
          >

          <div class="text-base-content">
            <h3 class="md:text-lg font-semibold text-2xl">
              {question.question}
            </h3>
            <p class="mt-1">
              {question.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- End FAQ -->

<style lang="postcss">
</style>
