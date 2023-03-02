import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Cart. */
    namespace Cart {

        /** Namespace AddCart. */
        namespace AddCart {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request path */
                path?: (string|null);

                /** Request source */
                source?: (number|null);

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
                constructor(properties?: App.Cart.AddCart.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request path. */
                public path: string;

                /** Request source. */
                public source: number;

                /** Request recaptchaToken. */
                public recaptchaToken: string;

                /** Request recaptchaAction. */
                public recaptchaAction: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.AddCart.IRequest): App.Cart.AddCart.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.AddCart.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCart.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.AddCart.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCart.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCart.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCart.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCart.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCart.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response quantity */
                quantity?: (number|null);

                /** Response saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Response usProName */
                usProName?: (string|null);

                /** Response usdSkuTotalPrice */
                usdSkuTotalPrice?: (number|Long|null);

                /** Response categoryIdOne */
                categoryIdOne?: (number|Long|null);

                /** Response categoryIdTwo */
                categoryIdTwo?: (number|Long|null);

                /** Response categoryIdThree */
                categoryIdThree?: (number|Long|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCart.IResponse);

                /** Response quantity. */
                public quantity: number;

                /** Response saleSkuId. */
                public saleSkuId: (number|Long);

                /** Response usProName. */
                public usProName: string;

                /** Response usdSkuTotalPrice. */
                public usdSkuTotalPrice: (number|Long);

                /** Response categoryIdOne. */
                public categoryIdOne: (number|Long);

                /** Response categoryIdTwo. */
                public categoryIdTwo: (number|Long);

                /** Response categoryIdThree. */
                public categoryIdThree: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.AddCart.IResponse): App.Cart.AddCart.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.AddCart.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCart.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.AddCart.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCart.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCart.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCart.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCart.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCart.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AddCartShippingPieceTogether. */
        namespace AddCartShippingPieceTogether {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request path */
                path?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCartShippingPieceTogether.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request path. */
                public path: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.AddCartShippingPieceTogether.IRequest): App.Cart.AddCartShippingPieceTogether.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.AddCartShippingPieceTogether.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCartShippingPieceTogether.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.AddCartShippingPieceTogether.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCartShippingPieceTogether.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCartShippingPieceTogether.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCartShippingPieceTogether.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCartShippingPieceTogether.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCartShippingPieceTogether.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response freeShippingThreshold */
                freeShippingThreshold?: (number|Long|null);

                /** Response freeShippingAmountDifference */
                freeShippingAmountDifference?: (number|Long|null);

                /** Response freeShippingFlag */
                freeShippingFlag?: (boolean|null);

                /** Response total */
                total?: (number|Long|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Response usProName */
                usProName?: (string|null);

                /** Response usdSkuTotalPrice */
                usdSkuTotalPrice?: (number|Long|null);

                /** Response categoryIdOne */
                categoryIdOne?: (number|Long|null);

                /** Response categoryIdTwo */
                categoryIdTwo?: (number|Long|null);

                /** Response categoryIdThree */
                categoryIdThree?: (number|Long|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCartShippingPieceTogether.IResponse);

                /** Response freeShippingThreshold. */
                public freeShippingThreshold: (number|Long);

                /** Response freeShippingAmountDifference. */
                public freeShippingAmountDifference: (number|Long);

                /** Response freeShippingFlag. */
                public freeShippingFlag: boolean;

                /** Response total. */
                public total: (number|Long);

                /** Response quantity. */
                public quantity: number;

                /** Response saleSkuId. */
                public saleSkuId: (number|Long);

                /** Response usProName. */
                public usProName: string;

                /** Response usdSkuTotalPrice. */
                public usdSkuTotalPrice: (number|Long);

                /** Response categoryIdOne. */
                public categoryIdOne: (number|Long);

                /** Response categoryIdTwo. */
                public categoryIdTwo: (number|Long);

                /** Response categoryIdThree. */
                public categoryIdThree: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.AddCartShippingPieceTogether.IResponse): App.Cart.AddCartShippingPieceTogether.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.AddCartShippingPieceTogether.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCartShippingPieceTogether.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.AddCartShippingPieceTogether.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCartShippingPieceTogether.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCartShippingPieceTogether.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCartShippingPieceTogether.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCartShippingPieceTogether.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCartShippingPieceTogether.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AddCartSpecialOfferPieceTogether. */
        namespace AddCartSpecialOfferPieceTogether {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request path */
                path?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCartSpecialOfferPieceTogether.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request path. */
                public path: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.AddCartSpecialOfferPieceTogether.IRequest): App.Cart.AddCartSpecialOfferPieceTogether.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCartSpecialOfferPieceTogether.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCartSpecialOfferPieceTogether.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCartSpecialOfferPieceTogether.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCartSpecialOfferPieceTogether.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCartSpecialOfferPieceTogether.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCartSpecialOfferPieceTogether.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer|null);

                /** Response total */
                total?: (number|Long|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Response usProName */
                usProName?: (string|null);

                /** Response usdSkuTotalPrice */
                usdSkuTotalPrice?: (number|Long|null);

                /** Response categoryIdOne */
                categoryIdOne?: (number|Long|null);

                /** Response categoryIdTwo */
                categoryIdTwo?: (number|Long|null);

                /** Response categoryIdThree */
                categoryIdThree?: (number|Long|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCartSpecialOfferPieceTogether.IResponse);

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer|null);

                /** Response total. */
                public total: (number|Long);

                /** Response quantity. */
                public quantity: number;

                /** Response saleSkuId. */
                public saleSkuId: (number|Long);

                /** Response usProName. */
                public usProName: string;

                /** Response usdSkuTotalPrice. */
                public usdSkuTotalPrice: (number|Long);

                /** Response categoryIdOne. */
                public categoryIdOne: (number|Long);

                /** Response categoryIdTwo. */
                public categoryIdTwo: (number|Long);

                /** Response categoryIdThree. */
                public categoryIdThree: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.AddCartSpecialOfferPieceTogether.IResponse): App.Cart.AddCartSpecialOfferPieceTogether.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCartSpecialOfferPieceTogether.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCartSpecialOfferPieceTogether.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCartSpecialOfferPieceTogether.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCartSpecialOfferPieceTogether.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCartSpecialOfferPieceTogether.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCartSpecialOfferPieceTogether.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** SpecialOffer type */
                type?: (number|null);

                /** SpecialOffer currentLadderId */
                currentLadderId?: (number|Long|null);

                /** SpecialOffer currentLadderQuantityThreshold */
                currentLadderQuantityThreshold?: (number|null);

                /** SpecialOffer currentLadderPriceThreshold */
                currentLadderPriceThreshold?: (number|Long|null);

                /** SpecialOffer currentLadderDiscountRate */
                currentLadderDiscountRate?: (number|null);

                /** SpecialOffer currentLadderDiscountPrice */
                currentLadderDiscountPrice?: (number|Long|null);

                /** SpecialOffer nextLadderId */
                nextLadderId?: (number|Long|null);

                /** SpecialOffer nextLadderDiffQuantity */
                nextLadderDiffQuantity?: (number|null);

                /** SpecialOffer nextLadderDiffPrice */
                nextLadderDiffPrice?: (number|Long|null);

                /** SpecialOffer nextLadderDiscountRate */
                nextLadderDiscountRate?: (number|null);

                /** SpecialOffer nextLadderDiscountPrice */
                nextLadderDiscountPrice?: (number|Long|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer type. */
                public type: number;

                /** SpecialOffer currentLadderId. */
                public currentLadderId: (number|Long);

                /** SpecialOffer currentLadderQuantityThreshold. */
                public currentLadderQuantityThreshold: number;

                /** SpecialOffer currentLadderPriceThreshold. */
                public currentLadderPriceThreshold: (number|Long);

                /** SpecialOffer currentLadderDiscountRate. */
                public currentLadderDiscountRate: number;

                /** SpecialOffer currentLadderDiscountPrice. */
                public currentLadderDiscountPrice: (number|Long);

                /** SpecialOffer nextLadderId. */
                public nextLadderId: (number|Long);

                /** SpecialOffer nextLadderDiffQuantity. */
                public nextLadderDiffQuantity: number;

                /** SpecialOffer nextLadderDiffPrice. */
                public nextLadderDiffPrice: (number|Long);

                /** SpecialOffer nextLadderDiscountRate. */
                public nextLadderDiscountRate: number;

                /** SpecialOffer nextLadderDiscountPrice. */
                public nextLadderDiscountPrice: (number|Long);

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer): App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.AddCartSpecialOfferPieceTogether.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.AddCartSpecialOfferPieceTogether.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartCheckOutSkuList. */
        namespace CartCheckOutSkuList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartCheckOutSkuList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartCheckOutSkuList.IRequest): App.Cart.CartCheckOutSkuList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartCheckOutSkuList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartCheckOutSkuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartCheckOutSkuList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartCheckOutSkuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartCheckOutSkuList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartCheckOutSkuList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartCheckOutSkuList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartCheckOutSkuList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuList.ISkuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartCheckOutSkuList.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuList.ISkuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartCheckOutSkuList.IResponse): App.Cart.CartCheckOutSkuList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartCheckOutSkuList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartCheckOutSkuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartCheckOutSkuList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartCheckOutSkuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartCheckOutSkuList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartCheckOutSkuList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartCheckOutSkuList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartCheckOutSkuList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuList. */
        namespace CartSkuList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuList.IRequest): App.Cart.CartSkuList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuList.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuList.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuList.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuList.IResponse): App.Cart.CartSkuList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SkuInfo. */
            interface ISkuInfo {

                /** SkuInfo productId */
                productId?: (number|Long|null);

                /** SkuInfo spuId */
                spuId?: (number|Long|null);

                /** SkuInfo saleSkuId */
                saleSkuId?: (number|Long|null);

                /** SkuInfo proName */
                proName?: (string|null);

                /** SkuInfo usProName */
                usProName?: (string|null);

                /** SkuInfo image */
                image?: (string|null);

                /** SkuInfo discountStr */
                discountStr?: (string|null);

                /** SkuInfo discountStrShow */
                discountStrShow?: (boolean|null);

                /** SkuInfo salePrice */
                salePrice?: (number|Long|null);

                /** SkuInfo inventory */
                inventory?: (number|null);

                /** SkuInfo onlyShow */
                onlyShow?: (boolean|null);

                /** SkuInfo optionFormat */
                optionFormat?: (string|null);

                /** SkuInfo quantity */
                quantity?: (number|null);

                /** SkuInfo invalidFlag */
                invalidFlag?: (boolean|null);

                /** SkuInfo selected */
                selected?: (number|null);

                /** SkuInfo path */
                path?: (string|null);

                /** SkuInfo categoryIdOne */
                categoryIdOne?: (number|Long|null);

                /** SkuInfo categoryIdTwo */
                categoryIdTwo?: (number|Long|null);

                /** SkuInfo categoryIdThree */
                categoryIdThree?: (number|Long|null);

                /** SkuInfo handle */
                handle?: (string|null);
            }

            /** Represents a SkuInfo. */
            class SkuInfo implements ISkuInfo {

                /**
                 * Constructs a new SkuInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuList.ISkuInfo);

                /** SkuInfo productId. */
                public productId: (number|Long);

                /** SkuInfo spuId. */
                public spuId: (number|Long);

                /** SkuInfo saleSkuId. */
                public saleSkuId: (number|Long);

                /** SkuInfo proName. */
                public proName: string;

                /** SkuInfo usProName. */
                public usProName: string;

                /** SkuInfo image. */
                public image: string;

                /** SkuInfo discountStr. */
                public discountStr: string;

                /** SkuInfo discountStrShow. */
                public discountStrShow: boolean;

                /** SkuInfo salePrice. */
                public salePrice: (number|Long);

                /** SkuInfo inventory. */
                public inventory: number;

                /** SkuInfo onlyShow. */
                public onlyShow: boolean;

                /** SkuInfo optionFormat. */
                public optionFormat: string;

                /** SkuInfo quantity. */
                public quantity: number;

                /** SkuInfo invalidFlag. */
                public invalidFlag: boolean;

                /** SkuInfo selected. */
                public selected: number;

                /** SkuInfo path. */
                public path: string;

                /** SkuInfo categoryIdOne. */
                public categoryIdOne: (number|Long);

                /** SkuInfo categoryIdTwo. */
                public categoryIdTwo: (number|Long);

                /** SkuInfo categoryIdThree. */
                public categoryIdThree: (number|Long);

                /** SkuInfo handle. */
                public handle: string;

                /**
                 * Creates a new SkuInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SkuInfo instance
                 */
                public static create(properties?: App.Cart.CartSkuList.ISkuInfo): App.Cart.CartSkuList.SkuInfo;

                /**
                 * Encodes the specified SkuInfo message. Does not implicitly {@link App.Cart.CartSkuList.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuList.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SkuInfo message, length delimited. Does not implicitly {@link App.Cart.CartSkuList.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuList.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuList.SkuInfo;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuList.SkuInfo;

                /**
                 * Verifies a SkuInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SkuInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SkuInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuList.SkuInfo;

                /**
                 * Creates a plain object from a SkuInfo message. Also converts values to other types if specified.
                 * @param message SkuInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuList.SkuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SkuInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Shipping. */
            interface IShipping {

                /** Shipping freeShippingThreshold */
                freeShippingThreshold?: (number|Long|null);

                /** Shipping freeShippingAmountDifference */
                freeShippingAmountDifference?: (number|Long|null);

                /** Shipping pieceTogetherCollectionId */
                pieceTogetherCollectionId?: (number|Long|null);

                /** Shipping freeShippingFlag */
                freeShippingFlag?: (boolean|null);

                /** Shipping showFlag */
                showFlag?: (boolean|null);
            }

            /** Represents a Shipping. */
            class Shipping implements IShipping {

                /**
                 * Constructs a new Shipping.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuList.IShipping);

                /** Shipping freeShippingThreshold. */
                public freeShippingThreshold: (number|Long);

                /** Shipping freeShippingAmountDifference. */
                public freeShippingAmountDifference: (number|Long);

                /** Shipping pieceTogetherCollectionId. */
                public pieceTogetherCollectionId: (number|Long);

                /** Shipping freeShippingFlag. */
                public freeShippingFlag: boolean;

                /** Shipping showFlag. */
                public showFlag: boolean;

                /**
                 * Creates a new Shipping instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Shipping instance
                 */
                public static create(properties?: App.Cart.CartSkuList.IShipping): App.Cart.CartSkuList.Shipping;

                /**
                 * Encodes the specified Shipping message. Does not implicitly {@link App.Cart.CartSkuList.Shipping.verify|verify} messages.
                 * @param message Shipping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuList.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Shipping message, length delimited. Does not implicitly {@link App.Cart.CartSkuList.Shipping.verify|verify} messages.
                 * @param message Shipping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuList.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Shipping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Shipping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuList.Shipping;

                /**
                 * Decodes a Shipping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Shipping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuList.Shipping;

                /**
                 * Verifies a Shipping message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Shipping message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Shipping
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuList.Shipping;

                /**
                 * Creates a plain object from a Shipping message. Also converts values to other types if specified.
                 * @param message Shipping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuList.Shipping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Shipping to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Amount. */
            interface IAmount {

                /** Amount subtotal */
                subtotal?: (number|Long|null);

                /** Amount discount */
                discount?: (number|Long|null);

                /** Amount total */
                total?: (number|Long|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuList.IAmount);

                /** Amount subtotal. */
                public subtotal: (number|Long);

                /** Amount discount. */
                public discount: (number|Long);

                /** Amount total. */
                public total: (number|Long);

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: App.Cart.CartSkuList.IAmount): App.Cart.CartSkuList.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link App.Cart.CartSkuList.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuList.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Amount message, length delimited. Does not implicitly {@link App.Cart.CartSkuList.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuList.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuList.Amount;

                /**
                 * Decodes an Amount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuList.Amount;

                /**
                 * Verifies an Amount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Amount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Amount
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuList.Amount;

                /**
                 * Creates a plain object from an Amount message. Also converts values to other types if specified.
                 * @param message Amount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuList.Amount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Amount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartLen. */
        namespace CartLen {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartLen.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartLen.IRequest): App.Cart.CartLen.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartLen.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartLen.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartLen.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartLen.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartLen.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartLen.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartLen.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartLen.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response quantity */
                quantity?: (number|null);

                /** Response freeShippingFlag */
                freeShippingFlag?: (boolean|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartLen.IResponse);

                /** Response quantity. */
                public quantity: number;

                /** Response freeShippingFlag. */
                public freeShippingFlag: boolean;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartLen.IResponse): App.Cart.CartLen.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartLen.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartLen.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartLen.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartLen.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartLen.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartLen.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartLen.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartLen.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartRemoveSku. */
        namespace CartRemoveSku {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: ((number|Long)[]|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartRemoveSku.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long)[];

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartRemoveSku.IRequest): App.Cart.CartRemoveSku.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartRemoveSku.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartRemoveSku.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartRemoveSku.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartRemoveSku.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartRemoveSku.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartRemoveSku.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartRemoveSku.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartRemoveSku.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuList.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuList.IAmount|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartRemoveSku.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuList.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuList.IAmount|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartRemoveSku.IResponse): App.Cart.CartRemoveSku.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartRemoveSku.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartRemoveSku.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartRemoveSku.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartRemoveSku.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartRemoveSku.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartRemoveSku.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartRemoveSku.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartRemoveSku.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartRemoveSkuV2. */
        namespace CartRemoveSkuV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: ((number|Long)[]|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartRemoveSkuV2.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long)[];

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartRemoveSkuV2.IRequest): App.Cart.CartRemoveSkuV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartRemoveSkuV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartRemoveSkuV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartRemoveSkuV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartRemoveSkuV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartRemoveSkuV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartRemoveSkuV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartRemoveSkuV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartRemoveSkuV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuListV2.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode */
                recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartRemoveSkuV2.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuListV2.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode. */
                public recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartRemoveSkuV2.IResponse): App.Cart.CartRemoveSkuV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartRemoveSkuV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartRemoveSkuV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartRemoveSkuV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartRemoveSkuV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartRemoveSkuV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartRemoveSkuV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartRemoveSkuV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartRemoveSkuV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuListV2. */
        namespace CartSkuListV2 {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.IRequest): App.Cart.CartSkuListV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuListV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuListV2.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode */
                recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuListV2.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode. */
                public recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.IResponse): App.Cart.CartSkuListV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuListV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SkuInfo. */
            interface ISkuInfo {

                /** SkuInfo productId */
                productId?: (number|Long|null);

                /** SkuInfo spuId */
                spuId?: (number|Long|null);

                /** SkuInfo saleSkuId */
                saleSkuId?: (number|Long|null);

                /** SkuInfo proName */
                proName?: (string|null);

                /** SkuInfo usProName */
                usProName?: (string|null);

                /** SkuInfo image */
                image?: (string|null);

                /** SkuInfo discountStr */
                discountStr?: (string|null);

                /** SkuInfo discountStrShow */
                discountStrShow?: (boolean|null);

                /** SkuInfo salePrice */
                salePrice?: (number|Long|null);

                /** SkuInfo inventory */
                inventory?: (number|null);

                /** SkuInfo onlyShow */
                onlyShow?: (boolean|null);

                /** SkuInfo optionFormat */
                optionFormat?: (string|null);

                /** SkuInfo quantity */
                quantity?: (number|null);

                /** SkuInfo invalidFlag */
                invalidFlag?: (boolean|null);

                /** SkuInfo selected */
                selected?: (number|null);

                /** SkuInfo path */
                path?: (string|null);

                /** SkuInfo categoryIdOne */
                categoryIdOne?: (number|Long|null);

                /** SkuInfo categoryIdTwo */
                categoryIdTwo?: (number|Long|null);

                /** SkuInfo categoryIdThree */
                categoryIdThree?: (number|Long|null);

                /** SkuInfo handle */
                handle?: (string|null);

                /** SkuInfo flashSaleId */
                flashSaleId?: (number|Long|null);

                /** SkuInfo marketPrice */
                marketPrice?: (number|Long|null);
            }

            /** Represents a SkuInfo. */
            class SkuInfo implements ISkuInfo {

                /**
                 * Constructs a new SkuInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.ISkuInfo);

                /** SkuInfo productId. */
                public productId: (number|Long);

                /** SkuInfo spuId. */
                public spuId: (number|Long);

                /** SkuInfo saleSkuId. */
                public saleSkuId: (number|Long);

                /** SkuInfo proName. */
                public proName: string;

                /** SkuInfo usProName. */
                public usProName: string;

                /** SkuInfo image. */
                public image: string;

                /** SkuInfo discountStr. */
                public discountStr: string;

                /** SkuInfo discountStrShow. */
                public discountStrShow: boolean;

                /** SkuInfo salePrice. */
                public salePrice: (number|Long);

                /** SkuInfo inventory. */
                public inventory: number;

                /** SkuInfo onlyShow. */
                public onlyShow: boolean;

                /** SkuInfo optionFormat. */
                public optionFormat: string;

                /** SkuInfo quantity. */
                public quantity: number;

                /** SkuInfo invalidFlag. */
                public invalidFlag: boolean;

                /** SkuInfo selected. */
                public selected: number;

                /** SkuInfo path. */
                public path: string;

                /** SkuInfo categoryIdOne. */
                public categoryIdOne: (number|Long);

                /** SkuInfo categoryIdTwo. */
                public categoryIdTwo: (number|Long);

                /** SkuInfo categoryIdThree. */
                public categoryIdThree: (number|Long);

                /** SkuInfo handle. */
                public handle: string;

                /** SkuInfo flashSaleId. */
                public flashSaleId: (number|Long);

                /** SkuInfo marketPrice. */
                public marketPrice: (number|Long);

                /**
                 * Creates a new SkuInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SkuInfo instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.ISkuInfo): App.Cart.CartSkuListV2.SkuInfo;

                /**
                 * Encodes the specified SkuInfo message. Does not implicitly {@link App.Cart.CartSkuListV2.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SkuInfo message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.SkuInfo;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.SkuInfo;

                /**
                 * Verifies a SkuInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SkuInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SkuInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.SkuInfo;

                /**
                 * Creates a plain object from a SkuInfo message. Also converts values to other types if specified.
                 * @param message SkuInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.SkuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SkuInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Shipping. */
            interface IShipping {

                /** Shipping freeShippingThreshold */
                freeShippingThreshold?: (number|Long|null);

                /** Shipping freeShippingAmountDifference */
                freeShippingAmountDifference?: (number|Long|null);

                /** Shipping pieceTogetherCollectionId */
                pieceTogetherCollectionId?: (number|Long|null);

                /** Shipping freeShippingFlag */
                freeShippingFlag?: (boolean|null);

                /** Shipping showFlag */
                showFlag?: (boolean|null);
            }

            /** Represents a Shipping. */
            class Shipping implements IShipping {

                /**
                 * Constructs a new Shipping.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.IShipping);

                /** Shipping freeShippingThreshold. */
                public freeShippingThreshold: (number|Long);

                /** Shipping freeShippingAmountDifference. */
                public freeShippingAmountDifference: (number|Long);

                /** Shipping pieceTogetherCollectionId. */
                public pieceTogetherCollectionId: (number|Long);

                /** Shipping freeShippingFlag. */
                public freeShippingFlag: boolean;

                /** Shipping showFlag. */
                public showFlag: boolean;

                /**
                 * Creates a new Shipping instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Shipping instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.IShipping): App.Cart.CartSkuListV2.Shipping;

                /**
                 * Encodes the specified Shipping message. Does not implicitly {@link App.Cart.CartSkuListV2.Shipping.verify|verify} messages.
                 * @param message Shipping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Shipping message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.Shipping.verify|verify} messages.
                 * @param message Shipping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Shipping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Shipping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.Shipping;

                /**
                 * Decodes a Shipping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Shipping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.Shipping;

                /**
                 * Verifies a Shipping message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Shipping message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Shipping
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.Shipping;

                /**
                 * Creates a plain object from a Shipping message. Also converts values to other types if specified.
                 * @param message Shipping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.Shipping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Shipping to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Amount. */
            interface IAmount {

                /** Amount subtotal */
                subtotal?: (number|Long|null);

                /** Amount discount */
                discount?: (number|Long|null);

                /** Amount total */
                total?: (number|Long|null);

                /** Amount totalMarketDiscountPrice */
                totalMarketDiscountPrice?: (number|Long|null);

                /** Amount totalMarketPrice */
                totalMarketPrice?: (number|Long|null);

                /** Amount totalMarketPayPrice */
                totalMarketPayPrice?: (number|Long|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.IAmount);

                /** Amount subtotal. */
                public subtotal: (number|Long);

                /** Amount discount. */
                public discount: (number|Long);

                /** Amount total. */
                public total: (number|Long);

                /** Amount totalMarketDiscountPrice. */
                public totalMarketDiscountPrice: (number|Long);

                /** Amount totalMarketPrice. */
                public totalMarketPrice: (number|Long);

                /** Amount totalMarketPayPrice. */
                public totalMarketPayPrice: (number|Long);

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.IAmount): App.Cart.CartSkuListV2.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link App.Cart.CartSkuListV2.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Amount message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.Amount;

                /**
                 * Decodes an Amount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.Amount;

                /**
                 * Verifies an Amount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Amount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Amount
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.Amount;

                /**
                 * Creates a plain object from an Amount message. Also converts values to other types if specified.
                 * @param message Amount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.Amount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Amount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SpecialOffer. */
            interface ISpecialOffer {

                /** SpecialOffer id */
                id?: (number|Long|null);

                /** SpecialOffer type */
                type?: (number|null);

                /** SpecialOffer currentLadderId */
                currentLadderId?: (number|Long|null);

                /** SpecialOffer currentLadderQuantityThreshold */
                currentLadderQuantityThreshold?: (number|null);

                /** SpecialOffer currentLadderPriceThreshold */
                currentLadderPriceThreshold?: (number|Long|null);

                /** SpecialOffer currentLadderDiscountRate */
                currentLadderDiscountRate?: (number|null);

                /** SpecialOffer currentLadderDiscountPrice */
                currentLadderDiscountPrice?: (number|Long|null);

                /** SpecialOffer nextLadderId */
                nextLadderId?: (number|Long|null);

                /** SpecialOffer nextLadderDiffQuantity */
                nextLadderDiffQuantity?: (number|null);

                /** SpecialOffer nextLadderDiffPrice */
                nextLadderDiffPrice?: (number|Long|null);

                /** SpecialOffer nextLadderDiscountRate */
                nextLadderDiscountRate?: (number|null);

                /** SpecialOffer nextLadderDiscountPrice */
                nextLadderDiscountPrice?: (number|Long|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer type. */
                public type: number;

                /** SpecialOffer currentLadderId. */
                public currentLadderId: (number|Long);

                /** SpecialOffer currentLadderQuantityThreshold. */
                public currentLadderQuantityThreshold: number;

                /** SpecialOffer currentLadderPriceThreshold. */
                public currentLadderPriceThreshold: (number|Long);

                /** SpecialOffer currentLadderDiscountRate. */
                public currentLadderDiscountRate: number;

                /** SpecialOffer currentLadderDiscountPrice. */
                public currentLadderDiscountPrice: (number|Long);

                /** SpecialOffer nextLadderId. */
                public nextLadderId: (number|Long);

                /** SpecialOffer nextLadderDiffQuantity. */
                public nextLadderDiffQuantity: number;

                /** SpecialOffer nextLadderDiffPrice. */
                public nextLadderDiffPrice: (number|Long);

                /** SpecialOffer nextLadderDiscountRate. */
                public nextLadderDiscountRate: number;

                /** SpecialOffer nextLadderDiscountPrice. */
                public nextLadderDiscountPrice: (number|Long);

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.ISpecialOffer): App.Cart.CartSkuListV2.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.Cart.CartSkuListV2.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.SpecialOffer;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CouponCodeInfo. */
            interface ICouponCodeInfo {

                /** CouponCodeInfo codeType */
                codeType?: (number|null);

                /** CouponCodeInfo codeValue */
                codeValue?: (number|null);

                /** CouponCodeInfo restrictionRule */
                restrictionRule?: (number|null);

                /** CouponCodeInfo restrictionRuleValue */
                restrictionRuleValue?: (number|null);

                /** CouponCodeInfo code */
                code?: (string|null);

                /** CouponCodeInfo startTime */
                startTime?: (number|Long|null);

                /** CouponCodeInfo endTime */
                endTime?: (number|Long|null);

                /** CouponCodeInfo discountPrice */
                discountPrice?: (number|Long|null);
            }

            /** Represents a CouponCodeInfo. */
            class CouponCodeInfo implements ICouponCodeInfo {

                /**
                 * Constructs a new CouponCodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuListV2.ICouponCodeInfo);

                /** CouponCodeInfo codeType. */
                public codeType: number;

                /** CouponCodeInfo codeValue. */
                public codeValue: number;

                /** CouponCodeInfo restrictionRule. */
                public restrictionRule: number;

                /** CouponCodeInfo restrictionRuleValue. */
                public restrictionRuleValue: number;

                /** CouponCodeInfo code. */
                public code: string;

                /** CouponCodeInfo startTime. */
                public startTime: (number|Long);

                /** CouponCodeInfo endTime. */
                public endTime: (number|Long);

                /** CouponCodeInfo discountPrice. */
                public discountPrice: (number|Long);

                /**
                 * Creates a new CouponCodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CouponCodeInfo instance
                 */
                public static create(properties?: App.Cart.CartSkuListV2.ICouponCodeInfo): App.Cart.CartSkuListV2.CouponCodeInfo;

                /**
                 * Encodes the specified CouponCodeInfo message. Does not implicitly {@link App.Cart.CartSkuListV2.CouponCodeInfo.verify|verify} messages.
                 * @param message CouponCodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuListV2.ICouponCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CouponCodeInfo message, length delimited. Does not implicitly {@link App.Cart.CartSkuListV2.CouponCodeInfo.verify|verify} messages.
                 * @param message CouponCodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuListV2.ICouponCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CouponCodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CouponCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuListV2.CouponCodeInfo;

                /**
                 * Decodes a CouponCodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CouponCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuListV2.CouponCodeInfo;

                /**
                 * Verifies a CouponCodeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CouponCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CouponCodeInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuListV2.CouponCodeInfo;

                /**
                 * Creates a plain object from a CouponCodeInfo message. Also converts values to other types if specified.
                 * @param message CouponCodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuListV2.CouponCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CouponCodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuAddNum. */
        namespace CartSkuAddNum {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request path */
                path?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuAddNum.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request path. */
                public path: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuAddNum.IRequest): App.Cart.CartSkuAddNum.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuAddNum.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuAddNum.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuAddNum.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuAddNum.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuAddNum.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuAddNum.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuAddNum.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuAddNum.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuList.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuList.IAmount|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuAddNum.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuList.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuList.IAmount|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuAddNum.IResponse): App.Cart.CartSkuAddNum.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuAddNum.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuAddNum.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuAddNum.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuAddNum.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuAddNum.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuAddNum.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuAddNum.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuAddNum.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuAddNumV2. */
        namespace CartSkuAddNumV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request path */
                path?: (string|null);

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
                constructor(properties?: App.Cart.CartSkuAddNumV2.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request path. */
                public path: string;

                /** Request recaptchaToken. */
                public recaptchaToken: string;

                /** Request recaptchaAction. */
                public recaptchaAction: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuAddNumV2.IRequest): App.Cart.CartSkuAddNumV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuAddNumV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuAddNumV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuAddNumV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuAddNumV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuAddNumV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuAddNumV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuAddNumV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuAddNumV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuListV2.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode */
                recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuAddNumV2.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuListV2.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode. */
                public recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuAddNumV2.IResponse): App.Cart.CartSkuAddNumV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuAddNumV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuAddNumV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuAddNumV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuAddNumV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuAddNumV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuAddNumV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuAddNumV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuAddNumV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuSelected. */
        namespace CartSkuSelected {

            /** Properties of a Request. */
            interface IRequest {

                /** Request allSelectedFlag */
                allSelectedFlag?: (boolean|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request selectedType */
                selectedType?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuSelected.IRequest);

                /** Request allSelectedFlag. */
                public allSelectedFlag: boolean;

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request selectedType. */
                public selectedType: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuSelected.IRequest): App.Cart.CartSkuSelected.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuSelected.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuSelected.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuSelected.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuSelected.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuSelected.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuSelected.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuSelected.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuSelected.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuList.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuList.IAmount|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuSelected.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuList.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuList.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuList.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuList.IAmount|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuSelected.IResponse): App.Cart.CartSkuSelected.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuSelected.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuSelected.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuSelected.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuSelected.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuSelected.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuSelected.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuSelected.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuSelected.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CartSkuSelectedV2. */
        namespace CartSkuSelectedV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request allSelectedFlag */
                allSelectedFlag?: (boolean|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request selectedType */
                selectedType?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuSelectedV2.IRequest);

                /** Request allSelectedFlag. */
                public allSelectedFlag: boolean;

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request selectedType. */
                public selectedType: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.CartSkuSelectedV2.IRequest): App.Cart.CartSkuSelectedV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.CartSkuSelectedV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuSelectedV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.CartSkuSelectedV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuSelectedV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuSelectedV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuSelectedV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuSelectedV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuSelectedV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response skuList */
                skuList?: (App.Cart.CartSkuListV2.ISkuInfo[]|null);

                /** Response shipping */
                shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount */
                amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity */
                quantity?: (number|null);

                /** Response usdAmount */
                usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode */
                recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.CartSkuSelectedV2.IResponse);

                /** Response skuList. */
                public skuList: App.Cart.CartSkuListV2.ISkuInfo[];

                /** Response shipping. */
                public shipping?: (App.Cart.CartSkuListV2.IShipping|null);

                /** Response amount. */
                public amount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response quantity. */
                public quantity: number;

                /** Response usdAmount. */
                public usdAmount?: (App.Cart.CartSkuListV2.IAmount|null);

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.CartSkuListV2.ISpecialOffer|null);

                /** Response recommendCouponCode. */
                public recommendCouponCode?: (App.Cart.CartSkuListV2.ICouponCodeInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.CartSkuSelectedV2.IResponse): App.Cart.CartSkuSelectedV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.CartSkuSelectedV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.CartSkuSelectedV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.CartSkuSelectedV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.CartSkuSelectedV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.CartSkuSelectedV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.CartSkuSelectedV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.CartSkuSelectedV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.CartSkuSelectedV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace GetCartShippingPieceTogetherPrice. */
        namespace GetCartShippingPieceTogetherPrice {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.GetCartShippingPieceTogetherPrice.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.GetCartShippingPieceTogetherPrice.IRequest): App.Cart.GetCartShippingPieceTogetherPrice.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.GetCartShippingPieceTogetherPrice.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.GetCartShippingPieceTogetherPrice.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.GetCartShippingPieceTogetherPrice.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.GetCartShippingPieceTogetherPrice.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.GetCartShippingPieceTogetherPrice.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.GetCartShippingPieceTogetherPrice.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.GetCartShippingPieceTogetherPrice.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.GetCartShippingPieceTogetherPrice.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response freeShippingThreshold */
                freeShippingThreshold?: (number|Long|null);

                /** Response freeShippingAmountDifference */
                freeShippingAmountDifference?: (number|Long|null);

                /** Response freeShippingFlag */
                freeShippingFlag?: (boolean|null);

                /** Response total */
                total?: (number|Long|null);

                /** Response quantity */
                quantity?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.GetCartShippingPieceTogetherPrice.IResponse);

                /** Response freeShippingThreshold. */
                public freeShippingThreshold: (number|Long);

                /** Response freeShippingAmountDifference. */
                public freeShippingAmountDifference: (number|Long);

                /** Response freeShippingFlag. */
                public freeShippingFlag: boolean;

                /** Response total. */
                public total: (number|Long);

                /** Response quantity. */
                public quantity: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.GetCartShippingPieceTogetherPrice.IResponse): App.Cart.GetCartShippingPieceTogetherPrice.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.GetCartShippingPieceTogetherPrice.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.GetCartShippingPieceTogetherPrice.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.GetCartShippingPieceTogetherPrice.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.GetCartShippingPieceTogetherPrice.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.GetCartShippingPieceTogetherPrice.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.GetCartShippingPieceTogetherPrice.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.GetCartShippingPieceTogetherPrice.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.GetCartShippingPieceTogetherPrice.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace GetCartSpecialOfferPieceTogetherPrice. */
        namespace GetCartSpecialOfferPieceTogetherPrice {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IRequest): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response specialOfferRes */
                specialOfferRes?: (App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IResponse);

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IResponse): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** SpecialOffer type */
                type?: (number|null);

                /** SpecialOffer currentLadderId */
                currentLadderId?: (number|Long|null);

                /** SpecialOffer currentLadderQuantityThreshold */
                currentLadderQuantityThreshold?: (number|null);

                /** SpecialOffer currentLadderPriceThreshold */
                currentLadderPriceThreshold?: (number|Long|null);

                /** SpecialOffer currentLadderDiscountRate */
                currentLadderDiscountRate?: (number|null);

                /** SpecialOffer currentLadderDiscountPrice */
                currentLadderDiscountPrice?: (number|Long|null);

                /** SpecialOffer nextLadderId */
                nextLadderId?: (number|Long|null);

                /** SpecialOffer nextLadderDiffQuantity */
                nextLadderDiffQuantity?: (number|null);

                /** SpecialOffer nextLadderDiffPrice */
                nextLadderDiffPrice?: (number|Long|null);

                /** SpecialOffer nextLadderDiscountRate */
                nextLadderDiscountRate?: (number|null);

                /** SpecialOffer nextLadderDiscountPrice */
                nextLadderDiscountPrice?: (number|Long|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer type. */
                public type: number;

                /** SpecialOffer currentLadderId. */
                public currentLadderId: (number|Long);

                /** SpecialOffer currentLadderQuantityThreshold. */
                public currentLadderQuantityThreshold: number;

                /** SpecialOffer currentLadderPriceThreshold. */
                public currentLadderPriceThreshold: (number|Long);

                /** SpecialOffer currentLadderDiscountRate. */
                public currentLadderDiscountRate: number;

                /** SpecialOffer currentLadderDiscountPrice. */
                public currentLadderDiscountPrice: (number|Long);

                /** SpecialOffer nextLadderId. */
                public nextLadderId: (number|Long);

                /** SpecialOffer nextLadderDiffQuantity. */
                public nextLadderDiffQuantity: number;

                /** SpecialOffer nextLadderDiffPrice. */
                public nextLadderDiffPrice: (number|Long);

                /** SpecialOffer nextLadderDiscountRate. */
                public nextLadderDiscountRate: number;

                /** SpecialOffer nextLadderDiscountPrice. */
                public nextLadderDiscountPrice: (number|Long);

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer): App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.GetCartSpecialOfferPieceTogetherPrice.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
