// JavaScript Document
(function ($) {
	function getID() {
		var iPadID = "iPadID is not set";
		try {
			iPadID = kioskpro_id.toString().split(" ").join("");
		} catch(e) {
			iPadID = "iPadID is not set";
		}
		return iPadID;
	}
	
	$(window).one('load',function(e) {
		alert(getID());
	})
})(jQuery);
