<script>
  import supabase from '$lib/db'

  async function getData() {
    const { data, error } = await supabase.from('listings').select()
    if (error) throw new Error(error.message)
    return data
  }
</script>

<div class="max-w-6xl mx-auto px-4">

  <!-- Listings -->
  <div class="divide-y divide-gray-800 mt-4">

    {#await getData()}

      <p>Fetching data..</p>

    {:then data}
      {#each data as listing}

        <!-- Product -->
        <a href="#" class="group py-8 flex items-center">

          <!-- Info -->
          <div class="flex-1">

            <!-- Name -->
            <div class="text-4xl font-bold font-space">
              {listing.name}
            </div>

          </div>

          <!-- Price -->
          <div class="text-6xl text-gray-700 font-bold font-space transition-colors group-hover:text-gray-500">
            €{listing.price}
          </div>

        </a>

      {/each}
    {:catch error}
      <p>Oof, something went wrong:</p>
      <pre>{error}</pre>
    {/await}

    <!-- Product -->
    <a href="#" class="group py-8 flex items-center">

      <!-- Info -->
      <div class="flex-1">

        <!-- Name -->
        <div class="text-4xl font-bold font-space text-gray-600 transition-colors group-hover:text-gray-400">
          Sigma Sport 70-200mm f2.8 DG OS HSM
        </div>

        <!-- Tags -->
        <div class="mt-2 space-x-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Kasutatud
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Objektiiv
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Poolkaader
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Nikon
          </span>
        </div>

      </div>

      <!-- Price -->
      <div class="text-6xl text-gray-700 font-bold font-space transition-colors group-hover:text-gray-500">
        €500
      </div>

    </a>

    <!-- Product -->
    <a href="#" class="group py-8 flex items-center">

      <!-- Info -->
      <div class="flex-1">

        <!-- Name -->
        <div class="text-4xl font-bold font-space">
          Canon 85mm f/1.2 L USM II
        </div>

        <!-- Tags -->
        <div class="mt-2 space-x-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Kasutatud
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Objektiiv
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Poolkaader
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Nikon
          </span>
        </div>

      </div>

      <!-- Price -->
      <div class="flex flex-col items-end">
        <div class="text-6xl text-gray-700 font-bold font-space transition-colors group-hover:text-gray-500">€350</div>
        <div class="line-through text-2xl text-gray-700 font-bold font-space">€500</div>
      </div>

    </a>

    <!-- Product -->
    <a href="#" class="group py-8 flex items-center">

      <!-- Info -->
      <div class="flex-1">

        <!-- Name -->
        <div class="text-4xl font-bold font-space">
          Canon EOS 5D Mark III
        </div>

        <!-- Tags -->
        <div class="mt-2 space-x-2">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Kasutatud
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Objektiiv
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Poolkaader
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md font-medium text-gray-600 border border-gray-800 transition-colors group-hover:text-gray-400">
            Nikon
          </span>
        </div>

      </div>

      <!-- Price -->
      <div class="text-6xl text-gray-700 font-bold font-space transition-colors group-hover:text-gray-500">
        €1,400
      </div>

    </a>

  </div>

</div>
