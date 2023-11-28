// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    // pb: import('pocketbase');
    pb: import('./lib/types/data/pocketbase-types').TypedPocketBase;
    // user?: import('pocketbase').Record;
    user?: import('./lib/types/data/pocketbase-types').UsersResponse;
  }
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
