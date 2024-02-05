/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class JCFException extends Error {
        constructor(message, cause) {
            if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof Error) || cause === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super(message);
                    this.message = message;
                    if (this.__quickstart_JCFException_cause === undefined) {
                        this.__quickstart_JCFException_cause = null;
                    }
                    this.__quickstart_JCFException_cause = null;
                }
                if (this.__quickstart_JCFException_cause === undefined) {
                    this.__quickstart_JCFException_cause = null;
                }
                (() => {
                    this.__quickstart_JCFException_cause = cause;
                })();
            }
            else if (((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = arguments;
                super(message);
                this.message = message;
                if (this.__quickstart_JCFException_cause === undefined) {
                    this.__quickstart_JCFException_cause = null;
                }
                this.__quickstart_JCFException_cause = null;
            }
            else if (message === undefined && cause === undefined) {
                let __args = arguments;
                super();
                if (this.__quickstart_JCFException_cause === undefined) {
                    this.__quickstart_JCFException_cause = null;
                }
                this.__quickstart_JCFException_cause = null;
            }
            else
                throw new Error('invalid overload');
        }
        getCause() {
            return this.__quickstart_JCFException_cause;
        }
        printStackTraceWithCause$() {
            if (this.__quickstart_JCFException_cause != null)
                console.error(this.__quickstart_JCFException_cause.message, this.__quickstart_JCFException_cause);
        }
        printStackTraceWithCause$java_lang_Object(s) {
        }
        printStackTraceWithCause(s) {
            if (((s != null) || s === null)) {
                return this.printStackTraceWithCause$java_lang_Object(s);
            }
            else if (s === undefined) {
                return this.printStackTraceWithCause$();
            }
            else
                throw new Error('invalid overload');
        }
        getStackTraceString() {
            return this.getStackTrace(this);
        }
        getStackTraceStringOfCause() {
            return this.getStackTrace(this.__quickstart_JCFException_cause);
        }
        /*private*/ getStackTrace(th) {
            const trace = null;
            return trace;
        }
    }
    JCFException.CLASS_VERSION = "V01L20";
    JCFException.COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
    JCFException.FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
    JCFException.CLASS_NAME = "JCFException";
    quickstart.JCFException = JCFException;
    JCFException["__class"] = "quickstart.JCFException";
})(quickstart || (quickstart = {}));
