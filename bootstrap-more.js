(
	function($)
	{
		// Support detection: SVG in <img> elements
		if (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'))
		{
			$('body').addClass('svg-in-img');
		}

		function Hide_tooltip()
		{
			$(this).tooltip('hide');
		}

		$(document).ready
		(
			function()
			{
				if ($.fn.tooltip)
				{
					// Initialize tooltips on elements below
					$('.tooltip-hover-top')		.tooltip({'trigger': 'hover', 'placement': 'top'})		.click(Hide_tooltip);
					$('.tooltip-hover-right')	.tooltip({'trigger': 'hover', 'placement': 'right'})	.click(Hide_tooltip);
					$('.tooltip-hover-bottom')	.tooltip({'trigger': 'hover', 'placement': 'bottom'})	.click(Hide_tooltip);
					$('.tooltip-hover-left')	.tooltip({'trigger': 'hover', 'placement': 'left'})		.click(Hide_tooltip);
					$('.tooltip-click-top')		.tooltip({'trigger': 'click', 'placement': 'top'});
					$('.tooltip-click-right')	.tooltip({'trigger': 'click', 'placement': 'right'});
					$('.tooltip-click-bottom')	.tooltip({'trigger': 'click', 'placement': 'bottom'});
					$('.tooltip-click-left')	.tooltip({'trigger': 'click', 'placement': 'left'});
					$('.tooltip-focus-top')		.tooltip({'trigger': 'focus', 'placement': 'top'});
					$('.tooltip-focus-right')	.tooltip({'trigger': 'focus', 'placement': 'right'});
					$('.tooltip-focus-bottom')	.tooltip({'trigger': 'focus', 'placement': 'bottom'});
					$('.tooltip-focus-left')	.tooltip({'trigger': 'focus', 'placement': 'left'});
					$('.tooltip-manual-top')	.tooltip({'trigger': 'manual', 'placement': 'top'});
					$('.tooltip-manual-right')	.tooltip({'trigger': 'manual', 'placement': 'right'});
					$('.tooltip-manual-bottom')	.tooltip({'trigger': 'manual', 'placement': 'bottom'});
					$('.tooltip-manual-left')	.tooltip({'trigger': 'manual', 'placement': 'left'});
				}
			}
		);
	}
)(jQuery);

