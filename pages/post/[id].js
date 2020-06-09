import React, { Component } from 'react';
import Layout from '../../components/Layout';
import SinglePost from '../../components/SinglePost';
import Slider from '../../components/Slider';
import { getRandomQuote } from '../../lib/quote';
import { getAllPostIds, getPostData } from '../../lib/post';

export class Post extends Component {
	constructor(props) {
		super(props);
		this.postData = this.props.postData;
		this.sliderData = {
			quote: this.props.quote
		};
	}

	render() {
		const title = this.postData.id;

		return (
			<Layout title={title}>
				<Slider sliderData={this.sliderData} />
				<div className="container">
					<SinglePost postData={this.postData} />
				</div>
			</Layout>
		);
	}
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	const quote = getRandomQuote();
	return {
		props: {
			postData,
			quote
		}
	};
}

export default Post;
