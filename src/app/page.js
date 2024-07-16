"use client";
import Image from "next/image";
import ToggleButton from "../../components/ui/ToggleButton";
import React from "react";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { ArrBL, ArrBR, ArrL, ArrR } from "../../components/ui/Arrows";

const OurWork = ({ category, title }) => {
	return (
		<div className="flex flex-col gap-6 group">
			<span className="font-saira font-light text-3xl group-hover:text-blue-200/80 transition duration-[500ms]">
				{category}
			</span>
			<span className="font-space text-8xl font-bold">{title}</span>
			<div className="my-4 w-[700px] h-1 bg-zinc-800  group-hover:bg-blue-200/80 transition-all duration-[500ms]"></div>
		</div>
	);
};

const WorkSec = ({ category, description }) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex gap-10 items-center">
				<span className="font-space text-8xl font-bold">{category}</span>
				<ToggleButton />
			</div>
			<span className="font-saira font-thin text-3xl">{description}</span>
			<div className="my-4 w-full h-1 bg-zinc-800"></div>
		</div>
	);
};

const cardData = [
	{
		id: 1,
		title: "digital",
		icon: "/mic.png",
		description:
			"Promising Unique Brand Identity that Connects with Your Audience & Propel Your Business with Engaging Brand Strategies and Visuals.",
	},

	{
		id: 2,
		title: "web",
		icon: "/web.png",
		description:
			"Promising Unique Brand Identity that Connects with Your Audience & Propel Your Business with Engaging Brand Strategies and Visuals.",
	},

	{
		id: 3,
		title: "data analytics",
		icon: "/res.png",
		description:
			"Promising Unique Brand Identity that Connects with Your Audience & Propel Your Business with Engaging Brand Strategies and Visuals.",
	},

	{
		id: 4,
		title: "human resources",
		icon: "/mag.png",
		description:
			"Promising Unique Brand Identity that Connects with Your Audience & Propel Your Business with Engaging Brand Strategies and Visuals.",
	},

	{
		id: 5,
		title: "development",
		icon: "/dev.png",
		description:
			"Promising Unique Brand Identity that Connects with Your Audience & Propel Your Business with Engaging Brand Strategies and Visuals.",
	},
];

export default function Home() {
	const [activeIndex, setActiveIndex] = useState(0);

	const toggleParagraph = (index) => {
		setActiveIndex(index);
	};

	return (
		<div>
			<section className="my-8 2xl:my-16">
				<div className="flex gap-4 h-[50vh] items-center">
					<div className="flex flex-col flex-3 h-[30vh] 2xl:h-[50vh] w-full items-start justify-evenly">
						<h2 className="text-9xl 2xl:text-[10rem] leading-none font-space font-light">
							Bridging brands
						</h2>
						<div className="flex gap-12 justify-between">
							<span className="font-semibold text-9xl 2xl:text-[10rem]">
								with
							</span>
							<span className="font-semibold text-blue-200 text-9xl 2xl:text-[10rem]">
								Success
							</span>
						</div>
					</div>
					<div className="flex flex-1 -rotate-90 w-full">
						<div className="font-space flex gap-20 ">
							<span>Instagram</span>
							<span>Facebook</span>
						</div>
					</div>
				</div>
				<div className="my-8 flex justify-between items-center">
					<div>
						<ArrBR />
					</div>

					<div className="w-[30rem]">
						<p className="font-saira font-light text-2xl text-right">
							We design and develop user centered digital products, e-commerce
							and brand communication solutions
						</p>
					</div>
				</div>
			</section>
			<section className="my-20">
				<div className="my-10">
					<p className="font-space font-light text-[92px] leading-none text-center">
						a successful collaboration between our clients and us, starts from
						the first steps.
					</p>
				</div>
				<div>
					<h2 className="font-bold font-space text-[15rem] text-center">
						what we do
					</h2>
					<div className="flex overflow-x-auto no-scrollbar pl-[100px] -mx-[140px] -mt-[20rem] h-[800px] items-end ">
						<div className="flex gap-10">
							{cardData.map((card) => (
								<div
									key={card.id}
									className="min-w-[40rem] min-h-[40rem] backdrop-blur-md border group border-white/10 rounded-3xl shadow-lg hover:bg-blue-200/30 bg-[#5A5A5A]/10 px-10 py-8 hover:-translate-y-20 transition duration-[600ms] "
								>
									<div className="flex flex-col gap-20 justify-between h-full">
										<h3 className="font-space font-bold text-8xl">
											{card.title}
										</h3>
										<div className="flex gap-4 w-full justify-between items-center">
											<div className="w-[280px] h-[280px] relative group-hover:scale-50 transition duration-[600ms]">
												<Image src={card.icon} alt={card.icon} fill></Image>
											</div>
											<div className="hidden w-[360px] group-hover:block  transition duration-[500ms]">
												<p className="text-2xl font-saira font-semibold">
													{card.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="my-20">
				<div className="my-14 w-full  h-[30vh]">
					<div className="flex absolute -ml-[10rem] gap-4 nowrap overflow-x-hidden">
						<div className="flex items-center gap-8 justify-evenly slide-animation">
							<span className="font-space min-w-max font-bold text-9xl">
								our work
							</span>
							<ArrBL />
							<span className="font-space font-bold min-w-max  text-9xl">
								our work
							</span>
							<ArrBL />
						</div>
						<div className="flex items-center gap-8 justify-evenly slide-animation">
							<span className="font-space min-w-max font-bold text-9xl">
								our work
							</span>
							<ArrBL />
							<span className="font-space min-w-max  font-bold text-9xl">
								our work
							</span>
							<ArrBL />
						</div>
					</div>
				</div>

				<div className="my-20">
					<div className="my-20 flex justify-between">
						<div className="flex flex-col gap-14">
							<OurWork category="Design & Branding" title="airnd" />
							<OurWork category="Website Development" title="automeme" />
							<OurWork category="Design & Branding " title="brew bean" />

							<div className="flex gap-10">
								<div>
									<ArrL />
								</div>

								<div>
									<ArrR />
								</div>
							</div>
						</div>
						<div className="flex flex-col w-[780px] h-[1100px] border-2 border-white rounded-3xl px-12 pt-4 pb-16 gap-10 justify-evenly">
							<div className="flex justify-between items-center">
								<div className="flex gap-2">
									<FaRegCircle className="w-[30px] h-[30px] " />
									<FaRegCircle className="w-[30px] h-[30px] " />
									<FaRegCircle className="w-[30px] h-[30px] " />
								</div>
								<div className="w-[8rem] h-[4rem] relative">
									<Image src="/logo.png" alt="logo" fill></Image>
								</div>
							</div>
							<div className="w-full h-full rounded-3xl relative overflow-hidden group">
								<div className="relative w-full h-full">
									<Image
										src="/portfolio.png"
										alt="img"
										fill
										className="object-fit object-center group-hover:scale-125 transition-transform duration-[400ms] origin-center"
									></Image>
								</div>
								<div className="absolute inset-0 flex items-center justify-center bg-blue-200 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
									<div className="mt-[1500px] group-hover:mt-0 hover:transition duration-[500ms]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="200px"
											height="200px"
											viewBox="0 0 24 24"
											className="stroke-black fill-none transition duration-300"
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
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="my-20">
					<div className="flex gap-10 justify-between">
						<div className="flex flex-col gap-10 items-start">
							<button onClick={() => toggleParagraph(0)}>
								<h2
									className={`font-space text-9xl font-bold ${
										activeIndex === 0
											? "text-blue-200 transition duration-[400ms]"
											: "text-zinc-600"
									}`}
								>
									search engine
								</h2>
							</button>
							<button onClick={() => toggleParagraph(1)}>
								<h2
									className={`font-space text-9xl font-bold  ${
										activeIndex === 1
											? "text-blue-200 transition duration-[400ms]"
											: "text-zinc-600"
									}`}
								>
									analytics
								</h2>
							</button>
							<button onClick={() => toggleParagraph(2)}>
								<h2
									className={`font-space text-9xl font-bold  ${
										activeIndex === 2
											? "text-blue-200 transition duration-[400ms]"
											: "text-zinc-600"
									}`}
								>
									visualization
								</h2>
							</button>
						</div>
						<div className="max-w-[40rem]">
							<p
								className={`text-3xl leading-10 tracking-wide font-saira ${
									activeIndex === 0
										? "block transition duration-[500ms]"
										: "hidden"
								}`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>

							<p
								className={` text-3xl leading-10 tracking-wide font-saira ${
									activeIndex === 1
										? "block mt-20 transition-transform duration-[500ms]"
										: "hidden"
								}`}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</p>

							<p
								className={` text-3xl leading-10 tracking-wide font-saira ${
									activeIndex === 2
										? "block mt-[11rem] transition-transform duration-[500ms]"
										: "hidden"
								}`}
							>
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="my-10 2xl:my-20">
				<div className="flex flex-col gap-14">
					<div>
						<WorkSec
							category="digital"
							description="Something about digital market etc etc"
						/>

						<div className="flex items-center my-10">
							<div className="flex gap-5 flex-wrap">
								{[
									"define.",
									"collect.",
									"analyse.",
									"develope.",
									"feedback.",
									"improve.",
								].map((title) => (
									<div
										key={title}
										className="w-[32rem] h-[18rem] backdrop-blur-md border border-white/10 rounded-3xl shadow-lg hover:bg-blue-200/40 bg-[#272727]/40 px-10 py-6 transition duration-[400ms] "
									>
										<div className="flex flex-col gap-6 justify-center h-full">
											<div>
												<h3 className="font-space font-bold text-7xl">
													{title}
												</h3>
											</div>
											<div className="w-96">
												<p className="text-xl font-saira font-semibold">
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<WorkSec
						category="web"
						description="Something about Web market etc etc"
					/>
					<WorkSec
						category="data analytics"
						description="Something about data analytics market etc etc"
					/>
				</div>
			</section>
		</div>
	);
}
