function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-md bg-black font-medium text-white w-36 h-12">
      {children}
    </button>
  );
}

export default Button;
