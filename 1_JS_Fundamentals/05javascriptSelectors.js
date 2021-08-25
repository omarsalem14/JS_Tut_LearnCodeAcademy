// document
// #document<!DOCTYPE html><html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
// document.getElementsByTagName('p')
// HTMLCollection(2) [p, p.second]0: p1: p.secondlength: 2__proto__: HTMLCollection
// document.getElementsByTagName('p')[0]
// <p>​Paragraph​</p>​
// var pTags=document.getElementsByTagName('p')
// undefined
// pTags
// HTMLCollection(2) [p, p.second]
// var firstPTags=pTags[0]
// undefined
// firstPTags
// <p>​Paragraph​</p>​
// var secondPTags=pTags[1]
// undefined
// secondPTags
// <p class=​"second">​Paragraph .Second​</p>​



// document.getElementById('checklist')
// <ul id=​"checklist">​…​</ul>​
// document.getElementsByClassName('done')
// HTMLCollection [li.done]
// document.querySelector('#checklist')
// <ul id=​"checklist">​…​</ul>​
// document.querySelector('.done')
// <li class=​"done">​…​</li>​
// document.querySelectorAll('p')
// NodeList(2) [p, p.second]


// var firstPTag=document.getElementsByTagName('p')[0]
// undefined
// var secondPTag=document.getElementsByTagName('p')[1]
// undefined
// firstPTag
// <p>​Paragraph​</p>​
// firstPTag.innerHTML = "New Name For First Paragraph"
// "New Name For First Paragraph"
// secondPTag.innerHTML = "Its A New Name"
// "Its A New Name"


// var li=document.querySelector('.done')
// undefined
// li
// <li class=​"done">​…​</li>​
// li.className
// "done"
// li.className=" done New"
// " done New"
// li.className=" done New"
// " done New"
// li.className="done"
// "done"
// li.classList
// DOMTokenList ["done", value: "done"]
// li.classList.add('New')
// undefined
// li
// <li class=​"done New">​…​</li>​
// li.classList.remove('New')
// undefined
// 

// var li=document.querySelector('.done')
// undefined
// li
// <li class=​"done">​…​</li>​
// li.parentElement
// <ul id=​"checklist">​…​</ul>​
// li.parentElement.parentElement
// <main>​…​</main>​


// var lii=document.getElementsByTagName('li')[0]
// lii.style.color="red"
// "red"