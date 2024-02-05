/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class JCFIllegalArgumentException extends quickstart.JCFException {
        constructor(message, cause) {
            if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof Error) || cause === null)) {
                let __args = arguments;
                super(message, cause);
            }
            else if (((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = arguments;
                super(message);
            }
            else if (message === undefined && cause === undefined) {
                let __args = arguments;
                super();
            }
            else
                throw new Error('invalid overload');
        }
    }
    JCFIllegalArgumentException.CLASS_VERSION = "V01L01";
    JCFIllegalArgumentException.COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
    JCFIllegalArgumentException.FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
    JCFIllegalArgumentException.__quickstart_JCFIllegalArgumentException_CLASS_NAME = "JCFIllegalArgumentException";
    quickstart.JCFIllegalArgumentException = JCFIllegalArgumentException;
    JCFIllegalArgumentException["__class"] = "quickstart.JCFIllegalArgumentException";
})(quickstart || (quickstart = {}));
