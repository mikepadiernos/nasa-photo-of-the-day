import React from "react"

const Image = image => {
  // Display a loading message while the data is fetching
  //   if (!image.photoOfTheDay) return <h3>Loading...</h3>;

    return (
        <span className='image-picture'>
            <img src={image.url} alt={image.title} />
        </span>
    )
};

export default Image;