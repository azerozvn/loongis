import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export class Layout extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Layout;
