var elt = document.createElement("script");
var eld = document.createElement("script");
elt.type="text/javascript";
elt.innerHTML = "$(document).keydown(function(e){if (e.keyCode==90 && e.ctrlKey){mark_incorrect();}if (e.keyCode==88 && e.ctrlKey){mark_correct();}if (e.keyCode==86 && e.ctrlKey){toggle_vocab('word');}if (e.keyCode==77 && e.ctrlKey){window.open(\"http://la-conjugaison.nouvelobs.com/du/verbe/\" + window.getSelection().toString() + \".php\", '_blank');}});";
document.getElementsByTagName("head")[0].appendChild(elt);
eld.type="text/javascript";
eld.innerHTML = "document.getElementById('time_out_dialog').remove();";
document.getElementsByTagName("head")[0].appendChild(eld);
