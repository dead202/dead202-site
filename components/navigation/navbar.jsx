// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Stil dosyasını import et
import logo from './HD - Logo - PNG.png'; // Logo dosyasını import et

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="Logo" /> {/* Logo'yu burada kullanın */}
      </a>
      {/* Diğer Navbar öğeleri buraya eklenebilir */}
    </nav>
  );
};

export default Navbar;
