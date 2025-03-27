import LinkButton from "../LinkButton";
import BlockContainer from "../BlockContainer";
import RotatingText from "../RotatingText";
import Image from "next/image";
import lullofiLogo from "../../../public/lullofilogo.png"
export default function Welcome() {
    return (
        <section className="w-screen h-screen flex py-0 px-20 items-center justify-around bg-[#161c1f]"
          id="home">
            <div className="flex flex-col w-full items-start justify-around h-full">
                <h1 className="text-[#ffeb7a] text-7xl">
                    s i m p l e.
                </h1>
                <h1 className="text-[#ffeb7a] text-7xl">
                    p o w e r f u l.
                </h1>
                <h1 className="text-[#ffeb7a] text-7xl">
                    l o - f i.
                </h1>
            </div>

            <div className="flex flex-col w-full items-center justify-center h-full gap-4">
                <Image src={lullofiLogo} alt="lullo-fi Logo" className="w-72"/>
                <h2 className="text-white text-3xl">
                    VST3 Audio Plugin
                </h2>
                <a href="#about" className="p-2 px-8 bg-white text-black rounded-full hover:bg-neutral-200">
                    Explore
                </a>
            </div>
            
        </section>
    )
}