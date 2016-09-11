# ManUp.js
Provides the function `manup()` which given a [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) object generates according `meta` and `link` tags for older browsers. Output is an array of arrays of which the first value is the tag (`meta` or `link`) and the second value is the object of attribute/value pairs.

## Install

    npm i manup


## Usage

    import manup from 'manup';

    const manifest = JSON.parse(fs.readFileSync('./manifest.json', 'utf8'));
    const tags = manup(manifest);


Example `manifest.json`:

    {
      "short_name": "ManUp.js",
      "icons": [
        {
          "src": "/icon-192.png",
          "sizes": "192x192",
          "type": "image/png"
        }
      ],
      "start_url": "/",
      "display": "standalone",
      "theme_color": "#f44336"
    }

Example output `tags` array:

    [
      [ 'meta', { name: 'theme-color', content: '#f44336' } ],
      [ 'meta', { name: 'mobile-web-app-capable', content: 'yes' } ],
      [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
      [ 'meta', { name: 'apple-mobile-web-app-title', content: 'ManUp.js' } ],
      [ 'meta', { name: 'application-name', content: 'ManUp.js' } ],
      [ 'meta', { name: 'msapplication-navbutton-color', content: '#f44336' } ],
      [ 'link', { rel: 'icon', sizes: '192x192', href: '/icon-192.png' } ]
    ]

Browsers will choose weather to use the `manifest.json` or the tags.


## Props
The foundation for this comes from https://github.com/boyofgreen/ManUp.js -- thanks! The code was simplified and rewritten as a node module and some more supported tags added.
