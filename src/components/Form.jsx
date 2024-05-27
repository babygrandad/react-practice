import { useState } from "react"

export default function Form() {
	const [name, setName] = useState({firstName:"", lastName:""});
	
	function HandleSubmit(e){
		e.preventDefault()
		console.log(name)
	}
	
	return (
		<div>
			<form action="">
				<input onChange={(e) => setName({...name, firstName: e.target.value})} type="text" value={name.firstName} />
				<input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" value={name.lastName} />
				<br />
				<button onClick={(e) => HandleSubmit(e)}>add</button>
			</form>
		</div>
	)
}