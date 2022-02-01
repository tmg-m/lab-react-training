import './1-7.css'
function DriverCard({ name, rating, img, car }) {

  let rounded = Math.round(rating)
  let rate = ["☆", "☆", "☆", "☆", "☆",]
  let status = [];

  for (let i = 0; i < rounded; i++) {
    status.push(i);
  }
  let stars = status.map((element) => element = "★").join("")
  rate.splice(0, rounded, stars).join("")
  rate.join("")

  return (
    <div className="driver-card">
      <img src={img} />
      <div>
        <h1>{name}</h1>
        <p>{rate}</p>
        <h4>{car.model} - {car.licensePlate}</h4>
      </div>
    </div>
  )
}

export default DriverCard;