import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, People } from '@material-ui/icons';
import { Link } from "react-router-dom";
import React from 'react';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';


function BotNav () {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="btn-nav" role='navigation' aria-label='Bottom-Navbar'>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true} >
        <BottomNavigationAction label="Home" value="/" icon={<ThreeSixtyIcon />} component={Link} data-testid='home-button' to='/' />
        <BottomNavigationAction label="Get-Started" value="/" icon={<Home />} component={Link} data-testid='getstarted-button' to='/get_started' />
        <BottomNavigationAction label="User" value="/create_order" icon={<People />} component={Link} data-testid='user-button' to='/create_order' />
      </BottomNavigation>
    </div>
  );
}

export default BotNav;



