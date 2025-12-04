
import { defineNuxtConfig } from 'nuxt/config'

const repoName = 'mtm6407-static-site-sing2293'

export default defineNuxtConfig({
  app: {
    baseURL: `/${repoName}/`,
    head: {
      title: 'Anuj Singh – Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Personal portfolio and projects of Anuj Singh.'
        }
      ]
    }
  },
  nitro: {
    preset: 'github_pages'
  }
})
