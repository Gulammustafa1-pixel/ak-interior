import {PageHead,Button} from '../components/Button'
import {wa} from '../data/products'
const Q=[['What type of flex designs do you offer?','We offer decorative wall flex in modern, marble, luxury, nature, abstract, floral, kids, office, business and elegant pattern styles.'],['Can I provide my own design?','Yes. Send your picture, logo, pattern or artwork on WhatsApp and we will prepare it for printing.'],['Can you create custom wall graphics?','Yes. We create custom wall graphics for homes, offices and commercial spaces.'],['How do I place an order?','Choose a design, tap Order on WhatsApp, share your wall measurements and we will guide you from there.'],['Can I choose the size?','Yes. Designs are made to fit your wall, so share your measurements and we will size it accordingly.'],['How can I contact AK Interior?','Call or WhatsApp 0346 8153532, Monday to Saturday, 10:00 AM – 8:00 PM, or use the contact form.'],['How long does a custom design take?','It depends on the design and size. Message us with your idea and we will confirm the timing.']]
export default function FAQ(){
  return <><PageHead title="Frequently Asked Questions" seo="FAQ" text="Quick answers about our designs, sizes and ordering."/>
  <section><div className="wrap narrow">{Q.map(([q,a])=><details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}
  <div className="final"><h3>Still have a question?</h3><Button href={wa('Hello AK Interior, I have a question.')}>Ask on WhatsApp</Button></div></div></section></>
}
