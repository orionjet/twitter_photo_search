function searchweb(){
	var w = window._content;
	var d = w.document;
	if (d.location.href.search(/https:\/\/twitter.com\//i) == -1) {
		alert("not twitter");
		return;
	}
	var replacedString = d.location.href.replace("https://twitter.com/", "http://topsy.com/s/from%3A");
	replacedString = replacedString+'/image?window=a';
	const CLIPBOARD = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
	CLIPBOARD.copyString(replacedString);
	window.open(replacedString,"NewWindow",
	"location=yes,menubar=yes,status=yes,scrollbars=yes,toolbar=yes,resizable=yes,directories=yes,personalbar=yes");
};
