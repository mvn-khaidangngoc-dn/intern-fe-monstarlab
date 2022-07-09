let fetchUSer = document.querySelector(".product-list");

let url = "https://reqres.in/api/users"
fetch(url)
.then(response => response.json())
.then(data => {
    let dataUser = data.data
    console.log("check data 2",dataUser);
    fetchUSer.innerHTML = dataUser.map((item)=>{
        return ` 
            <li class="product-item col-3">
            <a href="#" class="product-img">
            <img src="${item.avatar}" alt="product img">
            </a>
            <div class="product-info">
            <h3 class="product-name"><a href="">${item.first_name}</a></h3>
            <span class="product-price">${item.last_name}</span>
            </div>
            <!-- btn btn-primary | class reuseable -->
            <a href="#" class="btn btn-primary">View product</a>
            </li>
                `
})
.join('')
})
.catch(err => console.log(err))