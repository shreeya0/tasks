import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header
                    className="App-header"
                    style={{ backgroundColor: "blue" }}
                >
                    UD + Shreeya CISC275 with React Hooks and TypeScript
                </header>
                <Container>
                    <Row>
                        <Col>
                            <h1>Studio Ghibli Films</h1>
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BNzQ0OTcwNDY3MF5BMl5BanBnXkFtZTgwODc1MTMyMDE@._V1_.jpg"
                                alt="Spirited Away"
                            />
                            Top Three Films:
                            <ol>
                                <li>Spirited Away</li>
                                <li>Howls Moving Castle</li>
                                <li>Ponyo</li>
                            </ol>
                            <div
                                style={{
                                    border: "1px solid red",
                                    width: "100px",
                                    height: "300px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>

                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload. Hello World
                            </p>
                            <div
                                style={{
                                    border: "1px solid red",
                                    width: "100px",
                                    height: "300px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </>
    );
}

export default App;
