import * as $protobuf from "protobufjs";
/** Namespace AppOpLogList. */
export namespace AppOpLogList {

    /** Properties of a Request. */
    interface IRequest {

        /** Request userId */
        userId?: (number|Long|null);

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
        constructor(properties?: AppOpLogList.IRequest);

        /** Request userId. */
        public userId: (number|Long);

        /** Request pageNum. */
        public pageNum: number;

        /** Request pageSize. */
        public pageSize: number;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: AppOpLogList.IRequest): AppOpLogList.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link AppOpLogList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppOpLogList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link AppOpLogList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppOpLogList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppOpLogList.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppOpLogList.Request;

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
        public static fromObject(object: { [k: string]: any }): AppOpLogList.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppOpLogList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response opLogList */
        opLogList?: (AppOpLogList.IAppOpLogInfo[]|null);

        /** Response total */
        total?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppOpLogList.IResponse);

        /** Response opLogList. */
        public opLogList: AppOpLogList.IAppOpLogInfo[];

        /** Response total. */
        public total: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: AppOpLogList.IResponse): AppOpLogList.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link AppOpLogList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppOpLogList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link AppOpLogList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppOpLogList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppOpLogList.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppOpLogList.Response;

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
        public static fromObject(object: { [k: string]: any }): AppOpLogList.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppOpLogList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppOpLogInfo. */
    interface IAppOpLogInfo {

        /** AppOpLogInfo id */
        id?: (number|Long|null);

        /** AppOpLogInfo userId */
        userId?: (number|null);

        /** AppOpLogInfo logUrl */
        logUrl?: (string|null);

        /** AppOpLogInfo userAgent */
        userAgent?: (string|null);

        /** AppOpLogInfo createTime */
        createTime?: (number|Long|null);
    }

    /** Represents an AppOpLogInfo. */
    class AppOpLogInfo implements IAppOpLogInfo {

        /**
         * Constructs a new AppOpLogInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppOpLogList.IAppOpLogInfo);

        /** AppOpLogInfo id. */
        public id: (number|Long);

        /** AppOpLogInfo userId. */
        public userId: number;

        /** AppOpLogInfo logUrl. */
        public logUrl: string;

        /** AppOpLogInfo userAgent. */
        public userAgent: string;

        /** AppOpLogInfo createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new AppOpLogInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppOpLogInfo instance
         */
        public static create(properties?: AppOpLogList.IAppOpLogInfo): AppOpLogList.AppOpLogInfo;

        /**
         * Encodes the specified AppOpLogInfo message. Does not implicitly {@link AppOpLogList.AppOpLogInfo.verify|verify} messages.
         * @param message AppOpLogInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppOpLogList.IAppOpLogInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppOpLogInfo message, length delimited. Does not implicitly {@link AppOpLogList.AppOpLogInfo.verify|verify} messages.
         * @param message AppOpLogInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppOpLogList.IAppOpLogInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppOpLogInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppOpLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppOpLogList.AppOpLogInfo;

        /**
         * Decodes an AppOpLogInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppOpLogInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppOpLogList.AppOpLogInfo;

        /**
         * Verifies an AppOpLogInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppOpLogInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppOpLogInfo
         */
        public static fromObject(object: { [k: string]: any }): AppOpLogList.AppOpLogInfo;

        /**
         * Creates a plain object from an AppOpLogInfo message. Also converts values to other types if specified.
         * @param message AppOpLogInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppOpLogList.AppOpLogInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppOpLogInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace AppUserEmailLogin. */
export namespace AppUserEmailLogin {

    /** Properties of a Request. */
    interface IRequest {

        /** Request bindType */
        bindType?: (UserType.BindType|null);

        /** Request thirdToken */
        thirdToken?: (string|null);

        /** Request thirdId */
        thirdId?: (string|null);

        /** Request password */
        password?: (string|null);

        /** Request email */
        email?: (string|null);

        /** Request tongdunId */
        tongdunId?: (string|null);

        /** Request adjustId */
        adjustId?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppUserEmailLogin.IRequest);

        /** Request bindType. */
        public bindType: UserType.BindType;

        /** Request thirdToken. */
        public thirdToken: string;

        /** Request thirdId. */
        public thirdId: string;

        /** Request password. */
        public password: string;

        /** Request email. */
        public email: string;

        /** Request tongdunId. */
        public tongdunId: string;

        /** Request adjustId. */
        public adjustId: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: AppUserEmailLogin.IRequest): AppUserEmailLogin.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link AppUserEmailLogin.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserEmailLogin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link AppUserEmailLogin.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserEmailLogin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserEmailLogin.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserEmailLogin.Request;

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
        public static fromObject(object: { [k: string]: any }): AppUserEmailLogin.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserEmailLogin.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response token */
        token?: (string|null);

        /** Response refreshToken */
        refreshToken?: (string|null);

        /** Response userProfileInfo */
        userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response loginType */
        loginType?: (number|null);

        /** Response hasSwitchNationalStore */
        hasSwitchNationalStore?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppUserEmailLogin.IResponse);

        /** Response token. */
        public token: string;

        /** Response refreshToken. */
        public refreshToken: string;

        /** Response userProfileInfo. */
        public userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response loginType. */
        public loginType: number;

        /** Response hasSwitchNationalStore. */
        public hasSwitchNationalStore: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: AppUserEmailLogin.IResponse): AppUserEmailLogin.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link AppUserEmailLogin.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserEmailLogin.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link AppUserEmailLogin.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserEmailLogin.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserEmailLogin.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserEmailLogin.Response;

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
        public static fromObject(object: { [k: string]: any }): AppUserEmailLogin.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserEmailLogin.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserType. */
export namespace UserType {

    /** BindType enum. */
    enum BindType {
        DEFAULT_TYPE = 0,
        WEIXIN = 3,
        FACEBOOK = 4,
        FACEBOOK_H5 = 5,
        EMAIL = 7,
        GOOGLE = 15,
        TWITTER = 16,
        APPLE_ID = 17,
        PAYPAL = 18
    }

    /** PushType enum. */
    enum PushType {
        DEFAULT_PUSHTYPE = 0,
        IOS = 2,
        JPUSH = 3,
        XIAOMI = 4,
        GETUI = 5,
        GOOGLE_PUSH = 6,
        GOOGLE_FCM = 10
    }
}

/** Namespace UserProfileInfo. */
export namespace UserProfileInfo {

    /** Properties of a UserProfileInfo. */
    interface IUserProfileInfo {

        /** UserProfileInfo id */
        id?: (number|Long|null);

        /** UserProfileInfo username */
        username?: (string|null);

        /** UserProfileInfo countryCode */
        countryCode?: (string|null);

        /** UserProfileInfo avatar */
        avatar?: (string|null);

        /** UserProfileInfo email */
        email?: (string|null);

        /** UserProfileInfo language */
        language?: (string|null);

        /** UserProfileInfo gender */
        gender?: (number|null);

        /** UserProfileInfo phone */
        phone?: (string|null);

        /** UserProfileInfo currency */
        currency?: (string|null);

        /** UserProfileInfo zoneCode */
        zoneCode?: (string|null);

        /** UserProfileInfo emailSubscribe */
        emailSubscribe?: (number|null);
    }

    /** Represents a UserProfileInfo. */
    class UserProfileInfo implements IUserProfileInfo {

        /**
         * Constructs a new UserProfileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserProfileInfo.IUserProfileInfo);

        /** UserProfileInfo id. */
        public id: (number|Long);

        /** UserProfileInfo username. */
        public username: string;

        /** UserProfileInfo countryCode. */
        public countryCode: string;

        /** UserProfileInfo avatar. */
        public avatar: string;

        /** UserProfileInfo email. */
        public email: string;

        /** UserProfileInfo language. */
        public language: string;

        /** UserProfileInfo gender. */
        public gender: number;

        /** UserProfileInfo phone. */
        public phone: string;

        /** UserProfileInfo currency. */
        public currency: string;

        /** UserProfileInfo zoneCode. */
        public zoneCode: string;

        /** UserProfileInfo emailSubscribe. */
        public emailSubscribe: number;

        /**
         * Creates a new UserProfileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserProfileInfo instance
         */
        public static create(properties?: UserProfileInfo.IUserProfileInfo): UserProfileInfo.UserProfileInfo;

        /**
         * Encodes the specified UserProfileInfo message. Does not implicitly {@link UserProfileInfo.UserProfileInfo.verify|verify} messages.
         * @param message UserProfileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserProfileInfo.IUserProfileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserProfileInfo message, length delimited. Does not implicitly {@link UserProfileInfo.UserProfileInfo.verify|verify} messages.
         * @param message UserProfileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserProfileInfo.IUserProfileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserProfileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserProfileInfo.UserProfileInfo;

        /**
         * Decodes a UserProfileInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserProfileInfo.UserProfileInfo;

        /**
         * Verifies a UserProfileInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserProfileInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserProfileInfo
         */
        public static fromObject(object: { [k: string]: any }): UserProfileInfo.UserProfileInfo;

        /**
         * Creates a plain object from a UserProfileInfo message. Also converts values to other types if specified.
         * @param message UserProfileInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserProfileInfo.UserProfileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserProfileInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace AppUserLogin. */
export namespace AppUserLogin {

    /** Properties of a Request. */
    interface IRequest {

        /** Request bindType */
        bindType?: (UserType.BindType|null);

        /** Request thirdToken */
        thirdToken?: (string|null);

        /** Request thirdId */
        thirdId?: (string|null);

        /** Request password */
        password?: (string|null);

        /** Request email */
        email?: (string|null);

        /** Request tongdunId */
        tongdunId?: (string|null);

        /** Request adjustId */
        adjustId?: (string|null);

        /** Request loginDomainName */
        loginDomainName?: (string|null);

        /** Request recaptchaToken */
        recaptchaToken?: (string|null);

        /** Request recaptchaAction */
        recaptchaAction?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppUserLogin.IRequest);

        /** Request bindType. */
        public bindType: UserType.BindType;

        /** Request thirdToken. */
        public thirdToken: string;

        /** Request thirdId. */
        public thirdId: string;

        /** Request password. */
        public password: string;

        /** Request email. */
        public email: string;

        /** Request tongdunId. */
        public tongdunId: string;

        /** Request adjustId. */
        public adjustId: string;

        /** Request loginDomainName. */
        public loginDomainName: string;

        /** Request recaptchaToken. */
        public recaptchaToken: string;

        /** Request recaptchaAction. */
        public recaptchaAction: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: AppUserLogin.IRequest): AppUserLogin.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link AppUserLogin.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserLogin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link AppUserLogin.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserLogin.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserLogin.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserLogin.Request;

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
        public static fromObject(object: { [k: string]: any }): AppUserLogin.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserLogin.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response token */
        token?: (string|null);

        /** Response refreshToken */
        refreshToken?: (string|null);

        /** Response userProfileInfo */
        userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response loginType */
        loginType?: (number|null);

        /** Response hasSwitchNationalStore */
        hasSwitchNationalStore?: (boolean|null);

        /** Response address */
        address?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppUserLogin.IResponse);

        /** Response token. */
        public token: string;

        /** Response refreshToken. */
        public refreshToken: string;

        /** Response userProfileInfo. */
        public userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response loginType. */
        public loginType: number;

        /** Response hasSwitchNationalStore. */
        public hasSwitchNationalStore: boolean;

        /** Response address. */
        public address: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: AppUserLogin.IResponse): AppUserLogin.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link AppUserLogin.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserLogin.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link AppUserLogin.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserLogin.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserLogin.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserLogin.Response;

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
        public static fromObject(object: { [k: string]: any }): AppUserLogin.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserLogin.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace AppUserLogout. */
export namespace AppUserLogout {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: AppUserLogout.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: AppUserLogout.IRequest): AppUserLogout.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link AppUserLogout.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserLogout.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link AppUserLogout.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserLogout.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserLogout.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserLogout.Request;

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
        public static fromObject(object: { [k: string]: any }): AppUserLogout.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserLogout.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: AppUserLogout.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: AppUserLogout.IResponse): AppUserLogout.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link AppUserLogout.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AppUserLogout.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link AppUserLogout.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AppUserLogout.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppUserLogout.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppUserLogout.Response;

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
        public static fromObject(object: { [k: string]: any }): AppUserLogout.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AppUserLogout.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace Feedback. */
export namespace Feedback {

    /** Properties of a Request. */
    interface IRequest {

        /** Request type */
        type?: (number|null);

        /** Request description */
        description?: (string|null);

        /** Request photoList */
        photoList?: (string[]|null);

        /** Request site */
        site?: (number|null);

        /** Request errorDesc */
        errorDesc?: (string|null);

        /** Request userAgent */
        userAgent?: (string|null);

        /** Request feedbackTime */
        feedbackTime?: (number|Long|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Feedback.IRequest);

        /** Request type. */
        public type: number;

        /** Request description. */
        public description: string;

        /** Request photoList. */
        public photoList: string[];

        /** Request site. */
        public site: number;

        /** Request errorDesc. */
        public errorDesc: string;

        /** Request userAgent. */
        public userAgent: string;

        /** Request feedbackTime. */
        public feedbackTime: (number|Long);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: Feedback.IRequest): Feedback.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link Feedback.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Feedback.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link Feedback.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Feedback.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Feedback.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Feedback.Request;

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
        public static fromObject(object: { [k: string]: any }): Feedback.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Feedback.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: Feedback.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: Feedback.IResponse): Feedback.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link Feedback.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Feedback.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link Feedback.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Feedback.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Feedback.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Feedback.Response;

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
        public static fromObject(object: { [k: string]: any }): Feedback.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Feedback.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace FeedbackList. */
export namespace FeedbackList {

    /** Properties of a Request. */
    interface IRequest {

        /** Request userId */
        userId?: (number|Long|null);

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
        constructor(properties?: FeedbackList.IRequest);

        /** Request userId. */
        public userId: (number|Long);

        /** Request pageNum. */
        public pageNum: number;

        /** Request pageSize. */
        public pageSize: number;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: FeedbackList.IRequest): FeedbackList.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link FeedbackList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FeedbackList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link FeedbackList.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FeedbackList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FeedbackList.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FeedbackList.Request;

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
        public static fromObject(object: { [k: string]: any }): FeedbackList.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FeedbackList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response feedbackList */
        feedbackList?: (FeedbackList.IFeedbackInfo[]|null);

        /** Response total */
        total?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: FeedbackList.IResponse);

        /** Response feedbackList. */
        public feedbackList: FeedbackList.IFeedbackInfo[];

        /** Response total. */
        public total: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: FeedbackList.IResponse): FeedbackList.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link FeedbackList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FeedbackList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link FeedbackList.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FeedbackList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FeedbackList.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FeedbackList.Response;

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
        public static fromObject(object: { [k: string]: any }): FeedbackList.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FeedbackList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeedbackInfo. */
    interface IFeedbackInfo {

        /** FeedbackInfo id */
        id?: (number|Long|null);

        /** FeedbackInfo type */
        type?: (number|null);

        /** FeedbackInfo description */
        description?: (string|null);

        /** FeedbackInfo photoList */
        photoList?: (string|null);

        /** FeedbackInfo userId */
        userId?: (number|Long|null);

        /** FeedbackInfo createTime */
        createTime?: (number|Long|null);

        /** FeedbackInfo userAgent */
        userAgent?: (string|null);

        /** FeedbackInfo errorDesc */
        errorDesc?: (string|null);

        /** FeedbackInfo feedbackTime */
        feedbackTime?: (number|Long|null);
    }

    /** Represents a FeedbackInfo. */
    class FeedbackInfo implements IFeedbackInfo {

        /**
         * Constructs a new FeedbackInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: FeedbackList.IFeedbackInfo);

        /** FeedbackInfo id. */
        public id: (number|Long);

        /** FeedbackInfo type. */
        public type: number;

        /** FeedbackInfo description. */
        public description: string;

        /** FeedbackInfo photoList. */
        public photoList: string;

        /** FeedbackInfo userId. */
        public userId: (number|Long);

        /** FeedbackInfo createTime. */
        public createTime: (number|Long);

        /** FeedbackInfo userAgent. */
        public userAgent: string;

        /** FeedbackInfo errorDesc. */
        public errorDesc: string;

        /** FeedbackInfo feedbackTime. */
        public feedbackTime: (number|Long);

        /**
         * Creates a new FeedbackInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeedbackInfo instance
         */
        public static create(properties?: FeedbackList.IFeedbackInfo): FeedbackList.FeedbackInfo;

        /**
         * Encodes the specified FeedbackInfo message. Does not implicitly {@link FeedbackList.FeedbackInfo.verify|verify} messages.
         * @param message FeedbackInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: FeedbackList.IFeedbackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeedbackInfo message, length delimited. Does not implicitly {@link FeedbackList.FeedbackInfo.verify|verify} messages.
         * @param message FeedbackInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: FeedbackList.IFeedbackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeedbackInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeedbackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FeedbackList.FeedbackInfo;

        /**
         * Decodes a FeedbackInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeedbackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FeedbackList.FeedbackInfo;

        /**
         * Verifies a FeedbackInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeedbackInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeedbackInfo
         */
        public static fromObject(object: { [k: string]: any }): FeedbackList.FeedbackInfo;

        /**
         * Creates a plain object from a FeedbackInfo message. Also converts values to other types if specified.
         * @param message FeedbackInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: FeedbackList.FeedbackInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeedbackInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserAccountDelete. */
export namespace UserAccountDelete {

    /** Properties of a Request. */
    interface IRequest {

        /** Request code */
        code?: (number|null);

        /** Request reason */
        reason?: (string|null);

        /** Request verification */
        verification?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserAccountDelete.IRequest);

        /** Request code. */
        public code: number;

        /** Request reason. */
        public reason: string;

        /** Request verification. */
        public verification: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserAccountDelete.IRequest): UserAccountDelete.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserAccountDelete.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserAccountDelete.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserAccountDelete.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserAccountDelete.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAccountDelete.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAccountDelete.Request;

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
        public static fromObject(object: { [k: string]: any }): UserAccountDelete.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserAccountDelete.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserAccountDelete.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserAccountDelete.IResponse): UserAccountDelete.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserAccountDelete.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserAccountDelete.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserAccountDelete.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserAccountDelete.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAccountDelete.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAccountDelete.Response;

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
        public static fromObject(object: { [k: string]: any }): UserAccountDelete.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserAccountDelete.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserAccountDeleteCheck. */
export namespace UserAccountDeleteCheck {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserAccountDeleteCheck.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserAccountDeleteCheck.IRequest): UserAccountDeleteCheck.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserAccountDeleteCheck.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserAccountDeleteCheck.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserAccountDeleteCheck.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserAccountDeleteCheck.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAccountDeleteCheck.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAccountDeleteCheck.Request;

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
        public static fromObject(object: { [k: string]: any }): UserAccountDeleteCheck.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserAccountDeleteCheck.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserAccountDeleteCheck.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserAccountDeleteCheck.IResponse): UserAccountDeleteCheck.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserAccountDeleteCheck.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserAccountDeleteCheck.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserAccountDeleteCheck.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserAccountDeleteCheck.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAccountDeleteCheck.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAccountDeleteCheck.Response;

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
        public static fromObject(object: { [k: string]: any }): UserAccountDeleteCheck.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserAccountDeleteCheck.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserCheckEmailRegister. */
export namespace UserCheckEmailRegister {

    /** Properties of a Request. */
    interface IRequest {

        /** Request email */
        email?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserCheckEmailRegister.IRequest);

        /** Request email. */
        public email: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserCheckEmailRegister.IRequest): UserCheckEmailRegister.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserCheckEmailRegister.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserCheckEmailRegister.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserCheckEmailRegister.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserCheckEmailRegister.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckEmailRegister.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserCheckEmailRegister.Request;

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
        public static fromObject(object: { [k: string]: any }): UserCheckEmailRegister.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserCheckEmailRegister.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response isRegistered */
        isRegistered?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserCheckEmailRegister.IResponse);

        /** Response isRegistered. */
        public isRegistered: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserCheckEmailRegister.IResponse): UserCheckEmailRegister.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserCheckEmailRegister.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserCheckEmailRegister.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserCheckEmailRegister.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserCheckEmailRegister.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCheckEmailRegister.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserCheckEmailRegister.Response;

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
        public static fromObject(object: { [k: string]: any }): UserCheckEmailRegister.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserCheckEmailRegister.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserEmailForgetPasswordContent. */
export namespace UserEmailForgetPasswordContent {

    /** Properties of a Request. */
    interface IRequest {

        /** Request validToken */
        validToken?: (string|null);

        /** Request language */
        language?: (string|null);

        /** Request sign */
        sign?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailForgetPasswordContent.IRequest);

        /** Request validToken. */
        public validToken: string;

        /** Request language. */
        public language: string;

        /** Request sign. */
        public sign: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserEmailForgetPasswordContent.IRequest): UserEmailForgetPasswordContent.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserEmailForgetPasswordContent.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailForgetPasswordContent.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserEmailForgetPasswordContent.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailForgetPasswordContent.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailForgetPasswordContent.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailForgetPasswordContent.Request;

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
        public static fromObject(object: { [k: string]: any }): UserEmailForgetPasswordContent.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailForgetPasswordContent.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response validTokenUrl */
        validTokenUrl?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailForgetPasswordContent.IResponse);

        /** Response validTokenUrl. */
        public validTokenUrl: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserEmailForgetPasswordContent.IResponse): UserEmailForgetPasswordContent.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserEmailForgetPasswordContent.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailForgetPasswordContent.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserEmailForgetPasswordContent.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailForgetPasswordContent.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailForgetPasswordContent.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailForgetPasswordContent.Response;

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
        public static fromObject(object: { [k: string]: any }): UserEmailForgetPasswordContent.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailForgetPasswordContent.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserEmailRegisterContent. */
export namespace UserEmailRegisterContent {

    /** Properties of a Request. */
    interface IRequest {

        /** Request userId */
        userId?: (number|Long|null);

        /** Request sign */
        sign?: (string|null);

        /** Request platform */
        platform?: (number|null);

        /** Request nationStoreId */
        nationStoreId?: (number|Long|null);

        /** Request bindType */
        bindType?: (number|null);

        /** Request requestId */
        requestId?: (string|null);

        /** Request currency */
        currency?: (string|null);

        /** Request password */
        password?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailRegisterContent.IRequest);

        /** Request userId. */
        public userId: (number|Long);

        /** Request sign. */
        public sign: string;

        /** Request platform. */
        public platform: number;

        /** Request nationStoreId. */
        public nationStoreId: (number|Long);

        /** Request bindType. */
        public bindType: number;

        /** Request requestId. */
        public requestId: string;

        /** Request currency. */
        public currency: string;

        /** Request password. */
        public password: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserEmailRegisterContent.IRequest): UserEmailRegisterContent.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserEmailRegisterContent.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailRegisterContent.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserEmailRegisterContent.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailRegisterContent.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailRegisterContent.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailRegisterContent.Request;

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
        public static fromObject(object: { [k: string]: any }): UserEmailRegisterContent.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailRegisterContent.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response siteUrl */
        siteUrl?: (string|null);

        /** Response userInfo */
        userInfo?: (UserEmailRegisterContent.IEmailUserInfo|null);

        /** Response codeInfo */
        codeInfo?: (UserEmailRegisterContent.IEmailCodeInfo|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailRegisterContent.IResponse);

        /** Response siteUrl. */
        public siteUrl: string;

        /** Response userInfo. */
        public userInfo?: (UserEmailRegisterContent.IEmailUserInfo|null);

        /** Response codeInfo. */
        public codeInfo?: (UserEmailRegisterContent.IEmailCodeInfo|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserEmailRegisterContent.IResponse): UserEmailRegisterContent.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserEmailRegisterContent.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailRegisterContent.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserEmailRegisterContent.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailRegisterContent.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailRegisterContent.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailRegisterContent.Response;

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
        public static fromObject(object: { [k: string]: any }): UserEmailRegisterContent.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailRegisterContent.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmailUserInfo. */
    interface IEmailUserInfo {

        /** EmailUserInfo userName */
        userName?: (string|null);

        /** EmailUserInfo password */
        password?: (string|null);

        /** EmailUserInfo email */
        email?: (string|null);
    }

    /** Represents an EmailUserInfo. */
    class EmailUserInfo implements IEmailUserInfo {

        /**
         * Constructs a new EmailUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailRegisterContent.IEmailUserInfo);

        /** EmailUserInfo userName. */
        public userName: string;

        /** EmailUserInfo password. */
        public password: string;

        /** EmailUserInfo email. */
        public email: string;

        /**
         * Creates a new EmailUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmailUserInfo instance
         */
        public static create(properties?: UserEmailRegisterContent.IEmailUserInfo): UserEmailRegisterContent.EmailUserInfo;

        /**
         * Encodes the specified EmailUserInfo message. Does not implicitly {@link UserEmailRegisterContent.EmailUserInfo.verify|verify} messages.
         * @param message EmailUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailRegisterContent.IEmailUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmailUserInfo message, length delimited. Does not implicitly {@link UserEmailRegisterContent.EmailUserInfo.verify|verify} messages.
         * @param message EmailUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailRegisterContent.IEmailUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmailUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmailUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailRegisterContent.EmailUserInfo;

        /**
         * Decodes an EmailUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmailUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailRegisterContent.EmailUserInfo;

        /**
         * Verifies an EmailUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmailUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmailUserInfo
         */
        public static fromObject(object: { [k: string]: any }): UserEmailRegisterContent.EmailUserInfo;

        /**
         * Creates a plain object from an EmailUserInfo message. Also converts values to other types if specified.
         * @param message EmailUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailRegisterContent.EmailUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmailUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmailCodeInfo. */
    interface IEmailCodeInfo {

        /** EmailCodeInfo code */
        code?: (string|null);

        /** EmailCodeInfo codeDiscount */
        codeDiscount?: (string|null);
    }

    /** Represents an EmailCodeInfo. */
    class EmailCodeInfo implements IEmailCodeInfo {

        /**
         * Constructs a new EmailCodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailRegisterContent.IEmailCodeInfo);

        /** EmailCodeInfo code. */
        public code: string;

        /** EmailCodeInfo codeDiscount. */
        public codeDiscount: string;

        /**
         * Creates a new EmailCodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmailCodeInfo instance
         */
        public static create(properties?: UserEmailRegisterContent.IEmailCodeInfo): UserEmailRegisterContent.EmailCodeInfo;

        /**
         * Encodes the specified EmailCodeInfo message. Does not implicitly {@link UserEmailRegisterContent.EmailCodeInfo.verify|verify} messages.
         * @param message EmailCodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailRegisterContent.IEmailCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmailCodeInfo message, length delimited. Does not implicitly {@link UserEmailRegisterContent.EmailCodeInfo.verify|verify} messages.
         * @param message EmailCodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailRegisterContent.IEmailCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmailCodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmailCodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailRegisterContent.EmailCodeInfo;

        /**
         * Decodes an EmailCodeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmailCodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailRegisterContent.EmailCodeInfo;

        /**
         * Verifies an EmailCodeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmailCodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmailCodeInfo
         */
        public static fromObject(object: { [k: string]: any }): UserEmailRegisterContent.EmailCodeInfo;

        /**
         * Creates a plain object from an EmailCodeInfo message. Also converts values to other types if specified.
         * @param message EmailCodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailRegisterContent.EmailCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmailCodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserEmailSubscribe. */
export namespace UserEmailSubscribe {

    /** Properties of a Request. */
    interface IRequest {

        /** Request token */
        token?: (string|null);

        /** Request emailSubscribe */
        emailSubscribe?: (number|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailSubscribe.IRequest);

        /** Request token. */
        public token: string;

        /** Request emailSubscribe. */
        public emailSubscribe: number;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserEmailSubscribe.IRequest): UserEmailSubscribe.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserEmailSubscribe.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailSubscribe.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserEmailSubscribe.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailSubscribe.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailSubscribe.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailSubscribe.Request;

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
        public static fromObject(object: { [k: string]: any }): UserEmailSubscribe.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailSubscribe.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserEmailSubscribe.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserEmailSubscribe.IResponse): UserEmailSubscribe.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserEmailSubscribe.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailSubscribe.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserEmailSubscribe.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailSubscribe.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailSubscribe.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailSubscribe.Response;

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
        public static fromObject(object: { [k: string]: any }): UserEmailSubscribe.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailSubscribe.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserEmailSubscribeStatus. */
export namespace UserEmailSubscribeStatus {

    /** Properties of a Request. */
    interface IRequest {

        /** Request token */
        token?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailSubscribeStatus.IRequest);

        /** Request token. */
        public token: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserEmailSubscribeStatus.IRequest): UserEmailSubscribeStatus.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserEmailSubscribeStatus.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailSubscribeStatus.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserEmailSubscribeStatus.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailSubscribeStatus.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailSubscribeStatus.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailSubscribeStatus.Request;

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
        public static fromObject(object: { [k: string]: any }): UserEmailSubscribeStatus.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailSubscribeStatus.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response emailSubscribe */
        emailSubscribe?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserEmailSubscribeStatus.IResponse);

        /** Response emailSubscribe. */
        public emailSubscribe: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserEmailSubscribeStatus.IResponse): UserEmailSubscribeStatus.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserEmailSubscribeStatus.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserEmailSubscribeStatus.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserEmailSubscribeStatus.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserEmailSubscribeStatus.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserEmailSubscribeStatus.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserEmailSubscribeStatus.Response;

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
        public static fromObject(object: { [k: string]: any }): UserEmailSubscribeStatus.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserEmailSubscribeStatus.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserForgetPassword. */
export namespace UserForgetPassword {

    /** Properties of a Request. */
    interface IRequest {

        /** Request email */
        email?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserForgetPassword.IRequest);

        /** Request email. */
        public email: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserForgetPassword.IRequest): UserForgetPassword.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserForgetPassword.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserForgetPassword.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserForgetPassword.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserForgetPassword.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserForgetPassword.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserForgetPassword.Request;

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
        public static fromObject(object: { [k: string]: any }): UserForgetPassword.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserForgetPassword.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserForgetPassword.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserForgetPassword.IResponse): UserForgetPassword.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserForgetPassword.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserForgetPassword.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserForgetPassword.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserForgetPassword.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserForgetPassword.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserForgetPassword.Response;

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
        public static fromObject(object: { [k: string]: any }): UserForgetPassword.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserForgetPassword.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserForgetPasswordValidToken. */
export namespace UserForgetPasswordValidToken {

    /** Properties of a Request. */
    interface IRequest {

        /** Request token */
        token?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserForgetPasswordValidToken.IRequest);

        /** Request token. */
        public token: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserForgetPasswordValidToken.IRequest): UserForgetPasswordValidToken.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserForgetPasswordValidToken.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserForgetPasswordValidToken.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserForgetPasswordValidToken.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserForgetPasswordValidToken.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserForgetPasswordValidToken.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserForgetPasswordValidToken.Request;

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
        public static fromObject(object: { [k: string]: any }): UserForgetPasswordValidToken.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserForgetPasswordValidToken.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserForgetPasswordValidToken.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserForgetPasswordValidToken.IResponse): UserForgetPasswordValidToken.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserForgetPasswordValidToken.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserForgetPasswordValidToken.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserForgetPasswordValidToken.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserForgetPasswordValidToken.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserForgetPasswordValidToken.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserForgetPasswordValidToken.Response;

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
        public static fromObject(object: { [k: string]: any }): UserForgetPasswordValidToken.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserForgetPasswordValidToken.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserPreload. */
export namespace UserPreload {

    /** Properties of a Request. */
    interface IRequest {

        /** Request clientIp */
        clientIp?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPreload.IRequest);

        /** Request clientIp. */
        public clientIp: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserPreload.IRequest): UserPreload.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserPreload.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserPreload.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.Request;

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
        public static fromObject(object: { [k: string]: any }): UserPreload.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response h5Config */
        h5Config?: (UserPreload.IH5Config|null);

        /** Response firstPageType */
        firstPageType?: (number|null);

        /** Response list */
        list?: (UserPreload.ICurrencyInfo[]|null);

        /** Response cdnUrl */
        cdnUrl?: (string|null);

        /** Response isShowBox */
        isShowBox?: (boolean|null);

        /** Response activityNavMap */
        activityNavMap?: ({ [k: string]: UserPreload.IActivityNavInfo }|null);

        /** Response nationalStoreId */
        nationalStoreId?: (string|null);

        /** Response ipCountry */
        ipCountry?: (string|null);

        /** Response invalidCountryList */
        invalidCountryList?: (string[]|null);

        /** Response settingInfo */
        settingInfo?: (UserPreload.ISettingInfo|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPreload.IResponse);

        /** Response h5Config. */
        public h5Config?: (UserPreload.IH5Config|null);

        /** Response firstPageType. */
        public firstPageType: number;

        /** Response list. */
        public list: UserPreload.ICurrencyInfo[];

        /** Response cdnUrl. */
        public cdnUrl: string;

        /** Response isShowBox. */
        public isShowBox: boolean;

        /** Response activityNavMap. */
        public activityNavMap: { [k: string]: UserPreload.IActivityNavInfo };

        /** Response nationalStoreId. */
        public nationalStoreId: string;

        /** Response ipCountry. */
        public ipCountry: string;

        /** Response invalidCountryList. */
        public invalidCountryList: string[];

        /** Response settingInfo. */
        public settingInfo?: (UserPreload.ISettingInfo|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserPreload.IResponse): UserPreload.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserPreload.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserPreload.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.Response;

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
        public static fromObject(object: { [k: string]: any }): UserPreload.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a H5Config. */
    interface IH5Config {

        /** H5Config privacyUrl */
        privacyUrl?: (string|null);

        /** H5Config termUrl */
        termUrl?: (string|null);

        /** H5Config feedbackUrl */
        feedbackUrl?: (string|null);

        /** H5Config aboutUsUrl */
        aboutUsUrl?: (string|null);

        /** H5Config payDescUrl */
        payDescUrl?: (string|null);

        /** H5Config howToPlay */
        howToPlay?: (string|null);

        /** H5Config refundUrl */
        refundUrl?: (string|null);

        /** H5Config contactUsUrl */
        contactUsUrl?: (string|null);

        /** H5Config mysteryBoxUrl */
        mysteryBoxUrl?: (string|null);

        /** H5Config nationalStoreHost */
        nationalStoreHost?: (string|null);

        /** H5Config shippingUrl */
        shippingUrl?: (string|null);

        /** H5Config addressUrl */
        addressUrl?: (string|null);
    }

    /** Represents a H5Config. */
    class H5Config implements IH5Config {

        /**
         * Constructs a new H5Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPreload.IH5Config);

        /** H5Config privacyUrl. */
        public privacyUrl: string;

        /** H5Config termUrl. */
        public termUrl: string;

        /** H5Config feedbackUrl. */
        public feedbackUrl: string;

        /** H5Config aboutUsUrl. */
        public aboutUsUrl: string;

        /** H5Config payDescUrl. */
        public payDescUrl: string;

        /** H5Config howToPlay. */
        public howToPlay: string;

        /** H5Config refundUrl. */
        public refundUrl: string;

        /** H5Config contactUsUrl. */
        public contactUsUrl: string;

        /** H5Config mysteryBoxUrl. */
        public mysteryBoxUrl: string;

        /** H5Config nationalStoreHost. */
        public nationalStoreHost: string;

        /** H5Config shippingUrl. */
        public shippingUrl: string;

        /** H5Config addressUrl. */
        public addressUrl: string;

        /**
         * Creates a new H5Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns H5Config instance
         */
        public static create(properties?: UserPreload.IH5Config): UserPreload.H5Config;

        /**
         * Encodes the specified H5Config message. Does not implicitly {@link UserPreload.H5Config.verify|verify} messages.
         * @param message H5Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.IH5Config, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified H5Config message, length delimited. Does not implicitly {@link UserPreload.H5Config.verify|verify} messages.
         * @param message H5Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.IH5Config, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a H5Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns H5Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.H5Config;

        /**
         * Decodes a H5Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns H5Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.H5Config;

        /**
         * Verifies a H5Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a H5Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns H5Config
         */
        public static fromObject(object: { [k: string]: any }): UserPreload.H5Config;

        /**
         * Creates a plain object from a H5Config message. Also converts values to other types if specified.
         * @param message H5Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.H5Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this H5Config to JSON.
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
        constructor(properties?: UserPreload.ICurrencyInfo);

        /** CurrencyInfo currency. */
        public currency: string;

        /** CurrencyInfo symbol. */
        public symbol: string;

        /**
         * Creates a new CurrencyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrencyInfo instance
         */
        public static create(properties?: UserPreload.ICurrencyInfo): UserPreload.CurrencyInfo;

        /**
         * Encodes the specified CurrencyInfo message. Does not implicitly {@link UserPreload.CurrencyInfo.verify|verify} messages.
         * @param message CurrencyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.ICurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CurrencyInfo message, length delimited. Does not implicitly {@link UserPreload.CurrencyInfo.verify|verify} messages.
         * @param message CurrencyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.ICurrencyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrencyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.CurrencyInfo;

        /**
         * Decodes a CurrencyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CurrencyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.CurrencyInfo;

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
        public static fromObject(object: { [k: string]: any }): UserPreload.CurrencyInfo;

        /**
         * Creates a plain object from a CurrencyInfo message. Also converts values to other types if specified.
         * @param message CurrencyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.CurrencyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CurrencyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityNavInfo. */
    interface IActivityNavInfo {

        /** ActivityNavInfo navId */
        navId?: (number|Long|null);

        /** ActivityNavInfo name */
        name?: (string|null);

        /** ActivityNavInfo title */
        title?: (string|null);
    }

    /** Represents an ActivityNavInfo. */
    class ActivityNavInfo implements IActivityNavInfo {

        /**
         * Constructs a new ActivityNavInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPreload.IActivityNavInfo);

        /** ActivityNavInfo navId. */
        public navId: (number|Long);

        /** ActivityNavInfo name. */
        public name: string;

        /** ActivityNavInfo title. */
        public title: string;

        /**
         * Creates a new ActivityNavInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityNavInfo instance
         */
        public static create(properties?: UserPreload.IActivityNavInfo): UserPreload.ActivityNavInfo;

        /**
         * Encodes the specified ActivityNavInfo message. Does not implicitly {@link UserPreload.ActivityNavInfo.verify|verify} messages.
         * @param message ActivityNavInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.IActivityNavInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityNavInfo message, length delimited. Does not implicitly {@link UserPreload.ActivityNavInfo.verify|verify} messages.
         * @param message ActivityNavInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.IActivityNavInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityNavInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityNavInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.ActivityNavInfo;

        /**
         * Decodes an ActivityNavInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityNavInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.ActivityNavInfo;

        /**
         * Verifies an ActivityNavInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityNavInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityNavInfo
         */
        public static fromObject(object: { [k: string]: any }): UserPreload.ActivityNavInfo;

        /**
         * Creates a plain object from an ActivityNavInfo message. Also converts values to other types if specified.
         * @param message ActivityNavInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.ActivityNavInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityNavInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingInfo. */
    interface ISettingInfo {

        /** SettingInfo skinTemplate */
        skinTemplate?: (string|null);

        /** SettingInfo trustpolitSwitch */
        trustpolitSwitch?: (number|null);
    }

    /** Represents a SettingInfo. */
    class SettingInfo implements ISettingInfo {

        /**
         * Constructs a new SettingInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserPreload.ISettingInfo);

        /** SettingInfo skinTemplate. */
        public skinTemplate: string;

        /** SettingInfo trustpolitSwitch. */
        public trustpolitSwitch: number;

        /**
         * Creates a new SettingInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingInfo instance
         */
        public static create(properties?: UserPreload.ISettingInfo): UserPreload.SettingInfo;

        /**
         * Encodes the specified SettingInfo message. Does not implicitly {@link UserPreload.SettingInfo.verify|verify} messages.
         * @param message SettingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPreload.ISettingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingInfo message, length delimited. Does not implicitly {@link UserPreload.SettingInfo.verify|verify} messages.
         * @param message SettingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPreload.ISettingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPreload.SettingInfo;

        /**
         * Decodes a SettingInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPreload.SettingInfo;

        /**
         * Verifies a SettingInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingInfo
         */
        public static fromObject(object: { [k: string]: any }): UserPreload.SettingInfo;

        /**
         * Creates a plain object from a SettingInfo message. Also converts values to other types if specified.
         * @param message SettingInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPreload.SettingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserPresignUrl. */
export namespace UserPresignUrl {

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
        constructor(properties?: UserPresignUrl.IRequest);

        /** Request fileType. */
        public fileType: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserPresignUrl.IRequest): UserPresignUrl.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserPresignUrl.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPresignUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserPresignUrl.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPresignUrl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPresignUrl.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPresignUrl.Request;

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
        public static fromObject(object: { [k: string]: any }): UserPresignUrl.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPresignUrl.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserPresignUrl.IResponse);

        /** Response url. */
        public url: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserPresignUrl.IResponse): UserPresignUrl.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserPresignUrl.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserPresignUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserPresignUrl.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserPresignUrl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPresignUrl.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPresignUrl.Response;

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
        public static fromObject(object: { [k: string]: any }): UserPresignUrl.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserPresignUrl.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserProfile. */
export namespace UserProfile {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserProfile.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserProfile.IRequest): UserProfile.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserProfile.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserProfile.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserProfile.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserProfile.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserProfile.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserProfile.Request;

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
        public static fromObject(object: { [k: string]: any }): UserProfile.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserProfile.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response userProfileInfo */
        userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response hasSwitchNationalStore */
        hasSwitchNationalStore?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserProfile.IResponse);

        /** Response userProfileInfo. */
        public userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response hasSwitchNationalStore. */
        public hasSwitchNationalStore: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserProfile.IResponse): UserProfile.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserProfile.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserProfile.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserProfile.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserProfile.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserProfile.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserProfile.Response;

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
        public static fromObject(object: { [k: string]: any }): UserProfile.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserProfile.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserRefreshToken. */
export namespace UserRefreshToken {

    /** Properties of a Request. */
    interface IRequest {

        /** Request userId */
        userId?: (number|Long|null);

        /** Request refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserRefreshToken.IRequest);

        /** Request userId. */
        public userId: (number|Long);

        /** Request refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserRefreshToken.IRequest): UserRefreshToken.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserRefreshToken.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserRefreshToken.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserRefreshToken.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserRefreshToken.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRefreshToken.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRefreshToken.Request;

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
        public static fromObject(object: { [k: string]: any }): UserRefreshToken.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserRefreshToken.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response token */
        token?: (string|null);

        /** Response refreshToken */
        refreshToken?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserRefreshToken.IResponse);

        /** Response token. */
        public token: string;

        /** Response refreshToken. */
        public refreshToken: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserRefreshToken.IResponse): UserRefreshToken.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserRefreshToken.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserRefreshToken.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserRefreshToken.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserRefreshToken.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRefreshToken.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRefreshToken.Response;

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
        public static fromObject(object: { [k: string]: any }): UserRefreshToken.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserRefreshToken.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserRegister. */
export namespace UserRegister {

    /** Properties of a Request. */
    interface IRequest {

        /** Request bindType */
        bindType?: (UserType.BindType|null);

        /** Request countryCode */
        countryCode?: (string|null);

        /** Request email */
        email?: (string|null);

        /** Request password */
        password?: (string|null);

        /** Request tongdunId */
        tongdunId?: (string|null);

        /** Request adjustId */
        adjustId?: (string|null);

        /** Request registerFrom */
        registerFrom?: (number|null);

        /** Request emailSubscribe */
        emailSubscribe?: (number|null);

        /** Request zoneCode */
        zoneCode?: (string|null);

        /** Request phone */
        phone?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserRegister.IRequest);

        /** Request bindType. */
        public bindType: UserType.BindType;

        /** Request countryCode. */
        public countryCode: string;

        /** Request email. */
        public email: string;

        /** Request password. */
        public password: string;

        /** Request tongdunId. */
        public tongdunId: string;

        /** Request adjustId. */
        public adjustId: string;

        /** Request registerFrom. */
        public registerFrom: number;

        /** Request emailSubscribe. */
        public emailSubscribe: number;

        /** Request zoneCode. */
        public zoneCode: string;

        /** Request phone. */
        public phone: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserRegister.IRequest): UserRegister.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserRegister.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserRegister.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserRegister.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserRegister.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRegister.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRegister.Request;

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
        public static fromObject(object: { [k: string]: any }): UserRegister.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserRegister.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response token */
        token?: (string|null);

        /** Response refreshToken */
        refreshToken?: (string|null);

        /** Response userProfileInfo */
        userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response hasSwitchNationalStore */
        hasSwitchNationalStore?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserRegister.IResponse);

        /** Response token. */
        public token: string;

        /** Response refreshToken. */
        public refreshToken: string;

        /** Response userProfileInfo. */
        public userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response hasSwitchNationalStore. */
        public hasSwitchNationalStore: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserRegister.IResponse): UserRegister.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserRegister.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserRegister.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserRegister.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserRegister.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRegister.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRegister.Response;

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
        public static fromObject(object: { [k: string]: any }): UserRegister.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserRegister.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserResetPassword. */
export namespace UserResetPassword {

    /** Properties of a Request. */
    interface IRequest {

        /** Request token */
        token?: (string|null);

        /** Request password */
        password?: (string|null);

        /** Request originPassword */
        originPassword?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserResetPassword.IRequest);

        /** Request token. */
        public token: string;

        /** Request password. */
        public password: string;

        /** Request originPassword. */
        public originPassword: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserResetPassword.IRequest): UserResetPassword.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserResetPassword.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserResetPassword.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserResetPassword.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserResetPassword.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserResetPassword.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserResetPassword.Request;

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
        public static fromObject(object: { [k: string]: any }): UserResetPassword.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserResetPassword.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserResetPassword.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserResetPassword.IResponse): UserResetPassword.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserResetPassword.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserResetPassword.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserResetPassword.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserResetPassword.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserResetPassword.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserResetPassword.Response;

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
        public static fromObject(object: { [k: string]: any }): UserResetPassword.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserResetPassword.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserSendEmail. */
export namespace UserSendEmail {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserSendEmail.IRequest);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserSendEmail.IRequest): UserSendEmail.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserSendEmail.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserSendEmail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserSendEmail.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserSendEmail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSendEmail.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSendEmail.Request;

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
        public static fromObject(object: { [k: string]: any }): UserSendEmail.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserSendEmail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: UserSendEmail.IResponse);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserSendEmail.IResponse): UserSendEmail.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserSendEmail.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserSendEmail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserSendEmail.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserSendEmail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSendEmail.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSendEmail.Response;

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
        public static fromObject(object: { [k: string]: any }): UserSendEmail.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserSendEmail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserSwitchStore. */
export namespace UserSwitchStore {

    /** Properties of a Request. */
    interface IRequest {

        /** Request countryCode */
        countryCode?: (string|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserSwitchStore.IRequest);

        /** Request countryCode. */
        public countryCode: string;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserSwitchStore.IRequest): UserSwitchStore.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserSwitchStore.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserSwitchStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserSwitchStore.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserSwitchStore.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSwitchStore.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSwitchStore.Request;

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
        public static fromObject(object: { [k: string]: any }): UserSwitchStore.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserSwitchStore.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response language */
        language?: (string|null);

        /** Response isRestart */
        isRestart?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserSwitchStore.IResponse);

        /** Response language. */
        public language: string;

        /** Response isRestart. */
        public isRestart: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserSwitchStore.IResponse): UserSwitchStore.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserSwitchStore.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserSwitchStore.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserSwitchStore.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserSwitchStore.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSwitchStore.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSwitchStore.Response;

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
        public static fromObject(object: { [k: string]: any }): UserSwitchStore.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserSwitchStore.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace UserUpdate. */
export namespace UserUpdate {

    /** Properties of a Request. */
    interface IRequest {

        /** Request currency */
        currency?: (string|null);

        /** Request avatar */
        avatar?: (string|null);

        /** Request phone */
        phone?: (string|null);

        /** Request username */
        username?: (string|null);

        /** Request language */
        language?: (string|null);

        /** Request gender */
        gender?: (number|null);

        /** Request countryCode */
        countryCode?: (string|null);

        /** Request zoneCode */
        zoneCode?: (string|null);

        /** Request emailSubscribe */
        emailSubscribe?: (number|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserUpdate.IRequest);

        /** Request currency. */
        public currency: string;

        /** Request avatar. */
        public avatar: string;

        /** Request phone. */
        public phone: string;

        /** Request username. */
        public username: string;

        /** Request language. */
        public language: string;

        /** Request gender. */
        public gender: number;

        /** Request countryCode. */
        public countryCode: string;

        /** Request zoneCode. */
        public zoneCode: string;

        /** Request emailSubscribe. */
        public emailSubscribe: number;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: UserUpdate.IRequest): UserUpdate.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link UserUpdate.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserUpdate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link UserUpdate.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserUpdate.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserUpdate.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserUpdate.Request;

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
        public static fromObject(object: { [k: string]: any }): UserUpdate.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserUpdate.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response userProfileInfo */
        userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response isRestart */
        isRestart?: (boolean|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserUpdate.IResponse);

        /** Response userProfileInfo. */
        public userProfileInfo?: (UserProfileInfo.IUserProfileInfo|null);

        /** Response isRestart. */
        public isRestart: boolean;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: UserUpdate.IResponse): UserUpdate.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link UserUpdate.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserUpdate.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link UserUpdate.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserUpdate.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserUpdate.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserUpdate.Response;

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
        public static fromObject(object: { [k: string]: any }): UserUpdate.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserUpdate.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
