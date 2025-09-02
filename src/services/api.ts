// api.ts
const API_URL = "https://neto-sachar.vercel.app/api/contacts";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export async function sendContact(data: ContactData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
