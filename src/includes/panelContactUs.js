import React from 'react';

class PanelContactUs extends React.Component {
	render() {
			return (
				<form action="./includes/mail2.php" method="post" id="contact">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Name" name="contactName">
					</div>
					<div class="form-group">
						<input type="email" class="form-control" placeholder="Email Address" name="email">
					</div>
					<div class="form-group">
						<input type="number" class="form-control" placeholder="Phone Number" name="phone">
					</div>
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Question/Comments" name="questions"></textarea>
					</div>
					<input type="submit" class="btn btn-secondary btn-block" value="Send" name="">
				</form>
			);
		}
	}

export default PanelContactUs;





