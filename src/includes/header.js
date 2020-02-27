import React from 'react';

class Header extends React.Component {
	render() {
			return (
				<nav class="navbar navbar-expand-md">
				<a class="navbar-brand" href="https://www.google.co.uk" target="_blank">NoBox Software Solutions</a>
				  <div class="center title"></div>
				<button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#main-navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="main-navigation">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="./index.php">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./about.php">Who Are We?</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./ethos.php">Our Ethos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./portfolio.php">Our Portfolio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="./contact.php">Contact</a>
						</li>
					</ul>
				</div>
				</nav>
			);
		}
	}

export default Header;