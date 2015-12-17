(function (d, $) {
    'use strict';

    $.fn.fieldsetInput = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({}, options);

        return this.each(function () {
            var element = $(this),
                formControl = element.find('.form-control'),
                controlLabel = element.find('.control-label');
            formControl
                .on('focus', focusElement)
                .on('blur', blurElement);

            function focusElement() {
                element.addClass('focused');
                controlLabel.removeClass('hidden');
            }

            function blurElement() {
                element.removeClass('focused');
                if (formControl.val() != "")
                    controlLabel.addClass('hidden');
            }
        });
    };
})(document, jQuery);