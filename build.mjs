import {mkdir, readdir, copyFile, cp, rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const file of await readdir('.')) {
 if ((file.endsWith('.html') && file !== 'presentation.html') || ['robots.txt','sitemap.xml'].includes(file)) await copyFile(file,`dist/${file}`);
}
for(const dir of ['assets','downloads']) await cp(dir,`dist/${dir}`,{recursive:true});
console.log('Production site built in dist/');
