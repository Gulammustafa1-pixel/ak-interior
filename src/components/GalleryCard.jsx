import {Img} from './Button'
export default function GalleryCard({g,onOpen}){
  return <figure className="gi" onClick={()=>onOpen(g)} tabIndex={0} onKeyDown={e=>e.key==='Enter'&&onOpen(g)}><Img src={g.src} alt={g.alt}/></figure>
}
