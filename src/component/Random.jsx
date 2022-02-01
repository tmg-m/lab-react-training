import ('./1-7.css')

function Random({ min, max }) {

	let number = Math.floor(Math.random() * (max - min) + min);

	return (
		<div className="Random">
			<p>Random Value between {min} and {max} => {number}.</p>
		</div>
	)
}
export default Random;