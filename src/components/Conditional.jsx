import Welcome from "./Welcome";
import Code from "./Code";

export default function Conditional() {
	const display = true;

	return (
		<div>
			{display ? <Welcome /> : <Code />}
		</div>
	)

}