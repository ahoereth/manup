const validTags = [
  { tag: 'meta', name: 'theme-color', manifestName: 'theme_color' },
  { tag: 'meta', name: 'mobile-web-app-capable',       manifestName: 'display', value: 'yes' },
  { tag: 'meta', name: 'apple-mobile-web-app-capable', manifestName: 'display', value: 'yes' },
  { tag: 'meta', name: 'apple-mobile-web-app-title', manifestName: 'short_name' },
  { tag: 'meta', name: 'application-name',           manifestName: 'short_name' },
  { tag: 'meta', name: 'msapplication-TileColor',    manifestName: 'ms_TileColor' },
  { tag: 'meta', name: 'msapplication-TileImage',    manifestName: 'icons', imageSize: '144x144' },
  { tag: 'meta', name: 'msapplication-square70x70logo',   manifestName: 'icons', imageSize: '70x70' },
  { tag: 'meta', name: 'msapplication-square150x150logo', manifestName: 'icons', imageSize: '150x150' },
  { tag: 'meta', name: 'msapplication-wide310x150logo',   manifestName: 'icons', imageSize: '310x150' },
  { tag: 'meta', name: 'msapplication-square310x310logo', manifestName: 'icons', imageSize: '310x310' },
  { tag: 'meta', name: 'msapplication-navbutton-color', manifestName: 'theme_color' },
  { tag: 'link', name: 'apple-touch-icon-precomposed', manifestName: 'icons', imageSize: '152x152' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '152x152' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '120x120' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '114x114' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '76x76' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '72x72' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '60x60' },
  { tag: 'link', name: 'apple-touch-icon', manifestName: 'icons', imageSize: '57x57' },
  { tag: 'link', name: 'icon', manifestName: 'icons', imageSize: '128x128' },
  { tag: 'link', name: 'icon', manifestName: 'icons', imageSize: '192x192' }
];


module.exports = function manup(manifest) {
  let tags = [];
  validTags.forEach(({ tag, manifestName, name, imageSize, value }) => {
    const target = manifest[manifestName];
    if (target) {
      if (manifestName === 'icons') {
        const icon = target.find(icon => icon.sizes === imageSize);
        if (icon && icon.src) {
          if (tag === 'link') {
            tags.push(['link', { rel: name, sizes: imageSize, href: icon.src }]);
          } else {
            tags.push([tag, { name, content: icon.src }]);
          }
        }
      } else {
        const content = value ? value : target;
        tags.push([tag, { name, content }]);
      }
    }
  });
  return tags;
}
