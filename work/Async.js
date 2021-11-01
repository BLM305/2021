"use strict";
var ASYNC; //singleton instance
const RDR2 = new FileReader();
RDR2.onload = () => display(RDR2);
function fileSelect(t) { 
//target t is the file selection HTMLInputElement
    let a = t.files;
    if (a.length == 0) return;
    display(RDR2);
    if (a.length == 1) {
      let [f] = a; display(f);
      ASYNC.displayBlob(f)
    } else {
      display(a);
      a = [...a].map(f => f.name+" "+f.size+" bytes")
      ASYNC.displayText(a.join('\n'))
    }
}

class Async extends Menu {
  constructor(pre, img) {
    super();  //singleton class
    if (ASYNC) throw 'multiple instances not allowed'
    ASYNC = this; this.pre = pre; this.img = img;
    this.navigator = navigator;
    this.clipboard = navigator.clipboard;
    this.geolocation = navigator.geolocation;
    this.reader = RDR2  //defined above
  }
  isTextFile(f) {
    const EXT = [".js", ".java", ".json", ".md"]
    return f.type.startsWith("text") 
        || EXT.some(x => f.name.endsWith(x))
  }
  displayBlob(f) {
    console.assert(f instanceof Blob); let M = this;
    if (!f.name) f.name = "???";
    console.log(f.name+" "+f.size+" bytes "+f.type);
    if (f.type.startsWith("image")) {
        RDR2.readAsDataURL(f);
        RDR2.onload = () => M.displayImage(RDR2.result)
    } else if (this.isTextFile(f)) {
        RDR2.readAsText(f);
        RDR2.onload = () => M.displayText(RDR2.result)
    } else {
        this.displayText(f.name+" -- Unknown "+f.type)
    }
  }
  displayText(txt) {
    this.pre.innerText = txt; this.img.src = ""; 
  }
  displayImage(url) {
    this.pre.innerText = ""; this.img.src = url; 
  }
}
