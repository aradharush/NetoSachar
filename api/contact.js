import mongoose from "mongoose";
import sgMail from "@sendgrid/mail";

const MONGODB_URI = process.env.MONGODB_URI;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_USER = process.env.EMAIL_USER;

sgMail.setApiKey(SENDGRID_API_KEY);

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(m => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      // שמירה במסד הנתונים
      const newContact = new Contact(req.body);
      const saved = await newContact.save();

      // שליחת מייל עם SendGrid
      const msg = {
        to: EMAIL_USER,   // כתובת שמקבלת את הפניות
        from: EMAIL_USER, // חייב להיות הכתובת המאומתת ב-SendGrid
        subject: `פנייה חדשה מ-${saved.name}`,
        text: `
שם: ${saved.name}
טלפון: ${saved.phone || "-"}
מייל: ${saved.email}
הודעה: ${saved.message}
        `
      };

      await sgMail.send(msg);

      return res.status(201).json(saved);
    } catch (err) {
      console.error("Error sending contact:", err.response?.body || err.message || err);
      return res.status(500).json({ error: "שגיאה בשליחת הפנייה" });
    }
  } else if (req.method === "GET") {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
