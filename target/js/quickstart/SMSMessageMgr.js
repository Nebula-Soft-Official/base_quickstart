/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SMSMessageMgr {
        static getMessage$java_lang_String$java_lang_String_A(messageCode, messageDetail) {
            return null;
        }
        static getMessage(messageCode, messageDetail) {
            if (((typeof messageCode === 'string') || messageCode === null) && ((messageDetail != null && messageDetail instanceof Array && (messageDetail.length == 0 || messageDetail[0] == null || (typeof messageDetail[0] === 'string'))) || messageDetail === null)) {
                return quickstart.SMSMessageMgr.getMessage$java_lang_String$java_lang_String_A(messageCode, messageDetail);
            }
            else if (((typeof messageCode === 'string') || messageCode === null) && messageDetail === undefined) {
                return quickstart.SMSMessageMgr.getMessage$java_lang_String(messageCode);
            }
            else
                throw new Error('invalid overload');
        }
        static getMessage$java_lang_String(messageCode) {
            return null;
        }
    }
    quickstart.SMSMessageMgr = SMSMessageMgr;
    SMSMessageMgr["__class"] = "quickstart.SMSMessageMgr";
})(quickstart || (quickstart = {}));
