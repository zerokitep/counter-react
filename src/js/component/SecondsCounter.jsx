import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const SecondsCounter = props => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default SecondsCounter;
