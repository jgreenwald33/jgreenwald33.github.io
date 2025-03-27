export default function Navbar({links}) {
    return (
            <nav className="w-full mx-auto py-3 px-8 mt-0 sticky top-0 bg-[#161c1f]/75 backdrop-blur-md flex justify-between">
                <h1 className="text-[#ffeb7a] text-7xl">lullo-fi</h1>
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