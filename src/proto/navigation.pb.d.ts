import * as $protobuf from "protobufjs";
/** Namespace App. */
export namespace App {

    /** Namespace navigation. */
    namespace navigation {

        /** Namespace AppNavigationInfo. */
        namespace AppNavigationInfo {

            /** Properties of a Request. */
            interface IRequest {

                /** Request navKeyList */
                navKeyList?: ((number|Long)[]|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationInfo.IRequest);

                /** Request navKeyList. */
                public navKeyList: (number|Long)[];

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.navigation.AppNavigationInfo.IRequest): App.navigation.AppNavigationInfo.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.navigation.AppNavigationInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.navigation.AppNavigationInfo.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationInfo.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationInfo.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationInfo.Request;

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
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationInfo.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationInfo.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response menuList */
                menuList?: (App.navigation.AppNavigationInfo.INavigationMenuInfo[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationInfo.IResponse);

                /** Response menuList. */
                public menuList: App.navigation.AppNavigationInfo.INavigationMenuInfo[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.navigation.AppNavigationInfo.IResponse): App.navigation.AppNavigationInfo.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.navigation.AppNavigationInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.navigation.AppNavigationInfo.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationInfo.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationInfo.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationInfo.Response;

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
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationInfo.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationInfo.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NavigationMenuInfo. */
            interface INavigationMenuInfo {

                /** NavigationMenuInfo navKey */
                navKey?: (number|Long|null);

                /** NavigationMenuInfo languageMap */
                languageMap?: ({ [k: string]: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage }|null);

                /** NavigationMenuInfo type */
                type?: (number|null);

                /** NavigationMenuInfo content */
                content?: (string|null);

                /** NavigationMenuInfo handle */
                handle?: (string|null);
            }

            /** Represents a NavigationMenuInfo. */
            class NavigationMenuInfo implements INavigationMenuInfo {

                /**
                 * Constructs a new NavigationMenuInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationInfo.INavigationMenuInfo);

                /** NavigationMenuInfo navKey. */
                public navKey: (number|Long);

                /** NavigationMenuInfo languageMap. */
                public languageMap: { [k: string]: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage };

                /** NavigationMenuInfo type. */
                public type: number;

                /** NavigationMenuInfo content. */
                public content: string;

                /** NavigationMenuInfo handle. */
                public handle: string;

                /**
                 * Creates a new NavigationMenuInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NavigationMenuInfo instance
                 */
                public static create(properties?: App.navigation.AppNavigationInfo.INavigationMenuInfo): App.navigation.AppNavigationInfo.NavigationMenuInfo;

                /**
                 * Encodes the specified NavigationMenuInfo message. Does not implicitly {@link App.navigation.AppNavigationInfo.NavigationMenuInfo.verify|verify} messages.
                 * @param message NavigationMenuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationInfo.INavigationMenuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NavigationMenuInfo message, length delimited. Does not implicitly {@link App.navigation.AppNavigationInfo.NavigationMenuInfo.verify|verify} messages.
                 * @param message NavigationMenuInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationInfo.INavigationMenuInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NavigationMenuInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NavigationMenuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationInfo.NavigationMenuInfo;

                /**
                 * Decodes a NavigationMenuInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NavigationMenuInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationInfo.NavigationMenuInfo;

                /**
                 * Verifies a NavigationMenuInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NavigationMenuInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NavigationMenuInfo
                 */
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationInfo.NavigationMenuInfo;

                /**
                 * Creates a plain object from a NavigationMenuInfo message. Also converts values to other types if specified.
                 * @param message NavigationMenuInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationInfo.NavigationMenuInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NavigationMenuInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppNavigationModuleInfo. */
        namespace AppNavigationModuleInfo {

            /** Properties of a NavigationMenuLanguage. */
            interface INavigationMenuLanguage {

                /** NavigationMenuLanguage navKey */
                navKey?: (number|Long|null);

                /** NavigationMenuLanguage name */
                name?: (string|null);

                /** NavigationMenuLanguage picUrl */
                picUrl?: (string|null);
            }

            /** Represents a NavigationMenuLanguage. */
            class NavigationMenuLanguage implements INavigationMenuLanguage {

                /**
                 * Constructs a new NavigationMenuLanguage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage);

                /** NavigationMenuLanguage navKey. */
                public navKey: (number|Long);

                /** NavigationMenuLanguage name. */
                public name: string;

                /** NavigationMenuLanguage picUrl. */
                public picUrl: string;

                /**
                 * Creates a new NavigationMenuLanguage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NavigationMenuLanguage instance
                 */
                public static create(properties?: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage): App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage;

                /**
                 * Encodes the specified NavigationMenuLanguage message. Does not implicitly {@link App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage.verify|verify} messages.
                 * @param message NavigationMenuLanguage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NavigationMenuLanguage message, length delimited. Does not implicitly {@link App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage.verify|verify} messages.
                 * @param message NavigationMenuLanguage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationModuleInfo.INavigationMenuLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NavigationMenuLanguage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NavigationMenuLanguage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage;

                /**
                 * Decodes a NavigationMenuLanguage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NavigationMenuLanguage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage;

                /**
                 * Verifies a NavigationMenuLanguage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NavigationMenuLanguage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NavigationMenuLanguage
                 */
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage;

                /**
                 * Creates a plain object from a NavigationMenuLanguage message. Also converts values to other types if specified.
                 * @param message NavigationMenuLanguage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationModuleInfo.NavigationMenuLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NavigationMenuLanguage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MenuBannerPositionItem. */
            interface IMenuBannerPositionItem {

                /** MenuBannerPositionItem positionKey */
                positionKey?: (number|Long|null);

                /** MenuBannerPositionItem type */
                type?: (number|null);

                /** MenuBannerPositionItem content */
                content?: (string|null);

                /** MenuBannerPositionItem picUrl */
                picUrl?: (string|null);
            }

            /** Represents a MenuBannerPositionItem. */
            class MenuBannerPositionItem implements IMenuBannerPositionItem {

                /**
                 * Constructs a new MenuBannerPositionItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem);

                /** MenuBannerPositionItem positionKey. */
                public positionKey: (number|Long);

                /** MenuBannerPositionItem type. */
                public type: number;

                /** MenuBannerPositionItem content. */
                public content: string;

                /** MenuBannerPositionItem picUrl. */
                public picUrl: string;

                /**
                 * Creates a new MenuBannerPositionItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MenuBannerPositionItem instance
                 */
                public static create(properties?: App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem): App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem;

                /**
                 * Encodes the specified MenuBannerPositionItem message. Does not implicitly {@link App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem.verify|verify} messages.
                 * @param message MenuBannerPositionItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MenuBannerPositionItem message, length delimited. Does not implicitly {@link App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem.verify|verify} messages.
                 * @param message MenuBannerPositionItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MenuBannerPositionItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MenuBannerPositionItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem;

                /**
                 * Decodes a MenuBannerPositionItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MenuBannerPositionItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem;

                /**
                 * Verifies a MenuBannerPositionItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MenuBannerPositionItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MenuBannerPositionItem
                 */
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem;

                /**
                 * Creates a plain object from a MenuBannerPositionItem message. Also converts values to other types if specified.
                 * @param message MenuBannerPositionItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationModuleInfo.MenuBannerPositionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MenuBannerPositionItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace AppNavigationList. */
        namespace AppNavigationList {

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationList.IRequest);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: App.navigation.AppNavigationList.IRequest): App.navigation.AppNavigationList.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link App.navigation.AppNavigationList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link App.navigation.AppNavigationList.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationList.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationList.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationList.Request;

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
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationList.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationList.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response menuList */
                menuList?: (App.navigation.AppNavigationList.INavigationMenuCascade[]|null);

                /** Response homeMenuList */
                homeMenuList?: (App.navigation.AppNavigationList.INavigationMenuCascade[]|null);
            }

            /** Represents a Response. */
            class Response implements IResponse {

                /**
                 * Constructs a new Response.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationList.IResponse);

                /** Response menuList. */
                public menuList: App.navigation.AppNavigationList.INavigationMenuCascade[];

                /** Response homeMenuList. */
                public homeMenuList: App.navigation.AppNavigationList.INavigationMenuCascade[];

                /**
                 * Creates a new Response instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Response instance
                 */
                public static create(properties?: App.navigation.AppNavigationList.IResponse): App.navigation.AppNavigationList.Response;

                /**
                 * Encodes the specified Response message. Does not implicitly {@link App.navigation.AppNavigationList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Response message, length delimited. Does not implicitly {@link App.navigation.AppNavigationList.Response.verify|verify} messages.
                 * @param message Response message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationList.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationList.Response;

                /**
                 * Decodes a Response message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationList.Response;

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
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationList.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param message Response
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationList.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NavigationMenuCascade. */
            interface INavigationMenuCascade {

                /** NavigationMenuCascade menuId */
                menuId?: (number|Long|null);

                /** NavigationMenuCascade navKey */
                navKey?: (number|Long|null);

                /** NavigationMenuCascade parentMenuId */
                parentMenuId?: (number|Long|null);

                /** NavigationMenuCascade name */
                name?: (string|null);

                /** NavigationMenuCascade enName */
                enName?: (string|null);

                /** NavigationMenuCascade type */
                type?: (number|null);

                /** NavigationMenuCascade content */
                content?: (string|null);

                /** NavigationMenuCascade picUrl */
                picUrl?: (string|null);

                /** NavigationMenuCascade level */
                level?: (number|null);

                /** NavigationMenuCascade handle */
                handle?: (string|null);

                /** NavigationMenuCascade traceTitle */
                traceTitle?: (string|null);

                /** NavigationMenuCascade sonMenuList */
                sonMenuList?: (App.navigation.AppNavigationList.INavigationMenuCascade[]|null);

                /** NavigationMenuCascade viewStatus */
                viewStatus?: (number|null);

                /** NavigationMenuCascade bannerSwitch */
                bannerSwitch?: (number|null);

                /** NavigationMenuCascade color */
                color?: (string|null);

                /** NavigationMenuCascade bold */
                bold?: (number|null);

                /** NavigationMenuCascade italic */
                italic?: (number|null);

                /** NavigationMenuCascade iconImage */
                iconImage?: (string|null);

                /** NavigationMenuCascade position */
                position?: (App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem[]|null);
            }

            /** Represents a NavigationMenuCascade. */
            class NavigationMenuCascade implements INavigationMenuCascade {

                /**
                 * Constructs a new NavigationMenuCascade.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: App.navigation.AppNavigationList.INavigationMenuCascade);

                /** NavigationMenuCascade menuId. */
                public menuId: (number|Long);

                /** NavigationMenuCascade navKey. */
                public navKey: (number|Long);

                /** NavigationMenuCascade parentMenuId. */
                public parentMenuId: (number|Long);

                /** NavigationMenuCascade name. */
                public name: string;

                /** NavigationMenuCascade enName. */
                public enName: string;

                /** NavigationMenuCascade type. */
                public type: number;

                /** NavigationMenuCascade content. */
                public content: string;

                /** NavigationMenuCascade picUrl. */
                public picUrl: string;

                /** NavigationMenuCascade level. */
                public level: number;

                /** NavigationMenuCascade handle. */
                public handle: string;

                /** NavigationMenuCascade traceTitle. */
                public traceTitle: string;

                /** NavigationMenuCascade sonMenuList. */
                public sonMenuList: App.navigation.AppNavigationList.INavigationMenuCascade[];

                /** NavigationMenuCascade viewStatus. */
                public viewStatus: number;

                /** NavigationMenuCascade bannerSwitch. */
                public bannerSwitch: number;

                /** NavigationMenuCascade color. */
                public color: string;

                /** NavigationMenuCascade bold. */
                public bold: number;

                /** NavigationMenuCascade italic. */
                public italic: number;

                /** NavigationMenuCascade iconImage. */
                public iconImage: string;

                /** NavigationMenuCascade position. */
                public position: App.navigation.AppNavigationModuleInfo.IMenuBannerPositionItem[];

                /**
                 * Creates a new NavigationMenuCascade instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NavigationMenuCascade instance
                 */
                public static create(properties?: App.navigation.AppNavigationList.INavigationMenuCascade): App.navigation.AppNavigationList.NavigationMenuCascade;

                /**
                 * Encodes the specified NavigationMenuCascade message. Does not implicitly {@link App.navigation.AppNavigationList.NavigationMenuCascade.verify|verify} messages.
                 * @param message NavigationMenuCascade message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: App.navigation.AppNavigationList.INavigationMenuCascade, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NavigationMenuCascade message, length delimited. Does not implicitly {@link App.navigation.AppNavigationList.NavigationMenuCascade.verify|verify} messages.
                 * @param message NavigationMenuCascade message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: App.navigation.AppNavigationList.INavigationMenuCascade, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NavigationMenuCascade message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NavigationMenuCascade
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): App.navigation.AppNavigationList.NavigationMenuCascade;

                /**
                 * Decodes a NavigationMenuCascade message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NavigationMenuCascade
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): App.navigation.AppNavigationList.NavigationMenuCascade;

                /**
                 * Verifies a NavigationMenuCascade message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NavigationMenuCascade message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NavigationMenuCascade
                 */
                public static fromObject(object: { [k: string]: any }): App.navigation.AppNavigationList.NavigationMenuCascade;

                /**
                 * Creates a plain object from a NavigationMenuCascade message. Also converts values to other types if specified.
                 * @param message NavigationMenuCascade
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: App.navigation.AppNavigationList.NavigationMenuCascade, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NavigationMenuCascade to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
