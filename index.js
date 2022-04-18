
// Select some elements...

/*  Step 1:  Selecting element H2 by defining header
that is identified by ID #page-header
OR this is also known as defining value header as a DOM element */

let header = document.querySelector('#page-header')

// Step 2: modify header with style and textALign for left
header.style.textAlign = "left"

/*Step 3: slect all elements represented by img tags with the 
appropriate propery, class="dog-image". */ 
let dogImages = document.querySelectorAll(".dog-image")

/*Step 4: Modify these multiple elements with a for loop 
by changing the style.borderRadius */
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px',
    dogImages[i].style.transform = "rotate(180deg)"
}

//Change dogs' names to align left
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

//Change color of footer text
let footerText = document.querySelector('.footer')
footerText.style.color = 'red'

//Change footer border-style to solid
footerText.style.borderStyle = 'solid'

//Flip images upside down. Action completed in line 21.
