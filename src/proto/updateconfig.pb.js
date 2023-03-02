/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  CheckUpdate: {
    options: {
      objc_class_prefix: "CheckUpdate",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {
          description: {
            type: "string",
            id: 1
          },
          version: {
            type: "string",
            id: 2
          },
          isForce: {
            type: "int32",
            id: 3
          }
        }
      }
    }
  },
  VersionUpdateConfigAdd: {
    options: {
      objc_class_prefix: "VersionUpdateConfigAdd",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          platform: {
            type: "int32",
            id: 1
          },
          description: {
            type: "string",
            id: 2
          },
          version: {
            type: "string",
            id: 3
          },
          isForce: {
            type: "int32",
            id: 4
          },
          id: {
            type: "int64",
            id: 5
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  },
  VersionUpdateConfigList: {
    options: {
      objc_class_prefix: "VersionUpdateConfigList",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {
          list: {
            rule: "repeated",
            type: "VersionUpdateConfigInfo",
            id: 1
          }
        }
      },
      VersionUpdateConfigInfo: {
        fields: {
          platform: {
            type: "int32",
            id: 1
          },
          description: {
            type: "string",
            id: 2
          },
          opUserName: {
            type: "string",
            id: 3
          },
          version: {
            type: "string",
            id: 4
          },
          isForce: {
            type: "int32",
            id: 6
          },
          id: {
            type: "int64",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          },
          updateTime: {
            type: "int64",
            id: 9
          }
        }
      }
    }
  }
});

module.exports = $root;
