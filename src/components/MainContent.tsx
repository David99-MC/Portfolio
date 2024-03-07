import Button from "./Button";
import Header from "./Header";
import Tag from "./Tag";
import WorkRelevant from "./WorkRelevant";

function MainContent() {
  return (
    <div className="relative">
      <Header />
      <div className="border-solid grid grid-cols-2 border-black border-b-2 border-l-2 ">
        <div className="bg-pastel-blue col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2 w-dvw md:w-full">
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-7">
            <h1 className="lg:text-5xl font-bold w-full text-4xl tracking-tight">
              Hi, I'm Buu, Web designer and Web developer
            </h1>
            <p className="w-5/6 sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              I design and build beautiful websites for businesses around the
              globe. If you need a modern and powerful website, send me an
              email. If we are a good fit, I will give you a time and cost
              estimate.
            </p>
            <Button to="#myWork">See my work</Button>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 border-solid border-black border-r-2 border-b-2">
          <img
            src="/images/Avatar-cropped.jpg"
            alt="profile picture"
            className="w-full h-full object-cover object-center p-1.5"
          />
        </div>
        <div className="bg-pastel-yellow col-span-2 border-solid border-black border-b-2 border-r-2">
          <div className="flex md:flex-row flex-col md:space-x-60 lg:space-x-96 my-5 p-10 lg:px-20">
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
        <div
          id="myWork"
          className="col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2 "
        >
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-7">
            <WorkRelevant>latest work</WorkRelevant>
            <h1 className="lg:text-5xl font-bold w-full text-5xl tracking-tight">
              Employee management website
            </h1>
            <div className="flex flex-wrap gap-3">
              <Tag>Web Design</Tag>
              <Tag>Web Development</Tag>
              <Tag>Concept</Tag>
            </div>
            <p className="w-full sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              Full website design and build for a restaurant. This website
              bridged the communication gap between the employees and the
              management. It also offered a real-time notifications system for
              the employees through Safari.
            </p>
            <p className="w-full sm:w-9/12 text-sm font-medium italic text-slate-500 tracking-wide leading-relaxed">
              Due to the nature of the project, I am unable to provide a link to
              this project. However, I am happy to discuss the project in more
              detail.
            </p>
          </div>
        </div>
        <div className="bg-pastel-blue col-span-2 md:col-span-1 border-solid border-black border-b-2 border-r-2">
          <img
            src="/images/HappyBaosDemo.jpg"
            alt="profile picture"
            className="w-full h-full object-scale-down object-center p-1.5"
          />
        </div>

        <div className="col-span-2 md:col-span-1 border-solid border-black border-r-2">
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-7">
            <WorkRelevant>latest work</WorkRelevant>
            <h1 className="lg:text-5xl font-bold w-full text-5xl tracking-tight">
              The Lam's Bakery
            </h1>
            <div className="flex gap-3">
              <Tag>Web Design</Tag>
              <Tag>Fullstack MERN development</Tag>
            </div>
            <p className="w-full sm:w-9/12 text-base sm:text-lg tracking-wide leading-relaxed">
              A highly responsive e-commerce platform, focusing on mobile-first
              design principles and implementing advanced CRUD operations for
              seamless product management.
            </p>
            <Button to="https://github.com/David99-MC/TheLams_Bakery">
              See this project
            </Button>
          </div>
        </div>
        <div className="bg-pastel-pink col-span-2 md:col-span-1 border-solid border-black border-r-2">
          <img
            src="/images/TheLamsBakeryDemo.jpg"
            alt="profile picture"
            className="w-full h-full object-scale-down object-center p-1.5"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
