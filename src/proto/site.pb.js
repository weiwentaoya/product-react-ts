/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  App: {
    nested: {
      Site: {
        nested: {
          AppShippingDetail: {
            options: {
              objc_class_prefix: "AppShippingDetail",
              java_package: "com.asiainno.hekka.proto.app.site"
            },
            nested: {
              Request: {
                fields: {
                  country: {
                    type: "string",
                    id: 1
                  },
                  spuId: {
                    type: "int64",
                    id: 8
                  }
                }
              },
              Response: {
                fields: {
                  freeShippingInfo: {
                    type: "ShippingDetailModuleInfo.ShippingDetailInfo",
                    id: 1
                  },
                  templateId: {
                    type: "int64",
                    id: 2
                  },
                  collectionId: {
                    type: "int64",
                    id: 3
                  },
                  shippingInfoList: {
                    rule: "repeated",
                    type: "ShippingDetailModuleInfo.ShippingDetailInfo",
                    id: 4
                  }
                }
              }
            }
          },
          ShippingDetailModuleInfo: {
            options: {
              objc_class_prefix: "ShippingDetailModuleInfo",
              java_package: "com.asiainno.hekka.proto.app.site"
            },
            nested: {
              ShippingDetailInfo: {
                fields: {
                  countryCode: {
                    type: "string",
                    id: 1
                  },
                  shippingMethod: {
                    type: "string",
                    id: 2
                  },
                  minOrderPrice: {
                    type: "int64",
                    id: 3
                  },
                  maxOrderPrice: {
                    type: "int64",
                    id: 4
                  },
                  cost: {
                    type: "int64",
                    id: 5
                  }
                }
              }
            }
          },
          ShippingCountryInfo: {
            options: {
              objc_class_prefix: "ShippingCountryInfo",
              java_package: "com.asiainno.hekka.proto.app.site"
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
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          },
          ShippingProductList: {
            options: {
              objc_class_prefix: "ShippingProductList",
              java_package: "com.asiainno.hekka.proto.app.site"
            },
            nested: {
              Request: {
                fields: {
                  templateId: {
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
  Site: {
    nested: {
      NationalStoreLanguageList: {
        options: {
          objc_class_prefix: "NationalStoreLanguageList",
          java_package: "com.asiainno.hekka.proto.app.site"
        },
        nested: {
          Request: {
            fields: {}
          },
          Response: {
            fields: {
              list: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
