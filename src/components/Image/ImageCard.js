import React from "react"

const ImageCard = image => {
    return (
        <span className='image image-picture'>
            <img src={image.url} alt={image.title} />
        </span>
    )
};

export default ImageCard;