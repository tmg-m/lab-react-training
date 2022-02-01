function Rating({ children }) {

  let rounded = Math.round(children)
  let rate = ["☆", "☆", "☆", "☆", "☆",]
  let status = [];

  for (let i = 0; i < rounded; i++) {
    status.push(i);
  }
  let stars = status.map((element) => element = "★").join("")
  rate.splice(0, rounded, stars).join("")
  rate.join("")
  
  /* 
  let rounded = Math.round(children)
  let rate;

  switch (rounded) {
    case 0: rate = "☆☆☆☆☆"
      break;
    case 1: rate = "★☆☆☆☆"
      break;
    case 2: rate = "★★☆☆☆"
      break;
    case 3: rate = "★★★☆☆"
      break;
    case 4: rate = "★★★★☆"
      break;
    case 5: rate = "★★★★★"
      break;
    default:
      break;
  }
  */

  let starsStyle = {
    fontSize: "50px",
  }

  return (
      <>
        <p style={starsStyle}>{rate}</p>
      </>
  )
}

export default Rating;