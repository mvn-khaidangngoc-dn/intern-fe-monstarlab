$(document).ready(()=>{
    url = "https://reqres.in/api/users";
    $.ajax({
        url: url,
        type:'get',
        dataType:'json',
        success:function (data) {
            console.log(data.data)  
            var html = '';  
            $.each(data.data, function(index,data){
                html +='  <li class="product-item col-3">';
                html +='<a href="#" class="product-img">';
                html +='<img src="'+ data.avatar +'" alt="product img">';
                html +='</a>';
                html +='<div class="product-info">';
                html +='<h3 class="product-name"><a href="">'+ data.first_name +'</a></h3>';
                html +='<span class="product-price">'+ data.last_name +'</span>';
                html +='</div>';
                html +='<!-- btn btn-primary | class reuseable -->';
                html +='<a href="#" class="btn btn-primary">View product</a>';
                html +='</li>';
            })
            $('.product-list').html(html);
        }
    })
})