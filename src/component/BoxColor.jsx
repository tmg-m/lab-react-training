function BoxColor({ r, g, b }) {
	const divStyle = {
		width: "500px",
		height: "100px",
		backgroundColor: `rgb(${r}, ${g}, ${b})`,
		marginBottom: "5px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		color: "black",
		border: "3px solid black",
		fontSize: "20px",
	};

	const rgbToHex = function (rgb) {
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}
		return hex;
	};

	const hexCode = rgbToHex(r) + rgbToHex(g) + rgbToHex(b);


	return (
		<div style={divStyle}>
			<p> rgb({r},{g},{b})</p>
			<p>{hexCode}</p>
		</div>
	)
}

export default BoxColor;