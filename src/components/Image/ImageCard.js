import React, {useState, useEffect} from "react"
import axios from 'axios';
import Image from './Image';
import Copyright from './Copyright';
import { ButtonsContainer, Button } from '../Styles/Styles'

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
				<p>{image.explanation}</p>
				<p><b>Copyright:</b> <Copyright copyright={image.copyright}/></p>
				<p><b>Date:</b> {image.date}</p>
			</div>
			<div className='column column-right'>
				<Image url={image.hdurl} title={image.title} />
			</div>
			<div className='column column-bottom'>
			    <ButtonsContainer className='buttons buttons-container'>
			        <span>
			            <Button>Previous Day</Button>
			        </span>
			        <span>
			            <Button>Next Day</Button>
			        </span>
			    </ButtonsContainer>
			</div>
		</article>
	)
}