import { React, useState } from "react";

const Main = () => {
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, Math.trunc(Math.random() * 10)])
    }

    const displayChanges = (action) => {
        const newArr = structuredClone(data)

        for (let i = 0; i < newArr.length; i++) {
            if (action === "reset" && newArr[i] % 2 !== 0) {
                newArr[i] = 0;
            }
            if (action === "increment" && newArr[i] % 2 === 0) {
                newArr[i]++;
            }
        }
        setData(newArr)
    }

    const clearAll = () => {
        setData([]);
    }

    return (
        <div className="container">

            <div className="displayArray">
                {JSON.stringify(data)}
            </div>

            <div className="btnContainer">
                <button
                    className="btn"
                    onClick={() => addData()}>Add Number</button>
                <button
                    className="btn"
                    onClick={() => displayChanges("reset")}>Reset Odd Numbers</button>
                <button
                    className="btn"
                    onClick={() => displayChanges("increment")}>Increment Even Numbers</button>
                <button
                    className="btn"
                    onClick={() => clearAll()}>Clear All</button>
            </div>
        </div>
    )
}

export default Main;