const cartsmallContainer=document.querySelector('.cart_products');
var i=0;
let tax=0;
let subtotalPrice=0;
let j=0;
class Product{
   constructor(name, price, description,image){
       this.id=Math.random();
       this.name=name;
       this.price=price;
       this.description=description;
       this.image=image;
   }
}

function func(){
    
  const product=new Product("Shampoo",24,"ecofriendly","photos/shampoo.jpg","photos/product1.jpg","photos/product3.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");

addProductToList(product);
//addProductToLocalStorage(product);
add(product);
}



/// /LOCAL STORAGE////
// Function: Retreive products from local storage
function getProducts(){
    let products;
    if(localStorage.getItem('Care Root.products').length===null){
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem('Care Root.products'));
    }
    return products;
  }

  
  // Function: Add a product to local storage
  // function addProductToLocalStorage(product){
    
    
  //   const products = getProducts();
    
  //   products.push(product);
  //   localStorage.setItem('Care Root.products', JSON.stringify(products));
    
  // }
  function add(product){
    alert( "There is "+JSON.parse(localStorage.getItem('Care Root.products')).length+"element in local storage");
if(localStorage.getItem('Care Root.products').length==0){
  localStorage.setItem('Care Root.products', JSON.stringify([product]));
}else{
  const products=JSON.parse(localStorage.getItem('Care Root.products'));
  products.push(product);
  localStorage.setItem('Care Root.products', JSON.stringify(products));
}
  }

  function clear(){
    localStorage.setItem('Care Root.products',"");
  
  }
  
  // Function: remove a product  from local storage

  function removeProduct(id){
    const products = getProducts();
    products.forEach((product, index) => {
      if (product.id === id){
       
        products.splice(index, 1);
      }
      localStorage.setItem('Care Root.products', JSON.stringify(products));
    })
  }
 
  /// /UI UPDATES////
  // Function: Create new Product in UI
  function addProductToList(product) {
    const newUIProduct = document.createElement('tr');
    
    newUIProduct.classList.add(`product${i}`);
    i+=1;
    newUIProduct.innerHTML = `<span hidden>${product.id}</span>
                             <td>
                             <div class="cart-info">
                             <img src="${product.image}" width="200px">
                             <div>
                            <p>${product.name}</p>
                            <small>Price: $${product.price}</small>
                            <br>
                            <button class="cartbutton" onclick="myFunction(${product.id},\`product${i-1}\`)" class="remove">Remove</button>
                         
                            </div>
                            </div>
                            </td>
           
                             <td><input onclick= "x(\`amount${i-1}\`,${product.price},\`subtotal${i-1}\`)" id="amount${i-1}" type="number" min="0" value="0"></td>
                             <td id="subtotal${i-1}">0</td>
    `;
    cartsmallContainer.appendChild(newUIProduct);
  }
  function x(name,price,SubtotalName){
   var z=document.getElementById(name).value;
   document.getElementById(SubtotalName).innerHTML=`$${price*z}`;
   subtotalPrice+=price*z;
   document.getElementById("Subtotal").innerHTML=`$${subtotalPrice}`;
   tax+=2;
   document.getElementById("Tax").innerHTML=`$${tax}`;
   
   document.getElementById("total").innerHTML=`$${tax+subtotalPrice}`;
  }
                    function myFunction(id,x) {
                     
                      document.querySelector(`.${x}`).remove();
                      removeProduct(id);

  }
  //onclick="myFunction(${product.id},\`product${i-1}\`)"                
  // Function: Show Products in UI
  function displayProducts(){
    const products = getProducts();
    products.forEach(product => {
        addProductToList(product);
    });
  }
document.addEventListener('DOMContentLoaded', displayProducts);
  // Function: Show alert message

 
  
 
  // Event: Note Buttons
  // cartsmallContainer.addEventListener('click', (e) => {
   
  //   if(e.target.classList.contains('remove')){
      
  //     const currentProduct = e.target.closest('.product');
  //     currentProduct.remove();
  //     const id = currentProduct.querySelector('span').textContent;
  //     removeProduct(Number(id))
  //   }
  // });
  
 //-------------------  Products  ---------------------//
 