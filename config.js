module.exports = {
    baseURL: 'http://106.39.84.230:9999',
    dir: 'src/api',
    template: './templates/api.hbs',
    modules: [
        {
            "name": "JgAuth",
            "url": "/jg-auth/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-auth/v2/api-docs"
        },
        {
            "name": "JgUser",
            "url": "/jg-user/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-user/v2/api-docs"
        },
        {
            "name": "JgSetting",
            "url": "/jg-setting/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-setting/v2/api-docs"
        },
        {
            "name": "JgContract",
            "url": "/jg-contract/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-contract/v2/api-docs"
        },
        {
            "name": "JgGather",
            "url": "/jg-gather/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-gather/v2/api-docs"
        },
        {
            "name": "JgUcenter",
            "url": "/jg-ucenter/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-ucenter/v2/api-docs"
        },
        {
            "name": "JgProjectRest",
            "url": "/jg-project-rest/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-project-rest/v2/api-docs"
        },
        {
            "name": "Jg360VrWeb",
            "url": "/jg-360vr-web/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-360vr-web/v2/api-docs"
        },
        {
            "name": "Jg360VrServe",
            "url": "/jg-360vr-serve/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-360vr-serve/v2/api-docs"
        },
        {
            "name": "JgVisual",
            "url": "/jg-visual/v2/api-docs",
            "swaggerVersion": "2.0.0",
            "location": "/jg-visual/v2/api-docs"
        }
    ]
}