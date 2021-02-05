Realm template for JSDoc 3
===

Usage
---
1. To generate docs from the sample files:
```
$ npm install
$ gulp demo
```

2. To use this project as a template:
```
$ jsdoc -t path/to/realm-jsdoc/template -c path/to/conf.json [files...]
```

3. Refer to the [JSDoc Documentation](http://usejsdoc.org) for more info.

Configuration
---
You can use the following options for customizing the output HTML:
```json
"templates": {
    "applicationName": "Demo",
    "googleAnalytics": "",
    "openGraph": {
        "title": "",
        "type": "website",
        "image": "",
        "site_name": "",
        "url": ""
    },
    "meta": {
        "title": "",
        "description": "",
        "keyword": ""
    },
    "linenums": true
}
```

Special Thanks
---
This project is fork of [ui-jsdoc](https://github.com/Frzy/ui-jsdoc), which itself is a fork of [jaguarjs-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc). The majority of the code (and effort) that went into this project is thanks to them!

License
---
This project is licensed under the MIT License (see `LICENSE`).

