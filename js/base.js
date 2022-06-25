window.onload = () =>{
    console.log("connected")
    const headerSearchIcon = document.getElementById("header_search-icon")
    const searchBar = document.getElementById("header_search")
    const searchBarClose = document.getElementById("header_search-close")
    const header = document.getElementById("header-right")

    const menuBtn = document.getElementById("menu-btn")
    const burgerMenu = document.getElementById("burger")
    //
    // headerSearchIcon.onclick = () =>{
    //     searchBar.classList.toggle("__search_active")
    //     header.classList.toggle("__hide_header")
    // }
    // searchBarClose.onclick = () =>{
    //     searchBar.classList.toggle("__search_active")
    //     header.classList.toggle("__hide_header")
    // }

    menuBtn.onclick = () => {
        menuBtn.classList.toggle("open")
        burgerMenu.classList.toggle("__open_burger")
    }


}