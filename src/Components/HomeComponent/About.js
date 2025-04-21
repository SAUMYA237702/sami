import React from 'react'
import about from "../../Assets/electician(about).jpg";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="box-container">
          <div className="box">
            <h1 className="heading">about us</h1>
            <p>
            we are dedicated to providing reliable and affordable repair services for laptops, TVs, and a wide range of electronic devices. With years of experience and a passion for technology, our skilled technicians work diligently to diagnose and fix issues with precision and care. We pride ourselves on fast turnaround times, honest pricing, and quality workmanship using only trusted parts and tools. Whether it’s a cracked screen, power issue, or performance problem, we aim to restore your devices to perfect working condition. Our goal is to take the stress out of tech problems by offering friendly service, clear communication, and solutions you can count on. Your convenience and satisfaction are always our top priority.
            </p>
          </div>

          <div className="box">
            <div className="image">
              <img src={about} alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About