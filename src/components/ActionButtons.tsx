import { useNavigate } from "react-router-dom";

export default function ActionButtons() {
  const navigate = useNavigate();

  // פונקציית שיתוף
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "בדוק את האתר הזה!",
          url: window.location.href,
        });
        console.log("המשתמש שיתף את האתר בהצלחה!");
      } catch (err) {
        console.error("שיתוף נכשל:", err);
      }
    } else {
      alert(
        "שיתוף לא נתמך בדפדפן שלך, העתק את הקישור ידנית: " +
          window.location.href
      );
    }
  };

  // פונקציית חיוג
  const handleCall = () => {
    window.location.href = "tel:050-2812405";
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {/* כפתור חיוג */}
      <button
        onClick={handleCall}
        className="flex items-center justify-center min-w-[150px] flex-1 max-w-xs h-12 px-6 py-2 rounded-full bg-blue-500 text-white border border-black shadow hover:bg-blue-600 transition"
      >
        <span className="text-lg mr-2">📞</span>
        <span className="text-sm font-medium">חיוג</span>
      </button>

      {/* כפתור שיתוף */}
      <button
        onClick={handleShare}
        className="flex items-center justify-center min-w-[150px] flex-1 max-w-xs h-12 px-6 py-2 rounded-full bg-blue-500 text-white border border-black shadow hover:bg-blue-600 transition"
      >
        <span className="text-lg mr-2">🔗</span>
        <span className="text-sm font-medium">שיתוף</span>
      </button>

      {/* כפתור יצירת קשר */}
      <button
        onClick={() => navigate("/contact")}
        className="flex items-center justify-center min-w-[150px] flex-1 max-w-xs h-12 px-6 py-2 rounded-full bg-blue-500 text-white border border-black shadow hover:bg-blue-600 transition"
      >
        <span className="text-lg mr-2">✉️</span>
        <span className="text-sm font-medium">יצירת קשר</span>
      </button>
    </div>
  );
}
