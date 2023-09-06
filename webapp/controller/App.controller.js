sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.App", {
      goForward: function () {
        MessageToast.show("Bienvenido!");
        this.byId("app").to(this.byId("intro"));
      },
      goBack: function () {
        MessageToast.show("Hasta Luego!");
        this.byId("app").to(this.byId("welcome"));
      },

      inc: function (n) {
        var number = this.getView().byId("input2").getValue();
        this.getView()
          .byId("input2")
          .setValue((+number + 1 * n).toString());
      },

      suma: function () {
        var number1 = this.getView().byId("inputO").getValue() ?? 0;
        var number2 = this.getView().byId("input1").getValue() ?? 0;
        this.getView()
          .byId("input2")
          .setValue((+number1 + +number2).toString());
      },
      op: function () {
        var sel = this.getView().byId("sel").getSelectedKey();

        console.log(sel);
        var number1 = this.getView().byId("inputO").getValue() ?? 0;
        var number2 = this.getView().byId("input1").getValue() ?? 0;
        this.getView()
          .byId("input2")
          .setValue((eval(number1 + sel + number2)));
      },
      onInit: function () {
        this.getView().setModel(
          new JSONModel({
            features: [
              "Enterprise-Ready Web Toolkit",
              "Powerful Development Concepts",
              "Feature-Rich UI Controls",
              "Consistent User Experience",
              "Free and Open Source",
              "Responsive Across Browsers and Devices",
            ],
          })
        );
        this.getView().setModel(
          new JSONModel({
            operations: ["+", "-", "*"],
          })
        );
      },

      onChange: function (oEvent) {
        var bState = oEvent.getParameter("state");
        this.byId("ready").setVisible(bState);
      },
    });
  }
);
