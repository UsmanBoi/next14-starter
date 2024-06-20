import React from "react";
import Image from "next/image";
import styles from "./background.module.css";

const Background = () => {
	return (
		<div className={styles.background}>
			<Image
				src="/4.jpg"
				alt="Background"
				fill
				quality={100}
				className={styles.bgImg}
			></Image>
		</div>
	);
};

export default Background;
