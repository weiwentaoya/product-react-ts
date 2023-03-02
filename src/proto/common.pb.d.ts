import * as $protobuf from "protobufjs";
/** Namespace Common. */
export namespace Common {

    /** Namespace CommonInfo. */
    namespace CommonInfo {

        /** Properties of a CommonDictInfo. */
        interface ICommonDictInfo {

            /** CommonDictInfo key */
            key?: (string|null);

            /** CommonDictInfo val */
            val?: (string|null);
        }

        /** Represents a CommonDictInfo. */
        class CommonDictInfo implements ICommonDictInfo {

            /**
             * Constructs a new CommonDictInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.CommonInfo.ICommonDictInfo);

            /** CommonDictInfo key. */
            public key: string;

            /** CommonDictInfo val. */
            public val: string;

            /**
             * Creates a new CommonDictInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonDictInfo instance
             */
            public static create(properties?: Common.CommonInfo.ICommonDictInfo): Common.CommonInfo.CommonDictInfo;

            /**
             * Encodes the specified CommonDictInfo message. Does not implicitly {@link Common.CommonInfo.CommonDictInfo.verify|verify} messages.
             * @param message CommonDictInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.CommonInfo.ICommonDictInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonDictInfo message, length delimited. Does not implicitly {@link Common.CommonInfo.CommonDictInfo.verify|verify} messages.
             * @param message CommonDictInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.CommonInfo.ICommonDictInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonDictInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonDictInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.CommonInfo.CommonDictInfo;

            /**
             * Decodes a CommonDictInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonDictInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.CommonInfo.CommonDictInfo;

            /**
             * Verifies a CommonDictInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonDictInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonDictInfo
             */
            public static fromObject(object: { [k: string]: any }): Common.CommonInfo.CommonDictInfo;

            /**
             * Creates a plain object from a CommonDictInfo message. Also converts values to other types if specified.
             * @param message CommonDictInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.CommonInfo.CommonDictInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonDictInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace DataChange. */
    namespace DataChange {

        /** Properties of a Request. */
        interface IRequest {

            /** Request PushToken */
            PushToken?: (Common.DataChange.IPushToken|null);

            /** Request tongdunId */
            tongdunId?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.DataChange.IRequest);

            /** Request PushToken. */
            public PushToken?: (Common.DataChange.IPushToken|null);

            /** Request tongdunId. */
            public tongdunId: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Common.DataChange.IRequest): Common.DataChange.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Common.DataChange.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.DataChange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Common.DataChange.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.DataChange.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.DataChange.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.DataChange.Request;

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
            public static fromObject(object: { [k: string]: any }): Common.DataChange.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.DataChange.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PushToken. */
        interface IPushToken {

            /** PushToken type */
            type?: (number|null);

            /** PushToken pushToken */
            pushToken?: (string|null);

            /** PushToken deviceType */
            deviceType?: (number|null);
        }

        /** Represents a PushToken. */
        class PushToken implements IPushToken {

            /**
             * Constructs a new PushToken.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.DataChange.IPushToken);

            /** PushToken type. */
            public type: number;

            /** PushToken pushToken. */
            public pushToken: string;

            /** PushToken deviceType. */
            public deviceType: number;

            /**
             * Creates a new PushToken instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PushToken instance
             */
            public static create(properties?: Common.DataChange.IPushToken): Common.DataChange.PushToken;

            /**
             * Encodes the specified PushToken message. Does not implicitly {@link Common.DataChange.PushToken.verify|verify} messages.
             * @param message PushToken message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.DataChange.IPushToken, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PushToken message, length delimited. Does not implicitly {@link Common.DataChange.PushToken.verify|verify} messages.
             * @param message PushToken message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.DataChange.IPushToken, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PushToken message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PushToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.DataChange.PushToken;

            /**
             * Decodes a PushToken message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PushToken
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.DataChange.PushToken;

            /**
             * Verifies a PushToken message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PushToken message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PushToken
             */
            public static fromObject(object: { [k: string]: any }): Common.DataChange.PushToken;

            /**
             * Creates a plain object from a PushToken message. Also converts values to other types if specified.
             * @param message PushToken
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.DataChange.PushToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PushToken to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace FbPageView. */
    namespace FbPageView {

        /** Properties of a Request. */
        interface IRequest {

            /** Request eventId */
            eventId?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.FbPageView.IRequest);

            /** Request eventId. */
            public eventId: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Common.FbPageView.IRequest): Common.FbPageView.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Common.FbPageView.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.FbPageView.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Common.FbPageView.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.FbPageView.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.FbPageView.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.FbPageView.Request;

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
            public static fromObject(object: { [k: string]: any }): Common.FbPageView.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.FbPageView.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.FbPageView.IResponse);

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Common.FbPageView.IResponse): Common.FbPageView.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Common.FbPageView.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.FbPageView.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Common.FbPageView.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.FbPageView.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.FbPageView.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.FbPageView.Response;

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
            public static fromObject(object: { [k: string]: any }): Common.FbPageView.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.FbPageView.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace CommonFile. */
    namespace CommonFile {

        /** Properties of a FilePackage. */
        interface IFilePackage {

            /** FilePackage files */
            files?: (Common.CommonFile.IFileInfo[]|null);
        }

        /** Represents a FilePackage. */
        class FilePackage implements IFilePackage {

            /**
             * Constructs a new FilePackage.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.CommonFile.IFilePackage);

            /** FilePackage files. */
            public files: Common.CommonFile.IFileInfo[];

            /**
             * Creates a new FilePackage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FilePackage instance
             */
            public static create(properties?: Common.CommonFile.IFilePackage): Common.CommonFile.FilePackage;

            /**
             * Encodes the specified FilePackage message. Does not implicitly {@link Common.CommonFile.FilePackage.verify|verify} messages.
             * @param message FilePackage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.CommonFile.IFilePackage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FilePackage message, length delimited. Does not implicitly {@link Common.CommonFile.FilePackage.verify|verify} messages.
             * @param message FilePackage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.CommonFile.IFilePackage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FilePackage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FilePackage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.CommonFile.FilePackage;

            /**
             * Decodes a FilePackage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FilePackage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.CommonFile.FilePackage;

            /**
             * Verifies a FilePackage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FilePackage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FilePackage
             */
            public static fromObject(object: { [k: string]: any }): Common.CommonFile.FilePackage;

            /**
             * Creates a plain object from a FilePackage message. Also converts values to other types if specified.
             * @param message FilePackage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.CommonFile.FilePackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FilePackage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileInfo. */
        interface IFileInfo {

            /** FileInfo name */
            name?: (string|null);

            /** FileInfo type */
            type?: (string|null);

            /** FileInfo size */
            size?: (number|null);

            /** FileInfo data */
            data?: (Uint8Array|null);
        }

        /** Represents a FileInfo. */
        class FileInfo implements IFileInfo {

            /**
             * Constructs a new FileInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.CommonFile.IFileInfo);

            /** FileInfo name. */
            public name: string;

            /** FileInfo type. */
            public type: string;

            /** FileInfo size. */
            public size: number;

            /** FileInfo data. */
            public data: Uint8Array;

            /**
             * Creates a new FileInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileInfo instance
             */
            public static create(properties?: Common.CommonFile.IFileInfo): Common.CommonFile.FileInfo;

            /**
             * Encodes the specified FileInfo message. Does not implicitly {@link Common.CommonFile.FileInfo.verify|verify} messages.
             * @param message FileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.CommonFile.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link Common.CommonFile.FileInfo.verify|verify} messages.
             * @param message FileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.CommonFile.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.CommonFile.FileInfo;

            /**
             * Decodes a FileInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.CommonFile.FileInfo;

            /**
             * Verifies a FileInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileInfo
             */
            public static fromObject(object: { [k: string]: any }): Common.CommonFile.FileInfo;

            /**
             * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
             * @param message FileInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.CommonFile.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace PresignUrl. */
    namespace PresignUrl {

        /** Properties of a Request. */
        interface IRequest {

            /** Request fileType */
            fileType?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.PresignUrl.IRequest);

            /** Request fileType. */
            public fileType: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Common.PresignUrl.IRequest): Common.PresignUrl.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Common.PresignUrl.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.PresignUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Common.PresignUrl.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.PresignUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.PresignUrl.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.PresignUrl.Request;

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
            public static fromObject(object: { [k: string]: any }): Common.PresignUrl.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.PresignUrl.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: Common.PresignUrl.IResponse);

            /** Response url. */
            public url: string;

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Common.PresignUrl.IResponse): Common.PresignUrl.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Common.PresignUrl.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.PresignUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Common.PresignUrl.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.PresignUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.PresignUrl.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.PresignUrl.Response;

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
            public static fromObject(object: { [k: string]: any }): Common.PresignUrl.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.PresignUrl.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace StatisticsLogReport. */
    namespace StatisticsLogReport {

        /** Properties of a Request. */
        interface IRequest {

            /** Request list */
            list?: (Common.StatisticsLogReport.IReportData[]|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.StatisticsLogReport.IRequest);

            /** Request list. */
            public list: Common.StatisticsLogReport.IReportData[];

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Common.StatisticsLogReport.IRequest): Common.StatisticsLogReport.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Common.StatisticsLogReport.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.StatisticsLogReport.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Common.StatisticsLogReport.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.StatisticsLogReport.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.StatisticsLogReport.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.StatisticsLogReport.Request;

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
            public static fromObject(object: { [k: string]: any }): Common.StatisticsLogReport.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.StatisticsLogReport.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReportData. */
        interface IReportData {

            /** ReportData eventId */
            eventId?: (string|null);

            /** ReportData params */
            params?: (string|null);

            /** ReportData logTime */
            logTime?: (number|Long|null);

            /** ReportData dt */
            dt?: (string|null);

            /** ReportData countryCode */
            countryCode?: (string|null);

            /** ReportData nationStoreId */
            nationStoreId?: (number|Long|null);

            /** ReportData language */
            language?: (string|null);

            /** ReportData webUrl */
            webUrl?: (string|null);

            /** ReportData utm */
            utm?: (string|null);

            /** ReportData grayVersion */
            grayVersion?: (string|null);
        }

        /** Represents a ReportData. */
        class ReportData implements IReportData {

            /**
             * Constructs a new ReportData.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.StatisticsLogReport.IReportData);

            /** ReportData eventId. */
            public eventId: string;

            /** ReportData params. */
            public params: string;

            /** ReportData logTime. */
            public logTime: (number|Long);

            /** ReportData dt. */
            public dt: string;

            /** ReportData countryCode. */
            public countryCode: string;

            /** ReportData nationStoreId. */
            public nationStoreId: (number|Long);

            /** ReportData language. */
            public language: string;

            /** ReportData webUrl. */
            public webUrl: string;

            /** ReportData utm. */
            public utm: string;

            /** ReportData grayVersion. */
            public grayVersion: string;

            /**
             * Creates a new ReportData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReportData instance
             */
            public static create(properties?: Common.StatisticsLogReport.IReportData): Common.StatisticsLogReport.ReportData;

            /**
             * Encodes the specified ReportData message. Does not implicitly {@link Common.StatisticsLogReport.ReportData.verify|verify} messages.
             * @param message ReportData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.StatisticsLogReport.IReportData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReportData message, length delimited. Does not implicitly {@link Common.StatisticsLogReport.ReportData.verify|verify} messages.
             * @param message ReportData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.StatisticsLogReport.IReportData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReportData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReportData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.StatisticsLogReport.ReportData;

            /**
             * Decodes a ReportData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReportData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.StatisticsLogReport.ReportData;

            /**
             * Verifies a ReportData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReportData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReportData
             */
            public static fromObject(object: { [k: string]: any }): Common.StatisticsLogReport.ReportData;

            /**
             * Creates a plain object from a ReportData message. Also converts values to other types if specified.
             * @param message ReportData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.StatisticsLogReport.ReportData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReportData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.StatisticsLogReport.IResponse);

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Common.StatisticsLogReport.IResponse): Common.StatisticsLogReport.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Common.StatisticsLogReport.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.StatisticsLogReport.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Common.StatisticsLogReport.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.StatisticsLogReport.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.StatisticsLogReport.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.StatisticsLogReport.Response;

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
            public static fromObject(object: { [k: string]: any }): Common.StatisticsLogReport.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.StatisticsLogReport.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace TemplateDownload. */
    namespace TemplateDownload {

        /** Properties of a Request. */
        interface IRequest {

            /** Request type */
            type?: (number|null);

            /** Request categoryId */
            categoryId?: (number|Long|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.TemplateDownload.IRequest);

            /** Request type. */
            public type: number;

            /** Request categoryId. */
            public categoryId: (number|Long);

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Common.TemplateDownload.IRequest): Common.TemplateDownload.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Common.TemplateDownload.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.TemplateDownload.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Common.TemplateDownload.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.TemplateDownload.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.TemplateDownload.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.TemplateDownload.Request;

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
            public static fromObject(object: { [k: string]: any }): Common.TemplateDownload.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.TemplateDownload.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response fileInfo */
            fileInfo?: (Common.CommonFile.IFileInfo|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Common.TemplateDownload.IResponse);

            /** Response fileInfo. */
            public fileInfo?: (Common.CommonFile.IFileInfo|null);

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Common.TemplateDownload.IResponse): Common.TemplateDownload.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Common.TemplateDownload.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Common.TemplateDownload.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Common.TemplateDownload.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Common.TemplateDownload.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.TemplateDownload.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.TemplateDownload.Response;

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
            public static fromObject(object: { [k: string]: any }): Common.TemplateDownload.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Common.TemplateDownload.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace CommonType. */
    namespace CommonType {

        /** LanguageType enum. */
        enum LanguageType {
            DEFAULT_TYPE = 0,
            EN = 1,
            FR = 2,
            DE = 3,
            ES = 4,
            PL = 5
        }

        /** GenderType enum. */
        enum GenderType {
            DEFAULT_GENDER = 0,
            MAN = 1,
            FEMALE = 2
        }

        /** TemplateType enum. */
        enum TemplateType {
            DEFAULT_OPTION_SELECT_TYPE = 0,
            PRODUCT = 1,
            OPTION = 2,
            CATEGORY = 3,
            PRODCUT_UPDATE_PRICE = 4,
            PRODCUT_UPDATE_INVENTORY = 5,
            SPU_UPDATE_VIRTUAL_SALE = 6,
            SHIPPING = 7
        }
    }
}

/** Namespace App. */
export namespace App {

    /** Namespace Common. */
    namespace Common {

        /** Namespace GetTitle. */
        namespace GetTitle {

            /** Properties of a Request. */
            interface IRequest {

                /** Request type */
                type?: (number|null);

                /** Request id */
                id?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Common.GetTitle.IRequest);

                /** Request type. */
                public type: number;

                /** Request id. */
                public id: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Common.GetTitle.IRequest): App.Common.GetTitle.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Common.GetTitle.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Common.GetTitle.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Common.GetTitle.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Common.GetTitle.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Common.GetTitle.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Common.GetTitle.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Common.GetTitle.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Common.GetTitle.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Common.GetTitle.IResponse);

                /** Response title. */
                public title: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Common.GetTitle.IResponse): App.Common.GetTitle.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Common.GetTitle.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Common.GetTitle.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Common.GetTitle.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Common.GetTitle.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Common.GetTitle.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Common.GetTitle.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Common.GetTitle.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Common.GetTitle.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ShortLink. */
        namespace ShortLink {

            /** Properties of a Request. */
            interface IRequest {

                /** Request originUrl */
                originUrl?: (string|null);

                /** Request utmSource */
                utmSource?: (string|null);

                /** Request utmMedium */
                utmMedium?: (string|null);

                /** Request utmAction */
                utmAction?: (string|null);

                /** Request utmCampagin */
                utmCampagin?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Common.ShortLink.IRequest);

                /** Request originUrl. */
                public originUrl: string;

                /** Request utmSource. */
                public utmSource: string;

                /** Request utmMedium. */
                public utmMedium: string;

                /** Request utmAction. */
                public utmAction: string;

                /** Request utmCampagin. */
                public utmCampagin: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Common.ShortLink.IRequest): App.Common.ShortLink.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Common.ShortLink.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Common.ShortLink.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Common.ShortLink.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Common.ShortLink.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Common.ShortLink.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Common.ShortLink.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Common.ShortLink.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Common.ShortLink.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response shortLink */
                shortLink?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Common.ShortLink.IResponse);

                /** Response shortLink. */
                public shortLink: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Common.ShortLink.IResponse): App.Common.ShortLink.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Common.ShortLink.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Common.ShortLink.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Common.ShortLink.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Common.ShortLink.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Common.ShortLink.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Common.ShortLink.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Common.ShortLink.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Common.ShortLink.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
