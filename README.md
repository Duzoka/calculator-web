# Calculator-Web
 It's my own personal project with html, css and javascript
 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot
![iPhone-XS-X-375x812](https://user-images.githubusercontent.com/102036752/218879063-5e39e511-3026-4e5e-ba33-0d093cac9f7e.png)
![Laptop-1-1440x900](https://user-images.githubusercontent.com/102036752/218879066-a28a06d7-aa73-4c21-9d58-47680fc3876b.png)

### Links

- Live Site URL: [Live](https://duzoka.github.io/calculator-web/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript Dom

### What I learned

```JS To Get HTML Element
  
   var numero = document.getElementById('resultado').innerHTML;
  
```
```JS To Concatenate with Quotation Marks
  
    document.getElementById('resultado').innerHTML = numero + num;
  
```

```JS To Clear Content with HTML
  
      document.getElementById('resultado').innerHTML = "";
  
```
```JS To Clear Only one Value
  
      var resultado = document.getElementById("resultado").innerHTML;. 
  
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
  
```

```JS Simple Function What See the String and calculate it
  
      var resultado = document.getElementById("resultado").innerHTML;
  if(resultado)
  {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else
  {
    document.getElementById("resultado").innerHTML = ""
  }
  
```

### Continued development

 This is a personal project but i have a lot of help. I've watched a video on Youtube to see how to make all things above. I'll made soon a new calculator but with my own abilities. So just see this minimalist designer that i've thought for myself.


## Author

- Frontend Mentor - [@Duzoka](https://www.frontendmentor.io/profile/Duzoka)


