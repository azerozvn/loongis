/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import '../styles/Card.scss';

export class Card extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
	}

	render() {
		return (
			<Link href={'/post/' + this.data.id}>
				<div className="card">
					<img className="card-img-top" src="https://picsum.photos/400/300" alt={this.data.title} />
					<div className="card-body">
						<h4 className="card-title">{this.data.title}</h4>
						<p className="card-text text-justify">
							Some quick example text to build on the card title and make up the bulk of the card's
							content. Some quick example text to build on the card title and make up the bulk of the
							card's content. Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</p>
					</div>
					<div className="card-footer">
						<div className="author-box">
							<img
								className="rounded author-avatar mr-2"
								src="https://picsum.photos/100/100"
								alt="post-author"
							/>
							<div className="author-info">
								<b className="author-name">{this.data.author}</b>
								<span className="author-title">Admin</span>
							</div>
						</div>
						<span className="post-date">{this.data.date}</span>
					</div>
				</div>
			</Link>
		);
	}
}

export default Card;
