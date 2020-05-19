/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import Head from 'next/head';

export class Hire extends Component {
	render() {
		const title = 'Loongis | Resume';

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
			<React.Fragment>
				<Head>
					<title>{title}</title>
				</Head>
				<div style={styles.embedResponsive} className="embed-responsive">
					<object data="/resume-0220.pdf" type="application/pdf" width="100%" height="100%">
						<p>It appears you don't have a PDF plugin for this browser.</p>
					</object>
				</div>
			</React.Fragment>
		);
	}
}

export default Hire;
