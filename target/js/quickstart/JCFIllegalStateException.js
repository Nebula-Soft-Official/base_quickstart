/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class JCFIllegalStateException extends quickstart.JCFException {
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
    JCFIllegalStateException.CLASS_VERSION = "V01L01";
    JCFIllegalStateException.COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
    JCFIllegalStateException.FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
    JCFIllegalStateException.__quickstart_JCFIllegalStateException_CLASS_NAME = "JCFIllegalStateException";
    quickstart.JCFIllegalStateException = JCFIllegalStateException;
    JCFIllegalStateException["__class"] = "quickstart.JCFIllegalStateException";
})(quickstart || (quickstart = {}));
