var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire3c64;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire3c64=n);var i,a,r,d,l,m,f=n("94z19"),c=n("4O5cf"),u="fatima",g="Fátima",s="video",_="1",p=0;function v(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}function w(e,t){var o,n,a,c,u;"fotografia"==s&&"1"==_&&(o=r.clientWidth,n=f.l.fotos.fatima_png_300_1,o>600&&(n=f.l.fotos.fatima_png_600_1),o>1e3&&(n=f.l.fotos.fatima_png_900_1)),"fotografia"==s&&"1"!=_&&(o=r.clientHeight,n=f.l.fotos.fatima_png_300_6,o>600&&(n=f.l.fotos.fatima_png_600_6),o>1e3&&(n=f.l.fotos.fatima_png_900_6)),"fotografia"!=s&&(o=m.clientWidth,n=f.l.mp4.fatima_mp4[0],o>600&&(n=f.l.mp4.fatima_mp4[1]),o>1e3&&(n=f.l.mp4.fatima_mp4[2])),u=n.length/2,1==t&&((p+=e)>u-1&&(p=0),p<0&&(p=u-1),"fotografia"==s?(c=(new Date).getTime(),r.onload=()=>{c=(new Date).getTime()-c,(0,f.escribir_tiempo)(c,n[2*p+1])},a=f.l.comentario_1.fatima_1_comentario,r.src=n[2*p],r.alt=a[p]+" "+p,d.innerHTML="Fotos de "+g+": "+(p+1)+" de "+n.length,l.innerHTML=v(a[p])):(a=f.l.comentario_mp4.fatima_mp4_comentario,m.src=n[2*p],d.innerHTML="Videos de "+g+": "+(p+1)+" de "+n.length,l.innerHTML=v(a[p]),i=f.l.duracion.fatima_duracion[p]));var w,h=Math.floor(6*Math.random())+1,y="clip-path_"+((w=h)<10?"0"+w.toString():""+w.toString());"fotografia"==s?r.className="horizontal-pgn-img "+y:m.className="horizontal-pgn-img "+y;let E=document.getElementById("V-Horizontal");E.innerHTML=y;let b,I=(0,f.leer_velocidad)();b="#ff0000",I>=500&&(b="#FFFF00"),I>=1e3&&(b="#00ff00"),E.style.backgroundColor=b}function h(){var e={navigationUI:"hide"};a.requestFullscreen?a.requestFullscreen(e):a.webkitRequestFullscreen?a.webkitRequestFullscreen(e):a.msRequestFullscreen&&a.msRequestFullscreen(e)}"fotografia"==s&&"1"==_&&(a=document.getElementById("div-hor-"+u),r=document.getElementById("img-hor-"+u),d=document.getElementById("h2-hor-"+u),l=document.getElementById("h3-hor-"+u),window.onload=()=>{document.write(f.l),document.write(c.debug)},window.siguiente_horizontal_fatima=w,a.addEventListener("dblclick",(()=>{h()}))),"fotografia"==s&&"1"!=_&&(a=document.getElementById("div-ver-"+u),r=document.getElementById("img-ver-"+u),d=document.getElementById("h2-ver-"+u),l=document.getElementById("h3-ver-"+u),window.onload=()=>{document.write(f.l),document.write(c.debug)},window.siguiente_vertical_fatima=w,a.addEventListener("dblclick",(()=>{h()}))),"fotografia"!=s&&(a=document.getElementById("div-video-"+u),m=document.getElementById("video-video-"+u),d=document.getElementById("h2-video-"+u),l=document.getElementById("h3-video-"+u),window.onload=()=>{document.write(f.l),document.write(c.debug)},window.siguiente_video_fatima=w,a.addEventListener("dblclick",(()=>{h()}))),function e(){w(1,1),"fotografia"==s?setTimeout(e,5e3):setTimeout(e,1e3*i)}();