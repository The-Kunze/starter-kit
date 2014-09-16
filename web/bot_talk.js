var pb = new Pandorabot("max.pandorabots.com", "barryadmin/barry");
		  
function doTalk() {
    var input = document.getElementById("yousay").value
    pb.talk(input, function(response) {
	document.getElementById("response").innerHTML = response["that"];
    });
}
