/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  AddrDataInfo: {
    options: {
      objc_class_prefix: "AddrDataInfo",
      java_package: "com.asiainno.hekka.proto.user.country.config"
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
          flag: {
            type: "int32",
            id: 1
          }
        }
      }
    }
  },
  AddrFetch: {
    options: {
      objc_class_prefix: "AddrFetch",
      java_package: "com.asiainno.hekka.proto.user.country.config"
    },
    nested: {
      Request: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          country: {
            type: "string",
            id: 1
          },
          countryCode: {
            type: "string",
            id: 2
          },
          state: {
            type: "string",
            id: 3
          },
          stateCode: {
            type: "string",
            id: 4
          },
          city: {
            type: "string",
            id: 5
          },
          addressLine1: {
            type: "string",
            id: 6
          },
          addressLine2: {
            type: "string",
            id: 7
          },
          zipCode: {
            type: "string",
            id: 8
          }
        }
      }
    }
  },
  AddrModelInfo: {
    options: {
      objc_class_prefix: "AddrModelInfo",
      java_package: "com.asiainno.hekka.proto.user.country.config"
    },
    nested: {
      AddrInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          postCode: {
            type: "string",
            id: 3
          },
          countryCode: {
            type: "string",
            id: 4
          },
          code: {
            type: "string",
            id: 6
          },
          postCodes: {
            type: "string",
            id: 10
          }
        }
      },
      GoogleAddr: {
        fields: {
          placeId: {
            type: "string",
            id: 2
          },
          description: {
            type: "string",
            id: 3
          }
        }
      }
    }
  },
  AddressSearch: {
    options: {
      objc_class_prefix: "AddressSearch",
      java_package: "com.asiainno.hekka.proto.user.country.config"
    },
    nested: {
      Request: {
        fields: {
          query: {
            type: "string",
            id: 1
          },
          countryCode: {
            type: "string",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          list: {
            rule: "repeated",
            type: "AddrModelInfo.GoogleAddr",
            id: 1
          }
        }
      }
    }
  },
  CityList: {
    options: {
      objc_class_prefix: "CityList",
      java_package: "com.asiainno.hekka.proto.user.country.config"
    },
    nested: {
      Request: {
        fields: {
          countryCode: {
            type: "string",
            id: 1
          },
          stateId: {
            type: "int64",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          addr: {
            rule: "repeated",
            type: "AddrModelInfo.AddrInfo",
            id: 1
          }
        }
      }
    }
  },
  CountryCityList: {
    options: {
      objc_class_prefix: "CountryCityList",
      java_package: "com.asiainno.hekka.proto.user.country.config"
    },
    nested: {
      Request: {
        fields: {
          countryCode: {
            type: "string",
            id: 1
          },
          province: {
            type: "string",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          cityList: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  CountryList: {
    options: {
      objc_class_prefix: "CountryList",
      java_package: "com.asiainno.hekka.proto.user.country.config"
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
          countryInfoList: {
            rule: "repeated",
            type: "CountryInfo",
            id: 1
          }
        }
      },
      CountryInfo: {
        fields: {
          countryCode: {
            type: "string",
            id: 1
          },
          country: {
            type: "string",
            id: 2
          },
          phone: {
            type: "string",
            id: 4
          },
          currency: {
            type: "string",
            id: 5
          }
        }
      }
    }
  },
  CountryProvinceList: {
    options: {
      objc_class_prefix: "CountryProvinceList",
      java_package: "com.asiainno.hekka.proto.user.country.config"
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
          provinceList: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  StateList: {
    options: {
      objc_class_prefix: "StateList",
      java_package: "com.asiainno.hekka.proto.user.country.config"
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
          addr: {
            rule: "repeated",
            type: "AddrModelInfo.AddrInfo",
            id: 1
          }
        }
      }
    }
  }
});

module.exports = $root;
