const $ = selector => document.querySelector(selector)
morseCode = {
	"A":".-",
	"B":"-...",
	"C":"-.-.",
	"D"	: "-.." ,
	"E"	: "."	,
	"F"	: "..-." ,
	"G"	: "--."	,
	"H"	: "...."	,
	"I"	: ".."	,
	"J"	: ".---" ,	
	"K"	: "-.-"	,
	"L"	: ".-.." ,
	"M"	: "--"	,
	"N"	: "-."	,
	"O"	: "---" ,	
	"P"	: ".--." ,	
	"Q"	: "--.-"	,
	"R"	: ".-." ,
	"S"	: "..." ,	
	"T"	: "-"	,
	"U"	: "..-" ,	
	"V"	: "...-" ,	
	"W"	: ".--"	,
	"X"	: "-..-" ,
	"Y"	: "-.-- ",	
	"Z"	: "--.." ,
	" " : "/",
	":" : "---..."
};
normalCode = {
	".-"  :"A",
	"-...":"B",
	"-.-.":"C",
	"-.." :"D"	 ,
	"."   :"E",
	"..-.":"F"	  ,
	"--." :"G"	 	,
	"....":"H"	 	,
	".."  :"I"	 	,
	".---":"J"	 ,	
	"-.-" :"K"		,
	".-..":"L"	  ,
	"--"  :"M"	 	,
	"-."  :"N"	,
	"---" :"O"	 ,	
	".--.":"P"	  ,	
	"--.-":"Q"	 	,
	".-." :"R"	  ,
	"..." :"S"  ,	
	"-"   :"T"	,
	"..-" :"U" ,	
	"...-":"V"	  ,	
	".--" :"W"	 	,
	"-..-":"X"	  ,
	"-.-- ":"Y"	 ,	
	"--..":"Z" ,
	"/"   :" ", 
	" ": "#",
	"---..." : ":"
};
var escucha = $("#escucha");
var normal = $("#normal"); 
var morse = $("#morse") ;
var all  = $("#si");
const p = $("#punto") ;
const l = $("#linea");

function codeMorse(){

		var texto = normal.value ;
		
		texto = texto.replace(/(\r\n|\n|\r)/gm, "");
		document.traductor.mor.value = ""; 
		for (var i = 0; i <= texto.length; i++) {
			document.traductor.mor.value += morseCode[texto[i].toUpperCase()];
			document.traductor.mor.value += " ";
		}
		
}
function codeNormal(){
	var texto = morse.value ;
	
	var palabra = ""; 

		
	
	document.traductor.nor.value = ""; 
	for (var i = 0; i < texto.length; i++) {
		if(texto[i] == " "){
			
				

			
				document.traductor.nor.value +=(normalCode[palabra] == null ? "":normalCode[palabra]);
			
			
			palabra = "" ;
			continue ;
		};
		palabra += texto[i] ;
	}

}

function pip(){

}

function Escucha(texto){
	for (var i = 0; i < texto.length; i++) {
		if (texto[i] == "."){
			pip();
		}
	}
}
escucha.addEventListener("click",()=>{
    var escMorse = morse.value ; 
    for (var i = 0; i < escMorse.length; i++) {
    	
    }
});
normal.addEventListener("keydown",()=>{
	codeMorse();

});

morse.addEventListener("keydown",()=>{
	
	codeNormal();
});