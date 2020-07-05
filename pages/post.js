import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Card from '../components/Card';
import { getSortedPostData } from '../lib/post';
import { getRandomQuote } from '../lib/quote';

export class PostPage extends Component {
	constructor(props) {
		super(props);
		this.allPostData = this.props.allPostData;
		this.sliderData = {
			quote: this.props.quote
		};
	}

	render() {
		const title = 'Loongis | Post';
		const Cards = () => this.allPostData.map((post, index) => {
			return (
				<div className="col-sm-4 col-xs-12 py-3 d-flex" key={post.id}>
					<Card data={post} />
				</div>
			)
		});
	
		return (
			<Layout title={title}>
				<Slider sliderData={this.sliderData} />
				<div className="container py-4">
					<div className="row">
						<div className="col">
							<h2 className="display-4">Post</h2>
							<p className="lead">Holds thinkings about my life and the world.</p>
						</div>
					</div>
					<div className="row flex-row">
						<Cards />
					</div>
				</div>
			</Layout>
		);
	}
}

export async function getStaticProps() {
	const allPostData = getSortedPostData();
	const quote = getRandomQuote();
	return {
		props: {
			allPostData,
			quote
		}
	};
}

export default PostPage;
