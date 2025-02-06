"use client";
import { useEffect, useState } from "react";
import TextBlock from "./TextBlock"



export default function BlockContainer({phrase}) {
    const [blockSize, setBlockSize] = useState('200px');

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
                return <TextBlock char={char} key={index} pos={blockPos} siblings={phrase.length} />
            })}
        </div>
    )
}