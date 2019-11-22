import React, {useState, useEffect} from "react"
import axios from "axios";
import ImageCard from './ImageCard';

export default function ImageImport() {

	const [image, setImage] = useState([]);

	const imageUpdate = () => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=LtkTFx3liU2jtN6udgASIKNUPk9ErbZDID0UtRkh')
			.then(response => {
				setImage(response.data);
				console.log('Image', response);
			})
			.catch(error => console.log(error));
	};

	useEffect(imageUpdate, []);

	return (
		<article className='image'>
			<div className='column column-1'>
				<h2 className='image-title'>
					{image.title}
				</h2>
				<p>
					{image.explanation}
				</p>
			</div>
			<div className='column column-2'>
				<ImageCard url={image.url} title={image.title} />
			</div>
		</article>
	)
}