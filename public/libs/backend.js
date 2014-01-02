/*
 * Initialize navigation script
 */
ddaccordion.init({
    headerclass: 'silverheader', // Shared CSS class name of headers group
    contentclass: 'submenu', // Shared CSS class name of contents group
    revealtype: 'click', // Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
    mouseoverdelay: 200, // If revealtype="mouseover", set delay in milliseconds before header expands onMouseover
    collapseprev: true, // Collapse previous content (so only one open at any time)? true/false
    defaultexpanded: [0], // index of content(s) open by default [index1, index2, etc] [] denotes no content
    onemustopen: true, // Specify whether at least one header should be open always (so never all headers closed)
    animatedefault: false, // Should contents open by default be animated into view?
    persiststate: true, // Persist state of opened contents within browser session?
    toggleclass: ['', 'selected'], // Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
    togglehtml: ['', '', ''], // Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
    animatespeed: 'fast', // Speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
    oninit: function(headers, expandedindices) 
    { 
        // Custom code to run when headers have initalized
    },
    onopenclose: function(header, index, state, isuseractivated) 
    { 
        // Custom code to run whenever a header is opened or closed
    }
});

$(document).ready(function()
{  
    /**
     * Update date and time
     */
    
    var timeoutTime = 1000; // ms

    var updateDatetime = function () 
    {
        var now = new Date();
        
        var days = now.getDate();
        if (days < 10) days = '0' + days;
        var months = now.getMonth() + 1;
        if (months < 10) months = '0' + months;
        var years = now.getFullYear();
        
        var hours = now.getHours();
        if (hours < 10) hours = '0' + hours;
        var minutes = now.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        
        var mydate = days + '/' + months + '/' + years;
        var mytime = hours + ':' + minutes;
        
        $('#datetime').text(mydate + ' – ' + mytime);
    }

    var t = setInterval(updateDatetime, timeoutTime);

    /**
     * Add quicktip
     */
    $('*[title]').quicktip({
        speed: 400
    });

    /**
     * Add delete confirm dialogue
     */
    $('*[data-confirm-delete]').click(function()
    {
        if (! confirm('Delete this item?')) return false;
    });

    /**
     * Make sidebar responsive to scrolling
     */
    $(window).scroll(function () {
        var $header     = $('#header');
        var $sidebar    = $('#sidebar');
        var $footer     = $('#footer');
        if ($(window).scrollTop() > $header.height() - 22 && $(window).height() > $sidebar.height()) { // 22px = Sidebar offset
            if ($(window).scrollTop() + $sidebar.height() + 22 < $footer.get(0).offsetTop) {
                $sidebar.css({ 'position': 'fixed', top: '22px'});
            } else {
                $sidebar.css({ 'position': 'relative', top: $footer.get(0).offsetTop - $sidebar.height() - $header.height()});
            }
        } else {
            $sidebar.css({ 'position': 'relative', top: 'auto'});
        }
    });
});