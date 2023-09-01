import { useState } from 'react';
import './App.css';

const animals = [
	{
		id: 65,
		emoji: '🐅',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 66,
		emoji: '🐆',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 67,
		emoji: '🦓',
		clicks: 13,
		isCaptured: true,
	},
	{
		id: 68,
		emoji: '🦍',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 69,
		emoji: '🦧',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 70,
		emoji: '🦣',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 71,
		emoji: '🐘',
		clicks: 0,
		isCaptured: false,
	},
	{
		id: 72,
		emoji: '🦛',
		clicks: 0,
		isCaptured: true,
	},
	{
		id: 73,
		emoji: '🦏',
		clicks: 65,
		isCaptured: true,
	},
]

function App() {
  const [showWild, setShowWild] = useState(true);
	const [wildAnimals, setWildAnimals] = useState(animals.filter(animal => !animal.isCaptured));
	const [captAnimals, setCaptAnimals] = useState(animals.filter(animal => animal.isCaptured));
	const [displayAnimals, setDisplayAnimals] = useState(wildAnimals)

	const capture = (animalObj)=> {
		animalObj.isCaptured = true;
	}

	return (
		<div>
			<nav>
				<button onClick={()=> setDisplayAnimals(captAnimals)}>Zoo</button>
				<button onClick={()=> setDisplayAnimals(wildAnimals)}>Wild</button>
			</nav>
			<div className='container'>
			{displayAnimals.map(animal=>{
        return (
          <button 
						key={animal.id}
						className='animal-on-list'
						onClick={(e)=> console.log(e.target.innerText)}
						><h1>{animal.emoji}</h1>
          </button>
        )
      })}
			</div>



			<h1>WELCOME TO KINGDOM CLICKER!</h1>
			<h3>{`{make this conditional, obviously}`} Choose your first animal to get started!</h3>
			{/* image or banner of images here */}
			<p>Additional instructions here if necessary.</p>
		</div>
	)
}

export default App;
