const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Trousers</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Casuals</a></li>
            <li><a href="#" class="footer-link">Formals</a></li>
            <li><a href="#" class="footer-link">Sports</a></li>
            <li><a href="#" class="footer-link">Watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores minus harum rem,
        doloremque animi quae. Mollitia, magni odit. Architecto sapiente quas vero natus eos neque sequi nihil
        totam ducimus! Sint aut illum cupiditate minus nihil, laudantium unde enim molestiae fuga numquam
        inventore nemo omnis cum quo incidunt tenetur. Ratione, nihil architecto iste maiores quibusdam libero
        ad hic dolore. Iusto accusantium assumenda ex tempora aperiam labore quidem sunt! Animi, dicta. Totam
        veniam at ea provident quidem laborum dolor quibusdam error tempore obcaecati alias ipsum ullam, vero
        nemo id officia laudantium animi, illo cumque saepe est. Odit excepturi odio recusandae sunt.</p>
<p class="info">Support email - sangphph17157@fpt.edu.vn, sangdhd2002@gmail.com</p>
<p class="info">telephone - 0912345678</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">Terms & services</a>
        <a href="#" class="social-link">Privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best Apparels Online Store</p>
    `;

}

createFooter();