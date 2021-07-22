import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  },
  preprocess: [preprocess({ 'postcss': true })]
}

export default config
