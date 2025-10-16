const fake_products = [
    {
        id: 1,
        title: 'Samsung Galaxy S24',
        price: 84000,
        mrp:84000,
        img: 'Samsung.webp'
    },
    {
        id: 2,
        title: 'TWS',
        price: 4000,
        mrp:5000,
        img: 'Tws.jpg'
    },
    {
        id: 3,
        title: 'Vivo v25',
        price: 24000,
        mrp:25000,
        img: 'vivo.png'
    },
    {
        id: 4,
        title: 'Oppo A35',
        price: 14000,
        mrp: 15000,
        img: 'Oppo.jpg'
    },
    {
        id: 5,
        title: 'Sound Bar',
        price: 2000,
        mrp:2000,
        img: 'Sound Bar.avif'
    },
    {
        id: 6,
        title: 'Speaker',
        price: 1000,
        mrp:1000,
        img: 'Speaker.jpg'
    },
    {
        id: 7,
        title: 'VR Headset',
        price: 64000,
        mrp:68000,
        img: 'Vr.jpg'
    },
    {
        id: 8,
        title: 'Cricket Bat',
        price: 400,
        mrp: 400,
        img: 'bat.jpg'
    },
    {
        id: 9,
        title: 'Cricket Ball',
        price: 150,
        mrp: 150,
        img: 'ball.jpg'
    },
    {
        id: 10,
        title: 'Cricket Full Kit',
        price: 1000,
        mrp: 1200,
        img: 'Full kit.jpg'
    },
    
    {
        id: 11,
        title: 'Hand Gripper',
        price: 400,
        mrp: 300,
        img: 'hand gripper.jpg'
    },
    {
        id: 12,
        title: 'Dumbbells',
        price: 400,
        mrp: 1200,
        img: 'Dumbbells.webp'
    },
    {
        id: 13,
        title: 'Dustbin',
        price: 240,
        mrp: 240,
        img: 'Dustbin.png'
    },
    {
        id: 14,
        title: 'Stump',
        price: 450,
        mrp: 500,
        img: 'stump.webp'
    },
    {
        id: 15,
        title: 'Dove Shampoo',
        price: 200,
        mrp: 200,
        img: 'shampoo.jpg'
    },
    {
        id: 16,
        title: 'Colgate',
        price: 40,
        mrp: 50,
        img: 'Colgate.jpeg'
    },
   
]

const products_container = document.querySelector('.products');


function renderCard(product) {

    
    let price_markup = (product.mrp != product.price) 
        ? `<p>Rs. <del style="color:grey">${product.mrp}</del> ${product.price}</p>` 
        : `<p>Rs. ${product.price}</p>`;

    let card_design = `
         <div class="col col-6 col-sm-6 col-md-4 col-lg-3 " id="product-${product.id}">
          <div class="card">
      <img src="assests/images/${product.img}" class="card-img-top w-100" id="images" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
         ${price_markup}
        
        <button class="btn btn-primary" id="add-to-cart-${product.id}">Add to Cart</button>
      </div>
    </div>
    </div>
    `;
    return card_design;

}

function renderProducts(products){
    let result =""
    for(product of products){
       result += renderCard(product);
    }
    products_container.innerHTML = result;
}

renderProducts(fake_products);

const images = document.getElementById('images');

images.addEventListener('mouseover',()=>{
    
})