

var tot=0;
var flag=0;

function add(val){
	flag=flag+1;
	tot = parseInt(tot) + parseInt(val);
	document.getElementById('total_number').value=tot;

	if(tot==19){
		alert("You won the game");
		document.getElementById('total_number').value=0;
		tot=0;
	}
	console.log(tot);
	console.log(flag);
}