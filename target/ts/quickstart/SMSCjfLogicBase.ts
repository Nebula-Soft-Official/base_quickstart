/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    /**
     * 
     * コンストラクタ <BR>
     * @class
     */
    export abstract class SMSCjfLogicBase {
        public static SUB_HEADER: string = "FLM_SUB_HEAD";

        public static SUB_MAIN: string = "FLM_SUB_BODY";

        public static SUB_FOOTER: string = "FLM_SUB_FOOT";

        public static MENU_MANAGER: string = "sms_menu_manager";

        public static MENU_AUTH_MANAGER: string = "sms_menu_auth_manager";

        /**
         * 次レコードボタン itemID
         */
        public static ITEM_PAGE_FORWARD: string = "page_forward";

        /**
         * 前レコードボタン itemID
         */
        public static ITEM_PAGE_REVERSE: string = "page_reverse";

        /**
         * 頁遷移ボタン itemID
         */
        public static ITEM_PAGE_JUMP: string = "page_jump";

        /**
         * 表示開始レコード itemID
         */
        public static ITEM_FIRST_RECORD: string = "first_record";

        /**
         * 表示終了レコード itemID
         */
        public static ITEM_LAST_RECORD: string = "last_record";

        /**
         * 合計レコード数 itemID
         */
        public static ITEM_TOTAL_RECORD: string = "total_record";

        /**
         * 表示頁 itemID
         */
        public static ITEM_CURRENT_PAGE: string = "current_page";

        /**
         * 頁数 itemID
         */
        public static ITEM_TOTAL_PAGE: string = "total_page";

        /**
         * CSVダウンロードサーブレット
         */
        static SERVLET_NAME_DW_LOCAL: string = "/SMSDWServlet?uji.verb=downloadLocal";

        /**
         * PDFダウンロードサーブレット
         */
        static SERVLET_NAME_DW_REMOTE: string = "/SMSDWServlet?uji.verb=downloadRemote";

        /**
         * ダウンロードファイルタイプ ファイルがAPサーバ上
         */
        static DW_LOCAL: number = 0;

        /**
         * ダウンロードファイルタイプ ファイルがAPサーバではない
         */
        static DW_REMOTE: number = 1;

        /**
         * リクエストパラメータ区切り文字
         */
        static PARAM_DELIM: string = "&";

        /**
         * ユースケースID　共有データ領域の値を取得、設定する際に利用します
         */
        useCaseID: string;

        static CONTEXT_ROOT_KEY: string = "contextRoot";

        static PROTCOL: string = "http://";

        /**
         * ダウンロードサーブレット
         */
        static SERVLET_NAME_DW: string = "/SMSDWServlet?uji.verb=download";

        /**
         * 共通アダプタ名
         */
        static ADAPTER_NAME: string = "SVADAPTER";

        /**
         * ファンクションID
         */
        static ADAPTER_FUNCTION_ID: string = "EXECUTE";

        /**
         * エラースクリーンID
         */
        static ERROR_SCREEN_ID: string = "ERROR";

        /**
         * エラーアダプタ名
         */
        static ERROR_ADAPTER_NAME: string = "EVADAPTER";

        /**
         * サブエラーアダプタ名
         */
        static ERROR_SUB_ADAPTER_NAME: string = "EVSUBADAPTER";

        /**
         * エラーファンクションID
         */
        static ERROR_FUNCTION_ID: string = "ERROR";

        /**
         * サブエラーファンクションID
         */
        static ERROR_SUB_FUNCTION_ID: string = "ERRORSUB";

        /**
         * 汎用検索ID
         */
        static SEARCH_ID: string = "searchID";

        /**
         * 検索結果キー
         */
        static RESULT_KEY: string = "resultList";

        /**
         * メニューサブシステムID
         */
        /*private*/ MENU_SUBSYSTEM_ID: string;

        /**
         * サブメニュー識別フラグ
         */
        /*private*/ FG_SUB_MENU: string;

        /**
         * 基盤システム起動チェック用キー
         */
        static FG_INFRA: string = "fgInfra";

        /**
         * システムで妥当される日付プロパティファイルキー
         */
        public static PARAM_VALID_PROP: string = "SMSValidDate";

        /**
         * システムで妥当される日付開始キー
         */
        public static PARAM_VALID_FROM: string = "fromDate";

        /**
         * システムで妥当される日付終了キー
         */
        public static PARAM_VALID_TO: string = "toDate";

        /**
         * CBS名
         */
        static LOGIN_CBS: string; public static LOGIN_CBS_$LI$(): string { if (SMSCjfLogicBase.LOGIN_CBS == null) { SMSCjfLogicBase.LOGIN_CBS = quickstart.SMSClientInfo.getLoginCBSName(); }  return SMSCjfLogicBase.LOGIN_CBS; }

        /**
         * verb（ログアウト）
         */
        static VERB_LOGOUT: string = "logout";

        /**
         * 端末区分用キー
         */
        static ST_TANMATSU: string = "stTammatsu";

        /**
         * 削除フラグ（ログイン管理テーブル）用キー
         */
        static FG_SAKUJO_LOGIN_KANRI: string = "fgSakujoLoginKanri";

        public constructor() {
            this.useCaseID = "";
            this.MENU_SUBSYSTEM_ID = "YCSCMNF030M";
            this.FG_SUB_MENU = "fgSubMenu";
            this.setUseCaseID();
        }

        /**
         * ユースケースIDをセットします。<BR>
         * 派生先では
         * 以下の用に実装してください。<BR>
         * <pre>
         * protected void setUseCaseID() {
         * super.useCaseID = USECASE;
         * }
         * </pre>
         */
        abstract setUseCaseID();

        callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context: quickstart.JCFContext, event: quickstart.JCFEvent, cbsName: string, cbsVerb: string, data: any): any {
            return this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context, event, SMSCjfLogicBase.ADAPTER_FUNCTION_ID, cbsName, cbsVerb, data);
        }

        public callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context: quickstart.JCFContext, event: quickstart.JCFEvent, functionID: string, cbsName: string, cbsVerb: string, data: any): any {
            const dvSV01: quickstart.JCFLogicalDevice = context.getLogicalDevice(SMSCjfLogicBase.ADAPTER_NAME);
            const inParam: quickstart.JCFAdapterInParam = dvSV01.createAdapterInParam(functionID, false);
            const paramMap: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_CBS_NAME, cbsName);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_CBS_VERB, cbsVerb);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_DATA, data);
            if (event != null){
                quickstart.SMSCLLog.debug("SMSCjfLogicBase\uff1aSubSystemID:" + event.getSubsystemID());
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, event.getSubsystemID());
            } else {
                quickstart.SMSCLLog.debug("SMSCjfLogicBase\uff1aSubSystemID:null\uff08\u5f37\u5236\uff09");
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, null);
            }
            let loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>this.getLoginInfo(context);
            if (loginInfo != null){
                loginInfo.setCdProgram(this.useCaseID.substring(0, 10));
            } else {
                loginInfo = new quickstart.SMSLoginInfoImpl();
            }
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
            inParam.setCommunicationData(paramMap);
            let outParam: quickstart.JCFAdapterOutParam = null;
            try {
                outParam = dvSV01.callSync(functionID, inParam);
            } finally {
                const obj: any = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data, quickstart.SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);
                if (obj != null){
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306e\u89e3\u653e\u51e6\u7406 start");
                    if (obj != null && (obj instanceof Object)){
                        const fileUploadMap: any = <any>obj;
                        quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u6570\uff1a1");
                        const fileData: quickstart.MimeSource = <quickstart.MimeSource>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>fileUploadMap, quickstart.SMSHashKeyConst.F_U_FILELIST);
                        if (fileData != null){
                            fileData.getInputStream().close();
                            quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306eclose\u51e6\u7406\u5b9f\u884c");
                        }
                    } else if (obj != null && obj instanceof <any>Array && (obj.length == 0 || obj[0] == null ||obj[0] != null)){
                        const fileUploadMap: any[] = <any[]>obj;
                        quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u6570\uff1a" + fileUploadMap.length);
                        for(let i: number = 0; i < fileUploadMap.length; i++) {{
                            const fileData: quickstart.MimeSource = <quickstart.MimeSource>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>fileUploadMap[i], quickstart.SMSHashKeyConst.F_U_FILELIST);
                            if (fileData != null){
                                fileData.getInputStream().close();
                                quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306eclose\u51e6\u7406\u5b9f\u884c(" + i + "\u56de\u76ee)");
                            }
                        };}
                    } else {
                        quickstart.SMSCLLog.debug("\u60f3\u5b9a\u3057\u3066\u3044\u306a\u3044\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u3059");
                    }
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306e\u89e3\u653e\u51e6\u7406 end");
                } else {
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u304cnull\u306e\u70ba\u3001\u4f55\u3082\u3057\u306a\u3044");
                };
            }
            if (outParam.isExceptionThrown()){
                const e: Error = outParam.getException();
                console.error(e.message, e);
                throw e;
            }
            let rtn: any = <any>({});
            try {
                rtn = this.checkRtnHash(context, outParam);
                const outLoginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
                if (outLoginInfo != null){
                    this.setLoginInfo(context, outLoginInfo);
                }
            } catch(th) {
                const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
                /* append */(sb => { sb.str += <any>th.toString() + "\n"; return sb; })(buf);
                if (th != null && th instanceof <any>quickstart.SMSRuntimeException){
                    const cdError: string = (<quickstart.SMSRuntimeException>th).getCdError();
                    if (cdError != null && !(cdError === (""))){
                        quickstart.SMSCLLog.error("\u7570\u5e38\u756a\u53f7:" + cdError);
                    }
                }
                const cause: Error = (<Error>null);
                if (cause != null){
                    /* append */(sb => { sb.str += <any>"cause:" + cause.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error(/* toString */buf.str);
                throw th;
            }
            return rtn;
        }

        /**
         * Method callEJB. ファンクションIDを指定してアダプタを呼び出し<BR>
         * EJB呼び出しを行います。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {quickstart.JCFEvent} event イベントクラス
         * @param {string} functionID 呼び出したいアダプタのファンクションID
         * @param {string} cbsName 呼び出したいCBSのEJBアプリケーション名
         * @param {string} cbsVerb 呼び出したいCBSに渡すverb
         * @param {*} data CBSに渡すデータ
         * @return {*} HashMap EJB呼び出し結果データ
         * @throws Throwable
         */
        public callEJB(context?: any, event?: any, functionID?: any, cbsName?: any, cbsVerb?: any, data?: any): any {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((event != null && event instanceof <any>quickstart.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((typeof cbsVerb === 'string') || cbsVerb === null) && ((data != null && (data instanceof Object)) || data === null)) {
                return <any>this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb, data);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((event != null && event instanceof <any>quickstart.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((cbsVerb != null && (cbsVerb instanceof Object)) || cbsVerb === null) && data === undefined) {
                return <any>this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb);
            } else throw new Error('invalid overload');
        }

        /**
         * ファイルダウンロードを行います。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {number} fileLocation ダウンロードするファイルの所在
         * @throws Throwable
         */
        downloadFile(context: quickstart.JCFContext, fileLocation: number) {
            quickstart.SMSCLLog.trace("--------LogicBase#downloadFile() start");
            const applet: quickstart.BaseContainer = quickstart.JCFContext.getBaseContainer();
            const serverName: string = applet.getCodeBase().getHost();
            const contextRoot: string = applet.getParameter(SMSCjfLogicBase.CONTEXT_ROOT_KEY);
            let servletName: string = SMSCjfLogicBase.SERVLET_NAME_DW;
            switch((fileLocation)) {
            case (SMSCjfLogicBase.DW_REMOTE):
                servletName = SMSCjfLogicBase.SERVLET_NAME_DW_REMOTE;
                break;
            case (SMSCjfLogicBase.DW_LOCAL):
                servletName = SMSCjfLogicBase.SERVLET_NAME_DW_LOCAL;
                break;
            default:
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#downloadFile() \u672a\u5b9a\u7fa9\u306e\u30d5\u30a1\u30a4\u30eb\u30bf\u30a4\u30d7.fileType = " + fileLocation);
                servletName = SMSCjfLogicBase.SERVLET_NAME_DW_LOCAL;
            }
            const timestamp: string = quickstart.SMSDateStringUtil.getTimeStamp();
            const userid: string = (<quickstart.SMSLoginInfoImpl>this.getLoginInfo(context)).getUserId();
            const url: quickstart.URL = new quickstart.URL(SMSCjfLogicBase.PROTCOL + serverName + contextRoot + servletName + SMSCjfLogicBase.PARAM_DELIM + userid + timestamp);
            context.showDocument$quickstart_URL$java_lang_String(url, "window3");
        }

        getUserData$quickstart_JCFContext$java_lang_Object(context: quickstart.JCFContext, key: any): any {
            const obj: any = context.getUserData(this.useCaseID + "_" + key);
            return obj;
        }

        public getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context: quickstart.JCFContext, usecaseID: string, key: any): any {
            const obj: any = context.getUserData(usecaseID + "_" + key);
            return obj;
        }

        /**
         * Method 汎用検索等で他ユースケースの共有データを取得するためユースケースを指定して共有データを取得します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     取得したい共有データのユースケースID
         * @param {*} key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
         * @return {*} Object 共有データから取得する値
         */
        public getUserData(context?: any, usecaseID?: any, key?: any): any {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null)) {
                return <any>this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && key === undefined) {
                return <any>this.getUserData$quickstart_JCFContext$java_lang_Object(context, usecaseID);
            } else throw new Error('invalid overload');
        }

        putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context: quickstart.JCFContext, key: any, value: any) {
            context.putUserData(this.useCaseID + "_" + key, value);
        }

        public putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context: quickstart.JCFContext, usecaseID: string, key: any, value: any) {
            context.putUserData(usecaseID + "_" + key, value);
        }

        /**
         * Method エラー画面遷移等でユースケースを指定して、他ユースケースの共有データを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     設定したい共有データのユースケースID
         * @param {*} key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
         * @param {*} value     共有データに設定する値
         */
        public putUserData(context?: any, usecaseID?: any, key?: any, value?: any) {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null) && ((value != null) || value === null)) {
                return <any>this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseID, key, value);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && ((key != null) || key === null) && value === undefined) {
                return <any>this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, usecaseID, key);
            } else throw new Error('invalid overload');
        }

        removeUserData$quickstart_JCFContext$java_lang_Object(context: quickstart.JCFContext, key: any) {
            if (this.useCaseID === ("")){
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            context.removeUserData(this.useCaseID + "_" + key);
        }

        public removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context: quickstart.JCFContext, usecaseID: string, key: any) {
            if (this.useCaseID === ("")){
                throw Object.defineProperty(new Error("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            }
            context.removeUserData(usecaseID + "_" + key);
        }

        /**
         * Method 汎用検索等で他ユースケースの共有データを削除します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     削除したい共有データのユースケースID
         * @param {*} key     共有データから削除する値のキー名（内部的にはユースケースIDが付加される）
         */
        public removeUserData(context?: any, usecaseID?: any, key?: any) {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null)) {
                return <any>this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && key === undefined) {
                return <any>this.removeUserData$quickstart_JCFContext$java_lang_String(context, usecaseID);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && key === undefined) {
                return <any>this.removeUserData$quickstart_JCFContext$java_lang_Object(context, usecaseID);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && usecaseID === undefined && key === undefined) {
                return <any>this.removeUserData$quickstart_JCFContext(context);
            } else throw new Error('invalid overload');
        }

        removeUserData$quickstart_JCFContext(context: quickstart.JCFContext) {
            if (this.useCaseID === ("")){
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            const dataSet: Array<any> = <Array<any>><any>context.userDataKeySet();
            const keys: any[] = /* toArray */dataSet.slice(0);
            for(let i: number = 0; i < keys.length; i++) {{
                const key: string = <string>keys[i];
                if (/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(key, this.useCaseID)){
                    context.removeUserData(key);
                }
            };}
        }

        removeUserData$quickstart_JCFContext$java_lang_String(context: quickstart.JCFContext, usecaseID: string) {
            if (this.useCaseID === ("")){
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            const dataSet: Array<any> = <Array<any>><any>context.userDataKeySet();
            const keys: any[] = /* toArray */dataSet.slice(0);
            for(let i: number = 0; i < keys.length; i++) {{
                const key: string = <string>keys[i];
                if (/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(key, usecaseID)){
                    context.removeUserData(key);
                }
            };}
        }

        /**
         * Method ログイン情報を取得します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @return {quickstart.SMSLoginInfo} SMSLoginInfo ログイン情報
         */
        getLoginInfo(context: quickstart.JCFContext): quickstart.SMSLoginInfo {
            const loginInFo: quickstart.SMSLoginInfo = <quickstart.SMSLoginInfo>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            return loginInFo;
        }

        /**
         * Method ログイン情報を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @return {void} SMSLoginInfo ログイン情報
         * @param {quickstart.SMSLoginInfoImpl} loginInfo
         * @private
         */
        /*private*/ setLoginInfo(context: quickstart.JCFContext, loginInfo: quickstart.SMSLoginInfoImpl) {
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method getFileDialog.現在使用してないメソッド！！
         * @param {string} title
         * @return {quickstart.FileDialog} FileDialog
         */
        getFileDialog(title: string): quickstart.FileDialog {
            const container: quickstart.BaseContainer = quickstart.JCFContext.getBaseContainer();
            const gc: quickstart.GraphicsConfiguration = container.getGraphicsConfiguration();
            const frame: quickstart.Frame = new quickstart.Frame(gc);
            const fileDialog: quickstart.FileDialog = new quickstart.FileDialog(frame, "", quickstart.FileDialog.LOAD);
            return fileDialog;
        }

        /**
         * ファイルのパーミッションチェック・サイズチェックを行い、ファイルを読み込みます。<BR>
         * @param {string} fileName ファイル名
         * @param sizeChekcFlg ファイルサイズチェックフラグ true:チェックする, false:チェックしない
         * @return {quickstart.MimeSource} MimeSource 読み込んだファイルのMimeSourceオブジェクト
         * @param {boolean} sizeCheckFlg
         */
        readFile(fileName: string, sizeCheckFlg: boolean): quickstart.MimeSource {
            const filePm: quickstart.FilePermission = new quickstart.FilePermission(fileName, "read");
            quickstart.AccessController.checkPermission(filePm);
            const fileUtil: quickstart.SMSFileUtil = new quickstart.SMSFileUtil();
            if (sizeCheckFlg){
                const size: number = fileUtil.getFileSize(fileName);
                const strMax: string = quickstart.SMSClientInfo.getFileUploadMaxSize();
                const max: number = /* parseLong */parseInt(strMax);
                if (size > max){
                    quickstart.SMSCLLog.trace("SMSCjfLogicBase#readFile() \u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u30c1\u30a7\u30c3\u30af\u306b\u3088\u308b\u30a8\u30e9\u30fc");
                    throw new quickstart.SMSAppException(quickstart.SMSMessageConst.YCSCMNMCW078, [strMax + "\u30d0\u30a4\u30c8"]);
                }
            }
            let bis: quickstart.BufferedInputStream = null;
            let ms: quickstart.MimeSource = null;
            bis = new quickstart.BufferedInputStream(new quickstart.FileInputStream(fileName));
            ms = new quickstart.MimeSource(bis, fileName, 100000);
            return ms;
        }

        /**
         * 例外と警告が発生した場合のメッセージセットを行います。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {quickstart.JCFAdapterOutParam} outParam 編集対象アダプタアウトパラメタ
         * @return {*} HashMap 編集後ハッシュマップ
         * @private
         */
        /*private*/ checkRtnHash(context: quickstart.JCFContext, outParam: quickstart.JCFAdapterOutParam): any {
            const errFlg: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
            quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u30a8\u30e9\u30fc\u30d5\u30e9\u30b0\uff1a" + errFlg);
            if (errFlg === quickstart.SMSHashKeyConst.IS_WARNING){
                const wMsgID: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_MSG_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgID\uff1a" + wMsgID);
                const wMsgContents: string[] = <string[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_MSG_PARAM_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgContents\uff1a" + wMsgContents);
                const wMsgPopup: boolean = <boolean>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_POPUP_PARAM_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgPopup\uff1a" + wMsgPopup);
                const msgUtil: quickstart.JCFMessageOnWindow = context.getMessageUtil();
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8ID\uff1a" + wMsgID);
                if (wMsgID === quickstart.SMSMessageConst.SMSCMNMCE067){
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u5229\u7528\u6642\u9593\u5916\u306e\u8b66\u544a\u3092\u8868\u793a");
                    msgUtil.showMessage(quickstart.SMSMessageConst.SMSCMNMCE067);
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u30a8\u30e9\u30fc\u753b\u9762\u306b\u9077\u79fb");
                    const ex: quickstart.SMSRuntimeException = new quickstart.SMSRuntimeException(quickstart.SMSMessageConst.SMSCMNMCE067);
                    ex.setCdError(quickstart.SMSMessageConst.SMSCMNMCE067);
                    throw ex;
                } else {
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u8b66\u544a\u3092\u8868\u793a");
                    const screenData: quickstart.JCFScreenData = context.getCurrentScreenData();
                    const footerPanelData: quickstart.JCFPanelData = screenData.getPanelData(quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
                    const item: quickstart.JCFItemData = <quickstart.JCFItemData>footerPanelData.getItemData(quickstart.SMSHeaderFooterManager.ITEM_MESSAGE);
                    if (wMsgContents != null){
                        item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
                    } else {
                        item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
                    }
                    if (/* booleanValue */wMsgPopup){
                        msgUtil.showMessage(quickstart.SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
                    }
                }
            } else if (errFlg === quickstart.SMSHashKeyConst.IS_ERROR){
                const th: Error = <Error>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE);
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
                throw th;
            }
            return outParam.getCommunicationData();
        }

        /**
         * Method headerToMenu.ヘッダ部分の，メインメニューボタンが押されたときの処理です。<BR>
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param {quickstart.JCFReturnInfo} returnInfo
         * @throws Exception
         */
        public headerToMenu(event: quickstart.JCFEvent, context: quickstart.JCFContext, returnInfo: quickstart.JCFReturnInfo) {
            returnInfo.setSubsystemID$java_lang_String(this.MENU_SUBSYSTEM_ID);
        }

        /**
         * エラー画面に遷移します。
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param {quickstart.JCFReturnInfo} returnInfo
         * @throws Throwable
         */
        public error(event: quickstart.JCFEvent, context: quickstart.JCFContext, returnInfo: quickstart.JCFReturnInfo) {
            quickstart.SMSCLLog.trace("LogicBase:error() start");
            returnInfo.setTransitionScreenID(SMSCjfLogicBase.ERROR_SCREEN_ID);
            quickstart.SMSCLLog.trace("LogicBase:error() end");
        }

        /**
         * エラー画面に遷移アダプタを呼び出します。
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {Error} th 発生したThrowableオブジェクト
         */
        public callErrorAdapter(context: quickstart.JCFContext, th: Error) {
            let ev: quickstart.JCFLogicalDevice;
            let inParam: quickstart.JCFAdapterInParam;
            try {
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG, "true");
                try {
                    if (th != null && th instanceof <any>quickstart.SMSRuntimeException){
                        const cdError: string = (<quickstart.SMSRuntimeException>th).getCdError();
                        if (cdError != null && !(cdError === quickstart.SMSMessageConst.SMSSYSMCE002)){
                            const inData: any = <any>({});
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                            const logoutHash: any = <any>this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                        }
                    } else {
                        quickstart.SMSCLLog.debug("SMSCjfLogicBase#callErrorAdapter:RuntimeException\u4ee5\u5916\u306e\u30a8\u30e9\u30fc\u767a\u751f\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\u306e\u5b9f\u884c\uff09");
                        const inData: any = <any>({});
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                        const logoutHash: any = <any>this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                    }
                } catch(e) {
                    console.error(e.message, e);
                }
                ev = context.getLogicalDevice(SMSCjfLogicBase.ERROR_ADAPTER_NAME);
                inParam = ev.createAdapterInParam(SMSCjfLogicBase.ERROR_FUNCTION_ID, false);
                ev.callAsync(SMSCjfLogicBase.ERROR_FUNCTION_ID, inParam);
                console.error(th.message, th);
            } catch(e) {
                console.error(e.message, e);
            }
        }

        /**
         * エラー画面に遷移アダプタを呼び出します。サブ画面で使用します。
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {Error} th 発生したThrowableオブジェクト
         */
        callSubErrorAdapter(context: quickstart.JCFContext, th: Error) {
            let ev: quickstart.JCFLogicalDevice;
            let inParam: quickstart.JCFAdapterInParam;
            try {
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_SUB_ERROR, th);
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG, "true");
                try {
                    const inData: any = <any>({});
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                    const logoutHash: any = <any>this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                } catch(e) {
                    console.error(e.message, e);
                }
                ev = context.getLogicalDevice(SMSCjfLogicBase.ERROR_SUB_ADAPTER_NAME);
                inParam = ev.createAdapterInParam(SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID, false);
                ev.callAsync(SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID, inParam);
            } catch(e) {
                console.error(e.message, e);
            }
        }

        /**
         * ダイアログで例外が発生したか判断します。
         * 表示前処理で使用します。
         * @exception Throwable
         * @param {quickstart.JCFContext} context
         */
        checkDialogException(context: quickstart.JCFContext) {
            const th: Error = <Error>this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_SUB_ERROR);
            if (th != null){
                throw th;
            }
        }

        /**
         * 選択されているコンボボックスのIDを取得します。<BR>
         * @param {quickstart.JCFComboBoxData} comboBoxData コンボボックスデータアイテム
         * @return {string} value コンボボックス要素ID 選択されていなかったら""を返します。
         */
        public getComboID(comboBoxData: quickstart.JCFComboBoxData): string {
            let rtnID: string = "";
            const selectElement: quickstart.JCFSelectableElement[] = comboBoxData.getSelectableElementValue();
            for(let i: number = 0; i < selectElement.length; i++) {{
                if (selectElement[i].isSelected()){
                    rtnID = selectElement[i].getID();
                }
            };}
            return rtnID;
        }

        /**
         * Method プログラムIDを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String プログラムID
         * @param {string} value
         */
        setCdProgram(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setCdProgram(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 画面IDを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 画面ID
         * @param {string} value
         */
        setCdGamen(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setCdGamen(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 画面名を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 画面名
         * @param {string} value
         */
        setNmGamen(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setNmGamen(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 最大検索件数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 最大検索件数
         * @param {string} value
         */
        setQtSaidaiKensaku(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtSaidaiKensaku(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 最大表示件数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 最大表示件数
         * @param {string} value
         */
        setQtSaidaiHyouji(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtSaidaiHyouji(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 表示済み数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 表示済み数
         * @param {string} value
         */
        setQtHyoujiZumi(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtHyoujiZumi(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 検索方向を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 検索方向
         * @param {string} value
         */
        setStKensakuHoukou(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setStKensakuHoukou(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 表示頁を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 表示頁
         * @param {string} value
         */
        setQtHyoujiPage(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtHyoujiPage(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method 頁情報をクリアします。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         */
        clearPageInfo(context: quickstart.JCFContext) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtSaidaiKensaku("");
            loginInfo.setQtSaidaiHyouji("");
            loginInfo.setQtHyoujiZumi("");
            loginInfo.setStKensakuHoukou("");
            loginInfo.setQtKensaku("");
            loginInfo.setQtHyoujiPage("");
            loginInfo.setQtPage("");
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * 汎用検索画面を表示する前の準備処理を行います。<BR>
         * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param {java.lang.String[]} cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
         * @param {boolean[]} enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
         * @param {boolean} kidoKensaku true:起動時検索する false:起動時検索しない
         * @param {Array} literalList リテラル条件に渡すパラメータ
         * @param returnInfo
         */
        public geneSearchPrepare(event: quickstart.JCFEvent, context: quickstart.JCFContext, cons: string[], enableCons: boolean[], kidoKensaku: boolean, literalList: Array<any>) {
            let searchID: string = event.getEventAdditionalInfo().getActionID();
            const ACTION_HEAD: string = "ACT_";
            searchID = searchID.substring(searchID.indexOf(ACTION_HEAD) + ACTION_HEAD.length);
            this.geneSearchPrepareWithID(event, context, searchID, cons, enableCons, kidoKensaku, literalList);
        }

        /**
         * 汎用検索画面を表示する前の準備処理を行います。<BR>
         * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param {string} searchID 汎用検索キー e.g GeneralSearch001
         * @param {java.lang.String[]} cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
         * @param {boolean[]} enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
         * @param {boolean} kidoKensaku true:起動時検索する false:起動時検索しない
         * @param {Array} literalList リテラル条件に渡すパラメータ
         * @param returnInfo
         */
        public geneSearchPrepareWithID(event: quickstart.JCFEvent, context: quickstart.JCFContext, searchID: string, cons: string[], enableCons: boolean[], kidoKensaku: boolean, literalList: Array<any>) {
            const USECASE: string = quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID;
            const SEARCHID: string = "searchID";
            quickstart.SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() start");
            const jouken: string[] = [null, null, null, null, null, null, null, null, null, null];
            try {
                quickstart.SMSPanelInitDataHolder.getInstance().setCloseButton(false);
                context.putUserData(SEARCHID, searchID);
                const eventAddInfo: quickstart.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
                const spreadAddInfo: quickstart.JCFSpreadAdditionalInfo = <quickstart.JCFSpreadAdditionalInfo>eventAddInfo.getAdditionalInfo();
                if (spreadAddInfo != null){
                    this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAddInfo.getCellPosition());
                }
                quickstart.SMSPanelInitDataHolder.getInstance().setSearchID(searchID);
                if (cons != null){
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_VALUE, cons);
                } else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_VALUE);
                }
                if (enableCons != null){
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_ENABLE_CONS, enableCons);
                } else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_ENABLE_CONS);
                }
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERA_SEARCH_START, <boolean>new Boolean(kidoKensaku));
                if (literalList != null){
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                } else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS);
                }
            } catch(e) {
                const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
                if (e != null){
                    /* append */(sb => { sb.str += <any>e.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error("SMSCjfLogicBase:geneSearchPrepareWithID()\u2026" + /* toString */buf.str);
                console.error(e.message, e);
            }
            quickstart.SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() end");
        }

        /**
         * 汎用検索画面を表示する前の準備処理を行います。<BR>
         * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
         * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
         * @param kidoKensaku true:起動時検索する false:起動時検索しない
         * @param returnInfo
         * @param {string} comboName
         * @param {Array} comboCondition
         */
        public geneSearchComboPrepare(event: quickstart.JCFEvent, context: quickstart.JCFContext, comboName: string, comboCondition: Array<any>) {
            const USECASE: string = quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID;
            const SEARCHID: string = "searchID";
            quickstart.SMSCLLog.trace("SMSCjfLogicBase:geneSearchComboPrepare() start");
            try {
                if (comboCondition != null){
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, comboName, comboCondition);
                }
            } catch(e) {
                const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
                if (e != null){
                    /* append */(sb => { sb.str += <any>e.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error("YCSCMNF060SLogic:geneSearchComboPrepare()\u2026" + /* toString */buf.str);
                console.error(e.message, e);
            }
            quickstart.SMSCLLog.trace("YCSCMNF060SLogic:geneSearchComboPrepare() end");
        }

        /**
         * Method ディレクトリを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String ディレクトリ
         * @param {string} value
         */
        setStDirectory(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setStDirectory(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method ファイル名を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String ファイル名
         * @param {string} value
         */
        setNmFile(context: quickstart.JCFContext, value: string) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setNmFile(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * Method ファイルデータを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param byte[] ファイルデータ
         * @param {byte[]} value
         */
        setFile(context: quickstart.JCFContext, value: number[]) {
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setFile(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }

        /**
         * 頁制御を実行した後に行う部品へのセット処理を行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context			CJFコンテキストオブジェクト
         */
        setPageInfo(context: quickstart.JCFContext) {
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            const itemForward: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_FORWARD);
            const itemReverse: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_REVERSE);
            const itemPageJump: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_JUMP);
            const itemFirst: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_FIRST_RECORD);
            const itemLast: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_LAST_RECORD);
            const itemTotal: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_RECORD);
            const itemCurrentPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
            const loginInfo: quickstart.SMSLoginInfoImpl = <quickstart.SMSLoginInfoImpl>this.getLoginInfo(context);
            if (loginInfo.getStJiPage() != null){
                if (/* booleanValue */loginInfo.getStJiPage()){
                    itemForward.setEnabled(true);
                } else {
                    itemForward.setEnabled(false);
                    itemLast.setEnabled(false);
                }
            }
            if (loginInfo.getStZenPage() != null){
                if (/* booleanValue */loginInfo.getStZenPage()){
                    itemReverse.setEnabled(true);
                } else {
                    itemReverse.setEnabled(false);
                }
            }
            itemCurrentPage.setBackground(quickstart.SMSColor.DEFAULT);
            if (loginInfo.getQtPage() != null){
                try {
                    if (/* parseInt */parseInt(loginInfo.getQtPage()) > 1){
                        itemPageJump.setEnabled(true);
                        itemCurrentPage.setEnabled(true);
                    } else {
                        itemPageJump.setEnabled(false);
                        itemCurrentPage.setEnabled(false);
                    }
                } catch(e) {
                    itemPageJump.setEnabled(false);
                    itemCurrentPage.setEnabled(false);
                }
            }
            let hyoujiZumi: number;
            let maxHyouji: number;
            let cnt: number;
            try {
                hyoujiZumi = /* parseInt */parseInt(loginInfo.getQtHyoujiZumi());
                maxHyouji = /* parseInt */parseInt(loginInfo.getQtSaidaiHyouji());
                cnt = /* parseInt */parseInt(loginInfo.getQtKensaku());
                itemFirst.setValue(quickstart.SMSPageTranUtil.getHyoujiKaishi(hyoujiZumi, maxHyouji, cnt));
                itemLast.setValue(hyoujiZumi);
                itemTotal.setValue(/* parseLong */parseInt(loginInfo.getQtKensaku()));
                itemCurrentPage.setValue(loginInfo.getQtHyoujiPage());
                itemTotalPage.setValue(loginInfo.getQtPage());
            } catch(e) {
                itemCurrentPage.setValue(0);
            }
        }

        /**
         * 頁制御必要な部品の初期化処理を行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context			CJFコンテキストオブジェクト
         */
        initPageInfo(context: quickstart.JCFContext) {
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            const itemForward: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_FORWARD);
            const itemReverse: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_REVERSE);
            const itemPageJump: quickstart.JCFItemData = <quickstart.JCFItemData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_JUMP);
            const itemFirst: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_FIRST_RECORD);
            const itemLast: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_LAST_RECORD);
            const itemTotal: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_RECORD);
            const itemCurrentPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
            itemForward.setEnabled(false);
            itemReverse.setEnabled(false);
            itemPageJump.setEnabled(false);
            itemCurrentPage.setEnabled(false);
            itemCurrentPage.setBackground(quickstart.SMSColor.DEFAULT);
            itemFirst.setValue("0");
            itemLast.setValue("0");
            itemTotal.setValue("0");
            itemCurrentPage.setValue("0");
            itemTotalPage.setValue("0");
        }

        public getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_lang_String$java_lang_String$java_util_List$java_lang_String(context: quickstart.JCFContext, searchID: string, columnName: string, code: string, literalList: Array<any>, resultName: string): string {
            let rtn: string = "";
            if (searchID == null || ("" === searchID)){
                return rtn;
            }
            if (code == null || ("" === code)){
                return rtn;
            }
            const inData: any = <any>({});
            const outData: any = <any>({});
            try {
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.SEARCH_ID, searchID);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, columnName, code);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                rtn = this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, inData, resultName);
            } catch(e) {
                throw e;
            }
            return rtn;
        }

        /**
         * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。<BR>
         * 汎用検索のSQLをそのまま用いるため、コードとの比較条件は'=','LIKE'のいずれかである必要があります。<BR>
         * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。<BR>
         * @param {quickstart.JCFContext} context
         * @param {string} searchID 汎用検索ID
         * @param {string} columnName 検索対象カラム名 *screen.propetiesのparamNameと対応
         * @param {string} code 検索対象コード
         * @param {Array} literalList 文字列検索条件バインド値
         * @param {string} resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
         * @return {string} 名称
         * @exception Throwable callEJB失敗時例外
         */
        public getNameByGeneralSearch(context?: any, searchID?: any, columnName?: any, code?: any, literalList?: any, resultName?: any): string {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((typeof columnName === 'string') || columnName === null) && ((typeof code === 'string') || code === null) && ((literalList != null && (literalList instanceof Array)) || literalList === null) && ((typeof resultName === 'string') || resultName === null)) {
                return <any>this.getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_lang_String$java_lang_String$java_util_List$java_lang_String(context, searchID, columnName, code, literalList, resultName);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((columnName != null && (columnName instanceof Object)) || columnName === null) && ((code != null && (code instanceof Array)) || code === null) && ((typeof literalList === 'string') || literalList === null) && resultName === undefined) {
                return <any>this.getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, searchID, columnName, code, literalList);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((searchID != null && (searchID instanceof Object)) || searchID === null) && ((typeof columnName === 'string') || columnName === null) && code === undefined && literalList === undefined && resultName === undefined) {
                return <any>this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, searchID, columnName);
            } else throw new Error('invalid overload');
        }

        public getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context: quickstart.JCFContext, searchID: string, conditionMap: any, literalList: Array<any>, resultName: string): string {
            let rtn: string = "";
            if (searchID == null || ("" === searchID)){
                return rtn;
            }
            if (conditionMap == null || /* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>conditionMap) < 1){
                return rtn;
            }
            const inData: any = <any>({});
            try {
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, SMSCjfLogicBase.SEARCH_ID, searchID);
                const keySet: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>conditionMap);
                const it: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(keySet);
                while((it.hasNext())) {{
                    const key: string = <string>it.next();
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, key, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>conditionMap, key));
                }};
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                rtn = this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, inData, resultName);
            } catch(e) {
                throw e;
            }
            return rtn;
        }

        /**
         * 頁遷移する前に行うチェック処理です。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context			CJFコンテキストオブジェクト
         * @return {boolean} true:指定ページは正常 false:指定ページが最大より大きい、または0,空白
         */
        checkPageInfo(context: quickstart.JCFContext): boolean {
            let rtn: boolean = false;
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            const itemCurrentPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage: quickstart.JCFFieldLongData = <quickstart.JCFFieldLongData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
            const currentPage: number = itemCurrentPage.getLongValue();
            const totalPage: number = itemTotalPage.getLongValue();
            if (currentPage > totalPage || currentPage === 0){
                this.setPageInfo(context);
                itemCurrentPage.setBackground(quickstart.SMSColor.WARNING);
                quickstart.SMSHeaderFooterManager.showInformation(context, quickstart.SMSMessageConst.SMSCMNMCA104, ["\u9801", "1", /* toString */(''+(totalPage))]);
            } else {
                rtn = true;
            }
            return rtn;
        }

        /*private*/ getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context: quickstart.JCFContext, inData: any, resultName: string): string {
            let rtn: string = "";
            let outData: any = <any>({});
            const data: any = this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, "SMSSYSCBS", "find", inData);
            outData = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data, quickstart.SMSHashKeyConst.PARAM_KEY_DATA);
            const map: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSCjfLogicBase.RESULT_KEY);
            if (map.length === 1){
                rtn = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map[0], resultName);
            }
            if (map.length > 1){
                throw new quickstart.SMSRuntimeException("\u30ec\u30b3\u30fc\u30c9\u304c\u7279\u5b9a\u3067\u304d\u307e\u305b\u3093");
            }
            return rtn;
        }

        /**
         * 業務終了します。
         * 
         * @param {quickstart.JCFEvent} event ＣＪＦイベントオブジェクト
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFReturnInfo} returnInfo ＣＪＦ復帰情報オブジェクト
         * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
         */
        public exitSystem(event: quickstart.JCFEvent, context: quickstart.JCFContext, returnInfo: quickstart.JCFReturnInfo) {
            quickstart.SMSCLLog.debug("exitSystem() start");
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            let pushButton: quickstart.JCFPushButtonData;
            pushButton = <quickstart.JCFPushButtonData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.EXIT_BUTTON);
            if (!pushButton.isEnabled()){
                return;
            }
            const msgUtil: quickstart.JCFMessageOnWindow = context.getMessageUtil();
            const ret: string = msgUtil.showMessage(quickstart.SMSMessageConst.YCSCMNMSC077);
            if (/* equals */(<any>((o1: any, o2: any) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(ret,quickstart.JCFMessageOnWindow.BTN_NO))){
                returnInfo.cancelScreenTransition();
                return;
            } else if (ret === quickstart.JCFMessageOnWindow.BTN_YES){
                context.removeApplicationData(SMSCjfLogicBase.FG_INFRA);
                context.exit();
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_BK_SCREEN, null);
            }
            quickstart.SMSCLLog.debug("exitSystem() end");
        }

        /**
         * サブメニューに戻ります。
         * 
         * @param {quickstart.JCFEvent} event ＣＪＦイベントオブジェクト
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFReturnInfo} returnInfo ＣＪＦ復帰情報オブジェクト
         * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
         */
        public returnSubMenu(event: quickstart.JCFEvent, context: quickstart.JCFContext, returnInfo: quickstart.JCFReturnInfo) {
            quickstart.SMSCLLog.debug("returnSubMenu() start");
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            let pushButton: quickstart.JCFPushButtonData;
            pushButton = <quickstart.JCFPushButtonData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.RETURN_BUTTON);
            if (!pushButton.isEnabled()){
                return;
            }
            returnInfo.cancelScreenTransition();
            returnInfo.setSubsystemID$java_lang_String$boolean(this.MENU_SUBSYSTEM_ID, false);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, "true");
            quickstart.SMSCLLog.debug("returnSubMenu() end");
        }

        /**
         * メインメニューに戻ります。
         * 
         * @param {quickstart.JCFEvent} event ＣＪＦイベントオブジェクト
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFReturnInfo} returnInfo ＣＪＦ復帰情報オブジェクト
         * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
         */
        public returnMainMenu(event: quickstart.JCFEvent, context: quickstart.JCFContext, returnInfo: quickstart.JCFReturnInfo) {
            quickstart.SMSCLLog.debug("returnMainMenu() start");
            const current: quickstart.JCFScreenData = context.getCurrentScreenData();
            let pushButton: quickstart.JCFPushButtonData;
            pushButton = <quickstart.JCFPushButtonData>current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.MENU_BUTTON);
            if (!pushButton.isEnabled()){
                return;
            }
            returnInfo.cancelScreenTransition();
            returnInfo.setSubsystemID$java_lang_String$boolean(this.MENU_SUBSYSTEM_ID, false);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
            quickstart.SMSCLLog.debug("returnMainMenu() end");
        }

        /**
         * パネルデータ上のアイテムデータの値をアイテムIDをキーとして共有データにコピーします。<br>
         * コピーできるアイテムデータはgetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）<br>
         * アイテムIDが未入力場合はBean名がキーとして使用されます。
         * 共有データのキーにはユースケースIDが付加されます。<br>
         * 既存の共有データに同一キーが存在する場合、値は上書きされます。
         * 
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFPanelData} panelData コピー対象のパネルデータ
         * @param {string} usecaseID 共有データのキーに付加されるユースケースID
         */
        copyPanelToUser(context: quickstart.JCFContext, panelData: quickstart.JCFPanelData, usecaseID: string) {
            quickstart.SMSCLLog.debug("copyPanelToUser() start");
            const array: Array<any> = panelData.getAllItemData();
            let itemData: quickstart.JCFItemData = null;
            for(let i: number = 0; i < /* size */(<number>array.length); i++) {{
                const obj: any = /* get */array[i];
                if (obj != null && obj instanceof <any>quickstart.JCFItemData){
                    itemData = <quickstart.JCFItemData>obj;
                    const key: string = itemData.getItemID();
                    const value: any = itemData.getValue();
                    if (key != null && obj != null){
                        this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseID, key, value);
                    }
                }
            };}
            quickstart.SMSCLLog.debug("copyPanelToUser() end");
        }

        /**
         * 共有データのキーと一致するアイテムIDのアイテムデータに値をコピーします<br>
         * コピーできるアイテムデータはsetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）<br>
         * 
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFPanelData} panelData コピー対象のパネルデータ
         * @param {string} usecaseID 共有データのキーに付加されるユースケースID
         */
        copyUserToPanel(context: quickstart.JCFContext, panelData: quickstart.JCFPanelData, usecaseID: string) {
            quickstart.SMSCLLog.debug("copyUserlToPanel() start");
            const array: Array<any> = panelData.getAllItemData();
            let itemData: quickstart.JCFItemData = null;
            for(let i: number = 0; i < /* size */(<number>array.length); i++) {{
                const obj: any = /* get */array[i];
                if (obj != null && obj instanceof <any>quickstart.JCFItemData){
                    itemData = <quickstart.JCFItemData>obj;
                    const key: string = itemData.getItemID();
                    const userValue: string = <string>this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
                    if (userValue != null){
                        itemData.setValue(userValue);
                    }
                }
            };}
            quickstart.SMSCLLog.debug("copyUserlToPanel() end");
        }

        deserialize$quickstart_JCFContext$java_lang_String(context: quickstart.JCFContext, screen_id: string) {
            this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
            this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_MAIN);
            this.removeUserData$quickstart_JCFContext$java_lang_Object(context, <any>screen_id);
        }

        public deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context: quickstart.JCFContext, screen_id: string, frame_id: string) {
            const map: any = <any>this.getUserData$quickstart_JCFContext$java_lang_Object(context, screen_id + "_" + frame_id);
            const screenData: quickstart.JCFScreenData = context.getCurrentScreenData();
            const panel: quickstart.JCFPanelData = screenData.getPanelData(frame_id);
            if (map != null && panel != null){
                const arItems: Array<any> = panel.getAllItemData();
                for(let i: number = 0; i < /* size */(<number>arItems.length); i++) {{
                    const item: quickstart.JCFItemData = <quickstart.JCFItemData>/* get */arItems[i];
                    if (item.getItemID() != null){
                        const old: quickstart.JCFItemData = <quickstart.JCFItemData>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, item.getItemID());
                        if (old != null){
                            item.setDataAndAttributes(old);
                        }
                    }
                };}
                this.removeUserData$quickstart_JCFContext$java_lang_String(context, <any>screen_id + "_" + frame_id);
            }
        }

        /**
         * 
         * パネルデータの復元
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 復元対象スクリーンID
         * @param {string} frame_id 復元対象フレームID
         */
        public deserialize(context?: any, screen_id?: any, frame_id?: any) {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && ((typeof frame_id === 'string') || frame_id === null)) {
                return <any>this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && frame_id === undefined) {
                return <any>this.deserialize$quickstart_JCFContext$java_lang_String(context, screen_id);
            } else throw new Error('invalid overload');
        }

        serialize$quickstart_JCFContext$java_lang_String(context: quickstart.JCFContext, screen_id: string) {
            this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, screen_id, true);
            this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
            this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_MAIN);
        }

        public serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context: quickstart.JCFContext, screen_id: string, frame_id: string) {
            const screenData: quickstart.JCFScreenData = context.getCurrentScreenData();
            const panel: quickstart.JCFPanelData = screenData.getPanelData(frame_id);
            const arItems: Array<any> = panel.getAllItemData();
            const map: any = <any>({});
            for(let i: number = 0; i < /* size */(<number>arItems.length); i++) {{
                const item: quickstart.JCFItemData = <quickstart.JCFItemData>/* get */arItems[i];
                if (item.getItemID() != null){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, item.getItemID(), item);
                }
            };}
            this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, screen_id + "_" + frame_id, map);
        }

        /**
         * 
         * パネルデータの保存
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 保存対象スクリーンID
         * @param {string} frame_id 保存対象フレームID
         */
        public serialize(context?: any, screen_id?: any, frame_id?: any) {
            if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && ((typeof frame_id === 'string') || frame_id === null)) {
                return <any>this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id);
            } else if (((context != null && context instanceof <any>quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && frame_id === undefined) {
                return <any>this.serialize$quickstart_JCFContext$java_lang_String(context, screen_id);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * パネルデータが保存されているか確認します。
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 保存対象スクリーンID
         * @return {boolean} true:指定されたスクリーンIDのパネルデータが保存されている false:そうでない場合
         */
        isPanelSerialized(context: quickstart.JCFContext, screen_id: string): boolean {
            let rtn: boolean = false;
            const fgPanelSerialized: boolean = <boolean>this.getUserData$quickstart_JCFContext$java_lang_Object(context, <any>screen_id);
            if (fgPanelSerialized != null && /* booleanValue */fgPanelSerialized){
                rtn = true;
            }
            return rtn;
        }

        isValidFilledDate$java_lang_String(date: string): boolean {
            return this.isValidFilledDate$boolean$java_lang_String(true, date);
        }

        public isValidFilledDate$boolean$java_lang_String(required: boolean, date: string): boolean {
            let rtn: boolean = false;
            if (date == null){
                return rtn;
            }
            date = /* replaceAll */date.replace(new RegExp("/", 'g'),"");
            if (date.length === 6){
                date += "01";
            }
            if (date.length !== 8){
                return rtn;
            }
            if (!required && ("00000000" === date)){
                return true;
            }
            quickstart.SMSDateStringUtil.checkExistDay(date, null, null);
            const fromDate: number = /* parseInt */parseInt(this.getValidFromDate());
            const toDate: number = /* parseInt */parseInt(this.getValidToDate());
            if (/* parseInt */parseInt(date) >= fromDate && /* parseInt */parseInt(date) <= toDate){
                rtn = true;
            }
            return rtn;
        }

        /**
         * 
         * YUKIFieldFilledDateに入力された値が正当か判断します。
         * GregorianCalendarクラスで正当性を判定します。
         * @param {boolean} required true:必須 false:必須ではない
         * @param {string} date yyyyMMddフォーマットの日付文字列
         * @return {boolean} true:正常値 false:異常値
         */
        public isValidFilledDate(required?: any, date?: any): boolean {
            if (((typeof required === 'boolean') || required === null) && ((typeof date === 'string') || date === null)) {
                return <any>this.isValidFilledDate$boolean$java_lang_String(required, date);
            } else if (((typeof required === 'string') || required === null) && date === undefined) {
                return <any>this.isValidFilledDate$java_lang_String(required);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * システムで妥当とされる日付開始をプロパティから取得します。
         * @return {string} システムで妥当とされる日付開始
         */
        getValidFromDate(): string {
            let value: string = <string>quickstart.SMSPropsInfos.getProperty(SMSCjfLogicBase.PARAM_VALID_PROP, SMSCjfLogicBase.PARAM_VALID_FROM);
            if ("" === value){
                value = "19510101";
            }
            return value;
        }

        /**
         * 
         * システムで妥当とされる日付終了をプロパティから取得します。
         * @return {string} システムで妥当とされる日付終了
         */
        getValidToDate(): string {
            let value: string = <string>quickstart.SMSPropsInfos.getProperty(SMSCjfLogicBase.PARAM_VALID_PROP, SMSCjfLogicBase.PARAM_VALID_TO);
            if ("" === value){
                value = "20501231";
            }
            return value;
        }

        /**
         * 
         * システムで妥当とされる日付開始、終了をプロパティから取得し、メッセージ用にフォーマットします。
         * @param  {string} obj 「XX」はYY〜ZZの範囲で入力してください。　のXX
         * @return {java.lang.String[]} [0]:システムで妥当とされる日付開始 [1]:システムで妥当とされる日付終了
         */
        getValidDatesMessage(obj: string): string[] {
            const dates: string[] = [null, null, null];
            dates[0] = obj;
            dates[1] = quickstart.SMSDateStringUtil.conversion(this.getValidFromDate(), quickstart.SMSDateStringUtil.YYYYMMDD);
            dates[2] = quickstart.SMSDateStringUtil.conversion(this.getValidToDate(), quickstart.SMSDateStringUtil.YYYYMMDD);
            return dates;
        }

        /**
         * システムエラーが発生したか判定します。
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @return {boolean} true：システムエラーが発生した　false：システムエラーが発生していない
         */
        isErrorOccurs(context: quickstart.JCFContext): boolean {
            let ret: boolean = false;
            const errorFlg: any = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
            return ret = (errorFlg != null) ? true : false;
        }
    }
    SMSCjfLogicBase["__class"] = "quickstart.SMSCjfLogicBase";

}

