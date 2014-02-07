$(document).ready(function(){

	$.getJSON("/js/people.json", function(data) {

		$.each( data.people, function( i ) {
			var pID = data.people[ i ].id;
			var pName = data.people[ i ].name;
			var pLocation = data.people[ i ].location;
			var pPictureURL = data.people[ i ].picture;
			var pInterests = data.people[ i ].interests;

			$("<div class='person_card' id='" + pID + "' data-ID='" + pID + "'></div>").appendTo(".results");

			$("<div class='card_header'></div>").appendTo("#" + pID);

			if (pPictureURL === "") {
				$("<img class='photo' src='/img/nopic.png'>").appendTo("#" + pID + " div.card_header");
			} else {
				$("<img class='photo' src='" + pPictureURL + "'>").appendTo("#" + pID + " div.card_header");
			}

			$("<h2 class='name'>" + pName + "</h2>").appendTo("#" + pID + " .card_header");
			$("<h3 class='location'>" + pLocation + "</h3>").appendTo("#" + pID + " .card_header");
			$("<h3 class='interests_header'>Interests</h2>").appendTo("#" + pID);
			$("<div class='interests_list'>" + pInterests + "</d>").appendTo("#" + pID);
		});
	});

});

