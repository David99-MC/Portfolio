import Footer from "./Footer";
import MainContent from "./MainContent";

function AppLayout() {
  return (
    <>
      <div className="grid h-dvh grid-rows-[1fr_auto]">
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
