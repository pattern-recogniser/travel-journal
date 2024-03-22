import React from "react"
import ReactDOM from "react-dom"

export default function Entry(props){
    console.log(props)
    return (
        <div className="card">
            <img src={props.item.imageUrl} />
            <img src="/public/pin.png" />
            <p>{props.item.location}
            {props.item.startDate}
            {props.item.endDate}
            {props.item.googleMapsUrl}
            {props.item.title}
            {props.item.description}
            </p>

        </div>
    )
}

// #F55A5A
