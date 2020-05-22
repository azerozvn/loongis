import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import PostComponent from '../../components/Post';

export class Post extends Component {
	constructor(props) {
		super(props);
		this.postData = this.props.postData;
	}

	render() {
		const title = this.postData.id;

		return (
			<Layout title={title}>
				<PostComponent postData={this.postData} />
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
	return {
		props: {
			postData
		}
	};
}

export default Post;
