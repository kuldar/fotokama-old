<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/kuulutused/kaamerad.json`
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

<!-- Navigation -->
<Nav/>

<!-- Filters -->
<header class="bg-gray-800">
  <div class="max-w-6xl mx-auto px-4 pb-4">

    <div class="flex space-x-4">

      <!-- Brand -->
      <div class="flex-1 bg-gray-900 rounded-lg px-4 py-3">
        <div class="uppercase font-bold font-base text-sm tracking-wider text-gray-600">
          Tootja
        </div>
        <div class="flex space-x-2 mt-1">
          <div class="px-2 py-0.5 rounded-md font-medium text-lg text-gray-200 bg-gray-800">Canon</div>
        </div>
      </div>

      <!-- Type -->
      <div class="bg-gray-900 rounded-lg px-4 py-3">
        <div class="uppercase font-bold font-base text-sm tracking-wider text-gray-600">
          Tüüp
        </div>
        <div class="flex space-x-2 mt-1">
          <div class="px-2 py-0.5 rounded-md font-medium text-lg text-gray-200 bg-gray-800">Hübriid</div>
        </div>
      </div>

      <!-- Sensor -->
      <div class="bg-gray-900 rounded-lg px-4 py-3">
        <div class="uppercase font-bold font-base text-sm tracking-wider text-gray-600">
          Sensor
        </div>
        <div class="flex space-x-2 mt-1">
          <div class="px-2 py-0.5 rounded-md font-medium text-lg text-gray-200 bg-gray-800">Täiskaader</div>
        </div>
      </div>

      <!-- Megapixels -->
      <div class="bg-gray-900 rounded-lg px-4 py-3">
        <div class="uppercase font-bold font-base text-sm tracking-wider text-gray-600">
          Megapikslid
        </div>
        <div class="flex space-x-2 mt-1">
          <div class="py-0.5 rounded-md font-medium text-lg text-gray-200">20</div>
          <div class="py-0.5 rounded-md font-medium text-lg text-gray-600">–</div>
          <div class="py-0.5 rounded-md font-medium text-lg text-gray-200">30</div>
          <div class="py-0.5 rounded-md font-medium text-lg text-gray-600">mp</div>
        </div>
      </div>

      <!-- Mount -->
      <div class="bg-gray-900 rounded-lg px-4 py-3">
        <div class="uppercase font-bold font-base text-sm tracking-wider text-gray-600">
          Bajonett
        </div>
        <div class="flex space-x-2 mt-1">
          <div class="px-2 py-0.5 rounded-md font-medium text-lg text-gray-200 bg-gray-800">Canon RF</div>
          <div class="px-2 py-0.5 rounded-md font-medium text-lg text-gray-200 bg-gray-800">Canon EF</div>
        </div>
      </div>

    </div>

  </div>
</header>

<!-- Listings -->
<div class="max-w-6xl mx-auto px-4">
  <div class="divide-y divide-gray-800 mt-4">
    {#each listings as listing}
      <ListingRow {listing} />
    {/each}
  </div>
</div>
