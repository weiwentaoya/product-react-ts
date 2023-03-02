/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  objc_class_prefix: "UserType",
  java_package: "com.asiainno.hekka.proto.user"
})
.addJSON({
  AppOpLogList: {
    options: {
      objc_class_prefix: "AppOpLogList",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          userId: {
            type: "int64",
            id: 1
          },
          pageNum: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          }
        }
      },
      Response: {
        fields: {
          opLogList: {
            rule: "repeated",
            type: "AppOpLogInfo",
            id: 1
          },
          total: {
            type: "int32",
            id: 2
          }
        }
      },
      AppOpLogInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          userId: {
            type: "int32",
            id: 2
          },
          logUrl: {
            type: "string",
            id: 3
          },
          userAgent: {
            type: "string",
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
  AppUserEmailLogin: {
    options: {
      objc_class_prefix: "AppUserEmailLogin",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          bindType: {
            type: "UserType.BindType",
            id: 1
          },
          thirdToken: {
            type: "string",
            id: 2
          },
          thirdId: {
            type: "string",
            id: 3
          },
          password: {
            type: "string",
            id: 4
          },
          email: {
            type: "string",
            id: 5
          },
          tongdunId: {
            type: "string",
            id: 6
          },
          adjustId: {
            type: "string",
            id: 7
          }
        }
      },
      Response: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          refreshToken: {
            type: "string",
            id: 2
          },
          userProfileInfo: {
            type: "UserProfileInfo.UserProfileInfo",
            id: 3
          },
          loginType: {
            type: "int32",
            id: 4
          },
          hasSwitchNationalStore: {
            type: "bool",
            id: 5
          }
        }
      }
    }
  },
  UserType: {
    nested: {
      BindType: {
        values: {
          DEFAULT_TYPE: 0,
          WEIXIN: 3,
          FACEBOOK: 4,
          FACEBOOK_H5: 5,
          EMAIL: 7,
          GOOGLE: 15,
          TWITTER: 16,
          APPLE_ID: 17,
          PAYPAL: 18
        }
      },
      PushType: {
        values: {
          DEFAULT_PUSHTYPE: 0,
          IOS: 2,
          JPUSH: 3,
          XIAOMI: 4,
          GETUI: 5,
          GOOGLE_PUSH: 6,
          GOOGLE_FCM: 10
        }
      }
    }
  },
  UserProfileInfo: {
    options: {
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      UserProfileInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          username: {
            type: "string",
            id: 2
          },
          countryCode: {
            type: "string",
            id: 3
          },
          avatar: {
            type: "string",
            id: 4
          },
          email: {
            type: "string",
            id: 5
          },
          language: {
            type: "string",
            id: 6
          },
          gender: {
            type: "int32",
            id: 7
          },
          phone: {
            type: "string",
            id: 8
          },
          currency: {
            type: "string",
            id: 9
          },
          zoneCode: {
            type: "string",
            id: 10
          },
          emailSubscribe: {
            type: "int32",
            id: 11
          }
        }
      }
    }
  },
  AppUserLogin: {
    options: {
      objc_class_prefix: "AppUserLogin",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          bindType: {
            type: "UserType.BindType",
            id: 1
          },
          thirdToken: {
            type: "string",
            id: 2
          },
          thirdId: {
            type: "string",
            id: 3
          },
          password: {
            type: "string",
            id: 4
          },
          email: {
            type: "string",
            id: 5
          },
          tongdunId: {
            type: "string",
            id: 6
          },
          adjustId: {
            type: "string",
            id: 7
          },
          loginDomainName: {
            type: "string",
            id: 8
          },
          recaptchaToken: {
            type: "string",
            id: 9
          },
          recaptchaAction: {
            type: "string",
            id: 10
          }
        }
      },
      Response: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          refreshToken: {
            type: "string",
            id: 2
          },
          userProfileInfo: {
            type: "UserProfileInfo.UserProfileInfo",
            id: 3
          },
          loginType: {
            type: "int32",
            id: 4
          },
          hasSwitchNationalStore: {
            type: "bool",
            id: 5
          },
          address: {
            type: "string",
            id: 6
          }
        }
      }
    }
  },
  AppUserLogout: {
    options: {
      objc_class_prefix: "AppUserLogout",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {}
      }
    }
  },
  Feedback: {
    options: {
      objc_class_prefix: "Feedback",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          description: {
            type: "string",
            id: 2
          },
          photoList: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          site: {
            type: "int32",
            id: 4
          },
          errorDesc: {
            type: "string",
            id: 5
          },
          userAgent: {
            type: "string",
            id: 7
          },
          feedbackTime: {
            type: "int64",
            id: 9
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  },
  FeedbackList: {
    options: {
      objc_class_prefix: "FeedbackList",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          userId: {
            type: "int64",
            id: 1
          },
          pageNum: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          }
        }
      },
      Response: {
        fields: {
          feedbackList: {
            rule: "repeated",
            type: "FeedbackInfo",
            id: 1
          },
          total: {
            type: "int32",
            id: 2
          }
        }
      },
      FeedbackInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          description: {
            type: "string",
            id: 3
          },
          photoList: {
            type: "string",
            id: 4
          },
          userId: {
            type: "int64",
            id: 5
          },
          createTime: {
            type: "int64",
            id: 6
          },
          userAgent: {
            type: "string",
            id: 7
          },
          errorDesc: {
            type: "string",
            id: 8
          },
          feedbackTime: {
            type: "int64",
            id: 9
          }
        }
      }
    }
  },
  UserAccountDelete: {
    options: {
      objc_class_prefix: "UserAccountDelete",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          code: {
            type: "int32",
            id: 1
          },
          reason: {
            type: "string",
            id: 2
          },
          verification: {
            type: "string",
            id: 3
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  },
  UserAccountDeleteCheck: {
    options: {
      objc_class_prefix: "UserAccountDeleteCheck",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {}
      }
    }
  },
  UserCheckEmailRegister: {
    options: {
      objc_class_prefix: "UserCheckEmailRegister",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          email: {
            type: "string",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          isRegistered: {
            type: "bool",
            id: 1
          }
        }
      }
    }
  },
  UserEmailForgetPasswordContent: {
    options: {
      objc_class_prefix: "UserEmailForgetPasswordContent",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          validToken: {
            type: "string",
            id: 1
          },
          language: {
            type: "string",
            id: 2
          },
          sign: {
            type: "string",
            id: 3
          }
        }
      },
      Response: {
        fields: {
          validTokenUrl: {
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  UserEmailRegisterContent: {
    options: {
      objc_class_prefix: "UserEmailRegisterContent",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          userId: {
            type: "int64",
            id: 1
          },
          sign: {
            type: "string",
            id: 2
          },
          platform: {
            type: "int32",
            id: 3
          },
          nationStoreId: {
            type: "int64",
            id: 4
          },
          bindType: {
            type: "int32",
            id: 5
          },
          requestId: {
            type: "string",
            id: 6
          },
          currency: {
            type: "string",
            id: 7
          },
          password: {
            type: "string",
            id: 8
          }
        }
      },
      Response: {
        fields: {
          siteUrl: {
            type: "string",
            id: 1
          },
          userInfo: {
            type: "EmailUserInfo",
            id: 2
          },
          codeInfo: {
            type: "EmailCodeInfo",
            id: 3
          }
        }
      },
      EmailUserInfo: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          email: {
            type: "string",
            id: 3
          }
        }
      },
      EmailCodeInfo: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          codeDiscount: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  UserEmailSubscribe: {
    options: {
      objc_class_prefix: "UserEmailSubscribe",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          emailSubscribe: {
            type: "int32",
            id: 2
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  },
  UserEmailSubscribeStatus: {
    options: {
      objc_class_prefix: "UserEmailSubscribeStatus",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          token: {
            type: "string",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          emailSubscribe: {
            type: "int32",
            id: 1
          }
        }
      }
    }
  },
  UserForgetPassword: {
    options: {
      objc_class_prefix: "UserForgetPassword",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          email: {
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
  UserForgetPasswordValidToken: {
    options: {
      objc_class_prefix: "UserForgetPasswordValidToken",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          token: {
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
  UserPreload: {
    options: {
      objc_class_prefix: "UserPreload",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          clientIp: {
            type: "string",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          h5Config: {
            type: "H5Config",
            id: 1
          },
          firstPageType: {
            type: "int32",
            id: 2
          },
          list: {
            rule: "repeated",
            type: "CurrencyInfo",
            id: 3
          },
          cdnUrl: {
            type: "string",
            id: 4
          },
          isShowBox: {
            type: "bool",
            id: 5
          },
          activityNavMap: {
            keyType: "string",
            type: "ActivityNavInfo",
            id: 6
          },
          nationalStoreId: {
            type: "string",
            id: 7
          },
          ipCountry: {
            type: "string",
            id: 8
          },
          invalidCountryList: {
            rule: "repeated",
            type: "string",
            id: 9
          },
          settingInfo: {
            type: "SettingInfo",
            id: 10
          }
        }
      },
      H5Config: {
        fields: {
          privacyUrl: {
            type: "string",
            id: 1
          },
          termUrl: {
            type: "string",
            id: 2
          },
          feedbackUrl: {
            type: "string",
            id: 3
          },
          aboutUsUrl: {
            type: "string",
            id: 4
          },
          payDescUrl: {
            type: "string",
            id: 5
          },
          howToPlay: {
            type: "string",
            id: 6
          },
          refundUrl: {
            type: "string",
            id: 7
          },
          contactUsUrl: {
            type: "string",
            id: 8
          },
          mysteryBoxUrl: {
            type: "string",
            id: 9
          },
          nationalStoreHost: {
            type: "string",
            id: 10
          },
          shippingUrl: {
            type: "string",
            id: 11
          },
          addressUrl: {
            type: "string",
            id: 12
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
      },
      ActivityNavInfo: {
        fields: {
          navId: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          }
        }
      },
      SettingInfo: {
        fields: {
          skinTemplate: {
            type: "string",
            id: 2
          },
          trustpolitSwitch: {
            type: "int32",
            id: 3
          }
        }
      }
    }
  },
  UserPresignUrl: {
    options: {
      objc_class_prefix: "UserPresignUrl",
      java_package: "com.asiainno.hekka.proto.user"
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
  UserProfile: {
    options: {
      objc_class_prefix: "UserProfile",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {
          userProfileInfo: {
            type: "UserProfileInfo.UserProfileInfo",
            id: 1
          },
          hasSwitchNationalStore: {
            type: "bool",
            id: 2
          }
        }
      }
    }
  },
  UserRefreshToken: {
    options: {
      objc_class_prefix: "UserRefreshToken",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          userId: {
            type: "int64",
            id: 1
          },
          refreshToken: {
            type: "string",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          refreshToken: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  UserRegister: {
    options: {
      objc_class_prefix: "UserRegister",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          bindType: {
            type: "UserType.BindType",
            id: 1
          },
          countryCode: {
            type: "string",
            id: 2
          },
          email: {
            type: "string",
            id: 3
          },
          password: {
            type: "string",
            id: 4
          },
          tongdunId: {
            type: "string",
            id: 5
          },
          adjustId: {
            type: "string",
            id: 6
          },
          registerFrom: {
            type: "int32",
            id: 7
          },
          emailSubscribe: {
            type: "int32",
            id: 9
          },
          zoneCode: {
            type: "string",
            id: 10
          },
          phone: {
            type: "string",
            id: 11
          }
        }
      },
      Response: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          refreshToken: {
            type: "string",
            id: 2
          },
          userProfileInfo: {
            type: "UserProfileInfo.UserProfileInfo",
            id: 3
          },
          hasSwitchNationalStore: {
            type: "bool",
            id: 4
          }
        }
      }
    }
  },
  UserResetPassword: {
    options: {
      objc_class_prefix: "UserResetPassword",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          originPassword: {
            type: "string",
            id: 3
          }
        }
      },
      Response: {
        fields: {}
      }
    }
  },
  UserSendEmail: {
    options: {
      objc_class_prefix: "UserSendEmail",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {}
      },
      Response: {
        fields: {}
      }
    }
  },
  UserSwitchStore: {
    options: {
      objc_class_prefix: "UserSwitchStore",
      java_package: "com.asiainno.hekka.proto.user"
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
          language: {
            type: "string",
            id: 1
          },
          isRestart: {
            type: "bool",
            id: 2
          }
        }
      }
    }
  },
  UserUpdate: {
    options: {
      objc_class_prefix: "UserUpdate",
      java_package: "com.asiainno.hekka.proto.user"
    },
    nested: {
      Request: {
        fields: {
          currency: {
            type: "string",
            id: 1
          },
          avatar: {
            type: "string",
            id: 2
          },
          phone: {
            type: "string",
            id: 3
          },
          username: {
            type: "string",
            id: 4
          },
          language: {
            type: "string",
            id: 5
          },
          gender: {
            type: "int32",
            id: 6
          },
          countryCode: {
            type: "string",
            id: 7
          },
          zoneCode: {
            type: "string",
            id: 8
          },
          emailSubscribe: {
            type: "int32",
            id: 9
          }
        }
      },
      Response: {
        fields: {
          userProfileInfo: {
            type: "UserProfileInfo.UserProfileInfo",
            id: 1
          },
          isRestart: {
            type: "bool",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
