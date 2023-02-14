import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt='rocket logo' />
        <strong>to<span>do</span></strong>
      </div>
    </header>
  )
}