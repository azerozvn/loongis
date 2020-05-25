import React, { Component } from 'react';
import '../styles/Slider.scss';

export class Slider extends Component {
	constructor(props) {
		super(props);
		this.sliderData = this.props.sliderData;
	}

	render() {
		return (
			<div className="slider">
				<div className="slider-veil" />
				<img className="slider-img img-fluid" src="https://picsum.photos/3000/600" alt="slider-img" />
			</div>
		);
	}
}

export default Slider;
