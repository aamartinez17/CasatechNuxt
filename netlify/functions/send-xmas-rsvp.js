// netlify/functions/send-xmas-rsvp.js
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // === 1. HONEYPOT CHECK ===
    if (data.botField && data.botField.trim() !== "") {
      console.warn('Bot detected via Honeypot field. Silently discarding.');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'RSVP processed successfully' }),
      };
    }

    // 2. Authenticate using your email transport settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const guestName = data.name ? data.name.trim() : 'Guest';
    const firstName = guestName.split(' ')[0];
    const guestEmail = data.email ? data.email.trim() : null;
    const guestPhone = data.phone ? data.phone.trim() : 'Not provided';
    const guestCount = data.guestCount || 1;
    const attendingStatus = data.attending === 'no' ? 'Regretfully Declines' : 'Joyfully Accepts (Attending)';
    const dietaryNotes = data.dietaryNotes || 'None specified';
    const eventUrl = 'https://casatechllc.com/events/callahan-xmas-party';
    const shaneEmail = 'shane.s.callahan@gmail.com';
    const locationAddress = '358 Gravel St, Meriden, CT 06450';
    const googleMapsUrl = 'https://maps.google.com/?q=358+Gravel+St,+Meriden,+CT+06450';

    // === 3. Send the Notification Email to the HOST (Shane) ===
    await transporter.sendMail({
      from: `"Callahan Party RSVP" <${process.env.EMAIL_USER}>`,
      to: shaneEmail,
      replyTo: guestEmail ? `"${guestName}" <${guestEmail}>` : process.env.EMAIL_USER,
      subject: `🎄 NEW RSVP: ${guestName} (${attendingStatus})`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f7f2e7; font-family: -apple-system, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f7f2e7;">
            <tr>
              <td align="center" style="padding: 30px 10px;">
                <table role="presentation" width="100%" style="max-width: 500px; background-color: #133020; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.2); border: 3px solid #d4af37;">
                  
                  <tr>
                    <td style="background-color: #0d2115; padding: 24px; text-align: center; border-bottom: 2px solid #d4af37;">
                      <span style="font-size: 24px;">🎁</span>
                      <h1 style="margin: 8px 0 0 0; color: #ffd700; font-size: 20px; font-family: Georgia, serif; letter-spacing: 0.05em;">New Christmas Party RSVP!</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 28px; color: #fbf8ef;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #234e35;">
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; width: 110px; font-family: monospace;">Guest Name</td>
                          <td style="padding: 12px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${guestName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #234e35;">
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; font-family: monospace;">Status</td>
                          <td style="padding: 12px 0; color: ${data.attending === 'no' ? '#f87171' : '#4ade80'}; font-size: 15px; font-weight: 700;">${attendingStatus}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #234e35;">
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; font-family: monospace;">Party Size</td>
                          <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">${guestCount} guest(s)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #234e35;">
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; font-family: monospace;">Email</td>
                          <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">${guestEmail ? `<a href="mailto:${guestEmail}" style="color: #ffd700; text-decoration: underline;">${guestEmail}</a>` : 'Not provided'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #234e35;">
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; font-family: monospace;">Phone</td>
                          <td style="padding: 12px 0; color: #ffffff; font-size: 14px;">${guestPhone !== 'Not provided' ? `<a href="tel:${guestPhone}" style="color: #ffd700; text-decoration: underline;">${guestPhone}</a>` : 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; color: #d4af37; font-size: 11px; text-transform: uppercase; font-weight: 700; vertical-align: top; font-family: monospace;">Notes</td>
                          <td style="padding: 12px 0; color: #e2e8f0; font-size: 14px; line-height: 1.5;">${dietaryNotes}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${guestEmail ? `
                  <tr>
                    <td style="padding: 0 28px 14px 28px;">
                      <a href="mailto:${guestEmail}" style="display: block; background-color: #c41e3a; color: #ffffff; text-align: center; padding: 14px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 15px; border: 1px solid #ffd700;">✉️ Reply to ${firstName}</a>
                    </td>
                  </tr>
                  ` : ''}

                  <tr>
                    <td style="padding: 0 28px 28px 28px;">
                      <a href="mailto:${shaneEmail}?subject=Regarding%20Christmas%20Party%20RSVP" style="display: block; background-color: #0d2115; color: #ffd700; text-align: center; padding: 12px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px; border: 1px solid #d4af37;">⭐ Email Shane Directly</a>
                    </td>
                  </tr>

                  <tr>
                    <td style="background-color: #0d2115; padding: 16px; text-align: center; border-top: 1px solid #234e35;">
                      <p style="margin: 0; color: #8fa89b; font-size: 11px; font-family: monospace;">
                        Callahan's First Annual Christmas Eve Party • 358 Gravel St, Meriden, CT
                      </p>
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

    // === 4. Send the Festive Confirmation Email to the GUEST (Only if email is provided) ===
    if (guestEmail) {
      await transporter.sendMail({
        from: `"Callahan's Christmas Party" <${process.env.EMAIL_USER}>`,
        to: guestEmail,
        replyTo: shaneEmail,
        subject: '🎄 RSVP Confirmed: Callahan\'s Christmas Eve Party!',
        text: `Hello ${firstName},\n\nThank you for RSVPing to Callahan's First Annual Christmas Eve Party!\n\nDate: Thursday, December 24th at 6:00 PM\nLocation: ${locationAddress}\nMaps: ${googleMapsUrl}\nEvent Details: ${eventUrl}\n\nIf you have any questions, please email Shane at ${shaneEmail}.\n\nWe look forward to celebrating with you!`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="margin: 0; padding: 0; background-color: #f7f2e7; font-family: Georgia, serif;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f7f2e7;">
                  <tr>
                      <td align="center" style="padding: 40px 10px;">
                          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #133020; border-radius: 16px; border: 4px solid #d4af37; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
                              
                              <!-- Header Banner -->
                              <tr>
                                  <td style="background-color: #0d2115; padding: 35px 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                                      <span style="font-size: 32px;">✨</span>
                                      <h1 style="margin: 10px 0 0 0; color: #ffd700; font-size: 22px; text-transform: uppercase; letter-spacing: 0.1em; font-family: Georgia, serif;">Callahan's Christmas Eve Party</h1>
                                      <p style="margin: 8px 0 0 0; color: #fbf8ef; font-size: 13px; font-style: italic; font-family: sans-serif;">Celebrate the magic of the night!</p>
                                  </td>
                              </tr>

                              <!-- Body Content -->
                              <tr>
                                  <td style="padding: 40px; color: #fbf8ef; font-size: 16px; line-height: 1.6; font-family: sans-serif;">
                                      <p style="margin-top: 0; font-size: 18px; font-family: Georgia, serif; color: #ffd700;">Hello ${firstName},</p>
                                      
                                      ${data.attending === 'no' ? `
                                        <p>We received your response that you unfortunately cannot make it to the party this year. You will certainly be missed, and we hope to celebrate with you next time!</p>
                                      ` : `
                                        <p>Wonderful news! Your RSVP has been received and your spot is officially reserved. Get ready for a cozy and unforgettable evening of festive food, warm drinks, and holiday cheer.</p>
                                        
                                        <!-- Event Details Box -->
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0d2115; border-radius: 10px; border: 1px solid #d4af37; margin: 25px 0;">
                                            <tr>
                                                <td style="padding: 20px; text-align: center; color: #fbf8ef;">
                                                    <p style="margin: 0 0 8px 0; color: #ffd700; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">📅 Thursday, December 24th at 6:00 PM</p>
                                                    <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 14px;">📍 Location: <a href="${googleMapsUrl}" style="color: #ffffff; text-decoration: underline;" target="_blank">${locationAddress}</a></p>
                                                    <a href="${googleMapsUrl}" style="display: inline-block; background-color: #d4af37; color: #133020; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 12px; margin-bottom: 12px;" target="_blank">🗺️ Open in Google Maps</a><br>
                                                    <a href="${eventUrl}" style="color: #ffd700; font-size: 13px; text-decoration: underline;">View Full Event Details & Info →</a>
                                                </td>
                                            </tr>
                                        </table>
                                      `}

                                      <p>If you have any questions, please email Shane directly at <a href="mailto:${shaneEmail}" style="color: #ffd700; text-decoration: underline;">${shaneEmail}</a>.</p>

                                      <p style="margin-bottom: 0;">Warm holiday regards,</p>
                                      <p style="margin-top: 4px; color: #ffd700; font-weight: bold; font-family: Georgia, serif;">The Callahan Family</p>
                                  </td>
                              </tr>

                              <!-- Footer -->
                              <tr>
                                  <td style="background-color: #0d2115; padding: 25px; text-align: center; border-top: 1px solid #234e35;">
                                      <p style="margin: 0; color: #8fa89b; font-size: 12px; font-family: monospace;">
                                          🎄 Merry Christmas & Happy New Year! 🎄
                                      </p>
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
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'RSVP processed successfully' }),
    };

  } catch (error) {
    console.error('RSVP Submission Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing your RSVP request' }),
    };
  }
};