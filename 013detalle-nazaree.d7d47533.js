var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire3c64;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire3c64=o);var r,i,a,d,l,c,m=o("94z19"),u=o("4O5cf"),g="nazaree",f="Nazaré",s="fotografia",_="1",p=0;function v(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}function w(e,t){var n,o,i,u,g;"fotografia"==s&&"1"==_&&(n=a.clientWidth,o=m.l.fotos.nazaree_png_300_1,n>600&&(o=m.l.fotos.nazaree_png_600_1),n>1e3&&(o=m.l.fotos.nazaree_png_900_1)),"fotografia"==s&&"1"!=_&&(n=a.clientHeight,o=m.l.fotos.nazaree_png_300_6,n>600&&(o=m.l.fotos.nazaree_png_600_6),n>1e3&&(o=m.l.fotos.nazaree_png_900_6)),"fotografia"!=s&&(n=c.clientWidth,o=m.l.mp4.nazaree_mp4[0],n>600&&(o=m.l.mp4.nazaree_mp4[1]),n>1e3&&(o=m.l.mp4.nazaree_mp4[2])),g=o.length/2,1==t&&((p+=e)>g-1&&(p=0),p<0&&(p=g-1),"fotografia"==s?(u=(new Date).getTime(),a.onload=()=>{u=(new Date).getTime()-u,(0,m.escribir_tiempo)(u,o[2*p+1])},i=m.l.comentario_1.nazaree_1_comentario,a.src=o[2*p],a.alt=i[p]+" "+p,d.innerHTML="Fotos de "+f+": "+(p+1)+" de "+o.length,l.innerHTML=v(i[p])):(i=m.l.comentario_mp4.nazaree_mp4_comentario,c.src=o[2*p],d.innerHTML="Videos de "+f+": "+(p+1)+" de "+o.length,l.innerHTML=v(i[p]),r=m.l.duracion.nazaree_duracion[p]));var w,h=Math.floor(6*Math.random())+1,z="clip-path_"+((w=h)<10?"0"+w.toString():""+w.toString());"fotografia"==s?a.className="horizontal-pgn-img "+z:c.className="horizontal-pgn-img "+z;let y=document.getElementById("V-Horizontal");y.innerHTML=z;let E,b=(0,m.leer_velocidad)();E="#ff0000",b>=500&&(E="#FFFF00"),b>=1e3&&(E="#00ff00"),y.style.backgroundColor=E}function h(){var e={navigationUI:"hide"};i.requestFullscreen?i.requestFullscreen(e):i.webkitRequestFullscreen?i.webkitRequestFullscreen(e):i.msRequestFullscreen&&i.msRequestFullscreen(e)}"fotografia"==s&&"1"==_&&(i=document.getElementById("div-hor-"+g),a=document.getElementById("img-hor-"+g),d=document.getElementById("h2-hor-"+g),l=document.getElementById("h3-hor-"+g),window.onload=()=>{document.write(m.l),document.write(u.debug)},window.siguiente_horizontal_nazaree=w,i.addEventListener("dblclick",(()=>{h()}))),"fotografia"==s&&"1"!=_&&(i=document.getElementById("div-ver-"+g),a=document.getElementById("img-ver-"+g),d=document.getElementById("h2-ver-"+g),l=document.getElementById("h3-ver-"+g),window.onload=()=>{document.write(m.l),document.write(u.debug)},window.siguiente_vertical_nazaree=w,i.addEventListener("dblclick",(()=>{h()}))),"fotografia"!=s&&(i=document.getElementById("div-video-"+g),c=document.getElementById("video-video-"+g),d=document.getElementById("h2-video-"+g),l=document.getElementById("h3-video-"+g),window.onload=()=>{document.write(m.l),document.write(u.debug)},window.siguiente_video_nazaree=w,i.addEventListener("dblclick",(()=>{h()}))),function e(){w(1,1),"fotografia"==s?setTimeout(e,5e3):setTimeout(e,1e3*r)}();