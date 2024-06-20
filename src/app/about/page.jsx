import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
	const skills = [
		{ skill: "Years of Experience", quantity: "5" },
		{ skill: "No. of Projects", quantity: "300+" },
		{ skill: "Collaborations", quantity: "8" },
	];

	return (
		<div className={styles.container}>
			{/* Image to display via web or another website 
				
				<Image
					src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="about some"
					fill
				/> */}
			<div className={styles.txtContainer}>
				<span className={styles.pageName}>About Page</span>
				<div className={styles.tagLine}>
					<h1>
						We create digital ideas that are bigger, bolder, better and faster.
					</h1>
				</div>
				<p className={styles.description}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
					laudantium sed aperiam doloribus eveniet quidem aspernatur, iure
					dignissimos. Facere deleniti repellendus illum est ratione esse sed
					quasi laudantium suscipit
				</p>
				<div className={styles.skillContainer}>
					{skills.map((item, index) => (
						<div className={styles.indivCon} key={index}>
							<div className={styles.quantity}>{item.quantity}</div>
							<div className={styles.skill}>{item.skill}</div>
						</div>
					))}
				</div>
			</div>

			<div className={styles.imgContainer}>
				<Image
					src="/about.png"
					alt="about section image"
					fill
					className={styles.abtImg}
				/>
			</div>
		</div>
	);
};

export default AboutPage;
