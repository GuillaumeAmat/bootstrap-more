/*
Bootstrap More
Copyright (C) 2012 Guillaume AMAT <guillaume.amat@informatique-libre.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

(
	function($)
	{
		$(document).ready
		(
			function()
			{
				if ($.fn.tooltip)
				{
					// Initialize tooltips on elements below
					$('.tooltip-hover-top')		.tooltip({'trigger': 'hover', 'placement': 'top'});
					$('.tooltip-hover-right')	.tooltip({'trigger': 'hover', 'placement': 'right'});
					$('.tooltip-hover-bottom')	.tooltip({'trigger': 'hover', 'placement': 'bottom'});
					$('.tooltip-hover-left')	.tooltip({'trigger': 'hover', 'placement': 'left'});
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

