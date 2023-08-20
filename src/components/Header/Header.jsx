
import React from "react";
import * as styles from './headerStyle'
import { NavBar,NavBarLine,BlurBackground,LogoBuilding, Title} from "./headerStyle";

const Header = () =>{

return (
    <div>
        <NavBar>
         <img style={styles.Mag} src="src/assets/mag-glass.png"/>
         <input style={styles.Search} type="text" placeholder="search"/>
         <img style={styles.Helpdesk} src="src/assets/helpdesk.png" />
        </NavBar>

        <NavBarLine></NavBarLine>
       
        <img style={styles.Hero} src="src/assets/nyc.jpg"/>
        <img style={styles.LogoOffice} src="src/assets/Logo-O8.png"/>
        <img style={styles.LogoResidence} src="src/assets/Logo-R8.png"/>

        <BlurBackground></BlurBackground>

        <LogoBuilding>
        <img src="src/assets/building.png"/>
        <img src="src/assets/building2.png"/>
        <img src="src/assets/gym.png"/>
        <img src="src/assets/tr.png"/>
        </LogoBuilding>

        <Title>
        <a href="" style={{marginLeft:'85px', textDecoration:'none', color: 'white'}}>OFFICE 8</a>
        <a href="" style={{marginLeft:'10px', textDecoration:'none', color: 'white'}}>RESIDENCE 8</a>
        <a href="" style={{marginLeft:'-5px',textDecoration:'none', color: 'white'}}>FITNESS</a>
        <a href="" style={{marginRight:'-20px',textDecoration:'none', color: 'white'}}>MANAGEMENT</a>
        </Title>
       


        


        
        
        
   

    </div>
)
}


export default Header;


