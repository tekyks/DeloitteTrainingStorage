sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"techyks/ui/soapp/test/integration/pages/SalesOrderHeaderList",
	"techyks/ui/soapp/test/integration/pages/SalesOrderHeaderObjectPage",
	"techyks/ui/soapp/test/integration/pages/SalesOrderItemsObjectPage"
], function (JourneyRunner, SalesOrderHeaderList, SalesOrderHeaderObjectPage, SalesOrderItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('techyks/ui/soapp') + '/test/flp.html#app-preview',
        pages: {
			onTheSalesOrderHeaderList: SalesOrderHeaderList,
			onTheSalesOrderHeaderObjectPage: SalesOrderHeaderObjectPage,
			onTheSalesOrderItemsObjectPage: SalesOrderItemsObjectPage
        },
        async: true
    });

    return runner;
});

