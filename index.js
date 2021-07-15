const md2html = require('./md2html');

const cli_options = {
    gfm: false,
}

const html = md2html('# Title', cli_options);
console.log(html);
