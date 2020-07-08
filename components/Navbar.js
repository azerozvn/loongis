/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import '../styles/Navbar.scss';

export class Navbar extends Component {
	render() {
		return (
			<div className="bg-lighter">
				<nav className="container navbar navbar-expand-sm">
					<div className="navbar-brand">
						<Link href="/">
							<a>
								<b>Loongis.me</b>
							</a>
						</Link>
					</div>
					<div className="collapse navbar-collapse nav justify-content-end">
						<ul>
							{/* <li className="nav-item">
								<Link href="/post">
									<a>Post</a>
								</Link>
							</li> */}
							{/* <li className="nav-item">
								<Link href="/gallery">
									<a>Gallery</a>
								</Link>
							</li> */}
							<li className="nav-item">
								<Link href="/hire">
									<a>Hire</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
