import {useState,useEffect} from 'react'
import {Link,NavLink,useLocation} from 'react-router-dom'
import {Button} from './Button'
import {wa} from '../data/products'
const L=[['/','Home'],['/about','About'],['/flex','Flex Collection'],['/interior-design','Interior Design'],['/custom-flex','Custom Flex'],['/gallery','Gallery'],['/services','Services'],['/faq','FAQ'],['/contact','Contact']]
export const Logo=()=><Link to="/" className="logo" aria-label="AK Interior home"><b>AK</b><span>Interior</span></Link>
export default function Navbar(){
  const [open,setOpen]=useState(false),[s,setS]=useState(false),{pathname}=useLocation()
  useEffect(()=>setOpen(false),[pathname])
  useEffect(()=>{const f=()=>setS(window.scrollY>20);f();window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[])
  return <header className={`nav ${s?'sc':''}`}><div className="wrap nb">
    <Logo/>
    <nav className={`links ${open?'open':''}`} aria-label="Main">
      {L.map(([t,n])=><NavLink key={t} to={t} end={t==='/'}>{n}</NavLink>)}
      <Button href={wa('Hello AK Interior, I would like to enquire about wall flex.')} className="mob">WhatsApp Us</Button>
    </nav>
    <Button href={wa('Hello AK Interior, I would like to enquire about wall flex.')} className="dsk">WhatsApp Us</Button>
    <button className="burger" onClick={()=>setOpen(!open)} aria-label="Menu" aria-expanded={open}><i/><i/><i/></button>
  </div></header>
}
