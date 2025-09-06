import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
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
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg font-semibold mb-4 text-green-600">
          הפרטים נשלחו בהצלחה!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-full bg-gray-300 border border-black shadow hover:bg-gray-400 transition"
        >
          חזרה לדף הבית
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-bold mb-2">יצירת קשר</h2>

        <input
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />

        <input
          name="phone"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="מייל"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="תיאור הפנייה"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded h-24"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 rounded-full bg-gray-300 border border-black shadow hover:bg-gray-400 transition disabled:opacity-60"
        >
          {status === "loading" ? "שולח..." : "שלח"}
        </button>

        {status === "error" && (
          <p className="text-red-600 text-sm text-center">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
