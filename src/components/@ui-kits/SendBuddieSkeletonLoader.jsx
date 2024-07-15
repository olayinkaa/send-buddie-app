import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function SendBuddieSkeletonLoader({ color, highlightColor, ...props }) {
	const theme = useSelector((state) => state.appReducer.themeMode);

	return theme === "dark" ? (
		<SkeletonTheme color={color} highlightColor={highlightColor}>
			<Skeleton inline {...props} />
		</SkeletonTheme>
	) : (
		<Skeleton {...props} />
	);
}

SendBuddieSkeletonLoader.defaultProps = {
	color: "grey",
	highlightColor: "#F7FAFA",
};

SendBuddieSkeletonLoader.propTypes = {
	color: PropTypes.string,
	highlightColor: PropTypes.string,
};

export default SendBuddieSkeletonLoader;
