// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Stil dosyasını import et

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img className={styles.logo} src="https://r.resimlink.com/wB2JTSEf.png" alt="Logo" />
      </a>
      {/* Diğer Navbar öğeleri buraya eklenebilir */}
    </nav>
  );
};

export default Navbar;
