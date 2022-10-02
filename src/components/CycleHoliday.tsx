import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🪔" | "🎨" | "🎃" | "🎄" | "🦃";
    const Alphabet_Transitions: Record<Holiday, Holiday> = {
        "🎄": "🪔",
        "🪔": "🎃",
        "🎃": "🎨",
        "🎨": "🦃",
        "🦃": "🎄"
    };

    const Time_Transitions: Record<Holiday, Holiday> = {
        "🎨": "🪔",
        "🪔": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎨"
    };
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    function changeAlphabet(): void {
        const newHoliday = Alphabet_Transitions[holiday];
        setHoliday(newHoliday);
    }
    function changeTime(): void {
        const newHoliday2 = Time_Transitions[holiday];
        setHoliday(newHoliday2);
    }
    return (
        <div>
            <div>
                <p> Holiday: {holiday}</p>
                <Button onClick={changeAlphabet}>Advance by Alphabet</Button>
                <Button onClick={changeTime}>Advance by Year</Button>
            </div>
        </div>
    );
}
