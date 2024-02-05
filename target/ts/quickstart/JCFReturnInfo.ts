/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    export class JCFReturnInfo {
        public setTransitionScreenID(errorScreenId: string) {
        }

        public cancelScreenTransition() {
        }

        public setSubsystemID$java_lang_String$boolean(mENU_SUBSYSTEM_ID: string, b: boolean) {
        }

        public setSubsystemID(mENU_SUBSYSTEM_ID?: any, b?: any) {
            if (((typeof mENU_SUBSYSTEM_ID === 'string') || mENU_SUBSYSTEM_ID === null) && ((typeof b === 'boolean') || b === null)) {
                return <any>this.setSubsystemID$java_lang_String$boolean(mENU_SUBSYSTEM_ID, b);
            } else if (((typeof mENU_SUBSYSTEM_ID === 'string') || mENU_SUBSYSTEM_ID === null) && b === undefined) {
                return <any>this.setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID);
            } else throw new Error('invalid overload');
        }

        public setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID: string) {
        }
    }
    JCFReturnInfo["__class"] = "quickstart.JCFReturnInfo";

}

