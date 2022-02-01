import visa from "../assets/images/visa.png"
import master from "../assets/images/master-card.svg"
import ('./1-7.css')

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

	const defaultStyle = {
		width: "450px",
		height: "200px",
		backgroundColor: `${bgColor}`,
		color: `${color}`,
		borderRadius: "10px",
	}

	let logo;

	if (type === "Visa") {
		logo = visa
	} else {
		logo = master
	}

	return (
		<div style={defaultStyle} className="credit-card">
			<img className="logo-cred" src={logo} />

			<p className="card-num">
				<span className="bullet">•••• •••• •••• </span>
				{number.slice(-4)}
			</p>

			<div className="info-container">
				<div className="date-bank">
					<p>Expires {expirationMonth}/{expirationYear}</p>
					<p>{bank}</p>
				</div>
				<p>{owner}</p>
			</div>

		</div>
	)
}

export default CreditCard;
