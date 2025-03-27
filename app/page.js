import Image from "next/image";
import BlockContainer from "./components/BlockContainer";
import RotatingText from "./components/RotatingText";
import Welcome from "./components/Sections/Welcome";
import Navbar from "./components/Navbar";
import About from "./components/Sections/About";

export default function Home() {
  return (
    <div className="flex-col gap-0">
      <Welcome />
      <Navbar links={["products", "downloads","meet the team", "faq", "contact"]}/>
      <About/>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
