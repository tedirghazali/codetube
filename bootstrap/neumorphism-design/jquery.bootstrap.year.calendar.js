/**
 * jQuery  Bootstrap year calendar 1.0.0
 * Copyright 2018, Allset
 * Licensed under the MIT license.

 * @author Piotr Zatorski
 */
(function ($) {

    var methods = {
        init: function (options) {

        },
        destroy: function () {
            this.empty();
        },
        hide: function () {
            this.hide();
        },
        recalcHeight: function () {
            recalcHeight();
        },
        clearText: function (year, month, day) {
            this.find(
                '.jqyc-not-empty-td[data-day-of-month="' + day + '"].jqyc-not-empty-td[data-month="' + month + '"].jqyc-not-empty-td[data-year="' + year + '"]'
            ).removeClass('jqyc-appended').text(day);
            recalcHeight();
        },
        clearTextFromAll: function () {
            this.find('.jqyc-appended').each(function () {
                $(this).removeClass('jqyc-appended').text($(this).data('day-of-month'));
            });
            recalcHeight();
        },
        appendText: function (text, year, month, day, classes = "small text-danger") {
            this.find(
                '.jqyc-not-empty-td[data-day-of-month="' + day + '"].jqyc-not-empty-td[data-month="' + month + '"].jqyc-not-empty-td[data-year="' + year + '"]'
            ).addClass('jqyc-appended').append(' <span class="' + classes + '">' + text + '</span>');
            recalcHeight();
        },
        addRange: function(startYear, startMonth, startDay, endYear, endMonth, endDay){


            $('.jqyc-range-choosen-between').removeClass('jqyc-range-choosen-between');
            $calendar.data('rangepicker-end-day-of-month', false);
            $calendar.data('rangepicker-end-month', false);
            $calendar.data('rangepicker-end-year', false);
            $calendar.data('rangepicker-end-choosen', false);
            $calendar.data('rangepicker-start-day-of-month', false);
            $calendar.data('rangepicker-start-month', false);
            $calendar.data('rangepicker-start-year', false);
            $calendar.data('rangepicker-start-choosen', false);
            $calendar.data('rangepicker-start-day-of-month', startDay);
            $calendar.data('rangepicker-start-month', startMonth);
            $calendar.data('rangepicker-start-year', startYear);
            $calendar.data('rangepicker-start-choosen', true);
            $calendar.data('rangepicker-end-day-of-month', endDay);
            $calendar.data('rangepicker-end-month', endMonth);
            $calendar.data('rangepicker-end-year', endYear);
            $calendar.data('rangepicker-end-choosen', true);
            addRagepickerClassBetweenDays('jqyc-range-choosen-between');
            $calendar.trigger('jqyc.rangeChoose');
            $calendar.trigger('jqyc.rageChoose');  // This is backward compabilty !!!
        }
    };

    $.fn.calendar = function (options) {
        $calendar = this;
        if (methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {


            settings = $.extend({}, $.fn.calendar.defaults, options);


            createWholeCalendar(settings, this);
            $calendar.find('.jqyc-prev-year').on("click", showPreviousYear,);
            $calendar.find('.jqyc-next-year').on("click", showNextYear);
            $calendar.find('.jqyc-not-empty-td').on("click", triggerDayChoose);

            function showPreviousYear() {
                var currentYear = parseInt($(this).parent().parent().data('currentYear'));
                settings.startYear = settings.startYear - 1;
                createWholeCalendar(settings, $calendar);
                $calendar.find('.jqyc-prev-year').on("click", showPreviousYear);
                $calendar.find('.jqyc-next-year').on("click", showNextYear);
                $calendar.find('.jqyc-not-empty-td').on("click", triggerDayChoose);
                $calendar.trigger('jqyc.changeYearToPrevious');
                $(this).parent().parent().data('currentYear', currentYear);
            }

            function showNextYear() {
                var currentYear = parseInt($(this).parent().parent().data('currentYear'));
                settings.startYear = settings.startYear + 1;
                createWholeCalendar(settings, $calendar);
                $calendar.find('.jqyc-prev-year').on("click", showPreviousYear);
                $calendar.find('.jqyc-next-year').on("click", showNextYear);
                $calendar.find('.jqyc-not-empty-td').on("click", triggerDayChoose);
                $calendar.trigger('jqyc.changeYearToNext');
                $(this).parent().parent().data('currentYear', currentYear);
            }

            function triggerDayChoose() {
                var choosenYear = $(this).data('year');
                var choosenMonth = $(this).data('month');
                var choosenDay = $(this).data('day-of-month');

                if (settings.minYear != null && settings.minMonth != null && settings.minDay != null) {

                    var date = new Date(choosenYear, choosenMonth, choosenDay);
                    if (parseInt(choosenYear) <= parseInt(settings.minYear)) {
                        if (parseInt(choosenMonth) < parseInt(settings.minMonth) || (parseInt(choosenMonth) == parseInt(settings.minMonth) && parseInt(choosenDay) < parseInt(settings.minDay))) {
                            if (settings.minDayMessage != null) {
                                alert(settings.minDayMessage);
                            }
                            $calendar.trigger('jqyc.notMinDayChoose');
                            $calendar.trigger('jqyc.outOfRangeDayChoose');
                            return false;
                        }
                    }
                }

                if (settings.maxYear != null && settings.maxMonth != null && settings.maxDay != null) {

                    var date = new Date(choosenYear, choosenMonth, choosenDay);
                    if (parseInt(choosenYear) <= parseInt(settings.maxYear)) {
                        if (parseInt(choosenMonth) < parseInt(settings.maxMonth) || (parseInt(choosenMonth) == parseInt(settings.maxMonth) && parseInt(choosenDay) < parseInt(settings.maxDay))) {
                            if (settings.maxDayMessage != null) {
                                alert(settings.maxDayMessage);
                            }
                            $calendar.trigger('jqyc.notMaxDayChoose');
                            $calendar.trigger('jqyc.outOfRangeDayChoose');
                            return false;
                        }
                    }
                }

                if (settings.mode == 'rangepicker') {
                    if ($calendar.data('rangepicker-start-choosen') != true) {
                        $calendar.data('rangepicker-start-day-of-month', choosenDay);
                        $calendar.data('rangepicker-start-month', choosenMonth);
                        $calendar.data('rangepicker-start-year', choosenYear);
                        $calendar.data('rangepicker-start-choosen', true);
                    } else if ($calendar.data('rangepicker-end-choosen') != true) {

                        if (settings.maxDaysToChoose) {


                            var startDay = [$calendar.data('rangepicker-start-day-of-month'), $calendar.data('rangepicker-start-month'), $calendar.data('rangepicker-start-year')];
                            var endDay = [choosenDay, choosenMonth, choosenYear];
                            var startDate = new Date(startDay[2], startDay[1], startDay[0]);
                            var endDate = new Date(endDay[2], endDay[1], endDay[0]);
                            var daysBettweenDates = Math.round((startDate - endDate) / (1000 * 60 * 60 * 24));
                            if ((settings.maxDaysToChoose - 1) < Math.abs(daysBettweenDates)) {
                                if (settings.maxDaysToChooseMessage) {
                                    alert(settings.maxDaysToChooseMessage + settings.maxDaysToChoose)
                                }
                                $('.jqyc-range-choosen-between').removeClass('jqyc-range-choosen-between');
                                $calendar.data('rangepicker-end-day-of-month', false);
                                $calendar.data('rangepicker-end-month', false);
                                $calendar.data('rangepicker-end-year', false);
                                $calendar.data('rangepicker-end-choosen', false);
                                $calendar.data('rangepicker-start-day-of-month', false);
                                $calendar.data('rangepicker-start-month', false);
                                $calendar.data('rangepicker-start-year', false);
                                $calendar.data('rangepicker-start-choosen', false);
                                return false;
                            }
                        }

                        $calendar.data('rangepicker-end-day-of-month', choosenDay);
                        $calendar.data('rangepicker-end-month', choosenMonth);
                        $calendar.data('rangepicker-end-year', choosenYear);
                        $calendar.data('rangepicker-end-choosen', true);
                        addRagepickerClassBetweenDays('jqyc-range-choosen-between');
                        $calendar.trigger('jqyc.rangeChoose');
                        $calendar.trigger('jqyc.rageChoose');  // This is backward compabilty !!!
                    } else {
                        $('.jqyc-range-choosen-between').removeClass('jqyc-range-choosen-between');
                        $calendar.data('rangepicker-end-day-of-month', false);
                        $calendar.data('rangepicker-end-month', false);
                        $calendar.data('rangepicker-end-year', false);
                        $calendar.data('rangepicker-end-choosen', false);
                        $calendar.data('rangepicker-start-day-of-month', choosenDay);
                        $calendar.data('rangepicker-start-month', choosenMonth);
                        $calendar.data('rangepicker-start-year', choosenYear);
                        $calendar.data('rangepicker-start-choosen', true);
                    }
                }

                if (settings.addUniqueClassOnClick && settings.mode == 'classic') {
                    var uniqueClass = settings.addUniqueClassOnClick;
                    $('.' + uniqueClass).removeClass(uniqueClass);
                    $(this).addClass(uniqueClass);
                }

                $calendar.data('day-of-month', choosenDay);
                $calendar.data('month', choosenMonth);
                $calendar.data('year', choosenYear);
                $calendar.trigger('jqyc.dayChoose');
            }

            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + settings + ' does not exist on jQuery.tooltip');
        }


    };
    var currentDate = new Date();
    $.fn.calendar.defaults = {
        showHeaders: true,
        startYear: currentDate.getFullYear(),
        maxYear: null,
        maxDay: null,
        maxMonth: null,
        maxDayMessage: 'You can not choose day from future',
        minYear: null,
        minDay: null,
        minMonth: null,
        minDayMessage: 'You can not choose day from past',
        boostrapVersion: 4,
        startFromSunday: false,
        cols: 12,
        colsSm: 6,
        colsMd: 4,
        colsLg: 4,
        colsXl: 4,
        maxDaysToChoose: false,
        maxDaysToChooseMessage: 'Maximum days to choose is: ',
        mode: 'classic',
        addUniqueClassOnClick: false,
        l10n: {
            jan: "January",
            feb: "February",
            mar: "March",
            apr: "April",
            may: "May",
            jun: "June",
            jul: "July",
            aug: "August",
            sep: "September",
            oct: "October",
            nov: "November",
            dec: "December",
            mn: "Mo",
            tu: "Tu",
            we: 'We',
            th: 'Th',
            fr: 'Fr',
            sa: 'Sa',
            su: 'Su'
        }
    };

    function createWholeCalendar(settings, $this) {
        $this.empty();
        var bV = parseInt(settings.boostrapVersion);
        if (bV == 3) {
            colColXs2 = 'col-xs-2';
            colColXs3 = 'col-xs-3';
            colColXs4 = 'col-xs-4';
        } else {
            colColXs2 = 'col';
            colColXs3 = 'col';
            colColXs4 = 'col';
        }


        var year = settings.startYear;
        var startFromSunday = settings.startFromSunday;
        var firstDayOfCurrentYear = new Date(year, 0).getDay();
        if (startFromSunday) {
            firstDayOfCurrentYear += 1;
        }
        console.log(firstDayOfCurrentYear);
        var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        if (leapYear) {
            var daysOfFeb = 29;
        } else {
            daysOfFeb = 28;
        }

        var domSkeleton = '<div class="jqyc" ><div class="jqyc-year-chooser border-top border-bottom row align-items-center" data-current-year="' + year + '">' +
            '<div class="' + colColXs2 + ' text-left">' +
            '   <button type="button" class="np-btn btn-sm jqyc-prev-year jqyc-change-year" data-year="' + (year - 1) + '">&larr;</button>' +
            '</div>' +
            '<div class="' + colColXs2 + ' text-center text-muted"><small>' + (year - 1) + '</small></div>' +
            '<div class="jqyc-year ' + colColXs4 + '">' + year + '</div>' +
            '<div class="' + colColXs2 + ' text-center text-muted"><small>' + (year + 1) + '</small></div>' +
            '<div class="' + colColXs2 + ' text-right">' +
            '   <button type="button" class="np-btn btn-sm jqyc-next-year jqyc-change-year" data-year="' + (year) + '">&rarr;</button>' +
            '</div>' +
            '</div>' +
            '<div class="jqyc-months mt-4">' +
            '<div class="jqyc-month jqyc-jan" data-month="1" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-feb" data-month="2" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-mar" data-month="3" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-apr" data-month="4" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-may" data-month="5" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-jun" data-month="6" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-jul" data-month="7" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-aug" data-month="8" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-sep" data-month="9" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-oct" data-month="10" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-nov" data-month="11" data-year="' + year + '"><div class="np-element"></div></div>' +
            '<div class="jqyc-month jqyc-dec" data-month="12" data-year="' + year + '"><div class="np-element"></div></div>' +
            '</div></div>';
        if (startFromSunday) {
            var tableSkeleton = '<table class="table table-sm jqyc-table">' +
                '<thead>' +
                '<tr class="jqyc-tr jqyc-thead-tr">' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.su + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.mn + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.tu + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.we + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.th + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.fr + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.sa + '</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody></tbody>' +
                '</table>';
        } else {
            var tableSkeleton = '<table class="table table-sm jqyc-table">' +
                '<thead>' +
                '<tr class="jqyc-tr jqyc-thead-tr">' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.mn + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.tu + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.we + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.th + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.fr + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.sa + '</th>' +
                '<th class="jqyc-th" scope="col">' + settings.l10n.su + '</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody></tbody>' +
                '</table>';
        }

        var $html = $($this);
        $html.append(domSkeleton);
        var results = jqycGetMonthHTMLStringWithData(firstDayOfCurrentYear, 1, year, 31);
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jan .np-element').append('<h5 class="jqyc-header">' + settings.l10n.jan + '</h5>');
        }
        $html.find('.jqyc-jan .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 2, year, daysOfFeb)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-feb .np-element').append('<h5 class="jqyc-header">' + settings.l10n.feb + '</h5>');
        }
        $html.find('.jqyc-feb .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 3, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-mar .np-element').append('<h5 class="jqyc-header">' + settings.l10n.mar + '</h5>');
        }
        $html.find('.jqyc-mar .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 4, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-apr .np-element').append('<h5 class="jqyc-header">' + settings.l10n.apr + '</h5>');
        }
        $html.find('.jqyc-apr .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 5, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-may .np-element').append('<h5 class="jqyc-header">' + settings.l10n.may + '</h5>');
        }
        $html.find('.jqyc-may .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 6, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jun .np-element').append('<h5 class="jqyc-header">' + settings.l10n.jun + '</h5>');
        }
        $html.find('.jqyc-jun .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 7, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jul .np-element').append('<h5 class="jqyc-header">' + settings.l10n.jul + '</h5>');
        }
        $html.find('.jqyc-jul .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 8, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-aug .np-element').append('<h5 class="jqyc-header">' + settings.l10n.aug + '</h5>');
        }
        $html.find('.jqyc-aug .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 9, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-sep .np-element').append('<h5 class="jqyc-header">' + settings.l10n.sep + '</h5>');
        }
        $html.find('.jqyc-sep .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 10, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-oct .np-element').append('<h5 class="jqyc-header">' + settings.l10n.oct + '</h5>');
        }
        $html.find('.jqyc-oct .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 11, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-nov .np-element').append('<h5 class="jqyc-header">' + settings.l10n.nov + '</h5>');
        }
        $html.find('.jqyc-nov .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 12, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-dec .np-element').append('<h5 class="jqyc-header">' + settings.l10n.dec + '</h5>');
        }
        $html.find('.jqyc-dec .np-element').append(tableSkeleton).find('tbody').append(monthHTMLString);
        if (settings.cols != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-' + settings.cols)
        }

        if (settings.colsSm != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-sm-' + settings.colsSm)
        }

        if (settings.colsMd != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-md-' + settings.colsMd)
        }

        if (settings.colsLg != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-lg-' + settings.colsLg)
        }

        if (settings.colsXl != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-xl-' + settings.colsXl)
        }

        if (settings.minYear && settings.minYear >= year) {
            $calendar.find('.jqyc-prev-year').hide();
        }

        if (settings.maxYear && settings.maxYear <= year) {
            $calendar.find('.jqyc-next-year').hide();
        }
        $calendar.trigger('jqyc.changeYear');
        recalcHeight();
        var choosenYear = $calendar.data('year');
        var choosenMonth = $calendar.data('month');
        var choosenDayOfMonth = $calendar.data('day-of-month');
        $calendar.find('.jqyc-not-empty-td[data-day-of-month="' + choosenDayOfMonth + '"][data-month="' + choosenMonth + '"][data-year="' + choosenYear + '"]').addClass(settings.addUniqueClassOnClick);

        if (settings.mode == 'rangepicker') {
            addRagepickerClassBetweenDays('jqyc-range-choosen-between');
        }
    }

    function jqycGetMonthHTMLStringWithData(firstDay, month, year, days = 31) {

        if (firstDay == 0) {
            firstDay = 7;
        }

        var monthHTMLString = '';
        var d = 1;
        var i = 1;
        while (d <= days) {

            if (i % 7 == 1) {
                monthHTMLString = monthHTMLString + '<tr class="jqyc-tr jqyc-tbody-tr">'
            }
            if (i < firstDay) {
                d--;
                monthHTMLString = monthHTMLString + '<td class="jqyc-empty-td jqyc-td"></td>';
            } else {
                monthHTMLString = monthHTMLString +
                    '<td class="jqyc-not-empty-td np-hover jqyc-td jqyc-day-' + d
                    + ' jqyc-day-of-' + month + '-month" data-month="' + month
                    + '" data-day-of-month="' + d + '" data-year="' + year + '">' + d + ' </td>';
            }
            if (i % 7 == 0) {
                monthHTMLString = monthHTMLString + '</tr>'
            }
            i++;
            d++;
        }


        return {
            monthHTMLString: monthHTMLString, firstDayOfPreviousMonth: (i % 7)
        };
    }

    function recalcHeight() {
        biggestHeight = 0;
        $('.jqyc-month').css('height', 'inherit');
        $('.jqyc-month').each(function () {
            var height = $(this).height();
            if (height > biggestHeight) {
                biggestHeight = height;
            }
        });
        $('.jqyc-month').css('height', biggestHeight);

    }

    function addRagepickerClassBetweenDays(addClass) {
        if ($calendar.data('rangepicker-end-choosen') != true) {
            return;
        }
        startDay = [$calendar.data('rangepicker-start-day-of-month'), $calendar.data('rangepicker-start-month'), $calendar.data('rangepicker-start-year')];
        endDay = [$calendar.data('rangepicker-end-day-of-month'), $calendar.data('rangepicker-end-month'), $calendar.data('rangepicker-end-year')];
        var startDate = new Date(startDay[2], startDay[1], startDay[0]);
        var endDate = new Date(endDay[2], endDay[1], endDay[0]);
        if (startDate > endDate) {
            var newEndDay = startDay;
            var startDay = endDay;
            var endDay = newEndDay;
        }

        startYear = startDay[2];
        startMonth = startDay[1];
        startDay = startDay[0];
        endYear = endDay[2];
        endMonth = endDay[1];
        endDay = endDay[0];
        var fullYearsBetweenYears = [];
        startYearToIterate = startYear;
        while (startYearToIterate != endYear) {
            fullYearsBetweenYears.push(startYearToIterate + 1)
            startYearToIterate++;
        }
        if (fullYearsBetweenYears.length == 0) {
            var fullMonthsBetweenMonths = [];
            startMonthToIterate = startMonth
            while (startMonthToIterate != endMonth) {
                fullMonthsBetweenMonths.push(startMonthToIterate + 1)
                startMonthToIterate++;
            }
            if (fullMonthsBetweenMonths.length == 0) {
                var fullDaysBetweenDays = [];
                startDayToIterate = startDay;
                while (startDayToIterate <= endDay) {
                    fullDaysBetweenDays.push(startDayToIterate + 1)
                    startDayToIterate++;
                    $calendar.find('.jqyc-not-empty-td[data-year="' + startYear + '"][data-month="' + startMonth + '"][data-day-of-month="' + (startDayToIterate - 1) + '"]').addClass(addClass);
                }
            } else {
                startDayToIterate = startDay;
                while (startDayToIterate <= 31) {
                    $calendar.find('.jqyc-not-empty-td[data-year="' + startYear + '"][data-month="' + startMonth + '"][data-day-of-month="' + (startDayToIterate + 1) + '"]').addClass(addClass);
                    startDayToIterate++
                }
                endDayToIterate = 1;
                while (endDayToIterate <= endDay) {
                    $calendar.find('.jqyc-not-empty-td[data-year="' + endYear + '"][data-month="' + endMonth + '"][data-day-of-month="' + (endDayToIterate - 1) + '"]').addClass(addClass);
                    endDayToIterate++
                }
                startMonthToIterate = startMonth + 1;
                while (startMonthToIterate < endMonth) {
                    startDayToIterate = 1;
                    while (startDayToIterate <= 32) {
                        $calendar.find('.jqyc-not-empty-td[data-year="' + endYear + '"][data-month="' + startMonthToIterate + '"][data-day-of-month="' + (startDayToIterate - 1) + '"]').addClass(addClass);
                        startDayToIterate++;
                    }
                    startMonthToIterate++;
                }
            }
        } else {
            startDayToIterate = startDay;
            while (startDayToIterate <= 31) {
                $calendar.find('.jqyc-not-empty-td[data-year="' + startYear + '"][data-month="' + startMonth + '"][data-day-of-month="' + (startDayToIterate + 0) + '"]').addClass(addClass);
                startDayToIterate++;
            }
            endDayToIterate = endDay;
            while (endDayToIterate >= 1) {
                $calendar.find('.jqyc-not-empty-td[data-year="' + endYear + '"][data-month="' + endMonth + '"][data-day-of-month="' + (endDayToIterate - 0) + '"]').addClass(addClass);
                endDayToIterate--;
            }
            startMonthToIterate = startMonth + 1;
            while (startMonthToIterate <= 13) {
                startDayToIterate = 1;
                while (startDayToIterate <= 32) {
                    $calendar.find('.jqyc-not-empty-td[data-year="' + startYear + '"][data-month="' + startMonthToIterate + '"][data-day-of-month="' + (startDayToIterate - 1) + '"]').addClass(addClass);
                    startDayToIterate++;
                }
                startMonthToIterate++;
            }

            endMonthToIterate = endMonth - 1;
            while (endMonthToIterate >= 1) {
                endDayToIterate = 32;
                while (endDayToIterate >= 1) {
                    $calendar.find('.jqyc-not-empty-td[data-year="' + endYear + '"][data-month="' + endMonthToIterate + '"][data-day-of-month="' + (endDayToIterate - 1) + '"]').addClass(addClass);
                    endDayToIterate--;
                }
                endMonthToIterate--;
            }

            startYearToIterate = startYear + 1;
            while (startYearToIterate < endYear) {
                startMonthToIterate = 1;
                while (startMonthToIterate <= 13) {
                    startDayToIterate = 1;
                    while (startDayToIterate <= 32) {
                        $calendar.find('.jqyc-not-empty-td[data-year="' + startYearToIterate + '"][data-month="' + startMonthToIterate + '"][data-day-of-month="' + (startDayToIterate - 1) + '"]').addClass(addClass);
                        startDayToIterate++;
                    }
                    startMonthToIterate++;
                }
                startYearToIterate++
            }
        }
    }


}(jQuery));

