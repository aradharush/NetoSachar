export default function FooterBar() {
  return (
    <footer className="bg-gray-100 shadow-inner w-full p-4 flex justify-center gap-12">
      <a
        href="https://wa.me/+972502812405"
        target="_blank"
        rel="noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="/images/whatsapp.png"
          className="w-[35px] h-[35px] object-contain"
          alt="WhatsApp"
        />
      </a>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <a
        href="https://www.facebook.com/share/16W8enzMW5/?mibextid=wwXIfr"
        target="_blank"
        rel="noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="/images/facebook.png"
          className="w-[35px] h-[35px] object-contain"
          alt="Facebook"
        />
      </a>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <label>&nbsp;</label>
      <a
        href="https://www.instagram.com/neto.sachar"
        target="_blank"
        rel="noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="/images/instagram.png"
          className="w-[35px] h-[35px] object-contain"
          alt="Instagram"
        />
      </a>
    </footer>
  );
}
