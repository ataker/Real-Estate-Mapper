var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
		document.getElementsByTagName("head")[0].appendChild(fileref)

var e = "Address \t Description \t Price \n";
var tbody = $(".tbody");
$(tbody).find("tr").each(function(tr){
	var count = 0;
	$(this).find("td").each(function(td){
		td = this;
		if(count == 9){
			e += stripTabs($(td).children("a").text());
	//		e += " \n";
	//	}
			e += " \t "
		}
		if(count == 11){
			e += stripTabs($(td).children("a").text());
			e += " \t "
		}
		if(count == 13){
			e += stripTabs($(td).text());
			e += " \n "
		}
		count++;
	});

});
	console.log(e);

	function stripTabs(str){
		return str.replace( new RegExp("\t", 'g'),"").replace( new RegExp("\n", 'g')," ").replace( new RegExp("&nbsp", 'g')," ");
	}

/*
	var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
		document.getElementsByTagName("head")[0].appendChild(fileref)
        */