import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://dead202.netlify.app" target={"https://dead202.netlify.app"}>
				<img
				
					className={styles.dead202.logo}
					src="HD - Logo - PNG.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
