import React from "react";
import Link from "next/link";

const Links = () => {
	const links = [
		{
			title: "Homepage",
			path: "/",
		},
		{
			title: "About",
			path: "/about",
		},
		{
			title: "Contact",
			path: "/contact",
		},
		{
			title: "Blog",
			path: "/blog",
		},
	];
	return (
		<div>
			{links.map((linkitem) => (
				<Link href={linkitem.path} key={linkitem.path}>
					{linkitem.title}
				</Link>
			))}
		</div>
	);
};

export default Links;
