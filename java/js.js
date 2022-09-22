function init() {
	var traitim = document.getElementById("traitim");
	traitim.onclick = iloveyou;
}
function iloveyou() {
	var x = document.getElementById("traitim")
	x.innerHTML = "<h1>I Love You</h1>"


}

window.onload = init;