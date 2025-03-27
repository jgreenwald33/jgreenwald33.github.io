export default function LinkButton({displayText, link, centered}) {
    return (
        <a href={"#" + link} className={"bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900 no-underline text-center w-fit drop-shadow-lg hover:drop-shadow-2xl duration-500"}>
            {displayText}
        </a>
    )
}