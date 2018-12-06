	var dobreImie = false;
	var imie = document.getElementById("imie");
	var haslo = document.getElementById("haslo");
		
	
	 function verify(){ 
	// console.log("Verify: wpisano " + imie.value + ".");
	 var Name = imie.value.trim().toLowerCase();
	// console.log("wpisano " + Name + ".");
	 if(Name == "monika" || Name == "monia") {
		dobreImie = true;  
	   } 
	 
    if(!dobreImie){
	alert("Nie jesteś Moniką!");
	return;}	
	   
	   if(haslo.value == "ainom"){
	    window.location.href = "wlasciwy.html";
	   } else{
	   alert("Nieprawidłowe hasło!");
	   }  
	 }
	 
	var przycisk = document.getElementById("przycisk");
	var przyciskWyloguj = document.getElementById("wyloguj");
	var nagl = document.getElementById("nagl");
	var mojRuch = true;
		
		przycisk.addEventListener('click',function(){	
			 if(mojRuch) { 
				setTimeout(function(){
				alert("Uśmiechnij się i znowu kliknij przycisk!"); }, 650);
			nagl.style.color = "red";
			nagl.innerHTML = "...od Damiana";
			przycisk.innerHTML = "No kliknij!";
			przyciskWyloguj.style.visibility = "hidden";
			mojRuch = !mojRuch;
			} else {
			nagl.innerHTML="Stronka dla Moniki. Pozdrowionka...";
			nagl.style.color = "yellow";
			przycisk.innerHTML = "Kliknij mnie!";
			przyciskWyloguj.style.visibility = "visible";
			mojRuch = !mojRuch;}
		},false);
		
		przyciskWyloguj.addEventListener('click',function(){
			window.location.href = "index.html";
		}, false);