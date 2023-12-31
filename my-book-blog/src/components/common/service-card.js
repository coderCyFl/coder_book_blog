import React from "react";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AppleIcon from '@mui/icons-material/Apple';
import ApiIcon from '@mui/icons-material/Api';
import CloudIcon from '@mui/icons-material/Cloud';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EarbudsIcon from '@mui/icons-material/Earbuds';


const iconComponents = {
  "ViewModuleIcon": ViewModuleIcon,
  "AppleIcon": AppleIcon,
  "ApiIcon": ApiIcon,
  "CloudIcon":CloudIcon,
  "ColorLensIcon": ColorLensIcon,
  "EarbudsIcon":EarbudsIcon
};

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="service">
       <i> 
      <IconComponent />
      </i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
