/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import '../styles/Layout.scss';

export class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Head>
					<title>{this.props.title}</title>
				</Head>
				<div className="app">
					<Header />
					{this.props.children}
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default Layout;
