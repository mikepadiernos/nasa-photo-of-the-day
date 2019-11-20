import React from "react"
import logo from '../../images/NASA_Worm_logo.svg_.png'

const Logo = () => {
	return (
		<div className="logo-container">
			<img className="logo" src={logo} alt="NASA logo" />
		</div>
	)
};

export default Logo