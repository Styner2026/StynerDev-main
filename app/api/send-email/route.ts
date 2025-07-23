import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'StynerDev Contact Form <contact@styner.dev>',
      to: ['contact@styner.dev'],
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #ff6347 0%, #e5573e 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                Someone has reached out through your website
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <!-- Contact Information -->
              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ff6347;">
                <h2 style="margin: 0 0 20px 0; color: #333; font-size: 20px;">Contact Information</h2>
                <div style="margin-bottom: 12px;">
                  <strong style="color: #ff6347; display: inline-block; width: 80px;">Name:</strong>
                  <span style="color: #333;">${name}</span>
                </div>
                <div style="margin-bottom: 12px;">
                  <strong style="color: #ff6347; display: inline-block; width: 80px;">Email:</strong>
                  <a href="mailto:${email}" style="color: #ff6347; text-decoration: none;">${email}</a>
                </div>
                <div>
                  <strong style="color: #ff6347; display: inline-block; width: 80px;">Subject:</strong>
                  <span style="color: #333;">${subject}</span>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background-color: white; padding: 25px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #333; font-size: 20px;">Message</h2>
                <div style="line-height: 1.6; color: #555; font-size: 16px; white-space: pre-wrap;">${message}</div>
              </div>
              
              <!-- Quick Actions -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #ff6347; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">
                  Reply via Email
                </a>
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background-color: #333; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Quick Reply
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This email was sent from the contact form on 
                <a href="https://styner.dev" style="color: #ff6347; text-decoration: none;">styner.dev</a>
              </p>
              <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
                Sent on ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data?.id);
    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        id: data?.id,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
