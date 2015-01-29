# Video.js Captions Toggle

A button that toggles captions for a specified language.

## Getting Started

Once you've added the plugin script to your page, you can use it with any video:

```html
<link href="videojs-captions-toggle.css" rel="stylesheet">

<script src="video.js"></script>
<script src="videojs-captions-toggle.js"></script>
<script>
  videojs(document.querySelector('video')).captionsToggle();
</script>
```

There's also a [working example](http://brightcoveos.github.io/videojs-captions-toggle/example.html) of the plugin you can check out if you're having trouble.

## Documentation
### Plugin Options

You may pass in an options object to the plugin upon initialization. This
object may contain any of the following properties:

#### language
Type: `string`
Default: 'en'

The two-letter [BCP-47](http://people.w3.org/rishida/utils/subtags/) language code. The default specifies English captions to be used.

## Release History

 - 0.1.0: Initial release
