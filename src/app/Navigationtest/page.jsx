"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const NavigationTestPage = () => {
	const pathname = usePathname();
	const searchwords = useSearchParams();

	const q = searchwords.get("q");

	const [showText, setShowText] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setShowText(true);

		console.log(q);
		console.log(pathname);
		setTimeout(() => {
			setShowText(false);

			router.push("/");
			// router.back();    could be used for buttons
			// router.forward();
			// router.replace("/"); validation and authentication processes
			// router.refresh();
		}, 3000);
	};
	return (
		<div>
			<Link href="/" prefetch={false}>
				Click here
			</Link>
			<button onClick={handleClick}>Router and Navigation</button>
			{showText && (
				<div>
					<div style={{ fontSize: 40, color: "whitesmoke", marginTop: 20 }}>
						Validating...
					</div>
				</div>
			)}
		</div>
	);
};

export default NavigationTestPage;
