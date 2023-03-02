import * as $protobuf from "protobufjs";
/** Namespace CheckUpdate. */
export namespace CheckUpdate {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: CheckUpdate.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: CheckUpdate.IRequest): CheckUpdate.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link CheckUpdate.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CheckUpdate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link CheckUpdate.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CheckUpdate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckUpdate.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckUpdate.Request;

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
        public static fromObject(object: { [k: string]: any }): CheckUpdate.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CheckUpdate.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response description */
        description?: (string|null);

        /** Response version */
        version?: (string|null);

        /** Response isForce */
        isForce?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: CheckUpdate.IResponse);

        /** Response description. */
        public description: string;

        /** Response version. */
        public version: string;

        /** Response isForce. */
        public isForce: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: CheckUpdate.IResponse): CheckUpdate.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link CheckUpdate.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CheckUpdate.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link CheckUpdate.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CheckUpdate.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckUpdate.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckUpdate.Response;

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
        public static fromObject(object: { [k: string]: any }): CheckUpdate.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CheckUpdate.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace VersionUpdateConfigAdd. */
export namespace VersionUpdateConfigAdd {

    /** Properties of a Request. */
    interface IRequest {

        /** Request platform */
        platform?: (number|null);

        /** Request description */
        description?: (string|null);

        /** Request version */
        version?: (string|null);

        /** Request isForce */
        isForce?: (number|null);

        /** Request id */
        id?: (number|Long|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: VersionUpdateConfigAdd.IRequest);

        /** Request platform. */
        public platform: number;

        /** Request description. */
        public description: string;

        /** Request version. */
        public version: string;

        /** Request isForce. */
        public isForce: number;

        /** Request id. */
        public id: (number|Long);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: VersionUpdateConfigAdd.IRequest): VersionUpdateConfigAdd.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link VersionUpdateConfigAdd.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: VersionUpdateConfigAdd.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link VersionUpdateConfigAdd.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: VersionUpdateConfigAdd.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionUpdateConfigAdd.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VersionUpdateConfigAdd.Request;

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
        public static fromObject(object: { [k: string]: any }): VersionUpdateConfigAdd.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: VersionUpdateConfigAdd.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: VersionUpdateConfigAdd.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: VersionUpdateConfigAdd.IResponse): VersionUpdateConfigAdd.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link VersionUpdateConfigAdd.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: VersionUpdateConfigAdd.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link VersionUpdateConfigAdd.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: VersionUpdateConfigAdd.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionUpdateConfigAdd.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VersionUpdateConfigAdd.Response;

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
        public static fromObject(object: { [k: string]: any }): VersionUpdateConfigAdd.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: VersionUpdateConfigAdd.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace VersionUpdateConfigList. */
export namespace VersionUpdateConfigList {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: VersionUpdateConfigList.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: VersionUpdateConfigList.IRequest): VersionUpdateConfigList.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link VersionUpdateConfigList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: VersionUpdateConfigList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link VersionUpdateConfigList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: VersionUpdateConfigList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionUpdateConfigList.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VersionUpdateConfigList.Request;

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
        public static fromObject(object: { [k: string]: any }): VersionUpdateConfigList.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: VersionUpdateConfigList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response list */
        list?: (VersionUpdateConfigList.IVersionUpdateConfigInfo[]|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: VersionUpdateConfigList.IResponse);

        /** Response list. */
        public list: VersionUpdateConfigList.IVersionUpdateConfigInfo[];

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: VersionUpdateConfigList.IResponse): VersionUpdateConfigList.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link VersionUpdateConfigList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: VersionUpdateConfigList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link VersionUpdateConfigList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: VersionUpdateConfigList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionUpdateConfigList.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VersionUpdateConfigList.Response;

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
        public static fromObject(object: { [k: string]: any }): VersionUpdateConfigList.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: VersionUpdateConfigList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VersionUpdateConfigInfo. */
    interface IVersionUpdateConfigInfo {

        /** VersionUpdateConfigInfo platform */
        platform?: (number|null);

        /** VersionUpdateConfigInfo description */
        description?: (string|null);

        /** VersionUpdateConfigInfo opUserName */
        opUserName?: (string|null);

        /** VersionUpdateConfigInfo version */
        version?: (string|null);

        /** VersionUpdateConfigInfo isForce */
        isForce?: (number|null);

        /** VersionUpdateConfigInfo id */
        id?: (number|Long|null);

        /** VersionUpdateConfigInfo createTime */
        createTime?: (number|Long|null);

        /** VersionUpdateConfigInfo updateTime */
        updateTime?: (number|Long|null);
    }

    /** Represents a VersionUpdateConfigInfo. */
    class VersionUpdateConfigInfo implements IVersionUpdateConfigInfo {

        /**
         * Constructs a new VersionUpdateConfigInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: VersionUpdateConfigList.IVersionUpdateConfigInfo);

        /** VersionUpdateConfigInfo platform. */
        public platform: number;

        /** VersionUpdateConfigInfo description. */
        public description: string;

        /** VersionUpdateConfigInfo opUserName. */
        public opUserName: string;

        /** VersionUpdateConfigInfo version. */
        public version: string;

        /** VersionUpdateConfigInfo isForce. */
        public isForce: number;

        /** VersionUpdateConfigInfo id. */
        public id: (number|Long);

        /** VersionUpdateConfigInfo createTime. */
        public createTime: (number|Long);

        /** VersionUpdateConfigInfo updateTime. */
        public updateTime: (number|Long);

        /**
         * Creates a new VersionUpdateConfigInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionUpdateConfigInfo instance
         */
        public static create(properties?: VersionUpdateConfigList.IVersionUpdateConfigInfo): VersionUpdateConfigList.VersionUpdateConfigInfo;

        /**
         * Encodes the specified VersionUpdateConfigInfo message. Does not implicitly {@link VersionUpdateConfigList.VersionUpdateConfigInfo.verify|verify} messages.
         * @param message VersionUpdateConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: VersionUpdateConfigList.IVersionUpdateConfigInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionUpdateConfigInfo message, length delimited. Does not implicitly {@link VersionUpdateConfigList.VersionUpdateConfigInfo.verify|verify} messages.
         * @param message VersionUpdateConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: VersionUpdateConfigList.IVersionUpdateConfigInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionUpdateConfigInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionUpdateConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionUpdateConfigList.VersionUpdateConfigInfo;

        /**
         * Decodes a VersionUpdateConfigInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionUpdateConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VersionUpdateConfigList.VersionUpdateConfigInfo;

        /**
         * Verifies a VersionUpdateConfigInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionUpdateConfigInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionUpdateConfigInfo
         */
        public static fromObject(object: { [k: string]: any }): VersionUpdateConfigList.VersionUpdateConfigInfo;

        /**
         * Creates a plain object from a VersionUpdateConfigInfo message. Also converts values to other types if specified.
         * @param message VersionUpdateConfigInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: VersionUpdateConfigList.VersionUpdateConfigInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionUpdateConfigInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
