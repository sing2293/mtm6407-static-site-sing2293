<script setup lang="ts">
definePageMeta({
  layout: 'projects'
})

const projects = [
  {
    title: 'Static Portfolio Site',
    role: 'Design & Front-End',
    year: '2025',
    description:
      'A responsive portfolio built with Nuxt, focusing on clean typography, clear hierarchy, and a simple content structure that’s easy to maintain.',
    tags: ['Nuxt 3', 'Static Site', 'Responsive']
  },
  {
    title: 'Service Business Landing Page',
    role: 'UI & Copy',
    year: '2024',
    description:
      'Landing page concept for a local service business, designed around a single, focused call-to-action and scannable sections.',
    tags: ['Landing Page', 'Conversion', 'UX Writing']
  },
  {
    title: 'Motion Graphics Short',
    role: 'Motion Design',
    year: '2024',
    description:
      'Short motion piece experimenting with typography, easing, and transitions that follow the rhythm of the soundtrack.',
    tags: ['Motion', 'After Effects', 'Storyboarding']
  }
]
</script>

<template>
  <section>
    <p class="page-kicker">Projects</p>
    <h1 class="page-title">A snapshot of what I’ve worked on.</h1>
    <p class="page-lead">
      These projects cover a mix of design, front-end development, and motion
      work. I’ve selected pieces that show how I think about structure, visual
      hierarchy, and storytelling on the web.
    </p>

    <div class="grid-2" style="margin-top: 1.8rem;">
      <div class="card card-soft">
        <h3>Overview</h3>
        <p>
          I like combining small experiments typography, color, micro-animations 
          into projects that still feel simple and focused. I’m always adjusting
          things based on feedback and how people actually use the interface.
        </p>
        <div class="chip-row">
          <span class="chip chip--accent">Student work</span>
          <span class="chip">Client-style briefs</span>
          <span class="chip">Iterative process</span>
        </div>
      </div>

      <div class="card">
        <h3>What I’d like to do more of</h3>
        <p>
          I want to explore more realistic product pages, dashboards, and
          multi-page sites, and keep improving the performance and accessibility
          of everything I build.
        </p>
      </div>
    </div>

    <h2 class="section-title">Selected projects</h2>
    <p class="section-subtitle">
        A few highlights from my recent work.
    </p>

    <div
      class="card"
      v-for="project in projects"
      :key="project.title"
      style="margin-top: 0.8rem;"
    >
      <h3>{{ project.title }}</h3>
      <p class="section-subtitle">
        {{ project.role }} • {{ project.year }}
      </p>
      <p>{{ project.description }}</p>

      <div class="chip-row">
        <span class="chip" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </section>
</template>
