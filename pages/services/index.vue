<template>
  <div class="services-view">
    <PageHeader 
      title="Our Services"
      subtitle="Clear, professional, and tech-focused solutions tailored to your small business."
      backgroundImage="/images/servicesview-header.png" 
    />

    <section class="page-section" id="web-design">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="/images/servicesview-web-development.png" class="img-fluid rounded-3 shadow-lg" alt="Modern Website Design">
          </div>
          <div class="col-lg-6">
            <h2 class="section-heading">Website Design & Development</h2>
            <p class="lead">We build vibrant, modern, and high-performance websites that look great on any device. Your website is your digital storefront, and we make sure it's a great one.</p>
            <h5 class="mt-4 mb-3 fw-bold">What's Included:</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>Fully Responsive (Mobile-First) Design</li>
              <li><i class="fas fa-check-circle"></i>Modern Vue.js & Bootstrap Frameworks</li>
              <li><i class="fas fa-check-circle"></i>Basic SEO & Performance Optimization</li>
              <li><i class="fas fa-check-circle"></i>Bilingual (EN/ES) Content Setup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light" id="smb-tech">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="section-heading">Small Business Tech Setup</h2>
            <p class="lead">Stop guessing what tech you need. We'll get your business set up professionally from day one, from your email to your phones.</p>
            <h5 class="mt-4 mb-3 fw-bold">We'll Handle:</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>Google Workspace (Pro Email) Setup</li>
              <li><i class="fas fa-check-circle"></i>VoIP Phone System Configuration</li>
              <li><i class="fas fa-check-circle"></i>Network & Wi-Fi Optimization</li>
              <li><i class="fas fa-check-circle"></i>Hardware & Software Recommendations</li>
            </ul>
            
            <NuxtLink :to="startupTechPath" class="btn btn-brand-primary mt-3">
              See Startup Tech Details
            </NuxtLink>
            </div>
          <div class="pt-5 col-lg-6">
            <img src="/images/servicesview-business-tech.png" class="img-fluid rounded-3 shadow-lg" alt="Small Business Tech Stack">
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="it-services">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="/images/servicesview-it.png" class="img-fluid rounded-3 shadow-lg" alt="IT Services and Support">
          </div>
          <div class="col-lg-6">
            <h2 class="section-heading">IT Services & Consulting</h2>
            <p class="lead">As your local tech partner, we're here when you need us. We provide on-demand support and long-term consulting to keep your operations running smoothly.</p>
            <h5 class="mt-4 mb-3 fw-bold">Our Support Includes:</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>On-Demand Tech Support</li>
              <li><i class="fas fa-check-circle"></i>Hardware/Software Troubleshooting</li>
              <li><i class="fas fa-check-circle"></i>Data Integrity & Custom SQL Reporting</li>
              <li><i class="fas fa-check-circle"></i>General Tech Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section pricing-section bg-light" id="pricing">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading">Pricing Models</h2>
          <p class="text-muted lead mb-5">We offer flexible pricing to match your needs. Every project is unique.</p>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-box"></i>
              </div>
              <h4 class="mt-3">Per-Project</h4>
              <p class="text-muted">A fixed price for a well-defined project (like a new website). You'll know the full cost upfront.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h4 class="mt-3">Monthly Retainer</h4>
              <p class="text-muted">Ideal for ongoing IT support or website maintenance. A set number of hours per month.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-clock"></i>
              </div>
              <h4 class="mt-3">Hourly Rate</h4>
              <p class="text-muted">For on-demand support, consulting, or small tasks that don't fit into a project.</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <p class="lead">The best way to get an accurate cost is to talk to us.</p>
          <NuxtLink to="/contact" class="btn btn-brand-primary btn-lg">Get a Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- === NEW SECTION (5) === -->
    <section class="page-section bg-light" id="further-reading">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading">Further Reading</h2>
          <p class="text-muted lead mb-5">Learn more about the core technologies we recommend for startups.</p>
        </div>
        <div class="row">
          <!-- Link to Article 1 -->
          <div class="col-md-4">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">The 5 Tech Essentials for Day One of Your Business</h5>
                <p class="card-text text-muted">Don't start your business with a @gmail.com address. Here's what you need to look professional from day one.</p>
                <NuxtLink :to="techEssentialsPath" class="btn btn-link p-0">
                  Read More &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Link to Article 2 -->
          <div class="col-md-4">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">What is VoIP and Why Your Startup Needs It</h5>
                <p class="card-text text-muted">Hint: It separates your work life from your personal life, and it saves you money.</p>
                <NuxtLink :to="voipPath" class="btn btn-link p-0">
                  Read More &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- Link to Article 3 -->
          <div class="col-md-4">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">Why Google Workspace is a Non-Negotiable for Your Business</h5>
                <p class="card-text text-muted">It's not just about email. It's the entire operating system for your business.</p>
                <NuxtLink :to="workspacePath" class="btn btn-link p-0">
                  Read More &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center">
        <h2 class="display-5 fw-bold">Ready to Start?</h2>
        <p class="lead my-4">Let's discuss your project and find the right solution for you.</p>
        <NuxtLink to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">Get in Touch</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
// import { useI18n } from 'vue-i18n';

// const { t, locale } = useI18n();

const pageMeta = computed(() => ({
  title: "Our Services",
  description: "Clear, professional, and tech-focused solutions tailored to your small business.",
  path: '/services',
  image: '/images/servicesview-header.png',
}));

usePageMeta(pageMeta);

// --- ADD DYNAMIC PATHS FOR SIDEBAR ---
const workspacePath = computed(() => ('/article/google-workspace-vs-gmail'));
const voipPath = computed(() => ('/article/what-is-voip-for-business'));
const techEssentialsPath = computed(() => ('/article/5-tech-essentials-for-your-startup'));
// const contactPath = computed(() => ('/contact'));
const startupTechPath = computed(() => ('/services/startup-tech'));

</script>

<style scoped>

/* General Page Styling */
.page-section {
  padding: var(--spacing-xl) 0;
}
.section-heading {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-dark);
  font-size: 2.5rem;
}
.bg-light {
  background-color: #f8f9fa;
}

/* 1. Hero Section */
/* 2-4. Service Sections */
.service-checklist {
  list-style: none;
  padding-left: 0;
}
.service-checklist li {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
}
.service-checklist .fa-check-circle {
  color: var(--color-primary);
  margin-right: var(--spacing-md);
  font-size: 1.25rem;
}

/* 5. Pricing Section */
.pricing-section .card {
  border: none;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}
.pricing-section .card:hover {
  transform: translateY(-10px);
  box-shadow: var(--primary-shadow);
}
.pricing-section .icon-wrapper {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
}
.pricing-section .card h4 {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-weight: 600;
}
.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);
}

/* === NEW STYLES FOR SECTION 5 === */
.blog-link-card {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-default);
}
.blog-link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--primary-shadow);
}
.blog-link-card .card-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
}
.blog-link-card .btn-link {
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}
.blog-link-card .btn-link:hover {
  text-decoration: underline;
}

/* 6. CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.cta-section .btn-brand-primary:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>