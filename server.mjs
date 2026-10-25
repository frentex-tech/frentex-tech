import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.png':'image/png','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf','.ttf':'font/ttf','.woff2':'font/woff2'};
const headers={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY','Permissions-Policy':'camera=(), microphone=(), geolocation=()','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'"};
createServer(async(req,res)=>{
 const send=(code,body,type='text/plain; charset=utf-8')=>{res.writeHead(code,{...headers,'Content-Type':type,'Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:body)};
 if(!['GET','HEAD'].includes(req.method)){res.setHeader('Allow','GET, HEAD');return send(405,'Method not allowed')}
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(pathname.includes('\0') || pathname.split('/').some(p=>p.startsWith('.')))return send(404,'Not found');
  let file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+sep))return send(404,'Not found');
  if((await stat(file).catch(()=>null))?.isDirectory())file=resolve(file,'index.html');
  else if(!extname(file))file+='.html';
  const content=await readFile(file);send(200,content,types[extname(file)]||'application/octet-stream');
 }catch{
  try{send(404,await readFile(resolve(root,'404.html')),types['.html'])}catch{send(404,'Not found')}
 }
}).listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log('Frentex production server ready'));
