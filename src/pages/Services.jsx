import {Link} from 'react-router-dom'
import {PageHead,Img,Button} from '../components/Button'
import {u,I,wa} from '../data/products'
const S=[['Decorative Wall Flex','a','Ready-made decorative flex designs for any wall.'],['Custom Wall Graphics','n','Graphics made from your own idea or artwork.'],['Interior Wall Designs','g','Complete wall looks for homes and offices.'],['Business Branding Walls','k','Your logo and brand on reception and shop walls.'],['Feature Wall Designs','b','A single standout wall to anchor the room.'],['Custom Printed Designs','m','Printed to your size, image and color choice.'],['Interior Decoration Solutions','l','Guidance on styling walls to suit your space.']]
export default function Services(){
  return <><PageHead title=" Services" text="Wall & Ceiling Everything you need to give your walls&ceiling a new look."/>
  <section><div className="wrap g">{S.map(([t,k,d])=><article className="card rv" key={t}><div className="im"><Img src={u(I[k],800,600)} alt={t}/></div><div className="cb"><h3>{t}</h3><p>{d}</p><Button href={wa(`Hello AK Interior, I would like to learn more about ${t}.`)} variant="line">Learn More</Button></div></article>)}</div></section></>
}
