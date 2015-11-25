$.register({
  rule: {
    host: /^imgpython\.net$/,
  },
  ready: function () {
    'use strict';
    var contBtn = $.$('.button.white.bigwidth');
    if(contBtn)
    {
     contBtn.click();
     return;
    };
    var i = $('.centred_resized');
    if (i) {
      $.openImage(i.src);
    };
  },
});
