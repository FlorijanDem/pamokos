import data from "../data/data.json";
// import {useState} from "react";

export default function Card({numberOfObject}) {
  
  return (
    <div className="row border rounded p-2">
      <div className="col-3 col-md-2 col-xl-1">
        <img
          src={data[numberOfObject].logo}
          alt={data[numberOfObject].company}
        />
      </div>
      <div className="col-8">
        <h2>{data[numberOfObject].company}</h2>
        <p>{data[numberOfObject].position}</p>
        <div className="d-flex">
            <p className="px-1">{data[numberOfObject].postedAt}</p>
            <p className="px-1">{data[numberOfObject].contract}</p>
            <p className="px-1">{data[numberOfObject].location}</p>
        </div>
      </div>
    </div>
  );
}
