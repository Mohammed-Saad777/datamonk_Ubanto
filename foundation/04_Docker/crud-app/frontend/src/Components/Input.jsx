const Input = ({ label, type = "text", name, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        placeholder=" "
        className="peer block w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 pt-4 pb-2 text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-colors"
      />
      <label
        className="absolute left-3 -top-2 px-1 bg-neutral-900 text-sm text-neutral-400 transition-all
        peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:bg-neutral-900 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
