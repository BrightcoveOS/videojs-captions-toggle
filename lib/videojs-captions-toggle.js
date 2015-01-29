/*! videojs-captions-toggle - v0.0.0 - 2015-1-29
 * Copyright (c) 2015 Brightcove
 * Licensed under the Apache-2.0 license. */
videojs.CaptionsToggleButton = videojs.Button.extend({
  init: function(player, options) {
    videojs.Button.call(this, player, {
      el: videojs.Button.prototype.createEl.call(this, 'div', {
        className: 'vjs-caption-toggle-control vjs-control',
        role: 'button',
        'aria-live': 'polite',
        innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Toggle Captions</span></div>'
      })
    });
    this.language_ = options.language;

    // setup pointer event handlers
    this.on('touchstart', videojs.bind(this, function(event) {
      this.toggleCaptions();
      event.preventDefault();
    }));
    this.on('click', videojs.bind(this, this.toggleCaptions));
  }
});
videojs.CaptionsToggleButton.prototype.toggleCaptions = function() {
  var tracks = this.player().textTracks(),
      track,
      i;
  
  for (i = 0; i < tracks.length; i++) {
    track = tracks[i];
    if (track.kind === 'captions' &&
        track.language === this.language_) {
      if (track.mode !== 'showing') {
        track.mode = 'showing';
        this.addClass('vjs-selected');
      } else {
        track.mode = 'hidden';
        this.removeClass('vjs-selected');
      }
      return;
    }
  }
  videojs.log('Tried to toggle captions but no caption track with language ' +
              this.language_ + ' was found!');
  return;
};

videojs.plugin('captionsToggle', function(options) {
  'use strict';
  var player = this,

      settings = videojs.util.mergeOptions({
        language: 'en'
      }, options);

  player.controlBar.addChild('CaptionsToggleButton', settings);
});
