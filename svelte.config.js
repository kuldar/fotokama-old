import preprocess from 'svelte-preprocess'

const config = {
  kit: { target: '#svelte' },
  preprocess: [preprocess({ 'postcss': true })]
}

export default config
