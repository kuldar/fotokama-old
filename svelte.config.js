import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    target: '#svelte',
    adapter: adapter({})
  },
  preprocess: [preprocess({ 'postcss': true })]
}

export default config
