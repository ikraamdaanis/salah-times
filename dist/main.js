(()=>{"use strict";(async()=>{const t=[];try{const e=await fetch("https://www.londonprayertimes.com/api/times/?format=json&key=0d11f934-7f5a-4690-8359-f9793887cee6&24hours=true"),n=await e.json();return["fajr","sunrise","dhuhr","asr","magrib","isha"].forEach((e=>{t.push(n[e])})),t}catch(t){console.error(t)}})().then((t=>(async t=>{const e=document.querySelector(".salah-times-list"),n=document.querySelector(".date"),[o,r,a]=(new Date).toLocaleDateString("en-GB").split("/");n.textContent=`${o}/${r}/${a}`,t.forEach((t=>{const n=document.createElement("li");n.textContent=t,e.appendChild(n)})),document.querySelector(".container").style.opacity="1"})(t)))})();