let id = [
		 "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80", 
		 "https://images.unsplash.com/photo-1672224745017-a9b54ad9188f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
		 "https://images.unsplash.com/photo-1670844693375-2a3152c66ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
		 "https://images.unsplash.com/photo-1672512261420-5f5f3e8f0dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
		 ];

let currentImg = 0;

let arr = document.getElementById("r-a");
arr.addEventListener("click", showI);
function showI() {
	currentImg--;

	if (currentImg == -1) {
		currentImg = id.length - 1;
	}

	document.getElementById("im1").src = id[currentImg];
}
let ara = document.getElementById("l-a");
ara.addEventListener("click", showO);
function showO() {
	currentImg++;

	if (currentImg == id.length) {
		currentImg = 0;
	}
	
	document.getElementById("im1").src = id[currentImg];
}