import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TypeWriter from './components/TypeWriter';
import SocialNetwork from './components/SocialNetwork';

function App() {
	const typeWriter = {
		starter: 'I am a ',
		wait: 2000,
		words: [ 'Vietnamese', 'Web Developer', 'Content Creator' ]
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

	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<div class="cover">
					<h2>Hi, My name is Long.</h2>
					<TypeWriter typeWriter={typeWriter} />
					<div class="intro">
						<p>
							I'm living in Sacramento, CA and currently grinding my BS in Computer Science at Sac State.
						</p>
						<p>I weave webs and crunch bugs for food.</p>
						<p>I love reddit, youtube and brain-hurting games.</p>
						<p>I explore new tech, cook Asian food and cover love songs.</p>
						<div class="container p-0">
							<div class="row">
								<div class="col-sm-6">
									<p>Languages I fluent?</p>
									<ul>
										<li>Viet (douma)</li>
										<li>English</li>
										<li>PHP</li>
										<li>JavaScript</li>
									</ul>
								</div>
								<div class="col-sm-6">
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
						<div className="social-network">
							{social.map((s, i) => {
								return <SocialNetwork social={s} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
