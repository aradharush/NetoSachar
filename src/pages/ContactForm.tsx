import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Request failed");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "שגיאה בשליחה");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full mx-auto">
          <p className="text-3xl font-bold text-green-500 mb-4">✔</p>
          <p className="text-lg font-semibold text-gray-800">
            הפרטים נשלחו בהצלחה!
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            חזרה לדף הבית
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start py-8 px-4">
      {/* Header */}
      <div className="max-w-2xl w-full">
        <Header />
      </div>

      {/* Form container */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
          יצירת קשר
        </h2>

        {/* The form itself remains wide */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl w-full">
          {/* שם מלא */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold mb-1 text-right">
              שם מלא
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-xl w-full focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* טלפון */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 font-semibold mb-1 text-right">
              טלפון
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-xl w-full focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* אימייל */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1 text-right">
              מייל
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-xl w-full focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* הודעה */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold mb-1 text-right">
              תיאור הפנייה
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 p-3 rounded-xl h-36 w-full resize-none focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* הודעה */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold mb-1">
                 &nbsp;
            </label>
          </div>

          {/* כפתור שליחה */}
          <button
            type="submit"
            disabled={status === "loading"}
            // הוספת רוחב קבוע והקטנה שלו, הוספת mx-auto למרכוז, והגדלת הרווח שמעליו
            className="w-40 px-6 py-3 mt-6 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
          >
            {status === "loading" ? "שולח..." : "שלח"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center mt-2">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}