import propTypes from "prop-types";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
    let exactDate = birth.toDateString()
    return (
        <div className="IdCard">
            <img width="150" height="150" src={picture} alt="profile-pic" />
            <div>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {exactDate}</p>
            </div>
        </div>
    )
}

IdCard.Pro = {
    firstName: propTypes.string.isRequired,
    lastName: propTypes.string.isRequired,
    gender: propTypes.string,
    height: propTypes.number,
    birth: propTypes.instanceOf(Date),
    picture: propTypes.string,
}

export default IdCard;

