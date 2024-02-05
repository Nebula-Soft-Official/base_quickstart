/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class JCFReturnInfo {
        setTransitionScreenID(errorScreenId) {
        }
        cancelScreenTransition() {
        }
        setSubsystemID$java_lang_String$boolean(mENU_SUBSYSTEM_ID, b) {
        }
        setSubsystemID(mENU_SUBSYSTEM_ID, b) {
            if (((typeof mENU_SUBSYSTEM_ID === 'string') || mENU_SUBSYSTEM_ID === null) && ((typeof b === 'boolean') || b === null)) {
                return this.setSubsystemID$java_lang_String$boolean(mENU_SUBSYSTEM_ID, b);
            }
            else if (((typeof mENU_SUBSYSTEM_ID === 'string') || mENU_SUBSYSTEM_ID === null) && b === undefined) {
                return this.setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID);
            }
            else
                throw new Error('invalid overload');
        }
        setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID) {
        }
    }
    quickstart.JCFReturnInfo = JCFReturnInfo;
    JCFReturnInfo["__class"] = "quickstart.JCFReturnInfo";
})(quickstart || (quickstart = {}));
