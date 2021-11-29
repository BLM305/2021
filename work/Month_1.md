## First Month

### Oct 28: CW#6 -- [Fetching Remote Files](CW6.html)

Put a copy of this file to your repo
https://blm305.github.io/2021/work/CW6.html

Modify title, xxx items, and the default URL (must be different for each student)

Complete init() and check() functions so that xxx items on the page are filled with correct values. Battery level must be an integer percent value. Latitude/Longitude must be in this order, with 4 digits after the decimal point, separated by a comma.

Take a partial screen shot of the page only (max 500px width) -- do not include the console. Put the image into the required PDF. 

### Oct 26: [Asynch Programming](Inspector.html)
* Evaluation of HW1 (no class work)

### Oct 21: [Quiz 1](../exam/Quiz1_2021)
<br>

### Oct 19: CW#5 -- [Keyed collections](Inspector.html)

Consider JOURNAL Array in chap4.js

1. Show that each Entry has exactly one of these:<br>
'work' and 'weekend' (use filter() twice)

2. Make Object cnt that keeps number of each activity:<br>
`cnt.pizza and cnt['pizza']` will return 10

3. Make Map map with the same information:<br>
`map.get('pizza')` will return 10

4. Convert map to Object m and check equality:<br>
`m={}; for (k of map.keys()) m[k]=map.get(k)`<br>
`MENU.deepEqual(m, cnt)` will return true

Your PDF should contain one or two screenshots


### Oct 14: CW#4 -- [Object Inspector](Inspector.html)

Open the object inspector:
https://blm305.github.io/2021/work/Inspector.html

1. Demonstrate Menu:
* Invoke at least one method on each object in Menu
* Test deepEqual() method on two Arrays with the same content

2. Reload the page and invoke filter() and map() methods on Chap4 objects

### Oct 12: CW#3 -- [Text to Objects](ObjectList.html)

Copy this file to your local repo
https://blm305.github.io/2021/work/ObjectList.html

* Find a small table (Web page, Excel sheet, etc) and convert it to an array of objects
* Demonstrate Array methods (map(), filter(), and two more) using this data
* Put your code, your explanation, and a screen shot on the same PDF file

### Oct 7: CW#2 -- [Objects and Arrays](chap4.html)

1. Do "The sum of a range" exercise in Chap 4
2. Modify analyze() method so that it counts the number days for each event type.
For instance,  pizza: 0.0686  10  -- last number is the day count for pizza

Her iki soru için yazdığınız kodu ve çıktısını PDF içinde LMS'e ekleyin

### Oct 5: CW#1 -- [Browser tools](Counting.html)
Use the browser tools (console) only -- no HTML, no files

1. Translate Counting.html to Turkish. Also modify colors as you like.
2. "Looping a triangle" exercise at the end of Chap 2: <br>
`s=''; while (     ) {s=   ; console.log(s)}` <br>
(just complete this line, no need to define a function) <br>
Put into LMS a single screenshot showing both answers in the console.

<script src="../navbar.js"></script>
<style>
  body { 
    max-width: 600px; 
    background: wheat;
  }
  #navbar {
    margin-left: 0;
  }
</style>
