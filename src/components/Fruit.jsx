export default function Fruit({ name, family, genus, nutritions }) {
	return (
		<>
			{nutritions.sugar > 5 ? <li><h3>{name} from the family of {family} and are of the {genus} genome.</h3></li> : ""}
		</>
	)
}