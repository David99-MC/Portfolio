function Button({ children, to }: { children: React.ReactNode; to?: string }) {
  const className = "rounded-md bg-black font-medium text-white px-5 py-3";
  if (to) {
    return (
      <div>
        <a
          href={to}
          className={className}
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
