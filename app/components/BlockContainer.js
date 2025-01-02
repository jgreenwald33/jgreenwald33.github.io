import TextBlock from "./TextBlock"
export default function BlockContainer({phrase}) {
    return (
        <div className="block-container">
            {phrase.split('').map((char, index) => {
                let blockPos = 'default';
                if(index === 0) {
                    blockPos = 'first';
                }
                if (index === phrase.length - 1) {
                    blockPos = 'last';
                }
                return <TextBlock char={char} key={index} pos={blockPos} />
            })}
        </div>
    )
}