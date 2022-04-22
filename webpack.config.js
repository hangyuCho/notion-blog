const GoogleFontsPlugin = require('google-fonts-plugin');

module.exports = {
    plugins: {
        _new: GoogleFontsPlugin('font.config.json'),
        get new() {
            return this._new;
        },
        set new(value) {
            this._new = value;
        },
    }
}