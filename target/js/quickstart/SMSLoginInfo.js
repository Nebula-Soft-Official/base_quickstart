/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SMSLoginInfo {
        constructor() {
            if (this.kaishaCode === undefined) {
                this.kaishaCode = null;
            }
            if (this.kaishaName === undefined) {
                this.kaishaName = null;
            }
            if (this.bushoCode === undefined) {
                this.bushoCode = null;
            }
            if (this.bushoName === undefined) {
                this.bushoName = null;
            }
            if (this.userId === undefined) {
                this.userId = null;
            }
            if (this.userName === undefined) {
                this.userName = null;
            }
            this.kaishaCode = "";
            this.kaishaName = "";
            this.bushoCode = "";
            this.bushoName = "";
            this.userId = "";
            this.userName = "";
        }
        getKaishaCode() {
            return this.kaishaCode;
        }
        getKaishaName() {
            return this.kaishaName;
        }
        getBushoCode() {
            return this.bushoCode;
        }
        getBushoName() {
            return this.bushoName;
        }
        getUserId() {
            return this.userId;
        }
        getUserName() {
            return this.userName;
        }
        setKaishaCode(kaishaCode) {
            this.kaishaCode = kaishaCode;
        }
        setKaishaName(kaishaName) {
            this.kaishaName = kaishaName;
        }
        setBushoCode(bushoCode) {
            this.bushoCode = bushoCode;
        }
        setBushoName(bushoName) {
            this.bushoName = bushoName;
        }
        setUserId(userId) {
            this.userId = userId;
        }
        setUserName(userName) {
            this.userName = userName;
        }
    }
    quickstart.SMSLoginInfo = SMSLoginInfo;
    SMSLoginInfo["__class"] = "quickstart.SMSLoginInfo";
})(quickstart || (quickstart = {}));
