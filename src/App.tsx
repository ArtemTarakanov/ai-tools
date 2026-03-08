import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Tools from "./components/Tools.tsx";
import Brands from "./components/Brands.tsx";
import Newcomer from "./components/Newcomer.tsx";
import Review from "./components/Review.tsx";
import Form from "./components/Form.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <Tools/>
        <Brands/>
        <Newcomer/>
        <Review/>
        <Form/>
        <Footer/>
    </>
  )
}

export default App
