<script>
  export let listing

  let conditionLabels = {
    used: 'Kasutatud'
  }
</script>

<a href={`/kuulutused/${listing.id}`} class="group py-8 flex items-center">

  <!-- Info -->
  <div class="flex-1">

    <!-- Name -->
    <div class="text-4xl font-bold font-space">
      {listing.name}
    </div>

    <!-- Tags -->
    <div class="mt-2 space-x-2">
      <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
        {conditionLabels[listing.condition]}
      </span>
      <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
        {listing.brand}
      </span>
    </div>

  </div>

  <!-- Price -->
  <div class="flex flex-col items-end">
    <div class="text-6xl text-gray-700 font-bold font-space transition-colors group-hover:text-gray-500">€{listing.price}</div>
    {#if listing.old_price}<div class="line-through text-2xl text-gray-700 font-bold font-space">€{listing.old_price}</div>{/if}
  </div>

</a>
