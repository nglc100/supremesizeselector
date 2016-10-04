
if(!localStorage.size) localStorage.size = "7";


var input_size  = $('#size');

input_size.val(localStorage.size);

$('#commit-button').click(function() {
	submit();
});

function submit() {
	if(!input_size==-1) {
		alert('Please select a size');;
	} else {
		localStorage.size = input_size.val();
		alert("Information saved!");
	}
}