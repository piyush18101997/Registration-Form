// Image uploading in the form
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(60)
                .height(60);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// javascript of form  



// function myFunction() {
//   document.getElementById("FirstName12").innerHTML = document.getElementById("textname").value;
//   document.getElementById("lastname12").innerHTML = document.getElementById("lastname").value;
//   document.getElementById("emailid12").innerHTML = document.getElementById("emailid").value;
//   document.getElementById("mobileno12").innerHTML = document.getElementById("mobileno").value;
//   document.getElementById("Hobbies12").innerHTML = document.getElementById("Hobbies").value;
//   document.getElementById("sex12").innerHTML = document.getElementById("msex").value;
//   document.getElementById("sex12").innerHTML = document.getElementById("fsex").value;
// }