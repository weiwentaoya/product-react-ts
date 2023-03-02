import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace Order. */
    namespace Order {

        /** Namespace AppOrderDetail. */
        namespace AppOrderDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.AppOrderDetail.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.AppOrderDetail.IRequest): App.Order.AppOrderDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.AppOrderDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.AppOrderDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.AppOrderDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.AppOrderDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.AppOrderDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.AppOrderDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.AppOrderDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.AppOrderDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderInfo */
                orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /** Response stateInfo */
                stateInfo?: (App.Order.OrInfo.IAppStateInfo|null);

                /** Response addressInfo */
                addressInfo?: (App.Order.OrInfo.IAddressInfo|null);

                /** Response paymentDetail */
                paymentDetail?: (App.Order.OrInfo.IPaymentDetail|null);

                /** Response items */
                items?: (App.Order.OrInfo.IItemInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.AppOrderDetail.IResponse);

                /** Response orderInfo. */
                public orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /** Response stateInfo. */
                public stateInfo?: (App.Order.OrInfo.IAppStateInfo|null);

                /** Response addressInfo. */
                public addressInfo?: (App.Order.OrInfo.IAddressInfo|null);

                /** Response paymentDetail. */
                public paymentDetail?: (App.Order.OrInfo.IPaymentDetail|null);

                /** Response items. */
                public items: App.Order.OrInfo.IItemInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.AppOrderDetail.IResponse): App.Order.AppOrderDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.AppOrderDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.AppOrderDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.AppOrderDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.AppOrderDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.AppOrderDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.AppOrderDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.AppOrderDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.AppOrderDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrInfo. */
        namespace OrInfo {

            /** Properties of an OrderInfo. */
            interface IOrderInfo {

                /** OrderInfo orderNo */
                orderNo?: (string|null);

                /** OrderInfo appOrderState */
                appOrderState?: (number|null);

                /** OrderInfo salePrice */
                salePrice?: (number|Long|null);

                /** OrderInfo skuPhoto */
                skuPhoto?: (string|null);

                /** OrderInfo productName */
                productName?: (string|null);

                /** OrderInfo quantity */
                quantity?: (number|null);

                /** OrderInfo magicBoxId */
                magicBoxId?: (number|Long|null);

                /** OrderInfo createTime */
                createTime?: (number|Long|null);

                /** OrderInfo payOrderNo */
                payOrderNo?: (string|null);

                /** OrderInfo payCurrency */
                payCurrency?: (string|null);

                /** OrderInfo payAmount */
                payAmount?: (number|Long|null);

                /** OrderInfo payWay */
                payWay?: (number|Long|null);

                /** OrderInfo transportNo */
                transportNo?: (string|null);

                /** OrderInfo appStateInfo */
                appStateInfo?: (App.Order.OrInfo.IAppStateInfo|null);

                /** OrderInfo trackingUrl */
                trackingUrl?: (string|null);
            }

            /** Represents an OrderInfo. */
            class OrderInfo implements IOrderInfo {

                /**
                 * Constructs a new OrderInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IOrderInfo);

                /** OrderInfo orderNo. */
                public orderNo: string;

                /** OrderInfo appOrderState. */
                public appOrderState: number;

                /** OrderInfo salePrice. */
                public salePrice: (number|Long);

                /** OrderInfo skuPhoto. */
                public skuPhoto: string;

                /** OrderInfo productName. */
                public productName: string;

                /** OrderInfo quantity. */
                public quantity: number;

                /** OrderInfo magicBoxId. */
                public magicBoxId: (number|Long);

                /** OrderInfo createTime. */
                public createTime: (number|Long);

                /** OrderInfo payOrderNo. */
                public payOrderNo: string;

                /** OrderInfo payCurrency. */
                public payCurrency: string;

                /** OrderInfo payAmount. */
                public payAmount: (number|Long);

                /** OrderInfo payWay. */
                public payWay: (number|Long);

                /** OrderInfo transportNo. */
                public transportNo: string;

                /** OrderInfo appStateInfo. */
                public appStateInfo?: (App.Order.OrInfo.IAppStateInfo|null);

                /** OrderInfo trackingUrl. */
                public trackingUrl: string;

                /**
                 * Creates a new OrderInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IOrderInfo): App.Order.OrInfo.OrderInfo;

                /**
                 * Encodes the specified OrderInfo message. Does not implicitly {@link App.Order.OrInfo.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.OrderInfo;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.OrderInfo;

                /**
                 * Verifies an OrderInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.OrderInfo;

                /**
                 * Creates a plain object from an OrderInfo message. Also converts values to other types if specified.
                 * @param message OrderInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.OrderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AppStateInfo. */
            interface IAppStateInfo {

                /** AppStateInfo processTime */
                processTime?: (number|Long|null);

                /** AppStateInfo processEndTime */
                processEndTime?: (number|Long|null);

                /** AppStateInfo list */
                list?: (App.Order.OrInfo.IProcessInfo[]|null);
            }

            /** Represents an AppStateInfo. */
            class AppStateInfo implements IAppStateInfo {

                /**
                 * Constructs a new AppStateInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IAppStateInfo);

                /** AppStateInfo processTime. */
                public processTime: (number|Long);

                /** AppStateInfo processEndTime. */
                public processEndTime: (number|Long);

                /** AppStateInfo list. */
                public list: App.Order.OrInfo.IProcessInfo[];

                /**
                 * Creates a new AppStateInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppStateInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IAppStateInfo): App.Order.OrInfo.AppStateInfo;

                /**
                 * Encodes the specified AppStateInfo message. Does not implicitly {@link App.Order.OrInfo.AppStateInfo.verify|verify} messages.
                 * @param message AppStateInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IAppStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppStateInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.AppStateInfo.verify|verify} messages.
                 * @param message AppStateInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IAppStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppStateInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppStateInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.AppStateInfo;

                /**
                 * Decodes an AppStateInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppStateInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.AppStateInfo;

                /**
                 * Verifies an AppStateInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppStateInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppStateInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.AppStateInfo;

                /**
                 * Creates a plain object from an AppStateInfo message. Also converts values to other types if specified.
                 * @param message AppStateInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.AppStateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppStateInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProcessInfo. */
            interface IProcessInfo {

                /** ProcessInfo processType */
                processType?: (number|null);

                /** ProcessInfo processTime */
                processTime?: (number|Long|null);

                /** ProcessInfo isCurrent */
                isCurrent?: (boolean|null);
            }

            /** Represents a ProcessInfo. */
            class ProcessInfo implements IProcessInfo {

                /**
                 * Constructs a new ProcessInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IProcessInfo);

                /** ProcessInfo processType. */
                public processType: number;

                /** ProcessInfo processTime. */
                public processTime: (number|Long);

                /** ProcessInfo isCurrent. */
                public isCurrent: boolean;

                /**
                 * Creates a new ProcessInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProcessInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IProcessInfo): App.Order.OrInfo.ProcessInfo;

                /**
                 * Encodes the specified ProcessInfo message. Does not implicitly {@link App.Order.OrInfo.ProcessInfo.verify|verify} messages.
                 * @param message ProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProcessInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.ProcessInfo.verify|verify} messages.
                 * @param message ProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProcessInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.ProcessInfo;

                /**
                 * Decodes a ProcessInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.ProcessInfo;

                /**
                 * Verifies a ProcessInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProcessInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProcessInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.ProcessInfo;

                /**
                 * Creates a plain object from a ProcessInfo message. Also converts values to other types if specified.
                 * @param message ProcessInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.ProcessInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProcessInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddressInfo. */
            interface IAddressInfo {

                /** AddressInfo addressee */
                addressee?: (string|null);

                /** AddressInfo address */
                address?: (string|null);

                /** AddressInfo phone */
                phone?: (string|null);
            }

            /** Represents an AddressInfo. */
            class AddressInfo implements IAddressInfo {

                /**
                 * Constructs a new AddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IAddressInfo);

                /** AddressInfo addressee. */
                public addressee: string;

                /** AddressInfo address. */
                public address: string;

                /** AddressInfo phone. */
                public phone: string;

                /**
                 * Creates a new AddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddressInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IAddressInfo): App.Order.OrInfo.AddressInfo;

                /**
                 * Encodes the specified AddressInfo message. Does not implicitly {@link App.Order.OrInfo.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.AddressInfo;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.AddressInfo;

                /**
                 * Verifies an AddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.AddressInfo;

                /**
                 * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                 * @param message AddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ItemInfo. */
            interface IItemInfo {

                /** ItemInfo skuId */
                skuId?: (number|Long|null);

                /** ItemInfo productName */
                productName?: (string|null);

                /** ItemInfo skuPhoto */
                skuPhoto?: (string|null);

                /** ItemInfo quantity */
                quantity?: (number|null);

                /** ItemInfo salePrice */
                salePrice?: (number|Long|null);

                /** ItemInfo currency */
                currency?: (string|null);

                /** ItemInfo path */
                path?: (string|null);
            }

            /** Represents an ItemInfo. */
            class ItemInfo implements IItemInfo {

                /**
                 * Constructs a new ItemInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IItemInfo);

                /** ItemInfo skuId. */
                public skuId: (number|Long);

                /** ItemInfo productName. */
                public productName: string;

                /** ItemInfo skuPhoto. */
                public skuPhoto: string;

                /** ItemInfo quantity. */
                public quantity: number;

                /** ItemInfo salePrice. */
                public salePrice: (number|Long);

                /** ItemInfo currency. */
                public currency: string;

                /** ItemInfo path. */
                public path: string;

                /**
                 * Creates a new ItemInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ItemInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IItemInfo): App.Order.OrInfo.ItemInfo;

                /**
                 * Encodes the specified ItemInfo message. Does not implicitly {@link App.Order.OrInfo.ItemInfo.verify|verify} messages.
                 * @param message ItemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.ItemInfo.verify|verify} messages.
                 * @param message ItemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ItemInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ItemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.ItemInfo;

                /**
                 * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ItemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.ItemInfo;

                /**
                 * Verifies an ItemInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ItemInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ItemInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.ItemInfo;

                /**
                 * Creates a plain object from an ItemInfo message. Also converts values to other types if specified.
                 * @param message ItemInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.ItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ItemInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PaymentDetail. */
            interface IPaymentDetail {

                /** PaymentDetail subtotal */
                subtotal?: (number|Long|null);

                /** PaymentDetail useHkc */
                useHkc?: (number|Long|null);

                /** PaymentDetail totalAmount */
                totalAmount?: (number|Long|null);

                /** PaymentDetail payment */
                payment?: (string|null);

                /** PaymentDetail currency */
                currency?: (string|null);

                /** PaymentDetail discount */
                discount?: (number|Long|null);
            }

            /** Represents a PaymentDetail. */
            class PaymentDetail implements IPaymentDetail {

                /**
                 * Constructs a new PaymentDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IPaymentDetail);

                /** PaymentDetail subtotal. */
                public subtotal: (number|Long);

                /** PaymentDetail useHkc. */
                public useHkc: (number|Long);

                /** PaymentDetail totalAmount. */
                public totalAmount: (number|Long);

                /** PaymentDetail payment. */
                public payment: string;

                /** PaymentDetail currency. */
                public currency: string;

                /** PaymentDetail discount. */
                public discount: (number|Long);

                /**
                 * Creates a new PaymentDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaymentDetail instance
                 */
                public static create(properties?: App.Order.OrInfo.IPaymentDetail): App.Order.OrInfo.PaymentDetail;

                /**
                 * Encodes the specified PaymentDetail message. Does not implicitly {@link App.Order.OrInfo.PaymentDetail.verify|verify} messages.
                 * @param message PaymentDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IPaymentDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PaymentDetail message, length delimited. Does not implicitly {@link App.Order.OrInfo.PaymentDetail.verify|verify} messages.
                 * @param message PaymentDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IPaymentDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaymentDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PaymentDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.PaymentDetail;

                /**
                 * Decodes a PaymentDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PaymentDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.PaymentDetail;

                /**
                 * Verifies a PaymentDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PaymentDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PaymentDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.PaymentDetail;

                /**
                 * Creates a plain object from a PaymentDetail message. Also converts values to other types if specified.
                 * @param message PaymentDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.PaymentDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PaymentDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlaceOrderInfo. */
            interface IPlaceOrderInfo {

                /** PlaceOrderInfo currency */
                currency?: (string|null);

                /** PlaceOrderInfo exchangeRate */
                exchangeRate?: (number|null);

                /** PlaceOrderInfo quantity */
                quantity?: (number|null);

                /** PlaceOrderInfo currencyOriginalTotalPrice */
                currencyOriginalTotalPrice?: (number|Long|null);

                /** PlaceOrderInfo currencyDiscountPrice */
                currencyDiscountPrice?: (number|Long|null);

                /** PlaceOrderInfo currencyTotalPrice */
                currencyTotalPrice?: (number|Long|null);

                /** PlaceOrderInfo currencyHkc */
                currencyHkc?: (number|Long|null);

                /** PlaceOrderInfo currencyPaymentTotalPrice */
                currencyPaymentTotalPrice?: (number|Long|null);

                /** PlaceOrderInfo newUserBenefit */
                newUserBenefit?: (boolean|null);

                /** PlaceOrderInfo currencyPrice */
                currencyPrice?: (number|Long|null);
            }

            /** Represents a PlaceOrderInfo. */
            class PlaceOrderInfo implements IPlaceOrderInfo {

                /**
                 * Constructs a new PlaceOrderInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IPlaceOrderInfo);

                /** PlaceOrderInfo currency. */
                public currency: string;

                /** PlaceOrderInfo exchangeRate. */
                public exchangeRate: number;

                /** PlaceOrderInfo quantity. */
                public quantity: number;

                /** PlaceOrderInfo currencyOriginalTotalPrice. */
                public currencyOriginalTotalPrice: (number|Long);

                /** PlaceOrderInfo currencyDiscountPrice. */
                public currencyDiscountPrice: (number|Long);

                /** PlaceOrderInfo currencyTotalPrice. */
                public currencyTotalPrice: (number|Long);

                /** PlaceOrderInfo currencyHkc. */
                public currencyHkc: (number|Long);

                /** PlaceOrderInfo currencyPaymentTotalPrice. */
                public currencyPaymentTotalPrice: (number|Long);

                /** PlaceOrderInfo newUserBenefit. */
                public newUserBenefit: boolean;

                /** PlaceOrderInfo currencyPrice. */
                public currencyPrice: (number|Long);

                /**
                 * Creates a new PlaceOrderInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlaceOrderInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IPlaceOrderInfo): App.Order.OrInfo.PlaceOrderInfo;

                /**
                 * Encodes the specified PlaceOrderInfo message. Does not implicitly {@link App.Order.OrInfo.PlaceOrderInfo.verify|verify} messages.
                 * @param message PlaceOrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IPlaceOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlaceOrderInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.PlaceOrderInfo.verify|verify} messages.
                 * @param message PlaceOrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IPlaceOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlaceOrderInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlaceOrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.PlaceOrderInfo;

                /**
                 * Decodes a PlaceOrderInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlaceOrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.PlaceOrderInfo;

                /**
                 * Verifies a PlaceOrderInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlaceOrderInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlaceOrderInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.PlaceOrderInfo;

                /**
                 * Creates a plain object from a PlaceOrderInfo message. Also converts values to other types if specified.
                 * @param message PlaceOrderInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.PlaceOrderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlaceOrderInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderHkcDetail. */
            interface IOrderHkcDetail {

                /** OrderHkcDetail currency */
                currency?: (string|null);

                /** OrderHkcDetail amount */
                amount?: (number|Long|null);

                /** OrderHkcDetail exchangeNum */
                exchangeNum?: (string|null);

                /** OrderHkcDetail discountAmountList */
                discountAmountList?: (App.Order.OrInfo.IDiscountAmount[]|null);
            }

            /** Represents an OrderHkcDetail. */
            class OrderHkcDetail implements IOrderHkcDetail {

                /**
                 * Constructs a new OrderHkcDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IOrderHkcDetail);

                /** OrderHkcDetail currency. */
                public currency: string;

                /** OrderHkcDetail amount. */
                public amount: (number|Long);

                /** OrderHkcDetail exchangeNum. */
                public exchangeNum: string;

                /** OrderHkcDetail discountAmountList. */
                public discountAmountList: App.Order.OrInfo.IDiscountAmount[];

                /**
                 * Creates a new OrderHkcDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderHkcDetail instance
                 */
                public static create(properties?: App.Order.OrInfo.IOrderHkcDetail): App.Order.OrInfo.OrderHkcDetail;

                /**
                 * Encodes the specified OrderHkcDetail message. Does not implicitly {@link App.Order.OrInfo.OrderHkcDetail.verify|verify} messages.
                 * @param message OrderHkcDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IOrderHkcDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderHkcDetail message, length delimited. Does not implicitly {@link App.Order.OrInfo.OrderHkcDetail.verify|verify} messages.
                 * @param message OrderHkcDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IOrderHkcDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderHkcDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderHkcDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.OrderHkcDetail;

                /**
                 * Decodes an OrderHkcDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderHkcDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.OrderHkcDetail;

                /**
                 * Verifies an OrderHkcDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderHkcDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderHkcDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.OrderHkcDetail;

                /**
                 * Creates a plain object from an OrderHkcDetail message. Also converts values to other types if specified.
                 * @param message OrderHkcDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.OrderHkcDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderHkcDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DiscountAmount. */
            interface IDiscountAmount {

                /** DiscountAmount hkcRatio */
                hkcRatio?: (number|null);

                /** DiscountAmount amount */
                amount?: (number|Long|null);

                /** DiscountAmount discountCurrencyAmount */
                discountCurrencyAmount?: (number|Long|null);
            }

            /** Represents a DiscountAmount. */
            class DiscountAmount implements IDiscountAmount {

                /**
                 * Constructs a new DiscountAmount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IDiscountAmount);

                /** DiscountAmount hkcRatio. */
                public hkcRatio: number;

                /** DiscountAmount amount. */
                public amount: (number|Long);

                /** DiscountAmount discountCurrencyAmount. */
                public discountCurrencyAmount: (number|Long);

                /**
                 * Creates a new DiscountAmount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DiscountAmount instance
                 */
                public static create(properties?: App.Order.OrInfo.IDiscountAmount): App.Order.OrInfo.DiscountAmount;

                /**
                 * Encodes the specified DiscountAmount message. Does not implicitly {@link App.Order.OrInfo.DiscountAmount.verify|verify} messages.
                 * @param message DiscountAmount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IDiscountAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DiscountAmount message, length delimited. Does not implicitly {@link App.Order.OrInfo.DiscountAmount.verify|verify} messages.
                 * @param message DiscountAmount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IDiscountAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DiscountAmount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DiscountAmount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.DiscountAmount;

                /**
                 * Decodes a DiscountAmount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DiscountAmount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.DiscountAmount;

                /**
                 * Verifies a DiscountAmount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DiscountAmount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DiscountAmount
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.DiscountAmount;

                /**
                 * Creates a plain object from a DiscountAmount message. Also converts values to other types if specified.
                 * @param message DiscountAmount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.DiscountAmount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DiscountAmount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderBoxInfo. */
            interface IOrderBoxInfo {

                /** OrderBoxInfo magicBoxID */
                magicBoxID?: (number|Long|null);

                /** OrderBoxInfo magicBoxTitle */
                magicBoxTitle?: (string|null);

                /** OrderBoxInfo magicBoxImage */
                magicBoxImage?: (string|null);
            }

            /** Represents an OrderBoxInfo. */
            class OrderBoxInfo implements IOrderBoxInfo {

                /**
                 * Constructs a new OrderBoxInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IOrderBoxInfo);

                /** OrderBoxInfo magicBoxID. */
                public magicBoxID: (number|Long);

                /** OrderBoxInfo magicBoxTitle. */
                public magicBoxTitle: string;

                /** OrderBoxInfo magicBoxImage. */
                public magicBoxImage: string;

                /**
                 * Creates a new OrderBoxInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderBoxInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IOrderBoxInfo): App.Order.OrInfo.OrderBoxInfo;

                /**
                 * Encodes the specified OrderBoxInfo message. Does not implicitly {@link App.Order.OrInfo.OrderBoxInfo.verify|verify} messages.
                 * @param message OrderBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IOrderBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderBoxInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.OrderBoxInfo.verify|verify} messages.
                 * @param message OrderBoxInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IOrderBoxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderBoxInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.OrderBoxInfo;

                /**
                 * Decodes an OrderBoxInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderBoxInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.OrderBoxInfo;

                /**
                 * Verifies an OrderBoxInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderBoxInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderBoxInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.OrderBoxInfo;

                /**
                 * Creates a plain object from an OrderBoxInfo message. Also converts values to other types if specified.
                 * @param message OrderBoxInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.OrderBoxInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderBoxInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderPriceInfo. */
            interface IOrderPriceInfo {

                /** OrderPriceInfo paymentCurrencyCode */
                paymentCurrencyCode?: (string|null);

                /** OrderPriceInfo paymentCurrencyPrice */
                paymentCurrencyPrice?: (number|Long|null);

                /** OrderPriceInfo taxPrice */
                taxPrice?: (number|Long|null);

                /** OrderPriceInfo shippingPrice */
                shippingPrice?: (number|Long|null);

                /** OrderPriceInfo paymentTotalPrice */
                paymentTotalPrice?: (number|Long|null);

                /** OrderPriceInfo totalDiscountPrice */
                totalDiscountPrice?: (number|Long|null);

                /** OrderPriceInfo systemCurrencyPrice */
                systemCurrencyPrice?: (number|Long|null);
            }

            /** Represents an OrderPriceInfo. */
            class OrderPriceInfo implements IOrderPriceInfo {

                /**
                 * Constructs a new OrderPriceInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IOrderPriceInfo);

                /** OrderPriceInfo paymentCurrencyCode. */
                public paymentCurrencyCode: string;

                /** OrderPriceInfo paymentCurrencyPrice. */
                public paymentCurrencyPrice: (number|Long);

                /** OrderPriceInfo taxPrice. */
                public taxPrice: (number|Long);

                /** OrderPriceInfo shippingPrice. */
                public shippingPrice: (number|Long);

                /** OrderPriceInfo paymentTotalPrice. */
                public paymentTotalPrice: (number|Long);

                /** OrderPriceInfo totalDiscountPrice. */
                public totalDiscountPrice: (number|Long);

                /** OrderPriceInfo systemCurrencyPrice. */
                public systemCurrencyPrice: (number|Long);

                /**
                 * Creates a new OrderPriceInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderPriceInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IOrderPriceInfo): App.Order.OrInfo.OrderPriceInfo;

                /**
                 * Encodes the specified OrderPriceInfo message. Does not implicitly {@link App.Order.OrInfo.OrderPriceInfo.verify|verify} messages.
                 * @param message OrderPriceInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IOrderPriceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderPriceInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.OrderPriceInfo.verify|verify} messages.
                 * @param message OrderPriceInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IOrderPriceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderPriceInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderPriceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.OrderPriceInfo;

                /**
                 * Decodes an OrderPriceInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderPriceInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.OrderPriceInfo;

                /**
                 * Verifies an OrderPriceInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderPriceInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderPriceInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.OrderPriceInfo;

                /**
                 * Creates a plain object from an OrderPriceInfo message. Also converts values to other types if specified.
                 * @param message OrderPriceInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.OrderPriceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderPriceInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RefundOrderInfo. */
            interface IRefundOrderInfo {

                /** RefundOrderInfo orderNo */
                orderNo?: (string|null);

                /** RefundOrderInfo refundNo */
                refundNo?: (string|null);

                /** RefundOrderInfo refundType */
                refundType?: (number|null);

                /** RefundOrderInfo refundStatus */
                refundStatus?: (number|null);

                /** RefundOrderInfo refundCurrencyPrice */
                refundCurrencyPrice?: (number|Long|null);

                /** RefundOrderInfo paymentDetail */
                paymentDetail?: (App.Order.OrInfo.IPaymentDetail|null);

                /** RefundOrderInfo refundOrderItemList */
                refundOrderItemList?: (App.Order.OrInfo.IRefundOrderItemInfo[]|null);

                /** RefundOrderInfo createTime */
                createTime?: (number|Long|null);

                /** RefundOrderInfo reviewerTime */
                reviewerTime?: (number|Long|null);

                /** RefundOrderInfo refundSuccessTime */
                refundSuccessTime?: (number|Long|null);

                /** RefundOrderInfo refundProcessInfo */
                refundProcessInfo?: (App.Order.OrInfo.IRefundProcessInfo[]|null);

                /** RefundOrderInfo refundHkc */
                refundHkc?: (number|Long|null);
            }

            /** Represents a RefundOrderInfo. */
            class RefundOrderInfo implements IRefundOrderInfo {

                /**
                 * Constructs a new RefundOrderInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IRefundOrderInfo);

                /** RefundOrderInfo orderNo. */
                public orderNo: string;

                /** RefundOrderInfo refundNo. */
                public refundNo: string;

                /** RefundOrderInfo refundType. */
                public refundType: number;

                /** RefundOrderInfo refundStatus. */
                public refundStatus: number;

                /** RefundOrderInfo refundCurrencyPrice. */
                public refundCurrencyPrice: (number|Long);

                /** RefundOrderInfo paymentDetail. */
                public paymentDetail?: (App.Order.OrInfo.IPaymentDetail|null);

                /** RefundOrderInfo refundOrderItemList. */
                public refundOrderItemList: App.Order.OrInfo.IRefundOrderItemInfo[];

                /** RefundOrderInfo createTime. */
                public createTime: (number|Long);

                /** RefundOrderInfo reviewerTime. */
                public reviewerTime: (number|Long);

                /** RefundOrderInfo refundSuccessTime. */
                public refundSuccessTime: (number|Long);

                /** RefundOrderInfo refundProcessInfo. */
                public refundProcessInfo: App.Order.OrInfo.IRefundProcessInfo[];

                /** RefundOrderInfo refundHkc. */
                public refundHkc: (number|Long);

                /**
                 * Creates a new RefundOrderInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RefundOrderInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IRefundOrderInfo): App.Order.OrInfo.RefundOrderInfo;

                /**
                 * Encodes the specified RefundOrderInfo message. Does not implicitly {@link App.Order.OrInfo.RefundOrderInfo.verify|verify} messages.
                 * @param message RefundOrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IRefundOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RefundOrderInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.RefundOrderInfo.verify|verify} messages.
                 * @param message RefundOrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IRefundOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RefundOrderInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RefundOrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.RefundOrderInfo;

                /**
                 * Decodes a RefundOrderInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RefundOrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.RefundOrderInfo;

                /**
                 * Verifies a RefundOrderInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RefundOrderInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RefundOrderInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.RefundOrderInfo;

                /**
                 * Creates a plain object from a RefundOrderInfo message. Also converts values to other types if specified.
                 * @param message RefundOrderInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.RefundOrderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RefundOrderInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RefundOrderItemInfo. */
            interface IRefundOrderItemInfo {

                /** RefundOrderItemInfo skuId */
                skuId?: (number|Long|null);

                /** RefundOrderItemInfo productName */
                productName?: (string|null);

                /** RefundOrderItemInfo skuPhoto */
                skuPhoto?: (string|null);

                /** RefundOrderItemInfo refundQuantity */
                refundQuantity?: (number|null);

                /** RefundOrderItemInfo refundPrice */
                refundPrice?: (number|Long|null);

                /** RefundOrderItemInfo optionFormat */
                optionFormat?: (string|null);
            }

            /** Represents a RefundOrderItemInfo. */
            class RefundOrderItemInfo implements IRefundOrderItemInfo {

                /**
                 * Constructs a new RefundOrderItemInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IRefundOrderItemInfo);

                /** RefundOrderItemInfo skuId. */
                public skuId: (number|Long);

                /** RefundOrderItemInfo productName. */
                public productName: string;

                /** RefundOrderItemInfo skuPhoto. */
                public skuPhoto: string;

                /** RefundOrderItemInfo refundQuantity. */
                public refundQuantity: number;

                /** RefundOrderItemInfo refundPrice. */
                public refundPrice: (number|Long);

                /** RefundOrderItemInfo optionFormat. */
                public optionFormat: string;

                /**
                 * Creates a new RefundOrderItemInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RefundOrderItemInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IRefundOrderItemInfo): App.Order.OrInfo.RefundOrderItemInfo;

                /**
                 * Encodes the specified RefundOrderItemInfo message. Does not implicitly {@link App.Order.OrInfo.RefundOrderItemInfo.verify|verify} messages.
                 * @param message RefundOrderItemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IRefundOrderItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RefundOrderItemInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.RefundOrderItemInfo.verify|verify} messages.
                 * @param message RefundOrderItemInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IRefundOrderItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RefundOrderItemInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RefundOrderItemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.RefundOrderItemInfo;

                /**
                 * Decodes a RefundOrderItemInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RefundOrderItemInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.RefundOrderItemInfo;

                /**
                 * Verifies a RefundOrderItemInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RefundOrderItemInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RefundOrderItemInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.RefundOrderItemInfo;

                /**
                 * Creates a plain object from a RefundOrderItemInfo message. Also converts values to other types if specified.
                 * @param message RefundOrderItemInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.RefundOrderItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RefundOrderItemInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RefundProcessInfo. */
            interface IRefundProcessInfo {

                /** RefundProcessInfo processType */
                processType?: (number|null);

                /** RefundProcessInfo processTime */
                processTime?: (number|Long|null);

                /** RefundProcessInfo isCurrent */
                isCurrent?: (boolean|null);
            }

            /** Represents a RefundProcessInfo. */
            class RefundProcessInfo implements IRefundProcessInfo {

                /**
                 * Constructs a new RefundProcessInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IRefundProcessInfo);

                /** RefundProcessInfo processType. */
                public processType: number;

                /** RefundProcessInfo processTime. */
                public processTime: (number|Long);

                /** RefundProcessInfo isCurrent. */
                public isCurrent: boolean;

                /**
                 * Creates a new RefundProcessInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RefundProcessInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IRefundProcessInfo): App.Order.OrInfo.RefundProcessInfo;

                /**
                 * Encodes the specified RefundProcessInfo message. Does not implicitly {@link App.Order.OrInfo.RefundProcessInfo.verify|verify} messages.
                 * @param message RefundProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IRefundProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RefundProcessInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.RefundProcessInfo.verify|verify} messages.
                 * @param message RefundProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IRefundProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RefundProcessInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RefundProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.RefundProcessInfo;

                /**
                 * Decodes a RefundProcessInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RefundProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.RefundProcessInfo;

                /**
                 * Verifies a RefundProcessInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RefundProcessInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RefundProcessInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.RefundProcessInfo;

                /**
                 * Creates a plain object from a RefundProcessInfo message. Also converts values to other types if specified.
                 * @param message RefundProcessInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.RefundProcessInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RefundProcessInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReportAddressInfo. */
            interface IReportAddressInfo {

                /** ReportAddressInfo countryCode */
                countryCode?: (string|null);

                /** ReportAddressInfo province */
                province?: (string|null);

                /** ReportAddressInfo city */
                city?: (string|null);

                /** ReportAddressInfo zoneCode */
                zoneCode?: (string|null);

                /** ReportAddressInfo phone */
                phone?: (string|null);

                /** ReportAddressInfo address1 */
                address1?: (string|null);

                /** ReportAddressInfo address2 */
                address2?: (string|null);

                /** ReportAddressInfo zipCode */
                zipCode?: (string|null);

                /** ReportAddressInfo fullName */
                fullName?: (string|null);
            }

            /** Represents a ReportAddressInfo. */
            class ReportAddressInfo implements IReportAddressInfo {

                /**
                 * Constructs a new ReportAddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrInfo.IReportAddressInfo);

                /** ReportAddressInfo countryCode. */
                public countryCode: string;

                /** ReportAddressInfo province. */
                public province: string;

                /** ReportAddressInfo city. */
                public city: string;

                /** ReportAddressInfo zoneCode. */
                public zoneCode: string;

                /** ReportAddressInfo phone. */
                public phone: string;

                /** ReportAddressInfo address1. */
                public address1: string;

                /** ReportAddressInfo address2. */
                public address2: string;

                /** ReportAddressInfo zipCode. */
                public zipCode: string;

                /** ReportAddressInfo fullName. */
                public fullName: string;

                /**
                 * Creates a new ReportAddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReportAddressInfo instance
                 */
                public static create(properties?: App.Order.OrInfo.IReportAddressInfo): App.Order.OrInfo.ReportAddressInfo;

                /**
                 * Encodes the specified ReportAddressInfo message. Does not implicitly {@link App.Order.OrInfo.ReportAddressInfo.verify|verify} messages.
                 * @param message ReportAddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrInfo.IReportAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReportAddressInfo message, length delimited. Does not implicitly {@link App.Order.OrInfo.ReportAddressInfo.verify|verify} messages.
                 * @param message ReportAddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrInfo.IReportAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReportAddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReportAddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrInfo.ReportAddressInfo;

                /**
                 * Decodes a ReportAddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReportAddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrInfo.ReportAddressInfo;

                /**
                 * Verifies a ReportAddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReportAddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReportAddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrInfo.ReportAddressInfo;

                /**
                 * Creates a plain object from a ReportAddressInfo message. Also converts values to other types if specified.
                 * @param message ReportAddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrInfo.ReportAddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReportAddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace BuyAgain. */
        namespace BuyAgain {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.BuyAgain.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.BuyAgain.IRequest): App.Order.BuyAgain.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.BuyAgain.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.BuyAgain.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.BuyAgain.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.BuyAgain.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.BuyAgain.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.BuyAgain.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.BuyAgain.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.BuyAgain.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response cartSkuNum */
                cartSkuNum?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.BuyAgain.IResponse);

                /** Response cartSkuNum. */
                public cartSkuNum: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.BuyAgain.IResponse): App.Order.BuyAgain.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.BuyAgain.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.BuyAgain.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.BuyAgain.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.BuyAgain.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.BuyAgain.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.BuyAgain.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.BuyAgain.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.BuyAgain.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CancelPayOrder. */
        namespace CancelPayOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);

                /** Request payOrderNo */
                payOrderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CancelPayOrder.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /** Request payOrderNo. */
                public payOrderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.CancelPayOrder.IRequest): App.Order.CancelPayOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.CancelPayOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CancelPayOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.CancelPayOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CancelPayOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CancelPayOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CancelPayOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CancelPayOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CancelPayOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Order.CancelPayOrder.IResponse);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.CancelPayOrder.IResponse): App.Order.CancelPayOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.CancelPayOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CancelPayOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.CancelPayOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CancelPayOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CancelPayOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CancelPayOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CancelPayOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CancelPayOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ConfirmOrderPlaceOrder. */
        namespace ConfirmOrderPlaceOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);

                /** Request shippingMethodId */
                shippingMethodId?: (number|null);

                /** Request paymentMethodId */
                paymentMethodId?: (number|null);

                /** Request couponCode */
                couponCode?: (string|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request version */
                version?: (number|null);

                /** Request signStr */
                signStr?: (string|null);

                /** Request path */
                path?: (string|null);

                /** Request timestamp */
                timestamp?: (number|Long|null);

                /** Request specialOfferId */
                specialOfferId?: (number|Long|null);

                /** Request specialOfferLadderId */
                specialOfferLadderId?: (number|Long|null);

                /** Request platform */
                platform?: (number|null);

                /** Request preFlowNo */
                preFlowNo?: (string|null);

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
                constructor(properties?: App.Order.ConfirmOrderPlaceOrder.IRequest);

                /** Request source. */
                public source: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /** Request shippingMethodId. */
                public shippingMethodId: number;

                /** Request paymentMethodId. */
                public paymentMethodId: number;

                /** Request couponCode. */
                public couponCode: string;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request version. */
                public version: number;

                /** Request signStr. */
                public signStr: string;

                /** Request path. */
                public path: string;

                /** Request timestamp. */
                public timestamp: (number|Long);

                /** Request specialOfferId. */
                public specialOfferId: (number|Long);

                /** Request specialOfferLadderId. */
                public specialOfferLadderId: (number|Long);

                /** Request platform. */
                public platform: number;

                /** Request preFlowNo. */
                public preFlowNo: string;

                /** Request recaptchaToken. */
                public recaptchaToken: string;

                /** Request recaptchaAction. */
                public recaptchaAction: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.ConfirmOrderPlaceOrder.IRequest): App.Order.ConfirmOrderPlaceOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderPlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderPlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderPlaceOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderPlaceOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderPlaceOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderPlaceOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response invalidSkuList */
                invalidSkuList?: (App.Order.ConfirmOrderPlaceOrder.ISkuInfo[]|null);

                /** Response status */
                status?: (number|null);

                /** Response orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderPlaceOrder.IResponse);

                /** Response invalidSkuList. */
                public invalidSkuList: App.Order.ConfirmOrderPlaceOrder.ISkuInfo[];

                /** Response status. */
                public status: number;

                /** Response orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.ConfirmOrderPlaceOrder.IResponse): App.Order.ConfirmOrderPlaceOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderPlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderPlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderPlaceOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderPlaceOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderPlaceOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderPlaceOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** SkuInfo handle */
                handle?: (string|null);
            }

            /** Represents a SkuInfo. */
            class SkuInfo implements ISkuInfo {

                /**
                 * Constructs a new SkuInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderPlaceOrder.ISkuInfo);

                /** SkuInfo productId. */
                public productId: (number|Long);

                /** SkuInfo spuId. */
                public spuId: (number|Long);

                /** SkuInfo saleSkuId. */
                public saleSkuId: (number|Long);

                /** SkuInfo proName. */
                public proName: string;

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

                /** SkuInfo handle. */
                public handle: string;

                /**
                 * Creates a new SkuInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SkuInfo instance
                 */
                public static create(properties?: App.Order.ConfirmOrderPlaceOrder.ISkuInfo): App.Order.ConfirmOrderPlaceOrder.SkuInfo;

                /**
                 * Encodes the specified SkuInfo message. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderPlaceOrder.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SkuInfo message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderPlaceOrder.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderPlaceOrder.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderPlaceOrder.SkuInfo;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderPlaceOrder.SkuInfo;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderPlaceOrder.SkuInfo;

                /**
                 * Creates a plain object from a SkuInfo message. Also converts values to other types if specified.
                 * @param message SkuInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderPlaceOrder.SkuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SkuInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ConfirmOrderQuery. */
        namespace ConfirmOrderQuery {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);

                /** Request shippingMethodId */
                shippingMethodId?: (number|null);

                /** Request paymentMethodId */
                paymentMethodId?: (number|null);

                /** Request couponCode */
                couponCode?: (string|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request specialOfferId */
                specialOfferId?: (number|Long|null);

                /** Request specialOfferLadderId */
                specialOfferLadderId?: (number|Long|null);

                /** Request joinSpecialOfferFlag */
                joinSpecialOfferFlag?: (number|null);

                /** Request autoSelectCouponCodeFlag */
                autoSelectCouponCodeFlag?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IRequest);

                /** Request source. */
                public source: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /** Request shippingMethodId. */
                public shippingMethodId: number;

                /** Request paymentMethodId. */
                public paymentMethodId: number;

                /** Request couponCode. */
                public couponCode: string;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request specialOfferId. */
                public specialOfferId: (number|Long);

                /** Request specialOfferLadderId. */
                public specialOfferLadderId: (number|Long);

                /** Request joinSpecialOfferFlag. */
                public joinSpecialOfferFlag: number;

                /** Request autoSelectCouponCodeFlag. */
                public autoSelectCouponCodeFlag: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IRequest): App.Order.ConfirmOrderQuery.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.ConfirmOrderQuery.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response address */
                address?: (App.Order.ConfirmOrderQuery.IAddressInfo|null);

                /** Response skuList */
                skuList?: (App.Order.ConfirmOrderQuery.ISkuInfo[]|null);

                /** Response couponCode */
                couponCode?: (App.Order.ConfirmOrderQuery.ICouponCode|null);

                /** Response hkcInfo */
                hkcInfo?: (App.Order.ConfirmOrderQuery.IHkcDetail|null);

                /** Response amount */
                amount?: (App.Order.ConfirmOrderQuery.IAmount|null);

                /** Response usdAmount */
                usdAmount?: (App.Order.ConfirmOrderQuery.IAmount|null);

                /** Response notShippingSkuList */
                notShippingSkuList?: (App.Order.ConfirmOrderQuery.ISkuInfo[]|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Order.ConfirmOrderQuery.ISpecialOffer|null);

                /** Response scribeShippingAmount */
                scribeShippingAmount?: (number|Long|null);

                /** Response discountNotUseReason */
                discountNotUseReason?: (number|null);

                /** Response couponCodeNotReasonList */
                couponCodeNotReasonList?: (App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IResponse);

                /** Response address. */
                public address?: (App.Order.ConfirmOrderQuery.IAddressInfo|null);

                /** Response skuList. */
                public skuList: App.Order.ConfirmOrderQuery.ISkuInfo[];

                /** Response couponCode. */
                public couponCode?: (App.Order.ConfirmOrderQuery.ICouponCode|null);

                /** Response hkcInfo. */
                public hkcInfo?: (App.Order.ConfirmOrderQuery.IHkcDetail|null);

                /** Response amount. */
                public amount?: (App.Order.ConfirmOrderQuery.IAmount|null);

                /** Response usdAmount. */
                public usdAmount?: (App.Order.ConfirmOrderQuery.IAmount|null);

                /** Response notShippingSkuList. */
                public notShippingSkuList: App.Order.ConfirmOrderQuery.ISkuInfo[];

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Order.ConfirmOrderQuery.ISpecialOffer|null);

                /** Response scribeShippingAmount. */
                public scribeShippingAmount: (number|Long);

                /** Response discountNotUseReason. */
                public discountNotUseReason: number;

                /** Response couponCodeNotReasonList. */
                public couponCodeNotReasonList: App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IResponse): App.Order.ConfirmOrderQuery.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.ConfirmOrderQuery.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** SkuInfo usdSalePrice */
                usdSalePrice?: (number|Long|null);

                /** SkuInfo path */
                path?: (string|null);

                /** SkuInfo invalidFlag */
                invalidFlag?: (boolean|null);

                /** SkuInfo handle */
                handle?: (string|null);

                /** SkuInfo firstCategoryId */
                firstCategoryId?: (number|Long|null);

                /** SkuInfo enFirstCategoryName */
                enFirstCategoryName?: (string|null);

                /** SkuInfo secondCategoryId */
                secondCategoryId?: (number|Long|null);

                /** SkuInfo enSecondCategoryName */
                enSecondCategoryName?: (string|null);

                /** SkuInfo thirdCategoryId */
                thirdCategoryId?: (number|Long|null);

                /** SkuInfo enThirdCategoryName */
                enThirdCategoryName?: (string|null);

                /** SkuInfo flashSaleId */
                flashSaleId?: (number|Long|null);
            }

            /** Represents a SkuInfo. */
            class SkuInfo implements ISkuInfo {

                /**
                 * Constructs a new SkuInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.ISkuInfo);

                /** SkuInfo productId. */
                public productId: (number|Long);

                /** SkuInfo spuId. */
                public spuId: (number|Long);

                /** SkuInfo saleSkuId. */
                public saleSkuId: (number|Long);

                /** SkuInfo proName. */
                public proName: string;

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

                /** SkuInfo usdSalePrice. */
                public usdSalePrice: (number|Long);

                /** SkuInfo path. */
                public path: string;

                /** SkuInfo invalidFlag. */
                public invalidFlag: boolean;

                /** SkuInfo handle. */
                public handle: string;

                /** SkuInfo firstCategoryId. */
                public firstCategoryId: (number|Long);

                /** SkuInfo enFirstCategoryName. */
                public enFirstCategoryName: string;

                /** SkuInfo secondCategoryId. */
                public secondCategoryId: (number|Long);

                /** SkuInfo enSecondCategoryName. */
                public enSecondCategoryName: string;

                /** SkuInfo thirdCategoryId. */
                public thirdCategoryId: (number|Long);

                /** SkuInfo enThirdCategoryName. */
                public enThirdCategoryName: string;

                /** SkuInfo flashSaleId. */
                public flashSaleId: (number|Long);

                /**
                 * Creates a new SkuInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SkuInfo instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.ISkuInfo): App.Order.ConfirmOrderQuery.SkuInfo;

                /**
                 * Encodes the specified SkuInfo message. Does not implicitly {@link App.Order.ConfirmOrderQuery.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SkuInfo message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.SkuInfo.verify|verify} messages.
                 * @param message SkuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.ISkuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.SkuInfo;

                /**
                 * Decodes a SkuInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SkuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.SkuInfo;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.SkuInfo;

                /**
                 * Creates a plain object from a SkuInfo message. Also converts values to other types if specified.
                 * @param message SkuInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.SkuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SkuInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddressInfo. */
            interface IAddressInfo {

                /** AddressInfo id */
                id?: (number|Long|null);

                /** AddressInfo countryCode */
                countryCode?: (string|null);

                /** AddressInfo province */
                province?: (string|null);

                /** AddressInfo city */
                city?: (string|null);

                /** AddressInfo zoneCode */
                zoneCode?: (string|null);

                /** AddressInfo phone */
                phone?: (string|null);

                /** AddressInfo address1 */
                address1?: (string|null);

                /** AddressInfo address2 */
                address2?: (string|null);

                /** AddressInfo isDefault */
                isDefault?: (number|null);

                /** AddressInfo zipCode */
                zipCode?: (string|null);

                /** AddressInfo userId */
                userId?: (number|Long|null);

                /** AddressInfo fullName */
                fullName?: (string|null);

                /** AddressInfo isEnable */
                isEnable?: (number|null);

                /** AddressInfo taxNum */
                taxNum?: (string|null);

                /** AddressInfo taxType */
                taxType?: (number|null);
            }

            /** Represents an AddressInfo. */
            class AddressInfo implements IAddressInfo {

                /**
                 * Constructs a new AddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IAddressInfo);

                /** AddressInfo id. */
                public id: (number|Long);

                /** AddressInfo countryCode. */
                public countryCode: string;

                /** AddressInfo province. */
                public province: string;

                /** AddressInfo city. */
                public city: string;

                /** AddressInfo zoneCode. */
                public zoneCode: string;

                /** AddressInfo phone. */
                public phone: string;

                /** AddressInfo address1. */
                public address1: string;

                /** AddressInfo address2. */
                public address2: string;

                /** AddressInfo isDefault. */
                public isDefault: number;

                /** AddressInfo zipCode. */
                public zipCode: string;

                /** AddressInfo userId. */
                public userId: (number|Long);

                /** AddressInfo fullName. */
                public fullName: string;

                /** AddressInfo isEnable. */
                public isEnable: number;

                /** AddressInfo taxNum. */
                public taxNum: string;

                /** AddressInfo taxType. */
                public taxType: number;

                /**
                 * Creates a new AddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddressInfo instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IAddressInfo): App.Order.ConfirmOrderQuery.AddressInfo;

                /**
                 * Encodes the specified AddressInfo message. Does not implicitly {@link App.Order.ConfirmOrderQuery.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.AddressInfo;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.AddressInfo;

                /**
                 * Verifies an AddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.AddressInfo;

                /**
                 * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                 * @param message AddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CouponCode. */
            interface ICouponCode {

                /** CouponCode useCouponCodeFlag */
                useCouponCodeFlag?: (boolean|null);

                /** CouponCode availableCouponCodeCount */
                availableCouponCodeCount?: (number|null);

                /** CouponCode couponCodeId */
                couponCodeId?: (number|Long|null);

                /** CouponCode couponCode */
                couponCode?: (string|null);

                /** CouponCode currencyAmount */
                currencyAmount?: (number|Long|null);

                /** CouponCode rejectHkcFlag */
                rejectHkcFlag?: (boolean|null);
            }

            /** Represents a CouponCode. */
            class CouponCode implements ICouponCode {

                /**
                 * Constructs a new CouponCode.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.ICouponCode);

                /** CouponCode useCouponCodeFlag. */
                public useCouponCodeFlag: boolean;

                /** CouponCode availableCouponCodeCount. */
                public availableCouponCodeCount: number;

                /** CouponCode couponCodeId. */
                public couponCodeId: (number|Long);

                /** CouponCode couponCode. */
                public couponCode: string;

                /** CouponCode currencyAmount. */
                public currencyAmount: (number|Long);

                /** CouponCode rejectHkcFlag. */
                public rejectHkcFlag: boolean;

                /**
                 * Creates a new CouponCode instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CouponCode instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.ICouponCode): App.Order.ConfirmOrderQuery.CouponCode;

                /**
                 * Encodes the specified CouponCode message. Does not implicitly {@link App.Order.ConfirmOrderQuery.CouponCode.verify|verify} messages.
                 * @param message CouponCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.ICouponCode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CouponCode message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.CouponCode.verify|verify} messages.
                 * @param message CouponCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.ICouponCode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CouponCode message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CouponCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.CouponCode;

                /**
                 * Decodes a CouponCode message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CouponCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.CouponCode;

                /**
                 * Verifies a CouponCode message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CouponCode message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CouponCode
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.CouponCode;

                /**
                 * Creates a plain object from a CouponCode message. Also converts values to other types if specified.
                 * @param message CouponCode
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.CouponCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CouponCode to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HkcDetail. */
            interface IHkcDetail {

                /** HkcDetail currency */
                currency?: (string|null);

                /** HkcDetail amount */
                amount?: (number|Long|null);

                /** HkcDetail exchangeNum */
                exchangeNum?: (string|null);

                /** HkcDetail deductibleHkcList */
                deductibleHkcList?: (App.Order.ConfirmOrderQuery.IHkcRatio[]|null);

                /** HkcDetail canUseFlag */
                canUseFlag?: (boolean|null);

                /** HkcDetail notUseReasonType */
                notUseReasonType?: (number|null);
            }

            /** Represents a HkcDetail. */
            class HkcDetail implements IHkcDetail {

                /**
                 * Constructs a new HkcDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IHkcDetail);

                /** HkcDetail currency. */
                public currency: string;

                /** HkcDetail amount. */
                public amount: (number|Long);

                /** HkcDetail exchangeNum. */
                public exchangeNum: string;

                /** HkcDetail deductibleHkcList. */
                public deductibleHkcList: App.Order.ConfirmOrderQuery.IHkcRatio[];

                /** HkcDetail canUseFlag. */
                public canUseFlag: boolean;

                /** HkcDetail notUseReasonType. */
                public notUseReasonType: number;

                /**
                 * Creates a new HkcDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HkcDetail instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IHkcDetail): App.Order.ConfirmOrderQuery.HkcDetail;

                /**
                 * Encodes the specified HkcDetail message. Does not implicitly {@link App.Order.ConfirmOrderQuery.HkcDetail.verify|verify} messages.
                 * @param message HkcDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IHkcDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HkcDetail message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.HkcDetail.verify|verify} messages.
                 * @param message HkcDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IHkcDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HkcDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HkcDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.HkcDetail;

                /**
                 * Decodes a HkcDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HkcDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.HkcDetail;

                /**
                 * Verifies a HkcDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HkcDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HkcDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.HkcDetail;

                /**
                 * Creates a plain object from a HkcDetail message. Also converts values to other types if specified.
                 * @param message HkcDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.HkcDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HkcDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HkcRatio. */
            interface IHkcRatio {

                /** HkcRatio hkcRatio */
                hkcRatio?: (number|null);

                /** HkcRatio amount */
                amount?: (number|Long|null);

                /** HkcRatio discountCurrencyAmount */
                discountCurrencyAmount?: (number|Long|null);
            }

            /** Represents a HkcRatio. */
            class HkcRatio implements IHkcRatio {

                /**
                 * Constructs a new HkcRatio.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IHkcRatio);

                /** HkcRatio hkcRatio. */
                public hkcRatio: number;

                /** HkcRatio amount. */
                public amount: (number|Long);

                /** HkcRatio discountCurrencyAmount. */
                public discountCurrencyAmount: (number|Long);

                /**
                 * Creates a new HkcRatio instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HkcRatio instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IHkcRatio): App.Order.ConfirmOrderQuery.HkcRatio;

                /**
                 * Encodes the specified HkcRatio message. Does not implicitly {@link App.Order.ConfirmOrderQuery.HkcRatio.verify|verify} messages.
                 * @param message HkcRatio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IHkcRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HkcRatio message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.HkcRatio.verify|verify} messages.
                 * @param message HkcRatio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IHkcRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HkcRatio message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HkcRatio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.HkcRatio;

                /**
                 * Decodes a HkcRatio message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HkcRatio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.HkcRatio;

                /**
                 * Verifies a HkcRatio message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HkcRatio message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HkcRatio
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.HkcRatio;

                /**
                 * Creates a plain object from a HkcRatio message. Also converts values to other types if specified.
                 * @param message HkcRatio
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.HkcRatio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HkcRatio to JSON.
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

                /** Amount shipping */
                shipping?: (number|Long|null);

                /** Amount hkc */
                hkc?: (number|Long|null);

                /** Amount total */
                total?: (number|Long|null);

                /** Amount specialOfferDiscountPrice */
                specialOfferDiscountPrice?: (number|Long|null);

                /** Amount couponCodeDiscountPrice */
                couponCodeDiscountPrice?: (number|Long|null);

                /** Amount ownSpecialOfferDiscountPrice */
                ownSpecialOfferDiscountPrice?: (number|Long|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.IAmount);

                /** Amount subtotal. */
                public subtotal: (number|Long);

                /** Amount discount. */
                public discount: (number|Long);

                /** Amount shipping. */
                public shipping: (number|Long);

                /** Amount hkc. */
                public hkc: (number|Long);

                /** Amount total. */
                public total: (number|Long);

                /** Amount specialOfferDiscountPrice. */
                public specialOfferDiscountPrice: (number|Long);

                /** Amount couponCodeDiscountPrice. */
                public couponCodeDiscountPrice: (number|Long);

                /** Amount ownSpecialOfferDiscountPrice. */
                public ownSpecialOfferDiscountPrice: (number|Long);

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.IAmount): App.Order.ConfirmOrderQuery.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link App.Order.ConfirmOrderQuery.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Amount message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.Amount;

                /**
                 * Decodes an Amount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.Amount;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.Amount;

                /**
                 * Creates a plain object from an Amount message. Also converts values to other types if specified.
                 * @param message Amount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.Amount, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** SpecialOffer ladderId */
                ladderId?: (number|Long|null);

                /** SpecialOffer quantityThreshold */
                quantityThreshold?: (number|null);

                /** SpecialOffer priceThreshold */
                priceThreshold?: (number|Long|null);

                /** SpecialOffer discountRate */
                discountRate?: (number|null);

                /** SpecialOffer discountPrice */
                discountPrice?: (number|Long|null);

                /** SpecialOffer canUseFlag */
                canUseFlag?: (boolean|null);

                /** SpecialOffer excludeIdList */
                excludeIdList?: (number[]|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer type. */
                public type: number;

                /** SpecialOffer ladderId. */
                public ladderId: (number|Long);

                /** SpecialOffer quantityThreshold. */
                public quantityThreshold: number;

                /** SpecialOffer priceThreshold. */
                public priceThreshold: (number|Long);

                /** SpecialOffer discountRate. */
                public discountRate: number;

                /** SpecialOffer discountPrice. */
                public discountPrice: (number|Long);

                /** SpecialOffer canUseFlag. */
                public canUseFlag: boolean;

                /** SpecialOffer excludeIdList. */
                public excludeIdList: number[];

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.ISpecialOffer): App.Order.ConfirmOrderQuery.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.Order.ConfirmOrderQuery.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.SpecialOffer;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CouponCodeNotUseReason. */
            interface ICouponCodeNotUseReason {

                /** CouponCodeNotUseReason notUseReasonType */
                notUseReasonType?: (number|null);

                /** CouponCodeNotUseReason diffQuantity */
                diffQuantity?: (number|null);

                /** CouponCodeNotUseReason diffPrice */
                diffPrice?: (number|Long|null);
            }

            /** Represents a CouponCodeNotUseReason. */
            class CouponCodeNotUseReason implements ICouponCodeNotUseReason {

                /**
                 * Constructs a new CouponCodeNotUseReason.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason);

                /** CouponCodeNotUseReason notUseReasonType. */
                public notUseReasonType: number;

                /** CouponCodeNotUseReason diffQuantity. */
                public diffQuantity: number;

                /** CouponCodeNotUseReason diffPrice. */
                public diffPrice: (number|Long);

                /**
                 * Creates a new CouponCodeNotUseReason instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CouponCodeNotUseReason instance
                 */
                public static create(properties?: App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason): App.Order.ConfirmOrderQuery.CouponCodeNotUseReason;

                /**
                 * Encodes the specified CouponCodeNotUseReason message. Does not implicitly {@link App.Order.ConfirmOrderQuery.CouponCodeNotUseReason.verify|verify} messages.
                 * @param message CouponCodeNotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CouponCodeNotUseReason message, length delimited. Does not implicitly {@link App.Order.ConfirmOrderQuery.CouponCodeNotUseReason.verify|verify} messages.
                 * @param message CouponCodeNotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ConfirmOrderQuery.ICouponCodeNotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CouponCodeNotUseReason message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CouponCodeNotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ConfirmOrderQuery.CouponCodeNotUseReason;

                /**
                 * Decodes a CouponCodeNotUseReason message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CouponCodeNotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ConfirmOrderQuery.CouponCodeNotUseReason;

                /**
                 * Verifies a CouponCodeNotUseReason message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CouponCodeNotUseReason message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CouponCodeNotUseReason
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ConfirmOrderQuery.CouponCodeNotUseReason;

                /**
                 * Creates a plain object from a CouponCodeNotUseReason message. Also converts values to other types if specified.
                 * @param message CouponCodeNotUseReason
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ConfirmOrderQuery.CouponCodeNotUseReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CouponCodeNotUseReason to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeApply. */
        namespace CouponCodeApply {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request couponCode */
                couponCode?: (string|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeApply.IRequest);

                /** Request source. */
                public source: number;

                /** Request couponCode. */
                public couponCode: string;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.CouponCodeApply.IRequest): App.Order.CouponCodeApply.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.CouponCodeApply.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeApply.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.CouponCodeApply.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeApply.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeApply.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeApply.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeApply.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeApply.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response detail */
                detail?: (App.Order.CouponCodeDetail.IDetail|null);

                /** Response availableFlag */
                availableFlag?: (boolean|null);

                /** Response diffValue */
                diffValue?: (number|Long|null);

                /** Response restrictionRule */
                restrictionRule?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeApply.IResponse);

                /** Response detail. */
                public detail?: (App.Order.CouponCodeDetail.IDetail|null);

                /** Response availableFlag. */
                public availableFlag: boolean;

                /** Response diffValue. */
                public diffValue: (number|Long);

                /** Response restrictionRule. */
                public restrictionRule: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.CouponCodeApply.IResponse): App.Order.CouponCodeApply.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.CouponCodeApply.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeApply.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.CouponCodeApply.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeApply.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeApply.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeApply.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeApply.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeApply.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeDetail. */
        namespace CouponCodeDetail {

            /** Properties of a Detail. */
            interface IDetail {

                /** Detail codeType */
                codeType?: (number|null);

                /** Detail codeValue */
                codeValue?: (number|null);

                /** Detail restrictionRule */
                restrictionRule?: (number|null);

                /** Detail restrictionRuleValue */
                restrictionRuleValue?: (number|null);

                /** Detail code */
                code?: (string|null);

                /** Detail startTime */
                startTime?: (number|Long|null);

                /** Detail endTime */
                endTime?: (number|Long|null);

                /** Detail isNewUserCode */
                isNewUserCode?: (number|null);

                /** Detail availableFlag */
                availableFlag?: (boolean|null);

                /** Detail notAvailableCode */
                notAvailableCode?: (number|null);
            }

            /** Represents a Detail. */
            class Detail implements IDetail {

                /**
                 * Constructs a new Detail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeDetail.IDetail);

                /** Detail codeType. */
                public codeType: number;

                /** Detail codeValue. */
                public codeValue: number;

                /** Detail restrictionRule. */
                public restrictionRule: number;

                /** Detail restrictionRuleValue. */
                public restrictionRuleValue: number;

                /** Detail code. */
                public code: string;

                /** Detail startTime. */
                public startTime: (number|Long);

                /** Detail endTime. */
                public endTime: (number|Long);

                /** Detail isNewUserCode. */
                public isNewUserCode: number;

                /** Detail availableFlag. */
                public availableFlag: boolean;

                /** Detail notAvailableCode. */
                public notAvailableCode: number;

                /**
                 * Creates a new Detail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Detail instance
                 */
                public static create(properties?: App.Order.CouponCodeDetail.IDetail): App.Order.CouponCodeDetail.Detail;

                /**
                 * Encodes the specified Detail message. Does not implicitly {@link App.Order.CouponCodeDetail.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeDetail.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Detail message, length delimited. Does not implicitly {@link App.Order.CouponCodeDetail.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeDetail.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Detail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeDetail.Detail;

                /**
                 * Decodes a Detail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeDetail.Detail;

                /**
                 * Verifies a Detail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Detail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Detail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeDetail.Detail;

                /**
                 * Creates a plain object from a Detail message. Also converts values to other types if specified.
                 * @param message Detail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeDetail.Detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Detail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeList. */
        namespace CouponCodeList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request couponCodeList */
                couponCodeList?: (string[]|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeList.IRequest);

                /** Request source. */
                public source: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request couponCodeList. */
                public couponCodeList: string[];

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.CouponCodeList.IRequest): App.Order.CouponCodeList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.CouponCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.CouponCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response codeList */
                codeList?: (App.Order.CouponCodeDetail.IDetail[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeList.IResponse);

                /** Response codeList. */
                public codeList: App.Order.CouponCodeDetail.IDetail[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.CouponCodeList.IResponse): App.Order.CouponCodeList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.CouponCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.CouponCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeListFromOrderV2. */
        namespace CouponCodeListFromOrderV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request specialOfferId */
                specialOfferId?: (number|Long|null);

                /** Request specialOfferLadderId */
                specialOfferLadderId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV2.IRequest);

                /** Request source. */
                public source: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request specialOfferId. */
                public specialOfferId: (number|Long);

                /** Request specialOfferLadderId. */
                public specialOfferLadderId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV2.IRequest): App.Order.CouponCodeListFromOrderV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response availableList */
                availableList?: (App.Order.CouponCodeListFromOrderV2.ICodeInfo[]|null);

                /** Response notAvailableList */
                notAvailableList?: (App.Order.CouponCodeListFromOrderV2.ICodeInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV2.IResponse);

                /** Response availableList. */
                public availableList: App.Order.CouponCodeListFromOrderV2.ICodeInfo[];

                /** Response notAvailableList. */
                public notAvailableList: App.Order.CouponCodeListFromOrderV2.ICodeInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV2.IResponse): App.Order.CouponCodeListFromOrderV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
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

                /** CodeInfo desc */
                desc?: (string|null);

                /** CodeInfo claim */
                claim?: (number|null);

                /** CodeInfo isFirstOrder */
                isFirstOrder?: (number|null);

                /** CodeInfo noEndTime */
                noEndTime?: (number|null);

                /** CodeInfo dateSettingType */
                dateSettingType?: (number|null);

                /** CodeInfo duration */
                duration?: (number|null);

                /** CodeInfo accessChannel */
                accessChannel?: (number|null);

                /** CodeInfo codeId */
                codeId?: (number|Long|null);

                /** CodeInfo notUseReasonList */
                notUseReasonList?: (App.Order.CouponCodeListFromOrderV2.INotUseReason[]|null);
            }

            /** Represents a CodeInfo. */
            class CodeInfo implements ICodeInfo {

                /**
                 * Constructs a new CodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV2.ICodeInfo);

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

                /** CodeInfo desc. */
                public desc: string;

                /** CodeInfo claim. */
                public claim: number;

                /** CodeInfo isFirstOrder. */
                public isFirstOrder: number;

                /** CodeInfo noEndTime. */
                public noEndTime: number;

                /** CodeInfo dateSettingType. */
                public dateSettingType: number;

                /** CodeInfo duration. */
                public duration: number;

                /** CodeInfo accessChannel. */
                public accessChannel: number;

                /** CodeInfo codeId. */
                public codeId: (number|Long);

                /** CodeInfo notUseReasonList. */
                public notUseReasonList: App.Order.CouponCodeListFromOrderV2.INotUseReason[];

                /**
                 * Creates a new CodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CodeInfo instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV2.ICodeInfo): App.Order.CouponCodeListFromOrderV2.CodeInfo;

                /**
                 * Encodes the specified CodeInfo message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV2.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfo message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV2.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV2.CodeInfo;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV2.CodeInfo;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV2.CodeInfo;

                /**
                 * Creates a plain object from a CodeInfo message. Also converts values to other types if specified.
                 * @param message CodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV2.CodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotUseReason. */
            interface INotUseReason {

                /** NotUseReason notUseReasonType */
                notUseReasonType?: (number|null);

                /** NotUseReason diffQuantity */
                diffQuantity?: (number|null);

                /** NotUseReason diffPrice */
                diffPrice?: (number|Long|null);
            }

            /** Represents a NotUseReason. */
            class NotUseReason implements INotUseReason {

                /**
                 * Constructs a new NotUseReason.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV2.INotUseReason);

                /** NotUseReason notUseReasonType. */
                public notUseReasonType: number;

                /** NotUseReason diffQuantity. */
                public diffQuantity: number;

                /** NotUseReason diffPrice. */
                public diffPrice: (number|Long);

                /**
                 * Creates a new NotUseReason instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotUseReason instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV2.INotUseReason): App.Order.CouponCodeListFromOrderV2.NotUseReason;

                /**
                 * Encodes the specified NotUseReason message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV2.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotUseReason message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV2.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV2.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV2.NotUseReason;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV2.NotUseReason;

                /**
                 * Verifies a NotUseReason message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotUseReason message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotUseReason
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV2.NotUseReason;

                /**
                 * Creates a plain object from a NotUseReason message. Also converts values to other types if specified.
                 * @param message NotUseReason
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV2.NotUseReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotUseReason to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace CouponCodeListFromOrderV3. */
        namespace CouponCodeListFromOrderV3 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV3.IRequest);

                /** Request source. */
                public source: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV3.IRequest): App.Order.CouponCodeListFromOrderV3.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV3.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV3.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV3.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV3.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV3.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV3.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response availableList */
                availableList?: (App.Order.CouponCodeListFromOrderV3.ICodeInfo[]|null);

                /** Response notAvailableList */
                notAvailableList?: (App.Order.CouponCodeListFromOrderV3.ICodeInfo[]|null);

                /** Response specialOfferRes */
                specialOfferRes?: (App.Order.CouponCodeListFromOrderV3.ISpecialOffer|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV3.IResponse);

                /** Response availableList. */
                public availableList: App.Order.CouponCodeListFromOrderV3.ICodeInfo[];

                /** Response notAvailableList. */
                public notAvailableList: App.Order.CouponCodeListFromOrderV3.ICodeInfo[];

                /** Response specialOfferRes. */
                public specialOfferRes?: (App.Order.CouponCodeListFromOrderV3.ISpecialOffer|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV3.IResponse): App.Order.CouponCodeListFromOrderV3.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV3.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV3.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV3.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV3.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV3.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV3.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
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

                /** CodeInfo desc */
                desc?: (string|null);

                /** CodeInfo claim */
                claim?: (number|null);

                /** CodeInfo isFirstOrder */
                isFirstOrder?: (number|null);

                /** CodeInfo noEndTime */
                noEndTime?: (number|null);

                /** CodeInfo dateSettingType */
                dateSettingType?: (number|null);

                /** CodeInfo duration */
                duration?: (number|null);

                /** CodeInfo accessChannel */
                accessChannel?: (number|null);

                /** CodeInfo codeId */
                codeId?: (number|Long|null);

                /** CodeInfo notUseReasonList */
                notUseReasonList?: (App.Order.CouponCodeListFromOrderV3.INotUseReason[]|null);

                /** CodeInfo excludeIdList */
                excludeIdList?: (number[]|null);

                /** CodeInfo discountPrice */
                discountPrice?: (number|Long|null);
            }

            /** Represents a CodeInfo. */
            class CodeInfo implements ICodeInfo {

                /**
                 * Constructs a new CodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV3.ICodeInfo);

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

                /** CodeInfo desc. */
                public desc: string;

                /** CodeInfo claim. */
                public claim: number;

                /** CodeInfo isFirstOrder. */
                public isFirstOrder: number;

                /** CodeInfo noEndTime. */
                public noEndTime: number;

                /** CodeInfo dateSettingType. */
                public dateSettingType: number;

                /** CodeInfo duration. */
                public duration: number;

                /** CodeInfo accessChannel. */
                public accessChannel: number;

                /** CodeInfo codeId. */
                public codeId: (number|Long);

                /** CodeInfo notUseReasonList. */
                public notUseReasonList: App.Order.CouponCodeListFromOrderV3.INotUseReason[];

                /** CodeInfo excludeIdList. */
                public excludeIdList: number[];

                /** CodeInfo discountPrice. */
                public discountPrice: (number|Long);

                /**
                 * Creates a new CodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CodeInfo instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV3.ICodeInfo): App.Order.CouponCodeListFromOrderV3.CodeInfo;

                /**
                 * Encodes the specified CodeInfo message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV3.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfo message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV3.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV3.CodeInfo;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV3.CodeInfo;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV3.CodeInfo;

                /**
                 * Creates a plain object from a CodeInfo message. Also converts values to other types if specified.
                 * @param message CodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV3.CodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotUseReason. */
            interface INotUseReason {

                /** NotUseReason notUseReasonType */
                notUseReasonType?: (number|null);

                /** NotUseReason diffQuantity */
                diffQuantity?: (number|null);

                /** NotUseReason diffPrice */
                diffPrice?: (number|Long|null);
            }

            /** Represents a NotUseReason. */
            class NotUseReason implements INotUseReason {

                /**
                 * Constructs a new NotUseReason.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV3.INotUseReason);

                /** NotUseReason notUseReasonType. */
                public notUseReasonType: number;

                /** NotUseReason diffQuantity. */
                public diffQuantity: number;

                /** NotUseReason diffPrice. */
                public diffPrice: (number|Long);

                /**
                 * Creates a new NotUseReason instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotUseReason instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV3.INotUseReason): App.Order.CouponCodeListFromOrderV3.NotUseReason;

                /**
                 * Encodes the specified NotUseReason message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV3.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotUseReason message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV3.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV3.NotUseReason;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV3.NotUseReason;

                /**
                 * Verifies a NotUseReason message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotUseReason message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotUseReason
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV3.NotUseReason;

                /**
                 * Creates a plain object from a NotUseReason message. Also converts values to other types if specified.
                 * @param message NotUseReason
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV3.NotUseReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotUseReason to JSON.
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

                /** SpecialOffer ladderId */
                ladderId?: (number|Long|null);

                /** SpecialOffer quantityThreshold */
                quantityThreshold?: (number|null);

                /** SpecialOffer priceThreshold */
                priceThreshold?: (number|Long|null);

                /** SpecialOffer discountRate */
                discountRate?: (number|null);

                /** SpecialOffer discountPrice */
                discountPrice?: (number|Long|null);

                /** SpecialOffer excludeIdList */
                excludeIdList?: (number[]|null);

                /** SpecialOffer actualPrice */
                actualPrice?: (number|Long|null);
            }

            /** Represents a SpecialOffer. */
            class SpecialOffer implements ISpecialOffer {

                /**
                 * Constructs a new SpecialOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.CouponCodeListFromOrderV3.ISpecialOffer);

                /** SpecialOffer id. */
                public id: (number|Long);

                /** SpecialOffer type. */
                public type: number;

                /** SpecialOffer ladderId. */
                public ladderId: (number|Long);

                /** SpecialOffer quantityThreshold. */
                public quantityThreshold: number;

                /** SpecialOffer priceThreshold. */
                public priceThreshold: (number|Long);

                /** SpecialOffer discountRate. */
                public discountRate: number;

                /** SpecialOffer discountPrice. */
                public discountPrice: (number|Long);

                /** SpecialOffer excludeIdList. */
                public excludeIdList: number[];

                /** SpecialOffer actualPrice. */
                public actualPrice: (number|Long);

                /**
                 * Creates a new SpecialOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpecialOffer instance
                 */
                public static create(properties?: App.Order.CouponCodeListFromOrderV3.ISpecialOffer): App.Order.CouponCodeListFromOrderV3.SpecialOffer;

                /**
                 * Encodes the specified SpecialOffer message. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.CouponCodeListFromOrderV3.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpecialOffer message, length delimited. Does not implicitly {@link App.Order.CouponCodeListFromOrderV3.SpecialOffer.verify|verify} messages.
                 * @param message SpecialOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.CouponCodeListFromOrderV3.ISpecialOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.CouponCodeListFromOrderV3.SpecialOffer;

                /**
                 * Decodes a SpecialOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpecialOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.CouponCodeListFromOrderV3.SpecialOffer;

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
                public static fromObject(object: { [k: string]: any }): App.Order.CouponCodeListFromOrderV3.SpecialOffer;

                /**
                 * Creates a plain object from a SpecialOffer message. Also converts values to other types if specified.
                 * @param message SpecialOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.CouponCodeListFromOrderV3.SpecialOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpecialOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace FlashSaleSkuBuyNowCheck. */
        namespace FlashSaleSkuBuyNowCheck {

            /** Properties of a Request. */
            interface IRequest {

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.FlashSaleSkuBuyNowCheck.IRequest);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.FlashSaleSkuBuyNowCheck.IRequest): App.Order.FlashSaleSkuBuyNowCheck.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.FlashSaleSkuBuyNowCheck.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.FlashSaleSkuBuyNowCheck.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.FlashSaleSkuBuyNowCheck.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.FlashSaleSkuBuyNowCheck.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.FlashSaleSkuBuyNowCheck.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.FlashSaleSkuBuyNowCheck.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.FlashSaleSkuBuyNowCheck.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.FlashSaleSkuBuyNowCheck.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response canBuy */
                canBuy?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.FlashSaleSkuBuyNowCheck.IResponse);

                /** Response canBuy. */
                public canBuy: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.FlashSaleSkuBuyNowCheck.IResponse): App.Order.FlashSaleSkuBuyNowCheck.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.FlashSaleSkuBuyNowCheck.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.FlashSaleSkuBuyNowCheck.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.FlashSaleSkuBuyNowCheck.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.FlashSaleSkuBuyNowCheck.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.FlashSaleSkuBuyNowCheck.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.FlashSaleSkuBuyNowCheck.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.FlashSaleSkuBuyNowCheck.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.FlashSaleSkuBuyNowCheck.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace GetBoxPlaceOrderInfo. */
        namespace GetBoxPlaceOrderInfo {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxTplId */
                magicBoxTplId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.GetBoxPlaceOrderInfo.IRequest);

                /** Request magicBoxTplId. */
                public magicBoxTplId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.GetBoxPlaceOrderInfo.IRequest): App.Order.GetBoxPlaceOrderInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.GetBoxPlaceOrderInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.GetBoxPlaceOrderInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.GetBoxPlaceOrderInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.GetBoxPlaceOrderInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.GetBoxPlaceOrderInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.GetBoxPlaceOrderInfo.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.GetBoxPlaceOrderInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.GetBoxPlaceOrderInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response placeOrderInfo */
                placeOrderInfo?: (App.Order.OrInfo.IPlaceOrderInfo|null);

                /** Response orderBoxInfo */
                orderBoxInfo?: (App.Order.OrInfo.IOrderBoxInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.GetBoxPlaceOrderInfo.IResponse);

                /** Response placeOrderInfo. */
                public placeOrderInfo?: (App.Order.OrInfo.IPlaceOrderInfo|null);

                /** Response orderBoxInfo. */
                public orderBoxInfo?: (App.Order.OrInfo.IOrderBoxInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.GetBoxPlaceOrderInfo.IResponse): App.Order.GetBoxPlaceOrderInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.GetBoxPlaceOrderInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.GetBoxPlaceOrderInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.GetBoxPlaceOrderInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.GetBoxPlaceOrderInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.GetBoxPlaceOrderInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.GetBoxPlaceOrderInfo.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.GetBoxPlaceOrderInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.GetBoxPlaceOrderInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace KlarnaOrderCommit. */
        namespace KlarnaOrderCommit {

            /** Properties of a Request. */
            interface IRequest {

                /** Request preFlowNo */
                preFlowNo?: (string|null);

                /** Request authorizationToken */
                authorizationToken?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.KlarnaOrderCommit.IRequest);

                /** Request preFlowNo. */
                public preFlowNo: string;

                /** Request authorizationToken. */
                public authorizationToken: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.KlarnaOrderCommit.IRequest): App.Order.KlarnaOrderCommit.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.KlarnaOrderCommit.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.KlarnaOrderCommit.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.KlarnaOrderCommit.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.KlarnaOrderCommit.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.KlarnaOrderCommit.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.KlarnaOrderCommit.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.KlarnaOrderCommit.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.KlarnaOrderCommit.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response flowNo */
                flowNo?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.KlarnaOrderCommit.IResponse);

                /** Response flowNo. */
                public flowNo: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.KlarnaOrderCommit.IResponse): App.Order.KlarnaOrderCommit.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.KlarnaOrderCommit.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.KlarnaOrderCommit.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.KlarnaOrderCommit.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.KlarnaOrderCommit.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.KlarnaOrderCommit.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.KlarnaOrderCommit.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.KlarnaOrderCommit.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.KlarnaOrderCommit.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace LogisticsTrack. */
        namespace LogisticsTrack {

            /** Properties of a Request. */
            interface IRequest {

                /** Request trackNumber */
                trackNumber?: (string|null);

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.LogisticsTrack.IRequest);

                /** Request trackNumber. */
                public trackNumber: string;

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.LogisticsTrack.IRequest): App.Order.LogisticsTrack.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.LogisticsTrack.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.LogisticsTrack.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.LogisticsTrack.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.LogisticsTrack.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.LogisticsTrack.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.LogisticsTrack.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.LogisticsTrack.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.LogisticsTrack.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response detailList */
                detailList?: (App.Order.LogisticsTrack.IDetail[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.LogisticsTrack.IResponse);

                /** Response detailList. */
                public detailList: App.Order.LogisticsTrack.IDetail[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.LogisticsTrack.IResponse): App.Order.LogisticsTrack.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.LogisticsTrack.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.LogisticsTrack.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.LogisticsTrack.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.LogisticsTrack.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.LogisticsTrack.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.LogisticsTrack.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.LogisticsTrack.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.LogisticsTrack.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Detail. */
            interface IDetail {

                /** Detail timestamp */
                timestamp?: (number|Long|null);

                /** Detail message */
                message?: (string|null);
            }

            /** Represents a Detail. */
            class Detail implements IDetail {

                /**
                 * Constructs a new Detail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.LogisticsTrack.IDetail);

                /** Detail timestamp. */
                public timestamp: (number|Long);

                /** Detail message. */
                public message: string;

                /**
                 * Creates a new Detail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Detail instance
                 */
                public static create(properties?: App.Order.LogisticsTrack.IDetail): App.Order.LogisticsTrack.Detail;

                /**
                 * Encodes the specified Detail message. Does not implicitly {@link App.Order.LogisticsTrack.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.LogisticsTrack.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Detail message, length delimited. Does not implicitly {@link App.Order.LogisticsTrack.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.LogisticsTrack.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Detail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.LogisticsTrack.Detail;

                /**
                 * Decodes a Detail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.LogisticsTrack.Detail;

                /**
                 * Verifies a Detail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Detail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Detail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.LogisticsTrack.Detail;

                /**
                 * Creates a plain object from a Detail message. Also converts values to other types if specified.
                 * @param message Detail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.LogisticsTrack.Detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Detail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxPlaceOrder. */
        namespace MagicBoxPlaceOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxTplId */
                magicBoxTplId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request hkc */
                hkc?: (number|Long|null);

                /** Request payWay */
                payWay?: (number|null);

                /** Request newUserBenefit */
                newUserBenefit?: (boolean|null);

                /** Request paymentTotalPrice */
                paymentTotalPrice?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrder.IRequest);

                /** Request magicBoxTplId. */
                public magicBoxTplId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request hkc. */
                public hkc: (number|Long);

                /** Request payWay. */
                public payWay: number;

                /** Request newUserBenefit. */
                public newUserBenefit: boolean;

                /** Request paymentTotalPrice. */
                public paymentTotalPrice: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrder.IRequest): App.Order.MagicBoxPlaceOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.MagicBoxPlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderInfo */
                orderInfo?: (App.Order.OrInfo.IOrderInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrder.IResponse);

                /** Response orderInfo. */
                public orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrder.IResponse): App.Order.MagicBoxPlaceOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.MagicBoxPlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxPlaceOrderV1. */
        namespace MagicBoxPlaceOrderV1 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxTplId */
                magicBoxTplId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request payWay */
                payWay?: (number|null);

                /** Request newUserBenefit */
                newUserBenefit?: (boolean|null);

                /** Request paymentTotalPrice */
                paymentTotalPrice?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrderV1.IRequest);

                /** Request magicBoxTplId. */
                public magicBoxTplId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request payWay. */
                public payWay: number;

                /** Request newUserBenefit. */
                public newUserBenefit: boolean;

                /** Request paymentTotalPrice. */
                public paymentTotalPrice: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrderV1.IRequest): App.Order.MagicBoxPlaceOrderV1.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV1.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrderV1.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV1.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrderV1.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrderV1.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrderV1.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrderV1.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrderV1.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderInfo */
                orderInfo?: (App.Order.OrInfo.IOrderInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrderV1.IResponse);

                /** Response orderInfo. */
                public orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrderV1.IResponse): App.Order.MagicBoxPlaceOrderV1.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV1.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrderV1.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV1.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrderV1.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrderV1.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrderV1.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrderV1.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrderV1.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MagicBoxPlaceOrderV2. */
        namespace MagicBoxPlaceOrderV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxTplId */
                magicBoxTplId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request payWay */
                payWay?: (number|null);

                /** Request newUserBenefit */
                newUserBenefit?: (boolean|null);

                /** Request paymentTotalPrice */
                paymentTotalPrice?: (number|Long|null);

                /** Request timestamp */
                timestamp?: (number|Long|null);

                /** Request sign */
                sign?: (string|null);

                /** Request version */
                version?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrderV2.IRequest);

                /** Request magicBoxTplId. */
                public magicBoxTplId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request payWay. */
                public payWay: number;

                /** Request newUserBenefit. */
                public newUserBenefit: boolean;

                /** Request paymentTotalPrice. */
                public paymentTotalPrice: (number|Long);

                /** Request timestamp. */
                public timestamp: (number|Long);

                /** Request sign. */
                public sign: string;

                /** Request version. */
                public version: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrderV2.IRequest): App.Order.MagicBoxPlaceOrderV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrderV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrderV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrderV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrderV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrderV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrderV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderInfo */
                orderInfo?: (App.Order.OrInfo.IOrderInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MagicBoxPlaceOrderV2.IResponse);

                /** Response orderInfo. */
                public orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.MagicBoxPlaceOrderV2.IResponse): App.Order.MagicBoxPlaceOrderV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MagicBoxPlaceOrderV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.MagicBoxPlaceOrderV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MagicBoxPlaceOrderV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MagicBoxPlaceOrderV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MagicBoxPlaceOrderV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MagicBoxPlaceOrderV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MagicBoxPlaceOrderV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyOrders. */
        namespace MyOrders {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MyOrders.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.MyOrders.IRequest): App.Order.MyOrders.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.MyOrders.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MyOrders.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.MyOrders.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MyOrders.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MyOrders.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MyOrders.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MyOrders.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MyOrders.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response all */
                all?: (number|null);

                /** Response unpaid */
                unpaid?: (number|null);

                /** Response processing */
                processing?: (number|null);

                /** Response shipped */
                shipped?: (number|null);

                /** Response returns */
                returns?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MyOrders.IResponse);

                /** Response all. */
                public all: number;

                /** Response unpaid. */
                public unpaid: number;

                /** Response processing. */
                public processing: number;

                /** Response shipped. */
                public shipped: number;

                /** Response returns. */
                public returns: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.MyOrders.IResponse): App.Order.MyOrders.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.MyOrders.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MyOrders.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.MyOrders.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MyOrders.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MyOrders.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MyOrders.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MyOrders.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MyOrders.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace MyWallets. */
        namespace MyWallets {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.MyWallets.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.MyWallets.IRequest): App.Order.MyWallets.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.MyWallets.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MyWallets.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.MyWallets.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MyWallets.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MyWallets.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MyWallets.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MyWallets.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MyWallets.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response magicBox */
                magicBox?: (number|null);

                /** Response hkc */
                hkc?: (number|null);

                /** Response coupon */
                coupon?: (number|null);

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
                constructor(properties?: App.Order.MyWallets.IResponse);

                /** Response magicBox. */
                public magicBox: number;

                /** Response hkc. */
                public hkc: number;

                /** Response coupon. */
                public coupon: number;

                /** Response currencyExchangeRate. */
                public currencyExchangeRate: string;

                /** Response blackFridayRemainingEffectiveTime. */
                public blackFridayRemainingEffectiveTime: (number|Long);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.MyWallets.IResponse): App.Order.MyWallets.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.MyWallets.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.MyWallets.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.MyWallets.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.MyWallets.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.MyWallets.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.MyWallets.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.MyWallets.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.MyWallets.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderDetailV2. */
        namespace OrderDetailV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IRequest): App.Order.OrderDetailV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderDetailV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderNo */
                orderNo?: (string|null);

                /** Response appOrderState */
                appOrderState?: (number|null);

                /** Response processTime */
                processTime?: (number|Long|null);

                /** Response processEndTime */
                processEndTime?: (number|Long|null);

                /** Response processList */
                processList?: (App.Order.OrderDetailV2.IProcessInfo[]|null);

                /** Response address */
                address?: (App.Order.OrderDetailV2.IAddressInfo|null);

                /** Response orderItemList */
                orderItemList?: (App.Order.OrderDetailV2.IOrderItem[]|null);

                /** Response payWay */
                payWay?: (string|null);

                /** Response amount */
                amount?: (App.Order.OrderDetailV2.IAmount|null);

                /** Response remainingTimeOfPayment */
                remainingTimeOfPayment?: (number|Long|null);

                /** Response multiPackageLogisticFlag */
                multiPackageLogisticFlag?: (boolean|null);

                /** Response trackingUrl */
                trackingUrl?: (string|null);

                /** Response orderSource */
                orderSource?: (number|null);

                /** Response paymentMethodId */
                paymentMethodId?: (number|null);

                /** Response userCountry */
                userCountry?: (string|null);

                /** Response language */
                language?: (string|null);

                /** Response paymentInfoList */
                paymentInfoList?: (App.Order.OrderDetailV2.IPaymentInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IResponse);

                /** Response orderNo. */
                public orderNo: string;

                /** Response appOrderState. */
                public appOrderState: number;

                /** Response processTime. */
                public processTime: (number|Long);

                /** Response processEndTime. */
                public processEndTime: (number|Long);

                /** Response processList. */
                public processList: App.Order.OrderDetailV2.IProcessInfo[];

                /** Response address. */
                public address?: (App.Order.OrderDetailV2.IAddressInfo|null);

                /** Response orderItemList. */
                public orderItemList: App.Order.OrderDetailV2.IOrderItem[];

                /** Response payWay. */
                public payWay: string;

                /** Response amount. */
                public amount?: (App.Order.OrderDetailV2.IAmount|null);

                /** Response remainingTimeOfPayment. */
                public remainingTimeOfPayment: (number|Long);

                /** Response multiPackageLogisticFlag. */
                public multiPackageLogisticFlag: boolean;

                /** Response trackingUrl. */
                public trackingUrl: string;

                /** Response orderSource. */
                public orderSource: number;

                /** Response paymentMethodId. */
                public paymentMethodId: number;

                /** Response userCountry. */
                public userCountry: string;

                /** Response language. */
                public language: string;

                /** Response paymentInfoList. */
                public paymentInfoList: App.Order.OrderDetailV2.IPaymentInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IResponse): App.Order.OrderDetailV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderDetailV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Amount. */
            interface IAmount {

                /** Amount subTotal */
                subTotal?: (number|Long|null);

                /** Amount discount */
                discount?: (number|Long|null);

                /** Amount shipping */
                shipping?: (number|Long|null);

                /** Amount hkc */
                hkc?: (number|Long|null);

                /** Amount totalAmount */
                totalAmount?: (number|Long|null);

                /** Amount currencyCode */
                currencyCode?: (string|null);
            }

            /** Represents an Amount. */
            class Amount implements IAmount {

                /**
                 * Constructs a new Amount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IAmount);

                /** Amount subTotal. */
                public subTotal: (number|Long);

                /** Amount discount. */
                public discount: (number|Long);

                /** Amount shipping. */
                public shipping: (number|Long);

                /** Amount hkc. */
                public hkc: (number|Long);

                /** Amount totalAmount. */
                public totalAmount: (number|Long);

                /** Amount currencyCode. */
                public currencyCode: string;

                /**
                 * Creates a new Amount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Amount instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IAmount): App.Order.OrderDetailV2.Amount;

                /**
                 * Encodes the specified Amount message. Does not implicitly {@link App.Order.OrderDetailV2.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Amount message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.Amount.verify|verify} messages.
                 * @param message Amount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Amount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.Amount;

                /**
                 * Decodes an Amount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Amount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.Amount;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.Amount;

                /**
                 * Creates a plain object from an Amount message. Also converts values to other types if specified.
                 * @param message Amount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.Amount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Amount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderItem. */
            interface IOrderItem {

                /** OrderItem skuId */
                skuId?: (number|Long|null);

                /** OrderItem proName */
                proName?: (string|null);

                /** OrderItem skuPhoto */
                skuPhoto?: (string|null);

                /** OrderItem optionFormat */
                optionFormat?: (string|null);

                /** OrderItem quantity */
                quantity?: (number|null);

                /** OrderItem salePrice */
                salePrice?: (number|Long|null);

                /** OrderItem handle */
                handle?: (string|null);

                /** OrderItem flashSaleId */
                flashSaleId?: (number|Long|null);
            }

            /** Represents an OrderItem. */
            class OrderItem implements IOrderItem {

                /**
                 * Constructs a new OrderItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IOrderItem);

                /** OrderItem skuId. */
                public skuId: (number|Long);

                /** OrderItem proName. */
                public proName: string;

                /** OrderItem skuPhoto. */
                public skuPhoto: string;

                /** OrderItem optionFormat. */
                public optionFormat: string;

                /** OrderItem quantity. */
                public quantity: number;

                /** OrderItem salePrice. */
                public salePrice: (number|Long);

                /** OrderItem handle. */
                public handle: string;

                /** OrderItem flashSaleId. */
                public flashSaleId: (number|Long);

                /**
                 * Creates a new OrderItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderItem instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IOrderItem): App.Order.OrderDetailV2.OrderItem;

                /**
                 * Encodes the specified OrderItem message. Does not implicitly {@link App.Order.OrderDetailV2.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderItem message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.OrderItem;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.OrderItem;

                /**
                 * Verifies an OrderItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderItem
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.OrderItem;

                /**
                 * Creates a plain object from an OrderItem message. Also converts values to other types if specified.
                 * @param message OrderItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.OrderItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProcessInfo. */
            interface IProcessInfo {

                /** ProcessInfo processType */
                processType?: (number|null);

                /** ProcessInfo processTime */
                processTime?: (number|Long|null);

                /** ProcessInfo isCurrent */
                isCurrent?: (boolean|null);
            }

            /** Represents a ProcessInfo. */
            class ProcessInfo implements IProcessInfo {

                /**
                 * Constructs a new ProcessInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IProcessInfo);

                /** ProcessInfo processType. */
                public processType: number;

                /** ProcessInfo processTime. */
                public processTime: (number|Long);

                /** ProcessInfo isCurrent. */
                public isCurrent: boolean;

                /**
                 * Creates a new ProcessInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProcessInfo instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IProcessInfo): App.Order.OrderDetailV2.ProcessInfo;

                /**
                 * Encodes the specified ProcessInfo message. Does not implicitly {@link App.Order.OrderDetailV2.ProcessInfo.verify|verify} messages.
                 * @param message ProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProcessInfo message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.ProcessInfo.verify|verify} messages.
                 * @param message ProcessInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IProcessInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProcessInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.ProcessInfo;

                /**
                 * Decodes a ProcessInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProcessInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.ProcessInfo;

                /**
                 * Verifies a ProcessInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProcessInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProcessInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.ProcessInfo;

                /**
                 * Creates a plain object from a ProcessInfo message. Also converts values to other types if specified.
                 * @param message ProcessInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.ProcessInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProcessInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddressInfo. */
            interface IAddressInfo {

                /** AddressInfo addressee */
                addressee?: (string|null);

                /** AddressInfo address */
                address?: (string|null);

                /** AddressInfo phone */
                phone?: (string|null);

                /** AddressInfo zoneCode */
                zoneCode?: (string|null);

                /** AddressInfo address2 */
                address2?: (string|null);

                /** AddressInfo countryCode */
                countryCode?: (string|null);

                /** AddressInfo province */
                province?: (string|null);

                /** AddressInfo city */
                city?: (string|null);

                /** AddressInfo taxNum */
                taxNum?: (string|null);

                /** AddressInfo taxType */
                taxType?: (number|null);

                /** AddressInfo zipCode */
                zipCode?: (string|null);

                /** AddressInfo fullName */
                fullName?: (string|null);

                /** AddressInfo address1 */
                address1?: (string|null);
            }

            /** Represents an AddressInfo. */
            class AddressInfo implements IAddressInfo {

                /**
                 * Constructs a new AddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IAddressInfo);

                /** AddressInfo addressee. */
                public addressee: string;

                /** AddressInfo address. */
                public address: string;

                /** AddressInfo phone. */
                public phone: string;

                /** AddressInfo zoneCode. */
                public zoneCode: string;

                /** AddressInfo address2. */
                public address2: string;

                /** AddressInfo countryCode. */
                public countryCode: string;

                /** AddressInfo province. */
                public province: string;

                /** AddressInfo city. */
                public city: string;

                /** AddressInfo taxNum. */
                public taxNum: string;

                /** AddressInfo taxType. */
                public taxType: number;

                /** AddressInfo zipCode. */
                public zipCode: string;

                /** AddressInfo fullName. */
                public fullName: string;

                /** AddressInfo address1. */
                public address1: string;

                /**
                 * Creates a new AddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddressInfo instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IAddressInfo): App.Order.OrderDetailV2.AddressInfo;

                /**
                 * Encodes the specified AddressInfo message. Does not implicitly {@link App.Order.OrderDetailV2.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.AddressInfo;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.AddressInfo;

                /**
                 * Verifies an AddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.AddressInfo;

                /**
                 * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                 * @param message AddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PaymentInfo. */
            interface IPaymentInfo {

                /** PaymentInfo paymentMethodId */
                paymentMethodId?: (number|null);

                /** PaymentInfo payUrl */
                payUrl?: (string|null);

                /** PaymentInfo flowNo */
                flowNo?: (string|null);

                /** PaymentInfo voucher */
                voucher?: (string|null);

                /** PaymentInfo clientToken */
                clientToken?: (string|null);

                /** PaymentInfo sessionId */
                sessionId?: (string|null);
            }

            /** Represents a PaymentInfo. */
            class PaymentInfo implements IPaymentInfo {

                /**
                 * Constructs a new PaymentInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderDetailV2.IPaymentInfo);

                /** PaymentInfo paymentMethodId. */
                public paymentMethodId: number;

                /** PaymentInfo payUrl. */
                public payUrl: string;

                /** PaymentInfo flowNo. */
                public flowNo: string;

                /** PaymentInfo voucher. */
                public voucher: string;

                /** PaymentInfo clientToken. */
                public clientToken: string;

                /** PaymentInfo sessionId. */
                public sessionId: string;

                /**
                 * Creates a new PaymentInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaymentInfo instance
                 */
                public static create(properties?: App.Order.OrderDetailV2.IPaymentInfo): App.Order.OrderDetailV2.PaymentInfo;

                /**
                 * Encodes the specified PaymentInfo message. Does not implicitly {@link App.Order.OrderDetailV2.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderDetailV2.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PaymentInfo message, length delimited. Does not implicitly {@link App.Order.OrderDetailV2.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderDetailV2.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderDetailV2.PaymentInfo;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderDetailV2.PaymentInfo;

                /**
                 * Verifies a PaymentInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PaymentInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderDetailV2.PaymentInfo;

                /**
                 * Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.
                 * @param message PaymentInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderDetailV2.PaymentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PaymentInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderHkcDetail. */
        namespace OrderHkcDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request currencyTotalPrice */
                currencyTotalPrice?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderHkcDetail.IRequest);

                /** Request currencyTotalPrice. */
                public currencyTotalPrice: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderHkcDetail.IRequest): App.Order.OrderHkcDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderHkcDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderHkcDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderHkcDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderHkcDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderHkcDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderHkcDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderHkcDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderHkcDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderHkcDetail */
                orderHkcDetail?: (App.Order.OrInfo.IOrderHkcDetail|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderHkcDetail.IResponse);

                /** Response orderHkcDetail. */
                public orderHkcDetail?: (App.Order.OrInfo.IOrderHkcDetail|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderHkcDetail.IResponse): App.Order.OrderHkcDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderHkcDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderHkcDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderHkcDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderHkcDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderHkcDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderHkcDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderHkcDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderHkcDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderInfoAddress. */
        namespace OrderInfoAddress {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderId */
                orderId?: (string|null);

                /** Request addressId */
                addressId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderInfoAddress.IRequest);

                /** Request orderId. */
                public orderId: string;

                /** Request addressId. */
                public addressId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderInfoAddress.IRequest): App.Order.OrderInfoAddress.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderInfoAddress.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderInfoAddress.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderInfoAddress.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderInfoAddress.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderInfoAddress.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderInfoAddress.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderInfoAddress.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderInfoAddress.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response addressInfo */
                addressInfo?: (App.Order.OrderInfoAddress.IAddressInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderInfoAddress.IResponse);

                /** Response addressInfo. */
                public addressInfo?: (App.Order.OrderInfoAddress.IAddressInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderInfoAddress.IResponse): App.Order.OrderInfoAddress.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderInfoAddress.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderInfoAddress.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderInfoAddress.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderInfoAddress.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderInfoAddress.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderInfoAddress.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderInfoAddress.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderInfoAddress.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddressInfo. */
            interface IAddressInfo {

                /** AddressInfo id */
                id?: (number|Long|null);

                /** AddressInfo countryCode */
                countryCode?: (string|null);

                /** AddressInfo province */
                province?: (string|null);

                /** AddressInfo city */
                city?: (string|null);

                /** AddressInfo zoneCode */
                zoneCode?: (string|null);

                /** AddressInfo phone */
                phone?: (string|null);

                /** AddressInfo address1 */
                address1?: (string|null);

                /** AddressInfo address2 */
                address2?: (string|null);

                /** AddressInfo isDefault */
                isDefault?: (number|null);

                /** AddressInfo zipCode */
                zipCode?: (string|null);

                /** AddressInfo userId */
                userId?: (number|Long|null);

                /** AddressInfo fullName */
                fullName?: (string|null);
            }

            /** Represents an AddressInfo. */
            class AddressInfo implements IAddressInfo {

                /**
                 * Constructs a new AddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderInfoAddress.IAddressInfo);

                /** AddressInfo id. */
                public id: (number|Long);

                /** AddressInfo countryCode. */
                public countryCode: string;

                /** AddressInfo province. */
                public province: string;

                /** AddressInfo city. */
                public city: string;

                /** AddressInfo zoneCode. */
                public zoneCode: string;

                /** AddressInfo phone. */
                public phone: string;

                /** AddressInfo address1. */
                public address1: string;

                /** AddressInfo address2. */
                public address2: string;

                /** AddressInfo isDefault. */
                public isDefault: number;

                /** AddressInfo zipCode. */
                public zipCode: string;

                /** AddressInfo userId. */
                public userId: (number|Long);

                /** AddressInfo fullName. */
                public fullName: string;

                /**
                 * Creates a new AddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddressInfo instance
                 */
                public static create(properties?: App.Order.OrderInfoAddress.IAddressInfo): App.Order.OrderInfoAddress.AddressInfo;

                /**
                 * Encodes the specified AddressInfo message. Does not implicitly {@link App.Order.OrderInfoAddress.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderInfoAddress.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link App.Order.OrderInfoAddress.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderInfoAddress.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderInfoAddress.AddressInfo;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderInfoAddress.AddressInfo;

                /**
                 * Verifies an AddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderInfoAddress.AddressInfo;

                /**
                 * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                 * @param message AddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderInfoAddress.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderInfoEdit. */
        namespace OrderInfoEdit {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderId */
                orderId?: (string|null);

                /** Request paymentMethodId */
                paymentMethodId?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderInfoEdit.IRequest);

                /** Request orderId. */
                public orderId: string;

                /** Request paymentMethodId. */
                public paymentMethodId: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderInfoEdit.IRequest): App.Order.OrderInfoEdit.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderInfoEdit.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderInfoEdit.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderInfoEdit.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderInfoEdit.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderInfoEdit.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderInfoEdit.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderInfoEdit.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderInfoEdit.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: App.Order.OrderInfoEdit.IResponse);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderInfoEdit.IResponse): App.Order.OrderInfoEdit.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderInfoEdit.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderInfoEdit.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderInfoEdit.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderInfoEdit.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderInfoEdit.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderInfoEdit.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderInfoEdit.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderInfoEdit.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderListV2. */
        namespace OrderListV2 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request searchName */
                searchName?: (string|null);

                /** Request appOrderState */
                appOrderState?: (number|null);

                /** Request createTime */
                createTime?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV2.IRequest);

                /** Request searchName. */
                public searchName: string;

                /** Request appOrderState. */
                public appOrderState: number;

                /** Request createTime. */
                public createTime: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderListV2.IRequest): App.Order.OrderListV2.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderListV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderListV2.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV2.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV2.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV2.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV2.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV2.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response list */
                list?: (App.Order.OrderListV2.IOrderInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV2.IResponse);

                /** Response list. */
                public list: App.Order.OrderListV2.IOrderInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderListV2.IResponse): App.Order.OrderListV2.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderListV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderListV2.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV2.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV2.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV2.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV2.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV2.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderInfo. */
            interface IOrderInfo {

                /** OrderInfo orderNo */
                orderNo?: (string|null);

                /** OrderInfo appOrderState */
                appOrderState?: (number|null);

                /** OrderInfo remainingTimeOfPayment */
                remainingTimeOfPayment?: (number|Long|null);

                /** OrderInfo currencyCode */
                currencyCode?: (string|null);

                /** OrderInfo payWay */
                payWay?: (number|null);

                /** OrderInfo orderItemList */
                orderItemList?: (App.Order.OrderListV2.IOrderItem[]|null);

                /** OrderInfo createTime */
                createTime?: (number|Long|null);

                /** OrderInfo paymentCurrencyPrice */
                paymentCurrencyPrice?: (number|Long|null);

                /** OrderInfo paymentInfo */
                paymentInfo?: (App.Order.OrderListV2.IPaymentInfo|null);
            }

            /** Represents an OrderInfo. */
            class OrderInfo implements IOrderInfo {

                /**
                 * Constructs a new OrderInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV2.IOrderInfo);

                /** OrderInfo orderNo. */
                public orderNo: string;

                /** OrderInfo appOrderState. */
                public appOrderState: number;

                /** OrderInfo remainingTimeOfPayment. */
                public remainingTimeOfPayment: (number|Long);

                /** OrderInfo currencyCode. */
                public currencyCode: string;

                /** OrderInfo payWay. */
                public payWay: number;

                /** OrderInfo orderItemList. */
                public orderItemList: App.Order.OrderListV2.IOrderItem[];

                /** OrderInfo createTime. */
                public createTime: (number|Long);

                /** OrderInfo paymentCurrencyPrice. */
                public paymentCurrencyPrice: (number|Long);

                /** OrderInfo paymentInfo. */
                public paymentInfo?: (App.Order.OrderListV2.IPaymentInfo|null);

                /**
                 * Creates a new OrderInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderInfo instance
                 */
                public static create(properties?: App.Order.OrderListV2.IOrderInfo): App.Order.OrderListV2.OrderInfo;

                /**
                 * Encodes the specified OrderInfo message. Does not implicitly {@link App.Order.OrderListV2.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV2.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderInfo message, length delimited. Does not implicitly {@link App.Order.OrderListV2.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV2.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV2.OrderInfo;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV2.OrderInfo;

                /**
                 * Verifies an OrderInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV2.OrderInfo;

                /**
                 * Creates a plain object from an OrderInfo message. Also converts values to other types if specified.
                 * @param message OrderInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV2.OrderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderItem. */
            interface IOrderItem {

                /** OrderItem skuId */
                skuId?: (number|Long|null);

                /** OrderItem proName */
                proName?: (string|null);

                /** OrderItem skuPhoto */
                skuPhoto?: (string|null);

                /** OrderItem optionFormat */
                optionFormat?: (string|null);

                /** OrderItem quantity */
                quantity?: (number|null);

                /** OrderItem salePrice */
                salePrice?: (number|Long|null);

                /** OrderItem handle */
                handle?: (string|null);

                /** OrderItem flashSaleId */
                flashSaleId?: (number|Long|null);
            }

            /** Represents an OrderItem. */
            class OrderItem implements IOrderItem {

                /**
                 * Constructs a new OrderItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV2.IOrderItem);

                /** OrderItem skuId. */
                public skuId: (number|Long);

                /** OrderItem proName. */
                public proName: string;

                /** OrderItem skuPhoto. */
                public skuPhoto: string;

                /** OrderItem optionFormat. */
                public optionFormat: string;

                /** OrderItem quantity. */
                public quantity: number;

                /** OrderItem salePrice. */
                public salePrice: (number|Long);

                /** OrderItem handle. */
                public handle: string;

                /** OrderItem flashSaleId. */
                public flashSaleId: (number|Long);

                /**
                 * Creates a new OrderItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderItem instance
                 */
                public static create(properties?: App.Order.OrderListV2.IOrderItem): App.Order.OrderListV2.OrderItem;

                /**
                 * Encodes the specified OrderItem message. Does not implicitly {@link App.Order.OrderListV2.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV2.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderItem message, length delimited. Does not implicitly {@link App.Order.OrderListV2.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV2.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV2.OrderItem;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV2.OrderItem;

                /**
                 * Verifies an OrderItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderItem
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV2.OrderItem;

                /**
                 * Creates a plain object from an OrderItem message. Also converts values to other types if specified.
                 * @param message OrderItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV2.OrderItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PaymentInfo. */
            interface IPaymentInfo {

                /** PaymentInfo paymentMethodId */
                paymentMethodId?: (number|null);

                /** PaymentInfo payUrl */
                payUrl?: (string|null);

                /** PaymentInfo flowNo */
                flowNo?: (string|null);

                /** PaymentInfo voucher */
                voucher?: (string|null);

                /** PaymentInfo clientToken */
                clientToken?: (string|null);

                /** PaymentInfo sessionId */
                sessionId?: (string|null);
            }

            /** Represents a PaymentInfo. */
            class PaymentInfo implements IPaymentInfo {

                /**
                 * Constructs a new PaymentInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV2.IPaymentInfo);

                /** PaymentInfo paymentMethodId. */
                public paymentMethodId: number;

                /** PaymentInfo payUrl. */
                public payUrl: string;

                /** PaymentInfo flowNo. */
                public flowNo: string;

                /** PaymentInfo voucher. */
                public voucher: string;

                /** PaymentInfo clientToken. */
                public clientToken: string;

                /** PaymentInfo sessionId. */
                public sessionId: string;

                /**
                 * Creates a new PaymentInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaymentInfo instance
                 */
                public static create(properties?: App.Order.OrderListV2.IPaymentInfo): App.Order.OrderListV2.PaymentInfo;

                /**
                 * Encodes the specified PaymentInfo message. Does not implicitly {@link App.Order.OrderListV2.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV2.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PaymentInfo message, length delimited. Does not implicitly {@link App.Order.OrderListV2.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV2.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV2.PaymentInfo;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV2.PaymentInfo;

                /**
                 * Verifies a PaymentInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PaymentInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV2.PaymentInfo;

                /**
                 * Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.
                 * @param message PaymentInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV2.PaymentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PaymentInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderListV3. */
        namespace OrderListV3 {

            /** Properties of a Request. */
            interface IRequest {

                /** Request pageNum */
                pageNum?: (number|null);

                /** Request pageSize */
                pageSize?: (number|null);

                /** Request searchName */
                searchName?: (string|null);

                /** Request appOrderState */
                appOrderState?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV3.IRequest);

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /** Request searchName. */
                public searchName: string;

                /** Request appOrderState. */
                public appOrderState: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderListV3.IRequest): App.Order.OrderListV3.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderListV3.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV3.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderListV3.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV3.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV3.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV3.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV3.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV3.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response total */
                total?: (number|null);

                /** Response size */
                size?: (number|null);

                /** Response current */
                current?: (number|null);

                /** Response pages */
                pages?: (number|null);

                /** Response records */
                records?: (App.Order.OrderListV3.IOrderInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV3.IResponse);

                /** Response total. */
                public total: number;

                /** Response size. */
                public size: number;

                /** Response current. */
                public current: number;

                /** Response pages. */
                public pages: number;

                /** Response records. */
                public records: App.Order.OrderListV3.IOrderInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderListV3.IResponse): App.Order.OrderListV3.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderListV3.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV3.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderListV3.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV3.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV3.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV3.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV3.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV3.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderInfo. */
            interface IOrderInfo {

                /** OrderInfo orderNo */
                orderNo?: (string|null);

                /** OrderInfo appOrderState */
                appOrderState?: (number|null);

                /** OrderInfo remainingTimeOfPayment */
                remainingTimeOfPayment?: (number|Long|null);

                /** OrderInfo currencyCode */
                currencyCode?: (string|null);

                /** OrderInfo payWay */
                payWay?: (number|null);

                /** OrderInfo orderItemList */
                orderItemList?: (App.Order.OrderListV3.IOrderItem[]|null);

                /** OrderInfo createTime */
                createTime?: (number|Long|null);

                /** OrderInfo paymentCurrencyPrice */
                paymentCurrencyPrice?: (number|Long|null);

                /** OrderInfo paymentInfo */
                paymentInfo?: (App.Order.OrderListV3.IPaymentInfo|null);
            }

            /** Represents an OrderInfo. */
            class OrderInfo implements IOrderInfo {

                /**
                 * Constructs a new OrderInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV3.IOrderInfo);

                /** OrderInfo orderNo. */
                public orderNo: string;

                /** OrderInfo appOrderState. */
                public appOrderState: number;

                /** OrderInfo remainingTimeOfPayment. */
                public remainingTimeOfPayment: (number|Long);

                /** OrderInfo currencyCode. */
                public currencyCode: string;

                /** OrderInfo payWay. */
                public payWay: number;

                /** OrderInfo orderItemList. */
                public orderItemList: App.Order.OrderListV3.IOrderItem[];

                /** OrderInfo createTime. */
                public createTime: (number|Long);

                /** OrderInfo paymentCurrencyPrice. */
                public paymentCurrencyPrice: (number|Long);

                /** OrderInfo paymentInfo. */
                public paymentInfo?: (App.Order.OrderListV3.IPaymentInfo|null);

                /**
                 * Creates a new OrderInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderInfo instance
                 */
                public static create(properties?: App.Order.OrderListV3.IOrderInfo): App.Order.OrderListV3.OrderInfo;

                /**
                 * Encodes the specified OrderInfo message. Does not implicitly {@link App.Order.OrderListV3.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV3.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderInfo message, length delimited. Does not implicitly {@link App.Order.OrderListV3.OrderInfo.verify|verify} messages.
                 * @param message OrderInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV3.IOrderInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV3.OrderInfo;

                /**
                 * Decodes an OrderInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV3.OrderInfo;

                /**
                 * Verifies an OrderInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV3.OrderInfo;

                /**
                 * Creates a plain object from an OrderInfo message. Also converts values to other types if specified.
                 * @param message OrderInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV3.OrderInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OrderItem. */
            interface IOrderItem {

                /** OrderItem skuId */
                skuId?: (number|Long|null);

                /** OrderItem proName */
                proName?: (string|null);

                /** OrderItem skuPhoto */
                skuPhoto?: (string|null);

                /** OrderItem optionFormat */
                optionFormat?: (string|null);

                /** OrderItem quantity */
                quantity?: (number|null);

                /** OrderItem salePrice */
                salePrice?: (number|Long|null);

                /** OrderItem handle */
                handle?: (string|null);

                /** OrderItem flashSaleId */
                flashSaleId?: (number|Long|null);
            }

            /** Represents an OrderItem. */
            class OrderItem implements IOrderItem {

                /**
                 * Constructs a new OrderItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV3.IOrderItem);

                /** OrderItem skuId. */
                public skuId: (number|Long);

                /** OrderItem proName. */
                public proName: string;

                /** OrderItem skuPhoto. */
                public skuPhoto: string;

                /** OrderItem optionFormat. */
                public optionFormat: string;

                /** OrderItem quantity. */
                public quantity: number;

                /** OrderItem salePrice. */
                public salePrice: (number|Long);

                /** OrderItem handle. */
                public handle: string;

                /** OrderItem flashSaleId. */
                public flashSaleId: (number|Long);

                /**
                 * Creates a new OrderItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OrderItem instance
                 */
                public static create(properties?: App.Order.OrderListV3.IOrderItem): App.Order.OrderListV3.OrderItem;

                /**
                 * Encodes the specified OrderItem message. Does not implicitly {@link App.Order.OrderListV3.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV3.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OrderItem message, length delimited. Does not implicitly {@link App.Order.OrderListV3.OrderItem.verify|verify} messages.
                 * @param message OrderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV3.IOrderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV3.OrderItem;

                /**
                 * Decodes an OrderItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OrderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV3.OrderItem;

                /**
                 * Verifies an OrderItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OrderItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OrderItem
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV3.OrderItem;

                /**
                 * Creates a plain object from an OrderItem message. Also converts values to other types if specified.
                 * @param message OrderItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV3.OrderItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OrderItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PaymentInfo. */
            interface IPaymentInfo {

                /** PaymentInfo paymentMethodId */
                paymentMethodId?: (number|null);

                /** PaymentInfo payUrl */
                payUrl?: (string|null);

                /** PaymentInfo flowNo */
                flowNo?: (string|null);

                /** PaymentInfo voucher */
                voucher?: (string|null);

                /** PaymentInfo clientToken */
                clientToken?: (string|null);

                /** PaymentInfo sessionId */
                sessionId?: (string|null);
            }

            /** Represents a PaymentInfo. */
            class PaymentInfo implements IPaymentInfo {

                /**
                 * Constructs a new PaymentInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderListV3.IPaymentInfo);

                /** PaymentInfo paymentMethodId. */
                public paymentMethodId: number;

                /** PaymentInfo payUrl. */
                public payUrl: string;

                /** PaymentInfo flowNo. */
                public flowNo: string;

                /** PaymentInfo voucher. */
                public voucher: string;

                /** PaymentInfo clientToken. */
                public clientToken: string;

                /** PaymentInfo sessionId. */
                public sessionId: string;

                /**
                 * Creates a new PaymentInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PaymentInfo instance
                 */
                public static create(properties?: App.Order.OrderListV3.IPaymentInfo): App.Order.OrderListV3.PaymentInfo;

                /**
                 * Encodes the specified PaymentInfo message. Does not implicitly {@link App.Order.OrderListV3.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderListV3.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PaymentInfo message, length delimited. Does not implicitly {@link App.Order.OrderListV3.PaymentInfo.verify|verify} messages.
                 * @param message PaymentInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderListV3.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderListV3.PaymentInfo;

                /**
                 * Decodes a PaymentInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PaymentInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderListV3.PaymentInfo;

                /**
                 * Verifies a PaymentInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PaymentInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderListV3.PaymentInfo;

                /**
                 * Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.
                 * @param message PaymentInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderListV3.PaymentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PaymentInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderMyAddress. */
        namespace OrderMyAddress {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderMyAddress.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderMyAddress.IRequest): App.Order.OrderMyAddress.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderMyAddress.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderMyAddress.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderMyAddress.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderMyAddress.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderMyAddress.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderMyAddress.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderMyAddress.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderMyAddress.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response availableAddress */
                availableAddress?: (App.Order.OrderMyAddress.IAddressInfo[]|null);

                /** Response notAvailableAddress */
                notAvailableAddress?: (App.Order.OrderMyAddress.IAddressInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderMyAddress.IResponse);

                /** Response availableAddress. */
                public availableAddress: App.Order.OrderMyAddress.IAddressInfo[];

                /** Response notAvailableAddress. */
                public notAvailableAddress: App.Order.OrderMyAddress.IAddressInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderMyAddress.IResponse): App.Order.OrderMyAddress.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderMyAddress.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderMyAddress.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderMyAddress.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderMyAddress.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderMyAddress.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderMyAddress.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderMyAddress.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderMyAddress.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddressInfo. */
            interface IAddressInfo {

                /** AddressInfo id */
                id?: (number|Long|null);

                /** AddressInfo countryCode */
                countryCode?: (string|null);

                /** AddressInfo province */
                province?: (string|null);

                /** AddressInfo city */
                city?: (string|null);

                /** AddressInfo zoneCode */
                zoneCode?: (string|null);

                /** AddressInfo phone */
                phone?: (string|null);

                /** AddressInfo address1 */
                address1?: (string|null);

                /** AddressInfo address2 */
                address2?: (string|null);

                /** AddressInfo isDefault */
                isDefault?: (number|null);

                /** AddressInfo zipCode */
                zipCode?: (string|null);

                /** AddressInfo userId */
                userId?: (number|Long|null);

                /** AddressInfo fullName */
                fullName?: (string|null);

                /** AddressInfo taxNum */
                taxNum?: (string|null);

                /** AddressInfo taxType */
                taxType?: (number|null);

                /** AddressInfo marketingStatus */
                marketingStatus?: (number|null);
            }

            /** Represents an AddressInfo. */
            class AddressInfo implements IAddressInfo {

                /**
                 * Constructs a new AddressInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderMyAddress.IAddressInfo);

                /** AddressInfo id. */
                public id: (number|Long);

                /** AddressInfo countryCode. */
                public countryCode: string;

                /** AddressInfo province. */
                public province: string;

                /** AddressInfo city. */
                public city: string;

                /** AddressInfo zoneCode. */
                public zoneCode: string;

                /** AddressInfo phone. */
                public phone: string;

                /** AddressInfo address1. */
                public address1: string;

                /** AddressInfo address2. */
                public address2: string;

                /** AddressInfo isDefault. */
                public isDefault: number;

                /** AddressInfo zipCode. */
                public zipCode: string;

                /** AddressInfo userId. */
                public userId: (number|Long);

                /** AddressInfo fullName. */
                public fullName: string;

                /** AddressInfo taxNum. */
                public taxNum: string;

                /** AddressInfo taxType. */
                public taxType: number;

                /** AddressInfo marketingStatus. */
                public marketingStatus: number;

                /**
                 * Creates a new AddressInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddressInfo instance
                 */
                public static create(properties?: App.Order.OrderMyAddress.IAddressInfo): App.Order.OrderMyAddress.AddressInfo;

                /**
                 * Encodes the specified AddressInfo message. Does not implicitly {@link App.Order.OrderMyAddress.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderMyAddress.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link App.Order.OrderMyAddress.AddressInfo.verify|verify} messages.
                 * @param message AddressInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderMyAddress.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderMyAddress.AddressInfo;

                /**
                 * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddressInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderMyAddress.AddressInfo;

                /**
                 * Verifies an AddressInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddressInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderMyAddress.AddressInfo;

                /**
                 * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                 * @param message AddressInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderMyAddress.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddressInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderPackageDetail. */
        namespace OrderPackageDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPackageDetail.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderPackageDetail.IRequest): App.Order.OrderPackageDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderPackageDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPackageDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderPackageDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPackageDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPackageDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPackageDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPackageDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPackageDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response packageList */
                packageList?: (App.Order.OrderPackageDetail.IPackage[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPackageDetail.IResponse);

                /** Response packageList. */
                public packageList: App.Order.OrderPackageDetail.IPackage[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderPackageDetail.IResponse): App.Order.OrderPackageDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderPackageDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPackageDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderPackageDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPackageDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPackageDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPackageDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPackageDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPackageDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Package. */
            interface IPackage {

                /** Package trackNumber */
                trackNumber?: (string|null);

                /** Package trackUrl */
                trackUrl?: (string|null);

                /** Package companyName */
                companyName?: (string|null);

                /** Package skuPhotoList */
                skuPhotoList?: (string[]|null);

                /** Package logisticsDetailList */
                logisticsDetailList?: (App.Order.OrderPackageDetail.ILogisticsDetail[]|null);
            }

            /** Represents a Package. */
            class Package implements IPackage {

                /**
                 * Constructs a new Package.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPackageDetail.IPackage);

                /** Package trackNumber. */
                public trackNumber: string;

                /** Package trackUrl. */
                public trackUrl: string;

                /** Package companyName. */
                public companyName: string;

                /** Package skuPhotoList. */
                public skuPhotoList: string[];

                /** Package logisticsDetailList. */
                public logisticsDetailList: App.Order.OrderPackageDetail.ILogisticsDetail[];

                /**
                 * Creates a new Package instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Package instance
                 */
                public static create(properties?: App.Order.OrderPackageDetail.IPackage): App.Order.OrderPackageDetail.Package;

                /**
                 * Encodes the specified Package message. Does not implicitly {@link App.Order.OrderPackageDetail.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPackageDetail.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Package message, length delimited. Does not implicitly {@link App.Order.OrderPackageDetail.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPackageDetail.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Package message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPackageDetail.Package;

                /**
                 * Decodes a Package message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPackageDetail.Package;

                /**
                 * Verifies a Package message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Package message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Package
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPackageDetail.Package;

                /**
                 * Creates a plain object from a Package message. Also converts values to other types if specified.
                 * @param message Package
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPackageDetail.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Package to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LogisticsDetail. */
            interface ILogisticsDetail {

                /** LogisticsDetail timestamp */
                timestamp?: (number|Long|null);

                /** LogisticsDetail message */
                message?: (string|null);
            }

            /** Represents a LogisticsDetail. */
            class LogisticsDetail implements ILogisticsDetail {

                /**
                 * Constructs a new LogisticsDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPackageDetail.ILogisticsDetail);

                /** LogisticsDetail timestamp. */
                public timestamp: (number|Long);

                /** LogisticsDetail message. */
                public message: string;

                /**
                 * Creates a new LogisticsDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LogisticsDetail instance
                 */
                public static create(properties?: App.Order.OrderPackageDetail.ILogisticsDetail): App.Order.OrderPackageDetail.LogisticsDetail;

                /**
                 * Encodes the specified LogisticsDetail message. Does not implicitly {@link App.Order.OrderPackageDetail.LogisticsDetail.verify|verify} messages.
                 * @param message LogisticsDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPackageDetail.ILogisticsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LogisticsDetail message, length delimited. Does not implicitly {@link App.Order.OrderPackageDetail.LogisticsDetail.verify|verify} messages.
                 * @param message LogisticsDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPackageDetail.ILogisticsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LogisticsDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LogisticsDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPackageDetail.LogisticsDetail;

                /**
                 * Decodes a LogisticsDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LogisticsDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPackageDetail.LogisticsDetail;

                /**
                 * Verifies a LogisticsDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LogisticsDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LogisticsDetail
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPackageDetail.LogisticsDetail;

                /**
                 * Creates a plain object from a LogisticsDetail message. Also converts values to other types if specified.
                 * @param message LogisticsDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPackageDetail.LogisticsDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LogisticsDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace OrderPayState. */
        namespace OrderPayState {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPayState.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.OrderPayState.IRequest): App.Order.OrderPayState.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.OrderPayState.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPayState.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.OrderPayState.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPayState.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPayState.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPayState.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPayState.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPayState.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response paySuccess */
                paySuccess?: (number|null);

                /** Response userBoxId */
                userBoxId?: (number|Long|null);

                /** Response itemInfoList */
                itemInfoList?: (App.Order.OrInfo.IItemInfo[]|null);

                /** Response orderPriceInfo */
                orderPriceInfo?: (App.Order.OrInfo.IOrderPriceInfo|null);

                /** Response couponCode */
                couponCode?: (string|null);

                /** Response reportAddressInfo */
                reportAddressInfo?: (App.Order.OrInfo.IReportAddressInfo|null);

                /** Response paymentMethod */
                paymentMethod?: (string|null);

                /** Response paymentMethodId */
                paymentMethodId?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.OrderPayState.IResponse);

                /** Response paySuccess. */
                public paySuccess: number;

                /** Response userBoxId. */
                public userBoxId: (number|Long);

                /** Response itemInfoList. */
                public itemInfoList: App.Order.OrInfo.IItemInfo[];

                /** Response orderPriceInfo. */
                public orderPriceInfo?: (App.Order.OrInfo.IOrderPriceInfo|null);

                /** Response couponCode. */
                public couponCode: string;

                /** Response reportAddressInfo. */
                public reportAddressInfo?: (App.Order.OrInfo.IReportAddressInfo|null);

                /** Response paymentMethod. */
                public paymentMethod: string;

                /** Response paymentMethodId. */
                public paymentMethodId: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.OrderPayState.IResponse): App.Order.OrderPayState.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.OrderPayState.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.OrderPayState.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.OrderPayState.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.OrderPayState.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.OrderPayState.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.OrderPayState.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.OrderPayState.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.OrderPayState.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PayOrder. */
        namespace PayOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);

                /** Request hkc */
                hkc?: (number|Long|null);

                /** Request payWay */
                payWay?: (number|null);

                /** Request paramStr */
                paramStr?: (string|null);

                /** Request backUrl */
                backUrl?: (string|null);

                /** Request preFlowNo */
                preFlowNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PayOrder.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /** Request hkc. */
                public hkc: (number|Long);

                /** Request payWay. */
                public payWay: number;

                /** Request paramStr. */
                public paramStr: string;

                /** Request backUrl. */
                public backUrl: string;

                /** Request preFlowNo. */
                public preFlowNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.PayOrder.IRequest): App.Order.PayOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.PayOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PayOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.PayOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PayOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PayOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PayOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PayOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PayOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response payOrderNo */
                payOrderNo?: (string|null);

                /** Response userBoxId */
                userBoxId?: (number|Long|null);

                /** Response payUrl */
                payUrl?: (string|null);

                /** Response payWay */
                payWay?: (number|null);

                /** Response flowNo */
                flowNo?: (string|null);

                /** Response authorizeContent */
                authorizeContent?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PayOrder.IResponse);

                /** Response payOrderNo. */
                public payOrderNo: string;

                /** Response userBoxId. */
                public userBoxId: (number|Long);

                /** Response payUrl. */
                public payUrl: string;

                /** Response payWay. */
                public payWay: number;

                /** Response flowNo. */
                public flowNo: string;

                /** Response authorizeContent. */
                public authorizeContent: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.PayOrder.IResponse): App.Order.PayOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.PayOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PayOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.PayOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PayOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PayOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PayOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PayOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PayOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PlaceOrder. */
        namespace PlaceOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request skuId */
                skuId?: (number|Long|null);

                /** Request quantity */
                quantity?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PlaceOrder.IRequest);

                /** Request skuId. */
                public skuId: (number|Long);

                /** Request quantity. */
                public quantity: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.PlaceOrder.IRequest): App.Order.PlaceOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.PlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.PlaceOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PlaceOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PlaceOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PlaceOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PlaceOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PlaceOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderInfo */
                orderInfo?: (App.Order.OrInfo.IOrderInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PlaceOrder.IResponse);

                /** Response orderInfo. */
                public orderInfo?: (App.Order.OrInfo.IOrderInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.PlaceOrder.IResponse): App.Order.PlaceOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.PlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.PlaceOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PlaceOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PlaceOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PlaceOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PlaceOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PlaceOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PreOrder. */
        namespace PreOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request addressId */
                addressId?: (number|Long|null);

                /** Request shippingMethodId */
                shippingMethodId?: (number|null);

                /** Request paymentMethodId */
                paymentMethodId?: (number|null);

                /** Request couponCode */
                couponCode?: (string|null);

                /** Request hkcRatio */
                hkcRatio?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);

                /** Request specialOfferId */
                specialOfferId?: (number|Long|null);

                /** Request specialOfferLadderId */
                specialOfferLadderId?: (number|Long|null);

                /** Request platform */
                platform?: (number|null);

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PreOrder.IRequest);

                /** Request source. */
                public source: number;

                /** Request addressId. */
                public addressId: (number|Long);

                /** Request shippingMethodId. */
                public shippingMethodId: number;

                /** Request paymentMethodId. */
                public paymentMethodId: number;

                /** Request couponCode. */
                public couponCode: string;

                /** Request hkcRatio. */
                public hkcRatio: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /** Request specialOfferId. */
                public specialOfferId: (number|Long);

                /** Request specialOfferLadderId. */
                public specialOfferLadderId: (number|Long);

                /** Request platform. */
                public platform: number;

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.PreOrder.IRequest): App.Order.PreOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.PreOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PreOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.PreOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PreOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PreOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PreOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PreOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PreOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response preFlowNo */
                preFlowNo?: (string|null);

                /** Response payUrl */
                payUrl?: (string|null);

                /** Response voucher */
                voucher?: (string|null);

                /** Response clientToken */
                clientToken?: (string|null);

                /** Response sessionId */
                sessionId?: (string|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PreOrder.IResponse);

                /** Response preFlowNo. */
                public preFlowNo: string;

                /** Response payUrl. */
                public payUrl: string;

                /** Response voucher. */
                public voucher: string;

                /** Response clientToken. */
                public clientToken: string;

                /** Response sessionId. */
                public sessionId: string;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.PreOrder.IResponse): App.Order.PreOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.PreOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PreOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.PreOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PreOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PreOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PreOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PreOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PreOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace PreOrderVerify. */
        namespace PreOrderVerify {

            /** Properties of a Request. */
            interface IRequest {

                /** Request magicBoxTplId */
                magicBoxTplId?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PreOrderVerify.IRequest);

                /** Request magicBoxTplId. */
                public magicBoxTplId: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.PreOrderVerify.IRequest): App.Order.PreOrderVerify.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.PreOrderVerify.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PreOrderVerify.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.PreOrderVerify.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PreOrderVerify.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PreOrderVerify.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PreOrderVerify.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PreOrderVerify.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PreOrderVerify.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response id */
                id?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.PreOrderVerify.IResponse);

                /** Response id. */
                public id: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.PreOrderVerify.IResponse): App.Order.PreOrderVerify.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.PreOrderVerify.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.PreOrderVerify.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.PreOrderVerify.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.PreOrderVerify.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.PreOrderVerify.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.PreOrderVerify.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.PreOrderVerify.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.PreOrderVerify.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace QueryDelayDeliveryShowFlag. */
        namespace QueryDelayDeliveryShowFlag {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.QueryDelayDeliveryShowFlag.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.QueryDelayDeliveryShowFlag.IRequest): App.Order.QueryDelayDeliveryShowFlag.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.QueryDelayDeliveryShowFlag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.QueryDelayDeliveryShowFlag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.QueryDelayDeliveryShowFlag.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.QueryDelayDeliveryShowFlag.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.QueryDelayDeliveryShowFlag.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.QueryDelayDeliveryShowFlag.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.QueryDelayDeliveryShowFlag.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.QueryDelayDeliveryShowFlag.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response showFlag */
                showFlag?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.QueryDelayDeliveryShowFlag.IResponse);

                /** Response showFlag. */
                public showFlag: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.QueryDelayDeliveryShowFlag.IResponse): App.Order.QueryDelayDeliveryShowFlag.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.QueryDelayDeliveryShowFlag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.QueryDelayDeliveryShowFlag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.QueryDelayDeliveryShowFlag.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.QueryDelayDeliveryShowFlag.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.QueryDelayDeliveryShowFlag.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.QueryDelayDeliveryShowFlag.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.QueryDelayDeliveryShowFlag.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.QueryDelayDeliveryShowFlag.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace QueryNewUserCodeList. */
        namespace QueryNewUserCodeList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request spuId */
                spuId?: (number|Long|null);

                /** Request saleSkuId */
                saleSkuId?: (number|Long|null);

                /** Request skuQuantity */
                skuQuantity?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.QueryNewUserCodeList.IRequest);

                /** Request source. */
                public source: number;

                /** Request spuId. */
                public spuId: (number|Long);

                /** Request saleSkuId. */
                public saleSkuId: (number|Long);

                /** Request skuQuantity. */
                public skuQuantity: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.QueryNewUserCodeList.IRequest): App.Order.QueryNewUserCodeList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.QueryNewUserCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.QueryNewUserCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.QueryNewUserCodeList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.QueryNewUserCodeList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.QueryNewUserCodeList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.QueryNewUserCodeList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.QueryNewUserCodeList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.QueryNewUserCodeList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response codeList */
                codeList?: (App.Order.CouponCodeDetail.IDetail[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.QueryNewUserCodeList.IResponse);

                /** Response codeList. */
                public codeList: App.Order.CouponCodeDetail.IDetail[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.QueryNewUserCodeList.IResponse): App.Order.QueryNewUserCodeList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.QueryNewUserCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.QueryNewUserCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.QueryNewUserCodeList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.QueryNewUserCodeList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.QueryNewUserCodeList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.QueryNewUserCodeList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.QueryNewUserCodeList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.QueryNewUserCodeList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace ReceiveCouponCode. */
        namespace ReceiveCouponCode {

            /** Properties of a Request. */
            interface IRequest {

                /** Request source */
                source?: (number|null);

                /** Request couponCode */
                couponCode?: (string|null);

                /** Request confirmOrderRequest */
                confirmOrderRequest?: (App.Order.ReceiveCouponCode.IConfirmOrderRequest|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ReceiveCouponCode.IRequest);

                /** Request source. */
                public source: number;

                /** Request couponCode. */
                public couponCode: string;

                /** Request confirmOrderRequest. */
                public confirmOrderRequest?: (App.Order.ReceiveCouponCode.IConfirmOrderRequest|null);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.ReceiveCouponCode.IRequest): App.Order.ReceiveCouponCode.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.ReceiveCouponCode.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ReceiveCouponCode.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.ReceiveCouponCode.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ReceiveCouponCode.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ReceiveCouponCode.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ReceiveCouponCode.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ReceiveCouponCode.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ReceiveCouponCode.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response receiveStatus */
                receiveStatus?: (number|null);

                /** Response notUseReasonList */
                notUseReasonList?: (App.Order.ReceiveCouponCode.INotUseReason[]|null);

                /** Response codeInfo */
                codeInfo?: (App.Order.ReceiveCouponCode.ICodeInfo|null);

                /** Response codeCanUseTime */
                codeCanUseTime?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ReceiveCouponCode.IResponse);

                /** Response receiveStatus. */
                public receiveStatus: number;

                /** Response notUseReasonList. */
                public notUseReasonList: App.Order.ReceiveCouponCode.INotUseReason[];

                /** Response codeInfo. */
                public codeInfo?: (App.Order.ReceiveCouponCode.ICodeInfo|null);

                /** Response codeCanUseTime. */
                public codeCanUseTime: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.ReceiveCouponCode.IResponse): App.Order.ReceiveCouponCode.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.ReceiveCouponCode.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ReceiveCouponCode.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.ReceiveCouponCode.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ReceiveCouponCode.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ReceiveCouponCode.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ReceiveCouponCode.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ReceiveCouponCode.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ReceiveCouponCode.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotUseReason. */
            interface INotUseReason {

                /** NotUseReason notUseReasonType */
                notUseReasonType?: (number|null);

                /** NotUseReason diffQuantity */
                diffQuantity?: (number|null);

                /** NotUseReason diffPrice */
                diffPrice?: (number|Long|null);
            }

            /** Represents a NotUseReason. */
            class NotUseReason implements INotUseReason {

                /**
                 * Constructs a new NotUseReason.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ReceiveCouponCode.INotUseReason);

                /** NotUseReason notUseReasonType. */
                public notUseReasonType: number;

                /** NotUseReason diffQuantity. */
                public diffQuantity: number;

                /** NotUseReason diffPrice. */
                public diffPrice: (number|Long);

                /**
                 * Creates a new NotUseReason instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotUseReason instance
                 */
                public static create(properties?: App.Order.ReceiveCouponCode.INotUseReason): App.Order.ReceiveCouponCode.NotUseReason;

                /**
                 * Encodes the specified NotUseReason message. Does not implicitly {@link App.Order.ReceiveCouponCode.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ReceiveCouponCode.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotUseReason message, length delimited. Does not implicitly {@link App.Order.ReceiveCouponCode.NotUseReason.verify|verify} messages.
                 * @param message NotUseReason message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ReceiveCouponCode.INotUseReason, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ReceiveCouponCode.NotUseReason;

                /**
                 * Decodes a NotUseReason message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotUseReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ReceiveCouponCode.NotUseReason;

                /**
                 * Verifies a NotUseReason message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotUseReason message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotUseReason
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ReceiveCouponCode.NotUseReason;

                /**
                 * Creates a plain object from a NotUseReason message. Also converts values to other types if specified.
                 * @param message NotUseReason
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ReceiveCouponCode.NotUseReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotUseReason to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ConfirmOrderRequest. */
            interface IConfirmOrderRequest {

                /** ConfirmOrderRequest source */
                source?: (number|null);

                /** ConfirmOrderRequest hkcRatio */
                hkcRatio?: (number|null);

                /** ConfirmOrderRequest spuId */
                spuId?: (number|Long|null);

                /** ConfirmOrderRequest saleSkuId */
                saleSkuId?: (number|Long|null);

                /** ConfirmOrderRequest skuQuantity */
                skuQuantity?: (number|null);

                /** ConfirmOrderRequest specialOfferId */
                specialOfferId?: (number|Long|null);

                /** ConfirmOrderRequest specialOfferLadderId */
                specialOfferLadderId?: (number|Long|null);

                /** ConfirmOrderRequest addressId */
                addressId?: (number|Long|null);
            }

            /** Represents a ConfirmOrderRequest. */
            class ConfirmOrderRequest implements IConfirmOrderRequest {

                /**
                 * Constructs a new ConfirmOrderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ReceiveCouponCode.IConfirmOrderRequest);

                /** ConfirmOrderRequest source. */
                public source: number;

                /** ConfirmOrderRequest hkcRatio. */
                public hkcRatio: number;

                /** ConfirmOrderRequest spuId. */
                public spuId: (number|Long);

                /** ConfirmOrderRequest saleSkuId. */
                public saleSkuId: (number|Long);

                /** ConfirmOrderRequest skuQuantity. */
                public skuQuantity: number;

                /** ConfirmOrderRequest specialOfferId. */
                public specialOfferId: (number|Long);

                /** ConfirmOrderRequest specialOfferLadderId. */
                public specialOfferLadderId: (number|Long);

                /** ConfirmOrderRequest addressId. */
                public addressId: (number|Long);

                /**
                 * Creates a new ConfirmOrderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConfirmOrderRequest instance
                 */
                public static create(properties?: App.Order.ReceiveCouponCode.IConfirmOrderRequest): App.Order.ReceiveCouponCode.ConfirmOrderRequest;

                /**
                 * Encodes the specified ConfirmOrderRequest message. Does not implicitly {@link App.Order.ReceiveCouponCode.ConfirmOrderRequest.verify|verify} messages.
                 * @param message ConfirmOrderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ReceiveCouponCode.IConfirmOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConfirmOrderRequest message, length delimited. Does not implicitly {@link App.Order.ReceiveCouponCode.ConfirmOrderRequest.verify|verify} messages.
                 * @param message ConfirmOrderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ReceiveCouponCode.IConfirmOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConfirmOrderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConfirmOrderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ReceiveCouponCode.ConfirmOrderRequest;

                /**
                 * Decodes a ConfirmOrderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConfirmOrderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ReceiveCouponCode.ConfirmOrderRequest;

                /**
                 * Verifies a ConfirmOrderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConfirmOrderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConfirmOrderRequest
                 */
                public static fromObject(object: { [k: string]: any }): App.Order.ReceiveCouponCode.ConfirmOrderRequest;

                /**
                 * Creates a plain object from a ConfirmOrderRequest message. Also converts values to other types if specified.
                 * @param message ConfirmOrderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ReceiveCouponCode.ConfirmOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConfirmOrderRequest to JSON.
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

                /** CodeInfo desc */
                desc?: (string|null);

                /** CodeInfo claim */
                claim?: (number|null);

                /** CodeInfo isFirstOrder */
                isFirstOrder?: (number|null);

                /** CodeInfo noEndTime */
                noEndTime?: (number|null);

                /** CodeInfo dateSettingType */
                dateSettingType?: (number|null);

                /** CodeInfo duration */
                duration?: (number|null);

                /** CodeInfo accessChannel */
                accessChannel?: (number|null);

                /** CodeInfo codeId */
                codeId?: (number|Long|null);

                /** CodeInfo notUseReasonList */
                notUseReasonList?: (App.Order.ReceiveCouponCode.INotUseReason[]|null);

                /** CodeInfo excludeIdList */
                excludeIdList?: (number[]|null);

                /** CodeInfo discountPrice */
                discountPrice?: (number|Long|null);
            }

            /** Represents a CodeInfo. */
            class CodeInfo implements ICodeInfo {

                /**
                 * Constructs a new CodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.ReceiveCouponCode.ICodeInfo);

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

                /** CodeInfo desc. */
                public desc: string;

                /** CodeInfo claim. */
                public claim: number;

                /** CodeInfo isFirstOrder. */
                public isFirstOrder: number;

                /** CodeInfo noEndTime. */
                public noEndTime: number;

                /** CodeInfo dateSettingType. */
                public dateSettingType: number;

                /** CodeInfo duration. */
                public duration: number;

                /** CodeInfo accessChannel. */
                public accessChannel: number;

                /** CodeInfo codeId. */
                public codeId: (number|Long);

                /** CodeInfo notUseReasonList. */
                public notUseReasonList: App.Order.ReceiveCouponCode.INotUseReason[];

                /** CodeInfo excludeIdList. */
                public excludeIdList: number[];

                /** CodeInfo discountPrice. */
                public discountPrice: (number|Long);

                /**
                 * Creates a new CodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CodeInfo instance
                 */
                public static create(properties?: App.Order.ReceiveCouponCode.ICodeInfo): App.Order.ReceiveCouponCode.CodeInfo;

                /**
                 * Encodes the specified CodeInfo message. Does not implicitly {@link App.Order.ReceiveCouponCode.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.ReceiveCouponCode.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfo message, length delimited. Does not implicitly {@link App.Order.ReceiveCouponCode.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.ReceiveCouponCode.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.ReceiveCouponCode.CodeInfo;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.ReceiveCouponCode.CodeInfo;

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
                public static fromObject(object: { [k: string]: any }): App.Order.ReceiveCouponCode.CodeInfo;

                /**
                 * Creates a plain object from a CodeInfo message. Also converts values to other types if specified.
                 * @param message CodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.ReceiveCouponCode.CodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace TryCaptureOrder. */
        namespace TryCaptureOrder {

            /** Properties of a Request. */
            interface IRequest {

                /** Request orderNo */
                orderNo?: (string|null);

                /** Request flowNo */
                flowNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.TryCaptureOrder.IRequest);

                /** Request orderNo. */
                public orderNo: string;

                /** Request flowNo. */
                public flowNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.TryCaptureOrder.IRequest): App.Order.TryCaptureOrder.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.TryCaptureOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.TryCaptureOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.TryCaptureOrder.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.TryCaptureOrder.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.TryCaptureOrder.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.TryCaptureOrder.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.TryCaptureOrder.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.TryCaptureOrder.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderNo */
                orderNo?: (string|null);

                /** Response payUrl */
                payUrl?: (string|null);

                /** Response reauthorize */
                reauthorize?: (boolean|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.TryCaptureOrder.IResponse);

                /** Response orderNo. */
                public orderNo: string;

                /** Response payUrl. */
                public payUrl: string;

                /** Response reauthorize. */
                public reauthorize: boolean;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.TryCaptureOrder.IResponse): App.Order.TryCaptureOrder.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.TryCaptureOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.TryCaptureOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.TryCaptureOrder.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.TryCaptureOrder.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.TryCaptureOrder.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.TryCaptureOrder.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.TryCaptureOrder.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.TryCaptureOrder.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserOrderList. */
        namespace UserOrderList {

            /** Properties of a Request. */
            interface IRequest {

                /** Request searchName */
                searchName?: (string|null);

                /** Request appOrderState */
                appOrderState?: (number|null);

                /** Request createTime */
                createTime?: (number|Long|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.UserOrderList.IRequest);

                /** Request searchName. */
                public searchName: string;

                /** Request appOrderState. */
                public appOrderState: number;

                /** Request createTime. */
                public createTime: (number|Long);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.UserOrderList.IRequest): App.Order.UserOrderList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.UserOrderList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserOrderList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.UserOrderList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserOrderList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserOrderList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserOrderList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserOrderList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserOrderList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response orderList */
                orderList?: (App.Order.OrInfo.IOrderInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.UserOrderList.IResponse);

                /** Response orderList. */
                public orderList: App.Order.OrInfo.IOrderInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.UserOrderList.IResponse): App.Order.UserOrderList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.UserOrderList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserOrderList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.UserOrderList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserOrderList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserOrderList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserOrderList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserOrderList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserOrderList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserRefundOrderDetail. */
        namespace UserRefundOrderDetail {

            /** Properties of a Request. */
            interface IRequest {

                /** Request refundNo */
                refundNo?: (string|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.UserRefundOrderDetail.IRequest);

                /** Request refundNo. */
                public refundNo: string;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.UserRefundOrderDetail.IRequest): App.Order.UserRefundOrderDetail.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.UserRefundOrderDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserRefundOrderDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.UserRefundOrderDetail.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserRefundOrderDetail.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserRefundOrderDetail.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserRefundOrderDetail.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserRefundOrderDetail.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserRefundOrderDetail.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response refundOrderInfo */
                refundOrderInfo?: (App.Order.OrInfo.IRefundOrderInfo|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.UserRefundOrderDetail.IResponse);

                /** Response refundOrderInfo. */
                public refundOrderInfo?: (App.Order.OrInfo.IRefundOrderInfo|null);

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.UserRefundOrderDetail.IResponse): App.Order.UserRefundOrderDetail.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.UserRefundOrderDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserRefundOrderDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.UserRefundOrderDetail.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserRefundOrderDetail.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserRefundOrderDetail.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserRefundOrderDetail.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserRefundOrderDetail.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserRefundOrderDetail.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace UserRefundOrderList. */
        namespace UserRefundOrderList {

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
                constructor(properties?: App.Order.UserRefundOrderList.IRequest);

                /** Request pageNum. */
                public pageNum: number;

                /** Request pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Order.UserRefundOrderList.IRequest): App.Order.UserRefundOrderList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Order.UserRefundOrderList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserRefundOrderList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Order.UserRefundOrderList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserRefundOrderList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserRefundOrderList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserRefundOrderList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserRefundOrderList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserRefundOrderList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response refundOrderInfoList */
                refundOrderInfoList?: (App.Order.OrInfo.IRefundOrderInfo[]|null);

                /** Response total */
                total?: (number|null);

                /** Response pageNum */
                pageNum?: (number|null);

                /** Response pageSize */
                pageSize?: (number|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Order.UserRefundOrderList.IResponse);

                /** Response refundOrderInfoList. */
                public refundOrderInfoList: App.Order.OrInfo.IRefundOrderInfo[];

                /** Response total. */
                public total: number;

                /** Response pageNum. */
                public pageNum: number;

                /** Response pageSize. */
                public pageSize: number;

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Order.UserRefundOrderList.IResponse): App.Order.UserRefundOrderList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Order.UserRefundOrderList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Order.UserRefundOrderList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Order.UserRefundOrderList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Order.UserRefundOrderList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Order.UserRefundOrderList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Order.UserRefundOrderList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Order.UserRefundOrderList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Order.UserRefundOrderList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace Cart. */
    namespace Cart {

        /** Namespace OrderPayment. */
        namespace OrderPayment {

            /** Properties of a Request. */
            interface IRequest {

                /** Request country */
                country?: (string|null);

                /** Request language */
                language?: (string|null);

                /** Request currency */
                currency?: (string|null);

                /** Request paymentPosition */
                paymentPosition?: (number|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.OrderPayment.IRequest);

                /** Request country. */
                public country: string;

                /** Request language. */
                public language: string;

                /** Request currency. */
                public currency: string;

                /** Request paymentPosition. */
                public paymentPosition: number;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.Cart.OrderPayment.IRequest): App.Cart.OrderPayment.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.Cart.OrderPayment.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.OrderPayment.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.Cart.OrderPayment.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.OrderPayment.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.OrderPayment.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.OrderPayment.Request;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.OrderPayment.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.OrderPayment.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response paymentList */
                paymentList?: (App.Cart.OrderPayment.IPayment[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.OrderPayment.IResponse);

                /** Response paymentList. */
                public paymentList: App.Cart.OrderPayment.IPayment[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.Cart.OrderPayment.IResponse): App.Cart.OrderPayment.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.Cart.OrderPayment.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.OrderPayment.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.Cart.OrderPayment.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.OrderPayment.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.OrderPayment.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.OrderPayment.Response;

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
                public static fromObject(object: { [k: string]: any }): App.Cart.OrderPayment.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.OrderPayment.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Payment. */
            interface IPayment {

                /** Payment id */
                id?: (number|null);

                /** Payment name */
                name?: (string|null);

                /** Payment currencies */
                currencies?: (string|null);

                /** Payment paymentIcon */
                paymentIcon?: (string|null);

                /** Payment paymentLogo */
                paymentLogo?: (string|null);

                /** Payment languageTitle */
                languageTitle?: (string|null);

                /** Payment accessType */
                accessType?: (number|null);

                /** Payment pcPaymentIcon */
                pcPaymentIcon?: (string|null);

                /** Payment minAmount */
                minAmount?: (number|null);

                /** Payment currencyMinAmount */
                currencyMinAmount?: (number|null);
            }

            /** Represents a Payment. */
            class Payment implements IPayment {

                /**
                 * Constructs a new Payment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.Cart.OrderPayment.IPayment);

                /** Payment id. */
                public id: number;

                /** Payment name. */
                public name: string;

                /** Payment currencies. */
                public currencies: string;

                /** Payment paymentIcon. */
                public paymentIcon: string;

                /** Payment paymentLogo. */
                public paymentLogo: string;

                /** Payment languageTitle. */
                public languageTitle: string;

                /** Payment accessType. */
                public accessType: number;

                /** Payment pcPaymentIcon. */
                public pcPaymentIcon: string;

                /** Payment minAmount. */
                public minAmount: number;

                /** Payment currencyMinAmount. */
                public currencyMinAmount: number;

                /**
                 * Creates a new Payment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payment instance
                 */
                public static create(properties?: App.Cart.OrderPayment.IPayment): App.Cart.OrderPayment.Payment;

                /**
                 * Encodes the specified Payment message. Does not implicitly {@link App.Cart.OrderPayment.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.Cart.OrderPayment.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payment message, length delimited. Does not implicitly {@link App.Cart.OrderPayment.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.Cart.OrderPayment.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.Cart.OrderPayment.Payment;

                /**
                 * Decodes a Payment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.Cart.OrderPayment.Payment;

                /**
                 * Verifies a Payment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payment
                 */
                public static fromObject(object: { [k: string]: any }): App.Cart.OrderPayment.Payment;

                /**
                 * Creates a plain object from a Payment message. Also converts values to other types if specified.
                 * @param message Payment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.Cart.OrderPayment.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
