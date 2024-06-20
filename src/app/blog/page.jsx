"use client";
import React from "react";
import Head from "next/head";
import styles from "./blog.module.css";
import PostCard from "@/components/PostCard/PostCard";
import { blogData } from "./blogData";

const BlogPage = () => {
	return (
		<>
			{/* <Head>
				<style jsx global>{`
					head {
						@keyframes appear {
							from {
								opacity: 0;
								scale: 0.5;
							}
							to {
								opacity: 1;
								scale: 1;
							}
						}

						.post {
							animation: appear linear;
							animation-timeline: view();
						}
					}
				`}</style>
			</Head> */}
			<div className={styles.container}>
				{blogData.map((blog) => (
					<div key={blog.id} className={styles.post}>
						<PostCard blogData={blog} />
					</div>
				))}
			</div>
		</>
	);
};

export default BlogPage;
