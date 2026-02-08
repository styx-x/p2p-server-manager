interface Props {
  title: string
}

const AnimatedCardTest = ({title}:Props) => {
	return (
		<div className="bg-blue p-5 border-2 border-black rounded-lg bg-blue-500" style={{userSelect: "none", whiteSpace: "nowrap"}}>
			<h1>{title}</h1>
		</div>
  	)
}

export default AnimatedCardTest