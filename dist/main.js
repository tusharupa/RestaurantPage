(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.append(function(){const t=document.createElement("div");t.classList.add("about");const e=document.createElement("p");e.classList.add("name"),e.textContent="Fake's Restaurant",t.append(e);const a=document.createElement("p");a.classList.add("detail"),a.textContent="Fake's restaurant is the best in the buisness started by Phukin Fake.You can find here all kinds of real dishes made with real exotic ingrediets that will make your stomach scream, with excitement and joy ofcourse! This is the place to come to with your family and loved ones (if you have any) to spend some family time.There is no issue of parking as we take care of your vehicles using cutting edge valet parking system where our attendents will park your car... somewhere.The biggest highlight is everybody after eating will be given a completely harmless pill that will help you in digestion.It's totally real and we will not scam you that some reports have said about us.",t.append(a);const n=document.createElement("div");n.classList.add("timings");const s=document.createElement("p");s.setAttribute("id","timings"),s.textContent="Timings",n.append(s);const o=document.createElement("ul");return["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"].forEach((t=>{const e=document.createElement("li"),a=document.createElement("p");a.textContent=`${t}: 12pm-10pm`,e.append(a),o.append(e)})),n.append(o),t.append(n),t}())};function e(t,e,a,n){const s=document.createElement("div");s.classList.add("food");const o=document.createElement("img");o.setAttribute("src",t),o.setAttribute("alt",n);const c=document.createElement("div");c.classList.add("description");const r=document.createElement("h3");r.textContent=e;const i=document.createElement("h2");return i.textContent=a,c.append(r),c.append(i),s.append(o),s.append(c),s}function a(t){document.querySelectorAll(".tab").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const n=document.querySelector("#content");n.append(function(){const n=document.createElement("div");n.classList.add("header");const s=document.createElement("button");s.setAttribute("id","home"),s.classList.add("tab"),s.textContent="Home",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(s),t())}));const o=document.createElement("button");o.setAttribute("id","menu"),o.classList.add("tab"),o.textContent="Menu",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),function(){const t=document.getElementById("main");t.textContent="",t.append(function(){const t=document.createElement("div");return t.classList.add("menu"),[e("https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg","acbar ice Cream","10CR","acbar ice cream"),e("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/corellian-coffee-tall.jpg","corellian coffee","4CR","corellian coffee"),e("https://starwarsblog.starwars.com/wp-content/uploads/2019/03/darth-maul-quinoa-tall.jpg","darth maul quinoa","20CR","darth maul quinoa"),e("https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg","ewok cookies","4CR","ewok cookies"),e("https://starwarsblog.starwars.com/wp-content/uploads/2018/12/lemon-tart-tall.jpg","lemon tart","6CR","lemon tart"),e("https://starwarsblog.starwars.com/wp-content/uploads/2018/03/porg-puffs-tall.jpg","porg puffs","12CR","porg puffs"),e("https://starwarsblog.starwars.com/wp-content/uploads/2019/08/sith-trooper-float-tall-b.jpg","sith trooper root beer","9CR","sith trooper root beer"),e("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg","vader peanut butter blossoms","20CR","vader peanut butter blossoms")].forEach((e=>t.append(e))),t}())}())}));const c=document.createElement("button");return c.setAttribute("id","contact"),c.classList.add("tab"),c.textContent="Contact",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(c),function(){const t=document.querySelector("#main");t.textContent="",t.append(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");return e.textContent="Call this number '📞 123 456 789' and we will send you the location",t.append(e),t}())}())})),n.append(s,o,c),n}()),n.append(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),home.classList.add("active"),t()}()})();