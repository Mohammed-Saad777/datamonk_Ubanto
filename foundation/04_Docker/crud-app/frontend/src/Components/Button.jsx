export default function Button({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-2xl px-5 py-3 bg-blue-600 text-white font-medium tracking-wide 
      border border-blue-500 shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-xl 
      active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400/50 
      transition-all duration-200 w-full"
    >
      {text}
    </button>
  );
}
