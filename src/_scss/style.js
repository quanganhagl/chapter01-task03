import './style.scss'

let website = document.querySelector("html")
let drops = document.querySelector(".c-banner__drops")
let leafTop = document.querySelector(".c-banner__leaftop")
let leafRight = document.querySelector(".c-banner__leafright")

// scroll ẩn hiện bubble và leaf
document.addEventListener("scroll", e => {
    if (website.scrollTop <= 100) {
        drops.classList.remove("is-hidden")

        leafTop.classList.remove("is-indented--top")
        leafRight.classList.remove("is-indented--right")
    } else {
        drops.classList.add("is-hidden")

        leafTop.classList.add("is-indented--top")
        leafRight.classList.add("is-indented--right")
    }
// cuộn đến phần nào thì sáng nav bar phần đó
    check_el_pos()
})

let navLinks = document.querySelectorAll(".c-header__navlink")
function check_el_pos() {
    let scroll_pos = window.scrollY;
    let sections = document.querySelectorAll(".p-scroll")
    sections.forEach(function (section, index) {
        if (scroll_pos + 500 >= section.offsetTop) {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('is-active')
            });
            navLinks[index].classList.add('is-active')
        }
    })
}

// click vào more trong point để ẩn hiện overlay

$(".c-info__more").click(function () {
    $(this).parent().parent().parent().find(".c-info__overlay").removeClass("u-displayedflex").addClass("u-nodisplayforced");
    $(this).next().removeClass("u-nodisplayforced").addClass("u-displayedflex");
});

// MOBILE MENU 
let menuBtnSp = document.querySelector(".c-banner__iconmenu.sp-only")
let menuBar = document.querySelector(".c-header.pc-only")
let bodyElement = document.querySelector("body")

function mobileMenuHandler () {
    if (menuBar.classList.contains("is-displayedmenusp")) {
        menuBtnSp.src = "./assets/img/header/iconmenu_white_mobile.png" 
        bodyElement.classList.add("u-disablescroll")
        leafRight.classList.add("u-nodisplayforced")
        leafTop.classList.add("u-nodisplayforced")
    } else {
        menuBtnSp.src = "./assets/img/header/iconmenu_green_mobile.png"
        bodyElement.classList.remove("u-disablescroll")
        leafRight.classList.remove("u-nodisplayforced")
        leafTop.classList.remove("u-nodisplayforced")
    }
}

// click vào menu button để ẩn hiện menu bar
menuBtnSp.addEventListener("click", function() {
    menuBar.classList.toggle("is-displayedmenusp")
    mobileMenuHandler()
})
// click vào nav button menu để ẩn menu bar
navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function() {
        menuBar.classList.remove("is-displayedmenusp")
        mobileMenuHandler()
    })
});

//arrow down column
// let openColumnDescriptionBtns = document.querySelectorAll(".c-column__sparrowblock")
// openColumnDescriptionBtns.forEach(btn => {
//     btn.addEventListener("click", function() {
//         let columnDescriptionBlock = this
//     openColumnDescriptionBtn.classList.toggle("pc-only")
//     })
// })
$(".c-column_sparrowblock").click(function() {
    var a = $(this).parent().children(".c-column_article").children(".c-column__description").toggleClass("is-sphidden");
    console.log(a); 
})