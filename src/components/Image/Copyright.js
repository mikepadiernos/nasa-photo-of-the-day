import React from "react"

const Copyright = image => {
	if (!image.copyright) {
		return 'Public Domain';
	} else {
		return image.copyright;
	}
};

export default Copyright;