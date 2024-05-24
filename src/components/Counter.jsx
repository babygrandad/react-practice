import { useState } from "react"

export default function Counter(){
	const [count , setCount] = useState(0);
	const [IncreamentBy, setIncreamentby] = useState(1)
	function IncreaseCount(){
		setCount(count + IncreamentBy)
	}

	function DecreaseCount(){
		setCount(count - IncreamentBy)
	}
	
	function IncreaseIncreamentBy(){
		setIncreamentby(IncreamentBy + 1)
	}

	function DecreaseIncreamentBy(){
		setIncreamentby(IncreamentBy - 1)
	}
	return( 
	<div>
		<h1>Count Value is:{count}</h1>
		<button onClick={IncreaseCount}>Increament</button>
		<button onClick={DecreaseCount}>Decreament</button>

		<h1>We are increamenting the value by:{IncreamentBy}</h1>
		<button onClick={IncreaseIncreamentBy}>Increase Increament</button>
		<button onClick={DecreaseIncreamentBy}>Decrease Increament</button>
	</div>
	)
}
