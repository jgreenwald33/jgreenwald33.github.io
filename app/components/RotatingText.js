'use client';

import { useEffect, useState } from "react";

export default function RotatingText({phrases}) {

    const [currIndex, setCurrIndex] = useState(0);
    const [currPhrase, setCurrentPhrase] = useState(phrases[currIndex]);

    const rotatePhrase = () => {
        setInterval(
            () => {
                let newIndex = currIndex + 1;
                setCurrIndex(prevIndex => {
                    const newIndex = (prevIndex + 1) % phrases.length; // Ensure it loops correctly
                    setCurrentPhrase(phrases[newIndex]); // Set the correct phrase
                    return newIndex;
                });
            }, 3000
        )
    }

    useEffect(
        () => {
            rotatePhrase();
        },[]
    )
    return <>
    <h4 className="rotating-text">
        {currPhrase}
    </h4>
    </>
}