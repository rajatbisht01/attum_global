import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log("Incoming request payload:", { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      console.warn("Validation failed: Missing required fields");
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    const msg = {
      to: `${process.env.RECEIVER_EMAIL}`,
      from: `${process.env.SENDER_EMAIL}`,
      replyTo: `${email}`,
      subject: `[Contact Form] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    console.log("Prepared SendGrid message:", {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
    });

    const response = await sgMail.send(msg);
    console.log("SendGrid response:", response);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("SendGrid error:", err.response ? err.response.body : err);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
