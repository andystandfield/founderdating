
function peopleResults(sort){
	$.getJSON( "js/people.json", function( data ) {
		var people = [];
		$.each( data.people, function( i, val ) {
			people.push( val );
		});

		people.sort(function(a, b){
		    return b.id - a.id;
		});

		if (sort === "old") {
			people.sort(function(a, b){
			    return a.id - b.id;
			});
		}
		
		$("#search_results").html("");

		$.each( people, function( i ) {
			var pID = people[ i ].id;
			var pName = people[ i ].name;
			var pLocation = people[ i ].location;
			var pPictureURL = people[ i ].picture;
			var pInterests = people[ i ].interests;

			JSON.stringify(pInterests);

			var pInterests_list = pInterests.split(",");

			console.log("list: " + pInterests_list.length + " pInterests: " + pInterests.length);

			$("<div class='person_card' id='" + pID + "' data-ID='" + pID + "'></div>").appendTo("#search_results");

			$("<div class='card_header'></div>").appendTo("#" + pID);

			if (pPictureURL === "") {
				$("<img class='photo' src='/img/nopic.png'>").appendTo("#" + pID + " div.card_header");
			} else {
				$("<img class='photo' src='" + pPictureURL + "' onerror='this.src=\"/img/nopic.png\"'>").appendTo("#" + pID + " div.card_header");
			}

			$("<h2 class='name'>" + pName + "</h2>").appendTo("#" + pID + " .card_header");
			$("<h3 class='location'>" + pLocation + "</h3>").appendTo("#" + pID + " .card_header");
			$("<h3 class='interests_header'>Interests</h2>").appendTo("#" + pID);
			$("<div class='interests_list'><ul></ul></div>").appendTo("#" + pID);
			$.each( pInterests_list, function( interest ) {
				$("<li>" + pInterests_list[interest] + "</li>").appendTo("#" + pID + " .interests_list ul");
			});
		});

		console.log(people.length);
	});

}

$(document).ready(function(){

	peopleResults();

	$( "#sort_order" ).change(function() {
		peopleResults($( "#sort_order" ).val());
	});

});

 