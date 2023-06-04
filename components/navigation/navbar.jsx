import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://dead202.netlify.app" target={"https://dead202.netlify.app"}>
				<img
				<h1 class="baslik-stili">Bu bir başlık</h1>
					src="components/navigation/HD - Logo - PNG.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
