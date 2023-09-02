import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Success from './components/Success';

// const animals = [
// 	{
// 		id: 1,
// 		emoji: '🐵',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 2,
// 		emoji: '🐒',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 3,
// 		emoji: '🦍',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 4,
// 		emoji: '🦧',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 5,
// 		emoji: '🐶',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 6,
// 		emoji: '🐕',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 7,
// 		emoji: '🦮',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 8,
// 		emoji: '🐕‍🦺',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 9,
// 		emoji: '🐩',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 10,
// 		emoji: '🐺',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 11,
// 		emoji: '🦊',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 12,
// 		emoji: '🦝',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 13,
// 		emoji: '🐱',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 14,
// 		emoji: '🐈',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 15,
// 		emoji: '🐈‍⬛',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 16,
// 		emoji: '🦁',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 17,
// 		emoji: '🐯',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 18,
// 		emoji: '🐅',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 19,
// 		emoji: '🐆',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 20,
// 		emoji: '🐴',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 21,
// 		emoji: '🐎',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 22,
// 		emoji: '🦄',
// 		clicks: 1000,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 23,
// 		emoji: '🦓',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 24,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: false,
// 	// },
// 	{
// 		id: 25,
// 		emoji: '🦌',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 26,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: false,
// 	// },
// 	{
// 		id: 27,
// 		emoji: '🦬',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 28,
// 		emoji: '🐮',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 29,
// 		emoji: '🐂',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 30,
// 		emoji: '🐃',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 31,
// 		emoji: '🐄',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 32,
// 		emoji: '🐷',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 33,
// 		emoji: '🐖',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 34,
// 		emoji: '🐗',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 35,
// 		emoji: '🐏',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 36,
// 		emoji: '🐑',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 37,
// 		emoji: '🐐',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 38,
// 		emoji: '🐪',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 39,
// 		emoji: '🐫',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 40,
// 		emoji: '🦙',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 41,
// 		emoji: '🦒',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 42,
// 		emoji: '🐘',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 43,
// 		emoji: '🦣',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 44,
// 		emoji: '🦏',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 45,
// 		emoji: '🦛',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 46,
// 		emoji: '🐭',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 47,
// 		emoji: '🐁',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 48,
// 		emoji: '🐀',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 49,
// 		emoji: '🐹',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 50,
// 		emoji: '🐰',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 51,
// 		emoji: '🐇',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 52,
// 		emoji: '🐿',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 53,
// 		emoji: '🦫',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 54,
// 		emoji: '🦔',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 55,
// 		emoji: '🦇',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 56,
// 		emoji: '🐻',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 57,
// 		emoji: '🐻‍❄️',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 58,
// 		emoji: '🐨',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 59,
// 		emoji: '🐼',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 60,
// 		emoji: '🦥',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 61,
// 		emoji: '🦦',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 62,
// 		emoji: '🦨',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 63,
// 		emoji: '🦘',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 64,
// 		emoji: '🦡',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 65,
// 		emoji: '🦃',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 66,
// 		emoji: '🐔',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 67,
// 		emoji: '🐓',
// 		clicks: 13,
// 		isCaptured: true,
// 	},
// 	{
// 		id: 68,
// 		emoji: '🐣',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 69,
// 		emoji: '🐤',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 70,
// 		emoji: '🐥',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 71,
// 		emoji: '🐦',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 72,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: true,
// 	// },
// 	{
// 		id: 73,
// 		emoji: '🐧',
// 		clicks: 65,
// 		isCaptured: true,
// 	},
// 	{
// 		id: 74,
// 		emoji: '🕊',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 75,
// 		emoji: '🦅',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 76,
// 		emoji: '🦆',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 77,
// 		emoji: '🦢',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 78,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: false,
// 	// },
// 	{
// 		id: 79,
// 		emoji: '🦉',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 80,
// 		emoji: '🦤',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 81,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: false,
// 	// },
// 	{
// 		id: 82,
// 		emoji: '🦩',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 83,
// 		emoji: '🦚',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 84,
// 		emoji: '🦜',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 85,
// 		emoji: '🐸',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 86,
// 		emoji: '🐊',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 87,
// 		emoji: '🐢',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 88,
// 		emoji: '🦎',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 89,
// 		emoji: '🐍',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 90,
// 		emoji: '🐲',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 91,
// 		emoji: '🐉',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 92,
// 		emoji: '🦕',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 93,
// 		emoji: '🦖',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 94,
// 		emoji: '🐳',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 95,
// 		emoji: '🐋',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 96,
// 		emoji: '🐬',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 97,
// 		emoji: '🦭',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 98,
// 		emoji: '🐟',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 99,
// 		emoji: '🐠',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 100,
// 		emoji: '🐡',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 101,
// 		emoji: '🦈',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 102,
// 		emoji: '🐙',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	// {
// 	// 	id: 103,
// 	// 	emoji: '',
// 	// 	clicks: 0,
// 	// 	isCaptured: false,
// 	// },
// 	{
// 		id: 104,
// 		emoji: '🐚',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 105,
// 		emoji: '🪸',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 106,
// 		emoji: '🦀',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 107,
// 		emoji: '🦞',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 108,
// 		emoji: '🦐',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 109,
// 		emoji: '🦑',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 110,
// 		emoji: '🦪',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 111,
// 		emoji: '🐌',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 112,
// 		emoji: '🦋',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 113,
// 		emoji: '🐛',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 114,
// 		emoji: '🐜',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 115,
// 		emoji: '🐝',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 116,
// 		emoji: '🪲',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 117,
// 		emoji: '🐞',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 118,
// 		emoji: '🦗',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 119,
// 		emoji: '🪳',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 120,
// 		emoji: '🕷',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 121,
// 		emoji: '🦂',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 122,
// 		emoji: '🦟',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 123,
// 		emoji: '🪰',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 124,
// 		emoji: '🪱',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// 	{
// 		id: 125,
// 		emoji: '🦠',
// 		clicks: 0,
// 		isCaptured: false,
// 	},
// ]

function App() {

	return (
		<Router>
			<div className='app-container'>
				<Routes>
					<Route 
					  path='/' 
						element={<Main />} 
					/>
					<Route 
					  path='/success' 
						element={<Success />} 
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App;
