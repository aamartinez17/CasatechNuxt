<template>
  <div class="privacy-view">
    <PageHeader 
      title="Privacy Policy" 
      subtitle="How we protect your data and your rights."
    />

    <section class="page-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="privacy-content">
              <p class="text-muted mb-4">Last Updated: November 25, 2025</p>

              <h3>1. Introduction</h3>
              <p>Casatech LLC ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website <strong>casatechllc.com</strong> and our practices for collecting, using, maintaining, protected, and disclosing that information.</p>

              <h3>2. Information We Collect</h3>
              <p>We collect information that you voluntarily provide to us, including:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business name when you fill out our contact forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and operating system (via standard web logs and Google reCAPTCHA).</li>
              </ul>

              <h3>3. Use of Your Information</h3>
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it (e.g., IT support or web design consultation).</li>
                <li>To notify you about changes to our services.</li>
              </ul>

              <h3>4. SMS/Text Messaging Terms (Grasshopper/VoIP)</h3>
              <p>By providing your phone number to Casatech LLC, you expressly consent to receive text messages from us regarding your inquiries, project updates, or support tickets. Message and data rates may apply.</p>
              <ul>
                <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to the short code. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</li>
                <li><strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@casatechllc.com.</li>
                <li><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</li>
              </ul>

              <div class="alert alert-secondary mt-4">
                <strong><i class="fas fa-shield-alt me-2"></i> Privacy of Mobile Information</strong><br>
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </div>

              <h3>5. Cookies and Tracking Technologies</h3>
              <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information.</p>
              <ul>
                <li><strong>Essential Cookies:</strong> We use local storage to save your language preference (English/Spanish) and your cookie consent status.</li>
                <li><strong>Security Cookies:</strong> We use Google reCAPTCHA to protect our forms from spam. Google reCAPTCHA sets a necessary cookie to function.</li>
              </ul>

              <h3>6. Data Security</h3>
              <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.</p>

              <h3>7. Contact Information</h3>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
              <p>
                <strong>Casatech LLC</strong><br>
                Email: <a href="mailto:info@casatechllc.com">info@casatechllc.com</a><br>
                Phone: <a href="tel:203-884-8244">(203) 884-8244</a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta.js';

// Define static meta tags for this page
const pageMeta = computed(() => ({
  title: 'Privacy Policy | Casatech LLC',
  description: 'Privacy Policy and Terms of Service for Casatech LLC. Learn how we handle your data and SMS consent.',
  path: '/privacy-policy',
  image: '/images/casatechllc-og-image.png'
}));

usePageMeta(pageMeta);
</script>

<style scoped>
@import '@/assets/_variables.css';

.page-section {
  padding: var(--spacing-xl) 0;
}

.privacy-content h3 {
  color: var(--color-primary);
  font-family: var(--font-family-headings);
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.privacy-content ul {
  margin-bottom: 1.5rem;
}

.privacy-content li {
  margin-bottom: 0.5rem;
}
</style>