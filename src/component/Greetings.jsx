import ('./1-7.css');
function Greetings({ lang, children }) {

	let greet;

	switch (lang) {
		case "en": greet = "Hello"
			break;
		case "es": greet = "Hola"
			break;
		case "fr": greet = "Bonjour"
			break;
		case "de": greet = "Hallo"
			break;
		default:
			break;
	}

	return (
		<div className="greetings">
			<p>{greet} {children}</p>
		</div>
	)
}

export default Greetings;