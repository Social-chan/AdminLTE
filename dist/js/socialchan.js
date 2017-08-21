'use strict';

/*!
 * Social-chan v1.0.0-alpha (https://social-chan.com)
 * Copyright 2016-2017 Social-chan Team <contact@social-chan.com>
 * Licensed under MIT (https://opensource.org/licenses/MIT)
 */
$(function () {
    $('[data-toggle="popover"]').popover({
        content: $('#popGrid').html()
    });

    $('.has-hovercard').popover({
        html: true,
        trigger: 'hover',
        placement: 'auto',
        delay: { "show": 400, "hide": 100 },
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body p-0"></div></div>',
        content: function content() {
            return '<div class="card"><img class="card-img-top" src="' + $(this).data('cover') + '" alt="Card image" style="height: 120px"><div class="card-img-overlay text-white text-center"><img class="img-64 rounded-circle" src="' + $(this).data('avatar') + '" alt="User profile picture"><span class="card-title d-block lead">' + $(this).data('nickname') + '</span></div></div>';
        }
    });
});
//# sourceMappingURL=socialchan.js.map
