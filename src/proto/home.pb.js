/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Home: {
        nested: {
          Index: {
            options: {
              objc_class_prefix: "AppHomeIndex",
              java_package: "com.asiainno.hekka.proto.app.home"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          },
          MarqueeList: {
            options: {
              objc_class_prefix: "AppMarqueeList",
              java_package: "com.asiainno.hekka.proto.app.home"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "MagicBoxMarqueeInfo",
                    id: 1
                  }
                }
              },
              MagicBoxMarqueeInfo: {
                fields: {
                  userId: {
                    type: "int64",
                    id: 1
                  },
                  userName: {
                    type: "string",
                    id: 2
                  },
                  userAvatar: {
                    type: "string",
                    id: 3
                  },
                  productName: {
                    type: "string",
                    id: 4
                  },
                  productImage: {
                    type: "string",
                    id: 5
                  },
                  salePrice: {
                    type: "int64",
                    id: 6
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
