import React from "react";

export const ArrTR = () => {
	return (
		<div>
			<button title="Go to" className=" cursor-pointer outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="150px"
					height="150px"
					viewBox="0 0 24 24"
					className="stroke-white group fill-none transition duration-300"
				>
					<path
						d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
						className="circle transition duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M10 14L14 10"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M12 10L14 10L14 12"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
				</svg>
			</button>
			<style jsx>{`
				.group:hover .circle,
				.group:hover .arrow {
					stroke: #7df9ff;
				}

				.group:hover .arrow {
					transform: scale(1.5);
					transform-origin: 10px 14px; /* Adjusted to scale towards the top-right */
				}
			`}</style>
		</div>
	);
};

export const ArrBL = () => {
	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200px"
				height="200px"
				viewBox="0 0 24 24"
				className="stroke-white fill-none transition duration-300"
			>
				<path
					d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
					className="circle transition duration-300"
					strokeWidth="0.3"
				></path>
				<path
					d="M14 10L10 14"
					className="arrow transition-transform duration-300"
					strokeWidth="0.3"
				></path>
				<path
					d="M13 14L10 14L10 11"
					className="arrow transition-transform duration-300"
					strokeWidth="0.3"
				></path>
			</svg>
		</div>
	);
};

export const ArrBR = () => {
	return (
		<div>
			<button className="group cursor-pointer outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="240px"
					height="240px"
					viewBox="0 0 24 24"
					className="stroke-white fill-none transition duration-300"
				>
					<path
						d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
						className="circle transition duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M10 10L14 14"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M11 14L14 14L14 11"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
				</svg>
			</button>
			<style jsx>{`
				.group:hover .circle,
				.group:hover .arrow {
					stroke: #7df9ff;
				}

				.group:hover .arrow {
					transform: scale(1.25);
					transform-origin: start;
				}
			`}</style>
		</div>
	);
};

export const ArrR = () => {
	return (
		<div>
			<button className="group cursor-pointer outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="240px"
					height="240px"
					viewBox="0 0 24 24"
					className="stroke-white fill-none transition duration-300"
				>
					<path
						d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
						className="circle transition duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M10 12L16 12"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M14 10L16 12L14 14"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
				</svg>
			</button>
			<style jsx>{`
				.group:hover .circle,
				.group:hover .arrow {
					stroke: #7df9ff;
				}

				.group:hover .arrow {
					transform: scale(1.25);
					transform-origin: left;
				}
			`}</style>
		</div>
	);
};

export const ArrL = () => {
	return (
		<div>
			<button className="group cursor-pointer outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="240px"
					height="240px"
					viewBox="0 0 24 24"
					className="stroke-white fill-none transition duration-300"
				>
					<path
						d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
						className="circle transition duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M14 12L8 12"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
					<path
						d="M10 10L8 12L10 14"
						className="arrow transition-transform duration-300"
						strokeWidth="0.3"
					></path>
				</svg>
			</button>
			<style jsx>{`
				.group:hover .circle,
				.group:hover .arrow {
					stroke: #7df9ff;
				}

				.group:hover .arrow {
					transform: scale(1.25);
					transform-origin: right;
				}
			`}</style>
		</div>
	);
};
