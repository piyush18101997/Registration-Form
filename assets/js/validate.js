function validate()
{ 
   if( document.StudentRegistration.textname.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textname.focus() ;
     return false;
   }
   if( document.StudentRegistration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }
    var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }

  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   

   if( document.StudentRegistration.Hobbies.value == "" )
   {
     alert( "Please provide your  Hobbies!" );
     document.StudentRegistration.Hobbies.focus() ;
     return false;
   }

   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   } 
 var table = document.getElementById("dataTable3");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.innerHTML = document.getElementById("textname").value;
  cell2.innerHTML = document.getElementById("lastname").value;
  cell3.innerHTML = document.getElementById("emailid").value;
  cell4.innerHTML = document.getElementById("mobileno").value;
  cell5.innerHTML = document.getElementById("Hobbies").value;
  cell6.innerHTML = document.getElementById("msex").value;
   return true ;
} 
 