const Navbar = () => {
  return (
	<div className='navbar bg-base-300'>
		<div className="btn btn-primary btn-square">
			<svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M 16 22 L 64 22" stroke="#C2CCDE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M 16 40 L 64 40" stroke="#C2CCDE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M 16 58 L 64 58" stroke="#C2CCDE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>

		<div className='btn btn-primary btn-square ml-auto'>
			<svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M 40 25 L 40 55" stroke="#FFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M 25 40 L 55 40" stroke="#FFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	</div>
  )
}

export default Navbar