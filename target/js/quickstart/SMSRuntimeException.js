/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SMSRuntimeException extends Error {
        constructor(message, th) {
            if (((typeof message === 'string') || message === null) && ((th != null && (th["__classes"] && th["__classes"].indexOf("java.lang.Throwable") >= 0) || th != null && th instanceof Error) || th === null)) {
                let __args = arguments;
                super();
                if (this.th === undefined) {
                    this.th = null;
                }
                if (this.cdError === undefined) {
                    this.cdError = null;
                }
            }
            else if (((typeof message === 'string') || message === null) && th === undefined) {
                let __args = arguments;
                super();
                if (this.th === undefined) {
                    this.th = null;
                }
                if (this.cdError === undefined) {
                    this.cdError = null;
                }
            }
            else if (((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof Error) || message === null) && th === undefined) {
                let __args = arguments;
                let th = __args[0];
                super();
                if (this.th === undefined) {
                    this.th = null;
                }
                if (this.cdError === undefined) {
                    this.cdError = null;
                }
            }
            else
                throw new Error('invalid overload');
        }
        getException() {
            return this.th;
        }
        printStackTrace$() {
        }
        printStackTrace$java_lang_Object(ps) {
        }
        printStackTrace(ps) {
            if (((ps != null) || ps === null)) {
                return this.printStackTrace$java_lang_Object(ps);
            }
            else if (ps === undefined) {
                return this.printStackTrace$();
            }
            else
                throw new Error('invalid overload');
        }
        getCdError() {
            return this.cdError;
        }
        setCdError(cdError) {
            this.cdError = cdError;
        }
    }
    quickstart.SMSRuntimeException = SMSRuntimeException;
    SMSRuntimeException["__class"] = "quickstart.SMSRuntimeException";
})(quickstart || (quickstart = {}));
