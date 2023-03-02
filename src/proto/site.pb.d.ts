import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Site. */
    namespace Site {

        /** Namespace AppShippingDetail. */
        namespace AppShippingDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request country */
                country?: (string|null);

                /** Request spuId */
                spuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.AppShippingDetail.IRequest);

                /** Request country. */
                public country: string;

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Site.AppShippingDetail.IRequest): App.Site.AppShippingDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Site.AppShippingDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.AppShippingDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Site.AppShippingDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.AppShippingDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.AppShippingDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.AppShippingDetail.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.AppShippingDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.AppShippingDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response freeShippingInfo */
                freeShippingInfo?: (App.Site.ShippingDetailModuleInfo.IShippingDetailInfo|null);

                /** Response templateId */
                templateId?: (number|Long|null);

                /** Response collectionId */
                collectionId?: (number|Long|null);

                /** Response shippingInfoList */
                shippingInfoList?: (App.Site.ShippingDetailModuleInfo.IShippingDetailInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.AppShippingDetail.IResponse);

                /** Response freeShippingInfo. */
                public freeShippingInfo?: (App.Site.ShippingDetailModuleInfo.IShippingDetailInfo|null);

                /** Response templateId. */
                public templateId: (number|Long);

                /** Response collectionId. */
                public collectionId: (number|Long);

                /** Response shippingInfoList. */
                public shippingInfoList: App.Site.ShippingDetailModuleInfo.IShippingDetailInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Site.AppShippingDetail.IResponse): App.Site.AppShippingDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Site.AppShippingDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.AppShippingDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Site.AppShippingDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.AppShippingDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.AppShippingDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.AppShippingDetail.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.AppShippingDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.AppShippingDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ShippingDetailModuleInfo. */
        namespace ShippingDetailModuleInfo {

            /** Properties of a ShippingDetailInfo. */
            interface IShippingDetailInfo {

                /** ShippingDetailInfo countryCode */
                countryCode?: (string|null);

                /** ShippingDetailInfo shippingMethod */
                shippingMethod?: (string|null);

                /** ShippingDetailInfo minOrderPrice */
                minOrderPrice?: (number|Long|null);

                /** ShippingDetailInfo maxOrderPrice */
                maxOrderPrice?: (number|Long|null);

                /** ShippingDetailInfo cost */
                cost?: (number|Long|null);
            }

            /** Represents a ShippingDetailInfo. */
            class ShippingDetailInfo implements IShippingDetailInfo {

                /**
                 * Constructs a new ShippingDetailInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.ShippingDetailModuleInfo.IShippingDetailInfo);

                /** ShippingDetailInfo countryCode. */
                public countryCode: string;

                /** ShippingDetailInfo shippingMethod. */
                public shippingMethod: string;

                /** ShippingDetailInfo minOrderPrice. */
                public minOrderPrice: (number|Long);

                /** ShippingDetailInfo maxOrderPrice. */
                public maxOrderPrice: (number|Long);

                /** ShippingDetailInfo cost. */
                public cost: (number|Long);

                /**
                 * Creates a new ShippingDetailInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShippingDetailInfo instance
                 */
                public static create(properties?: App.Site.ShippingDetailModuleInfo.IShippingDetailInfo): App.Site.ShippingDetailModuleInfo.ShippingDetailInfo;

                /**
                 * Encodes the specified ShippingDetailInfo message. Does not implicitly {@link App.Site.ShippingDetailModuleInfo.ShippingDetailInfo.verify|verify} messages.
                 * @param message ShippingDetailInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.ShippingDetailModuleInfo.IShippingDetailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShippingDetailInfo message, length delimited. Does not implicitly {@link App.Site.ShippingDetailModuleInfo.ShippingDetailInfo.verify|verify} messages.
                 * @param message ShippingDetailInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.ShippingDetailModuleInfo.IShippingDetailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShippingDetailInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShippingDetailInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.ShippingDetailModuleInfo.ShippingDetailInfo;

                /**
                 * Decodes a ShippingDetailInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShippingDetailInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.ShippingDetailModuleInfo.ShippingDetailInfo;

                /**
                 * Verifies a ShippingDetailInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShippingDetailInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShippingDetailInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.ShippingDetailModuleInfo.ShippingDetailInfo;

                /**
                 * Creates a plain object from a ShippingDetailInfo message. Also converts values to other types if specified.
                 * @param message ShippingDetailInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.ShippingDetailModuleInfo.ShippingDetailInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShippingDetailInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ShippingCountryInfo. */
        namespace ShippingCountryInfo {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.ShippingCountryInfo.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Site.ShippingCountryInfo.IRequest): App.Site.ShippingCountryInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Site.ShippingCountryInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.ShippingCountryInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Site.ShippingCountryInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.ShippingCountryInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.ShippingCountryInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.ShippingCountryInfo.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.ShippingCountryInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.ShippingCountryInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (string[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.ShippingCountryInfo.IResponse);

                /** Response list. */
                public list: string[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Site.ShippingCountryInfo.IResponse): App.Site.ShippingCountryInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Site.ShippingCountryInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.ShippingCountryInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Site.ShippingCountryInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.ShippingCountryInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.ShippingCountryInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.ShippingCountryInfo.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.ShippingCountryInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.ShippingCountryInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ShippingProductList. */
        namespace ShippingProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request templateId */
                templateId?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.ShippingProductList.IRequest);

                /** Request templateId. */
                public templateId: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Site.ShippingProductList.IRequest): App.Site.ShippingProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Site.ShippingProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.ShippingProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Site.ShippingProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.ShippingProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.ShippingProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.ShippingProductList.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.ShippingProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.ShippingProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Site.ShippingProductList.IResponse);

                /** Response list. */
                public list: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Site.ShippingProductList.IResponse): App.Site.ShippingProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Site.ShippingProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Site.ShippingProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Site.ShippingProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Site.ShippingProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Site.ShippingProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Site.ShippingProductList.Response;

                /**
                 * Verifies a Response message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Response
                 */
                public static fromObject(object: { [k: string]: any }): App.Site.ShippingProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Site.ShippingProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace Component. */
export namespace Component {

    /** Properties of a SpuInfo. */
    interface ISpuInfo {

        /** SpuInfo spuId */
        spuId?: (number|Long|null);

        /** SpuInfo productId */
        productId?: (number|Long|null);

        /** SpuInfo title */
        title?: (string|null);

        /** SpuInfo enTitle */
        enTitle?: (string|null);

        /** SpuInfo systemTitle */
        systemTitle?: (string|null);

        /** SpuInfo enSystemTitle */
        enSystemTitle?: (string|null);

        /** SpuInfo mainPhoto */
        mainPhoto?: (Component.IImage|null);

        /** SpuInfo videoUrl */
        videoUrl?: (string|null);

        /** SpuInfo videoCover */
        videoCover?: (Component.IImage|null);

        /** SpuInfo skuId */
        skuId?: (number|Long|null);

        /** SpuInfo salePrice */
        salePrice?: (number|Long|null);

        /** SpuInfo marketPrice */
        marketPrice?: (number|Long|null);

        /** SpuInfo spuDiscount */
        spuDiscount?: (number|null);

        /** SpuInfo rankInfo */
        rankInfo?: (Component.INavRankInfo|null);

        /** SpuInfo sortId */
        sortId?: (string|null);

        /** SpuInfo categoryType */
        categoryType?: (number|null);

        /** SpuInfo categoryId */
        categoryId?: (number|Long|null);

        /** SpuInfo categoryName */
        categoryName?: (string|null);

        /** SpuInfo sevenDaySales */
        sevenDaySales?: (number|Long|null);

        /** SpuInfo onSaleTime */
        onSaleTime?: (number|Long|null);

        /** SpuInfo handle */
        handle?: (string|null);

        /** SpuInfo saleTestInfo */
        saleTestInfo?: (Component.ISaleTestInfo|null);

        /** SpuInfo mainPhotoList */
        mainPhotoList?: (Component.IImage[]|null);

        /** SpuInfo flashSaleInfo */
        flashSaleInfo?: (Component.IFlashSaleInfo|null);

        /** SpuInfo proTrendsInfo */
        proTrendsInfo?: (Component.IProductTrendsInfo|null);
    }

    /** Represents a SpuInfo. */
    class SpuInfo implements ISpuInfo {

        /**
         * Constructs a new SpuInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.ISpuInfo);

        /** SpuInfo spuId. */
        public spuId: (number|Long);

        /** SpuInfo productId. */
        public productId: (number|Long);

        /** SpuInfo title. */
        public title: string;

        /** SpuInfo enTitle. */
        public enTitle: string;

        /** SpuInfo systemTitle. */
        public systemTitle: string;

        /** SpuInfo enSystemTitle. */
        public enSystemTitle: string;

        /** SpuInfo mainPhoto. */
        public mainPhoto?: (Component.IImage|null);

        /** SpuInfo videoUrl. */
        public videoUrl: string;

        /** SpuInfo videoCover. */
        public videoCover?: (Component.IImage|null);

        /** SpuInfo skuId. */
        public skuId: (number|Long);

        /** SpuInfo salePrice. */
        public salePrice: (number|Long);

        /** SpuInfo marketPrice. */
        public marketPrice: (number|Long);

        /** SpuInfo spuDiscount. */
        public spuDiscount: number;

        /** SpuInfo rankInfo. */
        public rankInfo?: (Component.INavRankInfo|null);

        /** SpuInfo sortId. */
        public sortId: string;

        /** SpuInfo categoryType. */
        public categoryType: number;

        /** SpuInfo categoryId. */
        public categoryId: (number|Long);

        /** SpuInfo categoryName. */
        public categoryName: string;

        /** SpuInfo sevenDaySales. */
        public sevenDaySales: (number|Long);

        /** SpuInfo onSaleTime. */
        public onSaleTime: (number|Long);

        /** SpuInfo handle. */
        public handle: string;

        /** SpuInfo saleTestInfo. */
        public saleTestInfo?: (Component.ISaleTestInfo|null);

        /** SpuInfo mainPhotoList. */
        public mainPhotoList: Component.IImage[];

        /** SpuInfo flashSaleInfo. */
        public flashSaleInfo?: (Component.IFlashSaleInfo|null);

        /** SpuInfo proTrendsInfo. */
        public proTrendsInfo?: (Component.IProductTrendsInfo|null);

        /**
         * Creates a new SpuInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpuInfo instance
         */
        public static create(properties?: Component.ISpuInfo): Component.SpuInfo;

        /**
         * Encodes the specified SpuInfo message. Does not implicitly {@link Component.SpuInfo.verify|verify} messages.
         * @param message SpuInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.ISpuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpuInfo message, length delimited. Does not implicitly {@link Component.SpuInfo.verify|verify} messages.
         * @param message SpuInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.ISpuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpuInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.SpuInfo;

        /**
         * Decodes a SpuInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpuInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.SpuInfo;

        /**
         * Verifies a SpuInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpuInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpuInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.SpuInfo;

        /**
         * Creates a plain object from a SpuInfo message. Also converts values to other types if specified.
         * @param message SpuInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.SpuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpuInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Image. */
    interface IImage {

        /** Image url */
        url?: (string|null);

        /** Image width */
        width?: (number|null);

        /** Image height */
        height?: (number|null);

        /** Image showType */
        showType?: (number|null);
    }

    /** Represents an Image. */
    class Image implements IImage {

        /**
         * Constructs a new Image.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.IImage);

        /** Image url. */
        public url: string;

        /** Image width. */
        public width: number;

        /** Image height. */
        public height: number;

        /** Image showType. */
        public showType: number;

        /**
         * Creates a new Image instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Image instance
         */
        public static create(properties?: Component.IImage): Component.Image;

        /**
         * Encodes the specified Image message. Does not implicitly {@link Component.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link Component.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.Image;

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.Image;

        /**
         * Verifies an Image message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Image
         */
        public static fromObject(object: { [k: string]: any }): Component.Image;

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @param message Image
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Image to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NavRankInfo. */
    interface INavRankInfo {

        /** NavRankInfo rank */
        rank?: (number|null);

        /** NavRankInfo navId */
        navId?: (number|Long|null);

        /** NavRankInfo navName */
        navName?: (string|null);

        /** NavRankInfo enNavName */
        enNavName?: (string|null);

        /** NavRankInfo navIdString */
        navIdString?: (string|null);
    }

    /** Represents a NavRankInfo. */
    class NavRankInfo implements INavRankInfo {

        /**
         * Constructs a new NavRankInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.INavRankInfo);

        /** NavRankInfo rank. */
        public rank: number;

        /** NavRankInfo navId. */
        public navId: (number|Long);

        /** NavRankInfo navName. */
        public navName: string;

        /** NavRankInfo enNavName. */
        public enNavName: string;

        /** NavRankInfo navIdString. */
        public navIdString: string;

        /**
         * Creates a new NavRankInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NavRankInfo instance
         */
        public static create(properties?: Component.INavRankInfo): Component.NavRankInfo;

        /**
         * Encodes the specified NavRankInfo message. Does not implicitly {@link Component.NavRankInfo.verify|verify} messages.
         * @param message NavRankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.INavRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NavRankInfo message, length delimited. Does not implicitly {@link Component.NavRankInfo.verify|verify} messages.
         * @param message NavRankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.INavRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NavRankInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NavRankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.NavRankInfo;

        /**
         * Decodes a NavRankInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NavRankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.NavRankInfo;

        /**
         * Verifies a NavRankInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NavRankInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NavRankInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.NavRankInfo;

        /**
         * Creates a plain object from a NavRankInfo message. Also converts values to other types if specified.
         * @param message NavRankInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.NavRankInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NavRankInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CountryInfo. */
    interface ICountryInfo {

        /** CountryInfo id */
        id?: (number|Long|null);

        /** CountryInfo parentId */
        parentId?: (number|Long|null);

        /** CountryInfo countryCode */
        countryCode?: (string|null);

        /** CountryInfo countryName */
        countryName?: (string|null);

        /** CountryInfo childCountry */
        childCountry?: (Component.ICountryInfo[]|null);
    }

    /** Represents a CountryInfo. */
    class CountryInfo implements ICountryInfo {

        /**
         * Constructs a new CountryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.ICountryInfo);

        /** CountryInfo id. */
        public id: (number|Long);

        /** CountryInfo parentId. */
        public parentId: (number|Long);

        /** CountryInfo countryCode. */
        public countryCode: string;

        /** CountryInfo countryName. */
        public countryName: string;

        /** CountryInfo childCountry. */
        public childCountry: Component.ICountryInfo[];

        /**
         * Creates a new CountryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CountryInfo instance
         */
        public static create(properties?: Component.ICountryInfo): Component.CountryInfo;

        /**
         * Encodes the specified CountryInfo message. Does not implicitly {@link Component.CountryInfo.verify|verify} messages.
         * @param message CountryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.ICountryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CountryInfo message, length delimited. Does not implicitly {@link Component.CountryInfo.verify|verify} messages.
         * @param message CountryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.ICountryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CountryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CountryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.CountryInfo;

        /**
         * Decodes a CountryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CountryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.CountryInfo;

        /**
         * Verifies a CountryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CountryInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CountryInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.CountryInfo;

        /**
         * Creates a plain object from a CountryInfo message. Also converts values to other types if specified.
         * @param message CountryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.CountryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CountryInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SaleTestInfo. */
    interface ISaleTestInfo {

        /** SaleTestInfo position */
        position?: (number|null);

        /** SaleTestInfo protocol */
        protocol?: (string|null);

        /** SaleTestInfo photo */
        photo?: (Component.IImage|null);

        /** SaleTestInfo isSpu */
        isSpu?: (boolean|null);

        /** SaleTestInfo traceTitle */
        traceTitle?: (string|null);
    }

    /** Represents a SaleTestInfo. */
    class SaleTestInfo implements ISaleTestInfo {

        /**
         * Constructs a new SaleTestInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.ISaleTestInfo);

        /** SaleTestInfo position. */
        public position: number;

        /** SaleTestInfo protocol. */
        public protocol: string;

        /** SaleTestInfo photo. */
        public photo?: (Component.IImage|null);

        /** SaleTestInfo isSpu. */
        public isSpu: boolean;

        /** SaleTestInfo traceTitle. */
        public traceTitle: string;

        /**
         * Creates a new SaleTestInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaleTestInfo instance
         */
        public static create(properties?: Component.ISaleTestInfo): Component.SaleTestInfo;

        /**
         * Encodes the specified SaleTestInfo message. Does not implicitly {@link Component.SaleTestInfo.verify|verify} messages.
         * @param message SaleTestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.ISaleTestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaleTestInfo message, length delimited. Does not implicitly {@link Component.SaleTestInfo.verify|verify} messages.
         * @param message SaleTestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.ISaleTestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaleTestInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaleTestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.SaleTestInfo;

        /**
         * Decodes a SaleTestInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaleTestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.SaleTestInfo;

        /**
         * Verifies a SaleTestInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaleTestInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaleTestInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.SaleTestInfo;

        /**
         * Creates a plain object from a SaleTestInfo message. Also converts values to other types if specified.
         * @param message SaleTestInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.SaleTestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaleTestInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductTrendsInfo. */
    interface IProductTrendsInfo {

        /** ProductTrendsInfo id */
        id?: (number|Long|null);

        /** ProductTrendsInfo title */
        title?: (string|null);

        /** ProductTrendsInfo enName */
        enName?: (string|null);

        /** ProductTrendsInfo name */
        name?: (string|null);

        /** ProductTrendsInfo desc */
        desc?: (string|null);

        /** ProductTrendsInfo collectionId */
        collectionId?: (number|Long|null);

        /** ProductTrendsInfo idString */
        idString?: (string|null);

        /** ProductTrendsInfo collectionIdString */
        collectionIdString?: (string|null);
    }

    /** Represents a ProductTrendsInfo. */
    class ProductTrendsInfo implements IProductTrendsInfo {

        /**
         * Constructs a new ProductTrendsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.IProductTrendsInfo);

        /** ProductTrendsInfo id. */
        public id: (number|Long);

        /** ProductTrendsInfo title. */
        public title: string;

        /** ProductTrendsInfo enName. */
        public enName: string;

        /** ProductTrendsInfo name. */
        public name: string;

        /** ProductTrendsInfo desc. */
        public desc: string;

        /** ProductTrendsInfo collectionId. */
        public collectionId: (number|Long);

        /** ProductTrendsInfo idString. */
        public idString: string;

        /** ProductTrendsInfo collectionIdString. */
        public collectionIdString: string;

        /**
         * Creates a new ProductTrendsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductTrendsInfo instance
         */
        public static create(properties?: Component.IProductTrendsInfo): Component.ProductTrendsInfo;

        /**
         * Encodes the specified ProductTrendsInfo message. Does not implicitly {@link Component.ProductTrendsInfo.verify|verify} messages.
         * @param message ProductTrendsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.IProductTrendsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductTrendsInfo message, length delimited. Does not implicitly {@link Component.ProductTrendsInfo.verify|verify} messages.
         * @param message ProductTrendsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.IProductTrendsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductTrendsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductTrendsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.ProductTrendsInfo;

        /**
         * Decodes a ProductTrendsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductTrendsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.ProductTrendsInfo;

        /**
         * Verifies a ProductTrendsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductTrendsInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductTrendsInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.ProductTrendsInfo;

        /**
         * Creates a plain object from a ProductTrendsInfo message. Also converts values to other types if specified.
         * @param message ProductTrendsInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.ProductTrendsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductTrendsInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FlashSaleInfo. */
    interface IFlashSaleInfo {

        /** FlashSaleInfo id */
        id?: (string|null);

        /** FlashSaleInfo salePrice */
        salePrice?: (string|null);

        /** FlashSaleInfo discount */
        discount?: (number|null);

        /** FlashSaleInfo flashStatus */
        flashStatus?: (number|null);
    }

    /** Represents a FlashSaleInfo. */
    class FlashSaleInfo implements IFlashSaleInfo {

        /**
         * Constructs a new FlashSaleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Component.IFlashSaleInfo);

        /** FlashSaleInfo id. */
        public id: string;

        /** FlashSaleInfo salePrice. */
        public salePrice: string;

        /** FlashSaleInfo discount. */
        public discount: number;

        /** FlashSaleInfo flashStatus. */
        public flashStatus: number;

        /**
         * Creates a new FlashSaleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FlashSaleInfo instance
         */
        public static create(properties?: Component.IFlashSaleInfo): Component.FlashSaleInfo;

        /**
         * Encodes the specified FlashSaleInfo message. Does not implicitly {@link Component.FlashSaleInfo.verify|verify} messages.
         * @param message FlashSaleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Component.IFlashSaleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FlashSaleInfo message, length delimited. Does not implicitly {@link Component.FlashSaleInfo.verify|verify} messages.
         * @param message FlashSaleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Component.IFlashSaleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FlashSaleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FlashSaleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Component.FlashSaleInfo;

        /**
         * Decodes a FlashSaleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FlashSaleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Component.FlashSaleInfo;

        /**
         * Verifies a FlashSaleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FlashSaleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FlashSaleInfo
         */
        public static fromObject(object: { [k: string]: any }): Component.FlashSaleInfo;

        /**
         * Creates a plain object from a FlashSaleInfo message. Also converts values to other types if specified.
         * @param message FlashSaleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Component.FlashSaleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FlashSaleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Site. */
export namespace Site {

    /** Namespace NationalStoreLanguageList. */
    namespace NationalStoreLanguageList {

        /** Properties of a Request. */
        interface IRequest {
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Site.NationalStoreLanguageList.IRequest);

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Site.NationalStoreLanguageList.IRequest): Site.NationalStoreLanguageList.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Site.NationalStoreLanguageList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Site.NationalStoreLanguageList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Site.NationalStoreLanguageList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Site.NationalStoreLanguageList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Site.NationalStoreLanguageList.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Site.NationalStoreLanguageList.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): Site.NationalStoreLanguageList.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Site.NationalStoreLanguageList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response list */
            list?: (string[]|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Site.NationalStoreLanguageList.IResponse);

            /** Response list. */
            public list: string[];

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Site.NationalStoreLanguageList.IResponse): Site.NationalStoreLanguageList.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Site.NationalStoreLanguageList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Site.NationalStoreLanguageList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Site.NationalStoreLanguageList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Site.NationalStoreLanguageList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Site.NationalStoreLanguageList.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Site.NationalStoreLanguageList.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): Site.NationalStoreLanguageList.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Site.NationalStoreLanguageList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
