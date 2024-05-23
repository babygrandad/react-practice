import fruits from '../fruits.json';
import Fruit from './Fruit';

export default function Fruits() {
	return <div>
		<ul>
			{fruits.map(fruit => (
				<Fruit 
				key={fruit.id} 
				name={fruit.name} 
				family={fruit.family} 
				genus={fruit.genus}
				nutritions={fruit.nutritions} 
				id={fruit.id}/>
			))}
		</ul>

	</div>
}