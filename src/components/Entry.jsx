import React from "react"
import ReactDOM from "react-dom"


export default function Entry(props){
    return (
        <div className="card">
            <img id="location-img" src={props.item.imageUrl} />
            <div id="location-div">
                <p id="location">{props.item.location}</p>
                <img id="location-icon" src="/public/pin.png" />
                <a 
                    href={props.item.googleMapsUrl}>View on Google Maps
                </a>
            </div>

            <h2 id="title">{props.item.title}</h2>
            <h3 id="duration">{props.item.startDate} - {props.item.endDate} </h3>
            <p id="description">
                {props.item.description}
            </p>
        </div>
    )
}

// #F55A5A
