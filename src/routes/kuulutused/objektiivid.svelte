<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/kuulutused/objektiivid.json`
		const res = await fetch(url)

		if (res.ok) {
			return { props: { listings: await res.json() }}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
	}
</script>

<script>
  import Nav from '$lib/components/Nav.svelte'
  import ListingRow from '$lib/components/ListingRow.svelte'
  export let listings
</script>

<!-- Header -->
<header class="max-w-6xl mx-auto px-4">

  <!-- Nav -->
  <Nav/>

  <!-- Filters -->
  <div class="flex space-x-4">

    <!-- Focal Length -->
    <div class="group w-48 shadow bg-gray-900 rounded-lg px-4 py-3 border-t border-gray-800 cursor-pointer">
      <div class="mb-1 uppercase font-bold font-base text-sm tracking-wider text-gray-600 transition-colors group-hover:text-gray-200">
        Fookuskaugus
      </div>
      <div class="flex font-medium text-lg space-x-1">
        <div class="px-2 py-0.5 text-gray-200 rounded-md bg-black border-b border-gray-800 transition-colors">18</div>
        <div class="py-0.5 text-gray-600">–</div>
        <div class="px-2 py-0.5 text-gray-200 rounded-md bg-black border-b border-gray-800 transition-colors">50</div>
        <div class="py-0.5 text-gray-600">mm</div>
      </div>
    </div>

    <!-- Aperture -->
    <div class="group w-32 shadow bg-gray-900 rounded-lg px-4 py-3 border-t border-gray-800 cursor-pointer">
      <div class="mb-1 uppercase font-bold font-base text-sm tracking-wider text-gray-600 transition-colors group-hover:text-gray-200">
        Ava
      </div>
      <div class="flex font-medium text-lg space-x-1">
        <div class="py-0.5 text-gray-600">f/</div>
        <div class="px-2 py-0.5 text-gray-200 rounded-md bg-black border-b border-gray-800">2</div>
        <div class="py-0.5 text-gray-600">–</div>
        <div class="px-2 py-0.5 text-gray-200 rounded-md bg-black border-b border-gray-800">4</div>
      </div>
    </div>

    <!-- Mount -->
    <div class="group flex-1 shadow bg-gray-900 rounded-lg px-4 py-3 border-t border-gray-800 cursor-pointer">
      <div class="mb-1 uppercase font-bold font-base text-sm tracking-wider text-gray-600 transition-colors group-hover:text-gray-200">
        Bajonett
      </div>
      <div class="flex space-x-2 px-2 py-0.5 rounded-md bg-black border-b border-gray-800">
        <div class="text-lg font-medium text-gray-200">
          <span>Sony E</span>
          <span class="text-gray-500">,</span>
        </div>
        <div class="text-lg font-medium text-gray-200">
          Canon EF
        </div>
      </div>
    </div>

    <!-- Brand -->
    <div class="group flex-1 shadow bg-gray-900 rounded-lg px-4 py-3 border-t border-gray-800 cursor-pointer">
      <div class="mb-1 uppercase font-bold font-base text-sm tracking-wider text-gray-600 transition-colors group-hover:text-gray-200">
        Tootja
      </div>
      <div class="flex space-x-2 px-2 py-0.5 rounded-md bg-black border-b border-gray-800">
        <div class="text-lg font-medium text-gray-200">
          <span>Tamron</span>
          <span class="text-gray-500">,</span>
        </div>
        <div class="text-lg font-medium text-gray-200">
          <span>Sony</span>
          <span class="text-gray-500">,</span>
        </div>
        <div class="text-lg font-medium text-gray-200">
          Sigma
        </div>
      </div>
    </div>

  </div>

  <div class="flex items-center justify-between">

    <!-- Email -->
    <a href="#" class="group flex items-center pt-4 font-base text-gray-700 transition-colors hover:text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="relative top-[-1px] h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      </svg>
      <span class="text-gray-600 transition-colors group-hover:text-gray-200">Telli uued kuulutused enda e-mailile</span>
    </a>

    <!-- Sort -->
    <a href="#" class="group flex items-center pt-4 font-base text-gray-700 transition-colors hover:text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
      </svg>
      <span class="text-gray-600 transition-colors group-hover:text-gray-200">Uuemad ees</span>
    </a>

  </div>
</header>

<!-- Listings -->
<div class="bg-gray-900 border-t border-gray-800 mt-4">
  <div class="max-w-6xl mx-auto px-4">
    <div class="divide-y divide-gray-800">
      {#each listings as listing}
        <ListingRow {listing} />
      {/each}
    </div>
  </div>
</div>
