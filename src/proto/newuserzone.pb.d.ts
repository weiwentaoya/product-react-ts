import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Acitivity. */
    namespace Acitivity {

        /** Namespace AppNewUserZone. */
        namespace AppNewUserZone {

            /** Properties of a Request. */
            interface IRequest {

                /** Request sortId */
                sortId?: (string|null);

                /** Request hasZoneInfo */
                hasZoneInfo?: (boolean|null);

                /** Request platform */
                platform?: (number|null);

                /** Request countryCode */
                countryCode?: (string|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request pageSize */
                pageSize?: (number|null);

                /** 用户配置商品集支持的平台 0 全部 2 pc 3 h5 */
                dataSetPlatform?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZone.IRequest);

                /** Request sortId. */
                public sortId: string;

                /** Request hasZoneInfo. */
                public hasZoneInfo: boolean;

                /** Request platform. */
                public platform: number;

                /** Request countryCode. */
                public countryCode: string;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request pageSize. */
                public pageSize: number;

                /** 用户配置商品集支持的平台 0 全部 2 pc 3 h5 */
                public dataSetPlatform: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZone.IRequest): App.Acitivity.AppNewUserZone.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.AppNewUserZone.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZone.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZone.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZone.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZone.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZone.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZone.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZone.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response codeInfo */
                codeInfo?: (App.Acitivity.AppNewUserZone.ICodeInfo|null);

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);

                /** Response imgUrl */
                imgUrl?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZone.IResponse);

                /** Response codeInfo. */
                public codeInfo?: (App.Acitivity.AppNewUserZone.ICodeInfo|null);

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /** Response imgUrl. */
                public imgUrl: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZone.IResponse): App.Acitivity.AppNewUserZone.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.AppNewUserZone.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZone.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZone.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZone.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZone.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZone.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZone.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZone.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ZoneInfo. */
            interface IZoneInfo {

                /** ZoneInfo id */
                id?: (number|Long|null);

                /** ZoneInfo startTime */
                startTime?: (number|Long|null);

                /** ZoneInfo endTime */
                endTime?: (number|Long|null);
            }

            /** Represents a ZoneInfo. */
            class ZoneInfo implements IZoneInfo {

                /**
                 * Constructs a new ZoneInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZone.IZoneInfo);

                /** ZoneInfo id. */
                public id: (number|Long);

                /** ZoneInfo startTime. */
                public startTime: (number|Long);

                /** ZoneInfo endTime. */
                public endTime: (number|Long);

                /**
                 * Creates a new ZoneInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ZoneInfo instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZone.IZoneInfo): App.Acitivity.AppNewUserZone.ZoneInfo;

                /**
                 * Encodes the specified ZoneInfo message. Does not implicitly {@link App.Acitivity.AppNewUserZone.ZoneInfo.verify|verify} messages.
                 * @param message ZoneInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZone.IZoneInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ZoneInfo message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZone.ZoneInfo.verify|verify} messages.
                 * @param message ZoneInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZone.IZoneInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ZoneInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ZoneInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZone.ZoneInfo;

                /**
                 * Decodes a ZoneInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ZoneInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZone.ZoneInfo;

                /**
                 * Verifies a ZoneInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ZoneInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ZoneInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZone.ZoneInfo;

                /**
                 * Creates a plain object from a ZoneInfo message. Also converts values to other types if specified.
                 * @param message ZoneInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZone.ZoneInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ZoneInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CodeInfo. */
            interface ICodeInfo {

                /** CodeInfo code */
                code?: (string|null);

                /** CodeInfo startTime */
                startTime?: (number|Long|null);

                /** CodeInfo endTime */
                endTime?: (number|Long|null);

                /** CodeInfo codeType */
                codeType?: (number|null);

                /** CodeInfo codeValue */
                codeValue?: (number|null);

                /** CodeInfo restrictionRule */
                restrictionRule?: (number|null);

                /** CodeInfo restrictionRuleValue */
                restrictionRuleValue?: (number|null);

                /** CodeInfo dateSettingType */
                dateSettingType?: (number|null);

                /** CodeInfo duration */
                duration?: (number|null);
            }

            /** Represents a CodeInfo. */
            class CodeInfo implements ICodeInfo {

                /**
                 * Constructs a new CodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZone.ICodeInfo);

                /** CodeInfo code. */
                public code: string;

                /** CodeInfo startTime. */
                public startTime: (number|Long);

                /** CodeInfo endTime. */
                public endTime: (number|Long);

                /** CodeInfo codeType. */
                public codeType: number;

                /** CodeInfo codeValue. */
                public codeValue: number;

                /** CodeInfo restrictionRule. */
                public restrictionRule: number;

                /** CodeInfo restrictionRuleValue. */
                public restrictionRuleValue: number;

                /** CodeInfo dateSettingType. */
                public dateSettingType: number;

                /** CodeInfo duration. */
                public duration: number;

                /**
                 * Creates a new CodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CodeInfo instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZone.ICodeInfo): App.Acitivity.AppNewUserZone.CodeInfo;

                /**
                 * Encodes the specified CodeInfo message. Does not implicitly {@link App.Acitivity.AppNewUserZone.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZone.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfo message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZone.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZone.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZone.CodeInfo;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZone.CodeInfo;

                /**
                 * Verifies a CodeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CodeInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZone.CodeInfo;

                /**
                 * Creates a plain object from a CodeInfo message. Also converts values to other types if specified.
                 * @param message CodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZone.CodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppNewUserZoneCodeInfo. */
        namespace AppNewUserZoneCodeInfo {

            /** Properties of a Request. */
            interface IRequest {

                /** Request platform */
                platform?: (number|null);

                /** Request countryCode */
                countryCode?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZoneCodeInfo.IRequest);

                /** Request platform. */
                public platform: number;

                /** Request countryCode. */
                public countryCode: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZoneCodeInfo.IRequest): App.Acitivity.AppNewUserZoneCodeInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZoneCodeInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZoneCodeInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZoneCodeInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZoneCodeInfo.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZoneCodeInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZoneCodeInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response CodeDetail */
                CodeDetail?: (App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZoneCodeInfo.IResponse);

                /** Response CodeDetail. */
                public CodeDetail?: (App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZoneCodeInfo.IResponse): App.Acitivity.AppNewUserZoneCodeInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZoneCodeInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZoneCodeInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZoneCodeInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZoneCodeInfo.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZoneCodeInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZoneCodeInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CodeDetail. */
            interface ICodeDetail {

                /** CodeDetail code */
                code?: (string|null);

                /** CodeDetail startTime */
                startTime?: (number|Long|null);

                /** CodeDetail endTime */
                endTime?: (number|Long|null);

                /** CodeDetail codeType */
                codeType?: (number|null);

                /** CodeDetail codeValue */
                codeValue?: (number|null);

                /** CodeDetail restrictionRule */
                restrictionRule?: (number|null);

                /** CodeDetail restrictionRuleValue */
                restrictionRuleValue?: (number|null);
            }

            /** Represents a CodeDetail. */
            class CodeDetail implements ICodeDetail {

                /**
                 * Constructs a new CodeDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail);

                /** CodeDetail code. */
                public code: string;

                /** CodeDetail startTime. */
                public startTime: (number|Long);

                /** CodeDetail endTime. */
                public endTime: (number|Long);

                /** CodeDetail codeType. */
                public codeType: number;

                /** CodeDetail codeValue. */
                public codeValue: number;

                /** CodeDetail restrictionRule. */
                public restrictionRule: number;

                /** CodeDetail restrictionRuleValue. */
                public restrictionRuleValue: number;

                /**
                 * Creates a new CodeDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CodeDetail instance
                 */
                public static create(properties?: App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail): App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail;

                /**
                 * Encodes the specified CodeDetail message. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail.verify|verify} messages.
                 * @param message CodeDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeDetail message, length delimited. Does not implicitly {@link App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail.verify|verify} messages.
                 * @param message CodeDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.AppNewUserZoneCodeInfo.ICodeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail;

                /**
                 * Decodes a CodeDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail;

                /**
                 * Verifies a CodeDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CodeDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CodeDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail;

                /**
                 * Creates a plain object from a CodeDetail message. Also converts values to other types if specified.
                 * @param message CodeDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.AppNewUserZoneCodeInfo.CodeDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeDetail to JSON.
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
