import React, { useState, useEffect } from "react";
import "./App.scss";
const MAIN_URL=process.env.REACT_APP_MAIN_URL;

export default function App() {
    const [data , setData] = useState([])

    const handleDelete = (id) => {
        const newData = data.filter(elem => elem.id !== id)
        setData(newData)
    }

    useEffect(() => {
        fetch(MAIN_URL).then(response => response.json()).then(data => setData(data.products))
    }, [])
    return (
        <div className="main">
            <div className="prod">
                {
                    data.map(elem => {
                        return (
                            <div className="prod_item" key={elem.id}>
                                <span className="del" onClick={() => handleDelete(elem.id)}>+</span>
                                <img src={elem.images[0]} alt={elem.title} />
                                <h2>
                                    <span>Brand:</span>{elem.brand}
                                    <br />
                                    <span>Title:</span>{elem.title}
                                </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
