import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Magicbox. */
    namespace Magicbox {

        /** Namespace MagicBoxAppModuleInfo. */
        namespace MagicBoxAppModuleInfo {

            /** Properties of a MagicBoxInfo. */
            interface IMagicBoxInfo {

                /** MagicBoxInfo magicBoxID */
                magicBoxID?: (number|Long|null);

                /** MagicBoxInfo magicBoxTitle */
                magicBoxTitle?: (string|null);

                /** MagicBoxInfo magicBoxImage */
                magicBoxImage?: (string|null);

                /** MagicBoxInfo magicBoxPrices */
                magicBoxPrices?: (number|Long|null);

                /** MagicBoxInfo normalRate */
                normalRate?: (number|null);

                /** MagicBoxInfo goodRate */
                goodRate?: (number|null);

                /** MagicBoxInfo excellentRate */
                excellentRate?: (number|null);

                /** MagicBoxInfo legendRate */
                legendRate?: (number|null);

                /** MagicBoxInfo newUserBenefitPrices */
                newUserBenefitPrices?: (number|Long|null);
            }

            /** Represents a MagicBoxInfo. */
            class MagicBoxInfo implements IMagicBoxInfo {

                /**
                 * Constructs a new MagicBoxInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo);

                /** MagicBoxInfo magicBoxID. */
                public magicBoxID: (number|Long);

                /** MagicBoxInfo magicBoxTitle. */
                public magicBoxTitle: string;

                /** MagicBoxInfo magicBoxImage. */
                public magicBoxImage: string;

                /** MagicBoxInfo magicBoxPrices. */
                public magicBoxPrices: (number|Long);

                /** MagicBoxInfo normalRate. */
                public normalRate: number;

                /** MagicBoxInfo goodRate. */
                public goodRate: number;

                /** MagicBoxInfo excellentRate. */
                public excellentRate: number;

                /** MagicBoxInfo legendRate. */
                public legendRate: number;

                /** MagicBoxInfo newUserBenefitPrices. */
                public newUserBenefitPrices: (number|Long);

                /**
                 * Creates a new MagicBoxInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MagicBoxInfo instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo): App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo;

                /**
                 * Encodes the specified MagicBoxInfo message. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo.verify|verify} messages.
                 * @param message MagicBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MagicBoxInfo message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo.verify|verify} messages.
                 * @param message MagicBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MagicBoxInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MagicBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo;

                /**
                 * Decodes a MagicBoxInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MagicBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo;

                /**
                 * Verifies a MagicBoxInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MagicBoxInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MagicBoxInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo;

                /**
                 * Creates a plain object from a MagicBoxInfo message. Also converts values to other types if specified.
                 * @param message MagicBoxInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxAppModuleInfo.MagicBoxInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MagicBoxInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MyMagicBoxInfo. */
            interface IMyMagicBoxInfo {

                /** MyMagicBoxInfo boxID */
                boxID?: (number|Long|null);

                /** MyMagicBoxInfo magicBoxID */
                magicBoxID?: (number|Long|null);

                /** MyMagicBoxInfo magicBoxTitle */
                magicBoxTitle?: (string|null);

                /** MyMagicBoxInfo magicBoxImage */
                magicBoxImage?: (string|null);

                /** MyMagicBoxInfo magicBoxPrices */
                magicBoxPrices?: (number|Long|null);

                /** MyMagicBoxInfo state */
                state?: (number|null);

                /** MyMagicBoxInfo openBoxTime */
                openBoxTime?: (number|Long|null);
            }

            /** Represents a MyMagicBoxInfo. */
            class MyMagicBoxInfo implements IMyMagicBoxInfo {

                /**
                 * Constructs a new MyMagicBoxInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo);

                /** MyMagicBoxInfo boxID. */
                public boxID: (number|Long);

                /** MyMagicBoxInfo magicBoxID. */
                public magicBoxID: (number|Long);

                /** MyMagicBoxInfo magicBoxTitle. */
                public magicBoxTitle: string;

                /** MyMagicBoxInfo magicBoxImage. */
                public magicBoxImage: string;

                /** MyMagicBoxInfo magicBoxPrices. */
                public magicBoxPrices: (number|Long);

                /** MyMagicBoxInfo state. */
                public state: number;

                /** MyMagicBoxInfo openBoxTime. */
                public openBoxTime: (number|Long);

                /**
                 * Creates a new MyMagicBoxInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MyMagicBoxInfo instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo;

                /**
                 * Encodes the specified MyMagicBoxInfo message. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo.verify|verify} messages.
                 * @param message MyMagicBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MyMagicBoxInfo message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo.verify|verify} messages.
                 * @param message MyMagicBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MyMagicBoxInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MyMagicBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo;

                /**
                 * Decodes a MyMagicBoxInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MyMagicBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo;

                /**
                 * Verifies a MyMagicBoxInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MyMagicBoxInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MyMagicBoxInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo;

                /**
                 * Creates a plain object from a MyMagicBoxInfo message. Also converts values to other types if specified.
                 * @param message MyMagicBoxInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MyMagicBoxInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MyMagicBoxDetail. */
            interface IMyMagicBoxDetail {

                /** MyMagicBoxDetail boxId */
                boxId?: (number|Long|null);

                /** MyMagicBoxDetail productId */
                productId?: (number|Long|null);

                /** MyMagicBoxDetail spuId */
                spuId?: (number|Long|null);

                /** MyMagicBoxDetail marketPrice */
                marketPrice?: (number|Long|null);

                /** MyMagicBoxDetail salePrice */
                salePrice?: (number|Long|null);

                /** MyMagicBoxDetail type */
                type?: (number|null);

                /** MyMagicBoxDetail mainPhotos */
                mainPhotos?: (string[]|null);

                /** MyMagicBoxDetail detailPhotos */
                detailPhotos?: (string[]|null);

                /** MyMagicBoxDetail videoUrl */
                videoUrl?: (string|null);

                /** MyMagicBoxDetail description */
                description?: (string|null);

                /** MyMagicBoxDetail winningPicture */
                winningPicture?: (string|null);

                /** MyMagicBoxDetail magicBoxPrice */
                magicBoxPrice?: (number|Long|null);

                /** MyMagicBoxDetail optionList */
                optionList?: (App.Magicbox.MagicBoxAppModuleInfo.IOption[]|null);

                /** MyMagicBoxDetail exchangeHkc */
                exchangeHkc?: (number|Long|null);

                /** MyMagicBoxDetail title */
                title?: (string|null);

                /** MyMagicBoxDetail systemTitle */
                systemTitle?: (string|null);

                /** MyMagicBoxDetail skuPhotos */
                skuPhotos?: (string[]|null);

                /** MyMagicBoxDetail videoCover */
                videoCover?: (string|null);

                /** MyMagicBoxDetail descDetailPhotos */
                descDetailPhotos?: (string[]|null);

                /** MyMagicBoxDetail enBoxTitle */
                enBoxTitle?: (string|null);
            }

            /** Represents a MyMagicBoxDetail. */
            class MyMagicBoxDetail implements IMyMagicBoxDetail {

                /**
                 * Constructs a new MyMagicBoxDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail);

                /** MyMagicBoxDetail boxId. */
                public boxId: (number|Long);

                /** MyMagicBoxDetail productId. */
                public productId: (number|Long);

                /** MyMagicBoxDetail spuId. */
                public spuId: (number|Long);

                /** MyMagicBoxDetail marketPrice. */
                public marketPrice: (number|Long);

                /** MyMagicBoxDetail salePrice. */
                public salePrice: (number|Long);

                /** MyMagicBoxDetail type. */
                public type: number;

                /** MyMagicBoxDetail mainPhotos. */
                public mainPhotos: string[];

                /** MyMagicBoxDetail detailPhotos. */
                public detailPhotos: string[];

                /** MyMagicBoxDetail videoUrl. */
                public videoUrl: string;

                /** MyMagicBoxDetail description. */
                public description: string;

                /** MyMagicBoxDetail winningPicture. */
                public winningPicture: string;

                /** MyMagicBoxDetail magicBoxPrice. */
                public magicBoxPrice: (number|Long);

                /** MyMagicBoxDetail optionList. */
                public optionList: App.Magicbox.MagicBoxAppModuleInfo.IOption[];

                /** MyMagicBoxDetail exchangeHkc. */
                public exchangeHkc: (number|Long);

                /** MyMagicBoxDetail title. */
                public title: string;

                /** MyMagicBoxDetail systemTitle. */
                public systemTitle: string;

                /** MyMagicBoxDetail skuPhotos. */
                public skuPhotos: string[];

                /** MyMagicBoxDetail videoCover. */
                public videoCover: string;

                /** MyMagicBoxDetail descDetailPhotos. */
                public descDetailPhotos: string[];

                /** MyMagicBoxDetail enBoxTitle. */
                public enBoxTitle: string;

                /**
                 * Creates a new MyMagicBoxDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MyMagicBoxDetail instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail;

                /**
                 * Encodes the specified MyMagicBoxDetail message. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail.verify|verify} messages.
                 * @param message MyMagicBoxDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MyMagicBoxDetail message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail.verify|verify} messages.
                 * @param message MyMagicBoxDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MyMagicBoxDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MyMagicBoxDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail;

                /**
                 * Decodes a MyMagicBoxDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MyMagicBoxDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail;

                /**
                 * Verifies a MyMagicBoxDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MyMagicBoxDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MyMagicBoxDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail;

                /**
                 * Creates a plain object from a MyMagicBoxDetail message. Also converts values to other types if specified.
                 * @param message MyMagicBoxDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxAppModuleInfo.MyMagicBoxDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MyMagicBoxDetail to JSON.
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
                constructor(properties?: App.Magicbox.MagicBoxAppModuleInfo.IOption);

                /** Option optionName. */
                public optionName: string;

                /** Option optionValNameList. */
                public optionValNameList: string[];

                /**
                 * Creates a new Option instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Option instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxAppModuleInfo.IOption): App.Magicbox.MagicBoxAppModuleInfo.Option;

                /**
                 * Encodes the specified Option message. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxAppModuleInfo.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Option message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxAppModuleInfo.Option.verify|verify} messages.
                 * @param message Option message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxAppModuleInfo.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Option message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxAppModuleInfo.Option;

                /**
                 * Decodes an Option message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Option
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxAppModuleInfo.Option;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxAppModuleInfo.Option;

                /**
                 * Creates a plain object from an Option message. Also converts values to other types if specified.
                 * @param message Option
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxAppModuleInfo.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Option to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxDetailById. */
        namespace MagicBoxDetailById {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxId */
                magicBoxId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxDetailById.IRequest);

                /** Request magicBoxId. */
                public magicBoxId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxDetailById.IRequest): App.Magicbox.MagicBoxDetailById.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MagicBoxDetailById.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxDetailById.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxDetailById.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxDetailById.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxDetailById.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxDetailById.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxDetailById.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxDetailById.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBoxDetail */
                magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxDetailById.IResponse);

                /** Response magicBoxDetail. */
                public magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxDetailById.IResponse): App.Magicbox.MagicBoxDetailById.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MagicBoxDetailById.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxDetailById.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxDetailById.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxDetailById.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxDetailById.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxDetailById.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxDetailById.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxDetailById.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxList. */
        namespace MagicBoxList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request id */
                id?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxList.IRequest);

                /** Request id. */
                public id: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxList.IRequest): App.Magicbox.MagicBoxList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MagicBoxList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBoxList */
                magicBoxList?: (App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MagicBoxList.IResponse);

                /** Response magicBoxList. */
                public magicBoxList: App.Magicbox.MagicBoxAppModuleInfo.IMagicBoxInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MagicBoxList.IResponse): App.Magicbox.MagicBoxList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MagicBoxList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MagicBoxList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MagicBoxList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MagicBoxList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MagicBoxList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MagicBoxList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MagicBoxList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MagicBoxList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyMagicBoxDetailById. */
        namespace MyMagicBoxDetailById {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxDetailById.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxDetailById.IRequest): App.Magicbox.MyMagicBoxDetailById.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MyMagicBoxDetailById.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxDetailById.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxDetailById.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxDetailById.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxDetailById.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxDetailById.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxDetailById.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxDetailById.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBoxInfo */
                magicBoxInfo?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxDetailById.IResponse);

                /** Response magicBoxInfo. */
                public magicBoxInfo?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxDetailById.IResponse): App.Magicbox.MyMagicBoxDetailById.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MyMagicBoxDetailById.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxDetailById.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxDetailById.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxDetailById.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxDetailById.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxDetailById.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxDetailById.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxDetailById.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyMagicBoxDetail. */
        namespace MyMagicBoxDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request boxId */
                boxId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxDetail.IRequest);

                /** Request boxId. */
                public boxId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxDetail.IRequest): App.Magicbox.MyMagicBoxDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MyMagicBoxDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBoxDetail */
                magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxDetail.IResponse);

                /** Response magicBoxDetail. */
                public magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxDetail.IResponse): App.Magicbox.MyMagicBoxDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MyMagicBoxDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyMagicBoxExchange. */
        namespace MyMagicBoxExchange {

            /** Properties of a Request. */
            interface IRequest {

                /** Request userBoxId */
                userBoxId?: (number|Long|null);

                /** Request exchangeType */
                exchangeType?: (number|null);

                /** Request addressId */
                addressId?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxExchange.IRequest);

                /** Request userBoxId. */
                public userBoxId: (number|Long);

                /** Request exchangeType. */
                public exchangeType: number;

                /** Request addressId. */
                public addressId: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxExchange.IRequest): App.Magicbox.MyMagicBoxExchange.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MyMagicBoxExchange.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxExchange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxExchange.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxExchange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxExchange.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxExchange.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxExchange.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxExchange.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response hkcAmount */
                hkcAmount?: (number|null);

                /** Response orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxExchange.IResponse);

                /** Response hkcAmount. */
                public hkcAmount: number;

                /** Response orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxExchange.IResponse): App.Magicbox.MyMagicBoxExchange.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MyMagicBoxExchange.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxExchange.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxExchange.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxExchange.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxExchange.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxExchange.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxExchange.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxExchange.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyMagicBoxList. */
        namespace MyMagicBoxList {

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
                constructor(properties?: App.Magicbox.MyMagicBoxList.IRequest);

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxList.IRequest): App.Magicbox.MyMagicBoxList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.MyMagicBoxList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response pageNum */
                pageNum?: (number|null);

                /** Response pageSize */
                pageSize?: (number|null);

                /** Response totalPage */
                totalPage?: (number|null);

                /** Response total */
                total?: (number|Long|null);

                /** Response magicBoxCount */
                magicBoxCount?: (number|null);

                /** Response myMagicBoxList */
                myMagicBoxList?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.MyMagicBoxList.IResponse);

                /** Response pageNum. */
                public pageNum: number;

                /** Response pageSize. */
                public pageSize: number;

                /** Response totalPage. */
                public totalPage: number;

                /** Response total. */
                public total: (number|Long);

                /** Response magicBoxCount. */
                public magicBoxCount: number;

                /** Response myMagicBoxList. */
                public myMagicBoxList: App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.MyMagicBoxList.IResponse): App.Magicbox.MyMagicBoxList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.MyMagicBoxList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.MyMagicBoxList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.MyMagicBoxList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.MyMagicBoxList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.MyMagicBoxList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.MyMagicBoxList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.MyMagicBoxList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.MyMagicBoxList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OpenMagicBox. */
        namespace OpenMagicBox {

            /** Properties of a Request. */
            interface IRequest {

                /** Request boxId */
                boxId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.OpenMagicBox.IRequest);

                /** Request boxId. */
                public boxId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.OpenMagicBox.IRequest): App.Magicbox.OpenMagicBox.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.OpenMagicBox.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.OpenMagicBox.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.OpenMagicBox.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.OpenMagicBox.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.OpenMagicBox.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.OpenMagicBox.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.OpenMagicBox.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.OpenMagicBox.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBoxDetail */
                magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.OpenMagicBox.IResponse);

                /** Response magicBoxDetail. */
                public magicBoxDetail?: (App.Magicbox.MagicBoxAppModuleInfo.IMyMagicBoxDetail|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.OpenMagicBox.IResponse): App.Magicbox.OpenMagicBox.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.OpenMagicBox.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.OpenMagicBox.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.OpenMagicBox.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.OpenMagicBox.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.OpenMagicBox.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.OpenMagicBox.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.OpenMagicBox.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.OpenMagicBox.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PayProcessingOrderCount. */
        namespace PayProcessingOrderCount {

            /** Properties of a Request. */
            interface IRequest {

                /** Request userId */
                userId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.PayProcessingOrderCount.IRequest);

                /** Request userId. */
                public userId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Magicbox.PayProcessingOrderCount.IRequest): App.Magicbox.PayProcessingOrderCount.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Magicbox.PayProcessingOrderCount.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.PayProcessingOrderCount.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Magicbox.PayProcessingOrderCount.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.PayProcessingOrderCount.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.PayProcessingOrderCount.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.PayProcessingOrderCount.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.PayProcessingOrderCount.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.PayProcessingOrderCount.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderCount */
                orderCount?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Magicbox.PayProcessingOrderCount.IResponse);

                /** Response orderCount. */
                public orderCount: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Magicbox.PayProcessingOrderCount.IResponse): App.Magicbox.PayProcessingOrderCount.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Magicbox.PayProcessingOrderCount.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Magicbox.PayProcessingOrderCount.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Magicbox.PayProcessingOrderCount.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Magicbox.PayProcessingOrderCount.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Magicbox.PayProcessingOrderCount.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Magicbox.PayProcessingOrderCount.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Magicbox.PayProcessingOrderCount.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Magicbox.PayProcessingOrderCount.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
