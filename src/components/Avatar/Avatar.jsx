import PropTypes from "prop-types";
import styles from "./Avatar.module.css";
import blank_profile from "../../assets/blank_profile.png";

function Avatar({ imgSrc }) {
	return (
		<div className={styles.circle}>
			<img src={imgSrc ? imgSrc : blank_profile} alt="user" />
		</div>
	);
}

Avatar.propTypes = {
	imgSrc: PropTypes.string,
};

export default Avatar;
