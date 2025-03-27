import Image from "next/image";
import lullofiLogo from "../../public/lullofilogo.png"
export default function Navbar({links}) {
    return (
            <nav className="w-full mx-auto py-8 px-20 mt-0 sticky top-0 bg-[#161c1f] backdrop-blur-md flex justify-between">
                <Image src={lullofiLogo} alt="lullo-fi Logo" className="w-44"/>
                <ul className="flex gap-8 items-center justify-center">
                    {links.map((link, index) => {
                        console.log(link)
                        let linkId = link.toLowerCase();
                        linkId = "#" + linkId.replace(' ', '-');
                        return (
                            <li>
                                <a className="text-white" key={index} href={`${linkId}`}>{link}</a>
                            </li>
                        )
                    })}
                </ul>

            </nav>

    )
}