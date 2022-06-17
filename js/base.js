window.onload = () =>{
    console.log("connected")
    let headerSearchIcon = document.getElementById("header_search-icon")
    let searchBar = document.getElementById("header_search")
    let searchBarClose = document.getElementById("header_search-close")
    let header = document.getElementById("header-right")

    headerSearchIcon.onclick = () =>{
        searchBar.classList.toggle("__search_active")
        header.classList.toggle("__hide_header")
    }
    searchBarClose.onclick = () =>{
        searchBar.classList.toggle("__search_active")
        header.classList.toggle("__hide_header")
    }

}