import {Link} from 'react-router-dom'
import {useEffect} from 'react'
export function Button({to,href,variant='solid',children,...r}){
  const c=`btn ${variant}`
  return to?<Link className={c} to={to} {...r}>{children}</Link>:<a className={c} href={href} target="_blank" rel="noopener noreferrer" {...r}>{children}</a>
}
export const Img=({src,alt,...r})=><img src={src} alt={alt} loading="lazy" decoding="async" onError={e=>{e.currentTarget.style.visibility='hidden'}} {...r}/>
export function PageHead({title,text,seo}){
  useEffect(()=>{document.title=`${seo||title} | AK Interior`},[seo,title])
  return <header className="ph"><div className="wrap"><h1>{title}</h1><p>{text}</p></div></header>
}
