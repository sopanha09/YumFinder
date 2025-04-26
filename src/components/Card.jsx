export function Card({ children }) {
  return (
    <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {children}
    </div>
  );
}
