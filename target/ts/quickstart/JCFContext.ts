/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    export class JCFContext {
        public getLogicalDevice(adapterName: string): quickstart.JCFLogicalDevice {
            return null;
        }

        public getApplicationData(paramKeyCommon: any): quickstart.SMSLoginInfo {
            return null;
        }

        public static getBaseContainer(): quickstart.BaseContainer {
            return null;
        }

        public removeUserData(key: string) {
        }

        public userDataKeySet(): quickstart.Set {
            return null;
        }

        public putUserData(string: string, value: any) {
        }

        public getUserData(string: string): any {
            return null;
        }

        public showDocument$quickstart_URL$java_lang_String(url: quickstart.URL, string: string) {
        }

        public showDocument(url?: any, string?: any) {
            if (((url != null && url instanceof <any>quickstart.URL) || url === null) && ((typeof string === 'string') || string === null)) {
                return <any>this.showDocument$quickstart_URL$java_lang_String(url, string);
            } else if (((url != null && (url instanceof URL)) || url === null) && ((typeof string === 'string') || string === null)) {
                return <any>this.showDocument$java_net_URL$java_lang_String(url, string);
            } else throw new Error('invalid overload');
        }

        public getMessageUtil(): quickstart.JCFMessageOnWindow {
            return null;
        }

        public getCurrentScreenData(): quickstart.JCFScreenData {
            return null;
        }

        public removeApplicationData(fgInfra: string) {
        }

        public exit() {
        }

        public putApplicationData(paramKeyCommon: any, loginInfo: any) {
        }

        public showDocument$java_net_URL$java_lang_String(url: URL, string: string) {
        }
    }
    JCFContext["__class"] = "quickstart.JCFContext";

}

