import {wa} from '../data/products'
const FB='https://www.facebook.com/share/1J7zZAbXL7/'
const TT='https://www.tiktok.com/@3d.wall.paper.ban'
export default function WhatsAppButton(){
  return <div className="fabs">
    <a className="fab fb" href={FB} target="_blank" rel="noopener noreferrer" aria-label="AK Interior on Facebook">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.6V14h2.7v8h3.2Z"/></svg></a>
    <a className="fab tt" href={TT} target="_blank" rel="noopener noreferrer" aria-label="AK Interior on TikTok">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z"/></svg></a>
    <a className="fab" href={wa('Hello AK Interior, I would like to know more about your wall flex designs.')} target="_blank" rel="noopener noreferrer" aria-label="Chat with AK Interior on WhatsApp">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-1.7-.5-3.2-1.6-4.4-3.2-1-1.3-1.4-2.5-1.4-3.5 0-1 .5-1.5.7-1.7.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .5.4l.7 1.7c.1.2 0 .4 0 .5l-.3.4-.3.3c-.1.1-.2.3-.1.5.5.9 1.5 1.9 2.7 2.4.2.1.4.1.5-.1l.6-.8c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.6-.1 1.2Z"/></svg></a>
  </div>
}