import React, { Component } from 'react';
import '../styles/Slider.scss';

export class Slider extends Component {
	constructor(props) {
		super(props);
		this.sliderData = this.props.sliderData;
	}

	Quote() {
		const quote = this.sliderData.quote;
		return (
			<div className="slider-quote">
				<div className="container quote-box">
					<h3 className="quote">"{quote.quote}"</h3>
					<h4 className="author">&mdash; {quote.author}</h4>
				</div>
			</div>
		);
	}

	render() {
		let quote;
		if (this.sliderData) {
			if (this.sliderData.quote) {
				quote = this.Quote();
			}
		}

		return (
			<div className="slider">
				<div className="slider-veil" />
				<img className="slider-img img-fluid" src="https://picsum.photos/3000/600" alt="slider-img" />
				{quote}
			</div>
		);
	}
}

export default Slider;
