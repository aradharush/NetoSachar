"use server"

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, subject, message }]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      throw new Error("Failed to save to database");
    }

    await resend.emails.send({
      from: "Neto Sachar Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `פנייה חדשה מאתר נטו שכר: ${subject}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פנייה חדשה התקבלה מהאתר</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל לחזרה:</strong> ${email}</p>
          <p><strong>נושא:</strong> ${subject}</p>
          <p><strong>הודעה:</strong><br/>${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return { success: false, error: "אירעה שגיאה בשליחת הטופס" };
  }
}