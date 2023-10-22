import React from 'react';
import Image from 'next/image';
import styles from "./footer.module.scss";
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles["gh-wrapper"]}>
          <a href="https://github.com/Win4esterD">
            <Image
              className={styles["gh-img"]}
              src="/assets/IMG/github.png"
              alt="github"
              width="60"
              height="55"
            />
          </a>
          <Link
            className={styles["gh-link"]}
            href="https://github.com/Win4esterD"
            prefetch={false}
          >
            Win4esterD
          </Link>
        </div>
        <div className={styles["ln-wrapper"]}>
          <Link
            href="https://www.linkedin.com/in/pavel-didenko-9b6371181/"
            prefetch={false}
          >
            <Image
              src="/assets/IMG/linkedIn.png"
              className={styles["ln-image"]}
              width="50"
              height="50"
              alt="Author's linkedIn"
            />
          </Link>
        </div>
      </footer>
    );
}

export default Footer;