import {useState,useEffect} from 'react'
import {PageHead,Img} from '../components/Button'
import GalleryCard from '../components/GalleryCard'
import {gallery,FILTERS} from '../data/gallery'
export default function Gallery(){
  const [f,setF]=useState('All'),[lb,setLb]=useState(null),list=f==='All'?gallery:gallery.filter(g=>g.cat===f)
  useEffect(()=>{const k=e=>e.key==='Escape'&&setLb(null);window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[])
  return <><PageHead title="Wall & Ceiling Gallery" text="Living rooms, bedrooms, offices, shops and decorative flex in modern and luxury interiors."/>
  <section><div className="wrap"><div className="pills">{FILTERS.map(x=><button key={x} className={x===f?'on':''} onClick={()=>setF(x)}>{x}</button>)}</div>
    <div className="mas">{list.map(g=><GalleryCard key={g.id} g={g} onOpen={setLb}/>)}</div></div></section>
  {lb&&<div className="lb" onClick={()=>setLb(null)} role="dialog" aria-modal="true"><button aria-label="Close">×</button><Img src={lb.full} alt={lb.alt} loading="eager"/></div>}</>
}
