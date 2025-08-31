export default function FooterBar() {
  return (
    <footer className="bg-gray-100 shadow-inner w-full p-4 flex justify-center gap-6">
      <a
        href="https://wa.me/0502812405"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/images/whatsapp.png"
          className="w-[25px] h-[25px] object-contain"
          alt="WhatsApp"
        />
      </a>
      <a
        href="https://www.facebook.com/share/16W8enzMW5/?mibextid=wwXIfr"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/images/facebook.png"
          className="w-[25px] h-[25px] object-contain"
          alt="Facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/neto.sachar"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="/images/instagram.png"
          className="w-[25px] h-[25px] object-contain"
          alt="Instagram"
        />
      </a>
    </footer>
  );
}
