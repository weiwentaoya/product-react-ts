/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  objc_class_prefix: "AddressInfo",
  java_package: "com.asiainno.hekka.proto.user.address"
})
.addJSON({
  AddressDelete: {
    options: {
      objc_class_prefix: "AddressDelete",
      java_package: "com.asiainno.hekka.proto.user.address"
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
        fields: {}
      }
    }
  },
  AddressInfo: {
    nested: {
      AddressInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          firstName: {
            type: "string",
            id: 2
          },
          lastName: {
            type: "string",
            id: 3
          },
          countryCode: {
            type: "string",
            id: 4
          },
          province: {
            type: "string",
            id: 5
          },
          city: {
            type: "string",
            id: 6
          },
          zoneCode: {
            type: "string",
            id: 7
          },
          phone: {
            type: "string",
            id: 8
          },
          address1: {
            type: "string",
            id: 9
          },
          address2: {
            type: "string",
            id: 10
          },
          isDefault: {
            type: "int32",
            id: 12
          },
          zipCode: {
            type: "string",
            id: 13
          },
          userId: {
            type: "int64",
            id: 14
          },
          fullName: {
            type: "string",
            id: 15
          },
          isEnable: {
            type: "int32",
            id: 18
          },
          taxNum: {
            type: "string",
            id: 19
          },
          taxType: {
            type: "int32",
            id: 20
          },
          marketingStatus: {
            type: "int32",
            id: 21
          }
        }
      }
    }
  },
  AddressList: {
    options: {
      objc_class_prefix: "AddressList",
      java_package: "com.asiainno.hekka.proto.user.address"
    },
    nested: {
      Request: {
        fields: {
          type: {
            type: "int32",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          list: {
            rule: "repeated",
            type: "AddressInfo.AddressInfo",
            id: 1
          }
        }
      }
    }
  },
  AddressSetDefault: {
    options: {
      objc_class_prefix: "AddressSetDefault",
      java_package: "com.asiainno.hekka.proto.user.address"
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
        fields: {}
      }
    }
  },
  AddressSetting: {
    options: {
      objc_class_prefix: "AddressSetting",
      java_package: "com.asiainno.hekka.proto.user.address"
    },
    nested: {
      Request: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          firstName: {
            type: "string",
            id: 2
          },
          lastName: {
            type: "string",
            id: 3
          },
          countryCode: {
            type: "string",
            id: 4
          },
          province: {
            type: "string",
            id: 5
          },
          city: {
            type: "string",
            id: 6
          },
          zoneCode: {
            type: "string",
            id: 7
          },
          phone: {
            type: "string",
            id: 8
          },
          address1: {
            type: "string",
            id: 9
          },
          address2: {
            type: "string",
            id: 10
          },
          isDefault: {
            type: "int32",
            id: 12
          },
          zipCode: {
            type: "string",
            id: 13
          },
          fullName: {
            type: "string",
            id: 14
          },
          taxNum: {
            type: "string",
            id: 15
          },
          taxType: {
            type: "int32",
            id: 16
          },
          marketingStatus: {
            type: "int32",
            id: 20
          }
        }
      },
      Response: {
        fields: {
          id: {
            type: "int64",
            id: 1
          }
        }
      }
    }
  },
  CheckAddress: {
    options: {
      objc_class_prefix: "CheckAddress",
      java_package: "com.asiainno.hekka.proto.user.address"
    },
    nested: {
      Request: {
        fields: {
          countryCode: {
            type: "string",
            id: 4
          },
          province: {
            type: "string",
            id: 5
          },
          city: {
            type: "string",
            id: 6
          },
          zoneCode: {
            type: "string",
            id: 7
          },
          phone: {
            type: "string",
            id: 8
          },
          address1: {
            type: "string",
            id: 9
          },
          address2: {
            type: "string",
            id: 10
          },
          zipCode: {
            type: "string",
            id: 13
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  }
});

module.exports = $root;
