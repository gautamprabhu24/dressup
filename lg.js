function check()
{
   var i=localStorage.getItem("email");
   var k=localStorage.getItem("pwd");
   var h=document.getElementById("w").value;
   var j=document.getElementById("e").value;
   if(h!=i || k!=j)
   {
      alert("Wrong login credentials");
   }
   else{
      window.open("web.html");
   }
}