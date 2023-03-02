/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  objc_class_prefix: "CommonType",
  java_package: "com.asiainno.hekka.proto.common"
})
.addJSON({
  Common: {
    nested: {
      CommonInfo: {
        options: {
          objc_class_prefix: "Info",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          CommonDictInfo: {
            fields: {
              key: {
                type: "string",
                id: 1
              },
              val: {
                type: "string",
                id: 2
              }
            }
          }
        }
      },
      DataChange: {
        options: {
          objc_class_prefix: "DataChange",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          Request: {
            fields: {
              PushToken: {
                type: "PushToken",
                id: 1
              },
              tongdunId: {
                type: "string",
                id: 2
              }
            }
          },
          PushToken: {
            fields: {
              type: {
                type: "int32",
                id: 1
              },
              pushToken: {
                type: "string",
                id: 2
              },
              deviceType: {
                type: "int32",
                id: 3
              }
            }
          }
        }
      },
      FbPageView: {
        options: {
          objc_class_prefix: "FbPageView",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          Request: {
            fields: {
              eventId: {
                type: "string",
                id: 1
              }
            }
          },
          Response: {
            fields: {}
          }
        }
      },
      CommonFile: {
        options: {
          objc_class_prefix: "File",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          FilePackage: {
            fields: {
              files: {
                rule: "repeated",
                type: "FileInfo",
                id: 1
              }
            }
          },
          FileInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              type: {
                type: "string",
                id: 2
              },
              size: {
                type: "uint32",
                id: 3
              },
              data: {
                type: "bytes",
                id: 4
              }
            }
          }
        }
      },
      PresignUrl: {
        options: {
          objc_class_prefix: "PresignUrl",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          Request: {
            fields: {
              fileType: {
                type: "string",
                id: 1
              }
            }
          },
          Response: {
            fields: {
              url: {
                type: "string",
                id: 1
              }
            }
          }
        }
      },
      StatisticsLogReport: {
        options: {
          objc_class_prefix: "StatisticsLogReport",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          Request: {
            fields: {
              list: {
                rule: "repeated",
                type: "ReportData",
                id: 1
              }
            }
          },
          ReportData: {
            fields: {
              eventId: {
                type: "string",
                id: 1
              },
              params: {
                type: "string",
                id: 2
              },
              logTime: {
                type: "int64",
                id: 3
              },
              dt: {
                type: "string",
                id: 4
              },
              countryCode: {
                type: "string",
                id: 5
              },
              nationStoreId: {
                type: "int64",
                id: 6
              },
              language: {
                type: "string",
                id: 7
              },
              webUrl: {
                type: "string",
                id: 8
              },
              utm: {
                type: "string",
                id: 9
              },
              grayVersion: {
                type: "string",
                id: 10
              }
            }
          },
          Response: {
            fields: {}
          }
        }
      },
      TemplateDownload: {
        options: {
          objc_class_prefix: "CommonTemplateDownload",
          java_package: "com.asiainno.hekka.proto.common"
        },
        nested: {
          Request: {
            fields: {
              type: {
                type: "int32",
                id: 1
              },
              categoryId: {
                type: "int64",
                id: 2
              }
            }
          },
          Response: {
            fields: {
              fileInfo: {
                type: "Common.CommonFile.FileInfo",
                id: 1
              }
            }
          }
        }
      },
      CommonType: {
        nested: {
          LanguageType: {
            values: {
              DEFAULT_TYPE: 0,
              EN: 1,
              FR: 2,
              DE: 3,
              ES: 4,
              PL: 5
            }
          },
          GenderType: {
            values: {
              DEFAULT_GENDER: 0,
              MAN: 1,
              FEMALE: 2
            }
          },
          TemplateType: {
            values: {
              DEFAULT_OPTION_SELECT_TYPE: 0,
              PRODUCT: 1,
              OPTION: 2,
              CATEGORY: 3,
              PRODCUT_UPDATE_PRICE: 4,
              PRODCUT_UPDATE_INVENTORY: 5,
              SPU_UPDATE_VIRTUAL_SALE: 6,
              SHIPPING: 7
            }
          }
        }
      }
    }
  },
  App: {
    nested: {
      Common: {
        nested: {
          GetTitle: {
            options: {
              objc_class_prefix: "GetTitle",
              java_package: "com.asiainno.hekka.proto.app.common"
            },
            nested: {
              Request: {
                fields: {
                  type: {
                    type: "int32",
                    id: 1
                  },
                  id: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  title: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          ShortLink: {
            options: {
              objc_class_prefix: "ShortLink",
              java_package: "com.asiainno.hekka.proto.app.common"
            },
            nested: {
              Request: {
                fields: {
                  originUrl: {
                    type: "string",
                    id: 1
                  },
                  utmSource: {
                    type: "string",
                    id: 2
                  },
                  utmMedium: {
                    type: "string",
                    id: 3
                  },
                  utmAction: {
                    type: "string",
                    id: 4
                  },
                  utmCampagin: {
                    type: "string",
                    id: 5
                  }
                }
              },
              Response: {
                fields: {
                  shortLink: {
                    type: "string",
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
