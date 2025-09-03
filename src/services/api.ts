const API_URL = "/api/contact";


interface ContactData {
  name: string;
  email: string;
  message: string;
}

export async function sendContact(data: ContactData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
}
