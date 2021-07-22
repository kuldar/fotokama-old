<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/kuulutused/${page.params.id}.json`
		const res = await fetch(url)

		if (res.ok) {
			return { props: { listing: await res.json() }}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
	}
</script>

<script>
  import Nav from '$lib/components/Nav.svelte'
  import { categorySlugs, categoryLabels, conditionLabels, formatShipping } from '$lib/utils.js'
  export let listing

  function formatDescription(description) {
    let paragraphs = description.split(/\r?\n/)
    let html = '<p>' + paragraphs.join('</p><p>') + '</p>'
    return html
  }
</script>

<!-- Header -->
<header class="max-w-6xl mx-auto px-4">
  <Nav active={`/kuulutused/${categorySlugs[listing.category]}`}/>
</header>

<!-- Listing -->
<div class="bg-gray-800 border-t border-gray-700 mt-2">
  <div class="max-w-6xl mx-auto px-4">

    <!-- Name & Price -->
    <div class="flex items-center border-b border-gray-700 pt-8 pb-4">

      <!-- Info -->
      <div class="flex-1">

        <!-- Name -->
        <div class="text-4xl font-bold font-space text-gray-200">
          {listing.name}
        </div>

        <!-- Category -->
        <a href={`/kuulutused/${categorySlugs[listing.category]}`} class="text-xl font-medium text-green-500 transition-colors hover:text-green-300">
          {categoryLabels[listing.category]}
        </a>
      </div>

      <!-- Price -->
      <div class="flex flex-col items-end">
        <div class="text-6xl font-bold font-space text-gray-500">€{listing.price}</div>
        {#if listing.old_price}<div class="line-through text-2xl text-gray-600 font-bold font-space">€{listing.old_price}</div>{/if}
      </div>

    </div>

    <!-- Bottom -->
    <div class="grid grid-cols-5 gap-10 pt-4 pb-10">

      <!-- Details -->
      <div class="col-span-2 divide-y divide-gray-700">
        <div class="flex items-center py-2">
          <div class="w-48 font-base uppercase text-sm font-bold tracking-wide text-gray-500">Seisukord</div>
          <div class="font-medium text-lg text-gray-200">{conditionLabels[listing.condition]}</div>
        </div>

        <div class="flex items-center py-2">
          <div class="w-48 font-base uppercase text-sm font-bold tracking-wide text-gray-500">Tootja</div>
          <div class="font-medium text-lg text-gray-200">{listing.brand}</div>
        </div>

        <div class="flex items-center py-2">
          <div class="w-48 font-base uppercase text-sm font-bold tracking-wide text-gray-500">Fookuskaugus</div>
          <div class="font-medium text-lg text-gray-200">{listing.info.focal_length}mm</div>
        </div>

        <div class="flex items-center py-2">
          <div class="w-48 font-base uppercase text-sm font-bold tracking-wide text-gray-500">Maksimaalne ava</div>
          <div class="font-medium text-lg text-gray-200">f/{listing.info.aperture}</div>
        </div>

        <div class="flex items-center py-2">
          <div class="w-48 font-base uppercase text-sm font-bold tracking-wide text-gray-500">Bajonett</div>
          <div class="font-medium text-lg text-gray-200">{listing.info.mount}</div>
        </div>
      </div>

      <div class="col-span-3">
        <div class="font-base uppercase text-sm font-bold tracking-wide text-gray-500 mb-4">
          Lisatud 5 päeva tagasi
        </div>

        <div class="font-base">
          <div class="space-y-2">
            {@html listing.description ? formatDescription(listing.description) : ''}
          </div>

          <div class="text-gray-200 space-y-1 mt-4">

            {#if listing.location}
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="ml-4">
                {listing.location}
              </span>
            </div>
            {/if}

            {#if listing.shipping !== []}
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span class="ml-4">
                {formatShipping(listing.shipping)}
              </span>
            </div>
            {/if}

            {#if listing.contact.phone !== ''}
            <div class="flex items-center">
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-4">
                {listing.contact.phone}
              </span>
            </div>
            {/if}

            {#if listing.contact.email !== ''}
            <div class="flex items-center">
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="ml-4">
                {listing.contact.email}
              </span>
            </div>
            {/if}

          </div>
        </div>

        <div class="h-[1px] bg-gray-700 my-4"></div>

        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb">
          <div>
            <div class="text-lg font-medium">Peeter Paan</div>
            <div class="text-sm font-medium font-base text-gray-500 leading-none">Liitunud juuni 2021</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
