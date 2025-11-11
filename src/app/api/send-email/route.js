import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true if using 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    // 1) Send to Admin (your email)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // your inbox
      subject: `You’ve just received a new lead on Flip Trade Group`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#0d061f;font-family:'Segoe UI',Arial,sans-serif;color:#f5f5ff;">
          <tr>
            <td align="center" style="padding:40px 16px;">
              <table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#15112b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(34,11,78,0.35);">
                <tr>
                  <td align="center" style="padding:32px;background:linear-gradient(135deg,#5813f5,#9d45ff);">
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">FlipTrade Group</h1>
                    <p style="margin:8px 0 0;font-size:16px;color:rgba(255,255,255,0.82);">You have a new inquiry waiting</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 32px 12px;background:#15112b;">
                    <h2 style="margin:0 0 16px;font-size:22px;color:#f5f5ff;">Lead Details</h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 12px;">
                      <tr>
                        <td width="150" style="padding:16px;border-radius:14px;background:#1d1840;font-size:14px;font-weight:600;color:#a386ff;">Name</td>
                        <td style="padding:16px;border-radius:14px;background:#130d2d;font-size:15px;color:#ffffff;">${name}</td>
                      </tr>
                      <tr>
                        <td width="150" style="padding:16px;border-radius:14px;background:#1d1840;font-size:14px;font-weight:600;color:#a386ff;">Email</td>
                        <td style="padding:16px;border-radius:14px;background:#130d2d;font-size:15px;color:#ffffff;">${email}</td>
                      </tr>
                      <tr>
                        <td width="150" style="padding:16px;border-radius:14px;background:#1d1840;font-size:14px;font-weight:600;color:#a386ff;">Message</td>
                        <td style="padding:16px;border-radius:14px;background:#130d2d;font-size:15px;color:#ffffff;line-height:1.7;">${message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 32px 32px;background:#15112b;">
                    <p style="margin:0 0 18px;font-size:15px;color:rgba(245,245,255,0.8);">
                      Please follow up within the next business hours to keep the momentum strong and provide a premium onboarding experience.
                    </p>
                    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        <td style="padding:0;">
                          <a href="mailto:${email}" style="display:inline-block;padding:14px 26px;background:linear-gradient(135deg,#6a2eff,#b964ff);border-radius:30px;color:#ffffff;font-weight:600;text-decoration:none;letter-spacing:0.3px;">Reply Now</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px;background:#0f0a24;text-align:center;font-size:13px;color:rgba(255,255,255,0.45);">
                    FlipTrade Group • Automated Lead Desk
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `
    });

    // 2) Send Thank You email to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We’ve Received Your Request",
      text: `Hi ${name},\n\nThank you for reaching out to FlipTrade Group. Your request has been received and one of our experts will connect with you shortly to guide you through the next steps.\n\nBest regards,\nTeam FlipTrade`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#0d061f;font-family:'Segoe UI',Arial,sans-serif;color:#f5f5ff;">
          <tr>
            <td align="center" style="padding:40px 16px;">
              <table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#15112b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(34,11,78,0.35);">
                <tr>
                  <td align="center" style="padding:32px;background:linear-gradient(135deg,#5813f5,#9d45ff);">
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">Thank You, ${name}</h1>
                    <p style="margin:8px 0 0;font-size:16px;color:rgba(255,255,255,0.82);">Your message is safely with FlipTrade Group</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;background:#15112b;">
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(245,245,255,0.9);">
                      We appreciate you contacting FlipTrade Group. One of our specialists will review your request and connect with you shortly to walk you through the next steps.
                    </p>
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(245,245,255,0.9);">
                      While you wait, feel confident knowing that our platform is built around transparency, security, and 24/7 support—so you’re always in good hands.
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 26px;background:#130d2d;border-radius:16px;">
                      <tr>
                        <td style="padding:20px 24px;">
                          <h3 style="margin:0 0 8px;font-size:18px;color:#a386ff;">What happens next?</h3>
                          <ol style="margin:0;padding-left:20px;color:rgba(245,245,255,0.85);font-size:15px;line-height:1.8;">
                            <li>Our expert team reviews your message.</li>
                            <li>We reach out with tailored guidance for your goals.</li>
                          </ol>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="https://fliptradegroup.com" style="display:inline-block;padding:14px 28px;background:linear-gradient(135deg,#6a2eff,#b964ff);border-radius:30px;color:#ffffff;font-weight:600;text-decoration:none;letter-spacing:0.3px;">Explore FlipTrade</a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:26px 0 0;font-size:16px;line-height:1.7;color:rgba(245,245,255,0.9);">
                      Talk soon,<br>
                      <span style="font-weight:600;color:#ffffff;">Team FlipTrade</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px;background:#0f0a24;text-align:center;font-size:13px;color:rgba(255,255,255,0.45);">
                    Need immediate assistance? Reach us at <a href="mailto:${process.env.EMAIL_USER}" style="color:#bfa7ff;text-decoration:none;">${process.env.EMAIL_USER}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
