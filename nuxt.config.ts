
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
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
  }
})
