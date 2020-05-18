/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';

export class Hire extends Component {
	render() {
		const styles = {
			embedResponsive: {
				position: 'relative',
				display: 'block',
				height: '0',
				padding: '0',
				overflow: 'hidden',
				paddingBottom: '80%'
			}
		};

		return (
			<div style={styles.embedResponsive} className="embed-responsive">
				<object data="/resume-0220.pdf" type="application/pdf" width="100%" height="100%">
					<p>It appears you don't have a PDF plugin for this browser.</p>
				</object>
			</div>
		);
	}
}

export default Hire;
