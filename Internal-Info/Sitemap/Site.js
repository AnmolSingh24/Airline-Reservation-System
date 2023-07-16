$('.topics a').on('click', function () {
    $select = $('<div class="syllabus"></div>');
    $(this).parents('li').each(function (n, li) {
        $select.prepend(' / ', $(li).children('a').clone());
    });
})