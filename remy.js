javascript:(
function(){
	
	var articleBody = document.getElementsByClassName("article-body")[0].innerHTML;
	
	var ERVMatch = "Easy Reader Version:"
	
	if(articleBody.includes(ERVMatch)){
		
		var part = articleBody.substring(
			articleBody.lastIndexOf(ERVMatch) + ERVMatch.length, 
			articleBody.lastIndexOf("-->")
		);
		
		articleBody = articleBody.replace(`Easy Reader Version:${part}`, `--><p style="color:red">TL;DR: ${part}</p><!--`)
		
	}
	
	articleBody = articleBody
	.replace(/<!--/g,'<span style="color:blue"> ')
	.replace(/-->/g,'</span>')
	.replaceAll('onclick="cornify_add();return false;"', 'style="color:magenta" onclick="cornify_add();return false;"');
	
	document.getElementsByClassName("article-body")[0].innerHTML=articleBody
	
	}()
)