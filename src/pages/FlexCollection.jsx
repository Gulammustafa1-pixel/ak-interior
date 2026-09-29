import {useState} from 'react'
import {PageHead} from '../components/Button'
import ProductCard from '../components/ProductCard'
import {products,CATS} from '../data/products'
export default function FlexCollection(){
  const [c,setC]=useState('All'),list=c==='All'?products:products.filter(p=>p.cat===c)
  return <><PageHead title="Flex Collection" text="Browse decorative wall flex in every style. Pick a design or ask us for your own."/>
  <section><div className="wrap"><div className="pills">{['All',...CATS].map(x=><button key={x} className={x===c?'on':''} onClick={()=>setC(x)}>{x}</button>)}</div>
    {list.length?<div className="g">{list.map(p=><ProductCard key={p.slug} p={p}/>)}</div>:<p>No designs in this category yet. Message us on WhatsApp and we will create one for you.</p>}</div></section></>
}
