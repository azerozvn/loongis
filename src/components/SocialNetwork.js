import React, { Component } from 'react';
import './styles/SocialNetwork.css';

export class SocialNetwork extends Component {
	render() {
		return (
			<a className="social" target="_blank" rel="noopener noreferrer" href={this.props.social.url}>
				<i className={this.props.social.prefix + ' ' + this.props.social.full} />
			</a>
		);
	}
}

export default SocialNetwork;
