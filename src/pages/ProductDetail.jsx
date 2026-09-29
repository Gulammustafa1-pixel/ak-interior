import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Button,Img,PageHead} from '../components/Button'
import ProductCard from '../components/ProductCard'
import {products,wa} from '../data/products'
export default function ProductDetail(){
  const {slug}=useParams(),p=products.find(x=>x.slug===slug),[i,setI]=useState(0)
  useEffect(()=>{document.title=`${p?p.name:'Design not found'} | AK Interior`},[p])
  if(!p)return <><PageHead title="Design not found" text="This design is not available."/><section><div className="wrap"><Button to="/flex">Back to Flex Collection</Button></div></section></>
  const msg=`Hello AK Interior, I am interested in the ${p.name}.`
  const rel=products.filter(x=>x.slug!==p.slug).slice(0,3)
  const D=[['Available sizes','Any size to fit your wall — share your measurements'],['Suitable spaces','Living rooms, bedrooms, offices, shops and reception areas'],['Design style',p.cat],['Customization','Colors, size and layout can be adjusted. You may also send your own artwork.']]
  return <>  <section className="pd"><div className="wrap two"><div><div className="pic big"><Img key={i} src={p.imgs[i]} alt={`${p.name} large view`} loading="eager"/></div>
    <div className="thumbs">{p.imgs.map((s,k)=><button key={k} className={k===i?'on':''} onClick={()=>setI(k)} aria-label={`View image ${k+1}`}><Img src={s} alt={`${p.name} view ${k+1}`}/></button>)}</div></div>
    <div><Link to="/flex" className="back">← Flex Collection</Link><h1 className="h1s">{p.name}</h1><p className="lead">{p.desc}</p>
      <dl>{D.map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
      <div className="row"><Button href={wa(msg)}>Order on WhatsApp</Button><Button to="/contact" variant="line">Send an Inquiry</Button></div></div></div></section>
  <section className="alt"><div className="wrap"><h2>Related designs</h2><div className="g">{rel.map(r=><ProductCard key={r.slug} p={r}/>)}</div></div></section></>
}
