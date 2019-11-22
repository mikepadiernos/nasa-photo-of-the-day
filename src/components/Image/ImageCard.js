import React, {useState, useEffect} from "react"
import axios from 'axios';
import Image from './Image';
import { ImageButton } from '../Styles/Styles'

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
            <div className='column column-top'>
				<h2 className='image-title'>
					{image.title}
			     </h2>
            </div>
			<div className='column column-left'>
				<p>
					{image.explanation}
				</p>
			</div>
			<div className='column column-right'>
				<Image url={image.url} title={image.title} />
			</div>
			<div className='column column-bottom'>
			    <div className='buttons buttons-container'>
			        <span>
			            <ImageButton>Previous Day</ImageButton>
			        </span>
			        <span>
			            <ImageButton>Next Day</ImageButton>
			        </span>
			    </div>
			</div>
		</article>
	)
}