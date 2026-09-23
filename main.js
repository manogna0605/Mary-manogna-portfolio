const body=document.body;
const menu=document.getElementById("nav-menu");
const menuBtn=document.getElementById("menu-btn");
const closeBtn=document.getElementById("close-menu");
const theme=document.getElementById("theme");
menuBtn?.addEventListener("click",()=>menu.classList.add("open"));
closeBtn?.addEventListener("click",()=>menu.classList.remove("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>menu.classList.remove("open")));
theme?.addEventListener("click",()=>{
  body.classList.toggle("dark");
  const icon=theme.querySelector("i");
  icon.className=body.classList.contains("dark")?"ri-sun-line":"ri-moon-line";
  localStorage.setItem("mary-theme",body.classList.contains("dark")?"dark":"light");
});
if(localStorage.getItem("mary-theme")==="dark"){
  body.classList.add("dark");
  theme.querySelector("i").className="ri-sun-line";
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const sections=document.querySelectorAll("section[id]");
const links=document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(section=>{
    if(window.scrollY>=section.offsetTop-160)current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});
