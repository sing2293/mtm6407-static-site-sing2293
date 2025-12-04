<template>
  <div class="page">
    <p class="page-kicker">Contact</p>
    <h1 class="page-title">Let’s get in touch.</h1>
    <p class="page-lead">
      If you’d like to talk about a project, portfolio feedback, or just say
      hi, you can reach me through the channels below.
    </p>

    <div class="contact-grid">
      <div class="contact-row">
        <div class="card card-soft contact-item">
          <span class="contact-label">Email</span>
          <span class="contact-value">sing2293@algonquinlive.com</span>
        </div>

        <div class="card contact-item">
          <span class="contact-label">Links</span>
          <span class="contact-value">
            GitHub –
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              Sing2293
            </a>
          </span>
        </div>
      </div>

      <div class="card">
        <h3>Quick message</h3>
        <p class="section-subtitle">
          This is a front-end only form for the assignment. You can later hook it
          to a real service if you’d like.
        </p>

        <form @submit.prevent>
          <div class="form-field">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>

          <div class="form-field">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div class="form-field">
            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="What would you like to talk about?"
            ></textarea>
          </div>

          <button class="btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>
