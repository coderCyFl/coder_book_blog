import React from "react";
import ProfileImage from '../assets/images/my_baby_cat.JPG'
import CircleProgressWithLabel from '../components/common/tech-progress';


const techSkills = [
   { techName: 'JS', value: 75  },
   { techName: 'C#', value: 95 },
   { techName: 'Node.js', value: 85 },
]

export default function AboutMe(){

   return (
      <div className="about-me-container">
         <div className="image-grid-container">
            <img src={ProfileImage} alt="Cyrus Chan" className="profile-image">
            </img>
         </div>

         <div className="personal-info-container">
            <h2 className="header-text">About ME</h2>
               <p>Hello! I'm Cyrus Chan, a passionate Full Stack Developer based in Hong Kong. 
            With two years of experience, I currently serve as an Analyst Programmer at a leading property company.</p>
            <p>
          My journey into the tech world has been driven by an unwavering passion for innovation. Originating from the bustling streets of Hong Kong, I bring a unique perspective to my work, combining cultural richness with technological creativity.
            </p>
            <div className="progress-bar-container circle-progress-container">
            {techSkills.map((techSkill, index) => (
            <CircleProgressWithLabel
              key={index}
              techName={techSkill.techName}
              value={techSkill.value}
            />
          ))}
            </div>
         </div>
      </div>           
   )
}