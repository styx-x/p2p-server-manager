interface Props {
  title: string
}

const ServerCardSm = ({title}:Props) => {
	return (
		<div className="bg-blue p-5 border-2 border-black rounded-lg bg-base-200 w-sm" style={{userSelect: "none", whiteSpace: "nowrap"}}>
			<h1 className="text-4xl font-bold">{title}</h1>
			<div className="flex gap-2 flex-wrap justify-center mt-5">
				<p>Status: <span className="text-error">Stopped</span></p>
				<p className="ml-auto">0/20</p>
			</div>
		</div>
  	)
}

export default ServerCardSm

// When collapsed show
// 
// 1. Name (custom)
// 2. Status
// 3. Player Count (fetch somehow)
// 
// When Expanded show
// 
// 1. Start/Stop/Restart (restart comes with 5 minute warning then server shutdown) option
// 2. Server CMD
// 3. Server Files
// 4. Server Options (properties)
// -  Also include all details from before ofc