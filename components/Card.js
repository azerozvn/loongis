/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import Date from './Date';
import '../styles/Card.scss';

export class Card extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
	}

	render() {
		return (
			<div className="card">
				<Link href={'/post/' + this.data.id}>
					<img className="card-img-top" src="https://picsum.photos/400/300" alt={this.data.title} />
				</Link>
				<div className="card-body">
					<Link href={'/post/' + this.data.id}>
						<h4 className="card-title text">{this.data.title}</h4>
					</Link>
					<p className="card-text text-justify">
						Some quick example text to build on the card title and make up the bulk of the card's content.
						Some quick example text to build on the card title and make up the bulk of the card's content.
						Some quick example text to build on the card title and make up the bulk of the card's content.
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
					<span className="post-date">
						<Date dateString={this.data.date} />
					</span>
				</div>
			</div>
		);
	}
}

export default Card;
