import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    // Send a simple test email
    const { data, error } = await resend.emails.send({
      from: 'StynerDev Test <contact@styner.dev>',
      to: ['contact@styner.dev'],
      subject: 'Resend Integration Test',
      html: `
        <h2>✅ Email Integration Test Successful</h2>
        <p>This is a test email to verify that Resend integration is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Status:</strong> Email functionality is working!</p>
      `,
    });

    if (error) {
      console.error('Resend test error:', error);
      return NextResponse.json(
        { error: 'Test email failed', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Test email sent successfully', 
        id: data?.id,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { error: 'Test failed', details: error },
      { status: 500 }
    );
  }
}
