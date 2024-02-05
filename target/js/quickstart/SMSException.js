/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    /**
     * 繧ｳ繝ｳ繧ｹ繝医Λ繧ｯ繧ｿ縺ｧ縺吶��<br>
     * @param String messageCode
     * @param String[] detail
     * @param {string} messageCode
     * @param {java.lang.String[]} detail
     * @class
     * @extends Error
     */
    class SMSException extends Error {
        constructor(messageCode, detail) {
            if (((typeof messageCode === 'string') || messageCode === null) && ((detail != null && detail instanceof Array && (detail.length == 0 || detail[0] == null || (typeof detail[0] === 'string'))) || detail === null)) {
                let __args = arguments;
                super();
                if (this.message === undefined) {
                    this.message = null;
                }
                if (this.messageCode === undefined) {
                    this.messageCode = null;
                }
                if (this.messageDetail === undefined) {
                    this.messageDetail = null;
                }
                if (this.rootCause === undefined) {
                    this.rootCause = null;
                }
                this.messageCode = messageCode;
                this.messageDetail = detail;
            }
            else if (((typeof messageCode === 'string') || messageCode === null) && detail === undefined) {
                let __args = arguments;
                super();
                if (this.message === undefined) {
                    this.message = null;
                }
                if (this.messageCode === undefined) {
                    this.messageCode = null;
                }
                if (this.messageDetail === undefined) {
                    this.messageDetail = null;
                }
                if (this.rootCause === undefined) {
                    this.rootCause = null;
                }
                this.messageCode = messageCode;
                this.messageDetail = null;
            }
            else if (((messageCode != null && (messageCode["__classes"] && messageCode["__classes"].indexOf("java.lang.Throwable") >= 0) || messageCode != null && messageCode instanceof Error) || messageCode === null) && detail === undefined) {
                let __args = arguments;
                let ex = __args[0];
                super();
                if (this.message === undefined) {
                    this.message = null;
                }
                if (this.messageCode === undefined) {
                    this.messageCode = null;
                }
                if (this.messageDetail === undefined) {
                    this.messageDetail = null;
                }
                if (this.rootCause === undefined) {
                    this.rootCause = null;
                }
                this.rootCause = ex;
            }
            else if (messageCode === undefined && detail === undefined) {
                let __args = arguments;
                super();
                if (this.message === undefined) {
                    this.message = null;
                }
                if (this.messageCode === undefined) {
                    this.messageCode = null;
                }
                if (this.messageDetail === undefined) {
                    this.messageDetail = null;
                }
                if (this.rootCause === undefined) {
                    this.rootCause = null;
                }
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * 繝｡繝�繧ｻ繝ｼ繧ｸ繧ｳ繝ｼ繝峨ｒ蜿門ｾ励＠縺ｾ縺吶��<br>
         * @return {string} String 繝｡繝�繧ｻ繝ｼ繧ｸ繧ｳ繝ｼ繝�
         */
        getMessageCode() {
            return this.messageCode;
        }
        /**
         * 繝｡繝�繧ｻ繝ｼ繧ｸ陬懆ｶｳ�ｼ育ｽｮ謠帙ヱ繝ｩ繝｡繧ｿ�ｼ峨ｒ蜿門ｾ励＠縺ｾ縺吶��<br>
         * @return {java.lang.String[]} String 繝｡繝�繧ｻ繝ｼ繧ｸ陬懆ｶｳ
         */
        getMessageDetail() {
            return this.messageDetail;
        }
        /**
         * 繝｡繝�繧ｻ繝ｼ繧ｸ繧貞叙蠕励＠縺ｾ縺吶��
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ繧ｳ繝ｼ繝峨′繧ｻ繝�繝�
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ鄂ｮ謠帶枚蟄怜�励′繧ｻ繝�繝茨ｼ售MSMessageMgr#getMessage(String, String[])繧貞ｮ溯｡�
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ鄂ｮ謠帶枚蟄怜�励′null縲��ｼ售MSMessageMgr#getMessage(String)繧貞ｮ溯｡�
         * 繝ｻ繝｡繝�繧ｻ繝ｼ繧ｸ繧ｳ繝ｼ繝峨′null
         * 繝ｻsuper#getMessage繧貞ｮ溯｡�
         *
         * @return {string} String 繝｡繝�繧ｻ繝ｼ繧ｸ
         */
        getMessage() {
            if (this.messageCode != null && this.messageCode.length > 0) {
                if (this.messageDetail != null && this.messageDetail.length > 0) {
                    return quickstart.SMSMessageMgr.getMessage$java_lang_String$java_lang_String_A(this.messageCode, this.messageDetail);
                }
                else {
                    return quickstart.SMSMessageMgr.getMessage$java_lang_String(this.messageCode);
                }
            }
            else {
                return this.message;
            }
        }
    }
    quickstart.SMSException = SMSException;
    SMSException["__class"] = "quickstart.SMSException";
})(quickstart || (quickstart = {}));
