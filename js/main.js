function JSBasic() {
	
	
	this.interpret = function(line) {
		console.log("interpret line: ", line);
	};
}



var jsBasic = new JSBasic();


$(function() {
	
	$("#result").click(function(ev) {
		$("#fakeInput").focus();
		$("#result").addClass("focus");
	});
	
	$("#fakeInput").blur(function(ev) {
		$("#result").removeClass("focus");
	});
	
	
	//input into console
	$("#fakeInput").on("keydown", function(ev) {
		$("#result")[0].scrollTop = $("#result")[0].scrollHeight;
	});
	
	$("#fakeInput").on("keypress keyup", function(ev) {
		
		var val = $("#result .line.input .value").html();
		if(ev.charCode == 13) {
			if(val.length > 0) {
				jsBasic.interpret(val);
			} else {
				val = "&nbsp;";
			}
			
			$("#result .line.input").before('<div class="line">'+val+'</div>');
			$("#result .line.input .value").html("");
		} else {
			var ch = $(this).val();
			$(this).val("");
			
			val += ch;
			$("#result .line.input .value").html(val);
		}
		
		$("#result")[0].scrollTop = $("#result")[0].scrollHeight;
	});
	
});