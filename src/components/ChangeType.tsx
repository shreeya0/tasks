import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const Question_Transitions: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    const [questiontype, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        const newQuestion = Question_Transitions[questiontype];
        setQuestionType(newQuestion);
    }
    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {questiontype === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
