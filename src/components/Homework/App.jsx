import React, { useState } from "react";
import { MdNavigateNext, MdReadMore, MdNavigateBefore } from "react-icons/md";

import "./App.scss";

export default function App() {
  const singers = [
    {
      id: 1,
      title: "Ed Sheeran",
      year: "17 փետրվարի, 1991 թ.",
      img: [
        "https://i.insider.com/6446e18c101b77001857be23?width=700",
        "https://imageio.forbes.com/specials-images/imageserve/5ed564163dbc9800060b2829/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds",
        "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/4/21/british-singer-ed-sheeran-1-6366617-1682130290945.jpg",
      ],
      page: "https://en.wikipedia.org/wiki/Ed_Sheeran",
      songs: ["Perfect", "Photograph", "Shivers", "Thinking Out Loud"],
    },
    {
      id: 2,
      title: "Martin Garrix",
      year: "14 մայիսի, 1996 թ.",
      img: [
        "https://www.dutchnews.nl/wpcms/wp-content/uploads/2022/10/Depositphotos_454636608_S.jpg",
        "https://yt3.googleusercontent.com/in7ji16oeon_ypiAMeH-ZdTWSaIC54yZqMsFg0X3uhTBk4MDCuIkRf6TIoQQCqjl20DSdakhSQ=s900-c-k-c0x00ffffff-no-rj",
        "https://www.gannett-cdn.com/-mm-/c7f7d446ae379701acd1fab4fcc42b90df788b28/c=0-187-3748-2305/local/-/media/USATODAY/USATODAY/2014/04/06//1396811391000-MARTIN-GARRIX-OTV-MUS-JY-3064--62645850.JPG?width=3200&height=1809&fit=crop&format=pjpg&auto=webp",
       
      ],
      page: "https://en.wikipedia.org/wiki/Martin_Garrix",
      songs: ["In the Name of Love", "Scared to Be Lonely", "There for You", "Tremor"],

    },
    {
        id: 3,
        title:"Dua Lipa",
        year: "22 օգոստոսի, 1995 թ.",
        img: [
            "https://yt3.googleusercontent.com/ytc/AGIKgqMd9qGpOCdry_anKWDLiBicQQqw02p-9d-jTf4Kbg=s900-c-k-c0x00ffffff-no-rj",
           "https://hips.hearstapps.com/hmg-prod/images/dua-lipa-attends-varietys-2nd-annual-hitmakers-brunch-at-news-photo-1604677508.?crop=1xw:0.87967xh;center,top&resize=1200:*",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3uD41hf1nJO2LTnbIcM8TodgBSdFWPMBHq5qrhBs5g&s",
          
        ],
        page: "https://en.wikipedia.org/wiki/Dua_Lipa",
        songs: ["Levitating", "Cold Heart", "Don't Start Now", "Be the One"],
      },
  ];
  const [selectid, setSelectid] = useState("");
  const [picture, setPicture] = useState(0);
  const singer = singers.filter((e) => e.id == selectid);
  const image = singer[0]?.img[0];

  return (
    <div
      className="App"
      style={singer.length ? { backgroundImage: `url(${image})` } : null}
    >
      <div className="select">
        <select name="" id="" onChange={(e) => setSelectid(e.target.value)}>
          <option disabled selected>
            Select Singer
          </option>
          {singers.map((e) => {
            return <option value={e.id}>{e.title}</option>;
          })}
        </select>
      </div>
      {(singer.length && (
        <div className="content">
          <div className="content-img">
            <img src={singer[0]?.img[picture]} alt="" />
            <div className="content-buttons">
              <button
                onClick={() => {
                  picture > 0 ? setPicture(picture - 1) : null;
                }}
              >
                <MdNavigateBefore />
              </button>
              <button
                onClick={() => {
                  picture < singer[0].img.length - 1
                    ? setPicture(picture + 1)
                    : null;
                }}
              >
                <MdNavigateNext />
              </button>
            </div>
          </div>
          <div className="content-text-box">
            <h2>{singer[0]?.title}</h2>
            <p> {singer[0]?.year}</p>
            <ul>
                {singer[0].songs.map(e=>{
                    return (
              <li>{e}</li>

                    )
                })}
             
            </ul>

            <a href={singer[0]?.page} target="blank">
              <button className="read">
                <MdReadMore />
              </button>
            </a>
          </div>
        </div>
      )) ||
        null}
    </div>
  );
}
