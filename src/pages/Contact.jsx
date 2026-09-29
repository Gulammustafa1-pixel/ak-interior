import {PageHead,Button} from '../components/Button'
import InquiryForm from '../components/InquiryForm'
import {wa,PHONE} from '../data/products'
const F=[{n:'name',l:'Name'},{n:'phone',l:'Phone',t:'tel'},{n:'email',l:'Email',t:'email',r:false},{n:'service',l:'Service',o:['Decorative Wall Flex','Custom Wall Graphics','Interior Wall Designs','Business Branding Walls','Feature Wall Designs','Other']},{n:'msg',l:'Message',t:'area',w:1}]
export default function Contact(){
  return <><PageHead title="Let’s Create Something Beautiful." seo="Contact Us" text="Serving customers with custom interior and flex solutions."/>
  <section><div className="wrap two top"><div className="rv"><h2>AK Interior</h2><p>Phone: <a href="tel:03468153532">{PHONE}</a></p><p>WhatsApp: {PHONE}</p><h3>Business Hours</h3><p>Monday – Saturday<br/>10:00 AM – 8:00 PM</p><Button href={wa('Hello AK Interior, I would like to enquire.')}>Chat on WhatsApp</Button></div>
  <div className="rv"><InquiryForm fields={F} btn="Send Message" label="contact message"/></div></div></section></>
}
