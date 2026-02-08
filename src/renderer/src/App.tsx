import './App.css'
import Navbar from './components/layout/Navbar'
import AnimatedCardTest from './components/layout/AnimatedCardTest'

function App() {
  return (
  	<div className='min-h-screen bg-base-100 text-base-content '>
		<Navbar />

		<div className='flex p-2 bg-green-200 gap-2 flex-wrap justify-center'>
			<AnimatedCardTest title='test'/>
		</div>
	</div>
	)
}

export default App
