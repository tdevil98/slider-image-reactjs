import React from "react";

function ImageInfo(props) {

    return (
        <>
            <img src={props.src} alt=""/>
            <div className="image-text">{props.description}</div>
        </>
    );
}

export default ImageInfo;