const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// const load=document.querySelector("#loader");

// window.addEventListener("load",function(){
//         load.style.display="none"
// });


//search


$(document).ready(function(){
    $(".active").click(function(){
        $(".search-form").toggle();
        $("input[type='search']").focus();
    });
});


//============= To Top==============

const toTop=document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("actives");
    }else{
        toTop.classList.remove("actives");
    }
})


// =================REVIEW=============

const stars=document.querySelectorAll(".stars i");

stars.forEach((star,index1)=>{
    star.addEventListener("click",() =>{
        stars.forEach((star,index2)=>{
            if(index1>=index2){
                star.classList.add('active');
            }else{
                star.classList.remove('active');
            }
        });
    });
});








// ============= Cart================

const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.carts');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    console.log(btnCart);
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

const btnCartm=document.querySelector('#cartm-icon');


btnCartm.addEventListener('click',()=>{
    console.log(btnCartm);
    cart.classList.add('cart-active');

});

document.addEventListener('DOMContentLoaded',loadsaree);

function loadsaree(){
    loadContent();
}

function loadContent(){
    //Remove Saree Item from Cart

    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    //Product Quantity Change Event

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });

    //Product cart
    let cartBtns=document.querySelectorAll('.cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });


    updateTotal();
}

//Remove Item
function removeItem(){
    if(confirm('Are Your Sure To Remove')){
        let imgSrc=this.parentElement.querySelector('.cart-img').src;
        itemList=itemList.filter(el=>el.imgSrc!=imgSrc);
        this.parentElement.remove();
        loadContent();
    }
}

//Change Quntity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }

    loadContent();
}

let itemList=[];


//Add Cart
function addCart(){
    let saree=this.parentElement;
    let title=saree.querySelector('.saree-title').innerHTML;
    let price=saree.querySelector('.saree-price').innerHTML;
    let imgSrc=saree.querySelector('.saree-img').src;

let newProduct={title,price,imgSrc}


//Check Product already Exist in Cart

if(itemList.find((el)=>el.imgSrc==newProduct.imgSrc))
{
    alert("Product Alreard added in Cart");
    return;
}else{
    itemList.push(newProduct);
    
}

let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.appendChild(element);
loadContent()
}



function createCartProduct(title,price,imgSrc){

    return `
    <div class="cart-box ">
                        <img src="${imgSrc}" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-saree-title">${title}</div>
                                <div class="price-box">
                                    <div class="cart-price">${price}</div>
                                    <div class="cart-amt">${price}</div>
                                </div>
                                <input type="number" value="1" max="10" class="cart-quantity">
                        </div>
                            <i class="fa fa-trash cart-remove"></i>
                    </div>
    `;
  }



  function updateTotal(){
    const cartItem=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');

    let total=0;

    cartItem.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');
        let price=parseFloat(priceElement.innerHTML.replace("₹",""));
        let qty=product.querySelector('.cart-quantity').value;
        total +=(price*qty);
        product.querySelector('.cart-amt').innerHTML="₹"+(price*qty);
    });
    totalValue.innerHTML='Rs.'+total;
  }








//================ Product Preview================

$(document).ready(function(){
    $('.des').click(function(){

        $('.preview').css('transform','scale(1)');
        console.log($('#declose'));
        $('#declose').click(function(){
            $('.preview').css('transform','scale(0)');
            this.parentElement.remove();
        });

    });

    // $('#declose').click(function(){
    //     $('.preview').css('transform','scale(0)');
    // });
   
});



let deTails=document.querySelectorAll('.des')
const depre=document.querySelector('.preview');
const deClose=document.querySelector('#declose');

deTails.forEach((btn)=>{
    btn.addEventListener('click',addpreview);
});




function addpreview(){
    let sareeDetails=this.parentElement;

    // console.log(sareeDetails);
    
    let deTitle=sareeDetails.querySelector('.saree-title').innerHTML;
    let dePrice=sareeDetails.querySelector('.saree-price').innerHTML;
    let deImg=sareeDetails.querySelector('.saree-img').src;

    // console.log(deTitle,dePrice,deImg);

    let newProductdetails=createCartProductdetails(deTitle,dePrice,deImg);
    let elements=document.createElement('div');
    elements.innerHTML=newProductdetails;
    let detailBasket=document.querySelector('.previews1');
    detailBasket.append(elements);
    // console.log(detailBasket);
}


function createCartProductdetails(deTitle,dePrice,deImg){

    return `
    <div class="preview">
    <div class="pro-preview saree-active">
      <i class="fas fa-times" id="declose"></i>
      <div class="rows">
      <img src="${deImg}" alt="">
      <div class="detail">
          <h5 class="saree-title">${deTitle}</h5>
          <h4  class="saree-price">${dePrice}</h4>
          <h3>Product Details</h3>
         <span>The saris are woven from pure mulberry silk thread.The pure mulberry silk and the Zari used in the making of Kanchipuram saris comes from South India.
             To weave a Kanchipuram sari three shuttles are used.While the weaver works on the right side, his aide works on the left side shuttle.
             The border colour and design are usually quite different from the body.(gold thread) etc. </span>
      </div>
     </div>
    </div>
    `;

}








// ===========================Payment==========================

// $(document).ready(function(){
   
   
//     $('.btn-buy').click(function(){
//         $('.pay').css('transform','scale(1)');
//         // console.log($('.paybtn'));
     

//     });

//     $('.pylat').click(function(){
//         alert("Pay Later!");
//         $('.pay').css('transform','scale(0)');
      
//     });

//     $('.cod').click(function(){
//         alert("Cash on Delivery!");
//         $('.pay').css('transform','scale(0)');
    
//     });
// });


let btnPay=document.querySelector(".btn-buy");
let qrCode=document.querySelector(".pay");
let pylate=document.querySelector('.pylat');
let codlate=document.querySelector(".cod");


btnPay.onclick=function(){
    // openPay();
    let qrCodede=document.querySelector(".pay").innerHTML="";
    
    let totalPay=document.querySelector(".total-price").innerHTML;


    let newProductpay=createCartProductpay(totalPay);
    let payelement=document.createElement('div');
    payelement.innerHTML=newProductpay;
    let payBasket=document.querySelector('.pay');
    payBasket.append(payelement);
    $('.pay').css('transform','scale(1)');

    $('.pylat').click(function(){
        alert("Pay Later!");
        $('.pay').css('transform','scale(0)');
      
    });

    $('.cod').click(function(){
        alert("Cash on Delivery!");
        $('.pay').css('transform','scale(0)');
    
    });

    $('.payclose').click(function(){
        $('.pay').css('transform','scale(0)');
    
    });
    
}




function createCartProductpay(totalPay){
    return `
    <div class="pay">
      
    <label for="" class="qrc">
    <i class="fas fa-times payclose"></i>
    <img src="img/Qrcode.jpg" class="qrimg" alt="">
    <img src="img/logos2.png" class="upiimg" alt="">
        <h4 class="payrs">${totalPay}</h4>

        <div class="paybtn">
            <button type="button" class="pylat">Pay Later</button>
            <button type="submit" class="cod">Cash On Delivery</button>
        </div>

        <p>~~~~~Queen~~~~~</p>

    </label>
    </div>
    `;
}



