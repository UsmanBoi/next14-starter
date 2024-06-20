import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Logo</div>
			<div className={styles.copyright}>
				Lama Creative Agency. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
