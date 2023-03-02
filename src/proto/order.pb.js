/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Order: {
        nested: {
          AppOrderDetail: {
            options: {
              objc_class_prefix: "AppOrderDetail",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  orderInfo: {
                    type: "OrInfo.OrderInfo",
                    id: 1
                  },
                  stateInfo: {
                    type: "OrInfo.AppStateInfo",
                    id: 2
                  },
                  addressInfo: {
                    type: "OrInfo.AddressInfo",
                    id: 3
                  },
                  paymentDetail: {
                    type: "OrInfo.PaymentDetail",
                    id: 4
                  },
                  items: {
                    rule: "repeated",
                    type: "OrInfo.ItemInfo",
                    id: 5
                  }
                }
              }
            }
          },
          OrInfo: {
            options: {
              objc_class_prefix: "OrInfo",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              OrderInfo: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  salePrice: {
                    type: "int64",
                    id: 3
                  },
                  skuPhoto: {
                    type: "string",
                    id: 4
                  },
                  productName: {
                    type: "string",
                    id: 5
                  },
                  quantity: {
                    type: "int32",
                    id: 6
                  },
                  magicBoxId: {
                    type: "int64",
                    id: 7
                  },
                  createTime: {
                    type: "int64",
                    id: 8
                  },
                  payOrderNo: {
                    type: "string",
                    id: 9
                  },
                  payCurrency: {
                    type: "string",
                    id: 10
                  },
                  payAmount: {
                    type: "int64",
                    id: 11
                  },
                  payWay: {
                    type: "int64",
                    id: 12
                  },
                  transportNo: {
                    type: "string",
                    id: 13
                  },
                  appStateInfo: {
                    type: "AppStateInfo",
                    id: 14
                  },
                  trackingUrl: {
                    type: "string",
                    id: 15
                  }
                }
              },
              AppStateInfo: {
                fields: {
                  processTime: {
                    type: "int64",
                    id: 1
                  },
                  processEndTime: {
                    type: "int64",
                    id: 2
                  },
                  list: {
                    rule: "repeated",
                    type: "ProcessInfo",
                    id: 3
                  }
                }
              },
              ProcessInfo: {
                fields: {
                  processType: {
                    type: "int32",
                    id: 1
                  },
                  processTime: {
                    type: "int64",
                    id: 2
                  },
                  isCurrent: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              AddressInfo: {
                fields: {
                  addressee: {
                    type: "string",
                    id: 1
                  },
                  address: {
                    type: "string",
                    id: 2
                  },
                  phone: {
                    type: "string",
                    id: 3
                  }
                }
              },
              ItemInfo: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  skuPhoto: {
                    type: "string",
                    id: 3
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  salePrice: {
                    type: "int64",
                    id: 5
                  },
                  currency: {
                    type: "string",
                    id: 6
                  },
                  path: {
                    type: "string",
                    id: 7
                  }
                }
              },
              PaymentDetail: {
                fields: {
                  subtotal: {
                    type: "int64",
                    id: 1
                  },
                  useHkc: {
                    type: "int64",
                    id: 2
                  },
                  totalAmount: {
                    type: "int64",
                    id: 3
                  },
                  payment: {
                    type: "string",
                    id: 4
                  },
                  currency: {
                    type: "string",
                    id: 5
                  },
                  discount: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              PlaceOrderInfo: {
                fields: {
                  currency: {
                    type: "string",
                    id: 1
                  },
                  exchangeRate: {
                    type: "double",
                    id: 2
                  },
                  quantity: {
                    type: "int32",
                    id: 3
                  },
                  currencyOriginalTotalPrice: {
                    type: "int64",
                    id: 4
                  },
                  currencyDiscountPrice: {
                    type: "int64",
                    id: 5
                  },
                  currencyTotalPrice: {
                    type: "int64",
                    id: 6
                  },
                  currencyHkc: {
                    type: "int64",
                    id: 7
                  },
                  currencyPaymentTotalPrice: {
                    type: "int64",
                    id: 8
                  },
                  newUserBenefit: {
                    type: "bool",
                    id: 9
                  },
                  currencyPrice: {
                    type: "int64",
                    id: 10
                  }
                }
              },
              OrderHkcDetail: {
                fields: {
                  currency: {
                    type: "string",
                    id: 1
                  },
                  amount: {
                    type: "int64",
                    id: 2
                  },
                  exchangeNum: {
                    type: "string",
                    id: 3
                  },
                  discountAmountList: {
                    rule: "repeated",
                    type: "DiscountAmount",
                    id: 4
                  }
                }
              },
              DiscountAmount: {
                fields: {
                  hkcRatio: {
                    type: "int32",
                    id: 1
                  },
                  amount: {
                    type: "int64",
                    id: 2
                  },
                  discountCurrencyAmount: {
                    type: "int64",
                    id: 3
                  }
                }
              },
              OrderBoxInfo: {
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
                  }
                }
              },
              OrderPriceInfo: {
                fields: {
                  paymentCurrencyCode: {
                    type: "string",
                    id: 1
                  },
                  paymentCurrencyPrice: {
                    type: "int64",
                    id: 2
                  },
                  taxPrice: {
                    type: "int64",
                    id: 3
                  },
                  shippingPrice: {
                    type: "int64",
                    id: 4
                  },
                  paymentTotalPrice: {
                    type: "int64",
                    id: 5
                  },
                  totalDiscountPrice: {
                    type: "int64",
                    id: 6
                  },
                  systemCurrencyPrice: {
                    type: "int64",
                    id: 7
                  }
                }
              },
              RefundOrderInfo: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  refundNo: {
                    type: "string",
                    id: 2
                  },
                  refundType: {
                    type: "int32",
                    id: 3
                  },
                  refundStatus: {
                    type: "int32",
                    id: 4
                  },
                  refundCurrencyPrice: {
                    type: "int64",
                    id: 5
                  },
                  paymentDetail: {
                    type: "PaymentDetail",
                    id: 6
                  },
                  refundOrderItemList: {
                    rule: "repeated",
                    type: "RefundOrderItemInfo",
                    id: 7
                  },
                  createTime: {
                    type: "int64",
                    id: 8
                  },
                  reviewerTime: {
                    type: "int64",
                    id: 9
                  },
                  refundSuccessTime: {
                    type: "int64",
                    id: 10
                  },
                  refundProcessInfo: {
                    rule: "repeated",
                    type: "RefundProcessInfo",
                    id: 11
                  },
                  refundHkc: {
                    type: "int64",
                    id: 12
                  }
                }
              },
              RefundOrderItemInfo: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  skuPhoto: {
                    type: "string",
                    id: 3
                  },
                  refundQuantity: {
                    type: "int32",
                    id: 4
                  },
                  refundPrice: {
                    type: "int64",
                    id: 5
                  },
                  optionFormat: {
                    type: "string",
                    id: 6
                  }
                }
              },
              RefundProcessInfo: {
                fields: {
                  processType: {
                    type: "int32",
                    id: 1
                  },
                  processTime: {
                    type: "int64",
                    id: 2
                  },
                  isCurrent: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              ReportAddressInfo: {
                fields: {
                  countryCode: {
                    type: "string",
                    id: 1
                  },
                  province: {
                    type: "string",
                    id: 2
                  },
                  city: {
                    type: "string",
                    id: 3
                  },
                  zoneCode: {
                    type: "string",
                    id: 4
                  },
                  phone: {
                    type: "string",
                    id: 5
                  },
                  address1: {
                    type: "string",
                    id: 6
                  },
                  address2: {
                    type: "string",
                    id: 7
                  },
                  zipCode: {
                    type: "string",
                    id: 8
                  },
                  fullName: {
                    type: "string",
                    id: 9
                  }
                }
              }
            }
          },
          BuyAgain: {
            options: {
              objc_class_prefix: "BuyAgain",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  cartSkuNum: {
                    type: "int32",
                    id: 1
                  }
                }
              }
            }
          },
          CancelPayOrder: {
            options: {
              objc_class_prefix: "CancelPayOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  payOrderNo: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {}
              }
            }
          },
          ConfirmOrderPlaceOrder: {
            options: {
              objc_class_prefix: "ConfirmOrderPlaceOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  },
                  shippingMethodId: {
                    type: "int32",
                    id: 3
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 4
                  },
                  couponCode: {
                    type: "string",
                    id: 5
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  spuId: {
                    type: "int64",
                    id: 7
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 8
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 9
                  },
                  version: {
                    type: "int32",
                    id: 10
                  },
                  signStr: {
                    type: "string",
                    id: 11
                  },
                  path: {
                    type: "string",
                    id: 12
                  },
                  timestamp: {
                    type: "int64",
                    id: 13
                  },
                  specialOfferId: {
                    type: "int64",
                    id: 14
                  },
                  specialOfferLadderId: {
                    type: "int64",
                    id: 15
                  },
                  platform: {
                    type: "int32",
                    id: 16
                  },
                  preFlowNo: {
                    type: "string",
                    id: 17
                  },
                  recaptchaToken: {
                    type: "string",
                    id: 18
                  },
                  recaptchaAction: {
                    type: "string",
                    id: 19
                  }
                }
              },
              Response: {
                fields: {
                  invalidSkuList: {
                    rule: "repeated",
                    type: "SkuInfo",
                    id: 1
                  },
                  status: {
                    type: "int32",
                    id: 2
                  },
                  orderNo: {
                    type: "string",
                    id: 3
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
                  image: {
                    type: "string",
                    id: 5
                  },
                  discountStr: {
                    type: "string",
                    id: 6
                  },
                  discountStrShow: {
                    type: "bool",
                    id: 7
                  },
                  salePrice: {
                    type: "int64",
                    id: 8
                  },
                  inventory: {
                    type: "int32",
                    id: 9
                  },
                  onlyShow: {
                    type: "bool",
                    id: 10
                  },
                  optionFormat: {
                    type: "string",
                    id: 11
                  },
                  quantity: {
                    type: "int32",
                    id: 12
                  },
                  handle: {
                    type: "string",
                    id: 13
                  }
                }
              }
            }
          },
          ConfirmOrderQuery: {
            options: {
              objc_class_prefix: "ConfirmOrderQuery",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  },
                  shippingMethodId: {
                    type: "int32",
                    id: 3
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 4
                  },
                  couponCode: {
                    type: "string",
                    id: 5
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  spuId: {
                    type: "int64",
                    id: 7
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 8
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 9
                  },
                  specialOfferId: {
                    type: "int64",
                    id: 10
                  },
                  specialOfferLadderId: {
                    type: "int64",
                    id: 11
                  },
                  joinSpecialOfferFlag: {
                    type: "int32",
                    id: 12
                  },
                  autoSelectCouponCodeFlag: {
                    type: "int32",
                    id: 13
                  }
                }
              },
              Response: {
                fields: {
                  address: {
                    type: "AddressInfo",
                    id: 1
                  },
                  skuList: {
                    rule: "repeated",
                    type: "SkuInfo",
                    id: 3
                  },
                  couponCode: {
                    type: "CouponCode",
                    id: 4
                  },
                  hkcInfo: {
                    type: "HkcDetail",
                    id: 5
                  },
                  amount: {
                    type: "Amount",
                    id: 6
                  },
                  usdAmount: {
                    type: "Amount",
                    id: 7
                  },
                  notShippingSkuList: {
                    rule: "repeated",
                    type: "SkuInfo",
                    id: 8
                  },
                  specialOfferRes: {
                    type: "SpecialOffer",
                    id: 9
                  },
                  scribeShippingAmount: {
                    type: "int64",
                    id: 10
                  },
                  discountNotUseReason: {
                    type: "int32",
                    id: 11
                  },
                  couponCodeNotReasonList: {
                    rule: "repeated",
                    type: "CouponCodeNotUseReason",
                    id: 12
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
                  image: {
                    type: "string",
                    id: 5
                  },
                  discountStr: {
                    type: "string",
                    id: 6
                  },
                  discountStrShow: {
                    type: "bool",
                    id: 7
                  },
                  salePrice: {
                    type: "int64",
                    id: 8
                  },
                  inventory: {
                    type: "int32",
                    id: 9
                  },
                  onlyShow: {
                    type: "bool",
                    id: 10
                  },
                  optionFormat: {
                    type: "string",
                    id: 11
                  },
                  quantity: {
                    type: "int32",
                    id: 12
                  },
                  usdSalePrice: {
                    type: "int64",
                    id: 13
                  },
                  path: {
                    type: "string",
                    id: 14
                  },
                  invalidFlag: {
                    type: "bool",
                    id: 15
                  },
                  handle: {
                    type: "string",
                    id: 16
                  },
                  firstCategoryId: {
                    type: "int64",
                    id: 17
                  },
                  enFirstCategoryName: {
                    type: "string",
                    id: 18
                  },
                  secondCategoryId: {
                    type: "int64",
                    id: 19
                  },
                  enSecondCategoryName: {
                    type: "string",
                    id: 20
                  },
                  thirdCategoryId: {
                    type: "int64",
                    id: 21
                  },
                  enThirdCategoryName: {
                    type: "string",
                    id: 22
                  },
                  flashSaleId: {
                    type: "int64",
                    id: 23
                  }
                }
              },
              AddressInfo: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  countryCode: {
                    type: "string",
                    id: 2
                  },
                  province: {
                    type: "string",
                    id: 3
                  },
                  city: {
                    type: "string",
                    id: 4
                  },
                  zoneCode: {
                    type: "string",
                    id: 5
                  },
                  phone: {
                    type: "string",
                    id: 6
                  },
                  address1: {
                    type: "string",
                    id: 7
                  },
                  address2: {
                    type: "string",
                    id: 8
                  },
                  isDefault: {
                    type: "int32",
                    id: 9
                  },
                  zipCode: {
                    type: "string",
                    id: 10
                  },
                  userId: {
                    type: "int64",
                    id: 11
                  },
                  fullName: {
                    type: "string",
                    id: 12
                  },
                  isEnable: {
                    type: "int32",
                    id: 13
                  },
                  taxNum: {
                    type: "string",
                    id: 14
                  },
                  taxType: {
                    type: "int32",
                    id: 15
                  }
                }
              },
              CouponCode: {
                fields: {
                  useCouponCodeFlag: {
                    type: "bool",
                    id: 1
                  },
                  availableCouponCodeCount: {
                    type: "int32",
                    id: 2
                  },
                  couponCodeId: {
                    type: "int64",
                    id: 3
                  },
                  couponCode: {
                    type: "string",
                    id: 4
                  },
                  currencyAmount: {
                    type: "int64",
                    id: 5
                  },
                  rejectHkcFlag: {
                    type: "bool",
                    id: 6
                  }
                }
              },
              HkcDetail: {
                fields: {
                  currency: {
                    type: "string",
                    id: 1
                  },
                  amount: {
                    type: "int64",
                    id: 2
                  },
                  exchangeNum: {
                    type: "string",
                    id: 3
                  },
                  deductibleHkcList: {
                    rule: "repeated",
                    type: "HkcRatio",
                    id: 4
                  },
                  canUseFlag: {
                    type: "bool",
                    id: 5
                  },
                  notUseReasonType: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              HkcRatio: {
                fields: {
                  hkcRatio: {
                    type: "int32",
                    id: 1
                  },
                  amount: {
                    type: "int64",
                    id: 2
                  },
                  discountCurrencyAmount: {
                    type: "int64",
                    id: 3
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
                  shipping: {
                    type: "int64",
                    id: 3
                  },
                  hkc: {
                    type: "int64",
                    id: 4
                  },
                  total: {
                    type: "int64",
                    id: 5
                  },
                  specialOfferDiscountPrice: {
                    type: "int64",
                    id: 6
                  },
                  couponCodeDiscountPrice: {
                    type: "int64",
                    id: 7
                  },
                  ownSpecialOfferDiscountPrice: {
                    type: "int64",
                    id: 8
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
                  ladderId: {
                    type: "int64",
                    id: 3
                  },
                  quantityThreshold: {
                    type: "int32",
                    id: 4
                  },
                  priceThreshold: {
                    type: "int64",
                    id: 5
                  },
                  discountRate: {
                    type: "int32",
                    id: 6
                  },
                  discountPrice: {
                    type: "int64",
                    id: 7
                  },
                  canUseFlag: {
                    type: "bool",
                    id: 8
                  },
                  excludeIdList: {
                    rule: "repeated",
                    type: "int32",
                    id: 9
                  }
                }
              },
              CouponCodeNotUseReason: {
                fields: {
                  notUseReasonType: {
                    type: "int32",
                    id: 1
                  },
                  diffQuantity: {
                    type: "int32",
                    id: 2
                  },
                  diffPrice: {
                    type: "int64",
                    id: 3
                  }
                }
              }
            }
          },
          CouponCodeApply: {
            options: {
              objc_class_prefix: "CouponCodeApply",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  couponCode: {
                    type: "string",
                    id: 2
                  },
                  spuId: {
                    type: "int64",
                    id: 3
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 4
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 5
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  addressId: {
                    type: "int64",
                    id: 7
                  }
                }
              },
              Response: {
                fields: {
                  detail: {
                    type: "CouponCodeDetail.Detail",
                    id: 1
                  },
                  availableFlag: {
                    type: "bool",
                    id: 2
                  },
                  diffValue: {
                    type: "int64",
                    id: 3
                  },
                  restrictionRule: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          },
          CouponCodeDetail: {
            options: {
              objc_class_prefix: "CouponCodeDetail",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Detail: {
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
                  isNewUserCode: {
                    type: "int32",
                    id: 8
                  },
                  availableFlag: {
                    type: "bool",
                    id: 9
                  },
                  notAvailableCode: {
                    type: "int32",
                    id: 10
                  }
                }
              }
            }
          },
          CouponCodeList: {
            options: {
              objc_class_prefix: "CouponCodeList",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
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
                  couponCodeList: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 5
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  addressId: {
                    type: "int64",
                    id: 7
                  }
                }
              },
              Response: {
                fields: {
                  codeList: {
                    rule: "repeated",
                    type: "CouponCodeDetail.Detail",
                    id: 1
                  }
                }
              }
            }
          },
          CouponCodeListFromOrderV2: {
            options: {
              objc_class_prefix: "CouponCodeListFromOrderV2",
              java_package: "com.asiainno.hekka.proto.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 3
                  },
                  spuId: {
                    type: "int64",
                    id: 4
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 5
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 6
                  },
                  specialOfferId: {
                    type: "int64",
                    id: 7
                  },
                  specialOfferLadderId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              Response: {
                fields: {
                  availableList: {
                    rule: "repeated",
                    type: "CodeInfo",
                    id: 1
                  },
                  notAvailableList: {
                    rule: "repeated",
                    type: "CodeInfo",
                    id: 2
                  }
                }
              },
              CodeInfo: {
                fields: {
                  code: {
                    type: "string",
                    id: 1
                  },
                  startTime: {
                    type: "int64",
                    id: 2
                  },
                  endTime: {
                    type: "int64",
                    id: 3
                  },
                  codeType: {
                    type: "int32",
                    id: 4
                  },
                  codeValue: {
                    type: "int32",
                    id: 5
                  },
                  restrictionRule: {
                    type: "int32",
                    id: 6
                  },
                  restrictionRuleValue: {
                    type: "int32",
                    id: 7
                  },
                  desc: {
                    type: "string",
                    id: 8
                  },
                  claim: {
                    type: "int32",
                    id: 9
                  },
                  isFirstOrder: {
                    type: "int32",
                    id: 10
                  },
                  noEndTime: {
                    type: "int32",
                    id: 11
                  },
                  dateSettingType: {
                    type: "int32",
                    id: 12
                  },
                  duration: {
                    type: "int32",
                    id: 13
                  },
                  accessChannel: {
                    type: "int32",
                    id: 14
                  },
                  codeId: {
                    type: "int64",
                    id: 15
                  },
                  notUseReasonList: {
                    rule: "repeated",
                    type: "NotUseReason",
                    id: 16
                  }
                }
              },
              NotUseReason: {
                fields: {
                  notUseReasonType: {
                    type: "int32",
                    id: 1
                  },
                  diffQuantity: {
                    type: "int32",
                    id: 2
                  },
                  diffPrice: {
                    type: "int64",
                    id: 3
                  }
                }
              }
            }
          },
          CouponCodeListFromOrderV3: {
            options: {
              objc_class_prefix: "CouponCodeListFromOrderV3",
              java_package: "com.asiainno.hekka.proto.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 3
                  },
                  spuId: {
                    type: "int64",
                    id: 4
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 5
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  availableList: {
                    rule: "repeated",
                    type: "CodeInfo",
                    id: 1
                  },
                  notAvailableList: {
                    rule: "repeated",
                    type: "CodeInfo",
                    id: 2
                  },
                  specialOfferRes: {
                    type: "SpecialOffer",
                    id: 3
                  }
                }
              },
              CodeInfo: {
                fields: {
                  code: {
                    type: "string",
                    id: 1
                  },
                  startTime: {
                    type: "int64",
                    id: 2
                  },
                  endTime: {
                    type: "int64",
                    id: 3
                  },
                  codeType: {
                    type: "int32",
                    id: 4
                  },
                  codeValue: {
                    type: "int32",
                    id: 5
                  },
                  restrictionRule: {
                    type: "int32",
                    id: 6
                  },
                  restrictionRuleValue: {
                    type: "int32",
                    id: 7
                  },
                  desc: {
                    type: "string",
                    id: 8
                  },
                  claim: {
                    type: "int32",
                    id: 9
                  },
                  isFirstOrder: {
                    type: "int32",
                    id: 10
                  },
                  noEndTime: {
                    type: "int32",
                    id: 11
                  },
                  dateSettingType: {
                    type: "int32",
                    id: 12
                  },
                  duration: {
                    type: "int32",
                    id: 13
                  },
                  accessChannel: {
                    type: "int32",
                    id: 14
                  },
                  codeId: {
                    type: "int64",
                    id: 15
                  },
                  notUseReasonList: {
                    rule: "repeated",
                    type: "NotUseReason",
                    id: 16
                  },
                  excludeIdList: {
                    rule: "repeated",
                    type: "int32",
                    id: 17
                  },
                  discountPrice: {
                    type: "int64",
                    id: 18
                  }
                }
              },
              NotUseReason: {
                fields: {
                  notUseReasonType: {
                    type: "int32",
                    id: 1
                  },
                  diffQuantity: {
                    type: "int32",
                    id: 2
                  },
                  diffPrice: {
                    type: "int64",
                    id: 3
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
                  ladderId: {
                    type: "int64",
                    id: 3
                  },
                  quantityThreshold: {
                    type: "int32",
                    id: 4
                  },
                  priceThreshold: {
                    type: "int64",
                    id: 5
                  },
                  discountRate: {
                    type: "int32",
                    id: 6
                  },
                  discountPrice: {
                    type: "int64",
                    id: 7
                  },
                  excludeIdList: {
                    rule: "repeated",
                    type: "int32",
                    id: 8
                  },
                  actualPrice: {
                    type: "int64",
                    id: 9
                  }
                }
              }
            }
          },
          FlashSaleSkuBuyNowCheck: {
            options: {
              objc_class_prefix: "FlashSaleSkuBuyNowCheck",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  saleSkuId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  canBuy: {
                    type: "int32",
                    id: 1
                  }
                }
              }
            }
          },
          GetBoxPlaceOrderInfo: {
            options: {
              objc_class_prefix: "GetBoxPlaceOrderInfo",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxTplId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  placeOrderInfo: {
                    type: "OrInfo.PlaceOrderInfo",
                    id: 1
                  },
                  orderBoxInfo: {
                    type: "OrInfo.OrderBoxInfo",
                    id: 2
                  }
                }
              }
            }
          },
          KlarnaOrderCommit: {
            options: {
              objc_class_prefix: "KlarnaOrderCommit",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  preFlowNo: {
                    type: "string",
                    id: 1
                  },
                  authorizationToken: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  flowNo: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          },
          LogisticsTrack: {
            options: {
              objc_class_prefix: "LogisticsTrack",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  trackNumber: {
                    type: "string",
                    id: 1
                  },
                  orderNo: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  detailList: {
                    rule: "repeated",
                    type: "Detail",
                    id: 1
                  }
                }
              },
              Detail: {
                fields: {
                  timestamp: {
                    type: "int64",
                    id: 1
                  },
                  message: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          MagicBoxPlaceOrder: {
            options: {
              objc_class_prefix: "MagicBoxPlaceOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxTplId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  hkc: {
                    type: "int64",
                    id: 3
                  },
                  payWay: {
                    type: "int32",
                    id: 4
                  },
                  newUserBenefit: {
                    type: "bool",
                    id: 5
                  },
                  paymentTotalPrice: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  orderInfo: {
                    type: "OrInfo.OrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MagicBoxPlaceOrderV1: {
            options: {
              objc_class_prefix: "MagicBoxPlaceOrderV1",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxTplId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 3
                  },
                  payWay: {
                    type: "int32",
                    id: 4
                  },
                  newUserBenefit: {
                    type: "bool",
                    id: 5
                  },
                  paymentTotalPrice: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  orderInfo: {
                    type: "OrInfo.OrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MagicBoxPlaceOrderV2: {
            options: {
              objc_class_prefix: "MagicBoxPlaceOrderV2",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxTplId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 3
                  },
                  payWay: {
                    type: "int32",
                    id: 4
                  },
                  newUserBenefit: {
                    type: "bool",
                    id: 5
                  },
                  paymentTotalPrice: {
                    type: "int64",
                    id: 6
                  },
                  timestamp: {
                    type: "int64",
                    id: 7
                  },
                  sign: {
                    type: "string",
                    id: 8
                  },
                  version: {
                    type: "int32",
                    id: 9
                  }
                }
              },
              Response: {
                fields: {
                  orderInfo: {
                    type: "OrInfo.OrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          MyOrders: {
            options: {
              objc_class_prefix: "AppMyOrders",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  all: {
                    type: "int32",
                    id: 1
                  },
                  unpaid: {
                    type: "int32",
                    id: 2
                  },
                  processing: {
                    type: "int32",
                    id: 3
                  },
                  shipped: {
                    type: "int32",
                    id: 4
                  },
                  returns: {
                    type: "int32",
                    id: 5
                  }
                }
              }
            }
          },
          MyWallets: {
            options: {
              objc_class_prefix: "AppMyWallets",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  magicBox: {
                    type: "int32",
                    id: 1
                  },
                  hkc: {
                    type: "int32",
                    id: 2
                  },
                  coupon: {
                    type: "int32",
                    id: 3
                  },
                  currencyExchangeRate: {
                    type: "string",
                    id: 4
                  },
                  blackFridayRemainingEffectiveTime: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          },
          OrderDetailV2: {
            options: {
              objc_class_prefix: "OrderDetailV2",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  processTime: {
                    type: "int64",
                    id: 3
                  },
                  processEndTime: {
                    type: "int64",
                    id: 4
                  },
                  processList: {
                    rule: "repeated",
                    type: "ProcessInfo",
                    id: 5
                  },
                  address: {
                    type: "AddressInfo",
                    id: 6
                  },
                  orderItemList: {
                    rule: "repeated",
                    type: "OrderItem",
                    id: 7
                  },
                  payWay: {
                    type: "string",
                    id: 8
                  },
                  amount: {
                    type: "Amount",
                    id: 9
                  },
                  remainingTimeOfPayment: {
                    type: "int64",
                    id: 10
                  },
                  multiPackageLogisticFlag: {
                    type: "bool",
                    id: 11
                  },
                  trackingUrl: {
                    type: "string",
                    id: 12
                  },
                  orderSource: {
                    type: "int32",
                    id: 13
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 14
                  },
                  userCountry: {
                    type: "string",
                    id: 15
                  },
                  language: {
                    type: "string",
                    id: 16
                  },
                  paymentInfoList: {
                    rule: "repeated",
                    type: "PaymentInfo",
                    id: 17
                  }
                }
              },
              Amount: {
                fields: {
                  subTotal: {
                    type: "int64",
                    id: 1
                  },
                  discount: {
                    type: "int64",
                    id: 2
                  },
                  shipping: {
                    type: "int64",
                    id: 3
                  },
                  hkc: {
                    type: "int64",
                    id: 4
                  },
                  totalAmount: {
                    type: "int64",
                    id: 5
                  },
                  currencyCode: {
                    type: "string",
                    id: 6
                  }
                }
              },
              OrderItem: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  proName: {
                    type: "string",
                    id: 2
                  },
                  skuPhoto: {
                    type: "string",
                    id: 3
                  },
                  optionFormat: {
                    type: "string",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  },
                  salePrice: {
                    type: "int64",
                    id: 6
                  },
                  handle: {
                    type: "string",
                    id: 7
                  },
                  flashSaleId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              ProcessInfo: {
                fields: {
                  processType: {
                    type: "int32",
                    id: 1
                  },
                  processTime: {
                    type: "int64",
                    id: 2
                  },
                  isCurrent: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              AddressInfo: {
                fields: {
                  addressee: {
                    type: "string",
                    id: 1
                  },
                  address: {
                    type: "string",
                    id: 2
                  },
                  phone: {
                    type: "string",
                    id: 3
                  },
                  zoneCode: {
                    type: "string",
                    id: 4
                  },
                  address2: {
                    type: "string",
                    id: 5
                  },
                  countryCode: {
                    type: "string",
                    id: 6
                  },
                  province: {
                    type: "string",
                    id: 7
                  },
                  city: {
                    type: "string",
                    id: 8
                  },
                  taxNum: {
                    type: "string",
                    id: 9
                  },
                  taxType: {
                    type: "int32",
                    id: 10
                  },
                  zipCode: {
                    type: "string",
                    id: 11
                  },
                  fullName: {
                    type: "string",
                    id: 12
                  },
                  address1: {
                    type: "string",
                    id: 13
                  }
                }
              },
              PaymentInfo: {
                fields: {
                  paymentMethodId: {
                    type: "int32",
                    id: 1
                  },
                  payUrl: {
                    type: "string",
                    id: 2
                  },
                  flowNo: {
                    type: "string",
                    id: 3
                  },
                  voucher: {
                    type: "string",
                    id: 4
                  },
                  clientToken: {
                    type: "string",
                    id: 5
                  },
                  sessionId: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          OrderHkcDetail: {
            options: {
              objc_class_prefix: "OrderHkcDetail",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  currencyTotalPrice: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  orderHkcDetail: {
                    type: "OrInfo.OrderHkcDetail",
                    id: 1
                  }
                }
              }
            }
          },
          OrderInfoAddress: {
            options: {
              objc_class_prefix: "OrderInfoAddress",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderId: {
                    type: "string",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  addressInfo: {
                    type: "AddressInfo",
                    id: 1
                  }
                }
              },
              AddressInfo: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  countryCode: {
                    type: "string",
                    id: 2
                  },
                  province: {
                    type: "string",
                    id: 3
                  },
                  city: {
                    type: "string",
                    id: 4
                  },
                  zoneCode: {
                    type: "string",
                    id: 5
                  },
                  phone: {
                    type: "string",
                    id: 6
                  },
                  address1: {
                    type: "string",
                    id: 7
                  },
                  address2: {
                    type: "string",
                    id: 8
                  },
                  isDefault: {
                    type: "int32",
                    id: 9
                  },
                  zipCode: {
                    type: "string",
                    id: 10
                  },
                  userId: {
                    type: "int64",
                    id: 11
                  },
                  fullName: {
                    type: "string",
                    id: 12
                  }
                }
              }
            }
          },
          OrderInfoEdit: {
            options: {
              objc_class_prefix: "OrderInfoEdit",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderId: {
                    type: "string",
                    id: 1
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 2
                  },
                  addressId: {
                    type: "int64",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {}
              }
            }
          },
          OrderListV2: {
            options: {
              objc_class_prefix: "OrderListV2",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  searchName: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  createTime: {
                    type: "int64",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "OrderInfo",
                    id: 1
                  }
                }
              },
              OrderInfo: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  remainingTimeOfPayment: {
                    type: "int64",
                    id: 3
                  },
                  currencyCode: {
                    type: "string",
                    id: 4
                  },
                  payWay: {
                    type: "int32",
                    id: 5
                  },
                  orderItemList: {
                    rule: "repeated",
                    type: "OrderItem",
                    id: 6
                  },
                  createTime: {
                    type: "int64",
                    id: 7
                  },
                  paymentCurrencyPrice: {
                    type: "int64",
                    id: 8
                  },
                  paymentInfo: {
                    type: "PaymentInfo",
                    id: 9
                  }
                }
              },
              OrderItem: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  proName: {
                    type: "string",
                    id: 2
                  },
                  skuPhoto: {
                    type: "string",
                    id: 3
                  },
                  optionFormat: {
                    type: "string",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  },
                  salePrice: {
                    type: "int64",
                    id: 6
                  },
                  handle: {
                    type: "string",
                    id: 7
                  },
                  flashSaleId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              PaymentInfo: {
                fields: {
                  paymentMethodId: {
                    type: "int32",
                    id: 1
                  },
                  payUrl: {
                    type: "string",
                    id: 2
                  },
                  flowNo: {
                    type: "string",
                    id: 3
                  },
                  voucher: {
                    type: "string",
                    id: 4
                  },
                  clientToken: {
                    type: "string",
                    id: 5
                  },
                  sessionId: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          OrderListV3: {
            options: {
              objc_class_prefix: "OrderListV3",
              java_package: "com.asiainno.hekka.proto.app.order"
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
                  },
                  searchName: {
                    type: "string",
                    id: 3
                  },
                  appOrderState: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  total: {
                    type: "int32",
                    id: 1
                  },
                  size: {
                    type: "int32",
                    id: 2
                  },
                  current: {
                    type: "int32",
                    id: 3
                  },
                  pages: {
                    type: "int32",
                    id: 4
                  },
                  records: {
                    rule: "repeated",
                    type: "OrderInfo",
                    id: 5
                  }
                }
              },
              OrderInfo: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  remainingTimeOfPayment: {
                    type: "int64",
                    id: 3
                  },
                  currencyCode: {
                    type: "string",
                    id: 4
                  },
                  payWay: {
                    type: "int32",
                    id: 5
                  },
                  orderItemList: {
                    rule: "repeated",
                    type: "OrderItem",
                    id: 6
                  },
                  createTime: {
                    type: "int64",
                    id: 7
                  },
                  paymentCurrencyPrice: {
                    type: "int64",
                    id: 8
                  },
                  paymentInfo: {
                    type: "PaymentInfo",
                    id: 9
                  }
                }
              },
              OrderItem: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  proName: {
                    type: "string",
                    id: 2
                  },
                  skuPhoto: {
                    type: "string",
                    id: 3
                  },
                  optionFormat: {
                    type: "string",
                    id: 4
                  },
                  quantity: {
                    type: "int32",
                    id: 5
                  },
                  salePrice: {
                    type: "int64",
                    id: 6
                  },
                  handle: {
                    type: "string",
                    id: 7
                  },
                  flashSaleId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              PaymentInfo: {
                fields: {
                  paymentMethodId: {
                    type: "int32",
                    id: 1
                  },
                  payUrl: {
                    type: "string",
                    id: 2
                  },
                  flowNo: {
                    type: "string",
                    id: 3
                  },
                  voucher: {
                    type: "string",
                    id: 4
                  },
                  clientToken: {
                    type: "string",
                    id: 5
                  },
                  sessionId: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          OrderMyAddress: {
            options: {
              objc_class_prefix: "OrderMyAddress",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  availableAddress: {
                    rule: "repeated",
                    type: "AddressInfo",
                    id: 1
                  },
                  notAvailableAddress: {
                    rule: "repeated",
                    type: "AddressInfo",
                    id: 2
                  }
                }
              },
              AddressInfo: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  countryCode: {
                    type: "string",
                    id: 2
                  },
                  province: {
                    type: "string",
                    id: 3
                  },
                  city: {
                    type: "string",
                    id: 4
                  },
                  zoneCode: {
                    type: "string",
                    id: 5
                  },
                  phone: {
                    type: "string",
                    id: 6
                  },
                  address1: {
                    type: "string",
                    id: 7
                  },
                  address2: {
                    type: "string",
                    id: 8
                  },
                  isDefault: {
                    type: "int32",
                    id: 9
                  },
                  zipCode: {
                    type: "string",
                    id: 10
                  },
                  userId: {
                    type: "int64",
                    id: 11
                  },
                  fullName: {
                    type: "string",
                    id: 12
                  },
                  taxNum: {
                    type: "string",
                    id: 13
                  },
                  taxType: {
                    type: "int32",
                    id: 14
                  },
                  marketingStatus: {
                    type: "int32",
                    id: 15
                  }
                }
              }
            }
          },
          OrderPackageDetail: {
            options: {
              objc_class_prefix: "OrderPackageDetail",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  packageList: {
                    rule: "repeated",
                    type: "Package",
                    id: 1
                  }
                }
              },
              Package: {
                fields: {
                  trackNumber: {
                    type: "string",
                    id: 1
                  },
                  trackUrl: {
                    type: "string",
                    id: 2
                  },
                  companyName: {
                    type: "string",
                    id: 3
                  },
                  skuPhotoList: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                  },
                  logisticsDetailList: {
                    rule: "repeated",
                    type: "LogisticsDetail",
                    id: 5
                  }
                }
              },
              LogisticsDetail: {
                fields: {
                  timestamp: {
                    type: "int64",
                    id: 1
                  },
                  message: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          OrderPayState: {
            options: {
              objc_class_prefix: "OrderPayState",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  paySuccess: {
                    type: "int32",
                    id: 1
                  },
                  userBoxId: {
                    type: "int64",
                    id: 2
                  },
                  itemInfoList: {
                    rule: "repeated",
                    type: "OrInfo.ItemInfo",
                    id: 3
                  },
                  orderPriceInfo: {
                    type: "OrInfo.OrderPriceInfo",
                    id: 4
                  },
                  couponCode: {
                    type: "string",
                    id: 5
                  },
                  reportAddressInfo: {
                    type: "OrInfo.ReportAddressInfo",
                    id: 6
                  },
                  paymentMethod: {
                    type: "string",
                    id: 7
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 8
                  }
                }
              }
            }
          },
          PayOrder: {
            options: {
              objc_class_prefix: "PayOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  hkc: {
                    type: "int64",
                    id: 2
                  },
                  payWay: {
                    type: "int32",
                    id: 3
                  },
                  paramStr: {
                    type: "string",
                    id: 4
                  },
                  backUrl: {
                    type: "string",
                    id: 5
                  },
                  preFlowNo: {
                    type: "string",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  payOrderNo: {
                    type: "string",
                    id: 1
                  },
                  userBoxId: {
                    type: "int64",
                    id: 2
                  },
                  payUrl: {
                    type: "string",
                    id: 3
                  },
                  payWay: {
                    type: "int32",
                    id: 4
                  },
                  flowNo: {
                    type: "string",
                    id: 5
                  },
                  authorizeContent: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          PlaceOrder: {
            options: {
              objc_class_prefix: "PlaceOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  orderInfo: {
                    type: "OrInfo.OrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          PreOrder: {
            options: {
              objc_class_prefix: "PreOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  addressId: {
                    type: "int64",
                    id: 2
                  },
                  shippingMethodId: {
                    type: "int32",
                    id: 3
                  },
                  paymentMethodId: {
                    type: "int32",
                    id: 4
                  },
                  couponCode: {
                    type: "string",
                    id: 5
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  spuId: {
                    type: "int64",
                    id: 7
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 8
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 9
                  },
                  specialOfferId: {
                    type: "int64",
                    id: 10
                  },
                  specialOfferLadderId: {
                    type: "int64",
                    id: 11
                  },
                  platform: {
                    type: "int32",
                    id: 12
                  },
                  orderNo: {
                    type: "string",
                    id: 13
                  }
                }
              },
              Response: {
                fields: {
                  preFlowNo: {
                    type: "string",
                    id: 1
                  },
                  payUrl: {
                    type: "string",
                    id: 2
                  },
                  voucher: {
                    type: "string",
                    id: 3
                  },
                  clientToken: {
                    type: "string",
                    id: 4
                  },
                  sessionId: {
                    type: "string",
                    id: 5
                  }
                }
              }
            }
          },
          PreOrderVerify: {
            options: {
              objc_class_prefix: "PreOrderVerify",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  magicBoxTplId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  id: {
                    type: "int32",
                    id: 1
                  }
                }
              }
            }
          },
          QueryDelayDeliveryShowFlag: {
            options: {
              objc_class_prefix: "QueryDelayDeliveryShowFlag",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  showFlag: {
                    type: "int32",
                    id: 1
                  }
                }
              }
            }
          },
          QueryNewUserCodeList: {
            options: {
              objc_class_prefix: "QueryNewUserCodeList",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
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
                  skuQuantity: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  codeList: {
                    rule: "repeated",
                    type: "CouponCodeDetail.Detail",
                    id: 1
                  }
                }
              }
            }
          },
          ReceiveCouponCode: {
            options: {
              objc_class_prefix: "ReceiveCouponCode",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  couponCode: {
                    type: "string",
                    id: 2
                  },
                  confirmOrderRequest: {
                    type: "ConfirmOrderRequest",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  receiveStatus: {
                    type: "int32",
                    id: 1
                  },
                  notUseReasonList: {
                    rule: "repeated",
                    type: "NotUseReason",
                    id: 2
                  },
                  codeInfo: {
                    type: "CodeInfo",
                    id: 3
                  },
                  codeCanUseTime: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              NotUseReason: {
                fields: {
                  notUseReasonType: {
                    type: "int32",
                    id: 1
                  },
                  diffQuantity: {
                    type: "int32",
                    id: 2
                  },
                  diffPrice: {
                    type: "int64",
                    id: 3
                  }
                }
              },
              ConfirmOrderRequest: {
                fields: {
                  source: {
                    type: "int32",
                    id: 1
                  },
                  hkcRatio: {
                    type: "int32",
                    id: 6
                  },
                  spuId: {
                    type: "int64",
                    id: 7
                  },
                  saleSkuId: {
                    type: "int64",
                    id: 8
                  },
                  skuQuantity: {
                    type: "int32",
                    id: 9
                  },
                  specialOfferId: {
                    type: "int64",
                    id: 14
                  },
                  specialOfferLadderId: {
                    type: "int64",
                    id: 15
                  },
                  addressId: {
                    type: "int64",
                    id: 16
                  }
                }
              },
              CodeInfo: {
                fields: {
                  code: {
                    type: "string",
                    id: 1
                  },
                  startTime: {
                    type: "int64",
                    id: 2
                  },
                  endTime: {
                    type: "int64",
                    id: 3
                  },
                  codeType: {
                    type: "int32",
                    id: 4
                  },
                  codeValue: {
                    type: "int32",
                    id: 5
                  },
                  restrictionRule: {
                    type: "int32",
                    id: 6
                  },
                  restrictionRuleValue: {
                    type: "int32",
                    id: 7
                  },
                  desc: {
                    type: "string",
                    id: 8
                  },
                  claim: {
                    type: "int32",
                    id: 9
                  },
                  isFirstOrder: {
                    type: "int32",
                    id: 10
                  },
                  noEndTime: {
                    type: "int32",
                    id: 11
                  },
                  dateSettingType: {
                    type: "int32",
                    id: 12
                  },
                  duration: {
                    type: "int32",
                    id: 13
                  },
                  accessChannel: {
                    type: "int32",
                    id: 14
                  },
                  codeId: {
                    type: "int64",
                    id: 15
                  },
                  notUseReasonList: {
                    rule: "repeated",
                    type: "NotUseReason",
                    id: 16
                  },
                  excludeIdList: {
                    rule: "repeated",
                    type: "int32",
                    id: 17
                  },
                  discountPrice: {
                    type: "int64",
                    id: 19
                  }
                }
              }
            }
          },
          TryCaptureOrder: {
            options: {
              objc_class_prefix: "TryCaptureOrder",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  flowNo: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  orderNo: {
                    type: "string",
                    id: 1
                  },
                  payUrl: {
                    type: "string",
                    id: 2
                  },
                  reauthorize: {
                    type: "bool",
                    id: 3
                  }
                }
              }
            }
          },
          UserOrderList: {
            options: {
              objc_class_prefix: "UserOrderList",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  searchName: {
                    type: "string",
                    id: 1
                  },
                  appOrderState: {
                    type: "int32",
                    id: 2
                  },
                  createTime: {
                    type: "int64",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  orderList: {
                    rule: "repeated",
                    type: "OrInfo.OrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          UserRefundOrderDetail: {
            options: {
              objc_class_prefix: "UserRefundOrderDetail",
              java_package: "com.asiainno.hekka.proto.app.order"
            },
            nested: {
              Request: {
                fields: {
                  refundNo: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  refundOrderInfo: {
                    type: "OrInfo.RefundOrderInfo",
                    id: 1
                  }
                }
              }
            }
          },
          UserRefundOrderList: {
            options: {
              objc_class_prefix: "UserRefundOrderList",
              java_package: "com.asiainno.hekka.proto.app.order"
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
                  refundOrderInfoList: {
                    rule: "repeated",
                    type: "OrInfo.RefundOrderInfo",
                    id: 1
                  },
                  total: {
                    type: "int32",
                    id: 2
                  },
                  pageNum: {
                    type: "int32",
                    id: 3
                  },
                  pageSize: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          }
        }
      },
      Cart: {
        nested: {
          OrderPayment: {
            options: {
              objc_class_prefix: "OrderPayment",
              java_package: "com.asiainno.hekka.proto.app.cart"
            },
            nested: {
              Request: {
                fields: {
                  country: {
                    type: "string",
                    id: 1
                  },
                  language: {
                    type: "string",
                    id: 2
                  },
                  currency: {
                    type: "string",
                    id: 3
                  },
                  paymentPosition: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  paymentList: {
                    rule: "repeated",
                    type: "Payment",
                    id: 1
                  }
                }
              },
              Payment: {
                fields: {
                  id: {
                    type: "int32",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  currencies: {
                    type: "string",
                    id: 3
                  },
                  paymentIcon: {
                    type: "string",
                    id: 4
                  },
                  paymentLogo: {
                    type: "string",
                    id: 5
                  },
                  languageTitle: {
                    type: "string",
                    id: 6
                  },
                  accessType: {
                    type: "int32",
                    id: 7
                  },
                  pcPaymentIcon: {
                    type: "string",
                    id: 8
                  },
                  minAmount: {
                    type: "int32",
                    id: 9
                  },
                  currencyMinAmount: {
                    type: "int32",
                    id: 10
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
