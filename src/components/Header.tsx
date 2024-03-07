function Header() {
  return (
    <header className="flex border-solid border-black border-2 items-center justify-between sticky top-0 bg-white">
      <p className="ms-3 md:ms-10 text-xl md:text-3xl font-mono font-bold tracking-[0.2em]">
        BUULAM.
      </p>
      <div className="flex">
        <a
          href="#myWork"
          className="border-solid border-black border-x-2 text-base md:text-lg bg-white hover:bg-pastel-blue p-2 md:py-6 md:px-7"
        >
          My work
        </a>
        <a
          href="mailto:buuquoclam@gmail.com"
          className="border-solid border-black bg-black text-base md:text-lg text-white hover:bg-pastel-blue p-2 px-4 md:py-6 md:px-9 font-medium"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export default Header;
