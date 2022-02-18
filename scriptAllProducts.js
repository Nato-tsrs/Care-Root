//document.writeln("<script type='text/javascript' src='scriptDetail.js'></script>");
const rowContainer=document.getElementById("row9");


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

const product1=new Product("Shampoo",24,"ecofriendly","photos/shampoo.jpg","photos/product1.jpg","photos/product3.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");

const product2=new Product("shower Gel",15,"degradable","photos/product1.jpg","photos/shampoo.jpg","photos/product3.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");
const product3=new Product("soap",5,"organic soap","photos/product3.jpg","photos/shampoo.jpg","photos/product1.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");
const product4=new Product("oil",10,"Shoes","photos/product4.jpg","photos/shampoo.jpg","photos/product1.jpg","photos/product3.jpg","photos/cleaningCloth.jpg");
const product5=new Product("Women's Downdrift Jacket",199,"Women's Downdrift Jacket","photos/coat.jpg","photos/shampoo.jpg","photos/product1.jpg","photos/product3.jpg","photos/product4.jpg");
const product6=new Product("Cleaning Cloth",4,"Cleaning Cloth","photos/cleaningCloth.jpg","photos/shampoo.jpg","photos/product1.jpg","photos/product3.jpg","photos/cleaningCloth.jpg");
const product7=new Product("2-in-1 Shampoo and Conditioner Bar",23,"2-in-1 Shampoo and Conditioner Bar","photos/conditionerBar.jpg","photos/shampoo.jpg","photos/product3.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");
const product8=new Product("Sort & Go Waste Bin",24,"Sort & Go Waste Bin","photos/WasteBin.jpg","photos/shampoo.jpg","photos/product3.jpg","photos/product4.jpg","photos/cleaningCloth.jpg");

let ProdList=[product1,product2,product3,product4,product5,product6,product7,product8];

for (let k=0;k<ProdList.length;k++){
 
  addToProducts(ProdList[k]);
  
}

function addToProducts(prod){

  const newUIProducts = document.createElement('div');
    
  newUIProducts.classList.add("col-4");

  newUIProducts.innerHTML = `<span hidden>${prod.id}</span>
                            <img src="${prod.image}" width="200px" height="250" onclick="details(\`${prod.name}\`)">
                            <h4>${prod.name}</h4>
                            <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-o"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                            </div>
                            <p>$${prod.price}.00</p>

  `;
  rowContainer.appendChild(newUIProducts);
}
// rowContainer.addEventListener('click', (e)=>{
//     GoToDetails(e.target);
// });

  
function details(productName){
  
    // for (let k=0;k<ProdList.length;k++){
    // if(ProdList[k].name==productName){
        
    //     //GoToDetails(ProdList[k]);
        
    //     }        
    //   }
     
    window.location.href = 'product-details.html';
}