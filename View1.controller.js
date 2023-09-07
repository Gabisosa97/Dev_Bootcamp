sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Button, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                new Button({
                    text: "Press me",
                    press: function () {
                        MessageToast.show("Hello World!");
                    }
                }).placeAt("btn");
            }
        });
    });
