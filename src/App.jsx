import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {

  const dataArticleLibrary = ['Loremipsum', 'Dolorsitamet', 'Consectetur'];


  return (
    <div>
      
  <Header/>
  <Body dataArticleLibrary={dataArticleLibrary}/>
  <Footer/>

    </div>
         

  )
}

export default App;
