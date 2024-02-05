/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SMSPanelInitDataHolder {
        constructor() {
            if (this.data === undefined) {
                this.data = null;
            }
            if (this.searchID === undefined) {
                this.searchID = null;
            }
            if (this.value === undefined) {
                this.value = null;
            }
            if (this.errorMessage === undefined) {
                this.errorMessage = null;
            }
            if (this.closeFlg === undefined) {
                this.closeFlg = false;
            }
            if (this.searchFlg === undefined) {
                this.searchFlg = false;
            }
            if (this.screenInfo === undefined) {
                this.screenInfo = null;
            }
            if (this.searchResultLst === undefined) {
                this.searchResultLst = null;
            }
            this.closeFlg = false;
            this.searchFlg = false;
            this.data = ({});
        }
        static getInstance() {
            if (SMSPanelInitDataHolder.ins == null)
                SMSPanelInitDataHolder.ins = new SMSPanelInitDataHolder();
            return SMSPanelInitDataHolder.ins;
        }
        setData(key, obj) {
            /* put */ ((m, k, v) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.data, key, obj);
        }
        getData(key) {
            return /* get */ ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(this.data, key);
        }
        setValue(str) {
            this.value = str;
        }
        getValue() {
            return this.value;
        }
        setSearchID(str) {
            this.searchID = str;
        }
        getSearchID() {
            return this.searchID;
        }
        setScreenInfo(sci) {
            this.screenInfo = sci;
        }
        getScreenInfo() {
            return this.screenInfo;
        }
        setCloseButton(closeFlg) {
            this.closeFlg = closeFlg;
        }
        getCloseButton() {
            return this.closeFlg;
        }
        setSearchFlg(searchFlg) {
            this.searchFlg = searchFlg;
        }
        isSearchFlg() {
            return this.searchFlg;
        }
        setErrorMessage(errorMessage) {
            this.errorMessage = errorMessage;
        }
        getErrorMessage() {
            return this.errorMessage;
        }
    }
    SMSPanelInitDataHolder.RESULT_DATA = "DLG_DATA";
    SMSPanelInitDataHolder.KEY_PANEL_DATA = "PANEL_DATA";
    SMSPanelInitDataHolder.KEY_SPREAD_EVENT_POS = "SPREAD_EVENT_POS";
    SMSPanelInitDataHolder.ins = null;
    quickstart.SMSPanelInitDataHolder = SMSPanelInitDataHolder;
    SMSPanelInitDataHolder["__class"] = "quickstart.SMSPanelInitDataHolder";
})(quickstart || (quickstart = {}));
