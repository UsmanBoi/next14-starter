"use client";
import React from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";
import { blogData } from "@/app/blog/blogData";
import { useParams } from "next/navigation";

const getBlogPostById = (id) => {
	return blogData.find((blog) => blog.id === id);
};

const SinglePostPage = () => {
	const { slug } = useParams();
	const singleBlogData = getBlogPostById(slug);

	if (!singleBlogData) {
		return <p>Blog post not found</p>;
	}

	return (
		<div>
			{singleBlogData ? (
				<div key={singleBlogData.id} className={styles.container}>
					<div className={styles.bgCon}></div>
					<div className={styles.upperCon}>
						<div className={styles.imageCon}>
							<Image
								src={singleBlogData.imageUrl}
								alt={singleBlogData.title}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className={styles.blogImg}
								priority={false}
							/>
						</div>
					</div>
					<div className={styles.lowerCon}>
						<h2 className={styles.blogTitle}>{singleBlogData.title}</h2>
						<span className={styles.date}>10/2/2024</span>
						<p className={styles.blogDesc}>{singleBlogData.desc}</p>
					</div>
				</div>
			) : (
				<p>Blog post not found</p>
			)}
		</div>
	);
};
export default SinglePostPage;
