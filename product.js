let filterByCat = document.getElementById("filterBycat");
let filterByPrice = document.getElementById("filterByPrice");
let search = document.getElementById("search-input");
search.addEventListener("input", function(e){
    getSearch(e);
})
filterByPrice.addEventListener("change", function(e){
    getPricechange(e);
});
filterByCat.addEventListener("change", function(e){
    getCatchange(e);
});


function getSearch(e){
    let res3 = e.target.value;
    let searchValue = res3.toLowerCase();
    let Product = async function(){
                    let data1 = await fetch('https://fakestoreapi.com/products');
                    let product = await data1.json();
                    
                    } 
    console.log()                
                    
    }
  


function getPricechange(e){
    let res2 = e.target.value;
    let URL;
    if(res2 === "Low to High"){
        URL = "https://fakestoreapi.com/products?sort=asc";
        getData(URL);
        
    }else{
        URL = "https://fakestoreapi.com/products?sort=desc";
        
        getData(URL);
    }
}


function getCatchange(e){
    let res1 = e.target.value;
    let URL;
    if(res1 === "All"){
        URL = 'https://fakestoreapi.com/products'
        getData(URL);
        
    }else{
        URL = `https://fakestoreapi.com/products/category/${res1}`
        getData(URL);
    }
}

async function getData(link){
    try {
        let res = await fetch(link);
        var data = await res.json();
        ShowData(data)
        
    } catch (error) {
        throw new Error("Somthing went wrong...!");
    }
}
getData('https://fakestoreapi.com/products');


function ShowData(data){
    container.innerHTML = null;
    data.forEach(function(ele, i){
        let productBox = document.createElement("div");
        let image = document.createElement("img");
        image.src = ele.image;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let category = document.createElement('h5');
        category.innerHTML = ele.category;

        let price = document.createElement('h3');
        price.innerHTML = `Price: ${ele.price}`;

        productBox.append(image, category, title, price);
        container.append(productBox);

    })
}
