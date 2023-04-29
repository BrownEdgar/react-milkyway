import React, { useState } from 'react'
import data from "./data.json"
import "./App.scss"


export default function App() {
    const [selects, setSelects] = useState(null)
    return (
        <div className="App">
            <select value={selects} onChange={event => setSelects(event.target.value)}>   
                <option value=""></option>
                <option value="1" >Kim SeokJin</option>
                <option value="2">Min Yoongi</option>
                <option value="3">Jung Hoseok</option>
                <option value="4">Kim NamJoon</option>
                <option value="5">Park Jimin</option>
                <option value="6">Kim Taehyung</option>
                <option value="7">Jeon Jungkook</option>
            </select>
            <div className="inner">
                {
                    data.map(dat => {
                        return(
                            <div className="box" key={dat.id}>
                               {selects == dat.id ? <div>
                                <img src={dat.image}/>
                                <div className="text">
                                    <h1>{dat.name}</h1>
                                    <h2>{dat.birth}</h2>
                                    <p>{dat.about}</p>
                                    <a href="https://en.wikipedia.org/wiki/BTS">
                                        <button>MORE</button>
                                    </a>
                                </div>
                               </div>: console.error(false)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}