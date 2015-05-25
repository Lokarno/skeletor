function getHtmlFileName()
{
	
	var url =window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	return filename;
	
}

function setActiveNavbarElement(htmlFileName)
{
	//Note: if href would contain folder names too, then you need to adjust this code
	$("#navbar li.active" ).removeClass("active");
	$("#navbar a[href*='"+ htmlFileName + "']" ).parent().addClass("active"); //setting the parent li active based on href
}

