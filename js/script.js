var $form = $('form#contact-form'),
			url = 'https://script.google.com/macros/s/AKfycbwczjpDbUBb9X5hdbzpbmyH7AzaZpZzK-eK9h3BFQi4iN9NcW0/exec'

		$('#submit-form').on('click', function (e) {
			e.preventDefault();
			var jqxhr = $.ajax({
				url: url,
				method: "GET",
				dataType: "json",
				data: $form.serializeObject()
			}).success(
				// do something
			);
		})