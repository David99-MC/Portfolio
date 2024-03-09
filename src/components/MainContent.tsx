import Button from "./Button";
import Header from "./Header";
import Tag from "./Tag";
import WorkRelevant from "./WorkRelevant";

function MainContent() {
  return (
    <div className="relative">
      <Header />
      <div className="border-solid grid grid-cols-2 border-black border-b-2 border-l-2 ">
        <div className="bg-pastel-blue col-span-2 lg:col-span-1 border-solid border-black border-b-2 border-r-2 w-full">
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-10">
            <h1 className="lg:text-5xl font-extrabold font-display w-full text-4xl tracking-tight">
              Hi, I'm Buu, Fullstack Web developer
            </h1>
            <p className="w-5/6 sm:w-9/12 pb-5 text-base lg:text-lg font-paragraph tracking-wide leading-relaxed">
              I turn any designs into beautiful websites for businesses around
              the globe. If you are ready to take your website to a new level,
              shoot me a message. If we are a good fit, I will give you a time
              and cost estimate.
            </p>
            <Button to="#myWork">See my work</Button>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 border-solid border-black border-r-2 border-b-2">
          <img
            src="/images/Avatar-cropped.jpg"
            alt="profile picture"
            className="w-full h-full object-cover object-center p-1.5"
          />
        </div>
        <div className="bg-pastel-yellow col-span-2 border-solid border-black border-b-2 border-r-2">
          <div className="flex lg:flex-row flex-col lg:space-x-64 xl:space-x-96 my-5 p-10 lg:px-20">
            <div className="text-4xl md:text-5xl mt-4 mb-5 lg:mb-0 font-extrabold font-display text-nowrap">
              What I do
            </div>
            <div className="flex flex-col space-y-10">
              <div className="ms-0 xl:ms-7 2xl:ms-32 3xl:ms-60 4xl:ms-96 5xl:ms-128 6xl:ms-144">
                <h3 className="mt-5 text-2xl text-wrap font-bold mb-3">
                  Design
                </h3>
                <p className="text-base font-paragraph lg:text-lg tracking-wide leading-relaxed w-5/6 lg:w-11/12 xl:w-10/12">
                  I design beautiful and powerful websites for modern
                  businesses. Any business today needs a website that wins
                  customers’ trust and helps you do your business well. I make
                  sure your website is up to that standard.
                </p>
              </div>
              <div className="ms-0 xl:ms-7 2xl:ms-32 3xl:ms-60 4xl:ms-96 5xl:ms-128 6xl:ms-144">
                <h3 className="text-2xl text-wrap font-bold mb-3">
                  Development
                </h3>
                <p className="text-base font-paragraph lg:text-lg tracking-wide leading-relaxed w-5/6 lg:w-11/12 xl:w-10/12">
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
          className="col-span-2 lg:col-span-1 border-solid border-black border-b-2 border-r-2 "
        >
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-7">
            <WorkRelevant>latest work</WorkRelevant>
            <h1 className="lg:text-5xl font-extrabold font-display w-full text-5xl tracking-tight">
              Employee management website
            </h1>
            <div className="flex flex-wrap gap-3">
              <Tag>MongoDB</Tag>
              <Tag>Express</Tag>
              <Tag>Node</Tag>
              <Tag>Javascript</Tag>
              <Tag>Bootstrap</Tag>
            </div>
            <p className="w-full sm:w-9/12 text-base font-paragraph lg:text-lg tracking-wide leading-relaxed">
              Full website design and build for a restaurant. This website
              bridged the communication gap between the employees and the
              management. It also offered a real-time notifications system for
              the employees through Safari.
            </p>
            <p className="w-full sm:w-9/12 text-sm font-paragraph font-semibold italic text-slate-500 tracking-wide leading-relaxed">
              Due to the nature of the project, I am unable to provide a link to
              this project. However, I am happy to discuss the project in more
              detail.
            </p>
          </div>
        </div>
        <div className="bg-pastel-blue col-span-2 lg:col-span-1 border-solid border-black border-b-2 border-r-2 py-20 lg:py-0">
          <img
            src="/images/HappyBaosDemo.jpg"
            alt="profile picture"
            className="w-full h-full object-scale-down object-center"
          />
        </div>

        <div className="col-span-2 lg:col-span-1 border-b-2 lg:border-b-0 border-solid border-black border-r-2 ">
          <div className="px-10 py-24 lg:px-20 lg:py-48 space-y-7">
            <WorkRelevant>latest work</WorkRelevant>
            <h1 className="lg:text-5xl font-extrabold font-display w-full text-5xl tracking-tight">
              The Lam's Bakery
            </h1>
            <div className="flex flex-wrap gap-3">
              <Tag>MongoDB</Tag>
              <Tag>Express</Tag>
              <Tag>React</Tag>
              <Tag>Node</Tag>
              <Tag>Typescript</Tag>
              <Tag>TailwindCSS</Tag>
            </div>
            <p className="w-full sm:w-9/12 text-base font-paragraph pb-5 lg:text-lg tracking-wide leading-relaxed">
              A highly responsive e-commerce platform, focusing on mobile-first
              design principles and implementing advanced CRUD operations for
              seamless product management.
            </p>
            <Button to="https://github.com/David99-MC/TheLams_Bakery">
              See this project
            </Button>
          </div>
        </div>
        <div className="bg-pastel-pink col-span-2 lg:col-span-1 border-solid border-black border-r-2  py-20 lg:py-0">
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
