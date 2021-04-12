import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-05-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Moradia",
          amount: 1900,
          createdAt: new Date("2021-05-09 19:00:00"),
        },
        {
          id: 3,
          title: "Investimentos",
          type: "deposit",
          category: "Investimentos",
          amount: 8000,
          createdAt: new Date("2021-05-20 09:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [this.schema.all("transaction")];
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
