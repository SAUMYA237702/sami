import React from 'react'
import {
    FaGoogle,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer">
        <a href="#" className="logo">
          As<span>Service</span>
        </a>
        <p>
          we specialize in the repair and maintenance of laptops, TVs, and other electronic devices. 
          Our team is committed to delivering fast, reliable, 
          and affordable services with a focus on quality and customer satisfaction.<br />
          Whether it’s a cracked screen, software issue, or hardware failure, we’re here to get your devices back in top shape.<br />
        </p>
        <div className="socials">
          <ion-icon name="logo-google">
            <FaGoogle />
          </ion-icon>
          <ion-icon name="logo-twitter">
            <FaTwitter />
          </ion-icon>
          <ion-icon name="logo-youtube">
            <FaYoutube />
          </ion-icon>
          <ion-icon name="logo-linkedin">
            <FaLinkedin />
          </ion-icon>
          <ion-icon name="logo-whatsapp">
            <FaWhatsapp/>
          </ion-icon>
        </div>
      </section>
  )
}

export default Footer