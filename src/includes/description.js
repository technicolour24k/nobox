import React from 'react';
import PanelContactUs from './panelContactUs'

class Description extends React.Component {
	render() {
			return (
				<div class="description">
					<p>Thinking out of the box is outdated.</p>
					<p>Let's just throw the box away.</p>
					<a href="./about.php"><button class="btn btn-outline-secondary btn-lg">Tell Me More!</button></a>
				</div>

				<div class="container content">
					<div class="container features">
						<div class="row">
							<div class="col-lg-6 col-md-6 col-sm-12">
								<h3 class="feature-title">Why NoBox?</h3>
								<p>We believe that software should be as unique as the business that uses it. All of our software is designed with you in mind.</p>
								<p>We start with what happens in your business, and finish with making your business accessible everywhere.</p>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-12">
								<h3 class="feature-title">Get in Touch!</h3>
								<PanelContactUs />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

export default Description;