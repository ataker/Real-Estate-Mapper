var fileref=document.createElement('script')
	fileref.setAttribute("type","text/javascript")
	fileref.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
	fileref.onload = scrapePage;
	document.getElementsByTagName("head")[0].appendChild(fileref)



function scrapePage(){

	var url = window.location.href
	url = url.slice(0,url.lastIndexOf("/")+1);
	var data = [];
	var tbody = $("tbody")[6];
	$(tbody).children("tr")[0].remove();

	$(tbody).find("tr").each(function(tr){
		var count = 0, entry={};
		$(this).find("td").each(function(td){
			td = this;
			if(count == 9){
				entry.address = stripTabs($(td).children("a").text());
				entry.link = url + stripTabs($(td).children("a").attr("href"));
			}
			if(count == 11){
				entry.description = stripTabs($(td).children("a").text());
			}
			if(count == 13){
				entry.price = stripTabs($(td).text());
			}
			count++;
		});
		data.push(entry)

	});
	console.log(data);
}


function stripTabs(str){
	return str.replace( new RegExp("\t", 'g'),"").replace( new RegExp("\n", 'g')," ").replace( new RegExp("&nbsp", 'g')," ");
}