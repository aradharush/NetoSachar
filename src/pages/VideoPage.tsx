import { useRef } from "react";
import Header from "../components/Header"; // ודא שהנתיב נכון

const videos = [
  { title: "וידאו 1", src: "/videos/tlush.mp4" },
  { title: "וידאו 2", src: "/videos/teachers.mp4" },
];

export default function VideosPage() {
  // שמור רפרנסים לכל הסרטונים
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause(); // עצור כל וידאו אחר
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* תוכן */}
      <div className="flex flex-col items-center px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">סרטוני הדרכה</h1>

        <div className="grid gap-8 w-full">
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-lg font-semibold mb-4">{video.title}</h2>
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                className="w-1/2 mx-auto rounded-lg"
                controls
                poster="/images/video-placeholder.png"
                preload="none"
                onPlay={() => handlePlay(index)} // 👈 כשנגן מתחיל לנגן
              >
                <source src={video.src} type="video/mp4" />
                הדפדפן שלך לא תומך בוידאו.
              </video>
              <label>&nbsp;</label>
              <label>&nbsp;</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
