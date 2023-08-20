import { styled } from "styled-components";

//Navbar
const NavBar = styled.section`
margin-top: -9px;
margin-left: -8px;
height: 70px;
width: 1440px;
background-color: rgb(152, 0, 0);
position: fixed;
z-index: 1;
`;

const NavBarLine = styled.section`
margin-top: 61px;
margin-left: -8px;
height: 5px;
width: 1440px;
background-color: lightgrey;
position: fixed;
z-index: 1;
background: radial-gradient(circle farthest-side at top left, silver 25%, grey);
`

const Mag={
marginLeft: '1170px',
marginTop: '19px',
position: 'absolute'
}

const Search={
marginLeft: '1200px',
marginTop: '21px',
}

const Helpdesk={
marginLeft: '5px',
marginTop: '10px',
position: 'absolute'
}

//Hero
const Hero ={
width: '1440px',
height: '900px',
position: 'relative',
marginTop: '-80px',
marginLeft: '-7px',
position: 'relative'
}

const LogoOffice={
marginTop: '-750px',
marginLeft: '10px',
position: 'absolute'
}

const LogoResidence={
marginTop: '-750px',
marginLeft: '170px',
position: 'absolute'
}

const BlurBackground = styled.div`
height: 150px;
width: 1440px;
margin-top: -154px;
margin-left: -6px;
background-color: black;
opacity: 0.5;
position: absolute;
`
const LogoBuilding = styled.div`
margin-top: -145px;
left: 100px;
position: absolute;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
width: calc(100% - 200px);
`

const Title = styled.div `
font-family: Helvetica;
font-weight: lighter;
text-decoration: none;
margin-top: -75px;
position: absolute;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
width: calc(100% - 100px);
transition:  0.3s ease-out;
`



export {
    NavBar,NavBarLine, Mag, Search, Helpdesk, Hero, LogoOffice, LogoResidence, BlurBackground,
    LogoBuilding, Title
};