"use strict";
const NAV = 
`<link href="https://maeyler.github.io/JS/navbar.css" rel="stylesheet">
<ul>
    <li class=JavaScript>JavaScript
      <div class=menu>
        <a href="https://maeyler.github.io/JS/" target=BLM305>JS Examples</a>
        <a href="https://javascript.info/" target=BLM305>JS Tutorial</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" target=BLM305>MDN Web Docs</a>
      </div>
    </li>
    <li class=Course>Course
      <div class=menu>
        <a href="/2021/index.html">Home 🏠</a>
        <a href="/2021/Course_outline.html">Outline</a>
        <a href="https://eloquentjavascript.net/" target=BLM305>Textbook</a>
        <a href="https://github.com/BLM305/2021" target=BLM305>Repo 😺</a>
      </div>
    </li>
    <li class=Work>Work
      <div class=menu>
        <a href="/2021/work/First%20Week">First Week</a>
        <a href="/2021/work/Month_1">October</a>
        <a href="/2021/work/Month_2">November</a>
      </div>
    </li>
</ul>`

function setNavbar() {
  let nav = document.createElement('nav')
  nav.innerHTML = NAV
  nav.id = 'navbar'
  document.body.append(nav)
  nav.querySelectorAll("li").forEach(li => {
    let div = li.firstElementChild
    li.onmouseenter = () => {
      div.style.display = 'block'
      let w = div.offsetWidth - li.offsetWidth
      let x = li.offsetLeft - w/2
      let m = nav.offsetWidth - div.offsetWidth
      div.style.left = Math.min(Math.max(0, x), m)+'px'
    }
    li.onmouseleave = () => { div.style.display = '' }
  })
}
setNavbar()
