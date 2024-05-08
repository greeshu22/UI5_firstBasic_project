sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.anjali.project1.controller.View2", {
            onInit: function () {

            },
            onPressButton:function () {
                this.getOwnerComponent().getRouter().navTo("RouteView3")
            },
            onBack:function(){
                this.getOwnerComponent().onNavBack();
            }
        });
    });
