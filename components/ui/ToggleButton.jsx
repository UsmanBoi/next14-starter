import { useState } from "react";

const ToggleButton = () => {
	const [isToggled, setIsToggled] = useState(false);

	const handleClick = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div
			className={`relative w-24 h-12 rounded-full p-1 cursor-pointer transition-colors duration-300 bg-gray-700`}
			onClick={handleClick}
		>
			<div
				className={`absolute top-0 left-0 h-full w-1/2 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
					isToggled ? "translate-x-full bg-[#7DF9FF] rotate-90" : "bg-white"
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-18 h-18"
				>
					<path d="M9 12h6M12 9l3 3-3 3" className="fill-current text-black" />
				</svg>
			</div>
		</div>
	);
};

export default ToggleButton;
