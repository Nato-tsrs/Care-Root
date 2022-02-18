
const smallContainerSingleProduct=document.querySelector('.prodDetails');

class Product{
    constructor(name, price, description,image,image1,image2,image3,image4){
        this.id=Math.random();
        this.name=name;
        this.price=price;
        this.description=description;
        this.image=image;
        this.image1=image1;
        this.image2=image2;
        this.image3=image3;
        this.image4=image4;

    }
 }

    const product1=new Product("Shampoo",24,"ecofriendly","photos/shampoo.jpg","photos/shampoo1.jpg","photos/shampoo2.jpg","photos/shampoo3.jpg","photos/shampoo4.jpg");

    GoToDetails(product1);



 function GoToDetails(mainprod){
    const mainProduct = document.createElement('div');
      
    mainProduct.classList.add("row");
   
    mainProduct.innerHTML = `<span hidden>${mainprod.id}</span>
    
    <div class="col-2">
        <img src="${mainprod.image}" width="500" height="500" id="ProductImg">

        <div class="small-img-row">
            <div class="small-img-col">
                <img onclick="temp(\`${mainprod.image1}\`)" src="${mainprod.image1}" width="250" height="200" class="small-img">
            </div>
            <div class="small-img-col">
                <img onclick="temp(\`${mainprod.image2}\`)" src="${mainprod.image2}" width="250" height="200" class="small-img">
            </div>
            <div class="small-img-col">
                <img onclick="temp(\`${mainprod.image3}\`)" src="${mainprod.image3}" width="250" height="200" class="small-img">
            </div>
            <div class="small-img-col">
                <img onclick="temp(\`${mainprod.image4}\`)" src="${mainprod.image4}" width="250" height="200" class="small-img">
            </div>
                
        </div>
        <p onclick="temp(\`${mainprod.image}\`)" >Back to original<p>
    </div>
    <div class="col-2">
        <p onclick="home()">Home / </p>
        <h1>${mainprod.name}</h1>
        <h4>$${mainprod.price}.00</h4>
        <input type="number" min="0" svalue="1"> Amount
        <a href="cart.html" class="btn">Add to Cart</a>
        <h3>Product Details <i class="fa fa-indent"></i></h3>
        <br>
        <p>${mainprod.description}</p>
    </div>

  
    `;
    smallContainerSingleProduct.appendChild(mainProduct);
  }
 function temp(imgaeurl){
     const mainImage=document.getElementById("ProductImg");
      mainImage.src=imgaeurl;

 }
  function home(){
    window.location.href = 'index.html';
}
