import React from "react";
import ProfileImage from '../assets/images/my_baby_cat.JPG'
import CircleProgressWithLabel from '../components/common/tech-progress';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

const techSkills = [
   { techName: 'JS', value: 75  },
   { techName: 'C#', value: 95 },
   { techName: 'Node.js', value: 85 },
   { techName: 'Python', value: 85},
   { techName: 'Angular', value: 90}
]

export default function AboutMe(){

   return (
      <div className="about-me-container">
         <div className="image-grid-container">
            <img src={ProfileImage} alt="Cyrus Chan" className="profile-image" />
         </div>

         <div className="personal-info-container">
            <h2 className="header-text">About ME</h2>
            <p>Hello! I'm Cyrus Chan, a passionate Full Stack Developer based in Hong Kong. 
            With two years of experience, I currently serve as an Analyst Programmer at a leading property company.</p>
            <p>
              My journey into the tech world has been driven by an unwavering passion for innovation. Originating from the bustling streets of Hong Kong, I bring a unique perspective to my work, combining cultural richness with technological creativity.
            </p>
            <h2 className="contactme-text">How to Find Me</h2>

            <List component="nav" className="social-media-container" aria-labelledby="social-media-subheader">
               <ListItemButton component="a" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
               <ListItemIcon>
               <InstagramIcon fontSize="large" />
               </ListItemIcon>
               <ListItemText primary="Instagram" />
            </ListItemButton>
            <ListItemButton component="a" href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
               <ListItemIcon>
               <WhatsAppIcon fontSize="large" />
               </ListItemIcon>
               <ListItemText primary="WhatsApp" />
            </ListItemButton>
            <ListItemButton component="a" href="mailto:your.email@example.com">
               <ListItemIcon>
               <EmailIcon fontSize="large" />
               </ListItemIcon>
               <ListItemText primary="Email" />
            </ListItemButton>
        </List>

            <h2 className="tech-skill-text">Tech Skill</h2>
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
