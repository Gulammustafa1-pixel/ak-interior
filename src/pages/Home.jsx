import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button,Img} from '../components/Button'
import ProductCard from '../components/ProductCard'
import {products,u,I,wa} from '../data/products'
const why=[['Premium Quality','Sharp, durable prints made to last on your wall.'],['Creative Designs','A wide range of styles for every room and taste.'],['Custom Solutions','Your own photo, logo or idea, sized to your wall.'],['Professional Service','Clear guidance from first message to finished wall.']]
export default function Home(){
  useEffect(()=>{document.title='AK Interior | Premium Wall Flex & Interior Designs'},[])
  return <>
    <section className="hero"><div className="wrap hg">
      <div><h1>Transform Your Walls.<br/>Transform Your Space.</h1>
        <p className="lead">Premium wall flex, custom graphics and interior designs created to make your space truly stand out.</p>
        <div className="row"><Button to="/flex">Explore Flex Collection</Button><Button to="/custom-flex" variant="line">Get a Custom Design</Button></div></div>
      <div className="hi"><Img src={u(I.a,1200,1400)} alt="Stylish living room with a decorative feature wall" loading="eager" fetchpriority="high"/></div>
    </div></section>
    <section><div className="wrap two">
      <div className="pic rv"><Img src={u(I.b,1000,800)} alt="Elegant interior with decorative wall design"/></div>
      <div className="rv"><h2>Walls that say something about you.</h2><p>AK Interior creates decorative wall flex, custom wall graphics and interior wall designs for homes, offices and shops. Pick a ready design or bring your own idea.</p><Button to="/about" variant="line">About AK Interior →</Button></div>
    </div></section>
    <section className="alt"><div className="wrap"><div className="sh rv"><h2>Featured Flex Designs</h2><Button to="/flex" variant="line">View All Designs →</Button></div>
      <div className="g">{products.slice(0,4).map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section>
    <section><div className="wrap"><div className="sh rv"><h2>Why Choose AK Interior</h2><Button to="/about" variant="line">Learn More →</Button></div>
      <div className="g">{why.map(([t,d])=><div className="tile rv" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <section className="cta"><div className="wrap two"><div className="rv"><h2>Have your own idea?</h2><p>Send us a picture, logo or pattern and we will turn it into a wall design made to your size.</p><Button to="/custom-flex">Get a Custom Design</Button></div>
      <div className="pic rv"><Img src={u(I.n,1000,700)} alt="Custom printed wall design in a modern room"/></div></div></section>
    <section><div className="wrap"><div className="sh rv"><h2>From Our Gallery</h2><Button to="/gallery" variant="line">Open Gallery →</Button></div>
      <div className="g4">{[I.d,I.e,I.i,I.l].map((k,i)=><div className="pic sq rv" key={k}><Img src={u(k,700,700)} alt={['Bedroom interior','Modern office','Luxury living room','Decorative statement wall'][i]}/></div>)}</div></div></section>
    <section className="alt"><div className="wrap"><h2 className="rv">Our promise to you</h2><div className="g">
      {[['Clear communication','Fast replies on WhatsApp and call.'],['Made to measure','Every design is sized to your wall.'],['Your approval first','We share the design before we print.']].map(([t,d])=><div className="tile rv" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <section className="final"><div className="wrap rv"><h2>Ready to give your wall a new look?</h2><div className="row c"><Button href={wa('Hello AK Interior, I would like to enquire about wall flex.')}>Chat on WhatsApp</Button><Button to="/contact" variant="line">Contact Us</Button></div></div></section>
  </>
}
