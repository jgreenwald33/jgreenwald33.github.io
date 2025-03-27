'use client'
import { useEffect, useState, useCallback } from "react";

function RGBToHSL(r,g,b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);
        
    // Make negative hues positive behind 360°
    if (h < 0) 
        h += 360;
        l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h,s,l];
}

function updateColor(setBackgroundColor, setColor) {
    let colorChoices = [
        // #402E7A
        [64, 46, 122],
        // #4C3BCF
        [76, 59, 207],
        // #4B70F5
        [75, 112, 245],
        // #3DC2EC
        [61, 194, 236]
    ]

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let newColor = `rgb(${red}, ${green}, ${blue})`;
    setBackgroundColor(newColor);

    let hslVals = RGBToHSL(red,green,blue);
    let saturation = hslVals[2] < 50 ? hslVals[2] = 75 : hslVals[2] = 25;

    setColor(`hsl(${hslVals[0]} 100 ${saturation})`);
}

 function TextBlock ({char, pos, siblings}) {
    const handleResize = useCallback(() => {
        console.log('num siblings:', siblings);
        let parentWidth = document.querySelector('.block-container').offsetWidth;
        setBlockSize(`${Math.floor(parentWidth / (siblings + 1))}px`);
    }, [siblings]);

    let blockClass ='text-block';
    if (pos ==='first') {
        blockClass += ' first'
    }
    
    if (pos === 'last') {
        blockClass += ' last'
    }
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [color, setColor] = useState('white');

    // default to blocks having 200px x 200px size 
    const [blockSize, setBlockSize] = useState('200px');
    useEffect(() => {
        updateColor(setBackgroundColor, setColor);
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize());
    }, [handleResize]); 

    return (
        <div className={blockClass}
            style={{
                color: color,
                backgroundColor: backgroundColor,
                width:blockSize,
                height: blockSize
            }}
            onMouseEnter={()=> updateColor(setBackgroundColor, setColor)}
        >
            {char}
        </div>
    )
}

export default TextBlock;