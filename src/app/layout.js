import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next App",
	description: "Next.js starter app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="rootContainer">
					<Background />
					<div className="navbarContainer">
						<Navbar />
					</div>
					<div className="contentCon">
						<div className="content">{children}</div>
					</div>
					<div className="footerContainer">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
