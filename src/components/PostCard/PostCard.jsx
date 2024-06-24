import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div key={post.id} className={styles.upperCon}>
				<div className={styles.imageCon}>
					<Image
						src="https://images.pexels.com/photos/1060791/pexels-photo-1060791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="my img"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className={styles.blogImg}
						priority={false}
					></Image>
				</div>
				<div className={styles.dateCon}>
					<span className={styles.date}>10/2/2024</span>
				</div>
			</div>
			<div className={styles.lowerCon}>
				<h2 className={styles.blogTitle}>{post.title}</h2>
				<p className={styles.blogDesc}>{post.body}</p>
				<Link href={`/blog/${post.id}`} className={styles.artlink}>
					Read More
				</Link>
			</div>
		</div>
	);
};

// Manually creating postcards

// const PostCard = ({ blogData }) => {
// 	return (
// 		<div className={styles.container}>
// 			<div key={blogData.id} className={styles.upperCon}>
// 				<div className={styles.imageCon}>
// 					<Image
// 						src={blogData.imageUrl}
// 						alt="my img"
// 						fill
// 						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// 						className={styles.blogImg}
// 						priority={false}
// 					></Image>
// 				</div>
// 				<div className={styles.dateCon}>
// 					<span className={styles.date}>10/2/2024</span>
// 				</div>
// 			</div>
// 			<div className={styles.lowerCon}>
// 				<h2 className={styles.blogTitle}>{blogData.title}</h2>
// 				<p className={styles.blogDesc}>{blogData.desc}</p>
// 				<Link href={`/blog/${blogData.id}`} className={styles.artlink}>
// 					Read More
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };
export default PostCard;
