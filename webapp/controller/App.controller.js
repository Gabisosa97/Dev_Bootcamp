sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.App", {

      // ? NAVIGATION
      goForward: function () {
        MessageToast.show("Bienvenido!");
        this.byId("app").to(this.byId("calculadora"));
      },
      goBack: function () {
        MessageToast.show("Hasta Luego!");
        this.byId("app").to(this.byId("welcome"));
      },

      // * OPERATIONS

      inc: function (n) {
        var number = this.getView().byId("input2").getValue();
        this.getView()
          .byId("input2")
          .setValue((+number + 1 * n).toString());
      },
      op: function () {
        var sel = this.getView().byId("sel").getSelectedKey();

        console.log(sel);
        var number1 = this.getView().byId("inputO").getValue() ?? 0;
        var number2 = this.getView().byId("input1").getValue() ?? 0;

        console.log(number2)
        console.log(sel)
        if (number2 && number2 == 0 && sel == "/") {
          return this.getView().byId("input1").setValueState("Error");
        } else {
          this.getView().byId("input1").setValueState("None");
        }
        this.getView()
          .byId("input2")
          .setValue((eval(number1 + sel + number2)));
      },
      conv: function () {
        var pesos = this.getView().byId("pesos").getValue() ?? 0;
        this.getView()
        .byId("impuestos")
        .setValue((eval(+pesos*1.75 - +pesos)));
        var impuestos = this.getView().byId("impuestos").getValue() ?? 0;
        this.getView()
          .byId("resultado")
          .setValue((eval(+pesos + +impuestos)));
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
            operations: ["+", "-", "*", "/"],
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
