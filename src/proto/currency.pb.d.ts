import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Currency. */
    namespace Currency {

        /** Namespace CurrencyList. */
        namespace CurrencyList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Currency.CurrencyList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Currency.CurrencyList.IRequest): App.Currency.CurrencyList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Currency.CurrencyList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Currency.CurrencyList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Currency.CurrencyList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Currency.CurrencyList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Currency.CurrencyList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Currency.CurrencyList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Currency.CurrencyList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Currency.CurrencyList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (App.Currency.CurrencyList.ICurrencyInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Currency.CurrencyList.IResponse);

                /** Response list. */
                public list: App.Currency.CurrencyList.ICurrencyInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Currency.CurrencyList.IResponse): App.Currency.CurrencyList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Currency.CurrencyList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Currency.CurrencyList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Currency.CurrencyList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Currency.CurrencyList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Currency.CurrencyList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Currency.CurrencyList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Currency.CurrencyList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Currency.CurrencyList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CurrencyInfo. */
            interface ICurrencyInfo {

                /** CurrencyInfo currency */
                currency?: (string|null);

                /** CurrencyInfo symbol */
                symbol?: (string|null);
            }

            /** Represents a CurrencyInfo. */
            class CurrencyInfo implements ICurrencyInfo {

                /**
                 * Constructs a new CurrencyInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Currency.CurrencyList.ICurrencyInfo);

                /** CurrencyInfo currency. */
                public currency: string;

                /** CurrencyInfo symbol. */
                public symbol: string;

                /**
                 * Creates a new CurrencyInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CurrencyInfo instance
                 */
                public static create(properties?: App.Currency.CurrencyList.ICurrencyInfo): App.Currency.CurrencyList.CurrencyInfo;

                /**
                 * Encodes the specified CurrencyInfo message. Does not implicitly {@link App.Currency.CurrencyList.CurrencyInfo.verify|verify} messages.
                 * @param message CurrencyInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Currency.CurrencyList.ICurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CurrencyInfo message, length delimited. Does not implicitly {@link App.Currency.CurrencyList.CurrencyInfo.verify|verify} messages.
                 * @param message CurrencyInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Currency.CurrencyList.ICurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CurrencyInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CurrencyInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Currency.CurrencyList.CurrencyInfo;

                /**
                 * Decodes a CurrencyInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CurrencyInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Currency.CurrencyList.CurrencyInfo;

                /**
                 * Verifies a CurrencyInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CurrencyInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CurrencyInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Currency.CurrencyList.CurrencyInfo;

                /**
                 * Creates a plain object from a CurrencyInfo message. Also converts values to other types if specified.
                 * @param message CurrencyInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Currency.CurrencyList.CurrencyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CurrencyInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
