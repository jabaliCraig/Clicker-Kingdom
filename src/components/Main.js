import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';

const animals = [
	{
		id: 1,
		emoji: '🐵',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 2,
		emoji: '🐒',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 3,
		emoji: '🦍',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 4,
		emoji: '🦧',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 5,
		emoji: '🐶',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 6,
		emoji: '🐕',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 7,
		emoji: '🦮',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 8,
		emoji: '🐕‍🦺',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 9,
		emoji: '🐩',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 10,
		emoji: '🐺',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 11,
		emoji: '🦊',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 12,
		emoji: '🦝',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 13,
		emoji: '🐱',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 14,
		emoji: '🐈',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 15,
		emoji: '🐈‍⬛',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 16,
		emoji: '🦁',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 17,
		emoji: '🐯',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 18,
		emoji: '🐅',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 19,
		emoji: '🐆',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 20,
		emoji: '🐴',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 21,
		emoji: '🐎',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 22,
		emoji: '🦄',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 23,
		emoji: '🦓',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 24,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: false,
	// orderNumber: 0
	// },
	{
		id: 25,
		emoji: '🦌',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 26,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: false,
	// orderNumber: 0
	// },
	{
		id: 27,
		emoji: '🦬',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 28,
		emoji: '🐮',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 29,
		emoji: '🐂',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 30,
		emoji: '🐃',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 31,
		emoji: '🐄',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 32,
		emoji: '🐷',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 33,
		emoji: '🐖',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 34,
		emoji: '🐗',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 35,
		emoji: '🐏',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 36,
		emoji: '🐑',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 37,
		emoji: '🐐',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 38,
		emoji: '🐪',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 39,
		emoji: '🐫',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 40,
		emoji: '🦙',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 41,
		emoji: '🦒',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 42,
		emoji: '🐘',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 43,
		emoji: '🦣',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 44,
		emoji: '🦏',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 45,
		emoji: '🦛',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 46,
		emoji: '🐭',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 47,
		emoji: '🐁',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 48,
		emoji: '🐀',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 49,
		emoji: '🐹',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 50,
		emoji: '🐰',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 51,
		emoji: '🐇',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 52,
		emoji: '🐿',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 53,
		emoji: '🦫',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 54,
		emoji: '🦔',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 55,
		emoji: '🦇',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 56,
		emoji: '🐻',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 57,
		emoji: '🐻‍❄️',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 58,
		emoji: '🐨',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 59,
		emoji: '🐼',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 60,
		emoji: '🦥',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 61,
		emoji: '🦦',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 62,
		emoji: '🦨',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 63,
		emoji: '🦘',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 64,
		emoji: '🦡',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 65,
		emoji: '🦃',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 66,
		emoji: '🐔',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 67,
		emoji: '🐓',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 68,
		emoji: '🐣',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 69,
		emoji: '🐤',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 70,
		emoji: '🐥',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 71,
		emoji: '🐦',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 72,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: truefalse,
	// orderNumber: 0
	// },
	{
		id: 73,
		emoji: '🐧',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 74,
		emoji: '🕊',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 75,
		emoji: '🦅',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 76,
		emoji: '🦆',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 77,
		emoji: '🦢',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 78,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: false,
	// orderNumber: 0
	// },
	{
		id: 79,
		emoji: '🦉',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 80,
		emoji: '🦤',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 81,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: false,
	// orderNumber: 0
	// },
	{
		id: 82,
		emoji: '🦩',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 83,
		emoji: '🦚',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 84,
		emoji: '🦜',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 85,
		emoji: '🐸',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 86,
		emoji: '🐊',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 87,
		emoji: '🐢',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 88,
		emoji: '🦎',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 89,
		emoji: '🐍',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 90,
		emoji: '🐲',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 91,
		emoji: '🐉',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 92,
		emoji: '🦕',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 93,
		emoji: '🦖',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 94,
		emoji: '🐳',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 95,
		emoji: '🐋',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 96,
		emoji: '🐬',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 97,
		emoji: '🦭',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 98,
		emoji: '🐟',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 99,
		emoji: '🐠',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 100,
		emoji: '🐡',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 101,
		emoji: '🦈',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 102,
		emoji: '🐙',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	// {
	// 	id: 103,
	// 	emoji: '',
	// 	clicks: 0,
	// 	isCaptured: false,
	// orderNumber: 0
	// },
	{
		id: 104,
		emoji: '🐚',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 105,
		emoji: '🪸',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 106,
		emoji: '🦀',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 107,
		emoji: '🦞',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 108,
		emoji: '🦐',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 109,
		emoji: '🦑',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 110,
		emoji: '🦪',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 111,
		emoji: '🐌',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 112,
		emoji: '🦋',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 113,
		emoji: '🐛',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 114,
		emoji: '🐜',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 115,
		emoji: '🐝',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 116,
		emoji: '🪲',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 117,
		emoji: '🐞',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 118,
		emoji: '🦗',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 119,
		emoji: '🪳',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 120,
		emoji: '🕷',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 121,
		emoji: '🦂',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 122,
		emoji: '🦟',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 123,
		emoji: '🪰',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 124,
		emoji: '🪱',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
	{
		id: 125,
		emoji: '🦠',
		clicks: 0,
		isCaptured: false,
		orderNumber: 0
	},
]

const Main = () => {
	const navigate = useNavigate();
	
  const [showWild, setShowWild] = useState(false);
	const [wildAnimals, setWildAnimals] = useState(animals.filter(animal => !animal.isCaptured));
	const [captAnimals, setCaptAnimals] = useState(animals.filter(animal => animal.isCaptured).sort((a,b) => a.orderNumber - b.orderNumber));
	const [displayAnimals, setDisplayAnimals] = useState(captAnimals)
	
	const totalClicks = captAnimals.reduce((acc, curr) => acc + curr.clicks, 0);
	// const threshold = captAnimals.length < 4 ? 10 ** captAnimals.length : 1500 + 2500 * (captAnimals.length - 4);
	// const threshold = captAnimals.length < 3 ? 10 ** captAnimals.length : 500 * (captAnimals.length) ** 2 - 2500 * (captAnimals.length) + 4000;
	const threshold = captAnimals.length < 4 ? 10 ** captAnimals.length : 90 * (captAnimals.length) ** 3 - 390 * (captAnimals.length) ** 2 + 300 * (captAnimals.length) + 1000;

	const displayCapt = () => {
		setShowWild(false)
		setDisplayAnimals(captAnimals)
	}

	const displayWild = () => {
		setShowWild(true)
		setDisplayAnimals(wildAnimals)
	}

	const capture = (id)=> {
		let index = animals.findIndex(animal => animal.id === id);
		
		animals[index].isCaptured = true;
		animals[index].orderNumber = captAnimals.length;
		
		displayCapt();

		navigate('/clicker-kingdom/success')
	}

	const click = (id, clickStrength) => {
		let i = animals.findIndex(animal => animal.id === id);
		animals[i].clicks += clickStrength
		setCaptAnimals(animals.filter(animal => animal.isCaptured));
	}
	
	const clickAll = () => {
		captAnimals.forEach(captAnimal => {
			let index = captAnimals.findIndex(animal => animal.id === captAnimal.id);

			if(index < captAnimals.length -1) {
				let strength = captAnimals.length - 1 - index//(2 ** (captAnimals.length - 2 - index)) * (100 ** Math.floor((captAnimals.length - 1 - index)/3));
				click(captAnimal.id, strength);
			}
		})
	}

	useEffect(() => {
		const interval = setInterval(() => {
				clickAll();
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<nav>
				<button 
					className='nav-button'
					disabled={!animals.filter(animal => animal.isCaptured).length} 
					onClick={()=> displayCapt()}
					>Menagerie</button>
				<button 
					className='nav-button wild'
					disabled={totalClicks < threshold && animals.filter(animal => animal.isCaptured).length !== 0} 
					onClick={()=> displayWild()}
					>Wilderness</button>
			</nav>

			<div className='main-container'>
				<h1 className={!animals.filter(animal => animal.isCaptured).length && !showWild ? 'transparent' : 'click-count'}>{showWild ? `You may capture ${!animals.filter(animal => animal.isCaptured).length ? 'your first' : 'another'} animal!` : totalClicks.toLocaleString('en-US')}</h1>

				<div className={showWild ? 'wild-animals' : 'zoo-animals'}>
				{displayAnimals.map(animal=>{
					return (
						<button 
							key={animal.id}
							className={showWild ? 'animal-on-list' : 'clicker-on-list'}
							onClick={(e)=> {
								if(showWild) {
									if (threshold + 1 > animals.filter(animal => animal.isCaptured).length || animals.filter(animal => animal.isCaptured).length === 0) {
										capture(animal.id)
									} else {
										console.log("You can't capture that animal - you BROKE!!")
									}
								} else {
									click(animal.id, 1)
								}
							}}
							><h1>{animal.emoji}</h1>
							{showWild ? '' : <p>{animal.clicks.toLocaleString('en-US')}</p>}
						</button>
					)
				})}
				</div>

				{animals.filter(animal => animal.isCaptured).length ? 
					<div className='info-section'>
						<div className='tracking-tool'>
							<h2 className='clicks-per-click'>{animals.filter(animal => animal.isCaptured).length === 1 ? '' : <p>Your earlier animals will autoclick, and the more animals you collect, the bigger their clicks will become! You can also keep clicking manually!</p>}</h2>
						{totalClicks === 0 ? '' : <h3 className='goal-bar'>You can capture another animal when you reach: <span>{threshold.toLocaleString('en-US')}</span></h3>}
						</div>
						{totalClicks < threshold ? null :
						<h6>The Wilderness is open!</h6>} 
					</div>
					: 
					<Welcome />
				}
			</div>
		</div>
	)
}

export default Main
