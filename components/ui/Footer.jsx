"use client";
import Image from "next/image";
import React from "react";
import cn from "classnames"; // Importing classnames library
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const ArrTR = () => {
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
					stroke: blue-200;
				}

				.group:hover .arrow {
					transform: scale(1.5);
					transform-origin: 10px 14px; /* Adjusted to scale towards the top-right */
				}
			`}</style>
		</div>
	);
};

const BlurCard = ({ id, className }) => {
	return (
		<div
			className={`bg-[#414141]/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg px-10 py-8 ${className}`}
		>
			{id === 1 && (
				<div className="flex flex-col gap-5 justify-evenly">
					<h2 className="w-80 text-8xl font-space font-bold">contact us</h2>
					<div className="flex flex-col gap-10 py-6">
						{["name", "email", "contact"].map((detail) => (
							<div key={detail}>
								<h3 className="text-[1.75rem] font-saira font-semibold">
									{detail}
								</h3>
								<div className="my-4 w-full h-[0.125rem] bg-white"></div>
							</div>
						))}
					</div>
					<div className="flex flex-row-reverse">
						<ArrTR />
					</div>
					<div className="py-2 flex flex-col gap-1">
						<span className="font-saira text-[1.75rem]">
							phone: 123 4567 890
						</span>
						<span className="font-saira text-[1.75rem]">
							email: hello@syntaxbridge.com
						</span>
						<span className="font-saira text-[1.75rem]">
							address: 876, fancy Road, Netherlands.
						</span>
					</div>
				</div>
			)}
			{id === 2 && (
				<div className="flex flex-col gap-7 justify-evenly">
					<h2 className="text-8xl font-space font-bold">faqs</h2>
					<p className="font-saira text-2xl font-semibold tracking-wider">
						does your marketing team offers paid campaigns
					</p>
					<Link
						href="/"
						className="font-saira text-2xl text-blue-200 underline"
					>
						read more
					</Link>
				</div>
			)}
			{id === 3 && (
				<div className="flex flex-col gap-7 justify-evenly">
					<h2 className="text-8xl font-space font-bold">blogs</h2>
					<p className="font-saira text-2xl font-semibold tracking-wider">
						read our latest blogs on technology and related stuff
					</p>
					<div className="flex justify-between">
						<Link
							href="/"
							className="font-saira text-2xl text-blue-200 underline"
						>
							read more
						</Link>
						<span className="">july 28th, 2024</span>
					</div>
				</div>
			)}
			{id === 4 && (
				<div className="flex flex-col gap-7 justify-evenly">
					<div className="flex justify-between items-center">
						<div className="flex flex-col gap-4">
							<FaGoogle className="w-24 h-24" />
							<div className="flex gap-1">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
						<div>
							<Link href="/">
								<ArrTR />
							</Link>
						</div>
					</div>

					<p className="font-saira text-2xl font-semibold tracking-wider leading-snug">
						working with Syntax Bridge has been a game-changer for our business.
						Their dedication to creating user-centric websites with a
						mobile-first design approach truly sets them apart.
					</p>
				</div>
			)}
			{id === 5 && (
				<div className="flex flex-col gap-7 justify-evenly">
					<h2 className="text-8xl font-space font-bold">lets work together</h2>
					<p className="font-saira text-2xl font-semibold leading-snug tracking-wider pr-4">
						submit your resume and a cover letter detailing your experience and
						why you would be a great fit for Syntax Bridge.
					</p>
					<div className="flex flex-row-reverse">
						<ArrTR />
					</div>
				</div>
			)}
		</div>
	);
};

const FooterCard = [
	{
		id: 1,
		titleClassName: "row-span-6 col-span-5",
	},
	{
		id: 2,
		titleClassName: "row-span-2 col-span-3",
	},
	{
		id: 3,
		titleClassName: "row-span-2 col-span-4",
	},
	{
		id: 4,
		titleClassName: "row-span-4 col-span-3",
	},
	{
		id: 5,
		titleClassName: "row-span-4 col-span-4",
	},
];

const Footer = () => {
	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-12 auto-rows-[9rem] gap-6">
				{FooterCard.map((card) => (
					<BlurCard
						id={card.id}
						key={card.id}
						className={cn(card.titleClassName)} // Dynamically apply className
					/>
				))}
			</div>

			<div className="w-full h-20 2xl:h-24 flex justify-between my-4 py-10 2xl:py-20 items-center">
				<div className="flex gap-1">
					<span className="font-saira text-xl text-blue-200">
						© syntaxbridge.
					</span>
					<span>all rights reserved.</span>
				</div>
				<div className="w-[9rem] h-20 2xl:h-20 relative">
					<Image src="/logo.png" alt="logo" fill></Image>
				</div>

				<div>
					<span className="font-saira text-xl">
						privacy policy | terms & conditions
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
