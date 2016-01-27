jQuery(document).ready(function($){
	// targets
	var theMonth = $('.month');
	var weeks = $('.week');
	var weekDays = $('.week-days');
	var classCols = '<div class="col-xs-1">';
	// days
	var mon = 'Lun';
	var tue = 'Mar';
	var wed = 'Mie';
	var thur = 'Jue';
	var fri = 'Vie';
	var sat = 'Sab';
	var sund = 'Dom';
	// get the date
	var d = new Date();
	var today = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
	var monthNumber = d.getMonth() + 1;
	var yearNumber = d.getFullYear();
	// get month name
    function GetMonthName(monthNumber) {
        var months = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ];
        return months[monthNumber - 1];
    }
    setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund);
	// set the month
    function setMonth(monthNumber, mon, tue, wed, thur, fri, sat, sund) {
        theMonth.text(GetMonthName(monthNumber) + ' ' + yearNumber);
        theMonth.attr('data-month', monthNumber);
        printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund);
    }
    // Get all dates for current month
    function printDateNumber(monthNumber, mon, tue, wed, thur, fri, sat, sund) {

      	weeks.each(function(index) {
        	$(this).empty();
      	});

      	$($('.week-days > div')).each(function(index) {
        	$(this).empty();
      	});

      	function getDaysInMonth(month, year) {
        // Since no month has fewer than 28 days
        	var date = new Date(year, month, 1);
        	var days = [];
        	while (date.getMonth() === month) {
          		days.push(new Date(date));
          		date.setDate(date.getDate() + 1);
        	}
        	return days;
      	}

      	i = 0;

      	setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

      	function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
        	var monthDay = getDaysInMonth(monthNumber - 1, yearNumber)[0].toString().substring(0, 3);
        	if (monthDay === 'Mon') {
            	weekDays.empty();
          		weekDays.append(classCols + mon + '</div>' + classCols + tue + '</div>' + classCols + wed + '</div>' + classCols + thur + '</div>' + classCols + fri + '</div>' + classCols + sat + '</div>' + classCols + sund + '</div>');
        	} 
        	else if (monthDay === 'Tue') {
            	weekDays.empty();
          		weekDays.append(classCols + tue + '</div>' + classCols + wed + '</div>' + classCols + thur + '</div>' + classCols + fri + '</div>' + classCols + sat + '</div>' + classCols + sund + '</div>' + classCols + mon + '</div>');
        	} else if (monthDay === 'Wed') {
            	weekDays.empty();
          		weekDays.append(classCols + wed + '</div>' + classCols + thur + '</div>' + classCols + fri + '</div>' + classCols + sat + '</div>' + classCols + sund + '</div>' + classCols + mon + '</div>' + classCols + tue + '</div>');
        	} else if (monthDay === 'Thu') {
            	weekDays.empty();
          		weekDays.append(classCols + thur + '</div>' + classCols + fri + '</div>' + classCols + sat + '</div>' + classCols + sund + '</div>' + classCols + mon + '</div>' + classCols + tue + '</div>' + classCols + wed + '</div>');
        	} else if (monthDay === 'Fri') {
            	weekDays.empty();
          		weekDays.append(classCols + fri + '</div>' + classCols + sat + '</div>' + classCols + sund + '</div>' + classCols + mon + '</div>' + classCols + tue + '</div>' + classCols + wed + '</div>' + classCols + thur + '</div>');
        	} else if (monthDay === 'Sat') {
            	weekDays.empty();
          		weekDays.append(classCols + sat + '</div>' + classCols + sund + '</div>' + classCols + mon + '</div>' + classCols + tue + '</div>' + classCols + wed + '</div>' + classCols + thur + '</div>' + classCols + fri + '</div>');
        	} else if (monthDay === 'Sun') {
            	weekDays.empty();
          		weekDays.append(classCols + sund + '</div>' + classCols + mon + '</div>' + classCols + tue + '</div>' + classCols + wed + '</div>' + classCols + thur + '</div>' + classCols + fri + '</div>' + classCols + sat + '</div>');
        	}
      	};
      	$(getDaysInMonth(monthNumber - 1, yearNumber)).each(function(index) {
        	var index = index + 1;
        	if (index < 8) {
          		$('.event-calendar .1').append('<div class="col-xs-1" data-month="' + monthNumber + '" data-day="' + index + '" data-year="' + yearNumber + '">' + index + '</div>');
        	} else if (index < 15) {
          		$('.event-calendar .2').append('<div class="col-xs-1" data-month="' + monthNumber + '" data-day="' + index + '" data-year="' + yearNumber + '">' + index + '</div>');
        	} else if (index < 22) {
          		$('.event-calendar .3').append('<div class="col-xs-1" data-month="' + monthNumber + '" data-day="' + index + '" data-year="' + yearNumber + '">' + index + '</div>');
        	} else if (index < 29) {
          		$('.event-calendar .4').append('<div class="col-xs-1" data-month="' + monthNumber + '" data-day="' + index + '" data-year="' + yearNumber + '">' + index + '</div>');
        	} else if (index < 32) {
          		$('.event-calendar .5').append('<div class="col-xs-1" data-month="' + monthNumber + '" data-day="' + index + '" data-year="' + yearNumber + '">' + index + '</div>');
        	}
        	i++;
      	});
		var date = new Date();
		var month = date.getMonth() + 1;
		var thisyear = new Date().getFullYear();
      	setCurrentDay(month, thisyear);
      	setEvent();
      	// displayEvent();
    }
    // add class for today
    function setCurrentDay(month, year) {
      var viewMonth = theMonth.attr('data-month');
      var eventYear = weekDays.attr('data-year');
      if (parseInt(year) === yearNumber) {
        if (parseInt(month) === parseInt(viewMonth)) {
          $('.event-calendar div[data-day="' + d.getDate() + '"]').addClass('current-day');
        }
      }
    };
    /**
     * Add '.event' class to all days that has an event
     */
    function setEvent() {
      $('.day-event').each(function(i) {
        var eventMonth = $(this).attr('date-month');
        if (eventMonth < 10) {
          eventMonth = eventMonth[1];
        }
        var eventDay = $(this).attr('date-day');
        if (eventDay < 10) {
          eventDay = eventDay[1];
        }
        var eventYear = $(this).attr('date-year');
        var eventClass = $(this).attr('event-class');
        if (eventClass === undefined) eventClass = 'event';
        else eventClass = 'event ' + eventClass;

        if (parseInt(eventYear) === yearNumber) {
          $('.event-calendar div[date-month="' + eventMonth + '"][date-day="' + eventDay + '"]').addClass(eventClass);
        }
      });
    };
    // add class event on each day with event
    function setEvent() {
        $('.day-event').each(function(i) {
            var eventMonth = $(this).attr('data-month');
           	if (eventMonth < 10) {
            	eventMonth = eventMonth[1];
            }
            var eventDay = $(this).attr('data-day');
            if (eventDay < 10) {
            	eventDay = eventDay[1];
            }
            var eventYear = $(this).attr('data-year');
            var eventClass = $(this).attr('event-class');
            if (eventClass === undefined) eventClass = 'event';
            else eventClass = 'event ' + eventClass;
            if (parseInt(eventYear) === yearNumber) {
              	$('.event-calendar div[data-month="' + eventMonth + '"][data-day="' + eventDay + '"]').addClass(eventClass);
            }
        });
    };
    // button actions
    var btnNext = $('.btn-next');
    var btnPrev = $('.btn-prev');
    btnNext.on('click', function(e) {
      	var monthNumber = theMonth.attr('data-month');
      	if (monthNumber > 11) {
            theMonth.attr('data-month', '0');
            var monthNumber = theMonth.attr('data-month');
            yearNumber = yearNumber + 1;
            setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
      	} else {
            setMonth(parseInt(monthNumber) + 1, mon, tue, wed, thur, fri, sat, sund);
        }
    });

    btnPrev.on('click', function(e) {
        var monthNumber = theMonth.attr('data-month');
        if (monthNumber < 2) {
        	theMonth.empty();
            theMonth.attr('data-month', '13');
            var monthNumber = theMonth.attr('data-month');
            yearNumber = yearNumber - 1;
            setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
        } else {
        	theMonth.empty();
           	setMonth(parseInt(monthNumber) - 1, mon, tue, wed, thur, fri, sat, sund);
        }
   	});
});