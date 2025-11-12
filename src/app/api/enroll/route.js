import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phonenumber,
      experience,
      learn,
      sessionType,
      message,
    } = await req.json();

    // basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: name or email" },
        { status: 400 }
      );
    }

    // Configure transporter
    // Set EMAIL_SECURE to "true" if you're using port 465. Otherwise "false".
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // for development on some hosts you can keep this false
      tls: { rejectUnauthorized: false }
    });

    // Build admin HTML for lead (includes all fields)
    const learnListHtml = Array.isArray(learn)
      ? `<ul style="margin:6px 0 0;padding-left:18px;">${learn
          .map((l) => `<li>${l}</li>`)
          .join("")}</ul>`
      : `<div>${String(learn || "")}</div>`;

    const adminHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#111;">
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phonenumber || "—"}</p>
        <p><strong>Experience:</strong> ${experience || "—"}</p>
        <p><strong>Preferred Session Type:</strong> ${sessionType || "—"}</p>
        <p><strong>What they want to learn:</strong> ${learnListHtml}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:12px;border-radius:8px;background:#f4f4f6;">${message ||
          "—"}</div>
        <hr />
        <p style="font-size:12px;color:#666;">Automated lead — please follow up promptly.</p>
      </div>
    `;

    // Send admin email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // admin inbox
      subject: `New lead: ${name} — ${sessionType || "Inquiry"}`,
      text: `New lead from ${name} <${email}>`,
      html: adminHtml,
    });

    // User thank you email (simple but professional)
    const userHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#111;">
        <h2>Thanks for contacting FlipTrade Group, ${name}!</h2>
        <p>We received your request and one of our specialists will get back to you shortly.</p>
        <p><strong>Summary of your submission:</strong></p>
        <ul>
          <li><strong>Phone:</strong> ${phonenumber || "—"}</li>
          <li><strong>Experience:</strong> ${experience || "—"}</li>
          <li><strong>Session Type:</strong> ${sessionType || "—"}</li>
          <li><strong>Topics:</strong> ${Array.isArray(learn) ? learn.join(", ") : learn || "—"}</li>
        </ul>
        <p>Message you sent:</p>
        <div style="padding:12px;border-radius:8px;background:#f4f4f6;">${message ||
          "—"}</div>
        <p>Talk soon,<br/>Team FlipTrade</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks — we received your request",
      text: `Hi ${name}, thanks! We received your request and will be in touch shortly.`,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: String(error) },
      { status: 500 }
    );
  }
}
