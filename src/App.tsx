import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import ContactHero from "./components/hero/ContactHero";
import Hero from "./components/hero/Hero";
import Review from "./components/hero/Review";
import Logos from "./components/logos/Logos";
import Navbar from "./components/navbar/Navbar";
import Video from "./components/video/Video";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full">
          {/* Hero Section */}
          <section className="h-[calc(100vh-4rem)] bg-gray-200">
            <Hero />
          </section>
          {/* End Hero Section */}

          {/* Videos Section */}
          <section className="lg:h-[60vh] bg-gray-200 flex justify-center items-center ">
            <Video />
          </section>
          {/* End Videos Section */}

          {/* Logos Section */}
          <section className="h-[160px] md:h-[200px]">
            <Logos />
          </section>
          {/* End Logos Section */}

          {/* Featured Section */}
          <section className="lg:h-[500px] flex justify-center items-center">
            <Featured />
          </section>
          {/* End Featured Section */}

          {/* Review Section */}
          <section className="lg:h-[500px] bg-gray-300 w-full">
            <Review />
          </section>
          {/* Review Section */}

          {/* Contact Section */}
          <section className="lg:h-[500px] bg-amber-50">
            <ContactHero />
          </section>
          {/* End Contact Section */}
        </div>
      </main>
      <hr className="border-t-2 border-y-gray-500" />
      <Footer />
    </>
  );
};
export default App;
