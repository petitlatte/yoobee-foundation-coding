		var init = function(){
			var domItems = [];
			var btn = document.getElementById('icoOpen');
			btn.onclick = openNav;

			// Dom Queries
			var add = document.getElementById('addIt');
			var removeBtn = document.getElementById('removeIt');
			var submit = document.getElementById('submit');
			var content = document.getElementById('contentPanel');

			domItems.push(add, removeBtn, submit, content);

			// Click events
			add.addEventListener('click', function(){
				addDivs(domItems)
			}, false);

			removeBtn.addEventListener('click', function(){
				removeDivs(domItems)
			}, false);

			submit.addEventListener('click', function(){
				submissionClose(domItems)
			}, false);



			return domItems;
		}();


		function openNav() {
		    document.getElementById("sideNavigation").style.width = "50em";
		}
		 
		function closeNav() {
		    document.getElementById("sideNavigation").style.width = "0";
		}

		function addDivs(items){
			//The targetDiv variable === contentPanel
			var targetDiv = '#' + items[3].id;
			var $elemA = '<h2 class="hi">Hello</h2>'; 
		      // $('#details').remove(); // Delete existing details
		      // $('#contentPanel').fadeOut(500, function(){
		      // 		$(this).remove();
		      // 		$( "" ).append( document.createTextNode( "Hello" ) );
		      // }); // Add new one below
		      $($elemA).appendTo(targetDiv).hide().fadeIn(650);
		}

		function removeDivs(items){
			//The targetDiv variable === contentPanel
			var targetDiv = '#' + items[3].id;
			$('h2').fadeOut(600, function(){
				//this represents the h2 selector
				$(this).remove();
			});
		}

		function submissionClose(items){
			console.log('a');
			var targetDiv = '#' + items[3].id;
			var $spinner = '<img src="loading.gif" class="spinner center-block"></img>'; 
			// Psuedocode for this process:
			// 1 Click event on submission getElementById
			// 2 Gif spinner appears in the DOM to the user
			// 3 Retract gif spinner
			// 4 Close the side panel !BOOM - Lets Code --->
			$($spinner).appendTo(targetDiv).hide().fadeIn(650);

			setTimeout(function(){
				console.log('zzz');
				$('.spinner').fadeOut(400, function(){
					closeNav();
				});
			}, 4000);
		} //submissionClose ends