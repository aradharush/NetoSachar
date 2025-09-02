
import Header from "../components/Header";
import ActionButtons from "../components/ActionButtons";
import InfoButtons from "../components/InfoButtons";
import FooterBar from "../components/FooterBar";


export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* תוכן הדף */}
      <main className="flex flex-col items-center p-4 gap-6 flex-1">
        {/* כפתורי פעולה */}
        <ActionButtons />

        {/* מלל קצר */}
        <div className="text-center max-w-xl">
          <p className="text-gray-700">
            ברוכים הבאים לנטו שכר! כאן תוכלו למצוא מידע, סרטונים ודרכי יצירת קשר.
          </p>
        </div>

        {/* כפתורי מידע מלבניים */}
        <InfoButtons />
      </main>

      {/* Footer – תמיד אחרי התוכן */}
      <FooterBar />


    </div>
  );
}
