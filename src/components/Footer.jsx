import {Link} from 'react-router-dom'
import {Logo} from './Navbar'
import {Button} from './Button'
import {wa,PHONE} from '../data/products'
export default function Footer(){
  return <footer className="foot"><div className="wrap fg">
    <div><Logo/><p>Transforming walls into beautiful spaces.</p></div>
    <div><h3>Quick Links</h3>{[['/','Home'],['/about','About'],['/flex','Flex Collection'],['/interior-design','Interior Design'],['/gallery','Gallery'],['/services','Services'],['/contact','Contact']].map(([t,n])=><Link key={t} to={t}>{n}</Link>)}</div>
    <div><h3>Contact</h3><a href="tel:03468153532">{PHONE}</a><p>ALL DAYS 24/7 HOURS</p><Button href={wa('Hello AK Interior, I would like to enquire.')}>Chat on WhatsApp</Button></div>
  </div><div className="wrap copy">© 2026 AK Interior. All rights reserved.</div></footer>
}
