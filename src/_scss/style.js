import './style.scss'

let website = document.querySelector("html")
let drops = document.querySelector(".c-banner__drops")
let leafTop = document.querySelector(".c-banner__leaftop")
let leafRight = document.querySelector(".c-banner__leafright")
document.addEventListener("scroll", e => {
    if (website.scrollTop == 0) {
        drops.classList.remove("is-hidden")

        leafTop.classList.remove("is-indented--top")
        leafRight.classList.remove("is-indented--right")
    } else {
        drops.classList.add("is-hidden")

        leafTop.classList.add("is-indented--top")
        leafRight.classList.add("is-indented--right")
    }
    check_el_pos()
})

function check_el_pos() {
    let scroll_pos = window.scrollY;
    let sections = document.querySelectorAll(".p-scroll")
    let navLinks = document.querySelectorAll(".c-header__navlink")
    sections.forEach(function (section, index) {
        if (scroll_pos + 500 >= section.offsetTop) {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('is-active')
            });
            navLinks[index].classList.add('is-active')
        }
    })
}

$(".c-info__more").click(function () {
    $(this).parent().parent().parent().find(".c-info__overlay").removeClass("u-displayed").addClass("u-notdisplayed");
    $(this).next().removeClass("u-notdisplayed").addClass("u-displayed");
});