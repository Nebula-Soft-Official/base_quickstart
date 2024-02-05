/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    /**
     *
     * コンストラクタ <BR>
     * @class
     */
    class SMSCjfLogicBase {
        constructor() {
            this.useCaseID = "";
            this.MENU_SUBSYSTEM_ID = "YCSCMNF030M";
            this.FG_SUB_MENU = "fgSubMenu";
            this.setUseCaseID();
        }
        static LOGIN_CBS_$LI$() { if (SMSCjfLogicBase.LOGIN_CBS == null) {
            SMSCjfLogicBase.LOGIN_CBS = quickstart.SMSClientInfo.getLoginCBSName();
        } return SMSCjfLogicBase.LOGIN_CBS; }
        callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, cbsName, cbsVerb, data) {
            return this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context, event, SMSCjfLogicBase.ADAPTER_FUNCTION_ID, cbsName, cbsVerb, data);
        }
        callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb, data) {
            const dvSV01 = context.getLogicalDevice(SMSCjfLogicBase.ADAPTER_NAME);
            const inParam = dvSV01.createAdapterInParam(functionID, false);
            const paramMap = ({});
            /* put */ ((m, k, v) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_CBS_NAME, cbsName);
            /* put */ ((m, k, v) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_CBS_VERB, cbsVerb);
            /* put */ ((m, k, v) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_DATA, data);
            if (event != null) {
                quickstart.SMSCLLog.debug("SMSCjfLogicBase\uff1aSubSystemID:" + event.getSubsystemID());
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, event.getSubsystemID());
            }
            else {
                quickstart.SMSCLLog.debug("SMSCjfLogicBase\uff1aSubSystemID:null\uff08\u5f37\u5236\uff09");
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, null);
            }
            let loginInfo = this.getLoginInfo(context);
            if (loginInfo != null) {
                loginInfo.setCdProgram(this.useCaseID.substring(0, 10));
            }
            else {
                loginInfo = new quickstart.SMSLoginInfoImpl();
            }
            /* put */ ((m, k, v) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    m.entries[i].value = v;
                    return;
                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(paramMap, quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
            inParam.setCommunicationData(paramMap);
            let outParam = null;
            try {
                outParam = dvSV01.callSync(functionID, inParam);
            }
            finally {
                const obj = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(data, quickstart.SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);
                if (obj != null) {
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306e\u89e3\u653e\u51e6\u7406 start");
                    if (obj != null && (obj instanceof Object)) {
                        const fileUploadMap = obj;
                        quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u6570\uff1a1");
                        const fileData = ((m, k) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(fileUploadMap, quickstart.SMSHashKeyConst.F_U_FILELIST);
                        if (fileData != null) {
                            fileData.getInputStream().close();
                            quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306eclose\u51e6\u7406\u5b9f\u884c");
                        }
                    }
                    else if (obj != null && obj instanceof Array && (obj.length == 0 || obj[0] == null || obj[0] != null)) {
                        const fileUploadMap = obj;
                        quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u6570\uff1a" + fileUploadMap.length);
                        for (let i = 0; i < fileUploadMap.length; i++) {
                            {
                                const fileData = ((m, k) => { if (m.entries == null)
                                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                        return m.entries[i].value;
                                    } return null; })(fileUploadMap[i], quickstart.SMSHashKeyConst.F_U_FILELIST);
                                if (fileData != null) {
                                    fileData.getInputStream().close();
                                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306eclose\u51e6\u7406\u5b9f\u884c(" + i + "\u56de\u76ee)");
                                }
                            }
                            ;
                        }
                    }
                    else {
                        quickstart.SMSCLLog.debug("\u60f3\u5b9a\u3057\u3066\u3044\u306a\u3044\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u3059");
                    }
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306e\u89e3\u653e\u51e6\u7406 end");
                }
                else {
                    quickstart.SMSCLLog.debug("\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u7528\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u304cnull\u306e\u70ba\u3001\u4f55\u3082\u3057\u306a\u3044");
                }
                ;
            }
            if (outParam.isExceptionThrown()) {
                const e = outParam.getException();
                console.error(e.message, e);
                throw e;
            }
            let rtn = ({});
            try {
                rtn = this.checkRtnHash(context, outParam);
                const outLoginInfo = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
                if (outLoginInfo != null) {
                    this.setLoginInfo(context, outLoginInfo);
                }
            }
            catch (th) {
                const buf = { str: "", toString: function () { return this.str; } };
                /* append */ (sb => { sb.str += th.toString() + "\n"; return sb; })(buf);
                if (th != null && th instanceof quickstart.SMSRuntimeException) {
                    const cdError = th.getCdError();
                    if (cdError != null && !(cdError === (""))) {
                        quickstart.SMSCLLog.error("\u7570\u5e38\u756a\u53f7:" + cdError);
                    }
                }
                const cause = null;
                if (cause != null) {
                    /* append */ (sb => { sb.str += "cause:" + cause.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error(/* toString */ buf.str);
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
        callEJB(context, event, functionID, cbsName, cbsVerb, data) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((event != null && event instanceof quickstart.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((typeof cbsVerb === 'string') || cbsVerb === null) && ((data != null && (data instanceof Object)) || data === null)) {
                return this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb, data);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((event != null && event instanceof quickstart.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((cbsVerb != null && (cbsVerb instanceof Object)) || cbsVerb === null) && data === undefined) {
                return this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * ファイルダウンロードを行います。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {number} fileLocation ダウンロードするファイルの所在
         * @throws Throwable
         */
        downloadFile(context, fileLocation) {
            quickstart.SMSCLLog.trace("--------LogicBase#downloadFile() start");
            const applet = quickstart.JCFContext.getBaseContainer();
            const serverName = applet.getCodeBase().getHost();
            const contextRoot = applet.getParameter(SMSCjfLogicBase.CONTEXT_ROOT_KEY);
            let servletName = SMSCjfLogicBase.SERVLET_NAME_DW;
            switch ((fileLocation)) {
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
            const timestamp = quickstart.SMSDateStringUtil.getTimeStamp();
            const userid = this.getLoginInfo(context).getUserId();
            const url = new quickstart.URL(SMSCjfLogicBase.PROTCOL + serverName + contextRoot + servletName + SMSCjfLogicBase.PARAM_DELIM + userid + timestamp);
            context.showDocument$quickstart_URL$java_lang_String(url, "window3");
        }
        getUserData$quickstart_JCFContext$java_lang_Object(context, key) {
            const obj = context.getUserData(this.useCaseID + "_" + key);
            return obj;
        }
        getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key) {
            const obj = context.getUserData(usecaseID + "_" + key);
            return obj;
        }
        /**
         * Method 汎用検索等で他ユースケースの共有データを取得するためユースケースを指定して共有データを取得します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     取得したい共有データのユースケースID
         * @param {*} key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
         * @return {*} Object 共有データから取得する値
         */
        getUserData(context, usecaseID, key) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null)) {
                return this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && key === undefined) {
                return this.getUserData$quickstart_JCFContext$java_lang_Object(context, usecaseID);
            }
            else
                throw new Error('invalid overload');
        }
        putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, key, value) {
            context.putUserData(this.useCaseID + "_" + key, value);
        }
        putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseID, key, value) {
            context.putUserData(usecaseID + "_" + key, value);
        }
        /**
         * Method エラー画面遷移等でユースケースを指定して、他ユースケースの共有データを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     設定したい共有データのユースケースID
         * @param {*} key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
         * @param {*} value     共有データに設定する値
         */
        putUserData(context, usecaseID, key, value) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null) && ((value != null) || value === null)) {
                return this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseID, key, value);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && ((key != null) || key === null) && value === undefined) {
                return this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, usecaseID, key);
            }
            else
                throw new Error('invalid overload');
        }
        removeUserData$quickstart_JCFContext$java_lang_Object(context, key) {
            if (this.useCaseID === ("")) {
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            context.removeUserData(this.useCaseID + "_" + key);
        }
        removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key) {
            if (this.useCaseID === ("")) {
                throw Object.defineProperty(new Error("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.Exception'] });
            }
            context.removeUserData(usecaseID + "_" + key);
        }
        /**
         * Method 汎用検索等で他ユースケースの共有データを削除します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {string} usecaseID     削除したい共有データのユースケースID
         * @param {*} key     共有データから削除する値のキー名（内部的にはユースケースIDが付加される）
         */
        removeUserData(context, usecaseID, key) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && ((key != null) || key === null)) {
                return this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof usecaseID === 'string') || usecaseID === null) && key === undefined) {
                return this.removeUserData$quickstart_JCFContext$java_lang_String(context, usecaseID);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((usecaseID != null) || usecaseID === null) && key === undefined) {
                return this.removeUserData$quickstart_JCFContext$java_lang_Object(context, usecaseID);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && usecaseID === undefined && key === undefined) {
                return this.removeUserData$quickstart_JCFContext(context);
            }
            else
                throw new Error('invalid overload');
        }
        removeUserData$quickstart_JCFContext(context) {
            if (this.useCaseID === ("")) {
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            const dataSet = context.userDataKeySet();
            const keys = dataSet.slice(0);
            for (let i = 0; i < keys.length; i++) {
                {
                    const key = keys[i];
                    if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(key, this.useCaseID)) {
                        context.removeUserData(key);
                    }
                }
                ;
            }
        }
        removeUserData$quickstart_JCFContext$java_lang_String(context, usecaseID) {
            if (this.useCaseID === ("")) {
                throw new quickstart.SMSRuntimeException("\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9ID\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093");
            }
            const dataSet = context.userDataKeySet();
            const keys = dataSet.slice(0);
            for (let i = 0; i < keys.length; i++) {
                {
                    const key = keys[i];
                    if ( /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(key, usecaseID)) {
                        context.removeUserData(key);
                    }
                }
                ;
            }
        }
        /**
         * Method ログイン情報を取得します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @return {quickstart.SMSLoginInfo} SMSLoginInfo ログイン情報
         */
        getLoginInfo(context) {
            const loginInFo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            return loginInFo;
        }
        /**
         * Method ログイン情報を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @return {void} SMSLoginInfo ログイン情報
         * @param {quickstart.SMSLoginInfoImpl} loginInfo
         * @private
         */
        /*private*/ setLoginInfo(context, loginInfo) {
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method getFileDialog.現在使用してないメソッド！！
         * @param {string} title
         * @return {quickstart.FileDialog} FileDialog
         */
        getFileDialog(title) {
            const container = quickstart.JCFContext.getBaseContainer();
            const gc = container.getGraphicsConfiguration();
            const frame = new quickstart.Frame(gc);
            const fileDialog = new quickstart.FileDialog(frame, "", quickstart.FileDialog.LOAD);
            return fileDialog;
        }
        /**
         * ファイルのパーミッションチェック・サイズチェックを行い、ファイルを読み込みます。<BR>
         * @param {string} fileName ファイル名
         * @param sizeChekcFlg ファイルサイズチェックフラグ true:チェックする, false:チェックしない
         * @return {quickstart.MimeSource} MimeSource 読み込んだファイルのMimeSourceオブジェクト
         * @param {boolean} sizeCheckFlg
         */
        readFile(fileName, sizeCheckFlg) {
            const filePm = new quickstart.FilePermission(fileName, "read");
            quickstart.AccessController.checkPermission(filePm);
            const fileUtil = new quickstart.SMSFileUtil();
            if (sizeCheckFlg) {
                const size = fileUtil.getFileSize(fileName);
                const strMax = quickstart.SMSClientInfo.getFileUploadMaxSize();
                const max = parseInt(strMax);
                if (size > max) {
                    quickstart.SMSCLLog.trace("SMSCjfLogicBase#readFile() \u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u30c1\u30a7\u30c3\u30af\u306b\u3088\u308b\u30a8\u30e9\u30fc");
                    throw new quickstart.SMSAppException(quickstart.SMSMessageConst.YCSCMNMCW078, [strMax + "\u30d0\u30a4\u30c8"]);
                }
            }
            let bis = null;
            let ms = null;
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
        /*private*/ checkRtnHash(context, outParam) {
            const errFlg = ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
            quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u30a8\u30e9\u30fc\u30d5\u30e9\u30b0\uff1a" + errFlg);
            if (errFlg === quickstart.SMSHashKeyConst.IS_WARNING) {
                const wMsgID = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_MSG_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgID\uff1a" + wMsgID);
                const wMsgContents = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_MSG_PARAM_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgContents\uff1a" + wMsgContents);
                const wMsgPopup = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.WARNING_POPUP_PARAM_KEY);
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1awMsgPopup\uff1a" + wMsgPopup);
                const msgUtil = context.getMessageUtil();
                quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8ID\uff1a" + wMsgID);
                if (wMsgID === quickstart.SMSMessageConst.SMSCMNMCE067) {
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u5229\u7528\u6642\u9593\u5916\u306e\u8b66\u544a\u3092\u8868\u793a");
                    msgUtil.showMessage(quickstart.SMSMessageConst.SMSCMNMCE067);
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u30a8\u30e9\u30fc\u753b\u9762\u306b\u9077\u79fb");
                    const ex = new quickstart.SMSRuntimeException(quickstart.SMSMessageConst.SMSCMNMCE067);
                    ex.setCdError(quickstart.SMSMessageConst.SMSCMNMCE067);
                    throw ex;
                }
                else {
                    quickstart.SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash\uff1a\u8b66\u544a\u3092\u8868\u793a");
                    const screenData = context.getCurrentScreenData();
                    const footerPanelData = screenData.getPanelData(quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
                    const item = footerPanelData.getItemData(quickstart.SMSHeaderFooterManager.ITEM_MESSAGE);
                    if (wMsgContents != null) {
                        item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
                    }
                    else {
                        item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
                    }
                    if ( /* booleanValue */wMsgPopup) {
                        msgUtil.showMessage(quickstart.SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
                    }
                }
            }
            else if (errFlg === quickstart.SMSHashKeyConst.IS_ERROR) {
                const th = ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null; })(outParam.getCommunicationData(), quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE);
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
        headerToMenu(event, context, returnInfo) {
            returnInfo.setSubsystemID$java_lang_String(this.MENU_SUBSYSTEM_ID);
        }
        /**
         * エラー画面に遷移します。
         * @param {quickstart.JCFEvent} event
         * @param {quickstart.JCFContext} context
         * @param {quickstart.JCFReturnInfo} returnInfo
         * @throws Throwable
         */
        error(event, context, returnInfo) {
            quickstart.SMSCLLog.trace("LogicBase:error() start");
            returnInfo.setTransitionScreenID(SMSCjfLogicBase.ERROR_SCREEN_ID);
            quickstart.SMSCLLog.trace("LogicBase:error() end");
        }
        /**
         * エラー画面に遷移アダプタを呼び出します。
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {Error} th 発生したThrowableオブジェクト
         */
        callErrorAdapter(context, th) {
            let ev;
            let inParam;
            try {
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG, "true");
                try {
                    if (th != null && th instanceof quickstart.SMSRuntimeException) {
                        const cdError = th.getCdError();
                        if (cdError != null && !(cdError === quickstart.SMSMessageConst.SMSSYSMCE002)) {
                            const inData = ({});
                            /* put */ ((m, k, v) => { if (m.entries == null)
                                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                            /* put */ ((m, k, v) => { if (m.entries == null)
                                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                            const logoutHash = this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                        }
                    }
                    else {
                        quickstart.SMSCLLog.debug("SMSCjfLogicBase#callErrorAdapter:RuntimeException\u4ee5\u5916\u306e\u30a8\u30e9\u30fc\u767a\u751f\uff08\u30ed\u30b0\u30a2\u30a6\u30c8\u51e6\u7406\u306e\u5b9f\u884c\uff09");
                        const inData = ({});
                        /* put */ ((m, k, v) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                        /* put */ ((m, k, v) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                        const logoutHash = this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                    }
                }
                catch (e) {
                    console.error(e.message, e);
                }
                ev = context.getLogicalDevice(SMSCjfLogicBase.ERROR_ADAPTER_NAME);
                inParam = ev.createAdapterInParam(SMSCjfLogicBase.ERROR_FUNCTION_ID, false);
                ev.callAsync(SMSCjfLogicBase.ERROR_FUNCTION_ID, inParam);
                console.error(th.message, th);
            }
            catch (e) {
                console.error(e.message, e);
            }
        }
        /**
         * エラー画面に遷移アダプタを呼び出します。サブ画面で使用します。
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param {Error} th 発生したThrowableオブジェクト
         */
        callSubErrorAdapter(context, th) {
            let ev;
            let inParam;
            try {
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_SUB_ERROR, th);
                context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG, "true");
                try {
                    const inData = ({});
                    /* put */ ((m, k, v) => { if (m.entries == null)
                        m.entries = []; for (let i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.ST_TANMATSU, "01");
                    /* put */ ((m, k, v) => { if (m.entries == null)
                        m.entries = []; for (let i = 0; i < m.entries.length; i++)
                        if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                            m.entries[i].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, "0");
                    const logoutHash = this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, SMSCjfLogicBase.LOGIN_CBS_$LI$(), SMSCjfLogicBase.VERB_LOGOUT, inData);
                }
                catch (e) {
                    console.error(e.message, e);
                }
                ev = context.getLogicalDevice(SMSCjfLogicBase.ERROR_SUB_ADAPTER_NAME);
                inParam = ev.createAdapterInParam(SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID, false);
                ev.callAsync(SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID, inParam);
            }
            catch (e) {
                console.error(e.message, e);
            }
        }
        /**
         * ダイアログで例外が発生したか判断します。
         * 表示前処理で使用します。
         * @exception Throwable
         * @param {quickstart.JCFContext} context
         */
        checkDialogException(context) {
            const th = this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, quickstart.SMSHashKeyConst.PARAM_KEY_SUB_ERROR);
            if (th != null) {
                throw th;
            }
        }
        /**
         * 選択されているコンボボックスのIDを取得します。<BR>
         * @param {quickstart.JCFComboBoxData} comboBoxData コンボボックスデータアイテム
         * @return {string} value コンボボックス要素ID 選択されていなかったら""を返します。
         */
        getComboID(comboBoxData) {
            let rtnID = "";
            const selectElement = comboBoxData.getSelectableElementValue();
            for (let i = 0; i < selectElement.length; i++) {
                {
                    if (selectElement[i].isSelected()) {
                        rtnID = selectElement[i].getID();
                    }
                }
                ;
            }
            return rtnID;
        }
        /**
         * Method プログラムIDを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String プログラムID
         * @param {string} value
         */
        setCdProgram(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setCdProgram(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 画面IDを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 画面ID
         * @param {string} value
         */
        setCdGamen(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setCdGamen(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 画面名を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 画面名
         * @param {string} value
         */
        setNmGamen(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setNmGamen(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 最大検索件数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 最大検索件数
         * @param {string} value
         */
        setQtSaidaiKensaku(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtSaidaiKensaku(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 最大表示件数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 最大表示件数
         * @param {string} value
         */
        setQtSaidaiHyouji(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtSaidaiHyouji(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 表示済み数を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 表示済み数
         * @param {string} value
         */
        setQtHyoujiZumi(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtHyoujiZumi(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 検索方向を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 検索方向
         * @param {string} value
         */
        setStKensakuHoukou(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setStKensakuHoukou(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 表示頁を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String 表示頁
         * @param {string} value
         */
        setQtHyoujiPage(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setQtHyoujiPage(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method 頁情報をクリアします。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         */
        clearPageInfo(context) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
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
        geneSearchPrepare(event, context, cons, enableCons, kidoKensaku, literalList) {
            let searchID = event.getEventAdditionalInfo().getActionID();
            const ACTION_HEAD = "ACT_";
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
        geneSearchPrepareWithID(event, context, searchID, cons, enableCons, kidoKensaku, literalList) {
            const USECASE = quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID;
            const SEARCHID = "searchID";
            quickstart.SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() start");
            const jouken = [null, null, null, null, null, null, null, null, null, null];
            try {
                quickstart.SMSPanelInitDataHolder.getInstance().setCloseButton(false);
                context.putUserData(SEARCHID, searchID);
                const eventAddInfo = event.getEventAdditionalInfo();
                const spreadAddInfo = eventAddInfo.getAdditionalInfo();
                if (spreadAddInfo != null) {
                    this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAddInfo.getCellPosition());
                }
                quickstart.SMSPanelInitDataHolder.getInstance().setSearchID(searchID);
                if (cons != null) {
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_VALUE, cons);
                }
                else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_VALUE);
                }
                if (enableCons != null) {
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_ENABLE_CONS, enableCons);
                }
                else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_ENABLE_CONS);
                }
                this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERA_SEARCH_START, new Boolean(kidoKensaku));
                if (literalList != null) {
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                }
                else {
                    this.removeUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS);
                }
            }
            catch (e) {
                const buf = { str: "", toString: function () { return this.str; } };
                if (e != null) {
                    /* append */ (sb => { sb.str += e.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error("SMSCjfLogicBase:geneSearchPrepareWithID()\u2026" + /* toString */ buf.str);
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
        geneSearchComboPrepare(event, context, comboName, comboCondition) {
            const USECASE = quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID;
            const SEARCHID = "searchID";
            quickstart.SMSCLLog.trace("SMSCjfLogicBase:geneSearchComboPrepare() start");
            try {
                if (comboCondition != null) {
                    this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, quickstart.SMSHashKeyConst.PARAM_KEY_GENERALID, comboName, comboCondition);
                }
            }
            catch (e) {
                const buf = { str: "", toString: function () { return this.str; } };
                if (e != null) {
                    /* append */ (sb => { sb.str += e.toString() + "\n"; return sb; })(buf);
                }
                quickstart.SMSCLLog.error("YCSCMNF060SLogic:geneSearchComboPrepare()\u2026" + /* toString */ buf.str);
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
        setStDirectory(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setStDirectory(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method ファイル名を設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param String ファイル名
         * @param {string} value
         */
        setNmFile(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setNmFile(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * Method ファイルデータを設定します。<BR>
         * @param {quickstart.JCFContext} context CJFのコンテキスト
         * @param byte[] ファイルデータ
         * @param {byte[]} value
         */
        setFile(context, value) {
            const loginInfo = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON);
            loginInfo.setFile(value);
            context.putApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
        }
        /**
         * 頁制御を実行した後に行う部品へのセット処理を行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context			CJFコンテキストオブジェクト
         */
        setPageInfo(context) {
            const current = context.getCurrentScreenData();
            const itemForward = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_FORWARD);
            const itemReverse = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_REVERSE);
            const itemPageJump = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_JUMP);
            const itemFirst = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_FIRST_RECORD);
            const itemLast = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_LAST_RECORD);
            const itemTotal = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_RECORD);
            const itemCurrentPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
            const loginInfo = this.getLoginInfo(context);
            if (loginInfo.getStJiPage() != null) {
                if ( /* booleanValue */loginInfo.getStJiPage()) {
                    itemForward.setEnabled(true);
                }
                else {
                    itemForward.setEnabled(false);
                    itemLast.setEnabled(false);
                }
            }
            if (loginInfo.getStZenPage() != null) {
                if ( /* booleanValue */loginInfo.getStZenPage()) {
                    itemReverse.setEnabled(true);
                }
                else {
                    itemReverse.setEnabled(false);
                }
            }
            itemCurrentPage.setBackground(quickstart.SMSColor.DEFAULT);
            if (loginInfo.getQtPage() != null) {
                try {
                    if ( /* parseInt */parseInt(loginInfo.getQtPage()) > 1) {
                        itemPageJump.setEnabled(true);
                        itemCurrentPage.setEnabled(true);
                    }
                    else {
                        itemPageJump.setEnabled(false);
                        itemCurrentPage.setEnabled(false);
                    }
                }
                catch (e) {
                    itemPageJump.setEnabled(false);
                    itemCurrentPage.setEnabled(false);
                }
            }
            let hyoujiZumi;
            let maxHyouji;
            let cnt;
            try {
                hyoujiZumi = /* parseInt */ parseInt(loginInfo.getQtHyoujiZumi());
                maxHyouji = /* parseInt */ parseInt(loginInfo.getQtSaidaiHyouji());
                cnt = /* parseInt */ parseInt(loginInfo.getQtKensaku());
                itemFirst.setValue(quickstart.SMSPageTranUtil.getHyoujiKaishi(hyoujiZumi, maxHyouji, cnt));
                itemLast.setValue(hyoujiZumi);
                itemTotal.setValue(/* parseLong */ parseInt(loginInfo.getQtKensaku()));
                itemCurrentPage.setValue(loginInfo.getQtHyoujiPage());
                itemTotalPage.setValue(loginInfo.getQtPage());
            }
            catch (e) {
                itemCurrentPage.setValue(0);
            }
        }
        /**
         * 頁制御必要な部品の初期化処理を行います。<BR>
         * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
         * @param {quickstart.JCFContext} context			CJFコンテキストオブジェクト
         */
        initPageInfo(context) {
            const current = context.getCurrentScreenData();
            const itemForward = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_FORWARD);
            const itemReverse = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_REVERSE);
            const itemPageJump = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_PAGE_JUMP);
            const itemFirst = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_FIRST_RECORD);
            const itemLast = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_LAST_RECORD);
            const itemTotal = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_RECORD);
            const itemCurrentPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
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
        getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_lang_String$java_lang_String$java_util_List$java_lang_String(context, searchID, columnName, code, literalList, resultName) {
            let rtn = "";
            if (searchID == null || ("" === searchID)) {
                return rtn;
            }
            if (code == null || ("" === code)) {
                return rtn;
            }
            const inData = ({});
            const outData = ({});
            try {
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.SEARCH_ID, searchID);
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, columnName, code);
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                rtn = this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, inData, resultName);
            }
            catch (e) {
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
        getNameByGeneralSearch(context, searchID, columnName, code, literalList, resultName) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((typeof columnName === 'string') || columnName === null) && ((typeof code === 'string') || code === null) && ((literalList != null && (literalList instanceof Array)) || literalList === null) && ((typeof resultName === 'string') || resultName === null)) {
                return this.getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_lang_String$java_lang_String$java_util_List$java_lang_String(context, searchID, columnName, code, literalList, resultName);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((columnName != null && (columnName instanceof Object)) || columnName === null) && ((code != null && (code instanceof Array)) || code === null) && ((typeof literalList === 'string') || literalList === null) && resultName === undefined) {
                return this.getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, searchID, columnName, code, literalList);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((searchID != null && (searchID instanceof Object)) || searchID === null) && ((typeof columnName === 'string') || columnName === null) && code === undefined && literalList === undefined && resultName === undefined) {
                return this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, searchID, columnName);
            }
            else
                throw new Error('invalid overload');
        }
        getNameByGeneralSearch$quickstart_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, searchID, conditionMap, literalList, resultName) {
            let rtn = "";
            if (searchID == null || ("" === searchID)) {
                return rtn;
            }
            if (conditionMap == null || /* size */ ((m) => { if (m.entries == null)
                m.entries = []; return m.entries.length; })(conditionMap) < 1) {
                return rtn;
            }
            const inData = ({});
            try {
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, SMSCjfLogicBase.SEARCH_ID, searchID);
                const keySet = ((m) => { let r = []; if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    r.push(m.entries[i].key); return r; })(conditionMap);
                const it = ((a) => { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(keySet);
                while ((it.hasNext())) {
                    {
                        const key = it.next();
                        /* put */ ((m, k, v) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, key, /* get */ ((m, k) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(conditionMap, key));
                    }
                }
                ;
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(inData, quickstart.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
                rtn = this.getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, inData, resultName);
            }
            catch (e) {
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
        checkPageInfo(context) {
            let rtn = false;
            const current = context.getCurrentScreenData();
            const itemCurrentPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_CURRENT_PAGE);
            const itemTotalPage = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_MAIN, SMSCjfLogicBase.ITEM_TOTAL_PAGE);
            const currentPage = itemCurrentPage.getLongValue();
            const totalPage = itemTotalPage.getLongValue();
            if (currentPage > totalPage || currentPage === 0) {
                this.setPageInfo(context);
                itemCurrentPage.setBackground(quickstart.SMSColor.WARNING);
                quickstart.SMSHeaderFooterManager.showInformation(context, quickstart.SMSMessageConst.SMSCMNMCA104, ["\u9801", "1", /* toString */ ('' + (totalPage))]);
            }
            else {
                rtn = true;
            }
            return rtn;
        }
        /*private*/ getNameByGeneralSearch$quickstart_JCFContext$java_util_HashMap$java_lang_String(context, inData, resultName) {
            let rtn = "";
            let outData = ({});
            const data = this.callEJB$quickstart_JCFContext$quickstart_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, null, "SMSSYSCBS", "find", inData);
            outData = ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(data, quickstart.SMSHashKeyConst.PARAM_KEY_DATA);
            const map = ((m, k) => { if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                    return m.entries[i].value;
                } return null; })(outData, SMSCjfLogicBase.RESULT_KEY);
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
        /**
         * 業務終了します。
         *
         * @param {quickstart.JCFEvent} event ＣＪＦイベントオブジェクト
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {quickstart.JCFReturnInfo} returnInfo ＣＪＦ復帰情報オブジェクト
         * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
         */
        exitSystem(event, context, returnInfo) {
            quickstart.SMSCLLog.debug("exitSystem() start");
            const current = context.getCurrentScreenData();
            let pushButton;
            pushButton = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.EXIT_BUTTON);
            if (!pushButton.isEnabled()) {
                return;
            }
            const msgUtil = context.getMessageUtil();
            const ret = msgUtil.showMessage(quickstart.SMSMessageConst.YCSCMNMSC077);
            if ( /* equals */((o1, o2) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(ret, quickstart.JCFMessageOnWindow.BTN_NO)) {
                returnInfo.cancelScreenTransition();
                return;
            }
            else if (ret === quickstart.JCFMessageOnWindow.BTN_YES) {
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
        returnSubMenu(event, context, returnInfo) {
            quickstart.SMSCLLog.debug("returnSubMenu() start");
            const current = context.getCurrentScreenData();
            let pushButton;
            pushButton = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.RETURN_BUTTON);
            if (!pushButton.isEnabled()) {
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
        returnMainMenu(event, context, returnInfo) {
            quickstart.SMSCLLog.debug("returnMainMenu() start");
            const current = context.getCurrentScreenData();
            let pushButton;
            pushButton = current.getItemData(quickstart.SMSHeaderFooterManager.FRAME_HEADER, quickstart.SMSHeaderFooterManager.MENU_BUTTON);
            if (!pushButton.isEnabled()) {
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
        copyPanelToUser(context, panelData, usecaseID) {
            quickstart.SMSCLLog.debug("copyPanelToUser() start");
            const array = panelData.getAllItemData();
            let itemData = null;
            for (let i = 0; i < /* size */ array.length; i++) {
                {
                    const obj = array[i];
                    if (obj != null && obj instanceof quickstart.JCFItemData) {
                        itemData = obj;
                        const key = itemData.getItemID();
                        const value = itemData.getValue();
                        if (key != null && obj != null) {
                            this.putUserData$quickstart_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseID, key, value);
                        }
                    }
                }
                ;
            }
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
        copyUserToPanel(context, panelData, usecaseID) {
            quickstart.SMSCLLog.debug("copyUserlToPanel() start");
            const array = panelData.getAllItemData();
            let itemData = null;
            for (let i = 0; i < /* size */ array.length; i++) {
                {
                    const obj = array[i];
                    if (obj != null && obj instanceof quickstart.JCFItemData) {
                        itemData = obj;
                        const key = itemData.getItemID();
                        const userValue = this.getUserData$quickstart_JCFContext$java_lang_String$java_lang_Object(context, usecaseID, key);
                        if (userValue != null) {
                            itemData.setValue(userValue);
                        }
                    }
                }
                ;
            }
            quickstart.SMSCLLog.debug("copyUserlToPanel() end");
        }
        deserialize$quickstart_JCFContext$java_lang_String(context, screen_id) {
            this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
            this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_MAIN);
            this.removeUserData$quickstart_JCFContext$java_lang_Object(context, screen_id);
        }
        deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id) {
            const map = this.getUserData$quickstart_JCFContext$java_lang_Object(context, screen_id + "_" + frame_id);
            const screenData = context.getCurrentScreenData();
            const panel = screenData.getPanelData(frame_id);
            if (map != null && panel != null) {
                const arItems = panel.getAllItemData();
                for (let i = 0; i < /* size */ arItems.length; i++) {
                    {
                        const item = arItems[i];
                        if (item.getItemID() != null) {
                            const old = ((m, k) => { if (m.entries == null)
                                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(map, item.getItemID());
                            if (old != null) {
                                item.setDataAndAttributes(old);
                            }
                        }
                    }
                    ;
                }
                this.removeUserData$quickstart_JCFContext$java_lang_String(context, screen_id + "_" + frame_id);
            }
        }
        /**
         *
         * パネルデータの復元
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 復元対象スクリーンID
         * @param {string} frame_id 復元対象フレームID
         */
        deserialize(context, screen_id, frame_id) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && ((typeof frame_id === 'string') || frame_id === null)) {
                return this.deserialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && frame_id === undefined) {
                return this.deserialize$quickstart_JCFContext$java_lang_String(context, screen_id);
            }
            else
                throw new Error('invalid overload');
        }
        serialize$quickstart_JCFContext$java_lang_String(context, screen_id) {
            this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, screen_id, true);
            this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_FOOTER);
            this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, quickstart.SMSHeaderFooterManager.FRAME_MAIN);
        }
        serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id) {
            const screenData = context.getCurrentScreenData();
            const panel = screenData.getPanelData(frame_id);
            const arItems = panel.getAllItemData();
            const map = ({});
            for (let i = 0; i < /* size */ arItems.length; i++) {
                {
                    const item = arItems[i];
                    if (item.getItemID() != null) {
                        /* put */ ((m, k, v) => { if (m.entries == null)
                            m.entries = []; for (let i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(map, item.getItemID(), item);
                    }
                }
                ;
            }
            this.putUserData$quickstart_JCFContext$java_lang_Object$java_lang_Object(context, screen_id + "_" + frame_id, map);
        }
        /**
         *
         * パネルデータの保存
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 保存対象スクリーンID
         * @param {string} frame_id 保存対象フレームID
         */
        serialize(context, screen_id, frame_id) {
            if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && ((typeof frame_id === 'string') || frame_id === null)) {
                return this.serialize$quickstart_JCFContext$java_lang_String$java_lang_String(context, screen_id, frame_id);
            }
            else if (((context != null && context instanceof quickstart.JCFContext) || context === null) && ((typeof screen_id === 'string') || screen_id === null) && frame_id === undefined) {
                return this.serialize$quickstart_JCFContext$java_lang_String(context, screen_id);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         *
         * パネルデータが保存されているか確認します。
         * @param {quickstart.JCFContext} context ＣＪＦコンテキストオブジェクト
         * @param {string} screen_id 保存対象スクリーンID
         * @return {boolean} true:指定されたスクリーンIDのパネルデータが保存されている false:そうでない場合
         */
        isPanelSerialized(context, screen_id) {
            let rtn = false;
            const fgPanelSerialized = this.getUserData$quickstart_JCFContext$java_lang_Object(context, screen_id);
            if (fgPanelSerialized != null && /* booleanValue */ fgPanelSerialized) {
                rtn = true;
            }
            return rtn;
        }
        isValidFilledDate$java_lang_String(date) {
            return this.isValidFilledDate$boolean$java_lang_String(true, date);
        }
        isValidFilledDate$boolean$java_lang_String(required, date) {
            let rtn = false;
            if (date == null) {
                return rtn;
            }
            date = /* replaceAll */ date.replace(new RegExp("/", 'g'), "");
            if (date.length === 6) {
                date += "01";
            }
            if (date.length !== 8) {
                return rtn;
            }
            if (!required && ("00000000" === date)) {
                return true;
            }
            quickstart.SMSDateStringUtil.checkExistDay(date, null, null);
            const fromDate = parseInt(this.getValidFromDate());
            const toDate = parseInt(this.getValidToDate());
            if ( /* parseInt */parseInt(date) >= fromDate && /* parseInt */ parseInt(date) <= toDate) {
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
        isValidFilledDate(required, date) {
            if (((typeof required === 'boolean') || required === null) && ((typeof date === 'string') || date === null)) {
                return this.isValidFilledDate$boolean$java_lang_String(required, date);
            }
            else if (((typeof required === 'string') || required === null) && date === undefined) {
                return this.isValidFilledDate$java_lang_String(required);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         *
         * システムで妥当とされる日付開始をプロパティから取得します。
         * @return {string} システムで妥当とされる日付開始
         */
        getValidFromDate() {
            let value = quickstart.SMSPropsInfos.getProperty(SMSCjfLogicBase.PARAM_VALID_PROP, SMSCjfLogicBase.PARAM_VALID_FROM);
            if ("" === value) {
                value = "19510101";
            }
            return value;
        }
        /**
         *
         * システムで妥当とされる日付終了をプロパティから取得します。
         * @return {string} システムで妥当とされる日付終了
         */
        getValidToDate() {
            let value = quickstart.SMSPropsInfos.getProperty(SMSCjfLogicBase.PARAM_VALID_PROP, SMSCjfLogicBase.PARAM_VALID_TO);
            if ("" === value) {
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
        getValidDatesMessage(obj) {
            const dates = [null, null, null];
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
        isErrorOccurs(context) {
            let ret = false;
            const errorFlg = context.getApplicationData(quickstart.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
            return ret = (errorFlg != null) ? true : false;
        }
    }
    SMSCjfLogicBase.SUB_HEADER = "FLM_SUB_HEAD";
    SMSCjfLogicBase.SUB_MAIN = "FLM_SUB_BODY";
    SMSCjfLogicBase.SUB_FOOTER = "FLM_SUB_FOOT";
    SMSCjfLogicBase.MENU_MANAGER = "sms_menu_manager";
    SMSCjfLogicBase.MENU_AUTH_MANAGER = "sms_menu_auth_manager";
    /**
     * 次レコードボタン itemID
     */
    SMSCjfLogicBase.ITEM_PAGE_FORWARD = "page_forward";
    /**
     * 前レコードボタン itemID
     */
    SMSCjfLogicBase.ITEM_PAGE_REVERSE = "page_reverse";
    /**
     * 頁遷移ボタン itemID
     */
    SMSCjfLogicBase.ITEM_PAGE_JUMP = "page_jump";
    /**
     * 表示開始レコード itemID
     */
    SMSCjfLogicBase.ITEM_FIRST_RECORD = "first_record";
    /**
     * 表示終了レコード itemID
     */
    SMSCjfLogicBase.ITEM_LAST_RECORD = "last_record";
    /**
     * 合計レコード数 itemID
     */
    SMSCjfLogicBase.ITEM_TOTAL_RECORD = "total_record";
    /**
     * 表示頁 itemID
     */
    SMSCjfLogicBase.ITEM_CURRENT_PAGE = "current_page";
    /**
     * 頁数 itemID
     */
    SMSCjfLogicBase.ITEM_TOTAL_PAGE = "total_page";
    /**
     * CSVダウンロードサーブレット
     */
    SMSCjfLogicBase.SERVLET_NAME_DW_LOCAL = "/SMSDWServlet?uji.verb=downloadLocal";
    /**
     * PDFダウンロードサーブレット
     */
    SMSCjfLogicBase.SERVLET_NAME_DW_REMOTE = "/SMSDWServlet?uji.verb=downloadRemote";
    /**
     * ダウンロードファイルタイプ ファイルがAPサーバ上
     */
    SMSCjfLogicBase.DW_LOCAL = 0;
    /**
     * ダウンロードファイルタイプ ファイルがAPサーバではない
     */
    SMSCjfLogicBase.DW_REMOTE = 1;
    /**
     * リクエストパラメータ区切り文字
     */
    SMSCjfLogicBase.PARAM_DELIM = "&";
    SMSCjfLogicBase.CONTEXT_ROOT_KEY = "contextRoot";
    SMSCjfLogicBase.PROTCOL = "http://";
    /**
     * ダウンロードサーブレット
     */
    SMSCjfLogicBase.SERVLET_NAME_DW = "/SMSDWServlet?uji.verb=download";
    /**
     * 共通アダプタ名
     */
    SMSCjfLogicBase.ADAPTER_NAME = "SVADAPTER";
    /**
     * ファンクションID
     */
    SMSCjfLogicBase.ADAPTER_FUNCTION_ID = "EXECUTE";
    /**
     * エラースクリーンID
     */
    SMSCjfLogicBase.ERROR_SCREEN_ID = "ERROR";
    /**
     * エラーアダプタ名
     */
    SMSCjfLogicBase.ERROR_ADAPTER_NAME = "EVADAPTER";
    /**
     * サブエラーアダプタ名
     */
    SMSCjfLogicBase.ERROR_SUB_ADAPTER_NAME = "EVSUBADAPTER";
    /**
     * エラーファンクションID
     */
    SMSCjfLogicBase.ERROR_FUNCTION_ID = "ERROR";
    /**
     * サブエラーファンクションID
     */
    SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID = "ERRORSUB";
    /**
     * 汎用検索ID
     */
    SMSCjfLogicBase.SEARCH_ID = "searchID";
    /**
     * 検索結果キー
     */
    SMSCjfLogicBase.RESULT_KEY = "resultList";
    /**
     * 基盤システム起動チェック用キー
     */
    SMSCjfLogicBase.FG_INFRA = "fgInfra";
    /**
     * システムで妥当される日付プロパティファイルキー
     */
    SMSCjfLogicBase.PARAM_VALID_PROP = "SMSValidDate";
    /**
     * システムで妥当される日付開始キー
     */
    SMSCjfLogicBase.PARAM_VALID_FROM = "fromDate";
    /**
     * システムで妥当される日付終了キー
     */
    SMSCjfLogicBase.PARAM_VALID_TO = "toDate";
    /**
     * verb（ログアウト）
     */
    SMSCjfLogicBase.VERB_LOGOUT = "logout";
    /**
     * 端末区分用キー
     */
    SMSCjfLogicBase.ST_TANMATSU = "stTammatsu";
    /**
     * 削除フラグ（ログイン管理テーブル）用キー
     */
    SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI = "fgSakujoLoginKanri";
    quickstart.SMSCjfLogicBase = SMSCjfLogicBase;
    SMSCjfLogicBase["__class"] = "quickstart.SMSCjfLogicBase";
})(quickstart || (quickstart = {}));
