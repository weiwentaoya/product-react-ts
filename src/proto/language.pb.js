/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Language: {
        nested: {
          LanguageList: {
            options: {
              objc_class_prefix: "AppLanguageList",
              java_package: "com.asiainno.hekka.proto.app.language"
            },
            nested: {
              Request: {
                fields: {
                  countryCode: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "LanguageInfo",
                    id: 1
                  }
                }
              },
              LanguageInfo: {
                fields: {
                  code: {
                    type: "string",
                    id: 1
                  },
                  language: {
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
  },
  Site: {
    nested: {
      NationalStoreLanguageList: {
        options: {
          objc_class_prefix: "NationalStoreLanguageList",
          java_package: "com.asiainno.hekka.proto.app.site"
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
      }
    }
  }
});

module.exports = $root;
