import React, { Component } from 'react';
import '../styles/SinglePost.scss';

export class SinglePost extends Component {
	constructor(props) {
		super(props);
		this.postData = this.props.postData;
	}

	render() {
		return (
			<div className="post py-4">
				<h1 className="h1 text-center py-2">{this.postData.title}</h1>
				<div className="post-content mt-2" dangerouslySetInnerHTML={{ __html: this.postData.contentHtml }} />
			</div>
		);
	}
}

export default SinglePost;
