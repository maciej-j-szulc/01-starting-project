import { useState } from "react"
import Output from "./Output";

export default function Greeting(){
    const [changedTest, setChangedTest] = useState(false);

    const changeTextHandler = () => {
        setChangedTest(true);
    }

    return <div>
        <h2>Hello World!</h2>
        {!changedTest && <Output>It's good to see you!</Output>}
        {changedTest && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text!</button>
    </div>
}