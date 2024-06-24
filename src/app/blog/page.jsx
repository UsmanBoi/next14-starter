import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/PostCard/PostCard";
// import { blogData } from "./blogData";

const getData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		// cache: "no-store",
		next: { revalidate: 3600 },
	});
	if (!res.ok) {
		throw new Error("Something went wrong");
	}
	return res.json();
};

const BlogPage = async () => {
	const posts = await getData();

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div key={post.id} className={styles.post}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

// Creating Data Manually from blogData.js

// const BlogPage = () => {
// 	return (
// 		<div className={styles.container}>
// 			{blogData.map((blog) => (
// 				<div key={blog.id} className={styles.post}>
// 					<PostCard blogData={blog} />
// 				</div>
// 			))}
// 		</div>
// 	);
// };

export default BlogPage;
