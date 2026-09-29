export const PHONE='0346 8153532'
export const wa=m=>`https://wa.me/923468153532?text=${encodeURIComponent(m)}`
export const u=(id,w=900,h)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h?`&h=${h}`:''}&q=70`
export const I={a:'1618221195710-dd6b41faaea6',b:'1616486338812-3dadae4b4ace',c:'1600210492486-724fe5c67fb0',d:'1560448204-e02f11c3d0e2',e:'1497366216548-37526070297c',f:'1616594039964-ae9021a400a0',g:'1586023492125-27b2c045efd7',h:'1505691938895-1758d7feb511',i:'1493663284031-b7e3aefcae8e',j:'1540518614846-7eded433c457',k:'1524758631624-e2822e304c36',l:'1618219908412-a29a1bb7b86e',m:'1554995207-c18c203602cb',n:'1600607687939-ce8a6c25118c'}
export const CATS=['Modern','Marble','Luxury','Nature','Abstract','Floral','Kids','Office','Business','Islamic / Elegant Patterns','Custom Designs']
const P=[['modern-marble','Luxury Marble Wall Flex','Marble','a','b','Veined marble finish that gives a feature wall the look of natural stone.'],
['modern-lines','Modern Lines Wall Flex','Modern','c','g','Clean, contemporary lines for calm, minimal living spaces.'],
['golden-luxury','Golden Luxury Panel','Luxury','l','a','Warm gold accents on a soft neutral base for statement walls.'],
['forest-calm','Forest Calm Landscape','Nature','h','i','Soft natural scenery that brings the outdoors into your room.'],
['abstract-flow','Abstract Flow Art','Abstract','m','n','Flowing artistic forms in a refined neutral palette.'],
['floral-bloom','Floral Bloom Wall','Floral','f','j','Delicate florals for bedrooms and cozy corners.'],
['kids-adventure','Kids Adventure Wall','Kids','d','f','Playful, cheerful designs for children’s rooms.'],
['office-focus','Office Focus Wall','Office','e','k','Professional wall graphics for offices and workspaces.'],
['brand-wall','Business Brand Wall','Business','k','e','Your logo and brand story on a reception or shop wall.'],
['elegant-pattern','Elegant Geometric Pattern','Islamic / Elegant Patterns','b','l','Timeless geometric patterns with graceful detail.'],
['custom-photo','Your Custom Design','Custom Designs','n','c','Your photo, artwork or idea printed to fit your wall.'],
['soft-neutral','Soft Neutral Texture','Modern','g','h','A subtle textured look that suits every interior style.']]
export const products=P.map(([slug,name,cat,x,y,desc])=>({slug,name,cat,desc,img:u(I[x],900,700),imgs:[u(I[x],1200,900),u(I[y],1200,900)]}))
