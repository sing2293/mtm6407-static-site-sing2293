<template>
  <div class="page">
    <p class="page-kicker">About</p>
    <h1 class="page-title">A bit about me.</h1>
    <p class="page-lead">
      I’m an Interactive Media student at Algonquin College with a mix of
      design, front-end, and content experience. I like turning messy ideas
      into clear visuals and usable interfaces.
    </p>

    <div class="about-layout">
      <section>
        <h2 class="section-title">Background</h2>
        <p>
          I’ve worked on school projects and freelance-style briefs ranging
          from static portfolios to marketing assets for service businesses.
          My favourite part is connecting visuals, copy, and interactions so
          everything feels like one story.
        </p>

        <h2 class="section-title">Skills & tools</h2>
        <p class="section-subtitle">
          Tools change fast, but here are the ones I’m most comfortable with right now.
        </p>

        <div class="grid-2">
          <div class="card">
            <h3>Design & Content</h3>
            <p>Creating layouts, component grids, and visual systems.</p>
            <div class="chip-row">
              <span class="chip">Figma</span>
              <span class="chip">Adobe XD</span>
              <span class="chip">Premiere Pro</span>
              <span class="chip">After Effects</span>
            </div>
          </div>

          <div class="card">
            <h3>Development</h3>
            <p>Coding clean, responsive layouts for the browser.</p>
            <div class="chip-row">
              <span class="chip">HTML / CSS / JS</span>
              <span class="chip">Nuxt / Vue</span>
              <span class="chip">Git / GitHub</span>
            </div>
          </div>
        </div>
      </section>

      <aside class="card card-soft about-photo-card">
        <img src="/profile.jpg" alt="Anuj Singh portrait" class="about-photo" />
      </aside>
    </div>
  </div>
</template>
