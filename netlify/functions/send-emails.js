// netlify/functions/send-emails.js
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // === 1. HONEYPOT CHECK ===
    // If 'botField' has any value, it's a bot. 
    // We return 200 to "silent fail" so the bot thinks it worked.
    if (data.botField && data.botField.trim() !== "") {
      console.warn('Bot detected via Honeypot field. Silently discarding.');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Emails sent successfully' }),
      };
    }

    // 2. Authenticate using your MAIN account
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // amartinez@casatechllc.com
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const firstName = data.name ? data.name.split(' ')[0] : 'there';
    const companyName = data.company || 'your business';
    const primaryInterest = data.interest ? data.interest.replace('_', ' ') : 'technical consulting';

    // 3. Send the email to YOU (the admin)
    // --- INTERNAL NOTIFICATION TO ALEX MARTINEZ ---
await transporter.sendMail({
  from: `"Casatech Lead Engine" <${process.env.EMAIL_USER}>`, // amartinez@casatechllc.com
  to: process.env.ADMIN_EMAIL,                                // info@casatechllc.com
  replyTo: `"${data.name}" <${data.email}>`,
  // DYNAMIC SUBJECT LINE FOR INSTANT SCANNING
  subject: `🚨 NEW B2B LEAD: ${data.company || 'Unknown Co'} - ${data.interest ? data.interest.replace('_', ' ').toUpperCase() : 'CONSULTATION'}`,
  html: `
    <!DOCTYPE html>
    <html>
    <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f1f5f9;">
        <tr>
          <td align="center" style="padding: 20px 10px;">
            <table role="presentation" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
              
              <tr>
                <td style="background-color: #0f172a; padding: 20px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 18px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">New Consultation Request</h1>
                </td>
              </tr>

              <tr>
                <td style="padding: 24px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; width: 100px;">Company</td>
                      <td style="padding: 12px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${data.company || 'N/A'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700;">Contact</td>
                      <td style="padding: 12px 0; color: #0f172a; font-size: 15px;">${data.name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700;">Interest</td>
                      <td style="padding: 12px 0; color: #0077b6; font-size: 15px; font-weight: 700;">${data.interest ? data.interest.replace('_', ' ').toUpperCase() : 'GENERAL'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 700; vertical-align: top;">Message</td>
                      <td style="padding: 12px 0; color: #334155; font-size: 14px; line-height: 1.5;">${data.message ? data.message.replace(/\n/g, '<br>') : '<em>No message provided.</em>'}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 24px 24px 24px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding-bottom: 12px;">
                        <a href="mailto:${data.email}" style="display: block; background-color: #0f172a; color: #ffffff; text-align: center; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">📧 Reply to Email</a>
                      </td>
                    </tr>
                    ${data.phone ? `
                    <tr>
                      <td>
                        <a href="tel:${data.phone}" style="display: block; background-color: #f8fafc; color: #0f172a; text-align: center; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; border: 1px solid #e2e8f0;">📞 Call ${data.phone}</a>
                      </td>
                    </tr>` : ''}
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background-color: #fff1f2; padding: 20px; text-align: center; border-top: 1px solid #fecdd3;">
                  <p style="margin: 0; color: #be123c; font-size: 13px; font-weight: 700; line-height: 1.4;">
                    ⚡ SPEED-TO-LEAD ALERT:<br>
                    Contact this prospect within 15 minutes to increase closing probability by 391%.
                  </p>
                </td>
              </tr>

            </table>
            <p style="margin-top: 20px; color: #94a3b8; font-size: 11px; text-align: center;">
              Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST | Honeypot Protected
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
});

    // 4. Send the auto-reply email to the USER
    await transporter.sendMail({
  from: `"Casatech LLC" <${process.env.NOREPLY_ALIAS}>`,
  to: data.email,
  replyTo: process.env.ADMIN_EMAIL,
  subject: 'Confirmation: Your Technical Consultation Request | Casatech LLC',
  // Plain Text Fallback
  text: `Hello ${firstName},\n\nThank you for requesting a consultation for ${companyName} regarding ${primaryInterest}.\n\nAlex Martinez will personally review your request and respond within 24 business hours.\n\nRead our latest Insight: https://casatechllc.com/insights`,
  // High-Conversion HTML Template
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc;">
            <tr>
                <td align="center" style="padding: 40px 10px;">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <tr>
                            <td style="padding: 40px 40px 20px 40px; text-align: left; border-bottom: 1px solid #f1f5f9;">
                                <h2 style="margin: 0; color: #0f172a; font-size: 24px;">Casatech<span style="color: #0077b6;">LLC</span></h2>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 40px; color: #1e293b; font-size: 16px; line-height: 1.6;">
                                <p style="margin-top: 0;">Hello ${firstName},</p>
                                <p>Thank you for requesting a technical consultation for <strong>${companyName}</strong>.</p>
                                <p>This message confirms that your inquiry regarding <strong>${primaryInterest}</strong> has been successfully routed to our executive review queue.</p>
                                <div style="background-color: #f1f5f9; padding: 24px; border-radius: 6px; border-left: 4px solid #0077b6; margin: 24px 0;">
                                    <p style="margin: 0; color: #0f172a; font-weight: 600;">The Casatech SLA:</p>
                                    <p style="margin: 8px 0 0 0;">I will personally review your infrastructure goals and provide a strategic response <strong>within the next 24 business hours.</strong></p>
                                </div>
                                <p>We look forward to discussing how to scale your digital footprint in Connecticut. Our consultation can be conducted in <strong>English or Español</strong>.</p>
                                <p style="margin-bottom: 0;">Best regards,</p>
                                <p style="margin-top: 4px; color: #0f172a; font-weight: 700;">Alex Martinez</p>
                                <p style="margin-top: 0; font-size: 14px; color: #64748b;">Founder & Lead Consultant, Casatech LLC</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 40px 40px 40px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f172a; border-radius: 6px;">
                                    <tr>
                                        <td style="padding: 24px; text-align: center;">
                                            <p style="margin: 0 0 12px 0; color: #38bdf8; font-size: 12px; font-weight: 700; text-transform: uppercase;">Executive Insight</p>
                                            <h3 style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px;">Scaling Digital Infrastructure: A Roadmap for Connecticut Enterprises</h3>
                                            <a href="https://casatechllc.com/insights" style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 700;">Read the Full Report →</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `,
});

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully' }),
    };

  } catch (error) {
    console.error('Submission Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing your request' }),
    };
  }
};