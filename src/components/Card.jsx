export function Card({ children }) {
  return (
    <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow hover:scale-115 duration-500 hover:border-gray-100 bg-white p-4">
      {children}
    </div>
  );
}
