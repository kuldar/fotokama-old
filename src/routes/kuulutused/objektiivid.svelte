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
  import ListingRow from '$lib/components/ListingRow.svelte'
  export let listings
</script>

<div class="max-w-6xl mx-auto px-4">
  <div class="divide-y divide-gray-800 mt-4">
    {#each listings as listing}
      <ListingRow {listing} />
    {/each}
  </div>
</div>
