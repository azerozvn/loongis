import React, { Component } from 'react';
import styles from './TypeWriter.module.css';

export class TypeWriter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strings: this.props.typeWriter.strings,
			delay: this.props.typeWriter.delay,
			typeSpeed: this.props.typeWriter.typeSpeed,
			isDeleting: false,
			index: 0,
			text: ''
		};
		this.fullTxt = '';
	}

	componentDidMount() {
		this.type();
	}

	type = () => {
		// Get current word
		this.fullTxt = this.state.strings[this.state.index] + '.';
		let timeoutSpeed = this.state.typeSpeed;
		// Check deleting
		if (this.state.isDeleting) {
			if (this.state.text === this.fullTxt) {
				//this.txtElement.style.borderRight = '0.2rem solid #bbb';
			}
			// Set speed twice as fast
			timeoutSpeed /= 2;
			this.setState({
				// Remove char
				text: this.fullTxt.substring(0, this.state.text.length - 1)
			});
		} else {
			this.setState({
				// Add char
				text: this.fullTxt.substring(0, this.state.text.length + 1)
			});
		}
		// Check if word is finished
		if (!this.state.isDeleting && this.state.text === this.fullTxt) {
			// Add pause at the end
			timeoutSpeed = this.state.delay;
			this.setState({
				// Set phase to delete
				isDeleting: true
			});
		} else if (this.state.isDeleting && this.state.text === '') {
			// Add pause after clear
			timeoutSpeed = this.state.delay;
			this.setState({
				// Set phase to type
				isDeleting: false
			});
			// Update word to type
			if (this.state.index === this.state.strings.length - 1) {
				this.setState({
					// Back to first word
					index: 0
				});
			} else {
				this.setState({
					// Move to next word
					index: this.state.index + 1
				});
			}
		}
		setTimeout(() => this.type(), timeoutSpeed);
	};

	render() {
		let className = 'txt-type';
		if (!(this.state.text === this.fullTxt)) {
			className += ' active';
		}
		return <span className={className}>{this.state.text}</span>;
	}
}

export default TypeWriter;
