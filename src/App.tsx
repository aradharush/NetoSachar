import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import VideosPage from "./pages/VideoPage"; // דף הסרטונים שלך

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/videos" element={<VideosPage />} /> {/* כאן */}
      </Routes>
    </Router>
  );
}

export default App;
