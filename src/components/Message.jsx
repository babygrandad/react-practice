var count = 0;

export default function Message() {

	function HandleClick() {
		count += 1;
		count > 1 ? console.log(`Button Clicked ${count} times`) : console.log(`Button Clicked ${count} time`);
	}

	return (
		<>
			<button onClick={HandleClick}>Click Here to get a Message</button>
		</>
	)
}