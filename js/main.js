/* ===== DATOS EDITABLES ===== */
const CONFIG={whatsapp:"51996002469",email:"pedroabantocontador@gmail.com",instagram:"",facebook:"",formEndpoint:""};
const msg=encodeURIComponent("Hola Pedro, quisiera solicitar una asesoría contable, tributaria o laboral.");
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=`https://wa.me/${CONFIG.whatsapp}?text=${msg}`;a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-mail]").forEach(a=>a.href=`mailto:${CONFIG.email}`);
document.querySelectorAll("[data-email-text]").forEach(e=>e.textContent=CONFIG.email);
["instagram","facebook"].forEach(n=>{const li=document.querySelector(`[data-social="${n}"]`);if(!li)return;
  if(CONFIG[n]){const a=li.querySelector("a");a.href=CONFIG[n];a.target="_blank";a.rel="noopener"}else li.hidden=true});
document.getElementById("year").textContent=new Date().getFullYear();
const f=document.getElementById("contacto-form"),st=document.getElementById("estado");
const rules={nombre:v=>v.trim().length>=3||"Escribe tu nombre.",
 correo:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||"Ingresa un correo válido.",
 celular:v=>/^9\d{8}$/.test(v.replace(/\s/g,""))||"Ingresa 9 dígitos que empiecen con 9.",
 ruc:v=>v===""||/^(10|20)\d{9}$/.test(v)||"El RUC tiene 11 dígitos (10… o 20…).",
 servicio:v=>v!==""||"Elige un servicio.",mensaje:v=>v.trim().length>=10||"Cuéntame brevemente tu necesidad."};
if(f)f.addEventListener("submit",async e=>{e.preventDefault();let ok=true;
 for(const k in rules){const r=rules[k](f.elements[k].value);f.querySelector(`[data-err="${k}"]`).textContent=r===true?"":r;if(r!==true)ok=false}
 if(!ok)return;
 if(!CONFIG.formEndpoint){st.className="warn";st.textContent="El formulario aún no está conectado. Escríbeme por WhatsApp o correo mientras tanto.";return}
 try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}});
  if(!r.ok)throw 0;st.className="ok";st.textContent="Mensaje enviado. Te responderé a la brevedad.";f.reset()}
 catch{st.className="warn";st.textContent="No se pudo enviar. Intenta por WhatsApp o correo."}});
