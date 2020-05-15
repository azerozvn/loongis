import React, { Component } from 'react';
import './styles/TypeWriter.css';

export class TypeWriter extends Component {
	constructor(props) {
		super(props);
		this.txtElement = '';
		this.txt = '';
		this.wordIndex = 0;
		this.words = this.props.typeWriter.words;
		this.wait = parseInt(this.props.typeWriter.wait, 10);
		this.isDeleting = false;
		this.typeSpeed = 400;
		this.txtElement = <span className="txt-type" />;
	}

	componentDidMount() {
		this.txtElement = document.querySelector('.txt-type');
		this.type();
	}

	type = () => {
		// Get current word
		const fullTxt = this.words[this.wordIndex] + '.';
		let typeSpeed = this.typeSpeed;

		// Check deleting
		if (this.isDeleting) {
			if (this.txt === fullTxt) {
				this.txtElement.style.borderRight = '0.2rem solid #bbb';
			}
			// Set speed twice as fast
			typeSpeed /= 2;
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Update current word
		this.txtElement.innerHTML = `${this.txt}`;

		// Check if word is finished
		if (!this.isDeleting && this.txt === fullTxt) {
			// Add pause at the end
			typeSpeed = this.wait;
			// Remove writing cursor
			this.txtElement.style.borderRight = 'none';
			// Set phase to delete
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			// Add pause after clear
			typeSpeed = this.wait;
			// Set phase to type
			this.isDeleting = false;
			// Update word to type
			if (this.wordIndex === this.words.length - 1) {
				// Back to first word
				this.wordIndex = 0;
			} else {
				// Move to next word
				this.wordIndex++;
			}
		}

		// Type next word
		setTimeout(() => this.type(), typeSpeed);
	};

	render() {
		return (
			<div>
				<h1>
					{this.props.typeWriter.starter}
					<span className="txt-type" />
				</h1>
			</div>
		);
	}
}

export default TypeWriter;
