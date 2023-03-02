/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  ActivityCodeInfo: {
    options: {
      objc_class_prefix: "ActivityCodeInfo",
      java_package: "com.asiainno.hekka.proto.common"
    },
    nested: {
      ActivityCodeInfo: {
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
          }
        }
      }
    }
  },
  Activity: {
    nested: {
      AppFeedback: {
        options: {
          objc_class_prefix: "AppFeedback",
          java_package: "com.asiainno.hekka.proto.activity.feedback"
        },
        nested: {
          Request: {
            fields: {
              platform: {
                type: "int32",
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
      AppFlashSale: {
        options: {
          objc_class_prefix: "AppFlashSale",
          java_package: "com.asiainno.hekka.proto.activity.flashSale"
        },
        nested: {
          AppFlashSale: {
            fields: {
              flashId: {
                type: "int64",
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
              title: {
                type: "string",
                id: 4
              },
              navList: {
                rule: "repeated",
                type: "AppFlashSaleNav.AppFlashSaleNav",
                id: 5
              },
              status: {
                type: "int32",
                id: 6
              }
            }
          }
        }
      },
      AppFlashSaleNav: {
        options: {
          objc_class_prefix: "AppFlashSaleNav",
          java_package: "com.asiainno.hekka.proto.activity.flashSale"
        },
        nested: {
          AppFlashSaleNav: {
            fields: {
              navId: {
                type: "int64",
                id: 1
              },
              navName: {
                type: "string",
                id: 2
              }
            }
          }
        }
      },
      AppFlashSaleIndex: {
        options: {
          objc_class_prefix: "AppFlashSaleIndex",
          java_package: "com.asiainno.hekka.proto.activity.flashSale"
        },
        nested: {
          Request: {
            fields: {}
          },
          Response: {
            fields: {
              startTime: {
                type: "int64",
                id: 1
              },
              endTime: {
                type: "int64",
                id: 2
              },
              title: {
                type: "string",
                id: 3
              },
              flashId: {
                type: "int64",
                id: 4
              },
              spuList: {
                rule: "repeated",
                type: "Component.SpuInfo",
                id: 5
              }
            }
          }
        }
      },
      AppFlashSaleList: {
        options: {
          objc_class_prefix: "AppFlashSaleList",
          java_package: "com.asiainno.hekka.proto.activity.flashSale"
        },
        nested: {
          Request: {
            fields: {}
          },
          Response: {
            fields: {
              flashSaleList: {
                rule: "repeated",
                type: "AppFlashSale.AppFlashSale",
                id: 2
              }
            }
          }
        }
      },
      AppFlashSaleSpuList: {
        options: {
          objc_class_prefix: "AppFlashSaleSpuList",
          java_package: "com.asiainno.hekka.proto.activity.flashSale"
        },
        nested: {
          Request: {
            fields: {
              navId: {
                type: "int64",
                id: 1
              },
              flashSaleId: {
                type: "int64",
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
              spuList: {
                rule: "repeated",
                type: "Component.SpuInfo",
                id: 1
              }
            }
          }
        }
      },
      BestSellers: {
        nested: {
          BestSellers: {
            options: {
              objc_class_prefix: "BestSellers",
              java_package: "com.asiainno.hekka.proto.activity.bestsellers"
            },
            nested: {
              Request: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  requiredBaseCates: {
                    type: "bool",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  baseCategoryList: {
                    rule: "repeated",
                    type: "BestSellersBaseCategory.BestSellersBaseCategory",
                    id: 1
                  },
                  secondaryCategoryList: {
                    rule: "repeated",
                    type: "BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory",
                    id: 2
                  }
                }
              }
            }
          },
          BestSellersBaseCategory: {
            options: {
              objc_class_prefix: "BestSellersBaseCategory",
              java_package: "com.asiainno.hekka.proto.activity.bestsellers"
            },
            nested: {
              BestSellersBaseCategory: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  baseCategoryName: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          BestSellersHotSecondaryCategory: {
            options: {
              objc_class_prefix: "BestSellersHotSecondaryCategory",
              java_package: "com.asiainno.hekka.proto.activity.bestsellers"
            },
            nested: {
              BestSellersHotSecondaryCategory: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  baseCategoryName: {
                    type: "string",
                    id: 2
                  },
                  secondaryCategoryId: {
                    type: "int64",
                    id: 3
                  },
                  secondaryCategoryName: {
                    type: "string",
                    id: 4
                  },
                  secondaryCategoryType: {
                    type: "string",
                    id: 5
                  },
                  orderCount: {
                    type: "int64",
                    id: 6
                  },
                  topNProducts: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 7
                  }
                }
              }
            }
          },
          BestSellersSecondaryCategoryTopNProductItem: {
            options: {
              objc_class_prefix: "BestSellersSecondaryCategoryTopNProductItem",
              java_package: "com.asiainno.hekka.proto.activity.bestsellers"
            },
            nested: {
              BestSellersSecondaryCategoryTopNProductItem: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 2
                  },
                  productImgLink: {
                    type: "string",
                    id: 3
                  },
                  productSalePrice: {
                    type: "int64",
                    id: 4
                  }
                }
              }
            }
          }
        }
      },
      Ranking: {
        nested: {
          H5Ranking: {
            options: {
              objc_class_prefix: "H5Ranking",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              Request: {
                fields: {
                  navId: {
                    type: "int64",
                    id: 1
                  },
                  requiredNav: {
                    type: "bool",
                    id: 2
                  },
                  requiredSubNav: {
                    type: "bool",
                    id: 3
                  },
                  pageFrom: {
                    type: "string",
                    id: 4
                  },
                  size: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  navList: {
                    rule: "repeated",
                    type: "RankingModuleInfo.NavInfo",
                    id: 1
                  },
                  subNavList: {
                    rule: "repeated",
                    type: "RankingModuleInfo.NavInfo",
                    id: 2
                  },
                  spuList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 3
                  },
                  parentNavId: {
                    type: "int64",
                    id: 4
                  }
                }
              }
            }
          },
          RankingModuleInfo: {
            options: {
              objc_class_prefix: "RankingModuleInfo",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              NavInfo: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  name: {
                    type: "string",
                    id: 2
                  },
                  parentId: {
                    type: "int64",
                    id: 3
                  },
                  title: {
                    type: "string",
                    id: 4
                  }
                }
              }
            }
          },
          Ranking: {
            options: {
              objc_class_prefix: "Ranking",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              Request: {
                fields: {
                  cateType: {
                    type: "string",
                    id: 1
                  },
                  secondaryCategoryId: {
                    type: "int64",
                    id: 2
                  },
                  requiredSubCates: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              Response: {
                fields: {
                  categoryList: {
                    rule: "repeated",
                    type: "RankingSecondaryCategory.RankingSecondaryCategory",
                    id: 1
                  },
                  productList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  },
                  cateType: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          RankingSecondaryCategory: {
            options: {
              objc_class_prefix: "RankingSecondaryCategory",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              RankingSecondaryCategory: {
                fields: {
                  secondaryCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  secondaryCategoryName: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          RankingTopNProduct: {
            options: {
              objc_class_prefix: "RankingTopNProduct",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              RankingTopNProduct: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  productSalePrice: {
                    type: "int64",
                    id: 3
                  },
                  productImgLink: {
                    type: "string",
                    id: 4
                  },
                  productSaleVolume: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          }
        }
      },
      HekkaRanking: {
        nested: {
          HekkaRankingSecondaryCategory: {
            options: {
              objc_class_prefix: "HekkaRankingSecondaryCategory",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              HekkaRankingSecondaryCategory: {
                fields: {
                  subCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  subCategoryName: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          HekkaRankingTopNProduct: {
            options: {
              objc_class_prefix: "HekkaRankingTopNProduct",
              java_package: "com.asiainno.hekka.proto.activity.ranking"
            },
            nested: {
              HekkaRankingTopNProduct: {
                fields: {
                  productId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  productSalePrice: {
                    type: "int64",
                    id: 3
                  },
                  productImgLink: {
                    type: "string",
                    id: 4
                  },
                  productSaleVolume: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          }
        }
      },
      HotSales: {
        nested: {
          HotSalesIndex: {
            options: {
              objc_class_prefix: "HotSalesIndex",
              java_package: "com.asiainno.hekka.proto.activity.hotsales"
            },
            nested: {
              Request: {
                fields: {
                  productBaseType: {
                    type: "int32",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  categoryList: {
                    rule: "repeated",
                    type: "HotSalesSecondaryCategory.HotSalesSecondaryCategory",
                    id: 1
                  }
                }
              }
            }
          },
          HotSalesSecondaryCategory: {
            options: {
              objc_class_prefix: "HotSalesSecondaryCategory",
              java_package: "com.asiainno.hekka.proto.activity.hotsales"
            },
            nested: {
              HotSalesSecondaryCategory: {
                fields: {
                  imgLink: {
                    type: "string",
                    id: 1
                  },
                  secondaryCategoryId: {
                    type: "int64",
                    id: 2
                  },
                  secondaryCategory: {
                    type: "string",
                    id: 3
                  },
                  baseCategoryId: {
                    type: "int64",
                    id: 4
                  },
                  orderCount: {
                    type: "int64",
                    id: 5
                  },
                  productId: {
                    type: "int64",
                    id: 6
                  }
                }
              }
            }
          }
        }
      },
      NewArrivals: {
        nested: {
          NewArrivals: {
            options: {
              objc_class_prefix: "NewArrivals",
              java_package: "com.asiainno.hekka.proto.activity.newarrivals"
            },
            nested: {
              Request: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  sortId: {
                    type: "string",
                    id: 2
                  },
                  pageSize: {
                    type: "int32",
                    id: 3
                  },
                  requiredBaseCates: {
                    type: "bool",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  baseCategoryList: {
                    rule: "repeated",
                    type: "NewArrivalsBaseCategory.NewArrivalsBaseCategory",
                    id: 1
                  },
                  topNOnSaleProductList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          },
          NewArrivalsBaseCategory: {
            options: {
              objc_class_prefix: "NewArrivalsBaseCategory",
              java_package: "com.asiainno.hekka.proto.activity.newarrivals"
            },
            nested: {
              NewArrivalsBaseCategory: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  baseCategoryName: {
                    type: "string",
                    id: 2
                  },
                  traceName: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          NewArrivalsTopNOnSaleProduct: {
            options: {
              objc_class_prefix: "NewArrivalsTopNOnSaleProduct",
              java_package: "com.asiainno.hekka.proto.activity.newarrivals"
            },
            nested: {
              NewArrivalsTopNOnSaleProduct: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  productImgLink: {
                    type: "string",
                    id: 3
                  },
                  productSalePrice: {
                    type: "int64",
                    id: 4
                  },
                  productMarketPrice: {
                    type: "int64",
                    id: 5
                  },
                  discount: {
                    type: "int64",
                    id: 6
                  },
                  onSaleTime: {
                    type: "int64",
                    id: 7
                  },
                  sortId: {
                    type: "string",
                    id: 8
                  },
                  ranks: {
                    rule: "repeated",
                    type: "NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank",
                    id: 9
                  }
                }
              }
            }
          },
          NewArrivalsTopNOnSaleProductRank: {
            options: {
              objc_class_prefix: "NewArrivalsTopNOnSaleProductRank",
              java_package: "com.asiainno.hekka.proto.activity.newarrivals"
            },
            nested: {
              NewArrivalsTopNOnSaleProductRank: {
                fields: {
                  cateId: {
                    type: "int64",
                    id: 1
                  },
                  rank: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          }
        }
      },
      Sales: {
        nested: {
          Sales: {
            options: {
              objc_class_prefix: "Sales",
              java_package: "com.asiainno.hekka.proto.activity.sales"
            },
            nested: {
              Request: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  sortId: {
                    type: "string",
                    id: 2
                  },
                  pageSize: {
                    type: "int32",
                    id: 3
                  },
                  requiredBaseCates: {
                    type: "bool",
                    id: 4
                  }
                }
              },
              Response: {
                fields: {
                  baseCategoryList: {
                    rule: "repeated",
                    type: "SalesBaseCategory.SalesBaseCategory",
                    id: 1
                  },
                  topNDiscountProductList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          },
          SalesBaseCategory: {
            options: {
              objc_class_prefix: "SalesBaseCategory",
              java_package: "com.asiainno.hekka.proto.activity.sales"
            },
            nested: {
              SalesBaseCategory: {
                fields: {
                  baseCategoryId: {
                    type: "int64",
                    id: 1
                  },
                  baseCategoryName: {
                    type: "string",
                    id: 2
                  },
                  traceName: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          SalesTopNDiscountProduct: {
            options: {
              objc_class_prefix: "SalesTopNDiscountProduct",
              java_package: "com.asiainno.hekka.proto.activity.sales"
            },
            nested: {
              SalesTopNDiscountProduct: {
                fields: {
                  spuId: {
                    type: "int64",
                    id: 1
                  },
                  productName: {
                    type: "string",
                    id: 2
                  },
                  productImgLink: {
                    type: "string",
                    id: 3
                  },
                  productSalePrice: {
                    type: "int64",
                    id: 4
                  },
                  productMarketPrice: {
                    type: "int64",
                    id: 5
                  },
                  discount: {
                    type: "int32",
                    id: 6
                  },
                  sortId: {
                    type: "string",
                    id: 7
                  },
                  ranks: {
                    rule: "repeated",
                    type: "SalesTopNDiscountProductRank.SalesTopNDiscountProductRank",
                    id: 8
                  }
                }
              }
            }
          },
          SalesTopNDiscountProductRank: {
            options: {
              objc_class_prefix: "SalesTopNDiscountProductRank",
              java_package: "com.asiainno.hekka.proto.activity.sales"
            },
            nested: {
              SalesTopNDiscountProductRank: {
                fields: {
                  cateId: {
                    type: "int64",
                    id: 1
                  },
                  rank: {
                    type: "int32",
                    id: 2
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
  App: {
    nested: {
      Acitivity: {
        nested: {
          AppNewUserZone: {
            options: {
              objc_class_prefix: "AppNewUserZone",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  sortId: {
                    type: "string",
                    id: 1
                  },
                  hasZoneInfo: {
                    type: "bool",
                    id: 2
                  },
                  platform: {
                    type: "int32",
                    id: 3
                  },
                  countryCode: {
                    type: "string",
                    id: 4
                  },
                  spuId: {
                    type: "int64",
                    id: 5
                  },
                  pageSize: {
                    type: "int32",
                    id: 10
                  },
                  dataSetPlatform: {
                    type: "int32",
                    id: 11
                  }
                }
              },
              Response: {
                fields: {
                  codeInfo: {
                    type: "CodeInfo",
                    id: 1
                  },
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  },
                  imgUrl: {
                    type: "string",
                    id: 3
                  }
                }
              },
              ZoneInfo: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  startTime: {
                    type: "int64",
                    id: 2
                  },
                  endTime: {
                    type: "int64",
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
                  dateSettingType: {
                    type: "int32",
                    id: 8
                  },
                  duration: {
                    type: "int32",
                    id: 9
                  }
                }
              }
            }
          },
          AppNewUserZoneCodeInfo: {
            options: {
              objc_class_prefix: "AppNewUserZoneCodeInfo",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  platform: {
                    type: "int32",
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
                  CodeDetail: {
                    type: "CodeDetail",
                    id: 1
                  }
                }
              },
              CodeDetail: {
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
                  dateSettingType: {
                    type: "int32",
                    id: 8
                  },
                  duration: {
                    type: "int32",
                    id: 9
                  }
                }
              }
            }
          },
          BannerPosition: {
            options: {
              objc_class_prefix: "BannerPosotion",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  position: {
                    type: "int32",
                    id: 1
                  },
                  platform: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  topBannerList: {
                    rule: "repeated",
                    type: "Banner",
                    id: 1
                  },
                  bottomBannerList: {
                    rule: "repeated",
                    type: "Banner",
                    id: 2
                  },
                  mainPositionList: {
                    rule: "repeated",
                    type: "MainPosition",
                    id: 3
                  }
                }
              },
              Banner: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  imgUrl: {
                    type: "string",
                    id: 2
                  },
                  protocol: {
                    type: "string",
                    id: 3
                  },
                  title: {
                    type: "string",
                    id: 4
                  }
                }
              },
              MainPosition: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  imgUrl: {
                    type: "string",
                    id: 2
                  },
                  title: {
                    type: "string",
                    id: 3
                  },
                  protocol: {
                    type: "string",
                    id: 4
                  },
                  traceName: {
                    type: "string",
                    id: 5
                  }
                }
              }
            }
          },
          CouponCodeListForProductDetail: {
            options: {
              objc_class_prefix: "CouponCodeListForProductDetail",
              java_package: "com.asiainno.hekka.proto.app.activity"
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
                  list: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  }
                }
              }
            }
          },
          CommonPopup: {
            options: {
              objc_class_prefix: "CommonPopup",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  platform: {
                    type: "int32",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  couponPopup: {
                    type: "CouponPopup",
                    id: 1
                  },
                  newUserZoneList: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 2
                  }
                }
              },
              CouponPopup: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  },
                  claimText: {
                    type: "string",
                    id: 2
                  },
                  claimedText: {
                    type: "string",
                    id: 3
                  },
                  hasNewUserZone: {
                    type: "bool",
                    id: 4
                  },
                  linkUrl: {
                    type: "string",
                    id: 5
                  }
                }
              }
            }
          },
          CouponCodeForNewUser: {
            options: {
              objc_class_prefix: "CouponCodeForNewUser",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  }
                }
              }
            }
          },
          CouponPopupIndex: {
            options: {
              objc_class_prefix: "CouponPopupIndex",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  },
                  claimText: {
                    type: "string",
                    id: 2
                  },
                  claimedText: {
                    type: "string",
                    id: 3
                  },
                  hasNewUserZone: {
                    type: "bool",
                    id: 4
                  }
                }
              }
            }
          },
          DiscountForProductDetail: {
            options: {
              objc_class_prefix: "DiscountForProductDetail",
              java_package: "com.asiainno.hekka.proto.app.activity"
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
                  couponList: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  },
                  specialOfferList: {
                    rule: "repeated",
                    type: "SpecialOfferInfo.SpecialOfferInfo",
                    id: 2
                  }
                }
              }
            }
          },
          HomeCommonInfo: {
            options: {
              objc_class_prefix: "HomeCommonInfo",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  topBar: {
                    type: "NotificationBar",
                    id: 1
                  },
                  freeShippingByCart: {
                    type: "NotificationBar",
                    id: 2
                  },
                  freeShippingDay: {
                    type: "NotificationBar",
                    id: 3
                  }
                }
              },
              NotificationBar: {
                fields: {
                  imgUrl: {
                    type: "string",
                    id: 1
                  },
                  linkUrl: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          HomeRecommendTag: {
            options: {
              objc_class_prefix: "HomeRecommendTag",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  sortId: {
                    type: "string",
                    id: 1
                  },
                  sortId3c: {
                    type: "string",
                    id: 2
                  },
                  tagId: {
                    type: "int64",
                    id: 3
                  },
                  hasTag: {
                    type: "bool",
                    id: 4
                  },
                  isFirstTag: {
                    type: "bool",
                    id: 5
                  },
                  pageSize: {
                    type: "int32",
                    id: 6
                  },
                  pageNum: {
                    type: "int32",
                    id: 7
                  },
                  platform: {
                    type: "int32",
                    id: 8
                  }
                }
              },
              Response: {
                fields: {
                  tagList: {
                    rule: "repeated",
                    type: "Tag",
                    id: 1
                  },
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  },
                  sortId: {
                    type: "string",
                    id: 3
                  },
                  sortId3c: {
                    type: "string",
                    id: 4
                  },
                  saleTestList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 5
                  }
                }
              },
              Tag: {
                fields: {
                  tagId: {
                    type: "int64",
                    id: 1
                  },
                  traceName: {
                    type: "string",
                    id: 2
                  },
                  title: {
                    type: "string",
                    id: 3
                  },
                  justForYou: {
                    type: "bool",
                    id: 4
                  }
                }
              }
            }
          },
          RecommendCommonTag: {
            options: {
              objc_class_prefix: "RecommendCommonTag",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  sortId: {
                    type: "string",
                    id: 1
                  },
                  tagId: {
                    type: "int64",
                    id: 2
                  },
                  hasTag: {
                    type: "bool",
                    id: 3
                  },
                  platform: {
                    type: "int32",
                    id: 4
                  },
                  position: {
                    type: "int32",
                    id: 5
                  },
                  pageSize: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              Response: {
                fields: {
                  tagList: {
                    rule: "repeated",
                    type: "Tag",
                    id: 1
                  },
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              },
              Tag: {
                fields: {
                  tagId: {
                    type: "int64",
                    id: 1
                  },
                  tagName: {
                    type: "string",
                    id: 2
                  },
                  traceName: {
                    type: "string",
                    id: 3
                  }
                }
              }
            }
          },
          UserCouponCodeList: {
            options: {
              objc_class_prefix: "UserCouponCodeList",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  dataType: {
                    type: "int32",
                    id: 1
                  },
                  page: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  list: {
                    rule: "repeated",
                    type: "ActivityCodeInfo.ActivityCodeInfo",
                    id: 1
                  }
                }
              }
            }
          },
          UserCouponCodeNum: {
            options: {
              objc_class_prefix: "UserCouponCodeNum",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {}
              },
              Response: {
                fields: {
                  num: {
                    type: "int32",
                    id: 1
                  }
                }
              }
            }
          }
        }
      },
      Pages: {
        nested: {
          PagesInfo: {
            options: {
              objc_class_prefix: "PagesInfo",
              java_package: "com.asiainno.hekka.proto.app.pages"
            },
            nested: {
              PagesTab: {
                fields: {
                  detailId: {
                    type: "int64",
                    id: 1
                  },
                  tabName: {
                    type: "string",
                    id: 2
                  }
                }
              },
              PagesBanner: {
                fields: {
                  detailId: {
                    type: "int64",
                    id: 1
                  },
                  img: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          PagesNav: {
            options: {
              objc_class_prefix: "PagesNav",
              java_package: "com.asiainno.hekka.proto.app.pages"
            },
            nested: {
              Request: {
                fields: {
                  pageCode: {
                    type: "int32",
                    id: 1
                  },
                  preview: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  pageCode: {
                    type: "int32",
                    id: 1
                  },
                  title: {
                    type: "string",
                    id: 2
                  },
                  dataTag: {
                    type: "string",
                    id: 7
                  },
                  tabType: {
                    type: "int32",
                    id: 8
                  },
                  traceTitle: {
                    type: "string",
                    id: 10
                  },
                  imgs: {
                    rule: "repeated",
                    type: "PagesBanner",
                    id: 3
                  },
                  tabs: {
                    rule: "repeated",
                    type: "PagesTab",
                    id: 4
                  }
                }
              },
              PagesTab: {
                fields: {
                  detailId: {
                    type: "int64",
                    id: 1
                  },
                  tabName: {
                    type: "string",
                    id: 2
                  },
                  traceTitle: {
                    type: "string",
                    id: 3
                  },
                  dataType: {
                    type: "int32",
                    id: 4
                  },
                  dataSet: {
                    type: "string",
                    id: 5
                  }
                }
              },
              PagesBanner: {
                fields: {
                  detailId: {
                    type: "int64",
                    id: 1
                  },
                  img: {
                    type: "string",
                    id: 2
                  },
                  traceTitle: {
                    type: "string",
                    id: 3
                  },
                  dataType: {
                    type: "int32",
                    id: 4
                  },
                  dataSet: {
                    type: "string",
                    id: 5
                  }
                }
              }
            }
          },
          PagesNavProducts: {
            options: {
              objc_class_prefix: "PagesNavProducts",
              java_package: "com.asiainno.hekka.proto.app.pages"
            },
            nested: {
              Request: {
                fields: {
                  sortId: {
                    type: "string",
                    id: 1
                  },
                  detailId: {
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
                  size: {
                    type: "int32",
                    id: 10
                  },
                  topSpuIds: {
                    rule: "repeated",
                    type: "int64",
                    id: 11
                  }
                }
              },
              Response: {
                fields: {
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 2
                  }
                }
              }
            }
          }
        }
      },
      SpecialOffer: {
        nested: {
          SpecialOfferDetail: {
            options: {
              objc_class_prefix: "SpecialOfferDetail",
              java_package: "com.asiainno.hekka.proto.app.specialoffer"
            },
            nested: {
              Request: {
                fields: {
                  offerId: {
                    type: "int64",
                    id: 1
                  }
                }
              },
              Response: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  type: {
                    type: "string",
                    id: 2
                  },
                  title: {
                    type: "string",
                    id: 5
                  },
                  discountList: {
                    rule: "repeated",
                    type: "SpecialOfferDiscount",
                    id: 12
                  }
                }
              },
              SpecialOfferDiscount: {
                fields: {
                  offerDiscountId: {
                    type: "int64",
                    id: 1
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  totalPrice: {
                    type: "int32",
                    id: 6
                  },
                  reduce: {
                    type: "int32",
                    id: 8
                  },
                  discount: {
                    type: "int32",
                    id: 10
                  }
                }
              }
            }
          },
          SpecialOfferListBySpu: {
            options: {
              objc_class_prefix: "SpecialOfferListBySpu",
              java_package: "com.asiainno.hekka.proto.app.specialoffer"
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
                  list: {
                    rule: "repeated",
                    type: "SpecialOffer",
                    id: 2
                  }
                }
              },
              SpecialOffer: {
                fields: {
                  id: {
                    type: "int64",
                    id: 1
                  },
                  idString: {
                    type: "string",
                    id: 3
                  },
                  type: {
                    type: "string",
                    id: 2
                  },
                  title: {
                    type: "string",
                    id: 5
                  },
                  showTitle: {
                    type: "string",
                    id: 9
                  },
                  discountList: {
                    rule: "repeated",
                    type: "SpecialOfferDiscount",
                    id: 12
                  }
                }
              },
              SpecialOfferDiscount: {
                fields: {
                  offerDiscountId: {
                    type: "int64",
                    id: 1
                  },
                  offerDiscountIdString: {
                    type: "string",
                    id: 2
                  },
                  quantity: {
                    type: "int32",
                    id: 4
                  },
                  totalPrice: {
                    type: "int32",
                    id: 6
                  },
                  reduce: {
                    type: "int32",
                    id: 8
                  },
                  discount: {
                    type: "int32",
                    id: 10
                  }
                }
              }
            }
          }
        }
      },
      Activity: {
        nested: {
          SpuListByDataSet: {
            options: {
              objc_class_prefix: "SpuListByDataSet",
              java_package: "com.asiainno.hekka.proto.app.activity"
            },
            nested: {
              Request: {
                fields: {
                  type: {
                    type: "int32",
                    id: 1
                  },
                  data: {
                    type: "string",
                    id: 2
                  },
                  sortId: {
                    type: "string",
                    id: 3
                  },
                  sortByRecommend: {
                    type: "int32",
                    id: 4
                  },
                  sortByTopSale: {
                    type: "int32",
                    id: 5
                  },
                  sortByPrice: {
                    type: "int32",
                    id: 6
                  },
                  size: {
                    type: "int32",
                    id: 10
                  }
                }
              },
              Response: {
                fields: {
                  spuInfoList: {
                    rule: "repeated",
                    type: "Component.SpuInfo",
                    id: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  SpecialOfferInfo: {
    options: {
      objc_class_prefix: "SpecialOfferInfo",
      java_package: "com.asiainno.hekka.proto.common"
    },
    nested: {
      SpecialOfferInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          idString: {
            type: "string",
            id: 3
          },
          type: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 5
          },
          showTitle: {
            type: "string",
            id: 9
          },
          discountList: {
            rule: "repeated",
            type: "SpecialOfferDiscountInfo",
            id: 12
          }
        }
      },
      SpecialOfferDiscountInfo: {
        fields: {
          offerDiscountId: {
            type: "int64",
            id: 1
          },
          offerDiscountIdString: {
            type: "string",
            id: 2
          },
          quantity: {
            type: "int32",
            id: 4
          },
          totalPrice: {
            type: "int32",
            id: 6
          },
          reduce: {
            type: "int32",
            id: 8
          },
          discount: {
            type: "int32",
            id: 10
          }
        }
      }
    }
  }
});

module.exports = $root;
