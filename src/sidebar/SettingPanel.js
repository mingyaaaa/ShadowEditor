﻿import UI from '../ui/UI';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function SettingPanel(app) {
    this.app = app;
    var editor = this.app.editor;

    var config = editor.config;

    var container = new UI.Panel();
    container.setBorderTop('0');
    container.setPaddingTop('20px');

    // class

    var options = {
        'assets/css/light.css': '浅色',
        'assets/css/dark.css': '深色'
    };

    var themeRow = new UI.Row();
    var theme = new UI.Select().setWidth('150px');
    theme.setOptions(options);

    if (config.getKey('theme') !== undefined) {

        theme.setValue(config.getKey('theme'));

    }

    theme.onChange(function () {

        var value = this.getValue();

        editor.setTheme(value);
        editor.config.setKey('theme', value);

    });

    themeRow.add(new UI.Text('主题').setWidth('90px'));
    themeRow.add(theme);

    container.add(themeRow);

    return container;

};

export default SettingPanel;