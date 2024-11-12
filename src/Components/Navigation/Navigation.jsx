import React from 'react'
import styles from './Navigation.module.css'
const Navigation = () => {
    console.log(styles)

  return (
 
      <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className='nav-btn'>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </div>
      </nav>
 
  )
}

export default Navigation
