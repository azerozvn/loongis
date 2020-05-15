import React, { Component } from 'react';
import './styles/Navbar.css';

export class Navbar extends Component {
	render() {
		return (
			<div className="bg-lighter">
				<nav className="container navbar nav justify-content-end">
					<ul>
						<li className="nav-item">
							<a href="index.html">Home</a>
						</li>
						<li className="nav-item">
							<a href="cv/resume-0220.pdf">Hire</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
