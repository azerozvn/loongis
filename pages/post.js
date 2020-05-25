/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Link from 'next/link';
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

		return (
			<Layout title={title}>
				<Slider sliderData={this.sliderData} />
				<div className="container">
					{this.allPostData.map((post) => {
						return (
							<div key={post.id}>
								<Link href={'/post/' + post.id}>
									<a>
										<b>
											{post.title} - {post.date}
										</b>
									</a>
								</Link>
							</div>
						);
					})}
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
