/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import TypeWriter from './TypeWriter';
import SocialNetwork from './SocialNetwork';
import styles from './Home.module.css';

export class Home extends Component {
	render() {
		const typeWriter = {
			typeSpeed: 400,
			delay: 2000,
			strings: [ 'Vietnamese', 'Web Developer', 'Content Creator' ]
		};

		const social = [
			{
				name: 'facebook',
				prefix: 'fa',
				full: 'fa-facebook-square',
				url: 'https://www.facebook.com/azerozvn'
			},
			{
				name: 'github',
				prefix: 'fa',
				full: 'fa-github',
				url: 'https://github.com/azerozvn'
			},
			{
				name: 'linkedin',
				prefix: 'fa',
				full: 'fa-linkedin',
				url: 'https://www.linkedin.com/in/azerozvn/'
			}
		];

		const socialItems = social.map((s) => <SocialNetwork social={s} key={s.name} />);

		return (
			<div className="container">
				<div className="cover">
					<h2>Hi, My name is Long.</h2>
					<h1>
						I am a <TypeWriter typeWriter={typeWriter} />
					</h1>
					<div className="intro">
						<p>
							I'm living in Sacramento, CA and currently grinding my BS in Computer Science at Sac State.
						</p>
						<p>I weave webs and crunch bugs for food.</p>
						<p>I love reddit, youtube and brain-hurting games.</p>
						<p>I explore new tech, cook Asian food and cover love songs.</p>
						<div className="container p-0">
							<div className="row">
								<div className="col-sm-6">
									<p>Languages I fluent?</p>
									<ul>
										<li>Viet (douma)</li>
										<li>English</li>
										<li>PHP</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div className="col-sm-6">
									<p>Tech I use?</p>
									<ul>
										<li>MEAN/MERN</li>
										<li>Redux</li>
										<li>NextJS</li>
										<li>Agile</li>
									</ul>
								</div>
							</div>
						</div>

						<p>
							Feeling cool? Reach me at <a href="mailto:longnb306@gmail.com">longnb306@gmail.com</a>
						</p>
						<div className="social-network">{socialItems}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
