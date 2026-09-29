import {wa} from '../data/products'
export default function WhatsAppButton(){
  return <a className="fab" href={wa('Hello AK Interior, I would like to know more about your wall flex designs.')} target="_blank" rel="noopener noreferrer" aria-label="Chat with AK Interior on WhatsApp">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-1.7-.5-3.2-1.6-4.4-3.2-1-1.3-1.4-2.5-1.4-3.5 0-1 .5-1.5.7-1.7.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .5.4l.7 1.7c.1.2 0 .4 0 .5l-.3.4-.3.3c-.1.1-.2.3-.1.5.5.9 1.5 1.900 2.700 2.400.2.1.4.100.5-.1l.6-.8c.2-.2.3-.2.5-.1l1.600.8c.2.1.4.2.4.3.1.1.1.6-.1 1.200Z"/></svg></a>
}
