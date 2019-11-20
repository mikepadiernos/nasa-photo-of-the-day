import React, {useState, useEffect} from "react"
import axios from "axios";
import ImageCard from './ImageCard';

export default function ImageImport() {

	const [image, setImage] = useState([]);

	const imageUpdate = () => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=LtkTFx3liU2jtN6udgASIKNUPk9ErbZDID0UtRkh')
			.then(response => {
				setImage(response.date);
				console.log('Image', response);
			})
			.catch(error => console.log(error));
	};

	useEffect(imageUpdate, []);

	return (
		<div className='image'>
			<ImageCard />
		</div>
	)
}