import Navbar from "./components/Navbar";
import Landing from "./components/Sections/Landing";
import Home from "./components/Sections/Home"

export default function Page() {
  return (
    <div className="flex-col gap-0">
      <Landing />
      <Navbar links={["products", "downloads","meet the team", "faq", "contact"]}/>
      <Home/>
    </div>
  );
}
