let response = fetch('https://dummyjson.com/products')
// api url
const getallProductsUrl = "https://dummyjson.com/products";
// const getOneProduct= `https://dummyjson.com/products${this.id}`
// Defining async function
async function getAllProductsApi(url) {

    // Storing response
    const response = await fetch(url);
    console.log(response)
    // Storing data in form of JSON
    var data = await response.json();
    //   if (response) {
    //     hideloader();
    //   }
    show(data);
}
// Calling that async function
getAllProductsApi(getallProductsUrl);


// Function to define innerHTML for HTML table
function show(data) {
    const products = getallProductsUrl;
    const smartphone = data.products.slice(0, 5)
    const laptop = data.products.slice(5, 10)
    const fragrance = data.products.slice(10, 15)
    const skincare = data.products.slice(15, 20)
    const groceries = data.products.slice(20, 25)
    const homeDecor = data.products.slice(25, 30)

   


    for (let i = 0; i < smartphone.length; i++) {
        let smaTab = `<div class="sect">
        <div class="card-cover">
       <div class="card"  id=${i+1} onclick="showProduct(this)">
           <div class="card-img iphone-img">
               <img src="${smartphone[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${smartphone[i].brand}</button>
               <button id="discount">-${smartphone[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${smartphone[i].title}</h3>
                   <p>${smartphone[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${smartphone[i].price},000</p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${smartphone[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${smartphone[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".container").innerHTML += smaTab;

    }
    for (let i = 0; i < laptop.length; i++) {
        let lapTab = `<div class="sect">
        <div class="card-cover">
       <div class="card"  id=${i+6} onclick="showProduct(this)">
           <div class="card-img iphone-img">
               <img src="${laptop[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${laptop[i].brand}</button>
               <button id="discount">-${laptop[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${laptop[i].title}</h3>
                   <p>${laptop[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${laptop[i].price},000 </p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${laptop[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${laptop[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".section2").innerHTML += lapTab;

    }
    for (let i = 0; i < fragrance.length; i++) {
        let frag = `<div class="sect">
        <div class="card-cover">
       <div class="card"  id=${i+11} onclick="showProduct(this)">
           <div class="card-img iphone-img">
               <img src="${fragrance[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${fragrance[i].brand}</button>
               <button id="discount">-${fragrance[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${fragrance[i].title}</h3>
                   <p>${fragrance[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${fragrance[i].price}00</p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${fragrance[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${fragrance[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".section3").innerHTML += frag;

    }
    for (let i = 0; i < skincare.length; i++) {
        let skin = `<div class="sect">
        <div class="card-cover">
       <div class="card"  id=${i+16} onclick="showProduct(this)">
           <div class="card-img iphone-img">
               <img src="${skincare[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${skincare[i].brand}</button>
               <button id="discount">-${skincare[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${skincare[i].title}</h3>
                   <p>${skincare[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${skincare[i].price}00</p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${skincare[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${skincare[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".section4").innerHTML += skin;

    }
    for (let i = 0; i < groceries.length; i++) {
        let grocery = `<div class="sect">
        <div class="card-cover">
       <div class="card" id=${i+21} onclick="showProduct(this)">
           <div class="card-img iphone-img">
               <img src="${groceries[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${groceries[i].brand}</button>
               <button id="discount">-${groceries[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${groceries[i].title}</h3>
                   <p>${groceries[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${groceries[i].price}00</p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${groceries[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${groceries[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".section5").innerHTML += grocery;

    }
    for (let i = 0; i < homeDecor.length; i++) {
        let home = `<div class="sect">
        <div class="card-cover">
       <div class="card" id=${i+26} onclick="showProduct(this)">
           <div class="card-img iphone-img">
                <img src="${homeDecor[i].thumbnail}" alt="none">
           </div>
           <div class="top-btn">
               <button>${homeDecor[i].brand}</button>
               <button id="discount">-${homeDecor[i].discountPercentage}%</button>
           </div>
           <div class="card-details">
                   <h3>${smartphone[i].title}</h3>
                   <p>${homeDecor[i].description}</p>
                   <div class="card-price-details">
                       <p class="price">N${homeDecor[i].price}00</p>
                       <span>
                           <i class="fa fa-star"></i>
                           ${homeDecor[i].rating}
                       </span>
                   </div>
                   <div class="card-stock-details">
                       <p>Stock: ${homeDecor[i].stock}</p>
                   </div>
               </div>
       </div>
        </div>
        </div>`
        document.querySelector(".section6").innerHTML += home;

    }
}

let page = document.querySelector('.sect-bg')
let close = document.querySelector('.close')

close.addEventListener('click', function() {
  page.style.display = 'none'
})

//for the left and right arrows
let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right')
current = 0;

//clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';

    }
}
//init slider
function startSlide() {
    reset()
    sliderImages[0].style.display = 'block'
}

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block'
    current--;
}


//show next
function slideRight() {
    reset()
    sliderImages[current + 1].style.display = 'block';
    current++;
}
//left arrow click
arrowLeft.addEventListener('click', function() {
    if(current === 0 ) {
        current = sliderImages.length
    }
    slideLeft();
})

//right arrow click
arrowRight.addEventListener('click', function() {
    if(current === sliderImages.length - 1 ) {
        current = -1
    }
    slideRight();
})
startSlide()

// Functoion to display the current products

function showProduct(e){
    const selected =  document.querySelector('.sect-bg')
    const pic1 = document.querySelector('.pic1')
    const pic2 = document.querySelector('.pic2')
    const pic3 = document.querySelector('.pic3')
    const pic4 = document.querySelector('.pic4')
    const pic5 = document.querySelector('.pic5')
    const descp = document.querySelector('.descp')
    const title = document.querySelector('.title')
    selected.style.display = "flex"
    selected.style.justifyContent = 'center'

    fetch(`https://dummyjson.com/products/${e.id}`)
    .then(response => response.json())
    .then(data =>{
        pic1.innerHTML = `<img src=${data.images[0]} alt=""/>`
        pic2.innerHTML = `<img src=${data.images[1]} alt=""/>`
        pic3.innerHTML = `<img src=${data.images[2]} alt=""/>`
        pic4.innerHTML = `<img src=${data.images[3]} alt=""/>`
        pic5.innerHTML = `<img src=${data.images[2]} alt=""/>`
        title.innerHTML = `<h3>${data.title}</h3>
        <p>${data.description}</p>
        <div class="card-stock-details details">
            <p>N ${data.price}</p>
                <p>stock: ${data.stock}</p>
        </div>
        `
    });
}
