/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    /**
     * This class is used within the webapp/index.html file.
     * @class
     */
    export class ChangeTool {
        static ID_GAMEN: string = "YSDBSSF412S";

        static RESULT_KEY: any = null;

        /**
         * 汎用検索呼び出しを行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context
         * @param {*} inData 汎用検索呼び出し条件
         * @param {string} resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
         * @return {string} 検索結果
         * @private
         */
        /*private*/ getNameByGeneralSearch(context: quickstart.JCFContext, inData: any, resultName: string): string {
            let rtn: string = "";
            let outData: any = <any>({});
            const data: any = this.callEJB(context, null, "SMSSYSCBS", "find", inData);
            outData = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data, quickstart.SMSHashKeyConst.PARAM_KEY_DATA);
            const map: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, ChangeTool.RESULT_KEY);
            if (map.length === 1){
                rtn = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map[0], resultName);
            }
            if (map.length > 1){
                throw new quickstart.SMSRuntimeException("\u30ec\u30b3\u30fc\u30c9\u304c\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093");
            }
            return rtn;
        }

        /*private*/ callEJB(context: quickstart.JCFContext, object: any, string: string, string2: string, inData: any): any {
            return null;
        }
    }
    ChangeTool["__class"] = "quickstart.ChangeTool";

}

