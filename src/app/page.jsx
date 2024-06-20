import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.txtContainer}>
				<h1 className={styles.tagLine}>Creative Thoughts Agency</h1>
				<p className={styles.description}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
					laudantium sed aperiam doloribus eveniet quidem aspernatur, iure
					dignissimos. Facere deleniti repellendus illum est ratione esse sed
					quasi laudantium suscipit a?
				</p>
				<div className={styles.buttons}>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>

				<div className={styles.brands}>
					<Image
						src="/brands.png"
						alt="brands image"
						fill
						className={styles.brandImg}
					/>
				</div>
			</div>

			<div className={styles.imgContainer}>
				<Image
					src="/hero.gif"
					alt="hero section image"
					fill
					className={styles.heroImg}
					unoptimized
				/>
			</div>
		</div>
	);
};

export default Home;
