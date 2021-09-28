"use strict";
const CSS =
`body {
  margin-top: 40px;
}
nav {
  width: 100%;
  position: absolute;
  top: 0;
  margin-left: -8px;
  font-family: sans-serif;
}
nav ul {
  display: flex;
  white-space: nowrap;
  background: yellow;
  color: blue;
  top: 0;
  margin: 0;
  padding: 0;
}
nav li {
  display: inline-block;
}
nav div {
  position: absolute;
  margin-top: 3px;
  display: none;
  box-shadow: 0 4px 5px 3px rgb(0 0 0 / 20%);
}
nav a {
  display: block;
  background: yellow;
  color: blue;
  text-decoration: none;
  border-bottom: 1px dotted gray;
}
nav a:visited {
  color: purple;
}
nav a:last-child {
  border-bottom: none;
}
nav li, nav a {
  text-align: left;
  font-size: initial;
  width: initial;
  padding: 8px 10px;
  margin: 0;
}
nav li:hover, nav a:hover {
  background: blue;
  color: yellow;
}`

const NAV = 
`<ul>
    <li class=JavaScript>JavaScript
      <div class=menu>
        <a href="https://maeyler.github.io/JS/" target=BLM305>JS Examples</a>
        <a href="https://javascript.info/" target=BLM305>JS Tutorial</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction" target=BLM305>MDN Web Docs</a>
      </div>
    </li>
    <li class=Course>Course
      <div class=menu>
        <a href="/2021/Course_outline.html">Outline</a>
        <a href="https://eloquentjavascript.net/" target=BLM305>Textbook</a>
        <a href="https://github.com/BLM305/2021" target=BLM305>Repository</a>
      </div>
    </li>
    <li class=Work>Work
      <div class=menu>
        <a href="/2021/work/First%20Week">First Week</a>
      </div>
    </li>
</ul>`

function setNavbar() {
  let css = document.createElement('style')
  css.innerHTML = CSS
  document.head.append(css)
  let nav = document.createElement('nav')
  nav.innerHTML = NAV
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
