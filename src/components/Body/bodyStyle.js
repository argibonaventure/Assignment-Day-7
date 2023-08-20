
import { styled } from "styled-components";

//Title
const Title = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 50px;
    font-size: xx-large;
    font-weight: lighter;
    color: #002349;
    margin-bottom: 30px;
`

//Articles
const UpperBodyGrid = styled.div`

align-items: center;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-bottom: 50px;
`

const libraryPicture = {
    height:'320px', 
    width: '500px', 
    backgroundColor:'',
}

const libraryArticle = {
    height:'320px', 
    width: '500px', 
    backgroundColor:''}

const articleTitle ={
    fontSize: '32px',
    marginTop: '15px',
    marginBottom: '20px',
    color: '#002349'
}





export {Title, UpperBodyGrid, libraryPicture, libraryArticle, articleTitle}