/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Currency: {
        nested: {
          CurrencyList: {
            options: {
              objc_class_prefix: "CurrencyList",
              java_package: "com.asiainno.hekka.proto.app.currency"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "CurrencyInfo",
                    id: 1
                  }
                }
              },
              CurrencyInfo: {
                fields: {
                  currency: {
                    type: "string",
                    id: 1
                  },
                  symbol: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
