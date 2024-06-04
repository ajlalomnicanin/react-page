// rafce / rafc
import { Hero } from "./components/Hero";
import { HomeCards } from "./components/HomeCards";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
    </>
  );
};
