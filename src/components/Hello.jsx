function Hello({person}) {

	return (
		<h1>{person.message} {person.emoji} {person.name} your seat is seat number {person.seatNumbers}.</h1>
	)
}

export default Hello