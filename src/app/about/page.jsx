import React from "react";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const AboutPage = () => {
	return (
		<div>
			<section className="my-8 2xl:my-16">
				<div className="flex flex-col gap-4 h-[60vh] items-center justify-around ">
					<div className="flex h-[30vh] 2xl:h-[30vh] w-full items-center justify-evenly">
						<h2 className="text-center text-4xl 2xl:text-8xl font-space font-light">
							we fill the gap between
						</h2>
					</div>
					<div className="flex w-full justify-between gap-10 items-center">
						<span className="min-w-fit text-4xl font-space font-bold">
							business goals
						</span>
						<div className="flex h-1 w-full justify-between items-center bg-white">
							<GoDotFill className="w-[40px] h-[40px] -ml-4" />
							<GoDotFill className="w-[40px] h-[40px] -mr-4" />
						</div>
						<span className="min-w-fit text-4xl font-space font-bold">
							customer needs
						</span>
					</div>
				</div>
				<div className="my-10 flex items-center justify-center">
					<div className="w-[76rem]">
						<p className="font-space text-blue-200 font-bold text-9xl text-center">
							by designing ideas that matter
						</p>
					</div>
				</div>
			</section>

			<section className="my-8 2xl:my-16 h-[100vh]">
				<div className="flex gap-4 h-[90vh] items-center justify-around ">
					<div className="flex-1 flex flex-col h-full gap-8 items-start py-8 pr-6">
						<h2 className="text-4xl 2xl:text-9xl font-space font-bold">
							as we move forward,
						</h2>
						<p className="text-[1.75rem] font-saira">
							we eagerly anticipate weaving vibrant connections with small and
							local enterprises, crafting partnerships that resonate with
							significance, and witnessing our clients`&apos` triumphs soar to
							new heights. <br /> <br /> In our journey ahead, we yearn to cross
							paths with kindred spirits visionary, motivated, and fervent
							business owners who mirror the enthusiasm we`&apos`ve relished in
							our collaborative endeavors.
						</p>
						<div className="flex gap-5 items-center w-full justify-between py-16">
							{[
								{ title: "happy clients", amount: "500+" },
								{ title: "projects delievered", amount: "750+" },
								{ title: "workforce", amount: "50+" },
							].map((item) => (
								<div key={item.title} className="flex flex-col gap-1">
									<span className="font-space text-[5.125rem] font-bold">
										{item.amount}
									</span>
									<span className="font-saira text-[1.75rem] font-semibold">
										{item.title}
									</span>
								</div>
							))}
							<div className="flex"></div>
						</div>
					</div>
					<div className="flex-1 w-[50%] h-full relative">
						<Image
							src="/designer.png"
							alt="designer img"
							fill
							className="object-fit object-center"
						></Image>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
