var annaHidCtrls = $.makeArray();
var annaCreatedCtrls= $.makeArray();

function applyAnna() {
	//Apply anna
	
	annaHidCtrls = $.makeArray();
	$(annaCreatedCtrls).each(function(index){ this.remove();});
	annaCreatedCtrls= $.makeArray();

	var allf = $('input[type=text]');
	allf.each(function (i) { annaProcessTextFields(this); });
	
	var allCom = $('select');
	allCom.each(function (i) { annaProcessDropdowns(this); });
}

function annaProcessTextFields(ctrl) {
	ctrl = $(ctrl);
	var $plainText = $('<span/>')
		.attr({ class:'anna-input-text'}).text(ctrl.val());
	ctrl.parent().append($plainText);
	ctrl.hide();
	annaHidCtrls.push(ctrl);
	annaCreatedCtrls.push($plainText);
}

function annaProcessDropdowns(ctrl) {
	ctrl = $(ctrl);
	selected = ctrl.find('option:selected');
	var otherOptions = "<b>Other options were:</b> <br/><i>";
	ctrl.find(':not(option:selected)').each(function(index) {otherOptions+= $(this).text() + "<br/>"});
	otherOptions+="</i>";
	var $plainText = $('<span/>')
		.attr({ 'class':'anna-input-combo', 'title': otherOptions})
		.text(selected.text());
	ctrl.parent().append($plainText);
	ctrl.hide();
	annaHidCtrls.push(ctrl);
	annaCreatedCtrls.push($plainText);
	$plainText.tooltip( { position: "top"}).dynamic();;				
}

function removeAnna() {
	$(annaHidCtrls).each(function (i) { this.show(); });
	$(annaCreatedCtrls).each(function (i) { this.hide(); });
}