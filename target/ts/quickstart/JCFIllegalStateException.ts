/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    export class JCFIllegalStateException extends quickstart.JCFException {
        public constructor(message?: any, cause?: any) {
            if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
                let __args = arguments;
                super(message, cause);
            } else if (((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = arguments;
                super(message);
            } else if (message === undefined && cause === undefined) {
                let __args = arguments;
                super();
            } else throw new Error('invalid overload');
        }

        public static CLASS_VERSION: string = "V01L01";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static __quickstart_JCFIllegalStateException_CLASS_NAME: string = "JCFIllegalStateException";
    }
    JCFIllegalStateException["__class"] = "quickstart.JCFIllegalStateException";

}

