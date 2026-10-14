import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  validateContactForm,
} from "@/lib/contactValidation";

import {
  contactRateLimit,
} from "@/lib/contactRateLimit";

import {
  buildContactEmail,
} from "@/lib/contactEmail";

const resend =
  new Resend(
    process.env.RESEND_API_KEY
  );

function getClientIp(request) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    return (
      forwardedFor
        .split(",")[0]
        ?.trim() || "unknown"
    );
  }

  return (
    request.headers.get(
      "x-real-ip"
    ) || "unknown"
  );
}

export async function POST(request) {
  try {
    const body = await request.json();

    /*
     * Honeypot.
     * Los usuarios reales nunca deben
     * completar este campo.
     */
    if (body.website) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }

    const ip = getClientIp(request);

    const rateLimitResult =
      await contactRateLimit.limit(ip);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          message:
            "Too many requests. Please try again in a few minutes.",
        },
        {
          status: 429,
        }
      );
    }

    const errors =
      validateContactForm(body);

    if (
      Object.keys(errors).length > 0
    ) {
      return NextResponse.json(
        {
          message:
            "Please review the form fields.",
          errors,
        },
        {
          status: 400,
        }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL;

    const toEmail =
      process.env.CONTACT_TO_EMAIL;

    if (
      !fromEmail ||
      !toEmail
    ) {
      console.error(
        "Contact email environment variables are missing."
      );

      return NextResponse.json(
        {
          message:
            "Contact service is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    const email =
      buildContactEmail(body);

    const {
      data,
      error,
    } =
      await resend.emails.send({
        from:
          `Sound Fusion Website <${fromEmail}>`,

        to: [toEmail],

        replyTo:
          body.email.trim(),

        subject:
          email.subject,

        text:
          email.text,
      });

    if (error) {
      console.error(
        "Resend contact error:",
        error
      );

      return NextResponse.json(
        {
          message:
            "Unable to send your request. Please try again.",
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
        message:
          "Your request has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your request.",
      },
      {
        status: 500,
      }
    );
  }
}