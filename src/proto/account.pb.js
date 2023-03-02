/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Account: {
        nested: {
          AssetFlowList: {
            options: {
              objc_class_prefix: "AssetFlowList",
              java_package: "com.asiainno.hekka.proto.app.account"
            },
            nested: {
              Request: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  assetType: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  assetFlowList: {
                    rule: "repeated",
                    type: "AssetFlowInfo",
                    id: 1
                  }
                }
              },
              AssetFlowInfo: {
                fields: {
                  amount: {
                    type: "int64",
                    id: 1
                  },
                  assetType: {
                    type: "int32",
                    id: 2
                  },
                  type: {
                    type: "int32",
                    id: 3
                  },
                  id: {
                    type: "int64",
                    id: 4
                  },
                  createTime: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          },
          UserAccount: {
            options: {
              objc_class_prefix: "UserAccount",
              java_package: "com.asiainno.hekka.proto.app.account"
            },
            nested: {
              Request: {
                fields: {
                  assetType: {
                    type: "int32",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  amount: {
                    type: "int64",
                    id: 1
                  },
                  exchangeRate: {
                    type: "double",
                    id: 2
                  },
                  currencyExchangeRate: {
                    type: "string",
                    id: 3
                  },
                  blackFridayRemainingEffectiveTime: {
                    type: "int64",
                    id: 4
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
