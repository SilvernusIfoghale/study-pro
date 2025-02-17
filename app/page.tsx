import Accessible from "./component/accessible/Accessible";
import Courses from "./component/courses/Courses";
import Hero from "./component/hero/Hero";
import NavBar from "./component/navBar/NavBar";
import Packages from "./component/packages/Packages";
import Reviews from "./component/reviews/Reviews";

export default function Home() {
  return (
    <>
      <main className="font-montserrat">
        <header className="bg-faded-secondary-color-1 h-[800px] sm:h-[600px]">
          <NavBar />
          <Hero />
        </header>
        <section>
          <Packages />
          <Accessible />
          <Courses />
          <Reviews />
        </section>
      </main>
    </>
  );
}
