/**
* hexo-tag-flash
* https://github.com/welksonramos/hexo-tag-flash
* Copyright (c) 2020-present, Welkson Ramos
* Licensed under the AGPL-3.0 license.
*
* Syntax:
* {% cjh_flash FLASH_PATH %}
*/

// Configuration

hexo.config.xvideos = Object.assign({
  width: hexo.config.cjh_flash.width || 510,
  height: hexo.config.cjh_flash.height || 400
}, hexo.config.cjh_flash);

hexo.extend.tag.register('cjh_flash', (args) => {
  let video_id = args[0];
  let width = args[1] || hexo.config.xvideos.width;
  let height = args[2] || hexo.config.xvideos.height;

  let tag = `<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><embed type="application/x-shockwave-flash" pluginspage="https://www.adobe.com/go/getflashplayer" id="gameobj" name="gameobj" width="100%" height="100%" src=${FLASH_PATH} allowscriptaccess="never" allownetworking="internal" wmode="window" quality="high" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;">`;
  return tag;

}, { async: true });
