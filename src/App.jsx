import {useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import FlexCollection from './pages/FlexCollection'
import ProductDetail from './pages/ProductDetail'
import InteriorDesign from './pages/InteriorDesign'
import CustomFlex from './pages/CustomFlex'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
export default function App(){
  const {pathname}=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1})
    document.querySelectorAll('.rv').forEach(n=>io.observe(n))
    return()=>io.disconnect()
  },[pathname])
  return <>
    <Navbar/>
    <main key={pathname} className="page">
      <Routes>
        <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/>
        <Route path="/flex" element={<FlexCollection/>}/><Route path="/flex/:slug" element={<ProductDetail/>}/>
        <Route path="/interior-design" element={<InteriorDesign/>}/><Route path="/custom-flex" element={<CustomFlex/>}/>
        <Route path="/gallery" element={<Gallery/>}/><Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/><Route path="/faq" element={<FAQ/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </main>
    <Footer/><WhatsAppButton/>
  </>
}
