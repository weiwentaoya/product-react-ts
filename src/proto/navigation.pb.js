/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      navigation: {
        nested: {
          AppNavigationInfo: {
            options: {
              objc_class_prefix: "AppNavigationInfo",
              java_package: "com.asiainno.hekka.proto.app.navigation"
            },
            nested: {
              Request: {
                fields: {
                  navKeyList: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  menuList: {
                    rule: "repeated",
                    type: "NavigationMenuInfo",
                    id: 1
                  }
                }
              },
              NavigationMenuInfo: {
                fields: {
                  navKey: {
                    type: "int64",
                    id: 1
                  },
                  languageMap: {
                    keyType: "string",
                    type: "AppNavigationModuleInfo.NavigationMenuLanguage",
                    id: 2
                  },
                  type: {
                    type: "int32",
                    id: 4
                  },
                  content: {
                    type: "string",
                    id: 5
                  },
                  handle: {
                    type: "string",
                    id: 7
                  }
                }
              }
            }
          },
          AppNavigationModuleInfo: {
            options: {
              objc_class_prefix: "AppNavigationModuleInfo",
              java_package: "com.asiainno.hekka.proto.app.navigation"
            },
            nested: {
              NavigationMenuLanguage: {
                fields: {
                  navKey: {
                    type: "int64",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  picUrl: {
                    type: "string",
                    id: 3
                  }
                }
              },
              MenuBannerPositionItem: {
                fields: {
                  positionKey: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "int32",
                    id: 3
                  },
                  content: {
                    type: "string",
                    id: 5
                  },
                  picUrl: {
                    type: "string",
                    id: 7
                  }
                }
              }
            }
          },
          AppNavigationList: {
            options: {
              objc_class_prefix: "AppNavigationList",
              java_package: "com.asiainno.hekka.proto.app.navigation"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  menuList: {
                    rule: "repeated",
                    type: "NavigationMenuCascade",
                    id: 1
                  },
                  homeMenuList: {
                    rule: "repeated",
                    type: "NavigationMenuCascade",
                    id: 2
                  }
                }
              },
              NavigationMenuCascade: {
                fields: {
                  menuId: {
                    type: "int64",
                    id: 1
                  },
                  navKey: {
                    type: "int64",
                    id: 2
                  },
                  parentMenuId: {
                    type: "int64",
                    id: 5
                  },
                  name: {
                    type: "string",
                    id: 7
                  },
                  enName: {
                    type: "string",
                    id: 8
                  },
                  type: {
                    type: "int32",
                    id: 9
                  },
                  content: {
                    type: "string",
                    id: 11
                  },
                  picUrl: {
                    type: "string",
                    id: 13
                  },
                  level: {
                    type: "int32",
                    id: 15
                  },
                  handle: {
                    type: "string",
                    id: 18
                  },
                  traceTitle: {
                    type: "string",
                    id: 19
                  },
                  sonMenuList: {
                    rule: "repeated",
                    type: "NavigationMenuCascade",
                    id: 20
                  },
                  viewStatus: {
                    type: "int32",
                    id: 22
                  },
                  bannerSwitch: {
                    type: "int32",
                    id: 24
                  },
                  color: {
                    type: "string",
                    id: 28
                  },
                  bold: {
                    type: "int32",
                    id: 30
                  },
                  italic: {
                    type: "int32",
                    id: 32
                  },
                  iconImage: {
                    type: "string",
                    id: 34
                  },
                  position: {
                    rule: "repeated",
                    type: "AppNavigationModuleInfo.MenuBannerPositionItem",
                    id: 36
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
