import mongoose from "mongoose";

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
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const newContact = new Contact(req.body);
      const saved = await newContact.save();
      return res.status(201).json(saved);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else if (req.method === "GET") {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
