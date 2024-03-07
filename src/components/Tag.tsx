function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F9EFE7] px-3 py-1 text-nowrap text-sm font-medium">
      {children}
    </div>
  );
}

export default Tag;
