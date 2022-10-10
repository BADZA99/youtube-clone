const menuIcon =document.querySelector(".menu_icon");
const sidebar =document.querySelector(".yt-sidebar");
const mainContent = document.querySelector(".yt-pageContainer");

menuIcon.addEventListener("click",function(){
    sidebar.classList.toggle("small-sidebar");
    mainContent.classList.toggle("paddingLeft");
})

