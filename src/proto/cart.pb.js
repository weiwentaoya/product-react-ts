/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Cart: {
        nested: {
          AddCart: {
            options: {
              objc_class_prefix: "AddCart",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  path: {
                    type: "string",
                    id: 3
                  },
                  source: {
                    type: "int32",
                    id: 4
                  },
                  recaptchaToken: {
                    type: "string",
                    id: 5
                  },
                  recaptchaAction: {
                    type: "string",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  quantity: {
                    type: "int32",
                    id: 1
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 2
                  },
                  usProName: {
                    type: "string",
                    id: 3
                  },
                  usdSkuTotalPrice: {
                    type: "int64",
                    id: 4
                  },
                  categoryIdOne: {
                    type: "int64",
                    id: 5
                  },
                  categoryIdTwo: {
                    type: "int64",
                    id: 6
                  },
                  categoryIdThree: {
                    type: "int64",
                    id: 7
                  }
                }
              }
            }
          },
          AddCartShippingPieceTogether: {
            options: {
              objc_class_prefix: "AddCartShippingPieceTogether",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  path: {
                    type: "string",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  freeShippingThreshold: {
                    type: "int64",
                    id: 1
                  },
                  freeShippingAmountDifference: {
                    type: "int64",
                    id: 2
                  },
                  freeShippingFlag: {
                    type: "bool",
                    id: 3
                  },
                  total: {
                    type: "int64",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 6
                  },
                  usProName: {
                    type: "string",
                    id: 7
                  },
                  usdSkuTotalPrice: {
                    type: "int64",
                    id: 8
                  },
                  categoryIdOne: {
                    type: "int64",
                    id: 9
                  },
                  categoryIdTwo: {
                    type: "int64",
                    id: 10
                  },
                  categoryIdThree: {
                    type: "int64",
                    id: 11
                  }
                }
              }
            }
          },
          AddCartSpecialOfferPieceTogether: {
            options: {
              objc_class_prefix: "AddCartSpecialOfferPieceTogether",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  path: {
                    type: "string",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  specialOfferRes: {
                    type: "SpecialOffer",
                    id: 1
                  },
                  total: {
                    type: "int64",
                    id: 2
                  },
                  quantity: {
                    type: "int32",
                    id: 3
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 4
                  },
                  usProName: {
                    type: "string",
                    id: 5
                  },
                  usdSkuTotalPrice: {
                    type: "int64",
                    id: 6
                  },
                  categoryIdOne: {
                    type: "int64",
                    id: 7
                  },
                  categoryIdTwo: {
                    type: "int64",
                    id: 8
                  },
                  categoryIdThree: {
                    type: "int64",
                    id: 9
                  }
                }
              },
              SpecialOffer: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "int32",
                    id: 2
                  },
                  currentLadderId: {
                    type: "int64",
                    id: 3
                  },
                  currentLadderQuantityThreshold: {
                    type: "int32",
                    id: 4
                  },
                  currentLadderPriceThreshold: {
                    type: "int64",
                    id: 5
                  },
                  currentLadderDiscountRate: {
                    type: "int32",
                    id: 6
                  },
                  currentLadderDiscountPrice: {
                    type: "int64",
                    id: 7
                  },
                  nextLadderId: {
                    type: "int64",
                    id: 8
                  },
                  nextLadderDiffQuantity: {
                    type: "int32",
                    id: 9
                  },
                  nextLadderDiffPrice: {
                    type: "int64",
                    id: 10
                  },
                  nextLadderDiscountRate: {
                    type: "int32",
                    id: 11
                  },
                  nextLadderDiscountPrice: {
                    type: "int64",
                    id: 12
                  }
                }
              }
            }
          },
          CartCheckOutSkuList: {
            options: {
              objc_class_prefix: "CartCheckOutSkuList",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuList.SkuInfo",
                    id: 1
                  }
                }
              }
            }
          },
          CartSkuList: {
            options: {
              objc_class_prefix: "CartSkuList",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "Shipping",
                    id: 2
                  },
                  amount: {
                    type: "Amount",
                    id: 3
                  },
                  usdAmount: {
                    type: "Amount",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  }
                }
              },
              SkuInfo: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 2
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 3
                  },
                  proName: {
                    type: "string",
                    id: 4
                  },
                  usProName: {
                    type: "string",
                    id: 5
                  },
                  image: {
                    type: "string",
                    id: 6
                  },
                  discountStr: {
                    type: "string",
                    id: 7
                  },
                  discountStrShow: {
                    type: "bool",
                    id: 8
                  },
                  salePrice: {
                    type: "int64",
                    id: 9
                  },
                  inventory: {
                    type: "int32",
                    id: 10
                  },
                  onlyShow: {
                    type: "bool",
                    id: 11
                  },
                  optionFormat: {
                    type: "string",
                    id: 12
                  },
                  quantity: {
                    type: "int32",
                    id: 13
                  },
                  invalidFlag: {
                    type: "bool",
                    id: 14
                  },
                  selected: {
                    type: "int32",
                    id: 15
                  },
                  path: {
                    type: "string",
                    id: 16
                  },
                  categoryIdOne: {
                    type: "int64",
                    id: 17
                  },
                  categoryIdTwo: {
                    type: "int64",
                    id: 18
                  },
                  categoryIdThree: {
                    type: "int64",
                    id: 19
                  },
                  handle: {
                    type: "string",
                    id: 20
                  }
                }
              },
              Shipping: {
                fields: {
                  freeShippingThreshold: {
                    type: "int64",
                    id: 1
                  },
                  freeShippingAmountDifference: {
                    type: "int64",
                    id: 2
                  },
                  pieceTogetherCollectionId: {
                    type: "int64",
                    id: 3
                  },
                  freeShippingFlag: {
                    type: "bool",
                    id: 4
                  },
                  showFlag: {
                    type: "bool",
                    id: 5
                  }
                }
              },
              Amount: {
                fields: {
                  subtotal: {
                    type: "int64",
                    id: 1
                  },
                  discount: {
                    type: "int64",
                    id: 2
                  },
                  total: {
                    type: "int64",
                    id: 3
                  }
                }
              }
            }
          },
          CartLen: {
            options: {
              objc_class_prefix: "CartLen",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  quantity: {
                    type: "int32",
                    id: 1
                  },
                  freeShippingFlag: {
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          CartRemoveSku: {
            options: {
              objc_class_prefix: "CartRemoveSku",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuList.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuList.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuList.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuList.Amount",
                    id: 5
                  }
                }
              }
            }
          },
          CartRemoveSkuV2: {
            options: {
              objc_class_prefix: "CartRemoveSkuV2",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuListV2.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuListV2.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuListV2.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuListV2.Amount",
                    id: 5
                  },
                  specialOfferRes: {
                    type: "CartSkuListV2.SpecialOffer",
                    id: 6
                  },
                  recommendCouponCode: {
                    type: "CartSkuListV2.CouponCodeInfo",
                    id: 7
                  }
                }
              }
            }
          },
          CartSkuListV2: {
            options: {
              objc_class_prefix: "CartSkuListV2",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "Shipping",
                    id: 2
                  },
                  amount: {
                    type: "Amount",
                    id: 3
                  },
                  usdAmount: {
                    type: "Amount",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  },
                  specialOfferRes: {
                    type: "SpecialOffer",
                    id: 6
                  },
                  recommendCouponCode: {
                    type: "CouponCodeInfo",
                    id: 7
                  }
                }
              },
              SkuInfo: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 2
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 3
                  },
                  proName: {
                    type: "string",
                    id: 4
                  },
                  usProName: {
                    type: "string",
                    id: 5
                  },
                  image: {
                    type: "string",
                    id: 6
                  },
                  discountStr: {
                    type: "string",
                    id: 7
                  },
                  discountStrShow: {
                    type: "bool",
                    id: 8
                  },
                  salePrice: {
                    type: "int64",
                    id: 9
                  },
                  inventory: {
                    type: "int32",
                    id: 10
                  },
                  onlyShow: {
                    type: "bool",
                    id: 11
                  },
                  optionFormat: {
                    type: "string",
                    id: 12
                  },
                  quantity: {
                    type: "int32",
                    id: 13
                  },
                  invalidFlag: {
                    type: "bool",
                    id: 14
                  },
                  selected: {
                    type: "int32",
                    id: 15
                  },
                  path: {
                    type: "string",
                    id: 16
                  },
                  categoryIdOne: {
                    type: "int64",
                    id: 17
                  },
                  categoryIdTwo: {
                    type: "int64",
                    id: 18
                  },
                  categoryIdThree: {
                    type: "int64",
                    id: 19
                  },
                  handle: {
                    type: "string",
                    id: 20
                  },
                  flashSaleId: {
                    type: "int64",
                    id: 21
                  },
                  marketPrice: {
                    type: "int64",
                    id: 22
                  }
                }
              },
              Shipping: {
                fields: {
                  freeShippingThreshold: {
                    type: "int64",
                    id: 1
                  },
                  freeShippingAmountDifference: {
                    type: "int64",
                    id: 2
                  },
                  pieceTogetherCollectionId: {
                    type: "int64",
                    id: 3
                  },
                  freeShippingFlag: {
                    type: "bool",
                    id: 4
                  },
                  showFlag: {
                    type: "bool",
                    id: 5
                  }
                }
              },
              Amount: {
                fields: {
                  subtotal: {
                    type: "int64",
                    id: 1
                  },
                  discount: {
                    type: "int64",
                    id: 2
                  },
                  total: {
                    type: "int64",
                    id: 3
                  },
                  totalMarketDiscountPrice: {
                    type: "int64",
                    id: 4
                  },
                  totalMarketPrice: {
                    type: "int64",
                    id: 5
                  },
                  totalMarketPayPrice: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              SpecialOffer: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "int32",
                    id: 2
                  },
                  currentLadderId: {
                    type: "int64",
                    id: 3
                  },
                  currentLadderQuantityThreshold: {
                    type: "int32",
                    id: 4
                  },
                  currentLadderPriceThreshold: {
                    type: "int64",
                    id: 5
                  },
                  currentLadderDiscountRate: {
                    type: "int32",
                    id: 6
                  },
                  currentLadderDiscountPrice: {
                    type: "int64",
                    id: 7
                  },
                  nextLadderId: {
                    type: "int64",
                    id: 8
                  },
                  nextLadderDiffQuantity: {
                    type: "int32",
                    id: 9
                  },
                  nextLadderDiffPrice: {
                    type: "int64",
                    id: 10
                  },
                  nextLadderDiscountRate: {
                    type: "int32",
                    id: 11
                  },
                  nextLadderDiscountPrice: {
                    type: "int64",
                    id: 12
                  }
                }
              },
              CouponCodeInfo: {
                fields: {
                  codeType: {
                    type: "int32",
                    id: 1
                  },
                  codeValue: {
                    type: "int32",
                    id: 2
                  },
                  restrictionRule: {
                    type: "int32",
                    id: 3
                  },
                  restrictionRuleValue: {
                    type: "int32",
                    id: 4
                  },
                  code: {
                    type: "string",
                    id: 5
                  },
                  startTime: {
                    type: "int64",
                    id: 6
                  },
                  endTime: {
                    type: "int64",
                    id: 7
                  },
                  discountPrice: {
                    type: "int64",
                    id: 8
                  }
                }
              }
            }
          },
          CartSkuAddNum: {
            options: {
              objc_class_prefix: "CartSkuAddNum",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  path: {
                    type: "string",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuList.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuList.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuList.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuList.Amount",
                    id: 5
                  }
                }
              }
            }
          },
          CartSkuAddNumV2: {
            options: {
              objc_class_prefix: "CartSkuAddNumV2",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  path: {
                    type: "string",
                    id: 3
                  },
                  recaptchaToken: {
                    type: "string",
                    id: 4
                  },
                  recaptchaAction: {
                    type: "string",
                    id: 5
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuListV2.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuListV2.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuListV2.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuListV2.Amount",
                    id: 5
                  },
                  specialOfferRes: {
                    type: "CartSkuListV2.SpecialOffer",
                    id: 6
                  },
                  recommendCouponCode: {
                    type: "CartSkuListV2.CouponCodeInfo",
                    id: 7
                  }
                }
              }
            }
          },
          CartSkuSelected: {
            options: {
              objc_class_prefix: "CartSkuSelected",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  allSelectedFlag: {
                    type: "bool",
                    id: 1
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 2
                  },
                  selectedType: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuList.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuList.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuList.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuList.Amount",
                    id: 5
                  }
                }
              }
            }
          },
          CartSkuSelectedV2: {
            options: {
              objc_class_prefix: "CartSkuSelectedV2",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  allSelectedFlag: {
                    type: "bool",
                    id: 1
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 2
                  },
                  selectedType: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  skuList: {
                    rule: "repeated",
                    type: "CartSkuListV2.SkuInfo",
                    id: 1
                  },
                  shipping: {
                    type: "CartSkuListV2.Shipping",
                    id: 2
                  },
                  amount: {
                    type: "CartSkuListV2.Amount",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  usdAmount: {
                    type: "CartSkuListV2.Amount",
                    id: 5
                  },
                  specialOfferRes: {
                    type: "CartSkuListV2.SpecialOffer",
                    id: 6
                  },
                  recommendCouponCode: {
                    type: "CartSkuListV2.CouponCodeInfo",
                    id: 7
                  }
                }
              }
            }
          },
          GetCartShippingPieceTogetherPrice: {
            options: {
              objc_class_prefix: "GetCartShippingPieceTogetherPrice",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  freeShippingThreshold: {
                    type: "int64",
                    id: 1
                  },
                  freeShippingAmountDifference: {
                    type: "int64",
                    id: 2
                  },
                  freeShippingFlag: {
                    type: "bool",
                    id: 3
                  },
                  total: {
                    type: "int64",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  }
                }
              }
            }
          },
          GetCartSpecialOfferPieceTogetherPrice: {
            options: {
              objc_class_prefix: "GetCartSpecialOfferPieceTogetherPrice",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  specialOfferRes: {
                    type: "SpecialOffer",
                    id: 1
                  }
                }
              },
              SpecialOffer: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "int32",
                    id: 2
                  },
                  currentLadderId: {
                    type: "int64",
                    id: 3
                  },
                  currentLadderQuantityThreshold: {
                    type: "int32",
                    id: 4
                  },
                  currentLadderPriceThreshold: {
                    type: "int64",
                    id: 5
                  },
                  currentLadderDiscountRate: {
                    type: "int32",
                    id: 6
                  },
                  currentLadderDiscountPrice: {
                    type: "int64",
                    id: 7
                  },
                  nextLadderId: {
                    type: "int64",
                    id: 8
                  },
                  nextLadderDiffQuantity: {
                    type: "int32",
                    id: 9
                  },
                  nextLadderDiffPrice: {
                    type: "int64",
                    id: 10
                  },
                  nextLadderDiscountRate: {
                    type: "int32",
                    id: 11
                  },
                  nextLadderDiscountPrice: {
                    type: "int64",
                    id: 12
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
