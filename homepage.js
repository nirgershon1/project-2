let shop = document.getElementById('shop');

let shopItemData = [{
    id:"asdaasddaasd",
    name:"Iphone 14 pro",
    price: 1100,
    desc: "Lorem ipsum dolor sit amet consectetur.",
    img: "img/img5.jfif"
},
{
    id:"asdaasdewsd",
    name:"Iphone 13 pro",
    price: 950,
    desc: "Lorem ipsum dolor sit amet consectetur.",
    img: "img/img5.jfif"
},
{
    id:"adaaasdasd",
    name:"Iphone 12 pro",
    price: 800,
    desc: "Lorem ipsum dolor sit amet consectetur.",
    img: "img/img5.jfif"
},
{
    id:"aasdasdsad",
    name:"Iphone 11 pro",
    price: 700,
    desc: "Lorem ipsum dolor sit amet consectetur.",
    img: "img/img5.jfif"
}]

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop =() =>{
return (shop.innerHTML= shopItemData.map((x) =>{
    let {id,name,price,desc,img} =x;
    let search;
    return`
<div id=product-id-${id} class="item">
<img width="220" src=${img} alt="">
<div class="details">
    <h3>${name}</h3>
    <p>${desc}</p>
    <div class="price">
        <h2>$ ${price}</h2>
        <div class="bouttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            
        </div>
    </div>
</div>
</div>
`
}).join(""));
};

generateShop()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
        id: selectedItem.id,
        item: 1,
    });}
    else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket))
    // console.log(basket);
    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket))
    // console.log(basket);
    update(selectedItem.id);
}
let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartamount")
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y) => x+y , 0)
    
}