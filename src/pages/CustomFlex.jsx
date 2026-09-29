import {PageHead,Button,Img} from '../components/Button'
import InquiryForm from '../components/InquiryForm'
import {u,I,wa,PHONE} from '../data/products'
const F=[{n:'name',l:'Name'},{n:'phone',l:'Phone',t:'tel'},{n:'email',l:'Email',t:'email',r:false},{n:'wall',l:'Wall Type',o:['Living room','Bedroom','Office','Shop / Commercial','Other']},{n:'size',l:'Approximate Size'},{n:'msg',l:'Message',t:'area',w:1,r:false}]
const S=['Send us your idea, picture or logo','Share your wall size','Approve the design we prepare','We print and deliver your design']
export default function CustomFlex(){
  return <><PageHead title="Your Idea. Your Wall. Your Design." seo="Custom Flex" text="Send us what you have in mind and we will turn it into a wall design made just for you."/>
  <section><div className="wrap two"><div className="rv"><h2>What you can send us</h2><ul className="tick">{['Your own picture','Logo','Pattern','Artwork','Business branding','Family photo','Any custom design'].map(x=><li key={x}>{x}</li>)}</ul></div><div className="pic rv"><Img src={u(I.c,1000,800)} alt="Custom wall design in a modern interior"/></div></div></section>
  <section className="alt"><div className="wrap"><h2 className="rv">How custom orders work</h2><ol className="steps">{S.map(x=><li className="rv" key={x}><h3>{x}</h3></li>)}</ol></div></section>
  <section className="cta"><div className="wrap rv"><h2>Talk to us directly</h2><p>Call or WhatsApp {PHONE}</p><div className="row"><Button href={wa('Hello AK Interior, I would like a custom flex design.')}>Chat on WhatsApp</Button><Button href="tel:03468153532" variant="line" target="_self">Call {PHONE}</Button></div></div></section>
  <section><div className="wrap narrow"><h2>Send an inquiry</h2><InquiryForm fields={F} btn="Send Inquiry" label="custom flex inquiry"/></div></section></>
}
