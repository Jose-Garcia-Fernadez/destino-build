var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire3c64;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return o[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequire3c64=n);var a,i,l,r,d,c,s=n("94z19"),m=n("4O5cf"),u="alcobasa",g="Alcobaça",f="video",_="1",p=0;function b(e){var o=e.trim();return o.charAt(0).toUpperCase()+o.slice(1)}function v(e,o){var t,n,i,m,u;"fotografia"==f&&"1"==_&&(t=l.clientWidth,n=s.l.fotos.alcobasa_png_300_1,t>600&&(n=s.l.fotos.alcobasa_png_600_1),t>1e3&&(n=s.l.fotos.alcobasa_png_900_1)),"fotografia"==f&&"1"!=_&&(t=l.clientHeight,n=s.l.fotos.alcobasa_png_300_6,t>600&&(n=s.l.fotos.alcobasa_png_600_6),t>1e3&&(n=s.l.fotos.alcobasa_png_900_6)),"fotografia"!=f&&(t=c.clientWidth,n=s.l.mp4.alcobasa_mp4[0],t>600&&(n=s.l.mp4.alcobasa_mp4[1]),t>1e3&&(n=s.l.mp4.alcobasa_mp4[2])),u=n.length/2,1==o&&((p+=e)>u-1&&(p=0),p<0&&(p=u-1),"fotografia"==f?(m=(new Date).getTime(),l.onload=()=>{m=(new Date).getTime()-m,(0,s.escribir_tiempo)(m,n[2*p+1])},i=s.l.comentario_1.alcobasa_1_comentario,l.src=n[2*p],l.alt=i[p]+" "+p,r.innerHTML="Fotos de "+g+": "+(p+1)+" de "+n.length,d.innerHTML=b(i[p])):(i=s.l.comentario_mp4.alcobasa_mp4_comentario,c.src=n[2*p],r.innerHTML="Videos de "+g+": "+(p+1)+" de "+n.length,d.innerHTML=b(i[p]),a=s.l.duracion.alcobasa_duracion[p]));var v,w=Math.floor(6*Math.random())+1,h="clip-path_"+((v=w)<10?"0"+v.toString():""+v.toString());"fotografia"==f?l.className="horizontal-pgn-img "+h:c.className="horizontal-pgn-img "+h;let y=document.getElementById("V-Horizontal");y.innerHTML=h;let E,I=(0,s.leer_velocidad)();E="#ff0000",I>=500&&(E="#FFFF00"),I>=1e3&&(E="#00ff00"),y.style.backgroundColor=E}function w(){var e={navigationUI:"hide"};i.requestFullscreen?i.requestFullscreen(e):i.webkitRequestFullscreen?i.webkitRequestFullscreen(e):i.msRequestFullscreen&&i.msRequestFullscreen(e)}"fotografia"==f&&"1"==_&&(i=document.getElementById("div-hor-"+u),l=document.getElementById("img-hor-"+u),r=document.getElementById("h2-hor-"+u),d=document.getElementById("h3-hor-"+u),window.onload=()=>{document.write(s.l),document.write(m.debug)},window.siguiente_horizontal_alcobasa=v,i.addEventListener("dblclick",(()=>{w()}))),"fotografia"==f&&"1"!=_&&(i=document.getElementById("div-ver-"+u),l=document.getElementById("img-ver-"+u),r=document.getElementById("h2-ver-"+u),d=document.getElementById("h3-ver-"+u),window.onload=()=>{document.write(s.l),document.write(m.debug)},window.siguiente_vertical_alcobasa=v,i.addEventListener("dblclick",(()=>{w()}))),"fotografia"!=f&&(i=document.getElementById("div-video-"+u),c=document.getElementById("video-video-"+u),r=document.getElementById("h2-video-"+u),d=document.getElementById("h3-video-"+u),window.onload=()=>{document.write(s.l),document.write(m.debug)},window.siguiente_video_alcobasa=v,i.addEventListener("dblclick",(()=>{w()}))),function e(){v(1,1),"fotografia"==f?setTimeout(e,5e3):setTimeout(e,1e3*a)}();