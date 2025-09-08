const infoLinks = [
  { label: "אודות החברה", link: "/about" },
  { label: "סיפורי לקוחות", link: "/stories" },
  { label: "סרטוני הדרכה", link: "/videos" },
  { label: "סריקת קוד", link: "/scan" },
];

export default function InfoButtons() {
  return (
    <div className="info-buttons-container">
      {infoLinks.map((info) => (
        <a
          key={info.label}
          href={info.link}
          className="info-button"
        >
          {info.label}
        </a>
      ))}
    </div>
  );
}
