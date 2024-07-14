"use client";
import Image from "next/image";
import Header from "../../components/ui/Header";

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
	return (
		<div>
			<Header />
			<section className="mb-40">
				<div className="flex gap-4 h-[50vh] items-center">
					<div className="flex flex-3 h-[50vh] w-full items-center">
						<h2 className="text-[11rem] leading-none font-space font-light">
							Bridging brands <span className="font-semibold pr-16">with</span>
							<span className="font-semibold text-[#7DF9FF]">Success </span>
						</h2>
					</div>
					<div className="flex flex-1 -rotate-90 w-full">
						<div className="font-space flex items-center gap-20 ">
							<span>Instagram</span>
							<span>Facebook</span>
						</div>
					</div>
				</div>
				<div className="my-8 py-8 flex justify-between items-center">
					<div>
						<button title="Go to" className="group cursor-pointer outline-none">
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

					<div className="w-[30rem]">
						<p className="font-saira font-light text-2xl text-right">
							We design and develop user centered digital products, e-commerce
							and brand communication solutions
						</p>
					</div>
				</div>
			</section>
			<section>
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
					<div className="overflow-x-auto pl-[100px] -mx-[140px] -mt-[10rem]">
						<div className="flex gap-10">
							{cardData.map((card) => (
								<div
									key={card.id}
									className="min-w-[40rem] min-h-[40rem] backdrop-blur-md border group border-white/10 rounded-3xl shadow-lg hover:bg-[#7df9ff]/30 bg-[#5A5A5A]/10 px-10 py-8 hover:-translate-y-20 transition duration-200 "
								>
									<div className="flex flex-col gap-20 justify-between h-full">
										<h3 className="font-space font-bold text-8xl">
											{card.title}
										</h3>
										<div className="flex gap-4 w-full justify-between items-center">
											<div className="w-[280px] h-[280px] relative group-hover:scale-50 transition duration-300">
												<Image src={card.icon} alt={card.icon} fill></Image>
											</div>
											<div className="hidden w-[360px] group-hover:block  transition duration-300">
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
		</div>
	);
}
