import './App.css';
import { Fragment, useEffect } from 'react';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';
import Service from './Component/Service/Service';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Aos from"aos"
import "aos/dist/aos.css"


function App() {
  useEffect(()=>{
Aos.init({duration:3000});

  },[])
  return (
    <Fragment>
     <Header/>
<Nav/>
<About />
<Experience/>
<Service/>
<Portfolio/>
<Contact/>
<Footer/>


    </Fragment>
  );
}

export default App;
