import Hero from "./component/hero/Hero";
import NavBar from "./component/navBar/NavBar";

export default function Home() {
  return (
    <>
      <main className="font-montserrat">
        <header className="bg-faded-secondary-color-1 h-[800px] sm:h-[600px]">
          <NavBar />
          <Hero />
        </header>
      </main>
    </>
  );
}
