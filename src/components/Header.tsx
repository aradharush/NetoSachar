export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-4 bg-white shadow px-2">
      <div className="flex items-center justify-center gap-2 mb-2 w-full">
        <img
          src="/logo.png"
          alt="נטו שכר"
          className="w-[40%] max-w-[200px] h-auto object-contain rounded-full"
        />
        <img
          src="/logopensia.png"
          alt="פנסיה"
          className="w-[40%] max-w-[200px] h-auto object-contain rounded-full"
        />
      </div>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 text-center">
        נטו שכר
      </h1>
    </header>
  );
}
