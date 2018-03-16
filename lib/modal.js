
// Get the modal
var prodev_modal = document.getElementById('prodevmodal');
var qa_modal = document.getElementById('quality_assurance_modal');


// Get the button that opens the modal
var prodev = document.getElementById("prodev");
var softtest = document.getElementById("softtest");

// Get the <span> element that closes the modal
var qa_close = document.getElementById("qa_close");
var prodev_close = document.getElementById("prodev_close");

// When the user clicks the button, open the modal 
prodev.onclick = function() {
    prodev_modal.style.display = "block";
}
softtest.onclick = function() {
    qa_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
qa_close.onclick = function() {
    //prodev_modal.style.display = "none";
	qa_modal.style.display = "none";
}

prodev_close.onclick = function() {
    //prodev_modal.style.display = "none";
	prodev_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == prodev_modal) {
        prodev_modal.style.display = "none";

    }
	if (event.target == qa_modal) {
        qa_modal.style.display = "none";

    }
}
