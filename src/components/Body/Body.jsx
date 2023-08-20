import React, { useState } from "react";
import * as styles from './bodyStyle'
import { Title, UpperBodyGrid } from "./bodyStyle";

const Body = ({dataArticleLibrary}) =>{
    const [isHovered, setIsHovered] = useState(false);
    const [isMoved, putIsMoved] = useState (false);
    const [isMoved2, storeIsMoved2] = useState (false);


    const imageStyle = {
        paddingLeft:'20px',
        borderLeft:'solid #002349 1px',
        transition: '.3s',
        boxShadow: isMoved? '0px 25px 10px -20px rgba(0,0,0,.75);' : '0px 80px 10px -60px rgba(0,0,0,.15)',
        marginTop: isMoved? '0px' : '20px'
    }

    const imageParkStyle = {
        transition: '.3s',
        boxShadow: isMoved2? '0px 25px 10px -20px rgba(0,0,0,.75);' : '0px 80px 10px -60px rgba(0,0,0,.15)',
        marginTop: isMoved2? '0px' : '20px'
    }

    const handleMove= () => {
        putIsMoved(true);
    }

    const handleStop = () => {
        putIsMoved(false);
    }

    const handleMove2= () => {
        storeIsMoved2(true);
    }

    const handleStop2 = () => {
        storeIsMoved2(false);
    }

    const handleHover= () => {
        setIsHovered(true);
    }

    const handleLeave = () => {
        setIsHovered(false);
    }

return (
    <div>
        
    <Title><section>EXPLORE MORE TO OUR PREMISES</section></Title>
        
    <UpperBodyGrid>

        <div style={styles.libraryPicture}>
            
           <img src="src/assets/library.jpeg" style={imageStyle} onMouseEnter={handleMove} onMouseLeave={handleStop}/>
        
        </div>
        
        <div style={styles.libraryArticle}>
            
        <p style={styles.articleTitle}>Unbeatable Convenience Our Luxurious Library</p>
        <p style={{color:'grey'}}>ipsum dolor sit amet consectetur adipisicing elit. 
            Ea voluptatum cupiditate rem unde voluptatibus ipsam! Aperiam qui eum odit! 
            Animi nam temporibus commodi doloribus veniam repellendus fugit beatae inventore
            molestias?.</p>

        {dataArticleLibrary.map(item =>
        <a href="" style={{textDecoration:'none'}}>
        <span style={{color: isHovered?'#c29b40':'#002349'}} onMouseEnter={handleHover} onMouseLeave={handleLeave}>      {item}</span></a>
        )}

        </div>
        
    </UpperBodyGrid>

    <UpperBodyGrid>
         
         <div style={styles.libraryArticle}>
             
         <p style={styles.articleTitle}>Opulent Park: Your Urban Escape</p>
         <p style={{color:'grey'}}>ipsum dolor sit amet consectetur adipisicing elit. 
             Ea voluptatum cupiditate rem unde voluptatibus ipsam! Aperiam qui eum odit! 
             Animi nam temporibus commodi doloribus veniam repellendus fugit beatae inventore
             molestias?.</p>
        <p style={{color: '#c29b40'}}>_______________________</p>
 
        </div>

        <div style={styles.libraryPicture}>
            
            <img src="src/assets/park.png" style={imageParkStyle} onMouseEnter={handleMove2} onMouseLeave={handleStop2}/>
         
         </div>
 
        
    </UpperBodyGrid>

    </div>
  
)
}


export default Body;