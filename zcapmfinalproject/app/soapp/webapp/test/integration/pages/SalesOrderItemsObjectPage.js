sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'techyks.ui.soapp',
            componentId: 'SalesOrderItemsObjectPage',
            contextPath: '/SalesOrderHeader/SOItems'
        },
        CustomPageDefinitions
    );
});