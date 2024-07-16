import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="w-full h-20 2xl:h-24 flex justify-between my-4 py-10 2xl:py-20 items-center">
			<Link href="/">
				<div className="flex flex-col gap-1 items-center">
					<div className="w-[9rem] h-20 2xl:h-20 relative">
						<Image src="/logo.png" alt="logo" fill></Image>
					</div>
					<span className="font-sans font-semibold text-lg text-center tracking-wider">
						SYNTAX BRIDGE
					</span>
				</div>
			</Link>
			<div>
				<button
					title="Add New"
					className="scale-125 group cursor-pointer outline-none hover:scale-150 duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50px"
						height="50px"
						viewBox="0 0 24 24"
						className="stroke-white fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
					>
						<path
							d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
							strokeWidth="1"
						></path>
						<g className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125">
							<path d="M8 12H16" strokeWidth="1"></path>
							<path d="M12 16V8" strokeWidth="1"></path>
						</g>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
