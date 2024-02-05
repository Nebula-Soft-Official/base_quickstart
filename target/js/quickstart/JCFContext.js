/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class JCFContext {
        getLogicalDevice(adapterName) {
            return null;
        }
        getApplicationData(paramKeyCommon) {
            return null;
        }
        static getBaseContainer() {
            return null;
        }
        removeUserData(key) {
        }
        userDataKeySet() {
            return null;
        }
        putUserData(string, value) {
        }
        getUserData(string) {
            return null;
        }
        showDocument$quickstart_URL$java_lang_String(url, string) {
        }
        showDocument(url, string) {
            if (((url != null && url instanceof quickstart.URL) || url === null) && ((typeof string === 'string') || string === null)) {
                return this.showDocument$quickstart_URL$java_lang_String(url, string);
            }
            else if (((url != null && (url instanceof quickstart.URL)) || url === null) && ((typeof string === 'string') || string === null)) {
                return this.showDocument$java_net_URL$java_lang_String(url, string);
            }
            else
                throw new Error('invalid overload');
        }
        getMessageUtil() {
            return null;
        }
        getCurrentScreenData() {
            return null;
        }
        removeApplicationData(fgInfra) {
        }
        exit() {
        }
        putApplicationData(paramKeyCommon, loginInfo) {
        }
        showDocument$java_net_URL$java_lang_String(url, string) {
        }
    }
    quickstart.JCFContext = JCFContext;
    JCFContext["__class"] = "quickstart.JCFContext";
})(quickstart || (quickstart = {}));
