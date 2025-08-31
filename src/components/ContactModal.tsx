import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; phone: string; email: string; message: string }) => void;
}

export default function ContactModal({ isOpen, onClose, onSubmit }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email, message });
    setName(""); setPhone(""); setEmail(""); setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-bold mb-4 text-center">יצירת קשר</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="שם מלא" className="border rounded-lg p-2" value={name} onChange={e => setName(e.target.value)} required />
          <input type="tel" placeholder="טלפון" className="border rounded-lg p-2" value={phone} onChange={e => setPhone(e.target.value)} required />
          <input type="email" placeholder="אימייל" className="border rounded-lg p-2" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea placeholder="תיאור הפנייה" rows={3} className="border rounded-lg p-2" value={message} onChange={e => setMessage(e.target.value)} required />
          <button type="submit" className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">שלח</button>
        </form>
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-gray-700">✕</button>
      </div>
    </div>
  );
}
