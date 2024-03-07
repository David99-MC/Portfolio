import Button from "./Button";
import Header from "./Header";

function MainContent() {
  return (
    <div className="relative">
      <Header />
      <div className="border-solid grid grid-cols-2 border-black border-b-2 border-l-2 ">
        <div className="bg-pastel-blue col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2 h-dvh">
          <div className="p-5 lg:p-20 space-y-7">
            <h1 className="lg:text-5xl font-bold w-full text-5xl tracking-tight">
              Hi, I'm Buu, Web designer and Web developer
            </h1>
            <p className="w-5/6 sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <Button>See my work</Button>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 border-solid border-black border-r-2 border-b-2">
          2
        </div>
        <div className="bg-pastel-yellow col-span-2 border-solid border-black border-b-2 border-r-2">
          <div className="flex md:flex-row flex-col md:space-x-60 lg:space-x-96 my-5 p-5 lg:px-20">
            <div className="text-3xl mt-4 font-extrabold text-nowrap">
              What I do
            </div>
            <div className="flex flex-col space-y-10">
              <div className="ms-0 md:ms-20 xl:ms-60">
                <h3 className="mt-5 text-2xl text-wrap font-bold mb-3">
                  Design
                </h3>
                <p className="text-base sm:text-lg tracking-wide leading-relaxed w-5/6 lg:w-11/12 xl:w-10/12">
                  I design beautiful and powerful websites for modern
                  businesses. Any business today needs a website that wins
                  customers’ trust and helps you do your business well. I make
                  sure your website is up to that standard.
                </p>
              </div>
              <div className="ms-0 md:ms-20 xl:ms-60">
                <h3 className="text-2xl text-wrap font-bold mb-3">
                  Development
                </h3>
                <p className="text-base sm:text-lg tracking-wide leading-relaxed w-5/6 lg:w-11/12 xl:w-10/12">
                  I build fast, responsive and effective websites. I use modern
                  technologies to make sure your website is easily accessible
                  from any device. I make sure your website is built for
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2 h-dvh">
          <div className="p-5 lg:p-20 space-y-7">
            <h1 className="lg:text-5xl font-bold w-full text-5xl tracking-tight">
              Employee management website
            </h1>
            <p className="w-5/6 sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              Full website design and build for a restaurant. This website
              bridged the communication gap between the employees and the
              management. It also offered a real-time notifications system for
              the employees through Safari.
            </p>
            <Button>See this project</Button>
          </div>
        </div>
        <div className="bg-pastel-blue col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2">
          5
        </div>
        <div className="bg-pastel-pink col-span-2 md:col-span-1 border-solid border-black border-r-2">
          6
        </div>
        <div className="col-span-2 md:col-span-1 border-solid border-black border-r-2 h-dvh">
          <div className="p-5 lg:p-20 space-y-7">
            <h1 className="lg:text-5xl font-bold w-full text-5xl tracking-tight">
              Hi, I'm Buu, Web designer and Web developer
            </h1>
            <p className="w-5/6 sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <Button>See my work</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
