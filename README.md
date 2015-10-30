UI template for JSDoc 3
---
- [Jaguar.js](http://http://frzy.github.io/ui-jsdoc)
- [Jaguar.js Documentations](http://frzy.github.io/ui-jsdoc/demo/docs)
- [JSDoc3](https://github.com/jsdoc3/jsdoc)
- [JSDoc3 API Documentations](http://usejsdoc.org)

Usage
---
1. If you want to create documentations with sample files, you can use commands below.
```
$ npm install
$ gulp demo
```

2. If you already have jsdoc system, you can use this project as jsdoc template.
```
$ jsdoc -t `project folder` -c `configuration file` `source files` `README.md file`
```

config/conf.json
---
You can set options for customizing your documentations.

```
"templates": {
    "applicationName": "Demo",
    "disqus": "",
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

License
---
This project under the MIT License. and this project refered by default template for JSDoc 3.

