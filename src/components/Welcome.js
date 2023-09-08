import React from 'react';

const Welcome = () => {
	return (
		<div className='welcome-div'>
			<h1>WELCOME TO <p className='banner'>KINGDOM CLICKER!</p></h1>
			<h3>Head into the wilderness (above) to choose your first animal and start clicking!</h3>
			<p>The wilderness will re-open whenever you have enough clicks to catch another animal. The more animals you have, the more your clicks will be worth, but watch out! Each new animal gets harder and harder to catch. </p>
			<div className='warning'>
				<h2 className='warning-title'>⚠️DEVELOPER'S WARNING⚠️</h2>
				<p className='warning-text'>This app has no persistent data storage - refreshing the page will lose everything you've collected!</p>
			</div>
		</div>
	)
}

export default Welcome
