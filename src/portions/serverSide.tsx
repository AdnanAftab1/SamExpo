"use server";

import axios from "axios";

export async function sendmessage(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  const form = `
  name: ${name},
  phone: ${phone},
  email: ${email},
  message: ${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN||""}/sendMessage`, {
      chat_id: "1930192958",
      text: form,
    });

    return { success: true, message: `Thanks ${name}, I will reach out to you soon!` };
  } catch (error) {
    console.error("Telegram error:", error);
    return { success: false, message: `Sorry ${name}, there was an error.` };
  }
}