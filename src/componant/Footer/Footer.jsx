
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer-parent parent">
      <div className="footer-cont container">
        <p>
          © {new Date().getFullYear()} <span>Sunil Shelke</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
