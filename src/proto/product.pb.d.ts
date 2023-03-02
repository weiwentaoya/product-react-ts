import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Product. */
    namespace Product {

        /** Namespace AppCollectionProductList. */
        namespace AppCollectionProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request templateId */
                templateId?: (number|Long|null);

                /** Request collectionId */
                collectionId?: (number|Long|null);

                /** Request sortType */
                sortType?: (string|null);

                /** Request sortOrder */
                sortOrder?: (string|null);

                /** Request newProduct */
                newProduct?: (boolean|null);

                /** Request priceMin */
                priceMin?: (number|Long|null);

                /** Request priceMax */
                priceMax?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request size */
                size?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppCollectionProductList.IRequest);

                /** Request templateId. */
                public templateId: (number|Long);

                /** Request collectionId. */
                public collectionId: (number|Long);

                /** Request sortType. */
                public sortType: string;

                /** Request sortOrder. */
                public sortOrder: string;

                /** Request newProduct. */
                public newProduct: boolean;

                /** Request priceMin. */
                public priceMin: (number|Long);

                /** Request priceMax. */
                public priceMax: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request size. */
                public size: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppCollectionProductList.IRequest): App.Product.AppCollectionProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppCollectionProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppCollectionProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppCollectionProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppCollectionProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppCollectionProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppCollectionProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppCollectionProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppCollectionProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Product.AppCollectionProductList.IResponse);

                /** Response list. */
                public list: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppCollectionProductList.IResponse): App.Product.AppCollectionProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppCollectionProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppCollectionProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppCollectionProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppCollectionProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppCollectionProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppCollectionProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppCollectionProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppCollectionProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppJudgeSpuInNationalStore. */
        namespace AppJudgeSpuInNationalStore {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request skuId */
                skuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppJudgeSpuInNationalStore.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request skuId. */
                public skuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppJudgeSpuInNationalStore.IRequest): App.Product.AppJudgeSpuInNationalStore.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppJudgeSpuInNationalStore.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppJudgeSpuInNationalStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppJudgeSpuInNationalStore.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppJudgeSpuInNationalStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppJudgeSpuInNationalStore.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppJudgeSpuInNationalStore.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppJudgeSpuInNationalStore.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppJudgeSpuInNationalStore.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response spuNationalStoreRelationInfo */
                spuNationalStoreRelationInfo?: (App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppJudgeSpuInNationalStore.IResponse);

                /** Response spuNationalStoreRelationInfo. */
                public spuNationalStoreRelationInfo?: (App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppJudgeSpuInNationalStore.IResponse): App.Product.AppJudgeSpuInNationalStore.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppJudgeSpuInNationalStore.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppJudgeSpuInNationalStore.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppJudgeSpuInNationalStore.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppJudgeSpuInNationalStore.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppJudgeSpuInNationalStore.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppJudgeSpuInNationalStore.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppJudgeSpuInNationalStore.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppJudgeSpuInNationalStore.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductModuleInfo. */
        namespace AppProductModuleInfo {

            /** Properties of a SkuDetail. */
            interface ISkuDetail {

                /** SkuDetail skuId */
                skuId?: (number|Long|null);

                /** SkuDetail skuPhoto */
                skuPhoto?: (Component.IImage|null);

                /** SkuDetail saleState */
                saleState?: (number|null);

                /** SkuDetail marketPrice */
                marketPrice?: (number|Long|null);

                /** SkuDetail salePrice */
                salePrice?: (number|Long|null);

                /** SkuDetail discount */
                discount?: (number|null);

                /** SkuDetail usdSalePrice */
                usdSalePrice?: (number|Long|null);

                /** SkuDetail skuOptionList */
                skuOptionList?: (App.Product.AppProductModuleInfo.IOptionAndValue[]|null);

                /** SkuDetail canUseKlarna */
                canUseKlarna?: (boolean|null);

                /** SkuDetail klarnaSalePrice */
                klarnaSalePrice?: (number|Long|null);

                /** SkuDetail skuIdString */
                skuIdString?: (string|null);

                /** SkuDetail marketPriceString */
                marketPriceString?: (string|null);

                /** SkuDetail salePriceString */
                salePriceString?: (string|null);

                /** SkuDetail usdSalePriceString */
                usdSalePriceString?: (string|null);

                /** SkuDetail klarnaSalePriceString */
                klarnaSalePriceString?: (string|null);
            }

            /** Represents a SkuDetail. */
            class SkuDetail implements ISkuDetail {

                /**
                 * Constructs a new SkuDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISkuDetail);

                /** SkuDetail skuId. */
                public skuId: (number|Long);

                /** SkuDetail skuPhoto. */
                public skuPhoto?: (Component.IImage|null);

                /** SkuDetail saleState. */
                public saleState: number;

                /** SkuDetail marketPrice. */
                public marketPrice: (number|Long);

                /** SkuDetail salePrice. */
                public salePrice: (number|Long);

                /** SkuDetail discount. */
                public discount: number;

                /** SkuDetail usdSalePrice. */
                public usdSalePrice: (number|Long);

                /** SkuDetail skuOptionList. */
                public skuOptionList: App.Product.AppProductModuleInfo.IOptionAndValue[];

                /** SkuDetail canUseKlarna. */
                public canUseKlarna: boolean;

                /** SkuDetail klarnaSalePrice. */
                public klarnaSalePrice: (number|Long);

                /** SkuDetail skuIdString. */
                public skuIdString: string;

                /** SkuDetail marketPriceString. */
                public marketPriceString: string;

                /** SkuDetail salePriceString. */
                public salePriceString: string;

                /** SkuDetail usdSalePriceString. */
                public usdSalePriceString: string;

                /** SkuDetail klarnaSalePriceString. */
                public klarnaSalePriceString: string;

                /**
                 * Creates a new SkuDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SkuDetail instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISkuDetail): App.Product.AppProductModuleInfo.SkuDetail;

                /**
                 * Encodes the specified SkuDetail message. Does not implicitly {@link App.Product.AppProductModuleInfo.SkuDetail.verify|verify} messages.
                 * @param message SkuDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISkuDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SkuDetail message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SkuDetail.verify|verify} messages.
                 * @param message SkuDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISkuDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SkuDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SkuDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SkuDetail;

                /**
                 * Decodes a SkuDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SkuDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SkuDetail;

                /**
                 * Verifies a SkuDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SkuDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SkuDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SkuDetail;

                /**
                 * Creates a plain object from a SkuDetail message. Also converts values to other types if specified.
                 * @param message SkuDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SkuDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SkuDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SaleOption. */
            interface ISaleOption {

                /** SaleOption optionName */
                optionName?: (string|null);

                /** SaleOption optionValueNameList */
                optionValueNameList?: (string[]|null);
            }

            /** Represents a SaleOption. */
            class SaleOption implements ISaleOption {

                /**
                 * Constructs a new SaleOption.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISaleOption);

                /** SaleOption optionName. */
                public optionName: string;

                /** SaleOption optionValueNameList. */
                public optionValueNameList: string[];

                /**
                 * Creates a new SaleOption instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SaleOption instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISaleOption): App.Product.AppProductModuleInfo.SaleOption;

                /**
                 * Encodes the specified SaleOption message. Does not implicitly {@link App.Product.AppProductModuleInfo.SaleOption.verify|verify} messages.
                 * @param message SaleOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISaleOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SaleOption message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SaleOption.verify|verify} messages.
                 * @param message SaleOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISaleOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SaleOption message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SaleOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SaleOption;

                /**
                 * Decodes a SaleOption message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SaleOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SaleOption;

                /**
                 * Verifies a SaleOption message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SaleOption message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SaleOption
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SaleOption;

                /**
                 * Creates a plain object from a SaleOption message. Also converts values to other types if specified.
                 * @param message SaleOption
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SaleOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SaleOption to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Option. */
            interface IOption {

                /** Option optionId */
                optionId?: (number|Long|null);

                /** Option optionName */
                optionName?: (string|null);

                /** Option optionValueList */
                optionValueList?: (App.Product.AppProductModuleInfo.IOptionValue[]|null);

                /** Option sizeIconView */
                sizeIconView?: (number|null);

                /** Option optionIdString */
                optionIdString?: (string|null);
            }

            /** Represents an Option. */
            class Option implements IOption {

                /**
                 * Constructs a new Option.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.IOption);

                /** Option optionId. */
                public optionId: (number|Long);

                /** Option optionName. */
                public optionName: string;

                /** Option optionValueList. */
                public optionValueList: App.Product.AppProductModuleInfo.IOptionValue[];

                /** Option sizeIconView. */
                public sizeIconView: number;

                /** Option optionIdString. */
                public optionIdString: string;

                /**
                 * Creates a new Option instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Option instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.IOption): App.Product.AppProductModuleInfo.Option;

                /**
                 * Encodes the specified Option message. Does not implicitly {@link App.Product.AppProductModuleInfo.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Option message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Option message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.Option;

                /**
                 * Decodes an Option message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.Option;

                /**
                 * Verifies an Option message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Option message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Option
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.Option;

                /**
                 * Creates a plain object from an Option message. Also converts values to other types if specified.
                 * @param message Option
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Option to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OptionValue. */
            interface IOptionValue {

                /** OptionValue optionValueId */
                optionValueId?: (number|Long|null);

                /** OptionValue optionValueName */
                optionValueName?: (string|null);

                /** OptionValue optionValueIdString */
                optionValueIdString?: (string|null);
            }

            /** Represents an OptionValue. */
            class OptionValue implements IOptionValue {

                /**
                 * Constructs a new OptionValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.IOptionValue);

                /** OptionValue optionValueId. */
                public optionValueId: (number|Long);

                /** OptionValue optionValueName. */
                public optionValueName: string;

                /** OptionValue optionValueIdString. */
                public optionValueIdString: string;

                /**
                 * Creates a new OptionValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionValue instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.IOptionValue): App.Product.AppProductModuleInfo.OptionValue;

                /**
                 * Encodes the specified OptionValue message. Does not implicitly {@link App.Product.AppProductModuleInfo.OptionValue.verify|verify} messages.
                 * @param message OptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.IOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionValue message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.OptionValue.verify|verify} messages.
                 * @param message OptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.IOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.OptionValue;

                /**
                 * Decodes an OptionValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.OptionValue;

                /**
                 * Verifies an OptionValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionValue
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.OptionValue;

                /**
                 * Creates a plain object from an OptionValue message. Also converts values to other types if specified.
                 * @param message OptionValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.OptionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OptionAndValue. */
            interface IOptionAndValue {

                /** OptionAndValue optionId */
                optionId?: (number|Long|null);

                /** OptionAndValue optionValueId */
                optionValueId?: (number|Long|null);

                /** OptionAndValue optionValueName */
                optionValueName?: (string|null);

                /** OptionAndValue optionIdString */
                optionIdString?: (string|null);

                /** OptionAndValue optionValueIdString */
                optionValueIdString?: (string|null);
            }

            /** Represents an OptionAndValue. */
            class OptionAndValue implements IOptionAndValue {

                /**
                 * Constructs a new OptionAndValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.IOptionAndValue);

                /** OptionAndValue optionId. */
                public optionId: (number|Long);

                /** OptionAndValue optionValueId. */
                public optionValueId: (number|Long);

                /** OptionAndValue optionValueName. */
                public optionValueName: string;

                /** OptionAndValue optionIdString. */
                public optionIdString: string;

                /** OptionAndValue optionValueIdString. */
                public optionValueIdString: string;

                /**
                 * Creates a new OptionAndValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionAndValue instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.IOptionAndValue): App.Product.AppProductModuleInfo.OptionAndValue;

                /**
                 * Encodes the specified OptionAndValue message. Does not implicitly {@link App.Product.AppProductModuleInfo.OptionAndValue.verify|verify} messages.
                 * @param message OptionAndValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.IOptionAndValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionAndValue message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.OptionAndValue.verify|verify} messages.
                 * @param message OptionAndValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.IOptionAndValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionAndValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OptionAndValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.OptionAndValue;

                /**
                 * Decodes an OptionAndValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OptionAndValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.OptionAndValue;

                /**
                 * Verifies an OptionAndValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionAndValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionAndValue
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.OptionAndValue;

                /**
                 * Creates a plain object from an OptionAndValue message. Also converts values to other types if specified.
                 * @param message OptionAndValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.OptionAndValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionAndValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecificationInfo. */
            interface ISpecificationInfo {

                /** SpecificationInfo measurementsList */
                measurementsList?: (App.Product.AppProductModuleInfo.IMeasurements[]|null);

                /** SpecificationInfo sizeList */
                sizeList?: (App.Product.AppProductModuleInfo.ISize[]|null);

                /** SpecificationInfo specTplTableValueList */
                specTplTableValueList?: (App.Product.AppProductModuleInfo.ISpecTplTableValue[]|null);
            }

            /** Represents a SpecificationInfo. */
            class SpecificationInfo implements ISpecificationInfo {

                /**
                 * Constructs a new SpecificationInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISpecificationInfo);

                /** SpecificationInfo measurementsList. */
                public measurementsList: App.Product.AppProductModuleInfo.IMeasurements[];

                /** SpecificationInfo sizeList. */
                public sizeList: App.Product.AppProductModuleInfo.ISize[];

                /** SpecificationInfo specTplTableValueList. */
                public specTplTableValueList: App.Product.AppProductModuleInfo.ISpecTplTableValue[];

                /**
                 * Creates a new SpecificationInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecificationInfo instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISpecificationInfo): App.Product.AppProductModuleInfo.SpecificationInfo;

                /**
                 * Encodes the specified SpecificationInfo message. Does not implicitly {@link App.Product.AppProductModuleInfo.SpecificationInfo.verify|verify} messages.
                 * @param message SpecificationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISpecificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecificationInfo message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SpecificationInfo.verify|verify} messages.
                 * @param message SpecificationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISpecificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecificationInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecificationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SpecificationInfo;

                /**
                 * Decodes a SpecificationInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecificationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SpecificationInfo;

                /**
                 * Verifies a SpecificationInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecificationInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecificationInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SpecificationInfo;

                /**
                 * Creates a plain object from a SpecificationInfo message. Also converts values to other types if specified.
                 * @param message SpecificationInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SpecificationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecificationInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecTplTableValue. */
            interface ISpecTplTableValue {

                /** SpecTplTableValue measValueId */
                measValueId?: (string|null);

                /** SpecTplTableValue sizeValId */
                sizeValId?: (string|null);

                /** SpecTplTableValue fitUsSize */
                fitUsSize?: (string|null);

                /** SpecTplTableValue fitUkSize */
                fitUkSize?: (string|null);

                /** SpecTplTableValue fitEuSize */
                fitEuSize?: (string|null);

                /** SpecTplTableValue cmLength */
                cmLength?: (string|null);

                /** SpecTplTableValue inchLength */
                inchLength?: (string|null);
            }

            /** Represents a SpecTplTableValue. */
            class SpecTplTableValue implements ISpecTplTableValue {

                /**
                 * Constructs a new SpecTplTableValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISpecTplTableValue);

                /** SpecTplTableValue measValueId. */
                public measValueId: string;

                /** SpecTplTableValue sizeValId. */
                public sizeValId: string;

                /** SpecTplTableValue fitUsSize. */
                public fitUsSize: string;

                /** SpecTplTableValue fitUkSize. */
                public fitUkSize: string;

                /** SpecTplTableValue fitEuSize. */
                public fitEuSize: string;

                /** SpecTplTableValue cmLength. */
                public cmLength: string;

                /** SpecTplTableValue inchLength. */
                public inchLength: string;

                /**
                 * Creates a new SpecTplTableValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecTplTableValue instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISpecTplTableValue): App.Product.AppProductModuleInfo.SpecTplTableValue;

                /**
                 * Encodes the specified SpecTplTableValue message. Does not implicitly {@link App.Product.AppProductModuleInfo.SpecTplTableValue.verify|verify} messages.
                 * @param message SpecTplTableValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISpecTplTableValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecTplTableValue message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SpecTplTableValue.verify|verify} messages.
                 * @param message SpecTplTableValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISpecTplTableValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecTplTableValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecTplTableValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SpecTplTableValue;

                /**
                 * Decodes a SpecTplTableValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecTplTableValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SpecTplTableValue;

                /**
                 * Verifies a SpecTplTableValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecTplTableValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecTplTableValue
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SpecTplTableValue;

                /**
                 * Creates a plain object from a SpecTplTableValue message. Also converts values to other types if specified.
                 * @param message SpecTplTableValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SpecTplTableValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecTplTableValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Size. */
            interface ISize {

                /** Size sizeValId */
                sizeValId?: (number|Long|null);

                /** Size sizeValName */
                sizeValName?: (string|null);

                /** Size sizeValIdString */
                sizeValIdString?: (string|null);
            }

            /** Represents a Size. */
            class Size implements ISize {

                /**
                 * Constructs a new Size.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISize);

                /** Size sizeValId. */
                public sizeValId: (number|Long);

                /** Size sizeValName. */
                public sizeValName: string;

                /** Size sizeValIdString. */
                public sizeValIdString: string;

                /**
                 * Creates a new Size instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Size instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISize): App.Product.AppProductModuleInfo.Size;

                /**
                 * Encodes the specified Size message. Does not implicitly {@link App.Product.AppProductModuleInfo.Size.verify|verify} messages.
                 * @param message Size message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Size message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.Size.verify|verify} messages.
                 * @param message Size message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Size message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.Size;

                /**
                 * Decodes a Size message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.Size;

                /**
                 * Verifies a Size message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Size message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Size
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.Size;

                /**
                 * Creates a plain object from a Size message. Also converts values to other types if specified.
                 * @param message Size
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Size to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Measurements. */
            interface IMeasurements {

                /** Measurements measurementValId */
                measurementValId?: (number|Long|null);

                /** Measurements measurementsValName */
                measurementsValName?: (string|null);

                /** Measurements measurementValIdString */
                measurementValIdString?: (string|null);
            }

            /** Represents a Measurements. */
            class Measurements implements IMeasurements {

                /**
                 * Constructs a new Measurements.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.IMeasurements);

                /** Measurements measurementValId. */
                public measurementValId: (number|Long);

                /** Measurements measurementsValName. */
                public measurementsValName: string;

                /** Measurements measurementValIdString. */
                public measurementValIdString: string;

                /**
                 * Creates a new Measurements instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Measurements instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.IMeasurements): App.Product.AppProductModuleInfo.Measurements;

                /**
                 * Encodes the specified Measurements message. Does not implicitly {@link App.Product.AppProductModuleInfo.Measurements.verify|verify} messages.
                 * @param message Measurements message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.IMeasurements, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Measurements message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.Measurements.verify|verify} messages.
                 * @param message Measurements message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.IMeasurements, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Measurements message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Measurements
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.Measurements;

                /**
                 * Decodes a Measurements message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Measurements
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.Measurements;

                /**
                 * Verifies a Measurements message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Measurements message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Measurements
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.Measurements;

                /**
                 * Creates a plain object from a Measurements message. Also converts values to other types if specified.
                 * @param message Measurements
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.Measurements, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Measurements to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpuNationalStoreRelationInfo. */
            interface ISpuNationalStoreRelationInfo {

                /** SpuNationalStoreRelationInfo productIsInThisNationalStore */
                productIsInThisNationalStore?: (number|null);

                /** SpuNationalStoreRelationInfo spuParamIsInThisNationalStore */
                spuParamIsInThisNationalStore?: (number|null);

                /** SpuNationalStoreRelationInfo spuIdInThisNationalStore */
                spuIdInThisNationalStore?: (number|Long|null);

                /** SpuNationalStoreRelationInfo skuIdInThisNationalStore */
                skuIdInThisNationalStore?: (number|Long|null);

                /** SpuNationalStoreRelationInfo handleInThisNationalStore */
                handleInThisNationalStore?: (string|null);

                /** SpuNationalStoreRelationInfo spuIdInThisNationalStoreString */
                spuIdInThisNationalStoreString?: (string|null);

                /** SpuNationalStoreRelationInfo skuIdInThisNationalStoreString */
                skuIdInThisNationalStoreString?: (string|null);
            }

            /** Represents a SpuNationalStoreRelationInfo. */
            class SpuNationalStoreRelationInfo implements ISpuNationalStoreRelationInfo {

                /**
                 * Constructs a new SpuNationalStoreRelationInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo);

                /** SpuNationalStoreRelationInfo productIsInThisNationalStore. */
                public productIsInThisNationalStore: number;

                /** SpuNationalStoreRelationInfo spuParamIsInThisNationalStore. */
                public spuParamIsInThisNationalStore: number;

                /** SpuNationalStoreRelationInfo spuIdInThisNationalStore. */
                public spuIdInThisNationalStore: (number|Long);

                /** SpuNationalStoreRelationInfo skuIdInThisNationalStore. */
                public skuIdInThisNationalStore: (number|Long);

                /** SpuNationalStoreRelationInfo handleInThisNationalStore. */
                public handleInThisNationalStore: string;

                /** SpuNationalStoreRelationInfo spuIdInThisNationalStoreString. */
                public spuIdInThisNationalStoreString: string;

                /** SpuNationalStoreRelationInfo skuIdInThisNationalStoreString. */
                public skuIdInThisNationalStoreString: string;

                /**
                 * Creates a new SpuNationalStoreRelationInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpuNationalStoreRelationInfo instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo): App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo;

                /**
                 * Encodes the specified SpuNationalStoreRelationInfo message. Does not implicitly {@link App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo.verify|verify} messages.
                 * @param message SpuNationalStoreRelationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpuNationalStoreRelationInfo message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo.verify|verify} messages.
                 * @param message SpuNationalStoreRelationInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpuNationalStoreRelationInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpuNationalStoreRelationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo;

                /**
                 * Decodes a SpuNationalStoreRelationInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpuNationalStoreRelationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo;

                /**
                 * Verifies a SpuNationalStoreRelationInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpuNationalStoreRelationInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpuNationalStoreRelationInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo;

                /**
                 * Creates a plain object from a SpuNationalStoreRelationInfo message. Also converts values to other types if specified.
                 * @param message SpuNationalStoreRelationInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SpuNationalStoreRelationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpuNationalStoreRelationInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpuFlashSaleInfo. */
            interface ISpuFlashSaleInfo {

                /** SpuFlashSaleInfo id */
                id?: (string|null);

                /** SpuFlashSaleInfo salePrice */
                salePrice?: (string|null);

                /** SpuFlashSaleInfo discount */
                discount?: (number|null);

                /** SpuFlashSaleInfo saveSalePrice */
                saveSalePrice?: (string|null);

                /** SpuFlashSaleInfo endTime */
                endTime?: (number|Long|null);

                /** SpuFlashSaleInfo endTimeString */
                endTimeString?: (string|null);
            }

            /** Represents a SpuFlashSaleInfo. */
            class SpuFlashSaleInfo implements ISpuFlashSaleInfo {

                /**
                 * Constructs a new SpuFlashSaleInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductModuleInfo.ISpuFlashSaleInfo);

                /** SpuFlashSaleInfo id. */
                public id: string;

                /** SpuFlashSaleInfo salePrice. */
                public salePrice: string;

                /** SpuFlashSaleInfo discount. */
                public discount: number;

                /** SpuFlashSaleInfo saveSalePrice. */
                public saveSalePrice: string;

                /** SpuFlashSaleInfo endTime. */
                public endTime: (number|Long);

                /** SpuFlashSaleInfo endTimeString. */
                public endTimeString: string;

                /**
                 * Creates a new SpuFlashSaleInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpuFlashSaleInfo instance
                 */
                public static create(properties?: App.Product.AppProductModuleInfo.ISpuFlashSaleInfo): App.Product.AppProductModuleInfo.SpuFlashSaleInfo;

                /**
                 * Encodes the specified SpuFlashSaleInfo message. Does not implicitly {@link App.Product.AppProductModuleInfo.SpuFlashSaleInfo.verify|verify} messages.
                 * @param message SpuFlashSaleInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductModuleInfo.ISpuFlashSaleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpuFlashSaleInfo message, length delimited. Does not implicitly {@link App.Product.AppProductModuleInfo.SpuFlashSaleInfo.verify|verify} messages.
                 * @param message SpuFlashSaleInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductModuleInfo.ISpuFlashSaleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpuFlashSaleInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpuFlashSaleInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductModuleInfo.SpuFlashSaleInfo;

                /**
                 * Decodes a SpuFlashSaleInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpuFlashSaleInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductModuleInfo.SpuFlashSaleInfo;

                /**
                 * Verifies a SpuFlashSaleInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpuFlashSaleInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpuFlashSaleInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductModuleInfo.SpuFlashSaleInfo;

                /**
                 * Creates a plain object from a SpuFlashSaleInfo message. Also converts values to other types if specified.
                 * @param message SpuFlashSaleInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductModuleInfo.SpuFlashSaleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpuFlashSaleInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProTrendsList. */
        namespace AppProTrendsList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request proTrendsId */
                proTrendsId?: (number|Long|null);

                /** Request randomNum */
                randomNum?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProTrendsList.IRequest);

                /** Request proTrendsId. */
                public proTrendsId: (number|Long);

                /** Request randomNum. */
                public randomNum: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProTrendsList.IRequest): App.Product.AppProTrendsList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProTrendsList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProTrendsList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProTrendsList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProTrendsList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProTrendsList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProTrendsList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProTrendsList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProTrendsList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response proTrendsInfo */
                proTrendsInfo?: (Component.IProductTrendsInfo|null);

                /** Response proTrendsInfoList */
                proTrendsInfoList?: (Component.IProductTrendsInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProTrendsList.IResponse);

                /** Response proTrendsInfo. */
                public proTrendsInfo?: (Component.IProductTrendsInfo|null);

                /** Response proTrendsInfoList. */
                public proTrendsInfoList: Component.IProductTrendsInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProTrendsList.IResponse): App.Product.AppProTrendsList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProTrendsList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProTrendsList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProTrendsList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProTrendsList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProTrendsList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProTrendsList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProTrendsList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProTrendsList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductCommentDefaultList. */
        namespace AppProductCommentDefaultList {

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
                constructor(properties?: App.Product.AppProductCommentDefaultList.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductCommentDefaultList.IRequest): App.Product.AppProductCommentDefaultList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductCommentDefaultList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductCommentDefaultList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductCommentDefaultList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductCommentDefaultList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductCommentDefaultList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductCommentDefaultList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductCommentDefaultList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductCommentDefaultList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response total */
                total?: (number|null);

                /** Response commentList */
                commentList?: (App.Product.AppProductCommentInfo.IAppCommentInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductCommentDefaultList.IResponse);

                /** Response total. */
                public total: number;

                /** Response commentList. */
                public commentList: App.Product.AppProductCommentInfo.IAppCommentInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductCommentDefaultList.IResponse): App.Product.AppProductCommentDefaultList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductCommentDefaultList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductCommentDefaultList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductCommentDefaultList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductCommentDefaultList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductCommentDefaultList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductCommentDefaultList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductCommentDefaultList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductCommentDefaultList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductCommentInfo. */
        namespace AppProductCommentInfo {

            /** Properties of an AppCommentInfo. */
            interface IAppCommentInfo {

                /** AppCommentInfo userPhoto */
                userPhoto?: (string|null);

                /** AppCommentInfo userName */
                userName?: (string|null);

                /** AppCommentInfo score */
                score?: (number|null);

                /** AppCommentInfo date */
                date?: (number|Long|null);

                /** AppCommentInfo content */
                content?: (string|null);

                /** AppCommentInfo images */
                images?: (Component.IImage[]|null);
            }

            /** Represents an AppCommentInfo. */
            class AppCommentInfo implements IAppCommentInfo {

                /**
                 * Constructs a new AppCommentInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductCommentInfo.IAppCommentInfo);

                /** AppCommentInfo userPhoto. */
                public userPhoto: string;

                /** AppCommentInfo userName. */
                public userName: string;

                /** AppCommentInfo score. */
                public score: number;

                /** AppCommentInfo date. */
                public date: (number|Long);

                /** AppCommentInfo content. */
                public content: string;

                /** AppCommentInfo images. */
                public images: Component.IImage[];

                /**
                 * Creates a new AppCommentInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppCommentInfo instance
                 */
                public static create(properties?: App.Product.AppProductCommentInfo.IAppCommentInfo): App.Product.AppProductCommentInfo.AppCommentInfo;

                /**
                 * Encodes the specified AppCommentInfo message. Does not implicitly {@link App.Product.AppProductCommentInfo.AppCommentInfo.verify|verify} messages.
                 * @param message AppCommentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductCommentInfo.IAppCommentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppCommentInfo message, length delimited. Does not implicitly {@link App.Product.AppProductCommentInfo.AppCommentInfo.verify|verify} messages.
                 * @param message AppCommentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductCommentInfo.IAppCommentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppCommentInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppCommentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductCommentInfo.AppCommentInfo;

                /**
                 * Decodes an AppCommentInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppCommentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductCommentInfo.AppCommentInfo;

                /**
                 * Verifies an AppCommentInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppCommentInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppCommentInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductCommentInfo.AppCommentInfo;

                /**
                 * Creates a plain object from an AppCommentInfo message. Also converts values to other types if specified.
                 * @param message AppCommentInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductCommentInfo.AppCommentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppCommentInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductCommentList. */
        namespace AppProductCommentList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request commentType */
                commentType?: (number|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductCommentList.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request commentType. */
                public commentType: number;

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductCommentList.IRequest): App.Product.AppProductCommentList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductCommentList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductCommentList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductCommentList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductCommentList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductCommentList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductCommentList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductCommentList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductCommentList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response commentList */
                commentList?: (App.Product.AppProductCommentInfo.IAppCommentInfo[]|null);

                /** Response imageCommentCount */
                imageCommentCount?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductCommentList.IResponse);

                /** Response commentList. */
                public commentList: App.Product.AppProductCommentInfo.IAppCommentInfo[];

                /** Response imageCommentCount. */
                public imageCommentCount: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductCommentList.IResponse): App.Product.AppProductCommentList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductCommentList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductCommentList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductCommentList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductCommentList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductCommentList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductCommentList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductCommentList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductCommentList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductDetail. */
        namespace AppProductDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request skuId */
                skuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductDetail.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request skuId. */
                public skuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductDetail.IRequest): App.Product.AppProductDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response productId */
                productId?: (number|Long|null);

                /** Response handle */
                handle?: (string|null);

                /** Response spuId */
                spuId?: (number|Long|null);

                /** Response skuId */
                skuId?: (number|Long|null);

                /** Response categoryId */
                categoryId?: (number|Long|null);

                /** Response categoryType */
                categoryType?: (number|null);

                /** Response videoUrl */
                videoUrl?: (string|null);

                /** Response videoCover */
                videoCover?: (Component.IImage|null);

                /** Response mainPhotos */
                mainPhotos?: (Component.IImage[]|null);

                /** Response detailPhotos */
                detailPhotos?: (Component.IImage[]|null);

                /** Response skuPhotos */
                skuPhotos?: (Component.IImage[]|null);

                /** Response title */
                title?: (string|null);

                /** Response enTitle */
                enTitle?: (string|null);

                /** Response systemTitle */
                systemTitle?: (string|null);

                /** Response sales */
                sales?: (number|Long|null);

                /** Response saleState */
                saleState?: (number|null);

                /** Response skuList */
                skuList?: (App.Product.AppProductModuleInfo.ISkuDetail[]|null);

                /** Response spuOptionList */
                spuOptionList?: (App.Product.AppProductModuleInfo.IOption[]|null);

                /** Response navRankInfo */
                navRankInfo?: (Component.INavRankInfo|null);

                /** Response proTrendsInfo */
                proTrendsInfo?: (Component.IProductTrendsInfo|null);

                /** Response saleOptionList */
                saleOptionList?: (App.Product.AppProductModuleInfo.ISaleOption[]|null);

                /** Response description */
                description?: (string|null);

                /** Response descDetailPhotos */
                descDetailPhotos?: (Component.IImage[]|null);

                /** Response specificationInfo */
                specificationInfo?: (App.Product.AppProductModuleInfo.ISpecificationInfo|null);

                /** Response specificationImgList */
                specificationImgList?: (Component.IImage[]|null);

                /** Response showVat */
                showVat?: (number|null);

                /** Response spuNationalStoreRelationInfo */
                spuNationalStoreRelationInfo?: (App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo|null);

                /** Response flashSaleInfo */
                flashSaleInfo?: (App.Product.AppProductModuleInfo.ISpuFlashSaleInfo|null);

                /** Response productIdString */
                productIdString?: (string|null);

                /** Response spuIdString */
                spuIdString?: (string|null);

                /** Response skuIdString */
                skuIdString?: (string|null);

                /** Response categoryIdString */
                categoryIdString?: (string|null);

                /** Response salesString */
                salesString?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductDetail.IResponse);

                /** Response productId. */
                public productId: (number|Long);

                /** Response handle. */
                public handle: string;

                /** Response spuId. */
                public spuId: (number|Long);

                /** Response skuId. */
                public skuId: (number|Long);

                /** Response categoryId. */
                public categoryId: (number|Long);

                /** Response categoryType. */
                public categoryType: number;

                /** Response videoUrl. */
                public videoUrl: string;

                /** Response videoCover. */
                public videoCover?: (Component.IImage|null);

                /** Response mainPhotos. */
                public mainPhotos: Component.IImage[];

                /** Response detailPhotos. */
                public detailPhotos: Component.IImage[];

                /** Response skuPhotos. */
                public skuPhotos: Component.IImage[];

                /** Response title. */
                public title: string;

                /** Response enTitle. */
                public enTitle: string;

                /** Response systemTitle. */
                public systemTitle: string;

                /** Response sales. */
                public sales: (number|Long);

                /** Response saleState. */
                public saleState: number;

                /** Response skuList. */
                public skuList: App.Product.AppProductModuleInfo.ISkuDetail[];

                /** Response spuOptionList. */
                public spuOptionList: App.Product.AppProductModuleInfo.IOption[];

                /** Response navRankInfo. */
                public navRankInfo?: (Component.INavRankInfo|null);

                /** Response proTrendsInfo. */
                public proTrendsInfo?: (Component.IProductTrendsInfo|null);

                /** Response saleOptionList. */
                public saleOptionList: App.Product.AppProductModuleInfo.ISaleOption[];

                /** Response description. */
                public description: string;

                /** Response descDetailPhotos. */
                public descDetailPhotos: Component.IImage[];

                /** Response specificationInfo. */
                public specificationInfo?: (App.Product.AppProductModuleInfo.ISpecificationInfo|null);

                /** Response specificationImgList. */
                public specificationImgList: Component.IImage[];

                /** Response showVat. */
                public showVat: number;

                /** Response spuNationalStoreRelationInfo. */
                public spuNationalStoreRelationInfo?: (App.Product.AppProductModuleInfo.ISpuNationalStoreRelationInfo|null);

                /** Response flashSaleInfo. */
                public flashSaleInfo?: (App.Product.AppProductModuleInfo.ISpuFlashSaleInfo|null);

                /** Response productIdString. */
                public productIdString: string;

                /** Response spuIdString. */
                public spuIdString: string;

                /** Response skuIdString. */
                public skuIdString: string;

                /** Response categoryIdString. */
                public categoryIdString: string;

                /** Response salesString. */
                public salesString: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductDetail.IResponse): App.Product.AppProductDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductList. */
        namespace AppProductList {

            /** Properties of a Request. */
            interface IRequest {

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
                constructor(properties?: App.Product.AppProductList.IRequest);

                /** Request sortId. */
                public sortId: string;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductList.IRequest): App.Product.AppProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Product.AppProductList.IResponse);

                /** Response list. */
                public list: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductList.IResponse): App.Product.AppProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductPopUp. */
        namespace AppProductPopUp {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request skuId */
                skuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductPopUp.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request skuId. */
                public skuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductPopUp.IRequest): App.Product.AppProductPopUp.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductPopUp.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductPopUp.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductPopUp.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductPopUp.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductPopUp.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductPopUp.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductPopUp.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductPopUp.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response productId */
                productId?: (number|Long|null);

                /** Response spuId */
                spuId?: (number|Long|null);

                /** Response skuId */
                skuId?: (number|Long|null);

                /** Response categoryId */
                categoryId?: (number|Long|null);

                /** Response mainPhotos */
                mainPhotos?: (Component.IImage[]|null);

                /** Response title */
                title?: (string|null);

                /** Response enTitle */
                enTitle?: (string|null);

                /** Response systemTitle */
                systemTitle?: (string|null);

                /** Response saleState */
                saleState?: (number|null);

                /** Response skuList */
                skuList?: (App.Product.AppProductModuleInfo.ISkuDetail[]|null);

                /** Response spuOptionList */
                spuOptionList?: (App.Product.AppProductModuleInfo.IOption[]|null);

                /** Response specificationInfo */
                specificationInfo?: (App.Product.AppProductModuleInfo.ISpecificationInfo|null);

                /** Response specificationImgList */
                specificationImgList?: (Component.IImage[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductPopUp.IResponse);

                /** Response productId. */
                public productId: (number|Long);

                /** Response spuId. */
                public spuId: (number|Long);

                /** Response skuId. */
                public skuId: (number|Long);

                /** Response categoryId. */
                public categoryId: (number|Long);

                /** Response mainPhotos. */
                public mainPhotos: Component.IImage[];

                /** Response title. */
                public title: string;

                /** Response enTitle. */
                public enTitle: string;

                /** Response systemTitle. */
                public systemTitle: string;

                /** Response saleState. */
                public saleState: number;

                /** Response skuList. */
                public skuList: App.Product.AppProductModuleInfo.ISkuDetail[];

                /** Response spuOptionList. */
                public spuOptionList: App.Product.AppProductModuleInfo.IOption[];

                /** Response specificationInfo. */
                public specificationInfo?: (App.Product.AppProductModuleInfo.ISpecificationInfo|null);

                /** Response specificationImgList. */
                public specificationImgList: Component.IImage[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductPopUp.IResponse): App.Product.AppProductPopUp.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductPopUp.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductPopUp.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductPopUp.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductPopUp.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductPopUp.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductPopUp.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductPopUp.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductPopUp.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppProductProfileInfo. */
        namespace AppProductProfileInfo {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductProfileInfo.IRequest);

                /** Request spuId. */
                public spuId: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.AppProductProfileInfo.IRequest): App.Product.AppProductProfileInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.AppProductProfileInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductProfileInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.AppProductProfileInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductProfileInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductProfileInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductProfileInfo.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductProfileInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductProfileInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response title */
                title?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.AppProductProfileInfo.IResponse);

                /** Response title. */
                public title: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.AppProductProfileInfo.IResponse): App.Product.AppProductProfileInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.AppProductProfileInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.AppProductProfileInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.AppProductProfileInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.AppProductProfileInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.AppProductProfileInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.AppProductProfileInfo.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.AppProductProfileInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.AppProductProfileInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace DetailPromotionProductList. */
        namespace DetailPromotionProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.DetailPromotionProductList.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.DetailPromotionProductList.IRequest): App.Product.DetailPromotionProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.DetailPromotionProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.DetailPromotionProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.DetailPromotionProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.DetailPromotionProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.DetailPromotionProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.DetailPromotionProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.DetailPromotionProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.DetailPromotionProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Response saleTestList */
                saleTestList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.DetailPromotionProductList.IResponse);

                /** Response list. */
                public list: Component.ISpuInfo[];

                /** Response saleTestList. */
                public saleTestList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.DetailPromotionProductList.IResponse): App.Product.DetailPromotionProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.DetailPromotionProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.DetailPromotionProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.DetailPromotionProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.DetailPromotionProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.DetailPromotionProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.DetailPromotionProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.DetailPromotionProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.DetailPromotionProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace HotSearchKeywordList. */
        namespace HotSearchKeywordList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.HotSearchKeywordList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.HotSearchKeywordList.IRequest): App.Product.HotSearchKeywordList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.HotSearchKeywordList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.HotSearchKeywordList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.HotSearchKeywordList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.HotSearchKeywordList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.HotSearchKeywordList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.HotSearchKeywordList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.HotSearchKeywordList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.HotSearchKeywordList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response hotKeywordList */
                hotKeywordList?: (App.Product.HotSearchKeywordList.IHotKeyword[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.HotSearchKeywordList.IResponse);

                /** Response hotKeywordList. */
                public hotKeywordList: App.Product.HotSearchKeywordList.IHotKeyword[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.HotSearchKeywordList.IResponse): App.Product.HotSearchKeywordList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.HotSearchKeywordList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.HotSearchKeywordList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.HotSearchKeywordList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.HotSearchKeywordList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.HotSearchKeywordList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.HotSearchKeywordList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.HotSearchKeywordList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.HotSearchKeywordList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HotKeyword. */
            interface IHotKeyword {

                /** HotKeyword keyword */
                keyword?: (string|null);

                /** HotKeyword languageKeyword */
                languageKeyword?: (string|null);

                /** HotKeyword isHot */
                isHot?: (number|null);

                /** HotKeyword traceTitle */
                traceTitle?: (string|null);

                /** HotKeyword conditionType */
                conditionType?: (number|null);

                /** HotKeyword conditionValue */
                conditionValue?: (string|null);
            }

            /** Represents a HotKeyword. */
            class HotKeyword implements IHotKeyword {

                /**
                 * Constructs a new HotKeyword.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.HotSearchKeywordList.IHotKeyword);

                /** HotKeyword keyword. */
                public keyword: string;

                /** HotKeyword languageKeyword. */
                public languageKeyword: string;

                /** HotKeyword isHot. */
                public isHot: number;

                /** HotKeyword traceTitle. */
                public traceTitle: string;

                /** HotKeyword conditionType. */
                public conditionType: number;

                /** HotKeyword conditionValue. */
                public conditionValue: string;

                /**
                 * Creates a new HotKeyword instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HotKeyword instance
                 */
                public static create(properties?: App.Product.HotSearchKeywordList.IHotKeyword): App.Product.HotSearchKeywordList.HotKeyword;

                /**
                 * Encodes the specified HotKeyword message. Does not implicitly {@link App.Product.HotSearchKeywordList.HotKeyword.verify|verify} messages.
                 * @param message HotKeyword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.HotSearchKeywordList.IHotKeyword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HotKeyword message, length delimited. Does not implicitly {@link App.Product.HotSearchKeywordList.HotKeyword.verify|verify} messages.
                 * @param message HotKeyword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.HotSearchKeywordList.IHotKeyword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HotKeyword message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HotKeyword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.HotSearchKeywordList.HotKeyword;

                /**
                 * Decodes a HotKeyword message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HotKeyword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.HotSearchKeywordList.HotKeyword;

                /**
                 * Verifies a HotKeyword message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HotKeyword message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HotKeyword
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.HotSearchKeywordList.HotKeyword;

                /**
                 * Creates a plain object from a HotKeyword message. Also converts values to other types if specified.
                 * @param message HotKeyword
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.HotSearchKeywordList.HotKeyword, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HotKeyword to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace LiftStyleList. */
        namespace LiftStyleList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.LiftStyleList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.LiftStyleList.IRequest): App.Product.LiftStyleList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.LiftStyleList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.LiftStyleList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.LiftStyleList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.LiftStyleList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.LiftStyleList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.LiftStyleList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.LiftStyleList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.LiftStyleList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (App.Product.LiftStyleList.ILiftStyle[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.LiftStyleList.IResponse);

                /** Response list. */
                public list: App.Product.LiftStyleList.ILiftStyle[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.LiftStyleList.IResponse): App.Product.LiftStyleList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.LiftStyleList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.LiftStyleList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.LiftStyleList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.LiftStyleList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.LiftStyleList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.LiftStyleList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.LiftStyleList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.LiftStyleList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LiftStyle. */
            interface ILiftStyle {

                /** LiftStyle id */
                id?: (number|Long|null);

                /** LiftStyle img */
                img?: (string|null);

                /** LiftStyle url */
                url?: (string|null);

                /** LiftStyle sort */
                sort?: (number|null);
            }

            /** Represents a LiftStyle. */
            class LiftStyle implements ILiftStyle {

                /**
                 * Constructs a new LiftStyle.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.LiftStyleList.ILiftStyle);

                /** LiftStyle id. */
                public id: (number|Long);

                /** LiftStyle img. */
                public img: string;

                /** LiftStyle url. */
                public url: string;

                /** LiftStyle sort. */
                public sort: number;

                /**
                 * Creates a new LiftStyle instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LiftStyle instance
                 */
                public static create(properties?: App.Product.LiftStyleList.ILiftStyle): App.Product.LiftStyleList.LiftStyle;

                /**
                 * Encodes the specified LiftStyle message. Does not implicitly {@link App.Product.LiftStyleList.LiftStyle.verify|verify} messages.
                 * @param message LiftStyle message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.LiftStyleList.ILiftStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LiftStyle message, length delimited. Does not implicitly {@link App.Product.LiftStyleList.LiftStyle.verify|verify} messages.
                 * @param message LiftStyle message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.LiftStyleList.ILiftStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LiftStyle message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LiftStyle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.LiftStyleList.LiftStyle;

                /**
                 * Decodes a LiftStyle message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LiftStyle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.LiftStyleList.LiftStyle;

                /**
                 * Verifies a LiftStyle message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LiftStyle message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LiftStyle
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.LiftStyleList.LiftStyle;

                /**
                 * Creates a plain object from a LiftStyle message. Also converts values to other types if specified.
                 * @param message LiftStyle
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.LiftStyleList.LiftStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LiftStyle to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxProductDetail. */
        namespace MagicBoxProductDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request boxId */
                boxId?: (number|Long|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request skuId */
                skuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductDetail.IRequest);

                /** Request boxId. */
                public boxId: (number|Long);

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request skuId. */
                public skuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.MagicBoxProductDetail.IRequest): App.Product.MagicBoxProductDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.MagicBoxProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response productId */
                productId?: (number|Long|null);

                /** Response spuId */
                spuId?: (number|Long|null);

                /** Response title */
                title?: (string|null);

                /** Response systemTitle */
                systemTitle?: (string|null);

                /** Response marketPrice */
                marketPrice?: (number|Long|null);

                /** Response salePrice */
                salePrice?: (number|Long|null);

                /** Response type */
                type?: (number|null);

                /** Response mainPhotos */
                mainPhotos?: (string[]|null);

                /** Response detailPhotos */
                detailPhotos?: (string[]|null);

                /** Response skuPhotos */
                skuPhotos?: (string[]|null);

                /** Response videoUrl */
                videoUrl?: (string|null);

                /** Response videoCoverImage */
                videoCoverImage?: (Component.IImage|null);

                /** Response description */
                description?: (string|null);

                /** Response descDetailPhotos */
                descDetailPhotos?: (string[]|null);

                /** Response optionList */
                optionList?: (App.Product.MagicBoxProductDetail.IOption[]|null);

                /** Response mainImageInfos */
                mainImageInfos?: (Component.IImage[]|null);

                /** Response detailImageInfos */
                detailImageInfos?: (Component.IImage[]|null);

                /** Response skuImageInfos */
                skuImageInfos?: (Component.IImage[]|null);

                /** Response descDetailImages */
                descDetailImages?: (Component.IImage[]|null);

                /** Response handle */
                handle?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductDetail.IResponse);

                /** Response productId. */
                public productId: (number|Long);

                /** Response spuId. */
                public spuId: (number|Long);

                /** Response title. */
                public title: string;

                /** Response systemTitle. */
                public systemTitle: string;

                /** Response marketPrice. */
                public marketPrice: (number|Long);

                /** Response salePrice. */
                public salePrice: (number|Long);

                /** Response type. */
                public type: number;

                /** Response mainPhotos. */
                public mainPhotos: string[];

                /** Response detailPhotos. */
                public detailPhotos: string[];

                /** Response skuPhotos. */
                public skuPhotos: string[];

                /** Response videoUrl. */
                public videoUrl: string;

                /** Response videoCoverImage. */
                public videoCoverImage?: (Component.IImage|null);

                /** Response description. */
                public description: string;

                /** Response descDetailPhotos. */
                public descDetailPhotos: string[];

                /** Response optionList. */
                public optionList: App.Product.MagicBoxProductDetail.IOption[];

                /** Response mainImageInfos. */
                public mainImageInfos: Component.IImage[];

                /** Response detailImageInfos. */
                public detailImageInfos: Component.IImage[];

                /** Response skuImageInfos. */
                public skuImageInfos: Component.IImage[];

                /** Response descDetailImages. */
                public descDetailImages: Component.IImage[];

                /** Response handle. */
                public handle: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.MagicBoxProductDetail.IResponse): App.Product.MagicBoxProductDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.MagicBoxProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Option. */
            interface IOption {

                /** Option optionName */
                optionName?: (string|null);

                /** Option optionValNameList */
                optionValNameList?: (string[]|null);
            }

            /** Represents an Option. */
            class Option implements IOption {

                /**
                 * Constructs a new Option.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductDetail.IOption);

                /** Option optionName. */
                public optionName: string;

                /** Option optionValNameList. */
                public optionValNameList: string[];

                /**
                 * Creates a new Option instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Option instance
                 */
                public static create(properties?: App.Product.MagicBoxProductDetail.IOption): App.Product.MagicBoxProductDetail.Option;

                /**
                 * Encodes the specified Option message. Does not implicitly {@link App.Product.MagicBoxProductDetail.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductDetail.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Option message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductDetail.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductDetail.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Option message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductDetail.Option;

                /**
                 * Decodes an Option message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductDetail.Option;

                /**
                 * Verifies an Option message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Option message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Option
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductDetail.Option;

                /**
                 * Creates a plain object from an Option message. Also converts values to other types if specified.
                 * @param message Option
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductDetail.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Option to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxProductInfo. */
        namespace MagicBoxProductInfo {

            /** Properties of a ProductInfo. */
            interface IProductInfo {

                /** ProductInfo productId */
                productId?: (number|Long|null);

                /** ProductInfo spuId */
                spuId?: (number|Long|null);

                /** ProductInfo title */
                title?: (string|null);

                /** ProductInfo systemTitle */
                systemTitle?: (string|null);

                /** ProductInfo productImage */
                productImage?: (string|null);

                /** ProductInfo marketPrice */
                marketPrice?: (number|Long|null);

                /** ProductInfo salePrice */
                salePrice?: (number|Long|null);

                /** ProductInfo type */
                type?: (number|null);

                /** ProductInfo boxId */
                boxId?: (number|Long|null);

                /** ProductInfo skuId */
                skuId?: (number|Long|null);

                /** ProductInfo productImageInfo */
                productImageInfo?: (Component.IImage|null);

                /** ProductInfo handle */
                handle?: (string|null);
            }

            /** Represents a ProductInfo. */
            class ProductInfo implements IProductInfo {

                /**
                 * Constructs a new ProductInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductInfo.IProductInfo);

                /** ProductInfo productId. */
                public productId: (number|Long);

                /** ProductInfo spuId. */
                public spuId: (number|Long);

                /** ProductInfo title. */
                public title: string;

                /** ProductInfo systemTitle. */
                public systemTitle: string;

                /** ProductInfo productImage. */
                public productImage: string;

                /** ProductInfo marketPrice. */
                public marketPrice: (number|Long);

                /** ProductInfo salePrice. */
                public salePrice: (number|Long);

                /** ProductInfo type. */
                public type: number;

                /** ProductInfo boxId. */
                public boxId: (number|Long);

                /** ProductInfo skuId. */
                public skuId: (number|Long);

                /** ProductInfo productImageInfo. */
                public productImageInfo?: (Component.IImage|null);

                /** ProductInfo handle. */
                public handle: string;

                /**
                 * Creates a new ProductInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductInfo instance
                 */
                public static create(properties?: App.Product.MagicBoxProductInfo.IProductInfo): App.Product.MagicBoxProductInfo.ProductInfo;

                /**
                 * Encodes the specified ProductInfo message. Does not implicitly {@link App.Product.MagicBoxProductInfo.ProductInfo.verify|verify} messages.
                 * @param message ProductInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductInfo.IProductInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductInfo message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductInfo.ProductInfo.verify|verify} messages.
                 * @param message ProductInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductInfo.IProductInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductInfo.ProductInfo;

                /**
                 * Decodes a ProductInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductInfo.ProductInfo;

                /**
                 * Verifies a ProductInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductInfo.ProductInfo;

                /**
                 * Creates a plain object from a ProductInfo message. Also converts values to other types if specified.
                 * @param message ProductInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductInfo.ProductInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxProductList. */
        namespace MagicBoxProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request boxId */
                boxId?: (number|Long|null);

                /** Request type */
                type?: (number|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductList.IRequest);

                /** Request boxId. */
                public boxId: (number|Long);

                /** Request type. */
                public type: number;

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.MagicBoxProductList.IRequest): App.Product.MagicBoxProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.MagicBoxProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response total */
                total?: (number|null);

                /** Response pageNum */
                pageNum?: (number|null);

                /** Response pageSize */
                pageSize?: (number|null);

                /** Response productInfoList */
                productInfoList?: (App.Product.MagicBoxProductInfo.IProductInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MagicBoxProductList.IResponse);

                /** Response total. */
                public total: number;

                /** Response pageNum. */
                public pageNum: number;

                /** Response pageSize. */
                public pageSize: number;

                /** Response productInfoList. */
                public productInfoList: App.Product.MagicBoxProductInfo.IProductInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.MagicBoxProductList.IResponse): App.Product.MagicBoxProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.MagicBoxProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MagicBoxProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.MagicBoxProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MagicBoxProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MagicBoxProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MagicBoxProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MagicBoxProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MagicBoxProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MidYearSalePromotion. */
        namespace MidYearSalePromotion {

            /** Properties of a Request. */
            interface IRequest {

                /** Request tagId */
                tagId?: (number|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request sortType */
                sortType?: (string|null);

                /** Request sortOrder */
                sortOrder?: (string|null);

                /** Request size */
                size?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MidYearSalePromotion.IRequest);

                /** Request tagId. */
                public tagId: number;

                /** Request sortId. */
                public sortId: string;

                /** Request sortType. */
                public sortType: string;

                /** Request sortOrder. */
                public sortOrder: string;

                /** Request size. */
                public size: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.MidYearSalePromotion.IRequest): App.Product.MidYearSalePromotion.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.MidYearSalePromotion.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MidYearSalePromotion.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.MidYearSalePromotion.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MidYearSalePromotion.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MidYearSalePromotion.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MidYearSalePromotion.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MidYearSalePromotion.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MidYearSalePromotion.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response promotionInfo */
                promotionInfo?: (App.Product.MidYearSalePromotion.ISalePromotion[]|null);

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MidYearSalePromotion.IResponse);

                /** Response promotionInfo. */
                public promotionInfo: App.Product.MidYearSalePromotion.ISalePromotion[];

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.MidYearSalePromotion.IResponse): App.Product.MidYearSalePromotion.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.MidYearSalePromotion.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MidYearSalePromotion.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.MidYearSalePromotion.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MidYearSalePromotion.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MidYearSalePromotion.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MidYearSalePromotion.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.MidYearSalePromotion.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MidYearSalePromotion.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SalePromotion. */
            interface ISalePromotion {

                /** SalePromotion imageUrl */
                imageUrl?: (string|null);

                /** SalePromotion collectionId */
                collectionId?: (number|Long|null);

                /** SalePromotion collectionName */
                collectionName?: (string|null);
            }

            /** Represents a SalePromotion. */
            class SalePromotion implements ISalePromotion {

                /**
                 * Constructs a new SalePromotion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.MidYearSalePromotion.ISalePromotion);

                /** SalePromotion imageUrl. */
                public imageUrl: string;

                /** SalePromotion collectionId. */
                public collectionId: (number|Long);

                /** SalePromotion collectionName. */
                public collectionName: string;

                /**
                 * Creates a new SalePromotion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SalePromotion instance
                 */
                public static create(properties?: App.Product.MidYearSalePromotion.ISalePromotion): App.Product.MidYearSalePromotion.SalePromotion;

                /**
                 * Encodes the specified SalePromotion message. Does not implicitly {@link App.Product.MidYearSalePromotion.SalePromotion.verify|verify} messages.
                 * @param message SalePromotion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.MidYearSalePromotion.ISalePromotion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SalePromotion message, length delimited. Does not implicitly {@link App.Product.MidYearSalePromotion.SalePromotion.verify|verify} messages.
                 * @param message SalePromotion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.MidYearSalePromotion.ISalePromotion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SalePromotion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SalePromotion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.MidYearSalePromotion.SalePromotion;

                /**
                 * Decodes a SalePromotion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SalePromotion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.MidYearSalePromotion.SalePromotion;

                /**
                 * Verifies a SalePromotion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SalePromotion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SalePromotion
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.MidYearSalePromotion.SalePromotion;

                /**
                 * Creates a plain object from a SalePromotion message. Also converts values to other types if specified.
                 * @param message SalePromotion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.MidYearSalePromotion.SalePromotion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SalePromotion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace NavProductList. */
        namespace NavProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request navId */
                navId?: (number|Long|null);

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
                constructor(properties?: App.Product.NavProductList.IRequest);

                /** Request navId. */
                public navId: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.NavProductList.IRequest): App.Product.NavProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.NavProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.NavProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.NavProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.NavProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.NavProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.NavProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.NavProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.NavProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Product.NavProductList.IResponse);

                /** Response list. */
                public list: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.NavProductList.IResponse): App.Product.NavProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.NavProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.NavProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.NavProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.NavProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.NavProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.NavProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.NavProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.NavProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PolicyAndAddrList. */
        namespace PolicyAndAddrList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyAndAddrList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.PolicyAndAddrList.IRequest): App.Product.PolicyAndAddrList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.PolicyAndAddrList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyAndAddrList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.PolicyAndAddrList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyAndAddrList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyAndAddrList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyAndAddrList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyAndAddrList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyAndAddrList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response policyList */
                policyList?: (App.Product.PolicyAndAddrList.IPolicy[]|null);

                /** Response addr */
                addr?: (App.Product.PolicyAndAddrList.IFooterAddr|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyAndAddrList.IResponse);

                /** Response policyList. */
                public policyList: App.Product.PolicyAndAddrList.IPolicy[];

                /** Response addr. */
                public addr?: (App.Product.PolicyAndAddrList.IFooterAddr|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.PolicyAndAddrList.IResponse): App.Product.PolicyAndAddrList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.PolicyAndAddrList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyAndAddrList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.PolicyAndAddrList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyAndAddrList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyAndAddrList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyAndAddrList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyAndAddrList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyAndAddrList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy id */
                id?: (number|Long|null);

                /** Policy type */
                type?: (number|null);

                /** Policy policyTitle */
                policyTitle?: (string|null);

                /** Policy path */
                path?: (string|null);

                /** Policy url */
                url?: (string|null);

                /** Policy sort */
                sort?: (number|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyAndAddrList.IPolicy);

                /** Policy id. */
                public id: (number|Long);

                /** Policy type. */
                public type: number;

                /** Policy policyTitle. */
                public policyTitle: string;

                /** Policy path. */
                public path: string;

                /** Policy url. */
                public url: string;

                /** Policy sort. */
                public sort: number;

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: App.Product.PolicyAndAddrList.IPolicy): App.Product.PolicyAndAddrList.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link App.Product.PolicyAndAddrList.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyAndAddrList.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link App.Product.PolicyAndAddrList.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyAndAddrList.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyAndAddrList.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyAndAddrList.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyAndAddrList.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyAndAddrList.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FooterAddr. */
            interface IFooterAddr {

                /** FooterAddr title */
                title?: (string|null);

                /** FooterAddr companyName */
                companyName?: (string|null);

                /** FooterAddr companyAddr */
                companyAddr?: (string|null);

                /** FooterAddr phone */
                phone?: (string|null);

                /** FooterAddr note */
                note?: (string|null);

                /** FooterAddr disabled */
                disabled?: (number|null);
            }

            /** Represents a FooterAddr. */
            class FooterAddr implements IFooterAddr {

                /**
                 * Constructs a new FooterAddr.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyAndAddrList.IFooterAddr);

                /** FooterAddr title. */
                public title: string;

                /** FooterAddr companyName. */
                public companyName: string;

                /** FooterAddr companyAddr. */
                public companyAddr: string;

                /** FooterAddr phone. */
                public phone: string;

                /** FooterAddr note. */
                public note: string;

                /** FooterAddr disabled. */
                public disabled: number;

                /**
                 * Creates a new FooterAddr instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FooterAddr instance
                 */
                public static create(properties?: App.Product.PolicyAndAddrList.IFooterAddr): App.Product.PolicyAndAddrList.FooterAddr;

                /**
                 * Encodes the specified FooterAddr message. Does not implicitly {@link App.Product.PolicyAndAddrList.FooterAddr.verify|verify} messages.
                 * @param message FooterAddr message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyAndAddrList.IFooterAddr, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FooterAddr message, length delimited. Does not implicitly {@link App.Product.PolicyAndAddrList.FooterAddr.verify|verify} messages.
                 * @param message FooterAddr message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyAndAddrList.IFooterAddr, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FooterAddr message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FooterAddr
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyAndAddrList.FooterAddr;

                /**
                 * Decodes a FooterAddr message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FooterAddr
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyAndAddrList.FooterAddr;

                /**
                 * Verifies a FooterAddr message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FooterAddr message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FooterAddr
                 */
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyAndAddrList.FooterAddr;

                /**
                 * Creates a plain object from a FooterAddr message. Also converts values to other types if specified.
                 * @param message FooterAddr
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyAndAddrList.FooterAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FooterAddr to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PolicyGetUrl. */
        namespace PolicyGetUrl {

            /** Properties of a Request. */
            interface IRequest {

                /** Request path */
                path?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyGetUrl.IRequest);

                /** Request path. */
                public path: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.PolicyGetUrl.IRequest): App.Product.PolicyGetUrl.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.PolicyGetUrl.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyGetUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.PolicyGetUrl.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyGetUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyGetUrl.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyGetUrl.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyGetUrl.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyGetUrl.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response url */
                url?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.PolicyGetUrl.IResponse);

                /** Response url. */
                public url: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.PolicyGetUrl.IResponse): App.Product.PolicyGetUrl.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.PolicyGetUrl.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.PolicyGetUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.PolicyGetUrl.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.PolicyGetUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.PolicyGetUrl.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.PolicyGetUrl.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.PolicyGetUrl.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.PolicyGetUrl.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SearchAdvertProduct. */
        namespace SearchAdvertProduct {

            /** Properties of a Request. */
            interface IRequest {

                /** Request spuIds */
                spuIds?: (string|null);

                /** Request sortType */
                sortType?: (string|null);

                /** Request sortOrder */
                sortOrder?: (string|null);

                /** Request newProduct */
                newProduct?: (boolean|null);

                /** Request priceMin */
                priceMin?: (number|Long|null);

                /** Request priceMax */
                priceMax?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request size */
                size?: (number|null);

                /** Request type */
                type?: (number|null);

                /** Request data */
                data?: (string|null);

                /** Request navId */
                navId?: (number|Long|null);

                /** Request action */
                action?: (number|null);

                /** Request navKey */
                navKey?: (number|Long|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request searchType */
                searchType?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.SearchAdvertProduct.IRequest);

                /** Request spuIds. */
                public spuIds: string;

                /** Request sortType. */
                public sortType: string;

                /** Request sortOrder. */
                public sortOrder: string;

                /** Request newProduct. */
                public newProduct: boolean;

                /** Request priceMin. */
                public priceMin: (number|Long);

                /** Request priceMax. */
                public priceMax: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request size. */
                public size: number;

                /** Request type. */
                public type: number;

                /** Request data. */
                public data: string;

                /** Request navId. */
                public navId: (number|Long);

                /** Request action. */
                public action: number;

                /** Request navKey. */
                public navKey: (number|Long);

                /** Request pageNum. */
                public pageNum: number;

                /** Request searchType. */
                public searchType: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.SearchAdvertProduct.IRequest): App.Product.SearchAdvertProduct.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.SearchAdvertProduct.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.SearchAdvertProduct.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.SearchAdvertProduct.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.SearchAdvertProduct.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.SearchAdvertProduct.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.SearchAdvertProduct.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.SearchAdvertProduct.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.SearchAdvertProduct.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);

                /** Response saleTestList */
                saleTestList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.SearchAdvertProduct.IResponse);

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /** Response saleTestList. */
                public saleTestList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.SearchAdvertProduct.IResponse): App.Product.SearchAdvertProduct.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.SearchAdvertProduct.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.SearchAdvertProduct.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.SearchAdvertProduct.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.SearchAdvertProduct.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.SearchAdvertProduct.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.SearchAdvertProduct.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.SearchAdvertProduct.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.SearchAdvertProduct.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SearchProduct. */
        namespace SearchProduct {

            /** Properties of a Request. */
            interface IRequest {

                /** Request searchContent */
                searchContent?: (string|null);

                /** Request sortType */
                sortType?: (string|null);

                /** Request sortOrder */
                sortOrder?: (string|null);

                /** Request newProduct */
                newProduct?: (boolean|null);

                /** Request promotion */
                promotion?: (boolean|null);

                /** Request priceMin */
                priceMin?: (number|Long|null);

                /** Request priceMax */
                priceMax?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request size */
                size?: (number|null);

                /** Request type */
                type?: (number|null);

                /** Request data */
                data?: (string|null);

                /** Request navId */
                navId?: (number|Long|null);

                /** Request action */
                action?: (number|null);

                /** Request conditionType */
                conditionType?: (number|null);

                /** Request conditionVal */
                conditionVal?: (string|null);

                /** Request navKey */
                navKey?: (number|Long|null);

                /** Request collectionId */
                collectionId?: (number|Long|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request positionKey */
                positionKey?: (number|Long|null);

                /** Request hotSearchKey */
                hotSearchKey?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.SearchProduct.IRequest);

                /** Request searchContent. */
                public searchContent: string;

                /** Request sortType. */
                public sortType: string;

                /** Request sortOrder. */
                public sortOrder: string;

                /** Request newProduct. */
                public newProduct: boolean;

                /** Request promotion. */
                public promotion: boolean;

                /** Request priceMin. */
                public priceMin: (number|Long);

                /** Request priceMax. */
                public priceMax: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request size. */
                public size: number;

                /** Request type. */
                public type: number;

                /** Request data. */
                public data: string;

                /** Request navId. */
                public navId: (number|Long);

                /** Request action. */
                public action: number;

                /** Request conditionType. */
                public conditionType: number;

                /** Request conditionVal. */
                public conditionVal: string;

                /** Request navKey. */
                public navKey: (number|Long);

                /** Request collectionId. */
                public collectionId: (number|Long);

                /** Request pageNum. */
                public pageNum: number;

                /** Request positionKey. */
                public positionKey: (number|Long);

                /** Request hotSearchKey. */
                public hotSearchKey: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.SearchProduct.IRequest): App.Product.SearchProduct.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.SearchProduct.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.SearchProduct.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.SearchProduct.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.SearchProduct.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.SearchProduct.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.SearchProduct.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.SearchProduct.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.SearchProduct.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);

                /** Response saleTestList */
                saleTestList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.SearchProduct.IResponse);

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /** Response saleTestList. */
                public saleTestList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.SearchProduct.IResponse): App.Product.SearchProduct.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.SearchProduct.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.SearchProduct.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.SearchProduct.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.SearchProduct.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.SearchProduct.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.SearchProduct.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.SearchProduct.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.SearchProduct.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserRecentlyProductList. */
        namespace UserRecentlyProductList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.UserRecentlyProductList.IRequest);

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Product.UserRecentlyProductList.IRequest): App.Product.UserRecentlyProductList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Product.UserRecentlyProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.UserRecentlyProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Product.UserRecentlyProductList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.UserRecentlyProductList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.UserRecentlyProductList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.UserRecentlyProductList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Product.UserRecentlyProductList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.UserRecentlyProductList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response total */
                total?: (number|null);

                /** Response pageNum */
                pageNum?: (number|null);

                /** Response pageSize */
                pageSize?: (number|null);

                /** Response productInfoList */
                productInfoList?: (App.Product.MagicBoxProductInfo.IProductInfo[]|null);

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Product.UserRecentlyProductList.IResponse);

                /** Response total. */
                public total: number;

                /** Response pageNum. */
                public pageNum: number;

                /** Response pageSize. */
                public pageSize: number;

                /** Response productInfoList. */
                public productInfoList: App.Product.MagicBoxProductInfo.IProductInfo[];

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Product.UserRecentlyProductList.IResponse): App.Product.UserRecentlyProductList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Product.UserRecentlyProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Product.UserRecentlyProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Product.UserRecentlyProductList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Product.UserRecentlyProductList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Product.UserRecentlyProductList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Product.UserRecentlyProductList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Product.UserRecentlyProductList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Product.UserRecentlyProductList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

/** Namespace Product. */
export namespace Product {

    /** Namespace Category. */
    namespace Category {

        /** Namespace CategoryProductForward. */
        namespace CategoryProductForward {

            /** Properties of a Request. */
            interface IRequest {

                /** Request oldCategory */
                oldCategory?: (string|null);

                /** Request oldSpuIds */
                oldSpuIds?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Product.Category.CategoryProductForward.IRequest);

                /** Request oldCategory. */
                public oldCategory: string;

                /** Request oldSpuIds. */
                public oldSpuIds: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Product.Category.CategoryProductForward.IRequest): Product.Category.CategoryProductForward.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Product.Category.CategoryProductForward.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Product.Category.CategoryProductForward.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Product.Category.CategoryProductForward.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Product.Category.CategoryProductForward.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Product.Category.CategoryProductForward.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Product.Category.CategoryProductForward.Request;

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
                public static fromObject(object: { [k: string]: any }): Product.Category.CategoryProductForward.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Product.Category.CategoryProductForward.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response navId */
                navId?: (string|null);

                /** Response newSpuIds */
                newSpuIds?: (string|null);

                /** Response newHandle */
                newHandle?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Product.Category.CategoryProductForward.IResponse);

                /** Response navId. */
                public navId: string;

                /** Response newSpuIds. */
                public newSpuIds: string;

                /** Response newHandle. */
                public newHandle: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Product.Category.CategoryProductForward.IResponse): Product.Category.CategoryProductForward.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Product.Category.CategoryProductForward.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Product.Category.CategoryProductForward.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Product.Category.CategoryProductForward.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Product.Category.CategoryProductForward.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Product.Category.CategoryProductForward.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Product.Category.CategoryProductForward.Response;

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
                public static fromObject(object: { [k: string]: any }): Product.Category.CategoryProductForward.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Product.Category.CategoryProductForward.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Product. */
    namespace Product {

        /** Namespace ProductDetailForward. */
        namespace ProductDetailForward {

            /** Properties of a Request. */
            interface IRequest {

                /** Request handle */
                handle?: (string|null);
            }

            /** url: https:****.com/product/product/getNationalStoreSpuByHandle */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Product.Product.ProductDetailForward.IRequest);

                /** Request handle. */
                public handle: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Product.Product.ProductDetailForward.IRequest): Product.Product.ProductDetailForward.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Product.Product.ProductDetailForward.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Product.Product.ProductDetailForward.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Product.Product.ProductDetailForward.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Product.Product.ProductDetailForward.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Product.Product.ProductDetailForward.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Product.Product.ProductDetailForward.Request;

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
                public static fromObject(object: { [k: string]: any }): Product.Product.ProductDetailForward.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Product.Product.ProductDetailForward.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response spuId */
                spuId?: (string|null);

                /** Response newHandle */
                newHandle?: (string|null);

                /** Response host */
                host?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Product.Product.ProductDetailForward.IResponse);

                /** Response spuId. */
                public spuId: string;

                /** Response newHandle. */
                public newHandle: string;

                /** Response host. */
                public host: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Product.Product.ProductDetailForward.IResponse): Product.Product.ProductDetailForward.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Product.Product.ProductDetailForward.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Product.Product.ProductDetailForward.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Product.Product.ProductDetailForward.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Product.Product.ProductDetailForward.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Product.Product.ProductDetailForward.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Product.Product.ProductDetailForward.Response;

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
                public static fromObject(object: { [k: string]: any }): Product.Product.ProductDetailForward.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Product.Product.ProductDetailForward.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
