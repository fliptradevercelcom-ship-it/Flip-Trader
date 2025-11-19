import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, phonenumber } = await req.json();

        if (!name || !email || !phonenumber) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: { rejectUnauthorized: false }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Promo Lead Received on FlipTrade`,
            html: `
       <table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#0d061f;font-family:'Segoe UI',Arial,sans-serif;color:#f5f5ff;">
  <tr>
    <td align="center" style="padding:40px 16px;">

      <!-- Main Card -->
      <table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#15112b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(34,11,78,0.35);">

        <!-- Header -->
        <tr>
          <td align="center" style="padding:32px;background:linear-gradient(135deg,#7c1eff,#c165ff);">
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">
              Forwarded Promo Lead
            </h1>
            <p style="margin:8px 0 0;font-size:16px;color:rgba(255,255,255,0.82);">
              A new promo lead has been forwarded to you
            </p>
          </td>
        </tr>

        <!-- Details Section -->
        <tr>
          <td style="padding:32px;background:#15112b;">

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Name:</strong> ${name}
            </p>

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Email:</strong> ${email}
            </p>

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Phone:</strong> ${phonenumber}
            </p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px;background:#0f0a24;text-align:center;font-size:13px;color:rgba(255,255,255,0.45);">
            FlipTrade — New Promo Lead Notification
          </td>
        </tr>

      </table>

    </td>
  </tr>
  <div  style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">
    Lead From Promo Page <a href='https://fliptradegroup.com/promo' target='_blank' />
  </div>
</table>

      `
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_B2B,
            subject: `New Promo Lead Received on FlipTrade`,
            html: `
       <table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#0d061f;font-family:'Segoe UI',Arial,sans-serif;color:#f5f5ff;">
  <tr>
    <td align="center" style="padding:40px 16px;">

      <!-- Main Card -->
      <table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#15112b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(34,11,78,0.35);">

        <!-- Header -->
        <tr>
          <td align="center" style="padding:32px;background:linear-gradient(135deg,#7c1eff,#c165ff);">
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">
              Forwarded Promo Lead
            </h1>
            <p style="margin:8px 0 0;font-size:16px;color:rgba(255,255,255,0.82);">
              A new promo lead has been forwarded to you
            </p>
          </td>
        </tr>

        <!-- Details Section -->
        <tr>
          <td style="padding:32px;background:#15112b;">

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Name:</strong> ${name}
            </p>

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Email:</strong> ${email}
            </p>

            <p style="margin:0 0 15px;font-size:16px;line-height:1.7;color:#fff;">
              <strong style="color:#b078ff;">Phone:</strong> ${phonenumber}
            </p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px;background:#0f0a24;text-align:center;font-size:13px;color:rgba(255,255,255,0.45);">
            FlipTrade — New Promo Lead Notification
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

      `
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "We’ve Received Your Request",
            html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#0d061f;font-family:'Segoe UI',Arial,sans-serif;color:#f5f5ff;">
          <tr>
            <td align="center" style="padding:40px 16px;">
              <table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#15112b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(34,11,78,0.35);">
                <tr>
                  <td align="center" style="padding:32px;background:linear-gradient(135deg,#5813f5,#9d45ff);">
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">Thank You, ${name}</h1>
                    <p style="margin:8px 0 0;font-size:16px;color:rgba(255,255,255,0.82);">
                      Your promo request has been received
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;background:#15112b;">
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:rgba(245,245,255,0.9);">
                      Thanks for claiming your $500 bonus! Our team will call you shortly to activate your reward.
                    </p>
                    <p style="margin:26px 0 0;font-size:16px;line-height:1.7;color:rgba(245,245,255,0.9);">
                      Talk soon,<br>
                      <strong style="color:#ffffff;">Team FlipTrade</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px;background:#0f0a24;text-align:center;font-size:13px;color:rgba(255,255,255,0.45);">
                    Need help? Contact us anytime.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
            `
        });

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.log("Promo Email Error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
