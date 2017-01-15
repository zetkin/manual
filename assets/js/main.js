window.onload = function() {
    var i;
    var selectedItem = $('.toc-menu .selected');

    if (selectedItem) {
        var toc = $(document.createElement('ul'));
        toc.addClass('toc');

        $('.content h2, .content h3, .content h4').each(function() {
            var h = $(this);
            var level = parseInt(h.prop('tagName').substr(1, 1)) - 1;

            var a = $(document.createElement('a'));
            a.attr('href', '#' + h.attr('id'));
            a.append(h.contents().clone());

            var item = $(document.createElement('li'));
            item.addClass('toc-level' + level);
            item.append(a);

            toc.append(item);
        });

        selectedItem.append(toc);
    }
};
