import * as $protobuf from "protobufjs";
/** Namespace ActivityCodeInfo. */
export namespace ActivityCodeInfo {

    /** Properties of an ActivityCodeInfo. */
    interface IActivityCodeInfo {

        /** ActivityCodeInfo code */
        code?: (string|null);

        /** ActivityCodeInfo startTime */
        startTime?: (number|Long|null);

        /** ActivityCodeInfo endTime */
        endTime?: (number|Long|null);

        /** ActivityCodeInfo codeType */
        codeType?: (number|null);

        /** ActivityCodeInfo codeValue */
        codeValue?: (number|null);

        /** ActivityCodeInfo restrictionRule */
        restrictionRule?: (number|null);

        /** ActivityCodeInfo restrictionRuleValue */
        restrictionRuleValue?: (number|null);

        /** ActivityCodeInfo desc */
        desc?: (string|null);

        /** ActivityCodeInfo claim */
        claim?: (number|null);

        /** ActivityCodeInfo isFirstOrder */
        isFirstOrder?: (number|null);

        /** ActivityCodeInfo noEndTime */
        noEndTime?: (number|null);

        /** ActivityCodeInfo dateSettingType */
        dateSettingType?: (number|null);

        /** ActivityCodeInfo duration */
        duration?: (number|null);

        /** ActivityCodeInfo accessChannel */
        accessChannel?: (number|null);

        /** ActivityCodeInfo codeId */
        codeId?: (number|Long|null);
    }

    /** Represents an ActivityCodeInfo. */
    class ActivityCodeInfo implements IActivityCodeInfo {

        /**
         * Constructs a new ActivityCodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActivityCodeInfo.IActivityCodeInfo);

        /** ActivityCodeInfo code. */
        public code: string;

        /** ActivityCodeInfo startTime. */
        public startTime: (number|Long);

        /** ActivityCodeInfo endTime. */
        public endTime: (number|Long);

        /** ActivityCodeInfo codeType. */
        public codeType: number;

        /** ActivityCodeInfo codeValue. */
        public codeValue: number;

        /** ActivityCodeInfo restrictionRule. */
        public restrictionRule: number;

        /** ActivityCodeInfo restrictionRuleValue. */
        public restrictionRuleValue: number;

        /** ActivityCodeInfo desc. */
        public desc: string;

        /** ActivityCodeInfo claim. */
        public claim: number;

        /** ActivityCodeInfo isFirstOrder. */
        public isFirstOrder: number;

        /** ActivityCodeInfo noEndTime. */
        public noEndTime: number;

        /** ActivityCodeInfo dateSettingType. */
        public dateSettingType: number;

        /** ActivityCodeInfo duration. */
        public duration: number;

        /** ActivityCodeInfo accessChannel. */
        public accessChannel: number;

        /** ActivityCodeInfo codeId. */
        public codeId: (number|Long);

        /**
         * Creates a new ActivityCodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityCodeInfo instance
         */
        public static create(properties?: ActivityCodeInfo.IActivityCodeInfo): ActivityCodeInfo.ActivityCodeInfo;

        /**
         * Encodes the specified ActivityCodeInfo message. Does not implicitly {@link ActivityCodeInfo.ActivityCodeInfo.verify|verify} messages.
         * @param message ActivityCodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActivityCodeInfo.IActivityCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityCodeInfo message, length delimited. Does not implicitly {@link ActivityCodeInfo.ActivityCodeInfo.verify|verify} messages.
         * @param message ActivityCodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActivityCodeInfo.IActivityCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityCodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityCodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityCodeInfo.ActivityCodeInfo;

        /**
         * Decodes an ActivityCodeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityCodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityCodeInfo.ActivityCodeInfo;

        /**
         * Verifies an ActivityCodeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityCodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityCodeInfo
         */
        public static fromObject(object: { [k: string]: any }): ActivityCodeInfo.ActivityCodeInfo;

        /**
         * Creates a plain object from an ActivityCodeInfo message. Also converts values to other types if specified.
         * @param message ActivityCodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ActivityCodeInfo.ActivityCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityCodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Activity. */
export namespace Activity {

    /** Namespace AppFeedback. */
    namespace AppFeedback {

        /** Properties of a Request. */
        interface IRequest {

            /** Request platform */
            platform?: (number|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFeedback.IRequest);

            /** Request platform. */
            public platform: number;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Activity.AppFeedback.IRequest): Activity.AppFeedback.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Activity.AppFeedback.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFeedback.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.AppFeedback.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFeedback.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFeedback.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFeedback.Request;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFeedback.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFeedback.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: Activity.AppFeedback.IResponse);

            /** Response url. */
            public url: string;

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Activity.AppFeedback.IResponse): Activity.AppFeedback.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Activity.AppFeedback.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFeedback.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.AppFeedback.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFeedback.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFeedback.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFeedback.Response;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFeedback.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFeedback.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AppFlashSale. */
    namespace AppFlashSale {

        /** Properties of an AppFlashSale. */
        interface IAppFlashSale {

            /** 类目id */
            flashId?: (number|Long|null);

            /** 开始时间 */
            startTime?: (number|Long|null);

            /** 结束时间 */
            endTime?: (number|Long|null);

            /** AppFlashSale title */
            title?: (string|null);

            /** AppFlashSale navList */
            navList?: (Activity.AppFlashSaleNav.IAppFlashSaleNav[]|null);

            /**
             * 1, "In-active"
             * 不可用--未开始
             * 3, "Pre-active",
             */
            status?: (number|null);
        }

        /** Represents an AppFlashSale. */
        class AppFlashSale implements IAppFlashSale {

            /**
             * Constructs a new AppFlashSale.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSale.IAppFlashSale);

            /** 类目id */
            public flashId: (number|Long);

            /** 开始时间 */
            public startTime: (number|Long);

            /** 结束时间 */
            public endTime: (number|Long);

            /** AppFlashSale title. */
            public title: string;

            /** AppFlashSale navList. */
            public navList: Activity.AppFlashSaleNav.IAppFlashSaleNav[];

            /**
             * 1, "In-active"
             * 不可用--未开始
             * 3, "Pre-active",
             */
            public status: number;

            /**
             * Creates a new AppFlashSale instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppFlashSale instance
             */
            public static create(properties?: Activity.AppFlashSale.IAppFlashSale): Activity.AppFlashSale.AppFlashSale;

            /**
             * Encodes the specified AppFlashSale message. Does not implicitly {@link Activity.AppFlashSale.AppFlashSale.verify|verify} messages.
             * @param message AppFlashSale message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSale.IAppFlashSale, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppFlashSale message, length delimited. Does not implicitly {@link Activity.AppFlashSale.AppFlashSale.verify|verify} messages.
             * @param message AppFlashSale message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSale.IAppFlashSale, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppFlashSale message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppFlashSale
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSale.AppFlashSale;

            /**
             * Decodes an AppFlashSale message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppFlashSale
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSale.AppFlashSale;

            /**
             * Verifies an AppFlashSale message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppFlashSale message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppFlashSale
             */
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSale.AppFlashSale;

            /**
             * Creates a plain object from an AppFlashSale message. Also converts values to other types if specified.
             * @param message AppFlashSale
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSale.AppFlashSale, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppFlashSale to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AppFlashSaleNav. */
    namespace AppFlashSaleNav {

        /** Properties of an AppFlashSaleNav. */
        interface IAppFlashSaleNav {

            /** 类目id */
            navId?: (number|Long|null);

            /** 类目名称 */
            navName?: (string|null);
        }

        /** Represents an AppFlashSaleNav. */
        class AppFlashSaleNav implements IAppFlashSaleNav {

            /**
             * Constructs a new AppFlashSaleNav.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleNav.IAppFlashSaleNav);

            /** 类目id */
            public navId: (number|Long);

            /** 类目名称 */
            public navName: string;

            /**
             * Creates a new AppFlashSaleNav instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AppFlashSaleNav instance
             */
            public static create(properties?: Activity.AppFlashSaleNav.IAppFlashSaleNav): Activity.AppFlashSaleNav.AppFlashSaleNav;

            /**
             * Encodes the specified AppFlashSaleNav message. Does not implicitly {@link Activity.AppFlashSaleNav.AppFlashSaleNav.verify|verify} messages.
             * @param message AppFlashSaleNav message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleNav.IAppFlashSaleNav, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AppFlashSaleNav message, length delimited. Does not implicitly {@link Activity.AppFlashSaleNav.AppFlashSaleNav.verify|verify} messages.
             * @param message AppFlashSaleNav message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleNav.IAppFlashSaleNav, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AppFlashSaleNav message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AppFlashSaleNav
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleNav.AppFlashSaleNav;

            /**
             * Decodes an AppFlashSaleNav message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AppFlashSaleNav
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleNav.AppFlashSaleNav;

            /**
             * Verifies an AppFlashSaleNav message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AppFlashSaleNav message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AppFlashSaleNav
             */
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleNav.AppFlashSaleNav;

            /**
             * Creates a plain object from an AppFlashSaleNav message. Also converts values to other types if specified.
             * @param message AppFlashSaleNav
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleNav.AppFlashSaleNav, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AppFlashSaleNav to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AppFlashSaleIndex. */
    namespace AppFlashSaleIndex {

        /** Properties of a Request. */
        interface IRequest {
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleIndex.IRequest);

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Activity.AppFlashSaleIndex.IRequest): Activity.AppFlashSaleIndex.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Activity.AppFlashSaleIndex.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.AppFlashSaleIndex.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleIndex.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleIndex.Request;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleIndex.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleIndex.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response startTime */
            startTime?: (number|Long|null);

            /** flash sale 列表 */
            endTime?: (number|Long|null);

            /** 标题 */
            title?: (string|null);

            /** Response flashId */
            flashId?: (number|Long|null);

            /** spu 列表 */
            spuList?: (Component.ISpuInfo[]|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleIndex.IResponse);

            /** Response startTime. */
            public startTime: (number|Long);

            /** flash sale 列表 */
            public endTime: (number|Long);

            /** 标题 */
            public title: string;

            /** Response flashId. */
            public flashId: (number|Long);

            /** spu 列表 */
            public spuList: Component.ISpuInfo[];

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Activity.AppFlashSaleIndex.IResponse): Activity.AppFlashSaleIndex.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Activity.AppFlashSaleIndex.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.AppFlashSaleIndex.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleIndex.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleIndex.Response;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleIndex.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleIndex.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AppFlashSaleList. */
    namespace AppFlashSaleList {

        /** Properties of a Request. */
        interface IRequest {
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleList.IRequest);

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Activity.AppFlashSaleList.IRequest): Activity.AppFlashSaleList.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Activity.AppFlashSaleList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.AppFlashSaleList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleList.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleList.Request;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleList.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** flash sale 列表 */
            flashSaleList?: (Activity.AppFlashSale.IAppFlashSale[]|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleList.IResponse);

            /** flash sale 列表 */
            public flashSaleList: Activity.AppFlashSale.IAppFlashSale[];

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Activity.AppFlashSaleList.IResponse): Activity.AppFlashSaleList.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Activity.AppFlashSaleList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.AppFlashSaleList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleList.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleList.Response;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleList.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AppFlashSaleSpuList. */
    namespace AppFlashSaleSpuList {

        /** Properties of a Request. */
        interface IRequest {

            /** Request navId */
            navId?: (number|Long|null);

            /** Request flashSaleId */
            flashSaleId?: (number|Long|null);

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
            constructor(properties?: Activity.AppFlashSaleSpuList.IRequest);

            /** Request navId. */
            public navId: (number|Long);

            /** Request flashSaleId. */
            public flashSaleId: (number|Long);

            /** Request pageNum. */
            public pageNum: number;

            /** Request pageSize. */
            public pageSize: number;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: Activity.AppFlashSaleSpuList.IRequest): Activity.AppFlashSaleSpuList.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link Activity.AppFlashSaleSpuList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleSpuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.AppFlashSaleSpuList.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleSpuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleSpuList.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleSpuList.Request;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleSpuList.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleSpuList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** spu 列表 */
            spuList?: (Component.ISpuInfo[]|null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: Activity.AppFlashSaleSpuList.IResponse);

            /** spu 列表 */
            public spuList: Component.ISpuInfo[];

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: Activity.AppFlashSaleSpuList.IResponse): Activity.AppFlashSaleSpuList.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link Activity.AppFlashSaleSpuList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Activity.AppFlashSaleSpuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.AppFlashSaleSpuList.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Activity.AppFlashSaleSpuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.AppFlashSaleSpuList.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.AppFlashSaleSpuList.Response;

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
            public static fromObject(object: { [k: string]: any }): Activity.AppFlashSaleSpuList.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Activity.AppFlashSaleSpuList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace BestSellers. */
    namespace BestSellers {

        /** Namespace BestSellers. */
        namespace BestSellers {

            /** Properties of a Request. */
            interface IRequest {

                /** Request baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** Request requiredBaseCates */
                requiredBaseCates?: (boolean|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.BestSellers.BestSellers.IRequest);

                /** Request baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** Request requiredBaseCates. */
                public requiredBaseCates: boolean;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.BestSellers.BestSellers.IRequest): Activity.BestSellers.BestSellers.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.BestSellers.BestSellers.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.BestSellers.BestSellers.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.BestSellers.BestSellers.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.BestSellers.BestSellers.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.BestSellers.BestSellers.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.BestSellers.BestSellers.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.BestSellers.BestSellers.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.BestSellers.BestSellers.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response baseCategoryList */
                baseCategoryList?: (Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory[]|null);

                /** Response secondaryCategoryList */
                secondaryCategoryList?: (Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.BestSellers.BestSellers.IResponse);

                /** Response baseCategoryList. */
                public baseCategoryList: Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory[];

                /** Response secondaryCategoryList. */
                public secondaryCategoryList: Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.BestSellers.BestSellers.IResponse): Activity.BestSellers.BestSellers.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.BestSellers.BestSellers.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.BestSellers.BestSellers.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.BestSellers.BestSellers.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.BestSellers.BestSellers.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.BestSellers.BestSellers.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.BestSellers.BestSellers.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.BestSellers.BestSellers.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.BestSellers.BestSellers.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace BestSellersBaseCategory. */
        namespace BestSellersBaseCategory {

            /** Properties of a BestSellersBaseCategory. */
            interface IBestSellersBaseCategory {

                /** BestSellersBaseCategory baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** BestSellersBaseCategory baseCategoryName */
                baseCategoryName?: (string|null);
            }

            /** Represents a BestSellersBaseCategory. */
            class BestSellersBaseCategory implements IBestSellersBaseCategory {

                /**
                 * Constructs a new BestSellersBaseCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory);

                /** BestSellersBaseCategory baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** BestSellersBaseCategory baseCategoryName. */
                public baseCategoryName: string;

                /**
                 * Creates a new BestSellersBaseCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BestSellersBaseCategory instance
                 */
                public static create(properties?: Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory): Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory;

                /**
                 * Encodes the specified BestSellersBaseCategory message. Does not implicitly {@link Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory.verify|verify} messages.
                 * @param message BestSellersBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BestSellersBaseCategory message, length delimited. Does not implicitly {@link Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory.verify|verify} messages.
                 * @param message BestSellersBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.BestSellers.BestSellersBaseCategory.IBestSellersBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BestSellersBaseCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BestSellersBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory;

                /**
                 * Decodes a BestSellersBaseCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BestSellersBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory;

                /**
                 * Verifies a BestSellersBaseCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BestSellersBaseCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BestSellersBaseCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory;

                /**
                 * Creates a plain object from a BestSellersBaseCategory message. Also converts values to other types if specified.
                 * @param message BestSellersBaseCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.BestSellers.BestSellersBaseCategory.BestSellersBaseCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BestSellersBaseCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace BestSellersHotSecondaryCategory. */
        namespace BestSellersHotSecondaryCategory {

            /** Properties of a BestSellersHotSecondaryCategory. */
            interface IBestSellersHotSecondaryCategory {

                /** BestSellersHotSecondaryCategory baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** BestSellersHotSecondaryCategory baseCategoryName */
                baseCategoryName?: (string|null);

                /** BestSellersHotSecondaryCategory secondaryCategoryId */
                secondaryCategoryId?: (number|Long|null);

                /** BestSellersHotSecondaryCategory secondaryCategoryName */
                secondaryCategoryName?: (string|null);

                /** BestSellersHotSecondaryCategory secondaryCategoryType */
                secondaryCategoryType?: (string|null);

                /** BestSellersHotSecondaryCategory orderCount */
                orderCount?: (number|Long|null);

                /** BestSellersHotSecondaryCategory topNProducts */
                topNProducts?: (Component.ISpuInfo[]|null);
            }

            /** Represents a BestSellersHotSecondaryCategory. */
            class BestSellersHotSecondaryCategory implements IBestSellersHotSecondaryCategory {

                /**
                 * Constructs a new BestSellersHotSecondaryCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory);

                /** BestSellersHotSecondaryCategory baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** BestSellersHotSecondaryCategory baseCategoryName. */
                public baseCategoryName: string;

                /** BestSellersHotSecondaryCategory secondaryCategoryId. */
                public secondaryCategoryId: (number|Long);

                /** BestSellersHotSecondaryCategory secondaryCategoryName. */
                public secondaryCategoryName: string;

                /** BestSellersHotSecondaryCategory secondaryCategoryType. */
                public secondaryCategoryType: string;

                /** BestSellersHotSecondaryCategory orderCount. */
                public orderCount: (number|Long);

                /** BestSellersHotSecondaryCategory topNProducts. */
                public topNProducts: Component.ISpuInfo[];

                /**
                 * Creates a new BestSellersHotSecondaryCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BestSellersHotSecondaryCategory instance
                 */
                public static create(properties?: Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory): Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory;

                /**
                 * Encodes the specified BestSellersHotSecondaryCategory message. Does not implicitly {@link Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory.verify|verify} messages.
                 * @param message BestSellersHotSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BestSellersHotSecondaryCategory message, length delimited. Does not implicitly {@link Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory.verify|verify} messages.
                 * @param message BestSellersHotSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.BestSellers.BestSellersHotSecondaryCategory.IBestSellersHotSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BestSellersHotSecondaryCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BestSellersHotSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory;

                /**
                 * Decodes a BestSellersHotSecondaryCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BestSellersHotSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory;

                /**
                 * Verifies a BestSellersHotSecondaryCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BestSellersHotSecondaryCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BestSellersHotSecondaryCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory;

                /**
                 * Creates a plain object from a BestSellersHotSecondaryCategory message. Also converts values to other types if specified.
                 * @param message BestSellersHotSecondaryCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.BestSellers.BestSellersHotSecondaryCategory.BestSellersHotSecondaryCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BestSellersHotSecondaryCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace BestSellersSecondaryCategoryTopNProductItem. */
        namespace BestSellersSecondaryCategoryTopNProductItem {

            /** Properties of a BestSellersSecondaryCategoryTopNProductItem. */
            interface IBestSellersSecondaryCategoryTopNProductItem {

                /** BestSellersSecondaryCategoryTopNProductItem productId */
                productId?: (number|Long|null);

                /** BestSellersSecondaryCategoryTopNProductItem spuId */
                spuId?: (number|Long|null);

                /** BestSellersSecondaryCategoryTopNProductItem productImgLink */
                productImgLink?: (string|null);

                /** BestSellersSecondaryCategoryTopNProductItem productSalePrice */
                productSalePrice?: (number|Long|null);
            }

            /** Represents a BestSellersSecondaryCategoryTopNProductItem. */
            class BestSellersSecondaryCategoryTopNProductItem implements IBestSellersSecondaryCategoryTopNProductItem {

                /**
                 * Constructs a new BestSellersSecondaryCategoryTopNProductItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.IBestSellersSecondaryCategoryTopNProductItem);

                /** BestSellersSecondaryCategoryTopNProductItem productId. */
                public productId: (number|Long);

                /** BestSellersSecondaryCategoryTopNProductItem spuId. */
                public spuId: (number|Long);

                /** BestSellersSecondaryCategoryTopNProductItem productImgLink. */
                public productImgLink: string;

                /** BestSellersSecondaryCategoryTopNProductItem productSalePrice. */
                public productSalePrice: (number|Long);

                /**
                 * Creates a new BestSellersSecondaryCategoryTopNProductItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BestSellersSecondaryCategoryTopNProductItem instance
                 */
                public static create(properties?: Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.IBestSellersSecondaryCategoryTopNProductItem): Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem;

                /**
                 * Encodes the specified BestSellersSecondaryCategoryTopNProductItem message. Does not implicitly {@link Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem.verify|verify} messages.
                 * @param message BestSellersSecondaryCategoryTopNProductItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.IBestSellersSecondaryCategoryTopNProductItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BestSellersSecondaryCategoryTopNProductItem message, length delimited. Does not implicitly {@link Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem.verify|verify} messages.
                 * @param message BestSellersSecondaryCategoryTopNProductItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.IBestSellersSecondaryCategoryTopNProductItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BestSellersSecondaryCategoryTopNProductItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BestSellersSecondaryCategoryTopNProductItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem;

                /**
                 * Decodes a BestSellersSecondaryCategoryTopNProductItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BestSellersSecondaryCategoryTopNProductItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem;

                /**
                 * Verifies a BestSellersSecondaryCategoryTopNProductItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BestSellersSecondaryCategoryTopNProductItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BestSellersSecondaryCategoryTopNProductItem
                 */
                public static fromObject(object: { [k: string]: any }): Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem;

                /**
                 * Creates a plain object from a BestSellersSecondaryCategoryTopNProductItem message. Also converts values to other types if specified.
                 * @param message BestSellersSecondaryCategoryTopNProductItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.BestSellers.BestSellersSecondaryCategoryTopNProductItem.BestSellersSecondaryCategoryTopNProductItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BestSellersSecondaryCategoryTopNProductItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Ranking. */
    namespace Ranking {

        /** Namespace H5Ranking. */
        namespace H5Ranking {

            /** Properties of a Request. */
            interface IRequest {

                /** Request navId */
                navId?: (number|Long|null);

                /** Request requiredNav */
                requiredNav?: (boolean|null);

                /** Request requiredSubNav */
                requiredSubNav?: (boolean|null);

                /** "fashion","electronic","home"; */
                pageFrom?: (string|null);

                /** Request size */
                size?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.H5Ranking.IRequest);

                /** Request navId. */
                public navId: (number|Long);

                /** Request requiredNav. */
                public requiredNav: boolean;

                /** Request requiredSubNav. */
                public requiredSubNav: boolean;

                /** "fashion","electronic","home"; */
                public pageFrom: string;

                /** Request size. */
                public size: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.Ranking.H5Ranking.IRequest): Activity.Ranking.H5Ranking.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.Ranking.H5Ranking.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.H5Ranking.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.Ranking.H5Ranking.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.H5Ranking.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.H5Ranking.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.H5Ranking.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.H5Ranking.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.H5Ranking.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response navList */
                navList?: (Activity.Ranking.RankingModuleInfo.INavInfo[]|null);

                /** Response subNavList */
                subNavList?: (Activity.Ranking.RankingModuleInfo.INavInfo[]|null);

                /** Response spuList */
                spuList?: (Component.ISpuInfo[]|null);

                /** Response parentNavId */
                parentNavId?: (number|Long|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.H5Ranking.IResponse);

                /** Response navList. */
                public navList: Activity.Ranking.RankingModuleInfo.INavInfo[];

                /** Response subNavList. */
                public subNavList: Activity.Ranking.RankingModuleInfo.INavInfo[];

                /** Response spuList. */
                public spuList: Component.ISpuInfo[];

                /** Response parentNavId. */
                public parentNavId: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.Ranking.H5Ranking.IResponse): Activity.Ranking.H5Ranking.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.Ranking.H5Ranking.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.H5Ranking.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.Ranking.H5Ranking.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.H5Ranking.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.H5Ranking.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.H5Ranking.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.H5Ranking.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.H5Ranking.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace RankingModuleInfo. */
        namespace RankingModuleInfo {

            /** Properties of a NavInfo. */
            interface INavInfo {

                /** NavInfo id */
                id?: (number|Long|null);

                /** NavInfo name */
                name?: (string|null);

                /** NavInfo parentId */
                parentId?: (number|Long|null);

                /** NavInfo title */
                title?: (string|null);
            }

            /** Represents a NavInfo. */
            class NavInfo implements INavInfo {

                /**
                 * Constructs a new NavInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.RankingModuleInfo.INavInfo);

                /** NavInfo id. */
                public id: (number|Long);

                /** NavInfo name. */
                public name: string;

                /** NavInfo parentId. */
                public parentId: (number|Long);

                /** NavInfo title. */
                public title: string;

                /**
                 * Creates a new NavInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NavInfo instance
                 */
                public static create(properties?: Activity.Ranking.RankingModuleInfo.INavInfo): Activity.Ranking.RankingModuleInfo.NavInfo;

                /**
                 * Encodes the specified NavInfo message. Does not implicitly {@link Activity.Ranking.RankingModuleInfo.NavInfo.verify|verify} messages.
                 * @param message NavInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.RankingModuleInfo.INavInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NavInfo message, length delimited. Does not implicitly {@link Activity.Ranking.RankingModuleInfo.NavInfo.verify|verify} messages.
                 * @param message NavInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.RankingModuleInfo.INavInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NavInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NavInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.RankingModuleInfo.NavInfo;

                /**
                 * Decodes a NavInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NavInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.RankingModuleInfo.NavInfo;

                /**
                 * Verifies a NavInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NavInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NavInfo
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.RankingModuleInfo.NavInfo;

                /**
                 * Creates a plain object from a NavInfo message. Also converts values to other types if specified.
                 * @param message NavInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.RankingModuleInfo.NavInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NavInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace Ranking. */
        namespace Ranking {

            /** Properties of a Request. */
            interface IRequest {

                /** Request cateType */
                cateType?: (string|null);

                /** Request secondaryCategoryId */
                secondaryCategoryId?: (number|Long|null);

                /** Request requiredSubCates */
                requiredSubCates?: (boolean|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.Ranking.IRequest);

                /** Request cateType. */
                public cateType: string;

                /** Request secondaryCategoryId. */
                public secondaryCategoryId: (number|Long);

                /** Request requiredSubCates. */
                public requiredSubCates: boolean;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.Ranking.Ranking.IRequest): Activity.Ranking.Ranking.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.Ranking.Ranking.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.Ranking.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.Ranking.Ranking.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.Ranking.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.Ranking.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.Ranking.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.Ranking.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.Ranking.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response categoryList */
                categoryList?: (Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory[]|null);

                /** Response productList */
                productList?: (Component.ISpuInfo[]|null);

                /** Response cateType */
                cateType?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.Ranking.IResponse);

                /** Response categoryList. */
                public categoryList: Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory[];

                /** Response productList. */
                public productList: Component.ISpuInfo[];

                /** Response cateType. */
                public cateType: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.Ranking.Ranking.IResponse): Activity.Ranking.Ranking.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.Ranking.Ranking.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.Ranking.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.Ranking.Ranking.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.Ranking.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.Ranking.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.Ranking.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.Ranking.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.Ranking.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace RankingSecondaryCategory. */
        namespace RankingSecondaryCategory {

            /** Properties of a RankingSecondaryCategory. */
            interface IRankingSecondaryCategory {

                /** RankingSecondaryCategory secondaryCategoryId */
                secondaryCategoryId?: (number|Long|null);

                /** RankingSecondaryCategory secondaryCategoryName */
                secondaryCategoryName?: (string|null);
            }

            /** Represents a RankingSecondaryCategory. */
            class RankingSecondaryCategory implements IRankingSecondaryCategory {

                /**
                 * Constructs a new RankingSecondaryCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory);

                /** RankingSecondaryCategory secondaryCategoryId. */
                public secondaryCategoryId: (number|Long);

                /** RankingSecondaryCategory secondaryCategoryName. */
                public secondaryCategoryName: string;

                /**
                 * Creates a new RankingSecondaryCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RankingSecondaryCategory instance
                 */
                public static create(properties?: Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory): Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory;

                /**
                 * Encodes the specified RankingSecondaryCategory message. Does not implicitly {@link Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory.verify|verify} messages.
                 * @param message RankingSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RankingSecondaryCategory message, length delimited. Does not implicitly {@link Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory.verify|verify} messages.
                 * @param message RankingSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.RankingSecondaryCategory.IRankingSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RankingSecondaryCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RankingSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory;

                /**
                 * Decodes a RankingSecondaryCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RankingSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory;

                /**
                 * Verifies a RankingSecondaryCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RankingSecondaryCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RankingSecondaryCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory;

                /**
                 * Creates a plain object from a RankingSecondaryCategory message. Also converts values to other types if specified.
                 * @param message RankingSecondaryCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.RankingSecondaryCategory.RankingSecondaryCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RankingSecondaryCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace RankingTopNProduct. */
        namespace RankingTopNProduct {

            /** Properties of a RankingTopNProduct. */
            interface IRankingTopNProduct {

                /** RankingTopNProduct productId */
                productId?: (number|Long|null);

                /** RankingTopNProduct productName */
                productName?: (string|null);

                /** RankingTopNProduct productSalePrice */
                productSalePrice?: (number|Long|null);

                /** RankingTopNProduct productImgLink */
                productImgLink?: (string|null);

                /** RankingTopNProduct productSaleVolume */
                productSaleVolume?: (number|Long|null);
            }

            /** Represents a RankingTopNProduct. */
            class RankingTopNProduct implements IRankingTopNProduct {

                /**
                 * Constructs a new RankingTopNProduct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Ranking.RankingTopNProduct.IRankingTopNProduct);

                /** RankingTopNProduct productId. */
                public productId: (number|Long);

                /** RankingTopNProduct productName. */
                public productName: string;

                /** RankingTopNProduct productSalePrice. */
                public productSalePrice: (number|Long);

                /** RankingTopNProduct productImgLink. */
                public productImgLink: string;

                /** RankingTopNProduct productSaleVolume. */
                public productSaleVolume: (number|Long);

                /**
                 * Creates a new RankingTopNProduct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RankingTopNProduct instance
                 */
                public static create(properties?: Activity.Ranking.RankingTopNProduct.IRankingTopNProduct): Activity.Ranking.RankingTopNProduct.RankingTopNProduct;

                /**
                 * Encodes the specified RankingTopNProduct message. Does not implicitly {@link Activity.Ranking.RankingTopNProduct.RankingTopNProduct.verify|verify} messages.
                 * @param message RankingTopNProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Ranking.RankingTopNProduct.IRankingTopNProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RankingTopNProduct message, length delimited. Does not implicitly {@link Activity.Ranking.RankingTopNProduct.RankingTopNProduct.verify|verify} messages.
                 * @param message RankingTopNProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Ranking.RankingTopNProduct.IRankingTopNProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RankingTopNProduct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RankingTopNProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Ranking.RankingTopNProduct.RankingTopNProduct;

                /**
                 * Decodes a RankingTopNProduct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RankingTopNProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Ranking.RankingTopNProduct.RankingTopNProduct;

                /**
                 * Verifies a RankingTopNProduct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RankingTopNProduct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RankingTopNProduct
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Ranking.RankingTopNProduct.RankingTopNProduct;

                /**
                 * Creates a plain object from a RankingTopNProduct message. Also converts values to other types if specified.
                 * @param message RankingTopNProduct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Ranking.RankingTopNProduct.RankingTopNProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RankingTopNProduct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace HekkaRanking. */
    namespace HekkaRanking {

        /** Namespace HekkaRankingSecondaryCategory. */
        namespace HekkaRankingSecondaryCategory {

            /** Properties of a HekkaRankingSecondaryCategory. */
            interface IHekkaRankingSecondaryCategory {

                /** HekkaRankingSecondaryCategory subCategoryId */
                subCategoryId?: (number|Long|null);

                /** HekkaRankingSecondaryCategory subCategoryName */
                subCategoryName?: (string|null);
            }

            /** Represents a HekkaRankingSecondaryCategory. */
            class HekkaRankingSecondaryCategory implements IHekkaRankingSecondaryCategory {

                /**
                 * Constructs a new HekkaRankingSecondaryCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.HekkaRanking.HekkaRankingSecondaryCategory.IHekkaRankingSecondaryCategory);

                /** HekkaRankingSecondaryCategory subCategoryId. */
                public subCategoryId: (number|Long);

                /** HekkaRankingSecondaryCategory subCategoryName. */
                public subCategoryName: string;

                /**
                 * Creates a new HekkaRankingSecondaryCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HekkaRankingSecondaryCategory instance
                 */
                public static create(properties?: Activity.HekkaRanking.HekkaRankingSecondaryCategory.IHekkaRankingSecondaryCategory): Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory;

                /**
                 * Encodes the specified HekkaRankingSecondaryCategory message. Does not implicitly {@link Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory.verify|verify} messages.
                 * @param message HekkaRankingSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.HekkaRanking.HekkaRankingSecondaryCategory.IHekkaRankingSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HekkaRankingSecondaryCategory message, length delimited. Does not implicitly {@link Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory.verify|verify} messages.
                 * @param message HekkaRankingSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.HekkaRanking.HekkaRankingSecondaryCategory.IHekkaRankingSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HekkaRankingSecondaryCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HekkaRankingSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory;

                /**
                 * Decodes a HekkaRankingSecondaryCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HekkaRankingSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory;

                /**
                 * Verifies a HekkaRankingSecondaryCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HekkaRankingSecondaryCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HekkaRankingSecondaryCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory;

                /**
                 * Creates a plain object from a HekkaRankingSecondaryCategory message. Also converts values to other types if specified.
                 * @param message HekkaRankingSecondaryCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.HekkaRanking.HekkaRankingSecondaryCategory.HekkaRankingSecondaryCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HekkaRankingSecondaryCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace HekkaRankingTopNProduct. */
        namespace HekkaRankingTopNProduct {

            /** Properties of a HekkaRankingTopNProduct. */
            interface IHekkaRankingTopNProduct {

                /** HekkaRankingTopNProduct productId */
                productId?: (number|Long|null);

                /** HekkaRankingTopNProduct productName */
                productName?: (string|null);

                /** HekkaRankingTopNProduct productSalePrice */
                productSalePrice?: (number|Long|null);

                /** HekkaRankingTopNProduct productImgLink */
                productImgLink?: (string|null);

                /** HekkaRankingTopNProduct productSaleVolume */
                productSaleVolume?: (number|Long|null);
            }

            /** Represents a HekkaRankingTopNProduct. */
            class HekkaRankingTopNProduct implements IHekkaRankingTopNProduct {

                /**
                 * Constructs a new HekkaRankingTopNProduct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.HekkaRanking.HekkaRankingTopNProduct.IHekkaRankingTopNProduct);

                /** HekkaRankingTopNProduct productId. */
                public productId: (number|Long);

                /** HekkaRankingTopNProduct productName. */
                public productName: string;

                /** HekkaRankingTopNProduct productSalePrice. */
                public productSalePrice: (number|Long);

                /** HekkaRankingTopNProduct productImgLink. */
                public productImgLink: string;

                /** HekkaRankingTopNProduct productSaleVolume. */
                public productSaleVolume: (number|Long);

                /**
                 * Creates a new HekkaRankingTopNProduct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HekkaRankingTopNProduct instance
                 */
                public static create(properties?: Activity.HekkaRanking.HekkaRankingTopNProduct.IHekkaRankingTopNProduct): Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct;

                /**
                 * Encodes the specified HekkaRankingTopNProduct message. Does not implicitly {@link Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct.verify|verify} messages.
                 * @param message HekkaRankingTopNProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.HekkaRanking.HekkaRankingTopNProduct.IHekkaRankingTopNProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HekkaRankingTopNProduct message, length delimited. Does not implicitly {@link Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct.verify|verify} messages.
                 * @param message HekkaRankingTopNProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.HekkaRanking.HekkaRankingTopNProduct.IHekkaRankingTopNProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HekkaRankingTopNProduct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HekkaRankingTopNProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct;

                /**
                 * Decodes a HekkaRankingTopNProduct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HekkaRankingTopNProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct;

                /**
                 * Verifies a HekkaRankingTopNProduct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HekkaRankingTopNProduct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HekkaRankingTopNProduct
                 */
                public static fromObject(object: { [k: string]: any }): Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct;

                /**
                 * Creates a plain object from a HekkaRankingTopNProduct message. Also converts values to other types if specified.
                 * @param message HekkaRankingTopNProduct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.HekkaRanking.HekkaRankingTopNProduct.HekkaRankingTopNProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HekkaRankingTopNProduct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace HotSales. */
    namespace HotSales {

        /** Namespace HotSalesIndex. */
        namespace HotSalesIndex {

            /** Properties of a Request. */
            interface IRequest {

                /** Request productBaseType */
                productBaseType?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.HotSales.HotSalesIndex.IRequest);

                /** Request productBaseType. */
                public productBaseType: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.HotSales.HotSalesIndex.IRequest): Activity.HotSales.HotSalesIndex.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.HotSales.HotSalesIndex.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.HotSales.HotSalesIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.HotSales.HotSalesIndex.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.HotSales.HotSalesIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.HotSales.HotSalesIndex.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.HotSales.HotSalesIndex.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.HotSales.HotSalesIndex.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.HotSales.HotSalesIndex.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response categoryList */
                categoryList?: (Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.HotSales.HotSalesIndex.IResponse);

                /** Response categoryList. */
                public categoryList: Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.HotSales.HotSalesIndex.IResponse): Activity.HotSales.HotSalesIndex.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.HotSales.HotSalesIndex.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.HotSales.HotSalesIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.HotSales.HotSalesIndex.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.HotSales.HotSalesIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.HotSales.HotSalesIndex.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.HotSales.HotSalesIndex.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.HotSales.HotSalesIndex.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.HotSales.HotSalesIndex.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace HotSalesSecondaryCategory. */
        namespace HotSalesSecondaryCategory {

            /** Properties of a HotSalesSecondaryCategory. */
            interface IHotSalesSecondaryCategory {

                /** HotSalesSecondaryCategory imgLink */
                imgLink?: (string|null);

                /** HotSalesSecondaryCategory secondaryCategoryId */
                secondaryCategoryId?: (number|Long|null);

                /** HotSalesSecondaryCategory secondaryCategory */
                secondaryCategory?: (string|null);

                /** HotSalesSecondaryCategory baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** HotSalesSecondaryCategory orderCount */
                orderCount?: (number|Long|null);

                /** HotSalesSecondaryCategory productId */
                productId?: (number|Long|null);
            }

            /** Represents a HotSalesSecondaryCategory. */
            class HotSalesSecondaryCategory implements IHotSalesSecondaryCategory {

                /**
                 * Constructs a new HotSalesSecondaryCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory);

                /** HotSalesSecondaryCategory imgLink. */
                public imgLink: string;

                /** HotSalesSecondaryCategory secondaryCategoryId. */
                public secondaryCategoryId: (number|Long);

                /** HotSalesSecondaryCategory secondaryCategory. */
                public secondaryCategory: string;

                /** HotSalesSecondaryCategory baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** HotSalesSecondaryCategory orderCount. */
                public orderCount: (number|Long);

                /** HotSalesSecondaryCategory productId. */
                public productId: (number|Long);

                /**
                 * Creates a new HotSalesSecondaryCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HotSalesSecondaryCategory instance
                 */
                public static create(properties?: Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory): Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory;

                /**
                 * Encodes the specified HotSalesSecondaryCategory message. Does not implicitly {@link Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory.verify|verify} messages.
                 * @param message HotSalesSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HotSalesSecondaryCategory message, length delimited. Does not implicitly {@link Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory.verify|verify} messages.
                 * @param message HotSalesSecondaryCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.HotSales.HotSalesSecondaryCategory.IHotSalesSecondaryCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HotSalesSecondaryCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HotSalesSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory;

                /**
                 * Decodes a HotSalesSecondaryCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HotSalesSecondaryCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory;

                /**
                 * Verifies a HotSalesSecondaryCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HotSalesSecondaryCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HotSalesSecondaryCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory;

                /**
                 * Creates a plain object from a HotSalesSecondaryCategory message. Also converts values to other types if specified.
                 * @param message HotSalesSecondaryCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.HotSales.HotSalesSecondaryCategory.HotSalesSecondaryCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HotSalesSecondaryCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace NewArrivals. */
    namespace NewArrivals {

        /** Namespace NewArrivals. */
        namespace NewArrivals {

            /** Properties of a Request. */
            interface IRequest {

                /** Request baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request pageSize */
                pageSize?: (number|null);

                /** Request requiredBaseCates */
                requiredBaseCates?: (boolean|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.NewArrivals.NewArrivals.IRequest);

                /** Request baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request pageSize. */
                public pageSize: number;

                /** Request requiredBaseCates. */
                public requiredBaseCates: boolean;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.NewArrivals.NewArrivals.IRequest): Activity.NewArrivals.NewArrivals.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.NewArrivals.NewArrivals.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.NewArrivals.NewArrivals.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.NewArrivals.NewArrivals.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.NewArrivals.NewArrivals.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.NewArrivals.NewArrivals.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.NewArrivals.NewArrivals.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.NewArrivals.NewArrivals.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.NewArrivals.NewArrivals.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response baseCategoryList */
                baseCategoryList?: (Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory[]|null);

                /** Response topNOnSaleProductList */
                topNOnSaleProductList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.NewArrivals.NewArrivals.IResponse);

                /** Response baseCategoryList. */
                public baseCategoryList: Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory[];

                /** Response topNOnSaleProductList. */
                public topNOnSaleProductList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.NewArrivals.NewArrivals.IResponse): Activity.NewArrivals.NewArrivals.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.NewArrivals.NewArrivals.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.NewArrivals.NewArrivals.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.NewArrivals.NewArrivals.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.NewArrivals.NewArrivals.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.NewArrivals.NewArrivals.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.NewArrivals.NewArrivals.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.NewArrivals.NewArrivals.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.NewArrivals.NewArrivals.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace NewArrivalsBaseCategory. */
        namespace NewArrivalsBaseCategory {

            /** Properties of a NewArrivalsBaseCategory. */
            interface INewArrivalsBaseCategory {

                /** NewArrivalsBaseCategory baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** NewArrivalsBaseCategory baseCategoryName */
                baseCategoryName?: (string|null);

                /** NewArrivalsBaseCategory traceName */
                traceName?: (string|null);
            }

            /** Represents a NewArrivalsBaseCategory. */
            class NewArrivalsBaseCategory implements INewArrivalsBaseCategory {

                /**
                 * Constructs a new NewArrivalsBaseCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory);

                /** NewArrivalsBaseCategory baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** NewArrivalsBaseCategory baseCategoryName. */
                public baseCategoryName: string;

                /** NewArrivalsBaseCategory traceName. */
                public traceName: string;

                /**
                 * Creates a new NewArrivalsBaseCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NewArrivalsBaseCategory instance
                 */
                public static create(properties?: Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory): Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory;

                /**
                 * Encodes the specified NewArrivalsBaseCategory message. Does not implicitly {@link Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory.verify|verify} messages.
                 * @param message NewArrivalsBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NewArrivalsBaseCategory message, length delimited. Does not implicitly {@link Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory.verify|verify} messages.
                 * @param message NewArrivalsBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.NewArrivals.NewArrivalsBaseCategory.INewArrivalsBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NewArrivalsBaseCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NewArrivalsBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory;

                /**
                 * Decodes a NewArrivalsBaseCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NewArrivalsBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory;

                /**
                 * Verifies a NewArrivalsBaseCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NewArrivalsBaseCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NewArrivalsBaseCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory;

                /**
                 * Creates a plain object from a NewArrivalsBaseCategory message. Also converts values to other types if specified.
                 * @param message NewArrivalsBaseCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.NewArrivals.NewArrivalsBaseCategory.NewArrivalsBaseCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NewArrivalsBaseCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace NewArrivalsTopNOnSaleProduct. */
        namespace NewArrivalsTopNOnSaleProduct {

            /** Properties of a NewArrivalsTopNOnSaleProduct. */
            interface INewArrivalsTopNOnSaleProduct {

                /** NewArrivalsTopNOnSaleProduct spuId */
                spuId?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProduct productName */
                productName?: (string|null);

                /** NewArrivalsTopNOnSaleProduct productImgLink */
                productImgLink?: (string|null);

                /** NewArrivalsTopNOnSaleProduct productSalePrice */
                productSalePrice?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProduct productMarketPrice */
                productMarketPrice?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProduct discount */
                discount?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProduct onSaleTime */
                onSaleTime?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProduct sortId */
                sortId?: (string|null);

                /** NewArrivalsTopNOnSaleProduct ranks */
                ranks?: (Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank[]|null);
            }

            /** Represents a NewArrivalsTopNOnSaleProduct. */
            class NewArrivalsTopNOnSaleProduct implements INewArrivalsTopNOnSaleProduct {

                /**
                 * Constructs a new NewArrivalsTopNOnSaleProduct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.INewArrivalsTopNOnSaleProduct);

                /** NewArrivalsTopNOnSaleProduct spuId. */
                public spuId: (number|Long);

                /** NewArrivalsTopNOnSaleProduct productName. */
                public productName: string;

                /** NewArrivalsTopNOnSaleProduct productImgLink. */
                public productImgLink: string;

                /** NewArrivalsTopNOnSaleProduct productSalePrice. */
                public productSalePrice: (number|Long);

                /** NewArrivalsTopNOnSaleProduct productMarketPrice. */
                public productMarketPrice: (number|Long);

                /** NewArrivalsTopNOnSaleProduct discount. */
                public discount: (number|Long);

                /** NewArrivalsTopNOnSaleProduct onSaleTime. */
                public onSaleTime: (number|Long);

                /** NewArrivalsTopNOnSaleProduct sortId. */
                public sortId: string;

                /** NewArrivalsTopNOnSaleProduct ranks. */
                public ranks: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank[];

                /**
                 * Creates a new NewArrivalsTopNOnSaleProduct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NewArrivalsTopNOnSaleProduct instance
                 */
                public static create(properties?: Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.INewArrivalsTopNOnSaleProduct): Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct;

                /**
                 * Encodes the specified NewArrivalsTopNOnSaleProduct message. Does not implicitly {@link Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct.verify|verify} messages.
                 * @param message NewArrivalsTopNOnSaleProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.INewArrivalsTopNOnSaleProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NewArrivalsTopNOnSaleProduct message, length delimited. Does not implicitly {@link Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct.verify|verify} messages.
                 * @param message NewArrivalsTopNOnSaleProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.INewArrivalsTopNOnSaleProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NewArrivalsTopNOnSaleProduct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NewArrivalsTopNOnSaleProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct;

                /**
                 * Decodes a NewArrivalsTopNOnSaleProduct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NewArrivalsTopNOnSaleProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct;

                /**
                 * Verifies a NewArrivalsTopNOnSaleProduct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NewArrivalsTopNOnSaleProduct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NewArrivalsTopNOnSaleProduct
                 */
                public static fromObject(object: { [k: string]: any }): Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct;

                /**
                 * Creates a plain object from a NewArrivalsTopNOnSaleProduct message. Also converts values to other types if specified.
                 * @param message NewArrivalsTopNOnSaleProduct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProduct.NewArrivalsTopNOnSaleProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NewArrivalsTopNOnSaleProduct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace NewArrivalsTopNOnSaleProductRank. */
        namespace NewArrivalsTopNOnSaleProductRank {

            /** Properties of a NewArrivalsTopNOnSaleProductRank. */
            interface INewArrivalsTopNOnSaleProductRank {

                /** NewArrivalsTopNOnSaleProductRank cateId */
                cateId?: (number|Long|null);

                /** NewArrivalsTopNOnSaleProductRank rank */
                rank?: (number|null);
            }

            /** Represents a NewArrivalsTopNOnSaleProductRank. */
            class NewArrivalsTopNOnSaleProductRank implements INewArrivalsTopNOnSaleProductRank {

                /**
                 * Constructs a new NewArrivalsTopNOnSaleProductRank.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank);

                /** NewArrivalsTopNOnSaleProductRank cateId. */
                public cateId: (number|Long);

                /** NewArrivalsTopNOnSaleProductRank rank. */
                public rank: number;

                /**
                 * Creates a new NewArrivalsTopNOnSaleProductRank instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NewArrivalsTopNOnSaleProductRank instance
                 */
                public static create(properties?: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank): Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank;

                /**
                 * Encodes the specified NewArrivalsTopNOnSaleProductRank message. Does not implicitly {@link Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank.verify|verify} messages.
                 * @param message NewArrivalsTopNOnSaleProductRank message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NewArrivalsTopNOnSaleProductRank message, length delimited. Does not implicitly {@link Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank.verify|verify} messages.
                 * @param message NewArrivalsTopNOnSaleProductRank message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.INewArrivalsTopNOnSaleProductRank, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NewArrivalsTopNOnSaleProductRank message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NewArrivalsTopNOnSaleProductRank
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank;

                /**
                 * Decodes a NewArrivalsTopNOnSaleProductRank message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NewArrivalsTopNOnSaleProductRank
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank;

                /**
                 * Verifies a NewArrivalsTopNOnSaleProductRank message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NewArrivalsTopNOnSaleProductRank message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NewArrivalsTopNOnSaleProductRank
                 */
                public static fromObject(object: { [k: string]: any }): Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank;

                /**
                 * Creates a plain object from a NewArrivalsTopNOnSaleProductRank message. Also converts values to other types if specified.
                 * @param message NewArrivalsTopNOnSaleProductRank
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.NewArrivals.NewArrivalsTopNOnSaleProductRank.NewArrivalsTopNOnSaleProductRank, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NewArrivalsTopNOnSaleProductRank to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Sales. */
    namespace Sales {

        /** Namespace Sales. */
        namespace Sales {

            /** Properties of a Request. */
            interface IRequest {

                /** Request baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request pageSize */
                pageSize?: (number|null);

                /** Request requiredBaseCates */
                requiredBaseCates?: (boolean|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Sales.Sales.IRequest);

                /** Request baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** Request sortId. */
                public sortId: string;

                /** Request pageSize. */
                public pageSize: number;

                /** Request requiredBaseCates. */
                public requiredBaseCates: boolean;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: Activity.Sales.Sales.IRequest): Activity.Sales.Sales.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link Activity.Sales.Sales.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Sales.Sales.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link Activity.Sales.Sales.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Sales.Sales.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Sales.Sales.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Sales.Sales.Request;

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
                public static fromObject(object: { [k: string]: any }): Activity.Sales.Sales.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Sales.Sales.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response baseCategoryList */
                baseCategoryList?: (Activity.Sales.SalesBaseCategory.ISalesBaseCategory[]|null);

                /** Response topNDiscountProductList */
                topNDiscountProductList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Sales.Sales.IResponse);

                /** Response baseCategoryList. */
                public baseCategoryList: Activity.Sales.SalesBaseCategory.ISalesBaseCategory[];

                /** Response topNDiscountProductList. */
                public topNDiscountProductList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: Activity.Sales.Sales.IResponse): Activity.Sales.Sales.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link Activity.Sales.Sales.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Sales.Sales.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link Activity.Sales.Sales.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Sales.Sales.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Sales.Sales.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Sales.Sales.Response;

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
                public static fromObject(object: { [k: string]: any }): Activity.Sales.Sales.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Sales.Sales.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SalesBaseCategory. */
        namespace SalesBaseCategory {

            /** Properties of a SalesBaseCategory. */
            interface ISalesBaseCategory {

                /** SalesBaseCategory baseCategoryId */
                baseCategoryId?: (number|Long|null);

                /** SalesBaseCategory baseCategoryName */
                baseCategoryName?: (string|null);

                /** SalesBaseCategory traceName */
                traceName?: (string|null);
            }

            /** Represents a SalesBaseCategory. */
            class SalesBaseCategory implements ISalesBaseCategory {

                /**
                 * Constructs a new SalesBaseCategory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Sales.SalesBaseCategory.ISalesBaseCategory);

                /** SalesBaseCategory baseCategoryId. */
                public baseCategoryId: (number|Long);

                /** SalesBaseCategory baseCategoryName. */
                public baseCategoryName: string;

                /** SalesBaseCategory traceName. */
                public traceName: string;

                /**
                 * Creates a new SalesBaseCategory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SalesBaseCategory instance
                 */
                public static create(properties?: Activity.Sales.SalesBaseCategory.ISalesBaseCategory): Activity.Sales.SalesBaseCategory.SalesBaseCategory;

                /**
                 * Encodes the specified SalesBaseCategory message. Does not implicitly {@link Activity.Sales.SalesBaseCategory.SalesBaseCategory.verify|verify} messages.
                 * @param message SalesBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Sales.SalesBaseCategory.ISalesBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SalesBaseCategory message, length delimited. Does not implicitly {@link Activity.Sales.SalesBaseCategory.SalesBaseCategory.verify|verify} messages.
                 * @param message SalesBaseCategory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Sales.SalesBaseCategory.ISalesBaseCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SalesBaseCategory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SalesBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Sales.SalesBaseCategory.SalesBaseCategory;

                /**
                 * Decodes a SalesBaseCategory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SalesBaseCategory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Sales.SalesBaseCategory.SalesBaseCategory;

                /**
                 * Verifies a SalesBaseCategory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SalesBaseCategory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SalesBaseCategory
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Sales.SalesBaseCategory.SalesBaseCategory;

                /**
                 * Creates a plain object from a SalesBaseCategory message. Also converts values to other types if specified.
                 * @param message SalesBaseCategory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Sales.SalesBaseCategory.SalesBaseCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SalesBaseCategory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SalesTopNDiscountProduct. */
        namespace SalesTopNDiscountProduct {

            /** Properties of a SalesTopNDiscountProduct. */
            interface ISalesTopNDiscountProduct {

                /** SalesTopNDiscountProduct spuId */
                spuId?: (number|Long|null);

                /** SalesTopNDiscountProduct productName */
                productName?: (string|null);

                /** SalesTopNDiscountProduct productImgLink */
                productImgLink?: (string|null);

                /** SalesTopNDiscountProduct productSalePrice */
                productSalePrice?: (number|Long|null);

                /** SalesTopNDiscountProduct productMarketPrice */
                productMarketPrice?: (number|Long|null);

                /** SalesTopNDiscountProduct discount */
                discount?: (number|null);

                /** SalesTopNDiscountProduct sortId */
                sortId?: (string|null);

                /** SalesTopNDiscountProduct ranks */
                ranks?: (Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank[]|null);
            }

            /** Represents a SalesTopNDiscountProduct. */
            class SalesTopNDiscountProduct implements ISalesTopNDiscountProduct {

                /**
                 * Constructs a new SalesTopNDiscountProduct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Sales.SalesTopNDiscountProduct.ISalesTopNDiscountProduct);

                /** SalesTopNDiscountProduct spuId. */
                public spuId: (number|Long);

                /** SalesTopNDiscountProduct productName. */
                public productName: string;

                /** SalesTopNDiscountProduct productImgLink. */
                public productImgLink: string;

                /** SalesTopNDiscountProduct productSalePrice. */
                public productSalePrice: (number|Long);

                /** SalesTopNDiscountProduct productMarketPrice. */
                public productMarketPrice: (number|Long);

                /** SalesTopNDiscountProduct discount. */
                public discount: number;

                /** SalesTopNDiscountProduct sortId. */
                public sortId: string;

                /** SalesTopNDiscountProduct ranks. */
                public ranks: Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank[];

                /**
                 * Creates a new SalesTopNDiscountProduct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SalesTopNDiscountProduct instance
                 */
                public static create(properties?: Activity.Sales.SalesTopNDiscountProduct.ISalesTopNDiscountProduct): Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct;

                /**
                 * Encodes the specified SalesTopNDiscountProduct message. Does not implicitly {@link Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct.verify|verify} messages.
                 * @param message SalesTopNDiscountProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Sales.SalesTopNDiscountProduct.ISalesTopNDiscountProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SalesTopNDiscountProduct message, length delimited. Does not implicitly {@link Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct.verify|verify} messages.
                 * @param message SalesTopNDiscountProduct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Sales.SalesTopNDiscountProduct.ISalesTopNDiscountProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SalesTopNDiscountProduct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SalesTopNDiscountProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct;

                /**
                 * Decodes a SalesTopNDiscountProduct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SalesTopNDiscountProduct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct;

                /**
                 * Verifies a SalesTopNDiscountProduct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SalesTopNDiscountProduct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SalesTopNDiscountProduct
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct;

                /**
                 * Creates a plain object from a SalesTopNDiscountProduct message. Also converts values to other types if specified.
                 * @param message SalesTopNDiscountProduct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Sales.SalesTopNDiscountProduct.SalesTopNDiscountProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SalesTopNDiscountProduct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SalesTopNDiscountProductRank. */
        namespace SalesTopNDiscountProductRank {

            /** Properties of a SalesTopNDiscountProductRank. */
            interface ISalesTopNDiscountProductRank {

                /** SalesTopNDiscountProductRank cateId */
                cateId?: (number|Long|null);

                /** SalesTopNDiscountProductRank rank */
                rank?: (number|null);
            }

            /** Represents a SalesTopNDiscountProductRank. */
            class SalesTopNDiscountProductRank implements ISalesTopNDiscountProductRank {

                /**
                 * Constructs a new SalesTopNDiscountProductRank.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank);

                /** SalesTopNDiscountProductRank cateId. */
                public cateId: (number|Long);

                /** SalesTopNDiscountProductRank rank. */
                public rank: number;

                /**
                 * Creates a new SalesTopNDiscountProductRank instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SalesTopNDiscountProductRank instance
                 */
                public static create(properties?: Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank): Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank;

                /**
                 * Encodes the specified SalesTopNDiscountProductRank message. Does not implicitly {@link Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank.verify|verify} messages.
                 * @param message SalesTopNDiscountProductRank message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SalesTopNDiscountProductRank message, length delimited. Does not implicitly {@link Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank.verify|verify} messages.
                 * @param message SalesTopNDiscountProductRank message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Activity.Sales.SalesTopNDiscountProductRank.ISalesTopNDiscountProductRank, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SalesTopNDiscountProductRank message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SalesTopNDiscountProductRank
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank;

                /**
                 * Decodes a SalesTopNDiscountProductRank message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SalesTopNDiscountProductRank
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank;

                /**
                 * Verifies a SalesTopNDiscountProductRank message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SalesTopNDiscountProductRank message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SalesTopNDiscountProductRank
                 */
                public static fromObject(object: { [k: string]: any }): Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank;

                /**
                 * Creates a plain object from a SalesTopNDiscountProductRank message. Also converts values to other types if specified.
                 * @param message SalesTopNDiscountProductRank
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Activity.Sales.SalesTopNDiscountProductRank.SalesTopNDiscountProductRank, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SalesTopNDiscountProductRank to JSON.
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

                /** CodeDetail dateSettingType */
                dateSettingType?: (number|null);

                /** CodeDetail duration */
                duration?: (number|null);
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

                /** CodeDetail dateSettingType. */
                public dateSettingType: number;

                /** CodeDetail duration. */
                public duration: number;

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

        /** Namespace BannerPosition. */
        namespace BannerPosition {

            /** Properties of a Request. */
            interface IRequest {

                /**
                 * FASHION(1, "fashion"),
                 * ELECTRONIC(2,"electronic"),
                 * Home(3,"home");
                 */
                position?: (number|null);

                /** 1 app 2 pc 3 h5 */
                platform?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.BannerPosition.IRequest);

                /**
                 * FASHION(1, "fashion"),
                 * ELECTRONIC(2,"electronic"),
                 * Home(3,"home");
                 */
                public position: number;

                /** 1 app 2 pc 3 h5 */
                public platform: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.BannerPosition.IRequest): App.Acitivity.BannerPosition.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.BannerPosition.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.BannerPosition.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.BannerPosition.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.BannerPosition.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.BannerPosition.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.BannerPosition.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.BannerPosition.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.BannerPosition.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response topBannerList */
                topBannerList?: (App.Acitivity.BannerPosition.IBanner[]|null);

                /** Response bottomBannerList */
                bottomBannerList?: (App.Acitivity.BannerPosition.IBanner[]|null);

                /** Response mainPositionList */
                mainPositionList?: (App.Acitivity.BannerPosition.IMainPosition[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.BannerPosition.IResponse);

                /** Response topBannerList. */
                public topBannerList: App.Acitivity.BannerPosition.IBanner[];

                /** Response bottomBannerList. */
                public bottomBannerList: App.Acitivity.BannerPosition.IBanner[];

                /** Response mainPositionList. */
                public mainPositionList: App.Acitivity.BannerPosition.IMainPosition[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.BannerPosition.IResponse): App.Acitivity.BannerPosition.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.BannerPosition.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.BannerPosition.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.BannerPosition.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.BannerPosition.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.BannerPosition.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.BannerPosition.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.BannerPosition.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.BannerPosition.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Banner. */
            interface IBanner {

                /** Banner id */
                id?: (number|Long|null);

                /** Banner imgUrl */
                imgUrl?: (string|null);

                /** Banner protocol */
                protocol?: (string|null);

                /** Banner title */
                title?: (string|null);
            }

            /** Represents a Banner. */
            class Banner implements IBanner {

                /**
                 * Constructs a new Banner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.BannerPosition.IBanner);

                /** Banner id. */
                public id: (number|Long);

                /** Banner imgUrl. */
                public imgUrl: string;

                /** Banner protocol. */
                public protocol: string;

                /** Banner title. */
                public title: string;

                /**
                 * Creates a new Banner instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Banner instance
                 */
                public static create(properties?: App.Acitivity.BannerPosition.IBanner): App.Acitivity.BannerPosition.Banner;

                /**
                 * Encodes the specified Banner message. Does not implicitly {@link App.Acitivity.BannerPosition.Banner.verify|verify} messages.
                 * @param message Banner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.BannerPosition.IBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Banner message, length delimited. Does not implicitly {@link App.Acitivity.BannerPosition.Banner.verify|verify} messages.
                 * @param message Banner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.BannerPosition.IBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Banner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Banner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.BannerPosition.Banner;

                /**
                 * Decodes a Banner message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Banner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.BannerPosition.Banner;

                /**
                 * Verifies a Banner message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Banner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Banner
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.BannerPosition.Banner;

                /**
                 * Creates a plain object from a Banner message. Also converts values to other types if specified.
                 * @param message Banner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.BannerPosition.Banner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Banner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MainPosition. */
            interface IMainPosition {

                /** MainPosition id */
                id?: (number|Long|null);

                /** MainPosition imgUrl */
                imgUrl?: (string|null);

                /** MainPosition title */
                title?: (string|null);

                /** MainPosition protocol */
                protocol?: (string|null);

                /** MainPosition traceName */
                traceName?: (string|null);
            }

            /** Represents a MainPosition. */
            class MainPosition implements IMainPosition {

                /**
                 * Constructs a new MainPosition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.BannerPosition.IMainPosition);

                /** MainPosition id. */
                public id: (number|Long);

                /** MainPosition imgUrl. */
                public imgUrl: string;

                /** MainPosition title. */
                public title: string;

                /** MainPosition protocol. */
                public protocol: string;

                /** MainPosition traceName. */
                public traceName: string;

                /**
                 * Creates a new MainPosition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MainPosition instance
                 */
                public static create(properties?: App.Acitivity.BannerPosition.IMainPosition): App.Acitivity.BannerPosition.MainPosition;

                /**
                 * Encodes the specified MainPosition message. Does not implicitly {@link App.Acitivity.BannerPosition.MainPosition.verify|verify} messages.
                 * @param message MainPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.BannerPosition.IMainPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MainPosition message, length delimited. Does not implicitly {@link App.Acitivity.BannerPosition.MainPosition.verify|verify} messages.
                 * @param message MainPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.BannerPosition.IMainPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MainPosition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MainPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.BannerPosition.MainPosition;

                /**
                 * Decodes a MainPosition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MainPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.BannerPosition.MainPosition;

                /**
                 * Verifies a MainPosition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MainPosition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MainPosition
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.BannerPosition.MainPosition;

                /**
                 * Creates a plain object from a MainPosition message. Also converts values to other types if specified.
                 * @param message MainPosition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.BannerPosition.MainPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MainPosition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeListForProductDetail. */
        namespace CouponCodeListForProductDetail {

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
                constructor(properties?: App.Acitivity.CouponCodeListForProductDetail.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.CouponCodeListForProductDetail.IRequest): App.Acitivity.CouponCodeListForProductDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.CouponCodeListForProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponCodeListForProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.CouponCodeListForProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponCodeListForProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponCodeListForProductDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponCodeListForProductDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponCodeListForProductDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponCodeListForProductDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (ActivityCodeInfo.IActivityCodeInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CouponCodeListForProductDetail.IResponse);

                /** Response list. */
                public list: ActivityCodeInfo.IActivityCodeInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.CouponCodeListForProductDetail.IResponse): App.Acitivity.CouponCodeListForProductDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.CouponCodeListForProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponCodeListForProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.CouponCodeListForProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponCodeListForProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponCodeListForProductDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponCodeListForProductDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponCodeListForProductDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponCodeListForProductDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CommonPopup. */
        namespace CommonPopup {

            /** Properties of a Request. */
            interface IRequest {

                /** Request platform */
                platform?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CommonPopup.IRequest);

                /** Request platform. */
                public platform: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.CommonPopup.IRequest): App.Acitivity.CommonPopup.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.CommonPopup.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CommonPopup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.CommonPopup.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CommonPopup.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CommonPopup.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CommonPopup.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CommonPopup.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CommonPopup.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response couponPopup */
                couponPopup?: (App.Acitivity.CommonPopup.ICouponPopup|null);

                /** Response newUserZoneList */
                newUserZoneList?: (ActivityCodeInfo.IActivityCodeInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CommonPopup.IResponse);

                /** Response couponPopup. */
                public couponPopup?: (App.Acitivity.CommonPopup.ICouponPopup|null);

                /** Response newUserZoneList. */
                public newUserZoneList: ActivityCodeInfo.IActivityCodeInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.CommonPopup.IResponse): App.Acitivity.CommonPopup.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.CommonPopup.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CommonPopup.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.CommonPopup.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CommonPopup.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CommonPopup.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CommonPopup.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CommonPopup.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CommonPopup.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CouponPopup. */
            interface ICouponPopup {

                /** CouponPopup list */
                list?: (ActivityCodeInfo.IActivityCodeInfo[]|null);

                /** CouponPopup claimText */
                claimText?: (string|null);

                /** CouponPopup claimedText */
                claimedText?: (string|null);

                /** CouponPopup hasNewUserZone */
                hasNewUserZone?: (boolean|null);

                /** CouponPopup linkUrl */
                linkUrl?: (string|null);
            }

            /** Represents a CouponPopup. */
            class CouponPopup implements ICouponPopup {

                /**
                 * Constructs a new CouponPopup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CommonPopup.ICouponPopup);

                /** CouponPopup list. */
                public list: ActivityCodeInfo.IActivityCodeInfo[];

                /** CouponPopup claimText. */
                public claimText: string;

                /** CouponPopup claimedText. */
                public claimedText: string;

                /** CouponPopup hasNewUserZone. */
                public hasNewUserZone: boolean;

                /** CouponPopup linkUrl. */
                public linkUrl: string;

                /**
                 * Creates a new CouponPopup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CouponPopup instance
                 */
                public static create(properties?: App.Acitivity.CommonPopup.ICouponPopup): App.Acitivity.CommonPopup.CouponPopup;

                /**
                 * Encodes the specified CouponPopup message. Does not implicitly {@link App.Acitivity.CommonPopup.CouponPopup.verify|verify} messages.
                 * @param message CouponPopup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CommonPopup.ICouponPopup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CouponPopup message, length delimited. Does not implicitly {@link App.Acitivity.CommonPopup.CouponPopup.verify|verify} messages.
                 * @param message CouponPopup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CommonPopup.ICouponPopup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CouponPopup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CouponPopup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CommonPopup.CouponPopup;

                /**
                 * Decodes a CouponPopup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CouponPopup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CommonPopup.CouponPopup;

                /**
                 * Verifies a CouponPopup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CouponPopup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CouponPopup
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CommonPopup.CouponPopup;

                /**
                 * Creates a plain object from a CouponPopup message. Also converts values to other types if specified.
                 * @param message CouponPopup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CommonPopup.CouponPopup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CouponPopup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeForNewUser. */
        namespace CouponCodeForNewUser {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CouponCodeForNewUser.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.CouponCodeForNewUser.IRequest): App.Acitivity.CouponCodeForNewUser.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.CouponCodeForNewUser.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponCodeForNewUser.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.CouponCodeForNewUser.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponCodeForNewUser.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponCodeForNewUser.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponCodeForNewUser.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponCodeForNewUser.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponCodeForNewUser.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (ActivityCodeInfo.IActivityCodeInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CouponCodeForNewUser.IResponse);

                /** Response list. */
                public list: ActivityCodeInfo.IActivityCodeInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.CouponCodeForNewUser.IResponse): App.Acitivity.CouponCodeForNewUser.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.CouponCodeForNewUser.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponCodeForNewUser.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.CouponCodeForNewUser.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponCodeForNewUser.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponCodeForNewUser.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponCodeForNewUser.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponCodeForNewUser.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponCodeForNewUser.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponPopupIndex. */
        namespace CouponPopupIndex {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CouponPopupIndex.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.CouponPopupIndex.IRequest): App.Acitivity.CouponPopupIndex.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.CouponPopupIndex.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponPopupIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.CouponPopupIndex.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponPopupIndex.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponPopupIndex.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponPopupIndex.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponPopupIndex.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponPopupIndex.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (ActivityCodeInfo.IActivityCodeInfo[]|null);

                /** Response claimText */
                claimText?: (string|null);

                /** Response claimedText */
                claimedText?: (string|null);

                /** Response hasNewUserZone */
                hasNewUserZone?: (boolean|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.CouponPopupIndex.IResponse);

                /** Response list. */
                public list: ActivityCodeInfo.IActivityCodeInfo[];

                /** Response claimText. */
                public claimText: string;

                /** Response claimedText. */
                public claimedText: string;

                /** Response hasNewUserZone. */
                public hasNewUserZone: boolean;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.CouponPopupIndex.IResponse): App.Acitivity.CouponPopupIndex.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.CouponPopupIndex.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.CouponPopupIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.CouponPopupIndex.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.CouponPopupIndex.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.CouponPopupIndex.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.CouponPopupIndex.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.CouponPopupIndex.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.CouponPopupIndex.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace DiscountForProductDetail. */
        namespace DiscountForProductDetail {

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
                constructor(properties?: App.Acitivity.DiscountForProductDetail.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.DiscountForProductDetail.IRequest): App.Acitivity.DiscountForProductDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.DiscountForProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.DiscountForProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.DiscountForProductDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.DiscountForProductDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.DiscountForProductDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.DiscountForProductDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.DiscountForProductDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.DiscountForProductDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response couponList */
                couponList?: (ActivityCodeInfo.IActivityCodeInfo[]|null);

                /** Response specialOfferList */
                specialOfferList?: (SpecialOfferInfo.ISpecialOfferInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.DiscountForProductDetail.IResponse);

                /** Response couponList. */
                public couponList: ActivityCodeInfo.IActivityCodeInfo[];

                /** Response specialOfferList. */
                public specialOfferList: SpecialOfferInfo.ISpecialOfferInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.DiscountForProductDetail.IResponse): App.Acitivity.DiscountForProductDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.DiscountForProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.DiscountForProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.DiscountForProductDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.DiscountForProductDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.DiscountForProductDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.DiscountForProductDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.DiscountForProductDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.DiscountForProductDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace HomeCommonInfo. */
        namespace HomeCommonInfo {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeCommonInfo.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.HomeCommonInfo.IRequest): App.Acitivity.HomeCommonInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.HomeCommonInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeCommonInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.HomeCommonInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeCommonInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeCommonInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeCommonInfo.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeCommonInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeCommonInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response topBar */
                topBar?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);

                /** Response freeShippingByCart */
                freeShippingByCart?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);

                /** Response freeShippingDay */
                freeShippingDay?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeCommonInfo.IResponse);

                /** Response topBar. */
                public topBar?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);

                /** Response freeShippingByCart. */
                public freeShippingByCart?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);

                /** Response freeShippingDay. */
                public freeShippingDay?: (App.Acitivity.HomeCommonInfo.INotificationBar|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.HomeCommonInfo.IResponse): App.Acitivity.HomeCommonInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.HomeCommonInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeCommonInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.HomeCommonInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeCommonInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeCommonInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeCommonInfo.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeCommonInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeCommonInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotificationBar. */
            interface INotificationBar {

                /** NotificationBar imgUrl */
                imgUrl?: (string|null);

                /** NotificationBar linkUrl */
                linkUrl?: (string|null);
            }

            /** Represents a NotificationBar. */
            class NotificationBar implements INotificationBar {

                /**
                 * Constructs a new NotificationBar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeCommonInfo.INotificationBar);

                /** NotificationBar imgUrl. */
                public imgUrl: string;

                /** NotificationBar linkUrl. */
                public linkUrl: string;

                /**
                 * Creates a new NotificationBar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationBar instance
                 */
                public static create(properties?: App.Acitivity.HomeCommonInfo.INotificationBar): App.Acitivity.HomeCommonInfo.NotificationBar;

                /**
                 * Encodes the specified NotificationBar message. Does not implicitly {@link App.Acitivity.HomeCommonInfo.NotificationBar.verify|verify} messages.
                 * @param message NotificationBar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeCommonInfo.INotificationBar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationBar message, length delimited. Does not implicitly {@link App.Acitivity.HomeCommonInfo.NotificationBar.verify|verify} messages.
                 * @param message NotificationBar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeCommonInfo.INotificationBar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationBar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationBar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeCommonInfo.NotificationBar;

                /**
                 * Decodes a NotificationBar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationBar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeCommonInfo.NotificationBar;

                /**
                 * Verifies a NotificationBar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationBar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationBar
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeCommonInfo.NotificationBar;

                /**
                 * Creates a plain object from a NotificationBar message. Also converts values to other types if specified.
                 * @param message NotificationBar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeCommonInfo.NotificationBar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationBar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace HomeRecommendTag. */
        namespace HomeRecommendTag {

            /** Properties of a Request. */
            interface IRequest {

                /** Request sortId */
                sortId?: (string|null);

                /** Request sortId3c */
                sortId3c?: (string|null);

                /** Request tagId */
                tagId?: (number|Long|null);

                /** Request hasTag */
                hasTag?: (boolean|null);

                /** Request isFirstTag */
                isFirstTag?: (boolean|null);

                /** Request pageSize */
                pageSize?: (number|null);

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request platform */
                platform?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeRecommendTag.IRequest);

                /** Request sortId. */
                public sortId: string;

                /** Request sortId3c. */
                public sortId3c: string;

                /** Request tagId. */
                public tagId: (number|Long);

                /** Request hasTag. */
                public hasTag: boolean;

                /** Request isFirstTag. */
                public isFirstTag: boolean;

                /** Request pageSize. */
                public pageSize: number;

                /** Request pageNum. */
                public pageNum: number;

                /** Request platform. */
                public platform: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.HomeRecommendTag.IRequest): App.Acitivity.HomeRecommendTag.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeRecommendTag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeRecommendTag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeRecommendTag.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeRecommendTag.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeRecommendTag.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeRecommendTag.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response tagList */
                tagList?: (App.Acitivity.HomeRecommendTag.ITag[]|null);

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);

                /** Response sortId */
                sortId?: (string|null);

                /** Response sortId3c */
                sortId3c?: (string|null);

                /** Response saleTestList */
                saleTestList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeRecommendTag.IResponse);

                /** Response tagList. */
                public tagList: App.Acitivity.HomeRecommendTag.ITag[];

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /** Response sortId. */
                public sortId: string;

                /** Response sortId3c. */
                public sortId3c: string;

                /** Response saleTestList. */
                public saleTestList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.HomeRecommendTag.IResponse): App.Acitivity.HomeRecommendTag.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeRecommendTag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeRecommendTag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeRecommendTag.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeRecommendTag.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeRecommendTag.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeRecommendTag.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Tag. */
            interface ITag {

                /** Tag tagId */
                tagId?: (number|Long|null);

                /** Tag traceName */
                traceName?: (string|null);

                /** Tag title */
                title?: (string|null);

                /** Tag justForYou */
                justForYou?: (boolean|null);
            }

            /** Represents a Tag. */
            class Tag implements ITag {

                /**
                 * Constructs a new Tag.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.HomeRecommendTag.ITag);

                /** Tag tagId. */
                public tagId: (number|Long);

                /** Tag traceName. */
                public traceName: string;

                /** Tag title. */
                public title: string;

                /** Tag justForYou. */
                public justForYou: boolean;

                /**
                 * Creates a new Tag instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tag instance
                 */
                public static create(properties?: App.Acitivity.HomeRecommendTag.ITag): App.Acitivity.HomeRecommendTag.Tag;

                /**
                 * Encodes the specified Tag message. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.HomeRecommendTag.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Tag message, length delimited. Does not implicitly {@link App.Acitivity.HomeRecommendTag.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.HomeRecommendTag.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tag message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.HomeRecommendTag.Tag;

                /**
                 * Decodes a Tag message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.HomeRecommendTag.Tag;

                /**
                 * Verifies a Tag message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Tag
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.HomeRecommendTag.Tag;

                /**
                 * Creates a plain object from a Tag message. Also converts values to other types if specified.
                 * @param message Tag
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.HomeRecommendTag.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Tag to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace RecommendCommonTag. */
        namespace RecommendCommonTag {

            /** Properties of a Request. */
            interface IRequest {

                /** Request sortId */
                sortId?: (string|null);

                /** Request tagId */
                tagId?: (number|Long|null);

                /** Request hasTag */
                hasTag?: (boolean|null);

                /** Request platform */
                platform?: (number|null);

                /**
                 * FASHION(1, "fashion"),
                 * ELECTRONIC(2,"electronic");
                 */
                position?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.RecommendCommonTag.IRequest);

                /** Request sortId. */
                public sortId: string;

                /** Request tagId. */
                public tagId: (number|Long);

                /** Request hasTag. */
                public hasTag: boolean;

                /** Request platform. */
                public platform: number;

                /**
                 * FASHION(1, "fashion"),
                 * ELECTRONIC(2,"electronic");
                 */
                public position: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.RecommendCommonTag.IRequest): App.Acitivity.RecommendCommonTag.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.RecommendCommonTag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.RecommendCommonTag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.RecommendCommonTag.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.RecommendCommonTag.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.RecommendCommonTag.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.RecommendCommonTag.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response tagList */
                tagList?: (App.Acitivity.RecommendCommonTag.ITag[]|null);

                /** Response spuInfoList */
                spuInfoList?: (Component.ISpuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.RecommendCommonTag.IResponse);

                /** Response tagList. */
                public tagList: App.Acitivity.RecommendCommonTag.ITag[];

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.RecommendCommonTag.IResponse): App.Acitivity.RecommendCommonTag.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.RecommendCommonTag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.RecommendCommonTag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.RecommendCommonTag.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.RecommendCommonTag.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.RecommendCommonTag.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.RecommendCommonTag.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Tag. */
            interface ITag {

                /** Tag tagId */
                tagId?: (number|Long|null);

                /** Tag tagName */
                tagName?: (string|null);

                /** Tag traceName */
                traceName?: (string|null);
            }

            /** Represents a Tag. */
            class Tag implements ITag {

                /**
                 * Constructs a new Tag.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.RecommendCommonTag.ITag);

                /** Tag tagId. */
                public tagId: (number|Long);

                /** Tag tagName. */
                public tagName: string;

                /** Tag traceName. */
                public traceName: string;

                /**
                 * Creates a new Tag instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Tag instance
                 */
                public static create(properties?: App.Acitivity.RecommendCommonTag.ITag): App.Acitivity.RecommendCommonTag.Tag;

                /**
                 * Encodes the specified Tag message. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.RecommendCommonTag.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Tag message, length delimited. Does not implicitly {@link App.Acitivity.RecommendCommonTag.Tag.verify|verify} messages.
                 * @param message Tag message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.RecommendCommonTag.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Tag message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.RecommendCommonTag.Tag;

                /**
                 * Decodes a Tag message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Tag
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.RecommendCommonTag.Tag;

                /**
                 * Verifies a Tag message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Tag
                 */
                public static fromObject(object: { [k: string]: any }): App.Acitivity.RecommendCommonTag.Tag;

                /**
                 * Creates a plain object from a Tag message. Also converts values to other types if specified.
                 * @param message Tag
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.RecommendCommonTag.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Tag to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserCouponCodeList. */
        namespace UserCouponCodeList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request dataType */
                dataType?: (number|null);

                /** Request page */
                page?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.UserCouponCodeList.IRequest);

                /** Request dataType. */
                public dataType: number;

                /** Request page. */
                public page: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.UserCouponCodeList.IRequest): App.Acitivity.UserCouponCodeList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.UserCouponCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.UserCouponCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.UserCouponCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.UserCouponCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.UserCouponCodeList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.UserCouponCodeList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.UserCouponCodeList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.UserCouponCodeList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (ActivityCodeInfo.IActivityCodeInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.UserCouponCodeList.IResponse);

                /** Response list. */
                public list: ActivityCodeInfo.IActivityCodeInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.UserCouponCodeList.IResponse): App.Acitivity.UserCouponCodeList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.UserCouponCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.UserCouponCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.UserCouponCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.UserCouponCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.UserCouponCodeList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.UserCouponCodeList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.UserCouponCodeList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.UserCouponCodeList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserCouponCodeNum. */
        namespace UserCouponCodeNum {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.UserCouponCodeNum.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Acitivity.UserCouponCodeNum.IRequest): App.Acitivity.UserCouponCodeNum.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Acitivity.UserCouponCodeNum.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.UserCouponCodeNum.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Acitivity.UserCouponCodeNum.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.UserCouponCodeNum.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.UserCouponCodeNum.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.UserCouponCodeNum.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.UserCouponCodeNum.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.UserCouponCodeNum.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response num */
                num?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Acitivity.UserCouponCodeNum.IResponse);

                /** Response num. */
                public num: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Acitivity.UserCouponCodeNum.IResponse): App.Acitivity.UserCouponCodeNum.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Acitivity.UserCouponCodeNum.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Acitivity.UserCouponCodeNum.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Acitivity.UserCouponCodeNum.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Acitivity.UserCouponCodeNum.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Acitivity.UserCouponCodeNum.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Acitivity.UserCouponCodeNum.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Acitivity.UserCouponCodeNum.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Acitivity.UserCouponCodeNum.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Pages. */
    namespace Pages {

        /** Namespace PagesInfo. */
        namespace PagesInfo {

            /** Properties of a PagesTab. */
            interface IPagesTab {

                /** PagesTab detailId */
                detailId?: (number|Long|null);

                /** PagesTab tabName */
                tabName?: (string|null);
            }

            /** Represents a PagesTab. */
            class PagesTab implements IPagesTab {

                /**
                 * Constructs a new PagesTab.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesInfo.IPagesTab);

                /** PagesTab detailId. */
                public detailId: (number|Long);

                /** PagesTab tabName. */
                public tabName: string;

                /**
                 * Creates a new PagesTab instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PagesTab instance
                 */
                public static create(properties?: App.Pages.PagesInfo.IPagesTab): App.Pages.PagesInfo.PagesTab;

                /**
                 * Encodes the specified PagesTab message. Does not implicitly {@link App.Pages.PagesInfo.PagesTab.verify|verify} messages.
                 * @param message PagesTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesInfo.IPagesTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PagesTab message, length delimited. Does not implicitly {@link App.Pages.PagesInfo.PagesTab.verify|verify} messages.
                 * @param message PagesTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesInfo.IPagesTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PagesTab message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PagesTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesInfo.PagesTab;

                /**
                 * Decodes a PagesTab message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PagesTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesInfo.PagesTab;

                /**
                 * Verifies a PagesTab message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PagesTab message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PagesTab
                 */
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesInfo.PagesTab;

                /**
                 * Creates a plain object from a PagesTab message. Also converts values to other types if specified.
                 * @param message PagesTab
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesInfo.PagesTab, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PagesTab to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PagesBanner. */
            interface IPagesBanner {

                /** PagesBanner detailId */
                detailId?: (number|Long|null);

                /** PagesBanner img */
                img?: (string|null);
            }

            /** Represents a PagesBanner. */
            class PagesBanner implements IPagesBanner {

                /**
                 * Constructs a new PagesBanner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesInfo.IPagesBanner);

                /** PagesBanner detailId. */
                public detailId: (number|Long);

                /** PagesBanner img. */
                public img: string;

                /**
                 * Creates a new PagesBanner instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PagesBanner instance
                 */
                public static create(properties?: App.Pages.PagesInfo.IPagesBanner): App.Pages.PagesInfo.PagesBanner;

                /**
                 * Encodes the specified PagesBanner message. Does not implicitly {@link App.Pages.PagesInfo.PagesBanner.verify|verify} messages.
                 * @param message PagesBanner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesInfo.IPagesBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PagesBanner message, length delimited. Does not implicitly {@link App.Pages.PagesInfo.PagesBanner.verify|verify} messages.
                 * @param message PagesBanner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesInfo.IPagesBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PagesBanner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PagesBanner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesInfo.PagesBanner;

                /**
                 * Decodes a PagesBanner message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PagesBanner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesInfo.PagesBanner;

                /**
                 * Verifies a PagesBanner message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PagesBanner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PagesBanner
                 */
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesInfo.PagesBanner;

                /**
                 * Creates a plain object from a PagesBanner message. Also converts values to other types if specified.
                 * @param message PagesBanner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesInfo.PagesBanner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PagesBanner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PagesNav. */
        namespace PagesNav {

            /** Properties of a Request. */
            interface IRequest {

                /** Request pageCode */
                pageCode?: (number|null);

                /** Request preview */
                preview?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNav.IRequest);

                /** Request pageCode. */
                public pageCode: number;

                /** Request preview. */
                public preview: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Pages.PagesNav.IRequest): App.Pages.PagesNav.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Pages.PagesNav.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNav.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Pages.PagesNav.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNav.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNav.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNav.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNav.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNav.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response pageCode */
                pageCode?: (number|null);

                /** Response title */
                title?: (string|null);

                /** Response dataTag */
                dataTag?: (string|null);

                /** Response tabType */
                tabType?: (number|null);

                /** Response traceTitle */
                traceTitle?: (string|null);

                /** Response imgs */
                imgs?: (App.Pages.PagesNav.IPagesBanner[]|null);

                /** Response tabs */
                tabs?: (App.Pages.PagesNav.IPagesTab[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNav.IResponse);

                /** Response pageCode. */
                public pageCode: number;

                /** Response title. */
                public title: string;

                /** Response dataTag. */
                public dataTag: string;

                /** Response tabType. */
                public tabType: number;

                /** Response traceTitle. */
                public traceTitle: string;

                /** Response imgs. */
                public imgs: App.Pages.PagesNav.IPagesBanner[];

                /** Response tabs. */
                public tabs: App.Pages.PagesNav.IPagesTab[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Pages.PagesNav.IResponse): App.Pages.PagesNav.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Pages.PagesNav.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNav.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Pages.PagesNav.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNav.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNav.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNav.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNav.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNav.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PagesTab. */
            interface IPagesTab {

                /** PagesTab detailId */
                detailId?: (number|Long|null);

                /** PagesTab tabName */
                tabName?: (string|null);

                /** PagesTab traceTitle */
                traceTitle?: (string|null);

                /** PagesTab dataType */
                dataType?: (number|null);

                /** PagesTab dataSet */
                dataSet?: (string|null);
            }

            /** Represents a PagesTab. */
            class PagesTab implements IPagesTab {

                /**
                 * Constructs a new PagesTab.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNav.IPagesTab);

                /** PagesTab detailId. */
                public detailId: (number|Long);

                /** PagesTab tabName. */
                public tabName: string;

                /** PagesTab traceTitle. */
                public traceTitle: string;

                /** PagesTab dataType. */
                public dataType: number;

                /** PagesTab dataSet. */
                public dataSet: string;

                /**
                 * Creates a new PagesTab instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PagesTab instance
                 */
                public static create(properties?: App.Pages.PagesNav.IPagesTab): App.Pages.PagesNav.PagesTab;

                /**
                 * Encodes the specified PagesTab message. Does not implicitly {@link App.Pages.PagesNav.PagesTab.verify|verify} messages.
                 * @param message PagesTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNav.IPagesTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PagesTab message, length delimited. Does not implicitly {@link App.Pages.PagesNav.PagesTab.verify|verify} messages.
                 * @param message PagesTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNav.IPagesTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PagesTab message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PagesTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNav.PagesTab;

                /**
                 * Decodes a PagesTab message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PagesTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNav.PagesTab;

                /**
                 * Verifies a PagesTab message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PagesTab message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PagesTab
                 */
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNav.PagesTab;

                /**
                 * Creates a plain object from a PagesTab message. Also converts values to other types if specified.
                 * @param message PagesTab
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNav.PagesTab, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PagesTab to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PagesBanner. */
            interface IPagesBanner {

                /** PagesBanner detailId */
                detailId?: (number|Long|null);

                /** PagesBanner img */
                img?: (string|null);

                /** PagesBanner traceTitle */
                traceTitle?: (string|null);

                /** PagesBanner dataType */
                dataType?: (number|null);

                /** PagesBanner dataSet */
                dataSet?: (string|null);
            }

            /** Represents a PagesBanner. */
            class PagesBanner implements IPagesBanner {

                /**
                 * Constructs a new PagesBanner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNav.IPagesBanner);

                /** PagesBanner detailId. */
                public detailId: (number|Long);

                /** PagesBanner img. */
                public img: string;

                /** PagesBanner traceTitle. */
                public traceTitle: string;

                /** PagesBanner dataType. */
                public dataType: number;

                /** PagesBanner dataSet. */
                public dataSet: string;

                /**
                 * Creates a new PagesBanner instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PagesBanner instance
                 */
                public static create(properties?: App.Pages.PagesNav.IPagesBanner): App.Pages.PagesNav.PagesBanner;

                /**
                 * Encodes the specified PagesBanner message. Does not implicitly {@link App.Pages.PagesNav.PagesBanner.verify|verify} messages.
                 * @param message PagesBanner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNav.IPagesBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PagesBanner message, length delimited. Does not implicitly {@link App.Pages.PagesNav.PagesBanner.verify|verify} messages.
                 * @param message PagesBanner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNav.IPagesBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PagesBanner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PagesBanner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNav.PagesBanner;

                /**
                 * Decodes a PagesBanner message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PagesBanner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNav.PagesBanner;

                /**
                 * Verifies a PagesBanner message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PagesBanner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PagesBanner
                 */
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNav.PagesBanner;

                /**
                 * Creates a plain object from a PagesBanner message. Also converts values to other types if specified.
                 * @param message PagesBanner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNav.PagesBanner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PagesBanner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PagesNavProducts. */
        namespace PagesNavProducts {

            /** Properties of a Request. */
            interface IRequest {

                /** Request sortId */
                sortId?: (string|null);

                /** Request detailId */
                detailId?: (number|Long|null);

                /** Request sortType */
                sortType?: (string|null);

                /** Request sortOrder */
                sortOrder?: (string|null);

                /** Request size */
                size?: (number|null);

                /** Request topSpuIds */
                topSpuIds?: ((number|Long)[]|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNavProducts.IRequest);

                /** Request sortId. */
                public sortId: string;

                /** Request detailId. */
                public detailId: (number|Long);

                /** Request sortType. */
                public sortType: string;

                /** Request sortOrder. */
                public sortOrder: string;

                /** Request size. */
                public size: number;

                /** Request topSpuIds. */
                public topSpuIds: (number|Long)[];

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Pages.PagesNavProducts.IRequest): App.Pages.PagesNavProducts.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Pages.PagesNavProducts.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNavProducts.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Pages.PagesNavProducts.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNavProducts.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNavProducts.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNavProducts.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNavProducts.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNavProducts.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Pages.PagesNavProducts.IResponse);

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Pages.PagesNavProducts.IResponse): App.Pages.PagesNavProducts.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Pages.PagesNavProducts.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Pages.PagesNavProducts.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Pages.PagesNavProducts.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Pages.PagesNavProducts.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Pages.PagesNavProducts.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Pages.PagesNavProducts.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Pages.PagesNavProducts.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Pages.PagesNavProducts.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace SpecialOffer. */
    namespace SpecialOffer {

        /** Namespace SpecialOfferDetail. */
        namespace SpecialOfferDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request offerId */
                offerId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferDetail.IRequest);

                /** Request offerId. */
                public offerId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferDetail.IRequest): App.SpecialOffer.SpecialOfferDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response id */
                id?: (number|Long|null);

                /** Response type */
                type?: (string|null);

                /** Response title */
                title?: (string|null);

                /** Response discountList */
                discountList?: (App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferDetail.IResponse);

                /** Response id. */
                public id: (number|Long);

                /** Response type. */
                public type: string;

                /** Response title. */
                public title: string;

                /** Response discountList. */
                public discountList: App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferDetail.IResponse): App.SpecialOffer.SpecialOfferDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecialOfferDiscount. */
            interface ISpecialOfferDiscount {

                /** SpecialOfferDiscount offerDiscountId */
                offerDiscountId?: (number|Long|null);

                /** SpecialOfferDiscount quantity */
                quantity?: (number|null);

                /** SpecialOfferDiscount totalPrice */
                totalPrice?: (number|null);

                /** SpecialOfferDiscount reduce */
                reduce?: (number|null);

                /** SpecialOfferDiscount discount */
                discount?: (number|null);
            }

            /** Represents a SpecialOfferDiscount. */
            class SpecialOfferDiscount implements ISpecialOfferDiscount {

                /**
                 * Constructs a new SpecialOfferDiscount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount);

                /** SpecialOfferDiscount offerDiscountId. */
                public offerDiscountId: (number|Long);

                /** SpecialOfferDiscount quantity. */
                public quantity: number;

                /** SpecialOfferDiscount totalPrice. */
                public totalPrice: number;

                /** SpecialOfferDiscount reduce. */
                public reduce: number;

                /** SpecialOfferDiscount discount. */
                public discount: number;

                /**
                 * Creates a new SpecialOfferDiscount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOfferDiscount instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount): App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount;

                /**
                 * Encodes the specified SpecialOfferDiscount message. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount.verify|verify} messages.
                 * @param message SpecialOfferDiscount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOfferDiscount message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount.verify|verify} messages.
                 * @param message SpecialOfferDiscount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferDetail.ISpecialOfferDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOfferDiscount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOfferDiscount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount;

                /**
                 * Decodes a SpecialOfferDiscount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOfferDiscount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount;

                /**
                 * Verifies a SpecialOfferDiscount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecialOfferDiscount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecialOfferDiscount
                 */
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount;

                /**
                 * Creates a plain object from a SpecialOfferDiscount message. Also converts values to other types if specified.
                 * @param message SpecialOfferDiscount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferDetail.SpecialOfferDiscount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOfferDiscount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace SpecialOfferListBySpu. */
        namespace SpecialOfferListBySpu {

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
                constructor(properties?: App.SpecialOffer.SpecialOfferListBySpu.IRequest);

                /** Request spuId. */
                public spuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferListBySpu.IRequest): App.SpecialOffer.SpecialOfferListBySpu.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferListBySpu.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferListBySpu.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferListBySpu.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferListBySpu.Request;

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
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferListBySpu.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferListBySpu.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferListBySpu.IResponse);

                /** Response list. */
                public list: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferListBySpu.IResponse): App.SpecialOffer.SpecialOfferListBySpu.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferListBySpu.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferListBySpu.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferListBySpu.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferListBySpu.Response;

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
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferListBySpu.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferListBySpu.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecialOffer. */
            interface ISpecialOffer {

                /** SpecialOffer id */
                id?: (number|Long|null);

                /** SpecialOffer idString */
                idString?: (string|null);

                /** SpecialOffer type */
                type?: (string|null);

                /** SpecialOffer title */
                title?: (string|null);

                /** SpecialOffer showTitle */
                showTitle?: (string|null);

                /** SpecialOffer discountList */
                discountList?: (App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount[]|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer idString. */
                public idString: string;

                /** SpecialOffer type. */
                public type: string;

                /** SpecialOffer title. */
                public title: string;

                /** SpecialOffer showTitle. */
                public showTitle: string;

                /** SpecialOffer discountList. */
                public discountList: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount[];

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer): App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer;

                /**
                 * Verifies a SpecialOffer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecialOffer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecialOffer
                 */
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferListBySpu.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecialOfferDiscount. */
            interface ISpecialOfferDiscount {

                /** SpecialOfferDiscount offerDiscountId */
                offerDiscountId?: (number|Long|null);

                /** SpecialOfferDiscount offerDiscountIdString */
                offerDiscountIdString?: (string|null);

                /** SpecialOfferDiscount quantity */
                quantity?: (number|null);

                /** SpecialOfferDiscount totalPrice */
                totalPrice?: (number|null);

                /** SpecialOfferDiscount reduce */
                reduce?: (number|null);

                /** SpecialOfferDiscount discount */
                discount?: (number|null);
            }

            /** Represents a SpecialOfferDiscount. */
            class SpecialOfferDiscount implements ISpecialOfferDiscount {

                /**
                 * Constructs a new SpecialOfferDiscount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount);

                /** SpecialOfferDiscount offerDiscountId. */
                public offerDiscountId: (number|Long);

                /** SpecialOfferDiscount offerDiscountIdString. */
                public offerDiscountIdString: string;

                /** SpecialOfferDiscount quantity. */
                public quantity: number;

                /** SpecialOfferDiscount totalPrice. */
                public totalPrice: number;

                /** SpecialOfferDiscount reduce. */
                public reduce: number;

                /** SpecialOfferDiscount discount. */
                public discount: number;

                /**
                 * Creates a new SpecialOfferDiscount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOfferDiscount instance
                 */
                public static create(properties?: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount): App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount;

                /**
                 * Encodes the specified SpecialOfferDiscount message. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount.verify|verify} messages.
                 * @param message SpecialOfferDiscount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOfferDiscount message, length delimited. Does not implicitly {@link App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount.verify|verify} messages.
                 * @param message SpecialOfferDiscount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.SpecialOffer.SpecialOfferListBySpu.ISpecialOfferDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOfferDiscount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOfferDiscount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount;

                /**
                 * Decodes a SpecialOfferDiscount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOfferDiscount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount;

                /**
                 * Verifies a SpecialOfferDiscount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpecialOfferDiscount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpecialOfferDiscount
                 */
                public static fromObject(object: { [k: string]: any }): App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount;

                /**
                 * Creates a plain object from a SpecialOfferDiscount message. Also converts values to other types if specified.
                 * @param message SpecialOfferDiscount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.SpecialOffer.SpecialOfferListBySpu.SpecialOfferDiscount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOfferDiscount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Activity. */
    namespace Activity {

        /** Namespace SpuListByDataSet. */
        namespace SpuListByDataSet {

            /** Properties of a Request. */
            interface IRequest {

                /** Request type */
                type?: (number|null);

                /** Request data */
                data?: (string|null);

                /** Request sortId */
                sortId?: (string|null);

                /** Request sortByRecommend */
                sortByRecommend?: (number|null);

                /** Request sortByTopSale */
                sortByTopSale?: (number|null);

                /** Request sortByPrice */
                sortByPrice?: (number|null);

                /** Request size */
                size?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Activity.SpuListByDataSet.IRequest);

                /** Request type. */
                public type: number;

                /** Request data. */
                public data: string;

                /** Request sortId. */
                public sortId: string;

                /** Request sortByRecommend. */
                public sortByRecommend: number;

                /** Request sortByTopSale. */
                public sortByTopSale: number;

                /** Request sortByPrice. */
                public sortByPrice: number;

                /** Request size. */
                public size: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Activity.SpuListByDataSet.IRequest): App.Activity.SpuListByDataSet.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Activity.SpuListByDataSet.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Activity.SpuListByDataSet.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Activity.SpuListByDataSet.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Activity.SpuListByDataSet.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Activity.SpuListByDataSet.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Activity.SpuListByDataSet.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Activity.SpuListByDataSet.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Activity.SpuListByDataSet.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Activity.SpuListByDataSet.IResponse);

                /** Response spuInfoList. */
                public spuInfoList: Component.ISpuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Activity.SpuListByDataSet.IResponse): App.Activity.SpuListByDataSet.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Activity.SpuListByDataSet.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Activity.SpuListByDataSet.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Activity.SpuListByDataSet.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Activity.SpuListByDataSet.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Activity.SpuListByDataSet.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Activity.SpuListByDataSet.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Activity.SpuListByDataSet.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Activity.SpuListByDataSet.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace SpecialOfferInfo. */
export namespace SpecialOfferInfo {

    /** Properties of a SpecialOfferInfo. */
    interface ISpecialOfferInfo {

        /** SpecialOfferInfo id */
        id?: (number|Long|null);

        /** SpecialOfferInfo idString */
        idString?: (string|null);

        /** SpecialOfferInfo type */
        type?: (string|null);

        /** SpecialOfferInfo title */
        title?: (string|null);

        /** SpecialOfferInfo showTitle */
        showTitle?: (string|null);

        /** SpecialOfferInfo discountList */
        discountList?: (SpecialOfferInfo.ISpecialOfferDiscountInfo[]|null);
    }

    /** Represents a SpecialOfferInfo. */
    class SpecialOfferInfo implements ISpecialOfferInfo {

        /**
         * Constructs a new SpecialOfferInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SpecialOfferInfo.ISpecialOfferInfo);

        /** SpecialOfferInfo id. */
        public id: (number|Long);

        /** SpecialOfferInfo idString. */
        public idString: string;

        /** SpecialOfferInfo type. */
        public type: string;

        /** SpecialOfferInfo title. */
        public title: string;

        /** SpecialOfferInfo showTitle. */
        public showTitle: string;

        /** SpecialOfferInfo discountList. */
        public discountList: SpecialOfferInfo.ISpecialOfferDiscountInfo[];

        /**
         * Creates a new SpecialOfferInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpecialOfferInfo instance
         */
        public static create(properties?: SpecialOfferInfo.ISpecialOfferInfo): SpecialOfferInfo.SpecialOfferInfo;

        /**
         * Encodes the specified SpecialOfferInfo message. Does not implicitly {@link SpecialOfferInfo.SpecialOfferInfo.verify|verify} messages.
         * @param message SpecialOfferInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SpecialOfferInfo.ISpecialOfferInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpecialOfferInfo message, length delimited. Does not implicitly {@link SpecialOfferInfo.SpecialOfferInfo.verify|verify} messages.
         * @param message SpecialOfferInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SpecialOfferInfo.ISpecialOfferInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpecialOfferInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpecialOfferInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpecialOfferInfo.SpecialOfferInfo;

        /**
         * Decodes a SpecialOfferInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpecialOfferInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpecialOfferInfo.SpecialOfferInfo;

        /**
         * Verifies a SpecialOfferInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpecialOfferInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialOfferInfo
         */
        public static fromObject(object: { [k: string]: any }): SpecialOfferInfo.SpecialOfferInfo;

        /**
         * Creates a plain object from a SpecialOfferInfo message. Also converts values to other types if specified.
         * @param message SpecialOfferInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SpecialOfferInfo.SpecialOfferInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialOfferInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialOfferDiscountInfo. */
    interface ISpecialOfferDiscountInfo {

        /** SpecialOfferDiscountInfo offerDiscountId */
        offerDiscountId?: (number|Long|null);

        /** SpecialOfferDiscountInfo offerDiscountIdString */
        offerDiscountIdString?: (string|null);

        /** SpecialOfferDiscountInfo quantity */
        quantity?: (number|null);

        /** SpecialOfferDiscountInfo totalPrice */
        totalPrice?: (number|null);

        /** SpecialOfferDiscountInfo reduce */
        reduce?: (number|null);

        /** SpecialOfferDiscountInfo discount */
        discount?: (number|null);
    }

    /** Represents a SpecialOfferDiscountInfo. */
    class SpecialOfferDiscountInfo implements ISpecialOfferDiscountInfo {

        /**
         * Constructs a new SpecialOfferDiscountInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: SpecialOfferInfo.ISpecialOfferDiscountInfo);

        /** SpecialOfferDiscountInfo offerDiscountId. */
        public offerDiscountId: (number|Long);

        /** SpecialOfferDiscountInfo offerDiscountIdString. */
        public offerDiscountIdString: string;

        /** SpecialOfferDiscountInfo quantity. */
        public quantity: number;

        /** SpecialOfferDiscountInfo totalPrice. */
        public totalPrice: number;

        /** SpecialOfferDiscountInfo reduce. */
        public reduce: number;

        /** SpecialOfferDiscountInfo discount. */
        public discount: number;

        /**
         * Creates a new SpecialOfferDiscountInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpecialOfferDiscountInfo instance
         */
        public static create(properties?: SpecialOfferInfo.ISpecialOfferDiscountInfo): SpecialOfferInfo.SpecialOfferDiscountInfo;

        /**
         * Encodes the specified SpecialOfferDiscountInfo message. Does not implicitly {@link SpecialOfferInfo.SpecialOfferDiscountInfo.verify|verify} messages.
         * @param message SpecialOfferDiscountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SpecialOfferInfo.ISpecialOfferDiscountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpecialOfferDiscountInfo message, length delimited. Does not implicitly {@link SpecialOfferInfo.SpecialOfferDiscountInfo.verify|verify} messages.
         * @param message SpecialOfferDiscountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SpecialOfferInfo.ISpecialOfferDiscountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpecialOfferDiscountInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpecialOfferDiscountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpecialOfferInfo.SpecialOfferDiscountInfo;

        /**
         * Decodes a SpecialOfferDiscountInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpecialOfferDiscountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpecialOfferInfo.SpecialOfferDiscountInfo;

        /**
         * Verifies a SpecialOfferDiscountInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpecialOfferDiscountInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialOfferDiscountInfo
         */
        public static fromObject(object: { [k: string]: any }): SpecialOfferInfo.SpecialOfferDiscountInfo;

        /**
         * Creates a plain object from a SpecialOfferDiscountInfo message. Also converts values to other types if specified.
         * @param message SpecialOfferDiscountInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SpecialOfferInfo.SpecialOfferDiscountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialOfferDiscountInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
