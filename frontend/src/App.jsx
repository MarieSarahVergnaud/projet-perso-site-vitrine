import Header from './composants/Header';
import Router from './composants/Router';
import Footer from './composants/Footer';

function App() {

  return (
    
    <div className='App'>
       <Header />
       <main className='app_main'>
       <Router />   
       </main>
       <Footer />
    </div>  
    

  )
}

export default App
