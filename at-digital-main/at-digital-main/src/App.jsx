import Navbar from "./components/layouts/Navbar";
import Button from "./components/core/button";
import Footer from "./components/layouts/Footer";
import PictureCard from "./components/modules/PictureCard";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <picture>
          <img src="/assets/hero.jpeg" alt="hero image" className="w-full h-auto max-h-[80vh] object-cover" />
        </picture>
        <div className="w-full lg:max-w-[630px] px-[20px] md:px-[38px] pt-[24px] pb-[32px] flex lg:absolute bottom-10 left-20 [background:linear-gradient(257deg,var(--tw-gradient-stops))] from-analog2 from-30% to-dark to-100%">
          <div className="w-full text-white font-sans font-bold capitalize text-[36px] md:text-[48px] tracking-[-0.96px] gap-5">
            <div className="leading-[100%]">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </div>
            <Button text="Get free consultation" />
          </div>
        </div>
      </div>
      <PictureCard
        imageUrl="/assets/development.png"
        title="Web &amp; Mobile App Development"
        text="Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online."
      />
      <PictureCard
        imageUrl="/assets/consulting.png"
        title="Digital Strategy Consulting"
        text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        reverse
      />
      <Footer />
    </>
  );
};

export default App;
