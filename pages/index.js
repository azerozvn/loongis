import React, { Component } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';

export class HomePage extends Component {
	render() {
		const title = 'Loongis | Home';

		return (
			<Layout title={title}>
				<Home />
			</Layout>
		);
	}
}

export default HomePage;
