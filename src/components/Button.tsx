function Button({ children, to }: { children: React.ReactNode; to?: string }) {
  const shadow = "hover:shadow-pastel-yellow hover:shadow-solid";
  const className =
    "rounded-md bg-black font-medium text-white px-5 py-3" + shadow;
  if (to) {
    return (
      <div className="">
        <a
          href={to}
          className="rounded-md bg-black font-medium text-white px-5 py-3 hover:shadow-pastel-yellow hover:shadow-solid transition-all duration-100"
          {...(!to.startsWith("#") ? { target: "_blank" } : {})}
        >
          {children}
        </a>
      </div>
    );
  }
  return <button className={className}>{children}</button>;
}

export default Button;
