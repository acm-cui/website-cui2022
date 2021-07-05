var timestr = function(d) {
	var hoursNum = d.getHours();
	var minutesNum = d.getMinutes();
	if (hoursNum == 0) { hours = '00'; } else { hours = hoursNum.toString() }
	if (minutesNum == 0) { minutes = '00'; } else { minutes =minutesNum.toString() }
	return hours + ':' + minutes;
}
var datestr = function(d) {
	var day = d.getDate();
	var suffix = nth(day);
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getMonth()];
	var year = d.getFullYear();
	return day + suffix + ' ' + month;
}
var nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
	case 1:	 return "st";
	case 2:	 return "nd";
	case 3:	 return "rd";
	default: return "th";
  }
}
$(function() {
	$.getJSON('../programme/data.json?s=' + (new Date().getTime()), function(data) {
		var $prgTabs = $('#programmeTabs');
		var $prg = $('#programme');
		var num_sessions = 0;
		var sessions_by_date = {};

		$.each(data, function(i, session) {
			// based on https://stackoverflow.com/posts/15397495/revisions
			var start_date = new Date(Date.parse(session.start_time));
			start_date_index = datestr(start_date);
			if (!(start_date_index in sessions_by_date)) {
				sessions_by_date[start_date_index] = [];
			}
			sessions_by_date[start_date_index].push(session);
			num_sessions++;
		});
		$('#numdays').html(Object.keys(sessions_by_date).length);
		$('.timezone').text('converted to your operating system\'s timezone (' + Intl.DateTimeFormat().resolvedOptions().timeZone + ')');

		var index = 0;
		var expand_day = 0;
		$.each(sessions_by_date, function(date_string, session) {
			var now = new Date();
			var now_string = datestr(now);
			if (now_string == date_string) {
				expand_day = index;
			}
			index++;
		});

		var global_session_id = 0;
		index = 0;
		
		html = '<div class="btn-group btn-group-lg mb-3 d-md-inline-flex" role="group" aria-label="Days of the conference">';
		$.each(sessions_by_date, function(date_string, sessions) {
			html += '<button type="button" id="programmeDay' + index +'" data-toggle="collapse" data-target="#programme' + index +'" aria-expanded="false" aria-controls="programme' + index +'" class="btn btn-light border">' + date_string + '</button>';
			index++;
		});
		html += '</div>';
		$prgTabs.append(html);

		html = '<div id="programmeSchedule">';
		index = 0;
		$.each(sessions_by_date, function(date_string, sessions) {
			html += '<div class="card collapse" aria-labelledby="programmeDay' + index +'" id="programme' + index +'" data-parent="#programmeSchedule">';
			html += '<ul class="list-unstyled prg-day mb-0 border-0 rounded-0">';

			$.each(sessions, function(session_id, session) {
				global_session_id++;
				if (session['type'] == 'Break') {
					if (session_id > 0 && session_id < sessions.length-1) {
						html += '<li class="media p-3 bg-lightest border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
						if (session['description'] != '') {
							html += session['description'];
						}
						html += '</div></li>';
					} else if (session_id == sessions.length-1) {
						html += '<li class="media p-3 bg-lightest border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
						html += 'Please see the next day\'s schedule as events may start soon after midnight';
						html += '</div></li>';
					}
				} else if (session['type'] == 'EOD') {
					if (session_id > 0 && session_id < sessions.length-1) {
						html += '<li class="media p-3 bg-lightest border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
						if (session['description'] != '') {
							html += session['description'];
						}
						html += '</div></li>';
					}
				} else {
					html += '<li class="media prg-row p-3 rounded bg-light border-bottom rounded-0 flex-md-row flex-column" id="session-' + session['id'] + '"><div class="mr-md-3 mb-md-0 mb-3 d-flex flex-md-column flex-row"><div class="text-capitalize mb-md-2 mr-3"><span class="badge badge-primary">' + session['type'] + '</span></div>';
					html += '<div class="mb-md-1 mr-md-0 mr-3 small"><span alt="A clock" class="d-inline-block prg-icon-timing prg-icon-start mr-2"></span><span class="d-inline-block prg-text-timing">Starts <span class="d-md-inline d-none">at</span> <span class="prg-timing"><span></span>' + timestr(new Date(Date.parse(session['start_time']))) +'</span></div>';
					html += '<div class="mt-md-1 small"><span alt="A stopwatch" class="d-inline-block prg-icon-timing prg-icon-end mr-2"></span><span class="d-inline-block prg-text-timing">Ends <span class="d-md-inline d-none">at</span> <span class="prg-timing"><span></span>' + timestr(new Date(Date.parse(session['end_time']))) +'</span>';
					html += '</div></div>';
					html += '<div class="media-body w-100">';
					html += '<div class="float-right d-flex flex-row mt-md-0 mt-1 ml-1">';
					if (session['info'] && session['subtitle'] == undefined) {
						html += '<a href="https://' + session['info'] + '" title="Read more about this session" class="d-block prg-icon-info-sm mr-2"><span class="sr-only">Read more about this session</span></a>';
					}
					html += '<a href="https://' + window.location.hostname + window.location.pathname + 'ics/' + session['id'] + '.ics" title="Download an iCal (ICS) file for this session in the programme" class="d-block prg-icon-cal mr-2"><span class="sr-only">iCalendar (ICS) file for this session</span></a>';
					html += '<a href="https://' + window.location.hostname + window.location.pathname + 'link/' + session['id'] + '" title="Get the permanent link to this session in the programme"" class="d-block prg-icon-link"><span class="sr-only">Permalink to this session</span></a>';
					html += '</div>';
					html += '<h4 class="text-primary mt-0 mb-1">' + session['title'] + '</h4>';
					
					if (session['presenters'] != '') {
						html += session['presenters'];
					}

					if (session['chairs'] != '') {
						html += '<em class="small">Chaired by ' + session['chairs'] + '</em>';
					}

					if (session['subtitle'] != undefined) {
						html += '<h5 class="text-center mt-3">' + session['subtitle'];
						if (session['info'] != '') {
							html += '<a href="' + session['info'] + '" title="Read more about this session" class="d-inline-block prg-icon-info-sm ml-2 align-down-small-icon"><span class="sr-only">Read more about this session</span></a>';
						}
						html += '</h5>';
					}
					if (session['presentations'].length > 0) {
						html += '<div class="mt-3">';
						html += '<button type="button" class="btn btn-light btn-lg btn-block d-md-none d-block text-left p-0 programmeSessionDetail programmeSessionDetail' + session['id'] + ' collapse show" data-toggle="collapse" data-target=".programmeSessionDetail' + session['id'] + '" aria-expanded="false" aria-controls="programmeSessionDetail' + session['id'] + '">+ Expand session details</button>';
						html += '<ol class="list-group	d-md-block collapse programmeSessionDetail' + session['id'] + '">';
						$.each(session['presentations'], function(presentation_id) {
							presentation = session['presentations'][presentation_id]
							html += '<li class="list-group-item pb-3">';
							if (presentation['aaai']) {
								html += '<div class="float-right">';
								html += '<a href="' + presentation['aaai'] + '" title="View the paper on the AAAI website" class="d-block prg-inner-icon prg-icon-aaai"><span class="sr-only">View paper on the AAAI website</span></a>';
								html += '</div>';
							}
							if (presentation['acmdl']) {
								html += '<div class="float-right">';
								html += '<a href="' + presentation['acmdl'] + '" title="View the paper in the ACM Digital Library" class="d-block prg-inner-icon prg-icon-acmdl"><span class="sr-only">View paper in the ACM Digital Library</span></a>';
								html += '</div>';
							}
							if (presentation['sagepub']) {
								html += '<div class="float-right">';
								html += '<a href="' + presentation['sagepub'] + '" title="View the paper on Sage Publishing\'s website" class="d-block prg-inner-icon prg-icon-sagepub"><span class="sr-only">View paper on the Sage Publishing\'s website</span></a>';
								html += '</div>';
							}
							if (presentation['springerlink']) {
								html += '<div class="float-right">';
								html += '<a href="' + presentation['springerlink'] + '" title="View the paper on Springer\'s website" class="d-block prg-inner-icon prg-icon-springerlink"><span class="sr-only">View paper on Springer\'s website</span></a>';
								html += '</div>';
							}
							if (presentation['info']) {
								html += '<div class="float-right">';
								html += '<a href="' + presentation['info'] + '" title="Read more about this presentation" class="d-block prg-inner-icon prg-icon-info"><span class="sr-only">Read more about this presentation</span></a>';
								html += '</div>';
							}
							
							html += '<strong>' + presentation['title'] + (presentation['type'] != 'Panel' && presentation['type'] != 'Panel Member' ? ' <span class="badge badge-secondary">' + presentation['type'] + '</span>' : '') + '</strong><br>';
							html += presentation['authors'];
							
							if (presentation['preview'] != undefined) {
								html += '<br><a href="' + presentation['preview']['link'] + '" title="' + presentation['preview']['text'] + '" target="_blank">' +	presentation['preview']['text'] + ' &rarr;</a>';
							}

							html += '</li>';
						});
						html += '</ol>';;
					}
				
					html +'</div></li>';

					if (session_id == sessions.length-1 && global_session_id < num_sessions) {
						html += '<li class="media p-3 bg-lightest border-bottom rounded-0" id="session-' + index + '"><div class="media-body text-center text-muted">';
						html += 'Please see the next day\'s schedule as events may start soon after midnight';
						html += '</div></li>';
					}
				}

			});

			html += '</ul></div>';

			index++;
		});
		html += '</div>';
		$prg.append(html);

		$('#programmeSchedule .card').on('show.bs.collapse', function(e) {
			var $schedule = $(e.target);

			var $button = $('#' + $schedule.attr('aria-labelledby'));
			$button.removeClass('btn-light');
			$button.addClass('btn-primary');
		});

		$('#programmeSchedule .card').on('hide.bs.collapse', function(e) {
			var $schedule = $(e.target);

			var $button = $('#' + $schedule.attr('aria-labelledby'));
			$button.addClass('btn-light');
			$button.removeClass('btn-primary');
		});

		if (location.hash && location.hash.length) {
			var hash = decodeURIComponent(location.hash.substr(1));
			if (hash.startsWith('session-')) {
				var $session = $('#programme  #' + hash);
				if (!$session.is(':visible')) {
					var $day = $session.parent().parent();
					$day.collapse('show');
					var fn = function () {
						$('html,body').animate({
							scrollTop: $session.offset().top 
						}, 500);
						$day.off('shown.bs.collapse', fn);
					};
					$day.on('shown.bs.collapse', fn);
				}
			}
		} else {
			$('#programme' + expand_day).collapse('show');
		}
	}); 
});