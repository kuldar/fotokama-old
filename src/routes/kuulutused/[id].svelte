<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = `/kuulutused/${page.params.id}.json`
		const res = await fetch(url)

		if (res.ok) {
			return {
				props: { listing: await res.json() }
			}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		}
	}
</script>

<script>
  export let listing
</script>

<div>{listing.name}</div>
