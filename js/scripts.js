// jquery iife
$(document).ready(function() {

	// Will later store the value that is in the first heading dropdown menu whenever it is changed
	var firstDropValue;
	
	// Checks if the first dropdown is changed
	$('#dropdownHead').change(function() {

		// Assigns the value of the dropdown to our global variable
		firstDropValue = $(this).val();
		// Calls changeDrop and passes it the firstDropValue
		changeDrop(firstDropValue);

	})

	// Used to check the value of the first dropdown and changes the content of the second dropdown
	function changeDrop(dropValue) {

		// Checks dropValue and changes the content of the second dropdown accordingly
		switch(dropValue) {

			case 'default':
				$('#dropdownSpecific').html(
					'<option value="default">Default</option>'
				);
			break;

			case 'community':
				$('#dropdownSpecific').html(
					'<option>Activities</option>' + 
					'<option>Artists</option>' + 
					'<option>Childcare</option>' + 
					'<option>Etc...</option>'
				);
			break;
			
			case 'services':
				$('#dropdownSpecific').html(
					'<option>Automotive</option>' + 
					'<option>Beauty</option>' + 
					'<option>Cell/Mobile</option>' + 
					'<option>Etc...</option>'
				);
			break;

			case 'forums':
				$('#dropdownSpecific').html(
					'<option>Android</option>' + 
					'<option>Apple</option>' + 
					'<option>Arts</option>' + 
					'<option>Etc...</option>'
				);
			break;
			
			case 'housing':
				$('#dropdownSpecific').html(
					'<option>Apts / Housing</option>' + 
					'<option>Housing Swap</option>' + 
					'<option>Housing Wanted</option>' + 
					'<option>Etc...</option>'
				);
			break;

			case 'sale':
				$('#dropdownSpecific').html(
					'<option>Antiques</option>' + 
					'<option>Appliances</option>' + 
					'<option>Arts + Crafts</option>' + 
					'<option>Etc...</option>'
				);
			break;
			
			case 'jobs':
				$('#dropdownSpecific').html(
					'<option>Accounting + Finance</option>' + 
					'<option>Admin / Office</option>' + 
					'<option>Arch / Engineering</option>' + 
					'<option>Etc...</option>'
				);
			break;

			case 'gigs':
				$('#dropdownSpecific').html(
					'<option>Computer</option>' + 
					'<option>Creative</option>' + 
					'<option>Crew</option>' + 
					'<option>Etc...</option>'
				);
			break;
			
			case 'resumes':
				$('#dropdownSpecific').html(
					'<option>Resumes</option>'
				);
			break;

		}

	}

});
