import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Navbar.module.css"; // Navbar bileşenine ait stil dosyasının doğru şekilde içe aktarıldığından emin olun

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://dead202.netlify.app" target="_blank" rel="noopener noreferrer">
				<img
					src="/components/navigation/HD - Logo - PNG.png" // Logo dosyasının yolunu doğru şekilde ayarlayın
					alt="" // Alt metni (alternate text) ekleyin
					className="baslik-stili" // Başlık için doğru sınıf adını (class name) ekleyin
				/>
			</a>
			<ConnectButton />
		</nav>
	);
}
