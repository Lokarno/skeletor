$( document ).ready(function()
{
	$("#navbarContainer").load("html/navbar.html",postNavBarProcessing); //Navbar element
	
});

function postNavBarProcessing()
{
	setActiveNavbarElement(getHtmlFileName());
	
}