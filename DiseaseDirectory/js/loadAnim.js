window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loadDiv").remove();
    document.querySelector(".body-load-anim").classList.remove("body-load-anim")}, 2000);
})