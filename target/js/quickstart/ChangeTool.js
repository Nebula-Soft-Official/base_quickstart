/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    /**
     * This class is used within the webapp/index.html file.
     * @class
     */
    class ChangeTool {
        /**
         * 汎用検索呼び出しを行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context
         * @param {*} inData 汎用検索呼び出し条件
         * @param {string} resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
         * @return {string} 検索結果
         * @private
         */
        /*private*/ getNameByGeneralSearch(context, inData, resultName) {
            let rtn = "";
            let outData = ({});
            const data = this.callEJB(context, null, "SMSSYSCBS", "find", inData);
            outData = ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(data, quickstart.SMSHashKeyConst.PARAM_KEY_DATA);
            const map = ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(outData, ChangeTool.RESULT_KEY);
            if (map.length === 1) {
                rtn = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(map[0], resultName);
            }
            if (map.length > 1) {
                throw new quickstart.SMSRuntimeException("\u30ec\u30b3\u30fc\u30c9\u304c\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093");
            }
            return rtn;
        }
        /*private*/ callEJB(context, object, string, string2, inData) {
            return null;
        }
    }
    ChangeTool.ID_GAMEN = "YSDBSSF412S";
    ChangeTool.RESULT_KEY = null;
    quickstart.ChangeTool = ChangeTool;
    ChangeTool["__class"] = "quickstart.ChangeTool";
})(quickstart || (quickstart = {}));
