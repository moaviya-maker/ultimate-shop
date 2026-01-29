let categoryMenu = document.getElementById("categoryMenu");
let cart = [];

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  categoryMenu.style.display = "none";
}

function toggleCategories(){
  categoryMenu.style.display = categoryMenu.style.display === "block" ? "none" : "block";
}

function showProducts(type){
  showPage("products");
  let box = document.getElementById("productBox");
  let title = document.getElementById("productTitle");

  box.innerHTML="";
  let products=[];

  if(type==="shoes"){
    title.innerText="Shoes";
    products=[
      {name:"Nike Air",price:2000,img:"https://i.imgur.com/0Clfnu7.jpg"},
      {name:"Adidas Boost",price:2500,img:"https://i.imgur.com/OZ5FqKP.jpg"}
    ];
  }
  if(type==="clothes"){
    title.innerText="Clothes";
    products=[
      {name:"T-Shirt",price:1200,img:"https://i.imgur.com/1KegWPz.jpg"},
      {name:"Jacket",price:3000,img:"https://i.imgur.com/zYIlgBl.jpg"}
    ];
  }
  if(type==="electronics"){
    title.innerText="Electronics";
    products=[
      {name:"Smartphone",price:15000,img:"https://i.imgur.com/tGbaZCY.jpg"},
      {name:"Headset",price:3500,img:"https://i.imgur.com/Hh8kZ1U.jpg"}
    ];
  }
  if(type==="accessories"){
    title.innerText="Accessories";
    products=[
      {name:"Watch",price:5000,img:"https://i.imgur.com/6R0DpY2.jpg"},
      {name:"Sunglasses",price:2000,img:"https://i.imgur.com/9V7hYhV.jpg"}
    ];
  }
  if(type==="gadgets"){
    title.innerText="Gadgets";
    products=[
      {name:"Tablet",price:12000,img:"https://i.imgur.com/vI5k4xX.jpg"},
      {name:"Smart Home",price:8000,img:"https://i.imgur.com/JkH5JfU.jpg"}
    ];
  }
  if(type==="toys"){
    title.innerText="Toys";
    products=[
      {name:"Lego Set",price:3500,img:"https://i.imgur.com/8Q2GhYP.jpg"},
      {name:"RC Car",price:2500,img:"https://i.imgur.com/kjZlC6Z.jpg"}
    ];
  }

  products.forEach(p=>{
    let div = document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${p.img}"><h4>${p.name}</h4><p>Rs ${p.price}</p><button onclick="addCart('${p.name}',${p.price})">Add to Cart</button>`;
    box.appendChild(div);
  });
}

function addCart(name,price){
  let item = cart.find(i=>i.name===name);
  if(item){ item.qty++; }
  else{ cart.push({name,price,qty:1}); }
  alert("Added to Cart");
}

function showCart(){
  showPage("cart");
  let area = document.getElementById("cartItems");
  let total=0;
  area.innerHTML="";
  cart.forEach((item,i)=>{
    total+=item.price*item.qty;
    area.innerHTML+=`<div>${item.name} x ${item.qty} <button onclick="changeQty(${i},1)">+</button> <button onclick="changeQty(${i},-1)">-</button></div>`;
  });
  document.getElementById("total").innerText="Total: Rs "+total;
}

function changeQty(i,val){
  cart[i].qty+=val;
  if(cart[i].qty<=0) cart.splice(i,1);
  showCart();
}

function goOrder(){ showPage("order"); }

function placeOrder(){
  document.getElementById("orderMsg").innerText="Order Placed Successfully! 🎉";
  cart=[];
  showPage("home");
}

// Featured Products
let featured = [
  {name:"Featured Shoe",price:2200,img:"https://i.imgur.com/OZ5FqKP.jpg"},
  {name:"Featured T-Shirt",price:1300,img:"https://i.imgur.com/1KegWPz.jpg"},
  {name:"Featured Phone",price:15500,img:"https://i.imgur.com/tGbaZCY.jpg"}
];

let featuredBox = document.getElementById("featuredProducts");
featured.forEach(p=>{
  let div = document.createElement("div");
  div.className="card";
  div.innerHTML=`<img src="${p.img}"><h4>${p.name}</h4><p>Rs ${p.price}</p><button onclick="addCart('${p.name}',${p.price})">Add to Cart</button>`;
  featuredBox.appendChild(div);
});
