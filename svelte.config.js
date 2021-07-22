import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    adapter: netlify(),
    target: '#svelte'
  },
  preprocess: [preprocess({ 'postcss': true })]
}

export default config
