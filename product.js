
//Catching the elements here by using uniques IDs----------------------------------------------------
let filterByCat = document.getElementById("filterBycat");   
let filterByPrice = document.getElementById("filterByPrice");
let search = document.getElementById("search-input");
search.addEventListener("input", function(e){
        getSearch(search.value);
    
})

filterByPrice.addEventListener("change", function(e){
    getPricechange(e);
});
filterByCat.addEventListener("change", function(e){
    getCatchange(e);
});


//Search functionallity by using getSearch------------------------------------------------------------
async function getSearch(searchdata){
    try {
        let res3 = await fetch("https://fakestoreapi.com/products")
        let response = await res3.json()
        let searchvalue = searchdata.toLowerCase();
        let filteredResponce =  response.filter((item)=>item.category.toLowerCase()==searchvalue || item.title.toLowerCase()==searchvalue)
        
         if(filteredResponce){
            ShowData(filteredResponce)  
         }
       } catch (error) {
          console.log(error);
       }
}
  
//The products are sorting with respect to their price in ascending and descending order by using getPricechange function------------------

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

//The products are sorting with respect to their category order by using getCatchange function---------------------------------------------
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


//the function getData is async function used here to fetch the data from given API------------------------------------------------------
async function getData(link){
    try {
        let res = await fetch(link);
        var data = await res.json();
        ShowData(data)
        
    } catch (error) {
        throw new Error("Somthing went wrong...!");
    }
}
getData('https://fakestoreapi.com/products');//the getData function calls here to show the all products on by default---------------------


//this showData function is used to show the data on user interface which has already been fetched in the array format--------------------.
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
        container.append(productBox);  //all the divs and elements that has been created is append in the main div with id conatainer here--------

    })
}


//-----------------------------end of the JS code-----------------------------------------------------
