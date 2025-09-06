import mongoose from "mongoose";
import nodemailer from "nodemailer";

const MONGODB_URI = process.env.MONGODB_URI;

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
  phone: String, // הוספתי שדה phone
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      // 1️⃣ שמירה במסד הנתונים
      const newContact = new Contact(req.body);
      const saved = await newContact.save();

      // 2️⃣ שליחת מייל
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // או שרת SMTP אחר
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER, // המייל שלך
          pass: process.env.EMAIL_PASS  // App Password
        }
      });

      const mailOptions = {
        from: `"Neto Sachar Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // שולח לעצמך
        subject: `פנייה חדשה מ-${saved.name}`,
        text: `
            שם: ${saved.name}
            טלפון: ${saved.phone || "-"}
            מייל: ${saved.email}
            הודעה: ${saved.message}
                    `
      };

      await transporter.sendMail(mailOptions);

      return res.status(201).json(saved);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message || "שגיאה בשליחת הפנייה" });
    }
  } else if (req.method === "GET") {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
