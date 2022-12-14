const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const hamIconMenu = document.querySelector(".menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
hamIconMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains ("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }
    
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = cardsContainer.classList.contains ("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }
    
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains ("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Laptop",
    price: 340,
    image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-gaming-3-gen-6-15-amd-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTk5NTg0fGltYWdlL3BuZ3xoZmIvaGRiLzE0MTkwNDY2MzY3NTE4LnBuZ3xlMzY3ZDNhMWI3NGI3MjNjZDhkYjQzYWQ2ZjQ0MThiYjg0ZTlhYzUzYzM2MmNhMzVhZmJmOWJiNGE4OThmZTRi0",
});
productList.push({
    name: "TV",
    price: 230,
    image: "https://images.samsung.com/is/image/samsung/co-fhd-t5300-un43t5300akxzl-frontblack-237599479?$650_519_PNG$",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Laptop",
    price: 340,
    image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-gaming-3-gen-6-15-amd-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTk5NTg0fGltYWdlL3BuZ3xoZmIvaGRiLzE0MTkwNDY2MzY3NTE4LnBuZ3xlMzY3ZDNhMWI3NGI3MjNjZDhkYjQzYWQ2ZjQ0MThiYjg0ZTlhYzUzYzM2MmNhMzVhZmJmOWJiNGE4OThmZTRi0",
});
productList.push({
    name: "TV",
    price: 230,
    image: "https://images.samsung.com/is/image/samsung/co-fhd-t5300-un43t5300akxzl-frontblack-237599479?$650_519_PNG$",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);