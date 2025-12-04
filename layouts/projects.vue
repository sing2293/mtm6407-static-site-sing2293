<template>
  <div class="main-shell">
    <header class="site-header">
      <NuxtLink to="/" class="brand">
        <div class="brand-logo">AS</div>
        <div class="brand-meta">
          <span class="brand-name">Anuj Singh</span>
          <span class="brand-tag">Selected Work</span>
        </div>
      </NuxtLink>

      <nav class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/writing">Writing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <main>
      <div class="page page-alt">
        <slot />
      </div>
    </main>

    <footer class="site-footer">
      <span>Projects layout • Nuxt static site</span>
      <span>MTM6407</span>
    </footer>
  </div>
</template>
