/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Product: {
        nested: {
          AppCollectionProductList: {
            options: {
              objc_class_prefix: "AppCollectionProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  templateId: {
                    type: "int64",
                    id: 1
                  },
                  collectionId: {
                    type: "int64",
                    id: 2
                  },
                  sortType: {
                    type: "string",
                    id: 3
                  },
                  sortOrder: {
                    type: "string",
                    id: 4
                  },
                  newProduct: {
                    type: "bool",
                    id: 5
                  },
                  priceMin: {
                    type: "int64",
                    id: 6
                  },
                  priceMax: {
                    type: "int64",
                    id: 7
                  },
                  sortId: {
                    type: "string",
                    id: 11
                  },
                  size: {
                    type: "int32",
                    id: 12
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  }
                }
              }
            }
          },
          AppJudgeSpuInNationalStore: {
            options: {
              objc_class_prefix: "AppJudgeSpuInNationalStore",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  skuId: {
                    type: "int64",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  spuNationalStoreRelationInfo: {
                    type: "AppProductModuleInfo.SpuNationalStoreRelationInfo",
                    id: 1
                  }
                }
              }
            }
          },
          AppProductModuleInfo: {
            options: {
              objc_class_prefix: "AppProductModuleInfo",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              SkuDetail: {
                fields: {
                  skuId: {
                    type: "int64",
                    id: 1
                  },
                  skuPhoto: {
                    type: "Component.Image",
                    id: 2
                  },
                  saleState: {
                    type: "int32",
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
                  discount: {
                    type: "int32",
                    id: 8
                  },
                  usdSalePrice: {
                    type: "int64",
                    id: 9
                  },
                  skuOptionList: {
                    rule: "repeated",
                    type: "OptionAndValue",
                    id: 10
                  },
                  canUseKlarna: {
                    type: "bool",
                    id: 11
                  },
                  klarnaSalePrice: {
                    type: "int64",
                    id: 12
                  },
                  skuIdString: {
                    type: "string",
                    id: 51
                  },
                  marketPriceString: {
                    type: "string",
                    id: 52
                  },
                  salePriceString: {
                    type: "string",
                    id: 53
                  },
                  usdSalePriceString: {
                    type: "string",
                    id: 54
                  },
                  klarnaSalePriceString: {
                    type: "string",
                    id: 55
                  }
                }
              },
              SaleOption: {
                fields: {
                  optionName: {
                    type: "string",
                    id: 1
                  },
                  optionValueNameList: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                  }
                }
              },
              Option: {
                fields: {
                  optionId: {
                    type: "int64",
                    id: 1
                  },
                  optionName: {
                    type: "string",
                    id: 2
                  },
                  optionValueList: {
                    rule: "repeated",
                    type: "OptionValue",
                    id: 3
                  },
                  sizeIconView: {
                    type: "int32",
                    id: 4
                  },
                  optionIdString: {
                    type: "string",
                    id: 21
                  }
                }
              },
              OptionValue: {
                fields: {
                  optionValueId: {
                    type: "int64",
                    id: 1
                  },
                  optionValueName: {
                    type: "string",
                    id: 2
                  },
                  optionValueIdString: {
                    type: "string",
                    id: 21
                  }
                }
              },
              OptionAndValue: {
                fields: {
                  optionId: {
                    type: "int64",
                    id: 1
                  },
                  optionValueId: {
                    type: "int64",
                    id: 2
                  },
                  optionValueName: {
                    type: "string",
                    id: 3
                  },
                  optionIdString: {
                    type: "string",
                    id: 21
                  },
                  optionValueIdString: {
                    type: "string",
                    id: 22
                  }
                }
              },
              SpecificationInfo: {
                fields: {
                  measurementsList: {
                    rule: "repeated",
                    type: "Measurements",
                    id: 1
                  },
                  sizeList: {
                    rule: "repeated",
                    type: "Size",
                    id: 2
                  },
                  specTplTableValueList: {
                    rule: "repeated",
                    type: "SpecTplTableValue",
                    id: 20
                  }
                }
              },
              SpecTplTableValue: {
                fields: {
                  measValueId: {
                    type: "string",
                    id: 2
                  },
                  sizeValId: {
                    type: "string",
                    id: 3
                  },
                  fitUsSize: {
                    type: "string",
                    id: 4
                  },
                  fitUkSize: {
                    type: "string",
                    id: 5
                  },
                  fitEuSize: {
                    type: "string",
                    id: 6
                  },
                  cmLength: {
                    type: "string",
                    id: 7
                  },
                  inchLength: {
                    type: "string",
                    id: 8
                  }
                }
              },
              Size: {
                fields: {
                  sizeValId: {
                    type: "int64",
                    id: 1
                  },
                  sizeValName: {
                    type: "string",
                    id: 2
                  },
                  sizeValIdString: {
                    type: "string",
                    id: 21
                  }
                }
              },
              Measurements: {
                fields: {
                  measurementValId: {
                    type: "int64",
                    id: 1
                  },
                  measurementsValName: {
                    type: "string",
                    id: 2
                  },
                  measurementValIdString: {
                    type: "string",
                    id: 21
                  }
                }
              },
              SpuNationalStoreRelationInfo: {
                fields: {
                  productIsInThisNationalStore: {
                    type: "int32",
                    id: 1
                  },
                  spuParamIsInThisNationalStore: {
                    type: "int32",
                    id: 2
                  },
                  spuIdInThisNationalStore: {
                    type: "int64",
                    id: 3
                  },
                  skuIdInThisNationalStore: {
                    type: "int64",
                    id: 4
                  },
                  handleInThisNationalStore: {
                    type: "string",
                    id: 5
                  },
                  spuIdInThisNationalStoreString: {
                    type: "string",
                    id: 21
                  },
                  skuIdInThisNationalStoreString: {
                    type: "string",
                    id: 22
                  }
                }
              },
              SpuFlashSaleInfo: {
                fields: {
                  id: {
                    type: "string",
                    id: 1
                  },
                  salePrice: {
                    type: "string",
                    id: 2
                  },
                  discount: {
                    type: "int32",
                    id: 3
                  },
                  saveSalePrice: {
                    type: "string",
                    id: 4
                  },
                  endTime: {
                    type: "int64",
                    id: 5
                  },
                  endTimeString: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          AppProTrendsList: {
            options: {
              objc_class_prefix: "AppProTrendsList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  proTrendsId: {
                    type: "int64",
                    id: 1
                  },
                  randomNum: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  proTrendsInfo: {
                    type: "Component.ProductTrendsInfo",
                    id: 1
                  },
                  proTrendsInfoList: {
                    rule: "repeated",
                    type: "Component.ProductTrendsInfo",
                    id: 2
                  }
                }
              }
            }
          },
          AppProductCommentDefaultList: {
            options: {
              objc_class_prefix: "AppProductCommentDefaultList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  total: {
                    type: "int32",
                    id: 1
                  },
                  commentList: {
                    rule: "repeated",
                    type: "AppProductCommentInfo.AppCommentInfo",
                    id: 2
                  }
                }
              }
            }
          },
          AppProductCommentInfo: {
            options: {
              objc_class_prefix: "AppProductCommentInfo",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              AppCommentInfo: {
                fields: {
                  userPhoto: {
                    type: "string",
                    id: 2
                  },
                  userName: {
                    type: "string",
                    id: 3
                  },
                  score: {
                    type: "double",
                    id: 4
                  },
                  date: {
                    type: "int64",
                    id: 5
                  },
                  content: {
                    type: "string",
                    id: 6
                  },
                  images: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 7
                  }
                }
              }
            }
          },
          AppProductCommentList: {
            options: {
              objc_class_prefix: "AppProductCommentList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  commentType: {
                    type: "int32",
                    id: 11
                  },
                  pageNum: {
                    type: "int32",
                    id: 12
                  },
                  pageSize: {
                    type: "int32",
                    id: 13
                  }
                }
              },
              Response: {
                fields: {
                  commentList: {
                    rule: "repeated",
                    type: "AppProductCommentInfo.AppCommentInfo",
                    id: 1
                  },
                  imageCommentCount: {
                    type: "int32",
                    id: 5
                  }
                }
              }
            }
          },
          AppProductDetail: {
            options: {
              objc_class_prefix: "AppProductDetail",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  skuId: {
                    type: "int64",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  handle: {
                    type: "string",
                    id: 3
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  skuId: {
                    type: "int64",
                    id: 6
                  },
                  categoryId: {
                    type: "int64",
                    id: 7
                  },
                  categoryType: {
                    type: "int32",
                    id: 8
                  },
                  videoUrl: {
                    type: "string",
                    id: 10
                  },
                  videoCover: {
                    type: "Component.Image",
                    id: 11
                  },
                  mainPhotos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 15
                  },
                  detailPhotos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 20
                  },
                  skuPhotos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 25
                  },
                  title: {
                    type: "string",
                    id: 30
                  },
                  enTitle: {
                    type: "string",
                    id: 31
                  },
                  systemTitle: {
                    type: "string",
                    id: 32
                  },
                  sales: {
                    type: "int64",
                    id: 41
                  },
                  saleState: {
                    type: "int32",
                    id: 43
                  },
                  skuList: {
                    rule: "repeated",
                    type: "AppProductModuleInfo.SkuDetail",
                    id: 47
                  },
                  spuOptionList: {
                    rule: "repeated",
                    type: "AppProductModuleInfo.Option",
                    id: 50
                  },
                  navRankInfo: {
                    type: "Component.NavRankInfo",
                    id: 52
                  },
                  proTrendsInfo: {
                    type: "Component.ProductTrendsInfo",
                    id: 53
                  },
                  saleOptionList: {
                    rule: "repeated",
                    type: "AppProductModuleInfo.SaleOption",
                    id: 55
                  },
                  description: {
                    type: "string",
                    id: 60
                  },
                  descDetailPhotos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 61
                  },
                  specificationInfo: {
                    type: "AppProductModuleInfo.SpecificationInfo",
                    id: 65
                  },
                  specificationImgList: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 66
                  },
                  showVat: {
                    type: "int32",
                    id: 70
                  },
                  spuNationalStoreRelationInfo: {
                    type: "AppProductModuleInfo.SpuNationalStoreRelationInfo",
                    id: 71
                  },
                  flashSaleInfo: {
                    type: "AppProductModuleInfo.SpuFlashSaleInfo",
                    id: 72
                  },
                  productIdString: {
                    type: "string",
                    id: 101
                  },
                  spuIdString: {
                    type: "string",
                    id: 102
                  },
                  skuIdString: {
                    type: "string",
                    id: 103
                  },
                  categoryIdString: {
                    type: "string",
                    id: 104
                  },
                  salesString: {
                    type: "string",
                    id: 105
                  }
                }
              }
            }
          },
          AppProductList: {
            options: {
              objc_class_prefix: "AppProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  sortId: {
                    type: "string",
                    id: 11
                  },
                  pageSize: {
                    type: "int32",
                    id: 12
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  }
                }
              }
            }
          },
          AppProductPopUp: {
            options: {
              objc_class_prefix: "AppProductPopUp",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  skuId: {
                    type: "int64",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  skuId: {
                    type: "int64",
                    id: 6
                  },
                  categoryId: {
                    type: "int64",
                    id: 7
                  },
                  mainPhotos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 15
                  },
                  title: {
                    type: "string",
                    id: 30
                  },
                  enTitle: {
                    type: "string",
                    id: 31
                  },
                  systemTitle: {
                    type: "string",
                    id: 32
                  },
                  saleState: {
                    type: "int32",
                    id: 43
                  },
                  skuList: {
                    rule: "repeated",
                    type: "AppProductModuleInfo.SkuDetail",
                    id: 47
                  },
                  spuOptionList: {
                    rule: "repeated",
                    type: "AppProductModuleInfo.Option",
                    id: 50
                  },
                  specificationInfo: {
                    type: "AppProductModuleInfo.SpecificationInfo",
                    id: 65
                  },
                  specificationImgList: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 66
                  }
                }
              }
            }
          },
          AppProductProfileInfo: {
            options: {
              objc_class_prefix: "AppProductProfileInfo",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  title: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          },
          DetailPromotionProductList: {
            options: {
              objc_class_prefix: "DetailPromotionProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  sortId: {
                    type: "string",
                    id: 2
                  },
                  pageNum: {
                    type: "int32",
                    id: 3
                  },
                  pageSize: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  },
                  saleTestList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          },
          HotSearchKeywordList: {
            options: {
              objc_class_prefix: "HotSearchKeywordList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  hotKeywordList: {
                    rule: "repeated",
                    type: "HotKeyword",
                    id: 1
                  }
                }
              },
              HotKeyword: {
                fields: {
                  keyword: {
                    type: "string",
                    id: 1
                  },
                  languageKeyword: {
                    type: "string",
                    id: 2
                  },
                  isHot: {
                    type: "int32",
                    id: 3
                  },
                  traceTitle: {
                    type: "string",
                    id: 4
                  },
                  conditionType: {
                    type: "int32",
                    id: 5
                  },
                  conditionValue: {
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          LiftStyleList: {
            options: {
              objc_class_prefix: "LiftStyleList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "LiftStyle",
                    id: 1
                  }
                }
              },
              LiftStyle: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  img: {
                    type: "string",
                    id: 2
                  },
                  url: {
                    type: "string",
                    id: 3
                  },
                  sort: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          },
          MagicBoxProductDetail: {
            options: {
              objc_class_prefix: "MagicBoxProductDetail",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  boxId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  skuId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              Response: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  title: {
                    type: "string",
                    id: 10
                  },
                  systemTitle: {
                    type: "string",
                    id: 11
                  },
                  marketPrice: {
                    type: "int64",
                    id: 15
                  },
                  salePrice: {
                    type: "int64",
                    id: 20
                  },
                  type: {
                    type: "int32",
                    id: 25
                  },
                  mainPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 30
                  },
                  detailPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 35
                  },
                  skuPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 36
                  },
                  videoUrl: {
                    type: "string",
                    id: 40
                  },
                  videoCoverImage: {
                    type: "Component.Image",
                    id: 41
                  },
                  description: {
                    type: "string",
                    id: 45
                  },
                  descDetailPhotos: {
                    rule: "repeated",
                    type: "string",
                    id: 46
                  },
                  optionList: {
                    rule: "repeated",
                    type: "Option",
                    id: 50
                  },
                  mainImageInfos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 51
                  },
                  detailImageInfos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 52
                  },
                  skuImageInfos: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 53
                  },
                  descDetailImages: {
                    rule: "repeated",
                    type: "Component.Image",
                    id: 55
                  },
                  handle: {
                    type: "string",
                    id: 60
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
          MagicBoxProductInfo: {
            options: {
              objc_class_prefix: "MagicBoxProductInfo",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              ProductInfo: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  title: {
                    type: "string",
                    id: 10
                  },
                  systemTitle: {
                    type: "string",
                    id: 11
                  },
                  productImage: {
                    type: "string",
                    id: 15
                  },
                  marketPrice: {
                    type: "int64",
                    id: 20
                  },
                  salePrice: {
                    type: "int64",
                    id: 25
                  },
                  type: {
                    type: "int32",
                    id: 30
                  },
                  boxId: {
                    type: "int64",
                    id: 35
                  },
                  skuId: {
                    type: "int64",
                    id: 38
                  },
                  productImageInfo: {
                    type: "Component.Image",
                    id: 40
                  },
                  handle: {
                    type: "string",
                    id: 45
                  }
                }
              }
            }
          },
          MagicBoxProductList: {
            options: {
              objc_class_prefix: "MagicBoxProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  boxId: {
                    type: "int64",
                    id: 1
                  },
                  type: {
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
              },
              Response: {
                fields: {
                  total: {
                    type: "int32",
                    id: 10
                  },
                  pageNum: {
                    type: "int32",
                    id: 12
                  },
                  pageSize: {
                    type: "int32",
                    id: 13
                  },
                  productInfoList: {
                    rule: "repeated",
                    type: "App.Product.MagicBoxProductInfo.ProductInfo",
                    id: 20
                  }
                }
              }
            }
          },
          MidYearSalePromotion: {
            options: {
              objc_class_prefix: "MidYearSalePromotion",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  tagId: {
                    type: "int32",
                    id: 1
                  },
                  sortId: {
                    type: "string",
                    id: 2
                  },
                  sortType: {
                    type: "string",
                    id: 3
                  },
                  sortOrder: {
                    type: "string",
                    id: 4
                  },
                  size: {
                    type: "int32",
                    id: 5
                  }
                }
              },
              Response: {
                fields: {
                  promotionInfo: {
                    rule: "repeated",
                    type: "SalePromotion",
                    id: 1
                  },
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              },
              SalePromotion: {
                fields: {
                  imageUrl: {
                    type: "string",
                    id: 1
                  },
                  collectionId: {
                    type: "int64",
                    id: 2
                  },
                  collectionName: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          NavProductList: {
            options: {
              objc_class_prefix: "NavProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  navId: {
                    type: "int64",
                    id: 1
                  },
                  sortId: {
                    type: "string",
                    id: 11
                  },
                  pageSize: {
                    type: "int32",
                    id: 12
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  }
                }
              }
            }
          },
          PolicyAndAddrList: {
            options: {
              objc_class_prefix: "PolicyAndAddrList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  policyList: {
                    rule: "repeated",
                    type: "Policy",
                    id: 1
                  },
                  addr: {
                    type: "FooterAddr",
                    id: 2
                  }
                }
              },
              Policy: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "int32",
                    id: 3
                  },
                  policyTitle: {
                    type: "string",
                    id: 4
                  },
                  path: {
                    type: "string",
                    id: 5
                  },
                  url: {
                    type: "string",
                    id: 6
                  },
                  sort: {
                    type: "int32",
                    id: 7
                  }
                }
              },
              FooterAddr: {
                fields: {
                  title: {
                    type: "string",
                    id: 1
                  },
                  companyName: {
                    type: "string",
                    id: 2
                  },
                  companyAddr: {
                    type: "string",
                    id: 3
                  },
                  phone: {
                    type: "string",
                    id: 4
                  },
                  note: {
                    type: "string",
                    id: 5
                  },
                  disabled: {
                    type: "int32",
                    id: 6
                  }
                }
              }
            }
          },
          PolicyGetUrl: {
            options: {
              objc_class_prefix: "PolicyGetUrl",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  path: {
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
          SearchAdvertProduct: {
            options: {
              objc_class_prefix: "SearchAdvertProduct",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  spuIds: {
                    type: "string",
                    id: 2
                  },
                  sortType: {
                    type: "string",
                    id: 3
                  },
                  sortOrder: {
                    type: "string",
                    id: 4
                  },
                  newProduct: {
                    type: "bool",
                    id: 5
                  },
                  priceMin: {
                    type: "int64",
                    id: 6
                  },
                  priceMax: {
                    type: "int64",
                    id: 7
                  },
                  sortId: {
                    type: "string",
                    id: 8
                  },
                  size: {
                    type: "int32",
                    id: 9
                  },
                  type: {
                    type: "int32",
                    id: 20
                  },
                  data: {
                    type: "string",
                    id: 21
                  },
                  navId: {
                    type: "int64",
                    id: 22
                  },
                  action: {
                    type: "int32",
                    id: 23
                  },
                  navKey: {
                    type: "int64",
                    id: 24
                  },
                  pageNum: {
                    type: "int32",
                    id: 25
                  },
                  searchType: {
                    type: "string",
                    id: 40
                  }
                }
              },
              Response: {
                fields: {
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  },
                  saleTestList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          },
          SearchProduct: {
            options: {
              objc_class_prefix: "SearchProduct",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  searchContent: {
                    type: "string",
                    id: 1
                  },
                  sortType: {
                    type: "string",
                    id: 3
                  },
                  sortOrder: {
                    type: "string",
                    id: 4
                  },
                  newProduct: {
                    type: "bool",
                    id: 5
                  },
                  promotion: {
                    type: "bool",
                    id: 6
                  },
                  priceMin: {
                    type: "int64",
                    id: 7
                  },
                  priceMax: {
                    type: "int64",
                    id: 8
                  },
                  sortId: {
                    type: "string",
                    id: 9
                  },
                  size: {
                    type: "int32",
                    id: 10
                  },
                  type: {
                    type: "int32",
                    id: 11
                  },
                  data: {
                    type: "string",
                    id: 12
                  },
                  navId: {
                    type: "int64",
                    id: 13
                  },
                  action: {
                    type: "int32",
                    id: 14
                  },
                  conditionType: {
                    type: "int32",
                    id: 15
                  },
                  conditionVal: {
                    type: "string",
                    id: 16
                  },
                  navKey: {
                    type: "int64",
                    id: 17
                  },
                  collectionId: {
                    type: "int64",
                    id: 18
                  },
                  pageNum: {
                    type: "int32",
                    id: 31
                  },
                  positionKey: {
                    type: "int64",
                    id: 33
                  },
                  hotSearchKey: {
                    type: "string",
                    id: 34
                  }
                }
              },
              Response: {
                fields: {
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  },
                  saleTestList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          },
          UserRecentlyProductList: {
            options: {
              objc_class_prefix: "UserRecentlyProductList",
              java_package: "com.asiainno.hekka.proto.app.product"
            },
            nested: {
              Request: {
                fields: {
                  pageNum: {
                    type: "int32",
                    id: 3
                  },
                  pageSize: {
                    type: "int32",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  total: {
                    type: "int32",
                    id: 10
                  },
                  pageNum: {
                    type: "int32",
                    id: 12
                  },
                  pageSize: {
                    type: "int32",
                    id: 13
                  },
                  productInfoList: {
                    rule: "repeated",
                    type: "App.Product.MagicBoxProductInfo.ProductInfo",
                    id: 20
                  },
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 30
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  Component: {
    options: {
      objc_class_prefix: "Component",
      java_package: "com.asiainno.hekka.proto.common"
    },
    nested: {
      SpuInfo: {
        fields: {
          spuId: {
            type: "int64",
            id: 1
          },
          productId: {
            type: "int64",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          enTitle: {
            type: "string",
            id: 4
          },
          systemTitle: {
            type: "string",
            id: 5
          },
          enSystemTitle: {
            type: "string",
            id: 6
          },
          mainPhoto: {
            type: "Image",
            id: 7
          },
          videoUrl: {
            type: "string",
            id: 8
          },
          videoCover: {
            type: "Image",
            id: 9
          },
          skuId: {
            type: "int64",
            id: 10
          },
          salePrice: {
            type: "int64",
            id: 11
          },
          marketPrice: {
            type: "int64",
            id: 12
          },
          spuDiscount: {
            type: "int32",
            id: 13
          },
          rankInfo: {
            type: "NavRankInfo",
            id: 14
          },
          sortId: {
            type: "string",
            id: 15
          },
          categoryType: {
            type: "int32",
            id: 16
          },
          categoryId: {
            type: "int64",
            id: 17
          },
          categoryName: {
            type: "string",
            id: 18
          },
          sevenDaySales: {
            type: "int64",
            id: 19
          },
          onSaleTime: {
            type: "int64",
            id: 20
          },
          handle: {
            type: "string",
            id: 21
          },
          saleTestInfo: {
            type: "SaleTestInfo",
            id: 22
          },
          mainPhotoList: {
            rule: "repeated",
            type: "Image",
            id: 31
          },
          flashSaleInfo: {
            type: "FlashSaleInfo",
            id: 32
          },
          proTrendsInfo: {
            type: "ProductTrendsInfo",
            id: 35
          }
        }
      },
      Image: {
        fields: {
          url: {
            type: "string",
            id: 1
          },
          width: {
            type: "int32",
            id: 2
          },
          height: {
            type: "int32",
            id: 3
          },
          showType: {
            type: "int32",
            id: 4
          }
        }
      },
      NavRankInfo: {
        fields: {
          rank: {
            type: "int32",
            id: 1
          },
          navId: {
            type: "int64",
            id: 2
          },
          navName: {
            type: "string",
            id: 3
          },
          enNavName: {
            type: "string",
            id: 4
          },
          navIdString: {
            type: "string",
            id: 21
          }
        }
      },
      CountryInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          parentId: {
            type: "int64",
            id: 2
          },
          countryCode: {
            type: "string",
            id: 3
          },
          countryName: {
            type: "string",
            id: 4
          },
          childCountry: {
            rule: "repeated",
            type: "CountryInfo",
            id: 8
          }
        }
      },
      SaleTestInfo: {
        fields: {
          position: {
            type: "int32",
            id: 1
          },
          protocol: {
            type: "string",
            id: 2
          },
          photo: {
            type: "Image",
            id: 3
          },
          isSpu: {
            type: "bool",
            id: 4
          },
          traceTitle: {
            type: "string",
            id: 5
          }
        }
      },
      ProductTrendsInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          enName: {
            type: "string",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          },
          desc: {
            type: "string",
            id: 5
          },
          collectionId: {
            type: "int64",
            id: 6
          },
          idString: {
            type: "string",
            id: 21
          },
          collectionIdString: {
            type: "string",
            id: 22
          }
        }
      },
      FlashSaleInfo: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          salePrice: {
            type: "string",
            id: 2
          },
          discount: {
            type: "int32",
            id: 3
          },
          flashStatus: {
            type: "int32",
            id: 4
          }
        }
      }
    }
  },
  Product: {
    nested: {
      Category: {
        nested: {
          CategoryProductForward: {
            options: {
              objc_class_prefix: "CategoryProductForward",
              java_package: "com.asiainno.hekka.proto.product.category"
            },
            nested: {
              Request: {
                fields: {
                  oldCategory: {
                    type: "string",
                    id: 5
                  },
                  oldSpuIds: {
                    type: "string",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  navId: {
                    type: "string",
                    id: 1
                  },
                  newSpuIds: {
                    type: "string",
                    id: 2
                  },
                  newHandle: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          }
        }
      },
      Product: {
        nested: {
          ProductDetailForward: {
            options: {
              objc_class_prefix: "ProductDetailForward",
              java_package: "com.asiainno.hekka.proto.product.product"
            },
            nested: {
              Request: {
                fields: {
                  handle: {
                    type: "string",
                    id: 5
                  }
                }
              },
              Response: {
                fields: {
                  spuId: {
                    type: "string",
                    id: 1
                  },
                  newHandle: {
                    type: "string",
                    id: 3
                  },
                  host: {
                    type: "string",
                    id: 8
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
