import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Account. */
    namespace Account {

        /** Namespace AssetFlowList. */
        namespace AssetFlowList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request id */
                id?: (number|Long|null);

                /** Request assetType */
                assetType?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Account.AssetFlowList.IRequest);

                /** Request id. */
                public id: (number|Long);

                /** Request assetType. */
                public assetType: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Account.AssetFlowList.IRequest): App.Account.AssetFlowList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Account.AssetFlowList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Account.AssetFlowList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Account.AssetFlowList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Account.AssetFlowList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Account.AssetFlowList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Account.AssetFlowList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Account.AssetFlowList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Account.AssetFlowList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response assetFlowList */
                assetFlowList?: (App.Account.AssetFlowList.IAssetFlowInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Account.AssetFlowList.IResponse);

                /** Response assetFlowList. */
                public assetFlowList: App.Account.AssetFlowList.IAssetFlowInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Account.AssetFlowList.IResponse): App.Account.AssetFlowList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Account.AssetFlowList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Account.AssetFlowList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Account.AssetFlowList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Account.AssetFlowList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Account.AssetFlowList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Account.AssetFlowList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Account.AssetFlowList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Account.AssetFlowList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AssetFlowInfo. */
            interface IAssetFlowInfo {

                /** AssetFlowInfo amount */
                amount?: (number|Long|null);

                /** AssetFlowInfo assetType */
                assetType?: (number|null);

                /** AssetFlowInfo type */
                type?: (number|null);

                /** AssetFlowInfo id */
                id?: (number|Long|null);

                /** AssetFlowInfo createTime */
                createTime?: (number|Long|null);
            }

            /** Represents an AssetFlowInfo. */
            class AssetFlowInfo implements IAssetFlowInfo {

                /**
                 * Constructs a new AssetFlowInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Account.AssetFlowList.IAssetFlowInfo);

                /** AssetFlowInfo amount. */
                public amount: (number|Long);

                /** AssetFlowInfo assetType. */
                public assetType: number;

                /** AssetFlowInfo type. */
                public type: number;

                /** AssetFlowInfo id. */
                public id: (number|Long);

                /** AssetFlowInfo createTime. */
                public createTime: (number|Long);

                /**
                 * Creates a new AssetFlowInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AssetFlowInfo instance
                 */
                public static create(properties?: App.Account.AssetFlowList.IAssetFlowInfo): App.Account.AssetFlowList.AssetFlowInfo;

                /**
                 * Encodes the specified AssetFlowInfo message. Does not implicitly {@link App.Account.AssetFlowList.AssetFlowInfo.verify|verify} messages.
                 * @param message AssetFlowInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Account.AssetFlowList.IAssetFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AssetFlowInfo message, length delimited. Does not implicitly {@link App.Account.AssetFlowList.AssetFlowInfo.verify|verify} messages.
                 * @param message AssetFlowInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Account.AssetFlowList.IAssetFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AssetFlowInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AssetFlowInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Account.AssetFlowList.AssetFlowInfo;

                /**
                 * Decodes an AssetFlowInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AssetFlowInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Account.AssetFlowList.AssetFlowInfo;

                /**
                 * Verifies an AssetFlowInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AssetFlowInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AssetFlowInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Account.AssetFlowList.AssetFlowInfo;

                /**
                 * Creates a plain object from an AssetFlowInfo message. Also converts values to other types if specified.
                 * @param message AssetFlowInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Account.AssetFlowList.AssetFlowInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AssetFlowInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserAccount. */
        namespace UserAccount {

            /** Properties of a Request. */
            interface IRequest {

                /** Request assetType */
                assetType?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Account.UserAccount.IRequest);

                /** Request assetType. */
                public assetType: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Account.UserAccount.IRequest): App.Account.UserAccount.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Account.UserAccount.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Account.UserAccount.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Account.UserAccount.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Account.UserAccount.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Account.UserAccount.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Account.UserAccount.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Account.UserAccount.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Account.UserAccount.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response amount */
                amount?: (number|Long|null);

                /** Response exchangeRate */
                exchangeRate?: (number|null);

                /** Response currencyExchangeRate */
                currencyExchangeRate?: (string|null);

                /** Response blackFridayRemainingEffectiveTime */
                blackFridayRemainingEffectiveTime?: (number|Long|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Account.UserAccount.IResponse);

                /** Response amount. */
                public amount: (number|Long);

                /** Response exchangeRate. */
                public exchangeRate: number;

                /** Response currencyExchangeRate. */
                public currencyExchangeRate: string;

                /** Response blackFridayRemainingEffectiveTime. */
                public blackFridayRemainingEffectiveTime: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Account.UserAccount.IResponse): App.Account.UserAccount.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Account.UserAccount.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Account.UserAccount.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Account.UserAccount.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Account.UserAccount.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Account.UserAccount.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Account.UserAccount.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Account.UserAccount.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Account.UserAccount.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
