$(function () {
    var searchTerms = $('#menu-content > li').map(function() {
        var $this = $(this),
            target = $this.data('target'),
            $child = target && $this.siblings($this.data('target')) || [];

        return {
            $: $(this),
            text: $(this).find('a').text().toLowerCase(),
            children: $child.length && $child.find('a').map(function() {
                var $this = $(this);
                return {
                    $: $this,
                    text: $this.find('li').text().toLowerCase()
                };
            }).toArray() || []
        };
    }).toArray(),
    showAllNav = function() {
        $('#search').data('previousVal', '');
        searchTerms.forEach(function(item) {
            item.$.show();

            item.children.forEach(function(child) {
                child.$.show();
            });
        });
    },
    $clearSearch = $('.nav-side-menu .clearer');

    $('.nav-side-menu .menu-content > li a').click(function(e) {
        e.stopPropagation();
    });

    $clearSearch.click(function(e) {
        $('#search').val('');
        $(this).hide();
        showAllNav();
    });

    $('#search').keyup(function(e) {
        var $this = $(this),
            preVal = $this.data('previousVal'),
            val = $this.val().toLowerCase(),
            tempMatch = [],
            tempHide = [];

        if (val.length) {
            $clearSearch.show();
            // TODO
            // Write Fuzzy search logic here
        } else {
            $this.next().hide();
            showAllNav();
        }
    });

    // Activate sidebar
    var page = window.location.pathname.split('/');
    page = page[page.length - 1];

    sideItem = $('a[href="' + page + '"]').parent();
    sideItem.addClass('active').trigger('click');

    // disqus code
    if (config.disqus) {
        $(window).on('load', function () {
            var disqus_shortname = config.disqus; // required: replace example with your forum shortname
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            var s = document.createElement('script'); s.async = true;
            s.type = 'text/javascript';
            s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
            document.getElementsByTagName('BODY')[0].appendChild(s);
        });
    }
});