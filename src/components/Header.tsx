export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-4 bg-white shadow">
      <div className="flex items-center gap-4 mb-2">
        <img
          src="/logo.png"
          alt="נטו שכר"
          className="h-12 w-12 object-cover rounded-full"
        />
        <img
          src="/logopensia.png"
          alt="פנסיה"
          className="h-12 w-12 object-cover rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold text-blue-600">נטו שכר</h1>
    </header>
  );
}
