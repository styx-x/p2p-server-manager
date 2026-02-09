import './App.css'
import Navbar from './components/layout/Navbar'
import ServerCardSm from './components/layout/ServerCardSm'

function App() {
  return (
  	<div className='min-h-screen bg-base-100 text-base-content '>
		<Navbar />

		<div className='flex p-2 gap-2 flex-wrap justify-center'>
			<ServerCardSm title='Test'/>
		</div>
	</div>
	)
}

export default App
