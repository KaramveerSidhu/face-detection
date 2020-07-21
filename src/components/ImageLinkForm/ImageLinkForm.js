import React from 'react';
import './pattern.css'

const ImageLinkForm = ({onInputChange, onButtonClick}) => {
	return (
		<div>
			<p className = 'f3 white'>Paste the link of your image: This Application will detect face in your image! </p>
			<div  className='center'>
				<div className = 'center pa4 br3 shadow-5 pattern'>
					<input className ='f4 pa2 w-70 center'  type = 'text' onChange={onInputChange}/>
					<button 
						className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple br2 ml2' 
						onClick = {onButtonClick}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;