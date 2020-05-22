import React, { Component } from 'react';

export class Post extends Component {
	constructor(props) {
		super(props);
		this.postData = this.props.postData;
	}

	render() {
		return (
			<div className="container">
				<p>
					{this.postData.title} - {this.postData.date}
				</p>
				<div dangerouslySetInnerHTML={{ __html: this.postData.contentHtml }} />
			</div>
		);
	}
}

export default Post;
