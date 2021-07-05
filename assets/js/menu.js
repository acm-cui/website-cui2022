
var showClassName = 'show';
var showClass = '.' + showClassName;
var notShownClass = ':not(' + showClass +')';
var dropdownClass = '.dropdown';
var dropdownMenuClass = '.dropdown-menu';
var dropdownMenuShownClass = dropdownMenuClass + showClass;

var $dropdown = $(dropdownClass);
var $dropdownToggle = $(".dropdown-toggle");
var $dropdownMenu = $(dropdownMenuClass);
var $dropdownMenuVisible = $(dropdownClass + showClass);

$(window).on('load', function() {
    $(document).keyup(function(e) {
        if (e.key === "Escape" && !$navbar.hasClass('nav-inisible')) {
            $('.navbar').css('opacity', 0);
            $('body').css('overflow', 'auto');
            setTimeout(function() {$('.navbar').addClass('nav-inisible')}, 500);
        }
    });
    
    $('.navpopup-toggler').on('click', function() {
        $navbar = $('.navbar');
        if ($navbar.hasClass('nav-inisible')) {
            console.log('make visible');
            $('.navbar').removeClass('nav-inisible');
            setTimeout(function() {$('.navbar').css('opacity', 1);$('body').css('overflow', 'hidden');}, 50);      
        } else {
            console.log('make invisible');
            $('.navbar').css('opacity', 0);
            $('body').css('overflow', 'auto');
            setTimeout(function() {$('.navbar').addClass('nav-inisible')}, 500);
        }
    });
  
    $('nav .dropdown-menu').on('shown.bs.collapse', function () {
        if (window.innerWidth >= 768) {
            $(dropdownMenuShownClass).parent(notShownClass).find(dropdownMenuClass).each(function() {$(this).collapse('hide')});
        }
    });

    // based on https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840
    $dropdown.hover(
        function() {
            if (window.innerWidth >= 768) {
                var $this = $(this);
                $this.addClass(showClassName);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenuVisible).collapse('hide');
                $this.find($dropdownMenu).collapse('show');
            }
        },
        function() {
            if (window.innerWidth >= 768) {
                var $this = $(this);
                $this.removeClass(showClassName);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).collapse('hide');
            }
        });
});