
/* Adding Viewport*/

$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0"');

/* Loading jQuery*/
$('body').prepend('<script src"js/bootstrap.min.js"></script>');

/* Load Google Fonts*/
$('body').prepend('<link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" >');


/* Container*/
$('#main').addClass('container');

/* Role is important*/
$('#header span:first').replaceWith( '<h2 id="position">'+bio.role+'</h2>' );

/* Wrapping in rows */
$('.biopic, .welcome-message, #skillsH3, #skills').wrapAll('<div class="row"></div>');
$('#name, #position').wrapAll('<div class="row nameRole"><div class="col-xs-12 col-sm-6 col-sm-offset-6 text-right"></div></div>');

/* Adding row class*/
var AddRowList = ['#projects',
				 '.project-entry',
				 '.work-entry',
				 '#topContacts',
				 '#mapDiv', 
				 'map',
				 '#letsConnect',
				 '#education', 
				 '.education-entry', 
				 '.education-entry'];

for (element in AddRowList) {

	$(AddRowList[element]).addClass('row');
}

/* Columns */
$('#topContacts li').addClass('col-xs-12 col-sm-6 col-md-4');
$('.welcome-message, #skillsH3, #skills').wrapAll('<div class="col-xs-12 col-sm-6"></div>')
$('.biopic, .project-entry img').wrap('<div class="col-xs-12 col-sm-6"></div>');


/* Making all images responsive */
$('img').addClass('img-responsive');

/* Adding id's ir order to get rid of some borders*/


/* color classes dosn't make sense anymore, let's change it*/
$('span.white-text').addClass('gray-text').removeClass('white-text');
$('span.orange-text').addClass('blue-text').removeClass('orange-text');

/* I don´t need the <hr> */
$('hr').remove();

 /* Adding links to contacts */
$('#topContacts li:nth-child(2) span:nth-child(2)').wrap('<a href="mailto:'+bio.contacts.email+'"></a>');
$('#topContacts li:nth-child(3) span:nth-child(2)').wrap('<a href="https://twitter.com/franjlg"></a>');
$('#topContacts li:nth-child(4) span:nth-child(2)').wrap('<a href="https://github.com/Frandman"></a>');
$('#topContacts li:nth-child(5) span:nth-child(2)').wrap('<a href="http://franjlopez.es/"></a>');
$('#topContacts li:nth-child(6) span:nth-child(2)').wrap('<a href="https://www.google.es/maps/place/Madrid/"></a>');


$( "#workExperience h2, #projects h2, #education h2").append('<button type="button" class="btn btn-default">Show</button>')

$( "#workExperience button" ).click(function() {
	$(".work-entry").toggle("fast");
	if ($(this).text() == "Show"){
		$(this).text("Hide");
	}
		else{
			$(this).text("Show");
		}	
});

$( "#projects button" ).click(function() {
	$(".project-entry").toggle("fast");
	if ($(this).text() == "Show") {
		$(this).text("Hide");
	}
		else{
			$(this).text("Show");
		}
});

$( "#education button " ).click(function() {
	$(".education-entry, #education h3").toggle("fast");
	if ($(this).text() == "Show") {
		$(this).text("Hide");
	}
		else{
			$(this).text("Show");
		}
});