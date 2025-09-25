import { Link } from "react-router-dom";

const infoLinks = [
  { label: "אודות החברה", link: "/about" },
  { label: "סיפורי לקוחות", link: "/stories" },
  { label: "סרטוני הדרכה", link: "/videospage" },
  { label: "סריקת קוד", link: "/scan" },
];

export default function InfoButtons() {
  return (
    <div className="info-buttons-container">
      {infoLinks.map((info) => (
        <Link
          key={info.label}
          to={info.link}
          className="info-button"
        >
          {info.label}
        </Link>
      ))}
    </div>
  );
}
