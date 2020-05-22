import React, { Component } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import { getSortedPostData } from '../lib/post';

export class HomePage extends Component {
	constructor(props) {
		super(props);
		this.allPostData = this.props.allPostData;
	}

	render() {
		const title = 'Loongis | Home';

		return (
			<Layout title={title}>
				<Home />
				<div className="container">
					{this.allPostData.map((post) => {
						return (
							<p key={post.id}>
								<b>
									{post.title} - {post.date}
								</b>
							</p>
						);
					})}
				</div>
			</Layout>
		);
	}
}

export async function getStaticProps() {
	const allPostData = getSortedPostData();
	return {
		props: {
			allPostData
		}
	};
}

export default HomePage;
