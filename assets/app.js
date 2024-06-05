$(document).ready(function () {
    let cart = [];
   let products = [
    {
        sku: 1,
        name: "iPhone 15 pro max",
        price: 30000,
        tags: ["Celulares", "Apple"],
        description: "iPhone 15 pro max de 256 GB color dorado",
        stock:10
    },
    {
        sku: 2,
        name: "S24 ultra",
        price: 32000,
        tags: ["Celulares", "Samsung", "Android"],
        description: "Samsung Galaxy S24 Ultra de 512 GB color dorado",
        stock:20
    },
]

   let noticias = [
    {
        title: "Ya tenemos iPhone a la venta!",
        content: "El nuevo iPhone 15 pro max ya esta a la venta en nuestra tienda, disponible desde los 256 gb!",
        image:"https://media.es.wired.com/photos/6509d9b5c3cae8b32bec9d69/16:9/w_2560%2Cc_limit/iPhone-15-Pro-Review-Top-Gear.jpeg"
    },
    {
        title: "Ya disponible Galaxy s24 Ultra!",
        content: "Ya tenemos disponible en la tienda el nuevo Galaxy S24 Ultra con titanio",
        image:"https://i.blogs.es/02fbac/samsung-galaxy-24-ultra-precio-mexico-caracteristicas-especificaciones-ficha-tecnica/500_333.jpeg"
    }
   ];
   loadNews();
   loadProducts();

   $(document).on("click",".addCart",function(e) {
    e.preventDefault();
    let sku = $(this).data("sku");
    let productinfo = searchProduct(sku);
    cart.push(productinfo);
    loadCart(cart);
    // console.log(JSON.stringify([productinfo]));
    // if (cartArray === null) {
       
       
    //     localStorage.setItem('cart', JSON.stringify([productinfo]));
        
    // } else {
    //     localStorage.setItem('cart', JSON.stringify([productinfo]));
    //     cartArray = localStorage.getItem('cart');
    //     console.log(cartArray);
    // }
    // console.log(cartArray);
   });

   function loadCart(cart){
    $("#table-cart").empty();
    let total = 0;
    $.each(cart, function (index, item) { 
        total += item.price;
        $("#table-cart").append(`<tr>
            <td>${item.sku}</td>
            <td>${item.name}</td>
            <td>$ ${item.price}</td>
        </tr>`);
    });

    $("#totalCart").html(total);
   }

   function searchProduct(sku){
    let product;
        $.each(products, function (index, val) { 
             if (sku === val.sku) {
                product = val;
             }
        });
        return product;
   }

   $(".home-link").click(function (e) { 
    e.preventDefault();
        $("#home-container").removeClass('hidden');
        $("#cart-container").addClass('hidden');
   });

   $(".cart-link").click(function (e) { 
    e.preventDefault();
        $("#cart-container").removeClass('hidden');
        $("#home-container").addClass('hidden');
   });   

    function loadNews(){
        $.each(noticias, function (index, val) { 
            console.log(val);
             $("#news").append(`<div class="card col-12" >
             <img src="${val.image}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${val.title}</h5>
               <p class="card-text">${val.content}</p>
               
             </div>
           </div>`);
        });
    }

    function loadProducts(){
        $.each(products, function (index, val) { 
            $("#products").append(`<div class="card col-12" >
            <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${val.name}</h5>
              <p class="card-text">${val.description}</p>
              <p class="card-text">${val.price}</p>
              <a href="#" data-sku="${val.sku}" class="btn btn-primary addCart">Agregar a carrito</a>
            </div>
          </div>`);
        });

    }
//    console.log(products);
});