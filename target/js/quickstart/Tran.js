/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class Tran {
        shokika() {
            try {
                if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(this.showMessage(quickstart.SMSMessageConst.YPMSGSMCC009, null, true), quickstart.JCFMessageOnWindow.BTN_YES) === true) {
                    if (!this.isChkJokenData()) {
                        this.jokenDataChange();
                    }
                    const saveData = this.getSaveData();
                    const saveJuryo = this.getSaveJuryo();
                    const gyomuMap = ({});
                    /* put */ ((m, k, v) => { if (m.entries == null)
                        m.entries = []; for (let i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(gyomuMap, Tran.SHIKAKARIHIN_MEISAI_CBMMSG_LIST, saveData);
                    /* put */ ((m, k, v) => { if (m.entries == null)
                        m.entries = []; for (let i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(gyomuMap, Tran.QT_SHIKAKARI_JURYO, saveJuryo[0]);
                    /* put */ ((m, k, v) => { if (m.entries == null)
                        m.entries = []; for (let i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(gyomuMap, Tran.IF_TANI, saveJuryo[1]);
                    this.createSpreadData(gyomuMap);
                }
            }
            catch (th) {
            }
        }
        /*private*/ showMessage(ypmsgsmcc009, object, b) {
            return null;
        }
        /*private*/ getSaveJuryo() {
            return null;
        }
        /*private*/ createSpreadData(gyomuMap) {
        }
        /*private*/ getSaveData() {
            return null;
        }
        /*private*/ jokenDataChange() {
        }
        /*private*/ isChkJokenData() {
            return false;
        }
    }
    Tran.SHIKAKARIHIN_MEISAI_CBMMSG_LIST = null;
    Tran.QT_SHIKAKARI_JURYO = null;
    Tran.IF_TANI = null;
    quickstart.Tran = Tran;
    Tran["__class"] = "quickstart.Tran";
})(quickstart || (quickstart = {}));
