import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div>
			<h1>Congratulations!</h1>
			<p>You've successfully added an animal to your <Link to={'/'}>menagerie</Link>! Return there to click away and earn a chance to catch more animals!</p>
		</div>
	)
}

export default Success
