import { useNavigate } from "react-router-dom";

const actions = [
  { label: "חיוג", icon: "📞", link: "tel:050-1234567" },
  { label: "שיתוף", icon: "🔗", link: "#" },
];

export default function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-8 flex-wrap sm:flex-nowrap">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.link}
          className="flex items-center justify-center w-36 h-12 px-4 rounded-full bg-gray-300 border border-black shadow hover:bg-gray-400 transition"
        >
          <span className="text-lg mr-2">{action.icon}</span>
          <span className="text-sm font-medium">{action.label}</span>
        </a>
      ))}

      {/* כפתור יצירת קשר */}
      <button
        onClick={() => navigate("/contact")}
        className="flex items-center justify-center w-36 h-12 px-4 rounded-full bg-gray-300 border border-black shadow hover:bg-gray-400 transition"
      >
        <span className="text-lg mr-2">✉️</span>
        <span className="text-sm font-medium">יצירת קשר</span>
      </button>
    </div>
  );
}
