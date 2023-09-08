import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div className='success-container'>
			<h1>Congratulations!</h1>
			<p>You've successfully added an animal to your <Link to={'/'} className='menagerie-link'>menagerie</Link>! Return there and click away so you can catch more animals!</p>
		</div>
	)
}

export default Success
