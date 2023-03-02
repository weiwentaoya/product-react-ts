import * as $protobuf from "protobufjs";
/** Code enum. */
export enum Code {
    DEFAULT = 0,
    SUCCESS = 1,
    SYSTEM_ERROR = 10001,
    PARAMETER_INVALID = 10002,
    AUTH_ERROR = 10003,
    PARAMS_ERROR = 10004,
    NO_DATA = 10005,
    DATA_ERROR = 10006,
    REQUEST_FREQUENCE = 10007,
    DATA_EXCEEDS_LIMIT = 10008,
    DATA_PARSING_ERROR = 10009,
    ORDER_ERROR = 20001,
    PAY_ERROR = 40001,
    ACTIVE_ERROR = 50001,
    SEARCH_ERROR = 60001,
    CART_ERROR = 70001,
    PRODUCT_MAGIC_BOX_EXPIRED = 9100002,
    MY_MAGIC_BOX_EXPIRED = 9100003,
    OPEN_MAGIC_BOX_CONCURRENT_OPERATION_ERROR = 9100004,
    USER_ERROR = 9200001,
    USER_ACCOUNT_EXISTS = 9200002,
    USER_TOKEN_EXPIRE = 9200003,
    USER_REFRESH_TOKEN_EXPIRE = 9200004,
    USER_PASSWORD_NAME_ERROR = 9200005,
    USER_ACCOUNT_NOT_EXIST = 9200006,
    USER_ORIGIN_PASSWORD_ERROR = 9200007,
    USER_FORGET_PASSWORD_VALID_TOKEN_ERROR = 9200008,
    USER_EMAIL_EXIST = 9200009,
    USER_EMAIL_NOT_EXIST = 9200010,
    USER_REGISTER_REQUEST_FREQUENCE = 9200011,
    USER_STATUS_DELETED = 9200012,
    USER_VERIFICATION_ERROR = 9200013,
    USER_ASSET_EXIST = 9200014,
    USER_ORIGIN_PASSWORD_CANNOT_SAME_ERROR = 9200015,
    ORDER_NOT_FOUND = 9300001,
    ORDER_CANCEL_STATUS_WRONG = 9300002,
    ORDER_SAVE_UPDATE_STOCK_ERROR = 9300003,
    ORDER_SAVE_SPU_OFF_SALE_ERROR = 9300004,
    ORDER_EXCHANGE_PRODUCT_BOX_STATUS_ERROR = 9300005,
    ORDER_EXCHANGE_PRODUCT_CONCURRENT_OPERATION_ERROR = 9300006,
    ORDER_EXCHANGE_HKC_BOX_STATUS_ERROR = 9300007,
    ORDER_EXCHANGE_HKC_CONCURRENT_OPERATION_ERROR = 9300008,
    ORDER_SAVE_LOCK_HCK_ERROR = 9300009,
    ORDER_PLACE_ACTIVITY_NOT_SAME = 9300101,
    ORDER_PLACE_PRICE_NOT_SAME = 9300102,
    ORDER_PLACE_ADDRESS_NOT_AVAILABLE = 9300103,
    UNFINISHED_ORDER_EXIST = 9300104,
    PLACE_ORDER_ADDRESS_NOT_TAX_NUM = 9300105,
    REFUND_ERROR = 9310004,
    REFUND_NOT_FOUND = 9310001,
    REFUND_CREATE_STATUS_WRONG = 9310002,
    REFUND_CREATE_PRICE_ERROR = 9310003,
    COUPON_CODE_DO_NOT_USE = 9310005,
    SKU_IS_INVALID = 9310006,
    COUPON_CODE_INVALID = 9310007,
    COUPON_CODE_NOT_EXIST = 9310008,
    COUPON_CODE_NOT_REUSE = 9310009,
    COUPON_CODE_ONLY_FIRST_ORDER = 9310010,
    COUPON_CODE_NON_CONFORMITY_PRODUCT = 9310011,
    COUPON_CODE_CLAIM_LIMITED = 9310012,
    COUPON_CODE_CLAIM_REPEATED = 9310013,
    PLACE_ORDER_USER_IN_BLACK_LIST = 9310014,
    SPECIAL_OFFER_TIME_INVALID = 9310015,
    COUPON_CODE_TIME_INVALID = 9310016,
    PLACE_ORDER_USER_COUNTRY_IN_BLACK_LIST = 9310017,
    PLACE_ORDER_PAYMENT_METHOD_INVALID = 9310018,
    PLACE_ORDER_FLASH_SALE_PRODUCT_UPPER_LIMIT = 9310019,
    PRE_ORDER_NEED_ADDRESS = 9310020,
    PAY_ORDER_ERROR = 9400001,
    PAY_ORDER_EXISTS = 9400002,
    PAYMENT_ERROR = 9410001,
    PAYMENT_CAPTURE_ERROR = 9410400,
    PAYMENT_CAPTURE_AMOUNT_INSUFFICIENT = 9410422,
    PAYMENT_HKC_ERROR = 9420001,
    ADD_CART_SKU_SOLD_OUT = 9600001,
    PRODUCT_ADDED_TO_UPPER_LIMIT = 9600002,
    FLASH_SALE_PRODUCT_ADDED_TO_UPPER_LIMIT = 9600003,
    ACTIVITY_NO_DATA = 9700001,
    ACTIVITY_PARAMETER_INVALID = 9700002,
    DATA_REPEATED = 9700003,
    CATEGORY_EMPTY = 9700004,
    COUPON_CHANGE_CLAIM_NUM_INVALID = 9700005
}

/** Represents a Result. */
export class Result implements IResult {

    /**
     * Constructs a new Result.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResult);

    /** Result code. */
    public code: Code;

    /** Result msg. */
    public msg: string;

    /** Result data. */
    public data?: (google.protobuf.IAny|null);

    /** Result currencyRate. */
    public currencyRate: number;

    /**
     * Creates a new Result instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Result instance
     */
    public static create(properties?: IResult): Result;

    /**
     * Encodes the specified Result message. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Result message, length delimited. Does not implicitly {@link Result.verify|verify} messages.
     * @param message Result message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Result message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Result;

    /**
     * Decodes a Result message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Result;

    /**
     * Verifies a Result message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Result message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Result
     */
    public static fromObject(object: { [k: string]: any }): Result;

    /**
     * Creates a plain object from a Result message. Also converts values to other types if specified.
     * @param message Result
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Result to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
