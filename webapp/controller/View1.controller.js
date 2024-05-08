sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.project1.controller.View1", {
            onInit: function () {

            },
            onPress2ndview: function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3");
            }
        });
    });
