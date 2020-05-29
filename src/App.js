import React, {useState} from 'react';
import './App.css';
import LeftHandler from "./LeftHandler";
import RightHandler from "./RightHandler";
import StepConfig from "./StepConfig";

function App() {

    const [count, setCount] = useState(5);
    const [step, setStep] = useState(2);

    const handler = (value) => {
        setCount(value);
    }
 const onStepChange = (value) => {
        setStep(value);
 }

    return (
        <div className="App">
            <RightHandler count={count}/>
            <LeftHandler count={count}
                         changeCount={handler}
                         step={step}/>
                         <StepConfig step={step} onStepChange={onStepChange}/>

        </div>
    );
}

export default App;
