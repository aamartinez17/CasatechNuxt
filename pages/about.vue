<template>
  <div class="about-view">
    <PageHeader 
      title="About Casatech LLC"
      subtitle="We're a one-man team with a big mission: to provide professional, innovative, and personal tech solutions to our local community."
      backgroundImage="/images/aboutview-header.png" 
    />

    <section class="page-section" id="story">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5" data-aos="fade-right">
            <img src="/images/aboutview-story.png" class="img-fluid shadow-lg" alt="Alex Martinez, Founder of Casatech LLC">
            </div>
          <div class="pt-5 col-lg-7" data-aos="fade-left" data-aos-delay="100">
            <span class="badge-espanol">Se Habla Español</span>
            <h2 class="section-heading mt-3">Meet Our Founder, Alex Martinez</h2>
            <h4 class="text-muted fw-light">Tech Consultant & Full-Stack Developer</h4>
            <p class="lead">Hi, I'm Alex. As the founder of Casatech LLC, my goal is simple: to be your personal, local tech partner. Born and raised in Harrisonburg, VA, and now living in New Haven, CT, I'm passionate about helping small businesses and the Latin community thrive.</p>
            <p>With over 8 years of technical problem-solving, software support, and IT management experience, I started Casatech to bridge the gap between high-end technology and local business needs. I'm not just a developer; I'm a consultant dedicated to finding the right solution for you.</p>
            <p>Whether you need a modern website, help setting up your small business tech, or reliable IT support, I'm here to help. I'm a quick learner dedicated to developing high-quality code and contributing to innovative projects for my clients.</p>
            <div class="social-links-about mt-4">
              <a href="https://www.linkedin.com/in/alex-martinez1711" target="_blank" class="social-icon-about me-3" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i> Find me on LinkedIn
              </a>
              <a href="https://github.com/aamartinez17" target="_blank" class="social-icon-about" aria-label="GitHub">
                <i class="fab fa-github"></i> See my code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section philosophy-section" id="philosophy">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">Our Philosophy</h2>
          <p class="text-muted mb-5">We operate on three core principles.</p>
        </div>
        <div class="row text-center">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Local Focus</h4>
                <p class="text-muted">We're not a faceless agency. We're part of your community, dedicated to empowering local businesses and self-promoters.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Innovative Solutions</h4>
                <p class="text-muted">We use modern, reliable technology (like Vue.js and Bootstrap) to build high-quality, tech-focused solutions that last.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-handshake-angle fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Personal Partnership</h4>
                <p class="text-muted">As a 'one-man team', you work directly with me. I'm committed to understanding your goals and becoming a long-term partner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="skills">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">Our Technology Stack</h2>
          <p class="text-muted mb-5">We use the best tools for the job to build efficient, scalable, and modern applications.</p>
        </div>
        
        <div class="mb-4" data-aos="fade-up">
          <h5 class="skill-category">Web Development</h5>
          <span class="skill-badge">Vue.js</span>
          <span class="skill-badge">JavaScript</span>
          <span class="skill-badge">Node.js</span>
          <span class="skill-badge">HTML5</span>
          <span class="skill-badge">CSS3</span>
          <span class="skill-badge">Bootstrap</span>
          <span class="skill-badge">PHP</span>
        </div>
        
        <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
          <h5 class="skill-category">Databases</h5>
          <span class="skill-badge">SQL</span>
          <span class="skill-badge">MySQL</span>
          <span class="skill-badge">MS SQL Server</span>
          <span class="skill-badge">MongoDB</span>
        </div>

        <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
          <h5 class="skill-category">Programming</h5>
          <span class="skill-badge">Java</span>
          <span class="skill-badge">Python</span>
          <span class="skill-badge">C++</span>
          <span class="skill-badge">VB.NET</span>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h5 class="skill-category">Tools & Methods</h5>
          <span class="skill-badge">Git & GitHub</span>
          <span class="skill-badge">REST APIs</span>
          <span class="skill-badge">Agile Methodologies</span>
          <span class="skill-badge">Jira & Trello</span>
          <span class="skill-badge">Jamf</span>
        </div>
      </div>
    </section>

    <section class="page-section philosophy-section" id="credentials">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <h3 class="section-heading-sm mb-4">Professional Experience</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong>Software Support Specialist</strong>
                <span class="text-muted d-block">Quality Data Service</span>
              </li>
              <li class="mb-3">
                <strong>IT Specialist</strong>
                <span class="text-muted d-block">Fixify Solutions</span>
              </li>
              <li class="mb-3">
                <strong>IT Technician</strong>
                <span class="text-muted d-block">Nexus Services</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h3 class="section-heading-sm mb-4">Education & Certifications</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong>B.S. in Computer Science</strong>
                <span class="text-muted d-block">University of New Haven (Expected 2026, 3.97 GPA)</span>
              </li>
              <li class="mb-3">
                <strong>A.S. in General Engineering</strong>
                <span class="text-muted d-block">Blue Ridge Community College (Grad. 2018)</span>
              </li>
              <li class="mb-3">
                <strong>CompTIA A+ Certified</strong>
                <span class="text-muted d-block">CompTIA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">Let's Talk About Your Business</h2>
        <p class="lead my-4">See how our experience can help your business grow.</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">Contact Us Today</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// import { useI18n } from 'vue-i18n';
// Note: 'aos/dist/aos.css' is already imported in HomeView.vue
// If App.vue imports both, it might be better to import it once in main.js or App.vue

// const { t, locale } = useI18n();

const pageMeta = computed(() => ({
  title: "About Casatech LLC",
  description: "We're a one-man team with a big mission: to provide professional, innovative, and personal tech solutions to our local community.",
  path: '/about', // The base (English) path
  image: '/images/aboutview-header.png' // The specific image for this page
}));

usePageMeta(pageMeta);

// --- ADD DYNAMIC PATHS FOR SIDEBAR ---
// const contactPath = computed(() => ('/contact'));


</script>

<style scoped>
/* @import '@/assets/_variables.css'; */

/* General Page Styling */
.page-section {
  padding: var(--spacing-xl) 0;
}

/* 2. Story Section */
.badge-espanol {
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: 0.9rem;
  font-weight: var(--font-weight-bold);
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.social-links-about .social-icon-about {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition-default);
}
.social-links-about .social-icon-about:hover {
  color: var(--color-text-dark);
  text-decoration: underline;
}
.social-links-about i {
  font-size: 1.5rem;
  margin-right: 8px;
}

/* 3. Philosophy Section */
.philosophy-section {
  background-color: #f8f9fa; /* Light grey background */
}
.philosophy-section .card {
  border: none;
  transition: var(--transition-default);
}
.philosophy-section .card:hover {
  transform: translateY(-10px);
  box-shadow: var(--primary-shadow);
}
.text-primary-icon {
  color: var(--color-primary);
}

/* 4. Skills Section */
.skill-category {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
.skill-badge {
  display: inline-block;
  background-color: #e9ecef;
  color: var(--secondary-dark-grey);
  padding: 0.5em 1em;
  margin: 0.25em;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
}

/* 6. CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.btn-brand-primary { /* Copied from HomeView for consistency */
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.cta-section .btn-brand-primary:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>