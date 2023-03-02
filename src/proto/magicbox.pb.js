/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Magicbox: {
        nested: {
          MagicBoxAppModuleInfo: {
            options: {
              objc_class_prefix: "MagicBoxAppModuleInfo",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              MagicBoxInfo: {
                fields: {
                  magicBoxID: {
                    type: "int64",
                    id: 1
                  },
                  magicBoxTitle: {
                    type: "string",
                    id: 2
                  },
                  magicBoxImage: {
                    type: "string",
                    id: 3
                  },
                  magicBoxPrices: {
                    type: "int64",
                    id: 4
                  },
                  normalRate: {
                    type: "double",
                    id: 5
                  },
                  goodRate: {
                    type: "double",
                    id: 6
                  },
                  excellentRate: {
                    type: "double",
                    id: 7
                  },
                  legendRate: {
                    type: "double",
                    id: 8
                  },
                  newUserBenefitPrices: {
                    type: "int64",
                    id: 9
                  }
                }
              },
              MyMagicBoxInfo: {
                fields: {
                  boxID: {
                    type: "int64",
                    id: 1
                  },
                  magicBoxID: {
                    type: "int64",
                    id: 7
                  },
                  magicBoxTitle: {
                    type: "string",
                    id: 2
                  },
                  magicBoxImage: {
                    type: "string",
                    id: 3
                  },
                  magicBoxPrices: {
                    type: "int64",
                    id: 4
                  },
                  state: {
                    type: "int32",
                    id: 5
                  },
                  openBoxTime: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              MyMagicBoxDetail: {
                fields: {
                  boxId: {
                    type: "int64",
                    id: 1
                  },
                  productId: {
                    type: "int64",
                    id: 2
                  },
                  spuId: {
                    type: "int64",
                    id: 3
                  },
                  marketPrice: {
                    type: "int64",
                    id: 5
                  },
                  salePrice: {
                    type: "int64",
                    id: 6
                  },
                  type: {
                    type: "int32",
                    id: 7
                  },
                  mainPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 8
                  },
                  detailPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 9
                  },
                  videoUrl: {
                    type: "string",
                    id: 10
                  },
                  description: {
                    type: "string",
                    id: 11
                  },
                  winningPicture: {
                    type: "string",
                    id: 12
                  },
                  magicBoxPrice: {
                    type: "int64",
                    id: 13
                  },
                  optionList: {
                    rule: "repeated",
                    type: "Option",
                    id: 14
                  },
                  exchangeHkc: {
                    type: "int64",
                    id: 15
                  },
                  title: {
                    type: "string",
                    id: 16
                  },
                  systemTitle: {
                    type: "string",
                    id: 17
                  },
                  skuPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 18
                  },
                  videoCover: {
                    type: "string",
                    id: 19
                  },
                  descDetailPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 20
                  },
                  enBoxTitle: {
                    type: "string",
                    id: 21
                  }
                }
              },
              Option: {
                fields: {
                  optionName: {
                    type: "string",
                    id: 1
                  },
                  optionValNameList: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          MagicBoxDetailById: {
            options: {
              objc_class_prefix: "MagicBoxDetailById",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  magicBoxDetail: {
                    type: "MagicBoxAppModuleInfo.MagicBoxInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MagicBoxList: {
            options: {
              objc_class_prefix: "MagicBoxList",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  magicBoxList: {
                    rule: "repeated",
                    type: "App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MyMagicBoxDetailById: {
            options: {
              objc_class_prefix: "MyMagicBoxDetailById",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  magicBoxInfo: {
                    type: "MagicBoxAppModuleInfo.MyMagicBoxInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MyMagicBoxDetail: {
            options: {
              objc_class_prefix: "MyMagicBoxDetail",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  boxId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  magicBoxDetail: {
                    type: "MagicBoxAppModuleInfo.MyMagicBoxDetail",
                    id: 1
                  }
                }
              }
            }
          },
          MyMagicBoxExchange: {
            options: {
              objc_class_prefix: "MyMagicBoxExchange",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  userBoxId: {
                    type: "int64",
                    id: 1
                  },
                  exchangeType: {
                    type: "int32",
                    id: 2
                  },
                  addressId: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  hkcAmount: {
                    type: "int32",
                    id: 1
                  },
                  orderNo: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          MyMagicBoxList: {
            options: {
              objc_class_prefix: "MyMagicBoxList",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  pageNum: {
                    type: "int32",
                    id: 1
                  },
                  pageSize: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  pageNum: {
                    type: "int32",
                    id: 1
                  },
                  pageSize: {
                    type: "int32",
                    id: 2
                  },
                  totalPage: {
                    type: "int32",
                    id: 3
                  },
                  total: {
                    type: "int64",
                    id: 4
                  },
                  magicBoxCount: {
                    type: "int32",
                    id: 5
                  },
                  myMagicBoxList: {
                    rule: "repeated",
                    type: "App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo",
                    id: 6
                  }
                }
              }
            }
          },
          OpenMagicBox: {
            options: {
              objc_class_prefix: "OpenMagicBox",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  boxId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  magicBoxDetail: {
                    type: "MagicBoxAppModuleInfo.MyMagicBoxDetail",
                    id: 1
                  }
                }
              }
            }
          },
          PayProcessingOrderCount: {
            options: {
              objc_class_prefix: "PayProcessingOrderCount",
              java_package: "com.asiainno.hekka.proto.app.magicbox"
            },
            nested: {
              Request: {
                fields: {
                  userId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  orderCount: {
                    type: "int32",
                    id: 1
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
