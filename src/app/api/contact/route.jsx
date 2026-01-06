import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    // Create transporter using your Namecheap email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER, // Your Namecheap email
        pass: process.env.EMAIL_PASSWORD // Your email password
      }
    });

    // Email content
    const mailOptions = {
      from: 'info@toausibconsulting.com',
      to: 'info@toausibconsulting.com', // Where you want to receive emails
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong style="color: #1e3a8a;">Name:</strong> ${name}</p>
            <p><strong style="color: #1e3a8a;">Email:</strong> ${email}</p>
            <p><strong style="color: #1e3a8a;">Phone:</strong> ${phone}</p>
            <p><strong style="color: #1e3a8a;">Company:</strong> ${company || 'Not provided'}</p>
            <p><strong style="color: #1e3a8a;">Service:</strong> ${service}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e3a8a;">Message:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #f59e0b;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the contact form on toausibconsulting.com</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}