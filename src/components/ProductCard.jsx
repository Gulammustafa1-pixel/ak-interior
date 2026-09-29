import {Link} from 'react-router-dom'
import {Button,Img} from './Button'
import {wa} from '../data/products'
export default function ProductCard({p}){
  return <article className="card"><Link to={`/flex/${p.slug}`} className="im"><Img src={p.img} alt={`${p.name} in a styled interior`}/></Link>
    <div className="cb"><small>{p.cat}</small><h3>{p.name}</h3><p>{p.desc}</p>
      <div className="row"><Button to={`/flex/${p.slug}`} variant="line">View Details</Button><Button href={wa(`Hello AK Interior, I am interested in the ${p.name}.`)}>Order on WhatsApp</Button></div></div></article>
}