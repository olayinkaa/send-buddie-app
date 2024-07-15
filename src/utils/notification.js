import { toast } from "react-toastify";

const Notification = ({
	status = "info", // error, warning, info, dark
	message = "", // custom message
	direction="top-center", // top-center, top-left, bottom-center, bottom-right, bottom-left,
    timeOut=5000,
	toastId=undefined,
	...props
} = {}) => {
	return toast(message, {
		position: direction,
		type: status,
		autoClose: timeOut,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		toastId,
		...props,
	});
};

export default Notification;
