function fun1()
{
   var q=/^[A-Za-z]+$/;
   var x=document.getElementById("b").value;
   if(x=="")
   {
      document.getElementById("a").innerHTML="Please fill out this field";
      return true;
   }
   else if(!q.test(x))
   {
      document.getElementById("a").innerHTML="Please enter valid name";
      return true;
   }
   else
   {
      document.getElementById("a").innerHTML="";
      return false;
   }
}
function fun2()
{
   var q=/^[A-Za-z]+$/;
   var x=document.getElementById("p").value;
   if(x=="")
   {
      document.getElementById("o").innerHTML="Please fill out this field";
      return true;
   }
   else if(!q.test(x))
   {
      document.getElementById("o").innerHTML="Please enter valid name";
      return true;
   }
   else
   {
      document.getElementById("o").innerHTML="";
      return false;
   }
}
function fun3()
{
   var q=/^[A-Za-z]+$/;
   var x=document.getElementById("l").value;
   if(x=="")
   {
      document.getElementById("k").innerHTML="Please fill out this field";
      return true;
   }
   else if(!q.test(x))
   {
      document.getElementById("k").innerHTML="Please enter valid name";
      return true;
   }
   else
   {
      document.getElementById("k").innerHTML="";
      return false;
   }
}
function fun4()
{
   var q=/^\d{10}$/;
   var x=document.getElementById("m").value;
   if(x=="")
   {
      document.getElementById("n").innerHTML="Please fill out this field";
      return true;
   }
   else if(!q.test(x))
   {
      document.getElementById("n").innerHTML="Please enter valid phone number";
      return true;
   }
   else
   {
      document.getElementById("n").innerHTML="";
      return false;
   }
}
function fun5()
{
   var q= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   var x=document.getElementById("u").value;
   if(x=="")
   {
      document.getElementById("y").innerHTML="Please fill out this field";
      return true;
   }
   else if(!q.test(x))
   {
      document.getElementById("y").innerHTML="Please enter valid mail id";
      return true;
   }
   else
   {
      document.getElementById("y").innerHTML="";
      return false;
   }
}
function fun6()
{
   var x=document.getElementById("g").value;
   if(x=="")
   {
      document.getElementById("d").innerHTML="Please fill out this field";
      return true;
   }
   else{
      document.getElementById("d").innerHTML="";
      return false;
   }
}
function fun7()
{
   var x=document.getElementById("f").value;
   var z=document.getElementById("g").value;
   if(x=="")
   {
      document.getElementById("s").innerHTML="Please fill out this field";
      return true;
   }
   else if(x!=z)
   {
      document.getElementById("s").innerHTML="Please retype password";
      return true;

   }
   else{
      document.getElementById("s").innerHTML="";
      return false;
   }
}
function pass()
{
   var e=document.getElementById("u").value;
   var p=document.getElementById("g").value;
   localStorage.setItem("email",e);
   localStorage.setItem("pwd",p);
   if(fun1())
   {
      window.location.href="#b";
   }
   else if (fun2())
   {
      window.location.href="#p";
   }
   else if(fun3())
   {
      window.location.href="#l";
   }
   else if(fun4())
   {
      window.location.href="#m";
   }
   else if(fun5())
   {
      window.location.href="#u";
   }
   else if(fun6())
   {
      window.location.href="#g";
   }
   else if(fun7())
   {
      window.location.href="#f";
   }
   else
   {
      window.open("log.html")
   }
}


