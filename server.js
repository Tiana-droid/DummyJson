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

    // smartphone.addEventListener('click', function() {
    //     for (let i = 0; i < smartphone.length; i++) {
    //         let smatabSmall = `<div class="sect-bg-i">
    //         <div class="sect-modal">
    //             <div class="pic">
    //                 <i class="fa fa-close close"></i>
    //                 <div class="arrow">
    //                     <button class="left">
    //                         <i class="fa fa-chevron-left"></i>
    //                     </button>
    //                     <button class="right">
    //                         <i class="fa fa-chevron-right"></i>
    //                     </button>
    //                 </div>
    //                 <div class="list">
    //                     <div class="modal-card slide pic1">
    //                     <img src="${smartphone[i].thumbnail}
    //                     </div>
    //                     <div class="modal-card slide pic2"></div>
    //                     <div class="modal-card slide pic3"></div>
    //                     <div class="modal-card slide pic4"></div>
    //                     <div class="modal-card slide pic5"></div>
    //                 </div>
    //             </div>
    //             <div class="sect-modal-detail">
    //                 <h3>iPhone 9</h3>
    //                 <p>An apple mobile which is nothing like apple</p>
    //                 <div class="card-stock-details">
    //                     <p>N477,849</p>
    //                     <p>stock: 94</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>`
    //     } document.querySelector(".sect-bg").innerHTML += smaTab;
    // })
    for (let i = 0; i < smartphone.length; i++) {
        let smaTab = `<div class="sect">
        <div class="card-cover">
       <div class="card">
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
       <div class="card">
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
       <div class="card">
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
                       <p class="price">N${fragrance[i].price},000</p>
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
       <div class="card">
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
                       <p class="price">N${skincare[i].price},000 </p>
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
       <div class="card">
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
                       <p class="price">${groceries[i].price},000</p>
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
       <div class="card">
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
                       <p class="price">${homeDecor[i].price},000</p>
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

