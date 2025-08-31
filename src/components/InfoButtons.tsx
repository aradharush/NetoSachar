const infoLinks = [
  { label: "אודות החברה", link: "/about" },
  { label: "סיפורי לקוחות", link: "/stories" },
  { label: "סרטוני הדרכה", link: "/videos" },
  { label: "סריקת קוד", link: "/scan" },
];

export default function InfoButtons() {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {infoLinks.map((info) => (
        <a
          key={info.label}
          href={info.link}
          className="w-64 h-12 flex items-center justify-center bg-gray-300 border border-black rounded-lg text-center font-semibold text-black shadow hover:bg-gray-400 transition"
        >
          {info.label}
        </a>
      ))}
    </div>
  );
}
