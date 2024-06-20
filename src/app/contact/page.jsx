import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="/contact.png"
					alt="contact section image"
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
					fill
					className={styles.contactImg}
				/>
			</div>

			<div className={styles.formContainer}>
				<form className={styles.form}>
					<input type="text" placeholder="Name"></input>
					<input type="text" placeholder="Email"></input>
					<input type="text" placeholder="Phone number"></input>
					<textarea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder="Message"
					></textarea>
				</form>

				<button className={styles.sendbtn}>Send</button>
			</div>
		</div>
	);
};

export default ContactPage;
