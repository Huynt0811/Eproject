var giohang = new Array();

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[1].src;
    var gia = boxsp[3].children[2].innerText;
    var tensp = boxsp[3].children[0].innerText;

    var soluong = 1;
    var sp = new Array(hinh, gia, tensp, soluong);

    giohang.push(sp);
    var countArr = giohang.length;
    console.log(countArr);
    // lưu giỏ hàng sesionStorge
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}

function showMyCart() {
    var ttgh = "";
    var total = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var tt = giohang[i][1] * giohang[i][3];
        tong += tt;
        ttgh += `<tr>
        <td>
            <figure class="itemside align-items-center">
                <div class="aside"><img src="${giohang[i][0]}" class="img-sm"></div>
                <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">${giohang[i][2]}</a>
                    <p class="text-muted small">SIZE: L <br> Brand: MAXTRA</p>
                </figcaption>
            </figure>
        </td>
        <td> ${giohang[3]}</td>
        <td>
            <div class="price-wrap"> <var class="price">$10.00</var> <small class="text-muted">${giohang[i][1]}$</small> </div>
        </td>
        <td>
            <div class="price-wrap"> <var class="price">$10.00</var> <small class="text-muted">${$tt}$</small> </div>
        </td>
        <td class="text-right d-none d-md-block">
            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a> <a href="" class="btn btn-light" data-abc="true"> Remove</a> </td>
    </tr>`
    }
    total = `<dt>Total:</dt>
    <dd class="text-right text-dark b ml-3"><strong>$59.97</strong></dd>`;

    document.getElementById('mycart').innerHTML = ttgh;
}

function showMyCart_thanhtoan() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);

}