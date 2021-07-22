export let conditionLabels = {
  new: 'Uus',
  used: 'Kasutatud',
  broken: 'Katkine',
}

export let categoryLabels = {
  lens: 'Objektiiv',
  camera: 'Kaamera',
}

export let categorySlugs = {
  lens: 'objektiivid',
  camera: 'kaamerad',
}

export let shippingLabels = {
  post: 'Pakiautomaati',
  meet: 'Käest kätte',
}

export function formatShipping(options) {
  let formattedOptions = options.map(option => shippingLabels[option])
  return formattedOptions.join(', ')
}
