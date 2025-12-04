<template>
  <div class="main-shell">
    <header class="site-header">
      <NuxtLink to="/" class="brand">
        <div class="brand-logo">AS</div>
        <div class="brand-meta">
          <span class="brand-name">Anuj Singh</span>
          <span class="brand-tag">Interactive Media • Portfolio</span>
        </div>
      </NuxtLink>

      <nav class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/writing">Writing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <span>© {{ new Date().getFullYear() }} Anuj Singh</span>
      <span>Built with Nuxt 3 • MTM6407</span>
    </footer>
  </div>
</template>
