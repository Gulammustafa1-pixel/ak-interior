import {useState} from 'react'
import {wa} from '../data/products'
export default function InquiryForm({fields,btn,label}){
  const [sent,setSent]=useState(false)
  const submit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
    const msg=`Hello AK Interior, new ${label}:\n`+fields.map(f=>`${f.l}: ${d[f.n]||'-'}`).join('\n')
    window.open(wa(msg),'_blank','noopener');setSent(true);e.target.reset()}
  return <form className="form" onSubmit={submit}>
    {fields.map(f=><label key={f.n} className={f.w?'full':''}>{f.l}
      {f.o?<select name={f.n} required defaultValue=""><option value="" disabled>Select</option>{f.o.map(o=><option key={o}>{o}</option>)}</select>
      :f.t==='area'?<textarea name={f.n} rows="4"/>:<input name={f.n} type={f.t||'text'} required={f.r!==false}/>}</label>)}
    <button className="btn solid" type="submit">{btn}</button>
    {sent&&<p className="ok" role="status">Thank you! Your inquiry is ready in WhatsApp — press send there to reach AK Interior.</p>}
  </form>
}
