import { useState } from "preact/hooks";
import "./EvenSwitchBtn.css";

export interface ButtonProps {
    b1: string;
    b2: string;
    callback: () => void;
}

export default function EvenSwitchBtn({ b1, b2, callback }: ButtonProps) {
    const  [clicked, setClicked] = useState(true);
    function handleClick() {
        setClicked(!clicked);
        callback();
    }
    return (
        <button className={clicked ? "even-switch-btn button-1" : "even-switch-btn button-2"} onClick={handleClick}>
            {!clicked ? b1 : b2}
        </button>
    );
}

/*
        */
