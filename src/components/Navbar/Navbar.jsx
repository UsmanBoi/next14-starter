import React from "react";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className={styles.navbarcon}>
			<Link href="/" className={styles.logo}>
				Logo
			</Link>
			<div>
				<Links />
			</div>
		</div>
	);
};

export default Navbar;
