import {PageHead,Img,Button} from '../components/Button'
import {u,I} from '../data/products'
const w=[['Premium Quality','High-quality printing and materials for a lasting finish.'],['Creative Designs','Fresh ideas that suit modern Pakistani homes and businesses.'],['Custom Solutions','Designs adapted to your wall, your size and your style.'],['Professional Service','Friendly, reliable support at every step.']]
const s=['Choose Your Design','Share Your Measurements','We Prepare Your Design','Bring Your Designs to Life']
export default function About(){
  return <><PageHead title="Designed for Spaces That Matter." seo="About Us" text="AK Interior specializes in decorative wall & ceiling, custom wall graphics and interior visual solutions."/>
  <section><div className="wrap two"><div className="pic rv"><Img src={u(I.g,1000,1100)} alt="Beautifully decorated modern interior"/></div>
    <div className="rv"><h2>Who we are</h2><p>AK Interior helps homes, offices and shops turn plain walls into striking features. We work with decorative wall & ceiling , custom graphics and complete interior wall designs.</p>
    <h3>Our approach</h3><p>We listen first, then recommend designs, sizes and finishes that suit your space. Quality, creativity, customization and professional service guide every project.</p></div></div></section>
  <section className="alt"><div className="wrap"><h2 className="rv">Why AK Interior?</h2><div className="g">{w.map(([t,d])=><div className="tile rv" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
  <section><div className="wrap"><h2 className="rv">How it works</h2><ol className="steps">{s.map(x=><li className="rv" key={x}><h3>{x}</h3></li>)}</ol><Button to="/contact">Start Your Project</Button></div></section></>
}
