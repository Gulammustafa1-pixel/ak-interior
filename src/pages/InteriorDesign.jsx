import {PageHead,Img,Button} from '../components/Button'
import {u,I,wa} from '../data/products'
const S=[['Living Room','a','A feature wall that makes the room feel finished.'],['Bedroom','d','Soft, restful designs behind the bed.'],['Office','e','Wall graphics that look professional and focused.'],['Restaurant','m','Atmosphere and character for your dining space.'],['Shop','k','Walls that show off your brand and products.'],['Reception','l','A confident first impression for every visitor.'],['Feature Walls','b','One wall, one bold idea, made to your size.']]
export default function InteriorDesign(){
  return <><PageHead title="Interior Design" text="Wall solutions for every kind of space, from cozy homes to busy commercial interiors."/>
  <section><div className="wrap">{S.map(([t,k,d],n)=><div className={`two row-b ${n%2?'flip':''}`} key={t}><div className="pic rv"><Img src={u(I[k],1000,750)} alt={`${t} interior design`}/></div><div className="rv"><h2>{t}</h2><p>{d}</p></div></div>)}
  <div className="final rv"><Button href={wa('Hello AK Interior, I would like to discuss my space.')}>Discuss Your Space</Button></div></div></section></>
}
