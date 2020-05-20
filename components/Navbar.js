/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Link from 'next/link';
import '../styles/Navbar.scss';

export class Navbar extends Component {
	render() {
		return (
			<div className="bg-lighter">
				<nav className="container navbar nav justify-content-end">
					<ul>
						<li className="nav-item">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/hire">
								<a>Hire</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
