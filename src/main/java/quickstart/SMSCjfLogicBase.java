package quickstart;


/*
 * 作成日:2005/07/19
 *
 */





import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;



/**
 * <PRE>
 * 画面ロジッククラスの基底クラスです。ロジッククラス共通の処理を提供します。<BR>
 * 画面ロジッククラスはこのクラスを必ず実装してください。<BR>
 * </PRE>
 * @author 富士通)utsunomiya
 * @version
 */
public abstract class SMSCjfLogicBase {

	//フレームID
	public static final String SUB_HEADER = "FLM_SUB_HEAD";
	public static final String SUB_MAIN = "FLM_SUB_BODY";
	public static final String SUB_FOOTER = "FLM_SUB_FOOT";

	public static final String MENU_MANAGER = "sms_menu_manager";
	public static final String MENU_AUTH_MANAGER = "sms_menu_auth_manager";

	/**	次レコードボタン itemID */
	public static final String ITEM_PAGE_FORWARD = "page_forward";
	/**	前レコードボタン itemID */
	public static final String ITEM_PAGE_REVERSE = "page_reverse";
	/**	頁遷移ボタン itemID */
	public static final String ITEM_PAGE_JUMP = "page_jump";

	/**	表示開始レコード itemID */
	public static final String ITEM_FIRST_RECORD = "first_record";
	/**	表示終了レコード itemID */
	public static final String ITEM_LAST_RECORD = "last_record";
	/**	合計レコード数 itemID */
	public static final String ITEM_TOTAL_RECORD = "total_record";

	/**	表示頁 itemID */
	public static final String ITEM_CURRENT_PAGE = "current_page";
	/**	頁数 itemID */
	public static final String ITEM_TOTAL_PAGE = "total_page";

	/** CSVダウンロードサーブレット */
	private static final String SERVLET_NAME_DW_LOCAL = "/SMSDWServlet?uji.verb=downloadLocal";
	/** PDFダウンロードサーブレット */
	private static final String SERVLET_NAME_DW_REMOTE = "/SMSDWServlet?uji.verb=downloadRemote";
	/** ダウンロードファイルタイプ ファイルがAPサーバ上 */
	protected static final int DW_LOCAL = 0;
	/** ダウンロードファイルタイプ ファイルがAPサーバではない */
	protected static final int DW_REMOTE = 1;
// 2007/08/14 Add start
	/** リクエストパラメータ区切り文字 */
	protected static final String PARAM_DELIM = "&";

// 2007/08/14 Add end

	/** ユースケースID　共有データ領域の値を取得、設定する際に利用します*/
	protected String useCaseID = "";

	private static final String CONTEXT_ROOT_KEY = "contextRoot";
	private static final String PROTCOL = "http://";
	/** ダウンロードサーブレット */
	private static final String SERVLET_NAME_DW = "/SMSDWServlet?uji.verb=download";

	/** 共通アダプタ名 */
	private static final String ADAPTER_NAME = "SVADAPTER";
	/** ファンクションID */
	private static final String ADAPTER_FUNCTION_ID = "EXECUTE";
	/** エラースクリーンID */
	private static final String ERROR_SCREEN_ID = "ERROR";
	/** エラーアダプタ名 */
	private static final String ERROR_ADAPTER_NAME = "EVADAPTER";
	/** サブエラーアダプタ名 */
	private static final String ERROR_SUB_ADAPTER_NAME = "EVSUBADAPTER";
	/** エラーファンクションID */
	private static final String ERROR_FUNCTION_ID = "ERROR";
	/** サブエラーファンクションID */
	private static final String ERROR_SUB_FUNCTION_ID = "ERRORSUB";

	/** 汎用検索ID  */
    private static final String SEARCH_ID = "searchID";
	/** 検索結果キー */
    private static final String RESULT_KEY = "resultList";

	/** メニューサブシステムID */
	private String MENU_SUBSYSTEM_ID = "YCSCMNF030M";
	/** サブメニュー識別フラグ */
	private String FG_SUB_MENU = "fgSubMenu";

	/** 基盤システム起動チェック用キー */
	private static final String FG_INFRA = "fgInfra";

	/** システムで妥当される日付プロパティファイルキー */
	public static final String PARAM_VALID_PROP = "SMSValidDate";

	/** システムで妥当される日付開始キー */
	public static final String PARAM_VALID_FROM = "fromDate";

	/** システムで妥当される日付終了キー */
	public static final String PARAM_VALID_TO = "toDate";

	//2006/09/14 add
    /** CBS名 */
    private static final String LOGIN_CBS = SMSClientInfo.getLoginCBSName();
    /** verb（ログアウト）*/
    private static final String VERB_LOGOUT = "logout";
	/** 端末区分用キー */
	private static final String ST_TANMATSU = "stTammatsu";
	/** 削除フラグ（ログイン管理テーブル）用キー */
	private static final String FG_SAKUJO_LOGIN_KANRI = "fgSakujoLoginKanri";
	//2006/09/14 add


	/** 
	 * コンストラクタ <BR>
	 */
	public SMSCjfLogicBase() {
		setUseCaseID();
	}

	/**
	 * ユースケースIDをセットします。<BR>
	 * 派生先では
	 * 以下の用に実装してください。<BR>
	 * <pre>
	 * 	protected void setUseCaseID() {
	 *  	super.useCaseID = USECASE; 
	 *  }
	 * </pre>
	 */
	protected abstract void setUseCaseID();

	/**
	 * Method callEJB. EJB呼び出しを行います。<BR>
	 * 実行するCBSHandlerメソッドの結果を返します。<BR>
	 * @param context CJFのコンテキスト
	 * @param event イベントクラス
	 * @param cbsName 呼び出したいCBSのEJBアプリケーション名
	 * @param cbsVerb 呼び出したいCBSに渡すverb
	 * @param data (HashMap)CBSに渡すデータ
	 * @return HashMap EJB呼び出し結果データ(警告、エラー時はnull)
	 * @throws Throwable
	 * @see com.fujitsu.sms.sol.sys.SMSHashKeyConst
	 */
	protected HashMap callEJB(JCFContext context, JCFEvent event, String cbsName, String cbsVerb, HashMap data) throws Throwable {

		return callEJB(context, event, ADAPTER_FUNCTION_ID, cbsName, cbsVerb, data);

	}

	/**
	 * Method callEJB. ファンクションIDを指定してアダプタを呼び出し<BR>
	 * 					EJB呼び出しを行います。<BR>
	 * @param context CJFのコンテキスト
	 * @param event イベントクラス
	 * @param functionID 呼び出したいアダプタのファンクションID
	 * @param cbsName 呼び出したいCBSのEJBアプリケーション名
	 * @param cbsVerb 呼び出したいCBSに渡すverb
	 * @param data CBSに渡すデータ
	 * @return HashMap EJB呼び出し結果データ
	 * @throws Throwable
	 */
	protected HashMap callEJB(JCFContext context, JCFEvent event, String functionID, String cbsName, String cbsVerb, HashMap data) throws Throwable {

		//******* サーバー通信処理 **********************************************
		//論理デバイスオブジェクトの生成
		JCFLogicalDevice dvSV01 = context.getLogicalDevice(ADAPTER_NAME);

		//Servletに送信するパラメータ作成
		JCFAdapterInParam inParam = dvSV01.createAdapterInParam(functionID, false);

		//データビーンとverbをパラメータにset
		HashMap paramMap = new HashMap();

		paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_NAME, cbsName);
		paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_VERB, cbsVerb);
		paramMap.put(SMSHashKeyConst.PARAM_KEY_DATA, data);

//2014/01/24 システム統合開発プロジェクト Add Start
		if(event != null){
			SMSCLLog.debug("SMSCjfLogicBase：SubSystemID:"+event.getSubsystemID());
			paramMap.put(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, event.getSubsystemID());
		}else{
			SMSCLLog.debug("SMSCjfLogicBase：SubSystemID:null（強制）");
			paramMap.put(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, null);
		}
//2014/01/24 システム統合開発プロジェクト Add End
		
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl)getLoginInfo(context);
		//プログラムIDをセットする(loginInfoがnullなのはログイン時のみ)
		if(loginInfo!=null) {
			loginInfo.setCdProgram(useCaseID.substring(0,10));
		} else {
// 2006/11/27 Add start
			loginInfo = new SMSLoginInfoImpl();
// 2006/11/27 Add end
		}
		paramMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);

		inParam.setCommunicationData(paramMap);

		//Servletにデータを送信して，結果を受け取る。

		JCFAdapterOutParam outParam = null;

		try {
			outParam = dvSV01.callSync(functionID, inParam);
		} finally {
//2007/04/24 Mod start
/*
			// ファイルアップロード用ファイルデータのclose処理
			HashMap fileUploadMap = (HashMap) data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);
			SMSCLLog.debug("ファイルアップロード用ファイルデータ：" + ((fileUploadMap != null) ? "有": "無"));
			if (fileUploadMap != null) {
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 start");
				MimeSource fileData = (MimeSource) fileUploadMap.get(SMSHashKeyConst.F_U_FILELIST);
				fileData.getInputStream().close();
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 end");
			}
*/
//複数ファイル(HashMap配列)対応追加
			// ファイルアップロード用ファイルデータのclose処理
			//ファイルオブジェクト取得
			Object obj = data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);

			//ファイルデータが存在するか確認
			if (obj != null) {
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 start");
				//1ファイル対応
				if (obj instanceof HashMap) {
					//HashMapに変換
					HashMap fileUploadMap = (HashMap)obj;

					SMSCLLog.debug("ファイル数：1");

					//MimeSourceを取得
					MimeSource fileData = (MimeSource) fileUploadMap.get(SMSHashKeyConst.F_U_FILELIST);
					if (fileData != null) {
						fileData.getInputStream().close();
						SMSCLLog.debug("ファイルアップロード用ファイルデータのclose処理実行");
					}
				//複数ファイル対応
				} else if (obj instanceof HashMap[]) {
					//HashMap配列に変換
					HashMap[] fileUploadMap = (HashMap[])obj;

					SMSCLLog.debug("ファイル数：" + fileUploadMap.length);

					//配列分だけファイルclose処理を実行
					for (int i = 0; i < fileUploadMap.length; i++) {
						//MimeSourceを取得
						MimeSource fileData = (MimeSource) fileUploadMap[i].get(SMSHashKeyConst.F_U_FILELIST);
						if (fileData != null) {
							fileData.getInputStream().close();
							SMSCLLog.debug("ファイルアップロード用ファイルデータのclose処理実行(" + i + "回目)");
						}
					}
				} else {
					//あり得ない処理
					//throw new SMSRuntimeException("想定していないオブジェクトがセットされています");
					SMSCLLog.debug("想定していないオブジェクトがセットされています");
				}
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 end");
			} else {
				SMSCLLog.debug("ファイルアップロード用ファイルデータがnullの為、何もしない");
			}

//2007/04/24 Mod end
		}
		
		//エラーチェック
		if (outParam.isExceptionThrown()) {
			Exception e = outParam.getException();
			e.printStackTrace(System.out);
			throw e;
			//			callErrorAdapter(context,e);
		}
		//エラーと警告の取り扱い
		HashMap rtn = new HashMap();
		try {
			rtn = checkRtnHash(context, outParam);
			//共通情報が戻ってきたらアプリケーション領域に再セット
			SMSLoginInfoImpl outLoginInfo = (SMSLoginInfoImpl) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_COMMON);
			if (outLoginInfo != null) {
				setLoginInfo(context, outLoginInfo);
			}

		} catch (Throwable th) {
			StringBuffer buf = new StringBuffer();
			buf.append(th.toString() + "\n");
//			 StackTraceElement[] elm = th.getStackTrace();
//			for (int i = 0; i < elm.length; i++) {
//				buf.append(elm[i].toString() + "\n");
//			}

			if( th instanceof SMSRuntimeException){
				String cdError = ((SMSRuntimeException)th).getCdError();
				//異常番号が存在したら出力
				if(cdError != null && !cdError.equals("")){
					SMSCLLog.error("異常番号:" + cdError);
				}
			}

			Throwable cause = th.getCause();
			if (cause != null) {
				buf.append("cause:" + cause.toString() + "\n");
//				StackTraceElement[] causeElm = cause.getStackTrace();
//				for (int i = 0; i < causeElm.length; i++) {
//					buf.append(causeElm[i].toString() + "\n");
//				}
			}
			SMSCLLog.error(buf.toString());
			//			callErrorAdapter(context,th);
			throw th;
		}
		return rtn;
	}

	/**
	 * ファイルダウンロードを行います。<BR>
	 * @param context CJFのコンテキスト
	 * @param fileLocation ダウンロードするファイルの所在
	 * @throws Throwable
	 */
	protected void downloadFile(JCFContext context, int fileLocation) throws Throwable{

		//Adapterクラスに実装すべきか？　新山
		SMSCLLog.trace("--------LogicBase#downloadFile() start");

		BaseContainer applet = JCFContext.getBaseContainer();
		String serverName = applet.getCodeBase().getHost();
		String contextRoot = applet.getParameter(CONTEXT_ROOT_KEY);

		String servletName = SERVLET_NAME_DW;
		switch(fileLocation){
			case(DW_REMOTE):
				//PDFファイルダウンロード
				servletName = SERVLET_NAME_DW_REMOTE;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
				break;
			
			case(DW_LOCAL):
				//CSVファイルダウンロード
				servletName = SERVLET_NAME_DW_LOCAL;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
				break;
				
			default:
				//ありえない場合
				//ログに出力してPDFダウンロードのverbをセット
				SMSCLLog.debug("SMSCjfLogicBase#downloadFile() 未定義のファイルタイプ.fileType = " + fileLocation);
				servletName = SERVLET_NAME_DW_LOCAL;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
		}
		
// 2007/08/14 Mod start
//		URL url = new URL(PROTCOL + serverName + contextRoot + servletName);
		String timestamp = SMSDateStringUtil.getTimeStamp();
		String userid = ((SMSLoginInfoImpl) getLoginInfo(context)).getUserId();
		URL url = new URL(PROTCOL + serverName + contextRoot + servletName + PARAM_DELIM + userid + timestamp);

// 2007/08/14 Mod end

//2014/01/24 システム統合開発プロジェクト Mod Start
//DWH(window1)、電子帳票(window2)と重複しないように⇒window3と修正
//		context.showDocument(url, "window1");
		context.showDocument(url, "window3");
//2014/01/24 システム統合開発プロジェクト Mod End

	}

	/**
	 * Method 共有データを取得します。<BR>
	 * @param context CJFのコンテキスト
	 * @param key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
	 * @return Object 共有データから取得する値
	 */
	protected Object getUserData(JCFContext context, Object key) {

		// 共有データ領域からデータ取得
		Object obj = context.getUserData(useCaseID + "_" + key);
		return obj;
	}

	/**
	 * Method 汎用検索等で他ユースケースの共有データを取得するためユースケースを指定して共有データを取得します。<BR>
	 * @param context CJFのコンテキスト
	 * @param usecaseID     取得したい共有データのユースケースID
	 * @param key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
	 * @return Object 共有データから取得する値
	 */
	protected Object getUserData(JCFContext context, String usecaseID, Object key) {

		// 共有データ領域からデータ取得
		Object obj = context.getUserData(usecaseID + "_" + key);
		return obj;
	}

	/**
	 * Method 共有データを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
	 * @param key     共有データに設定する値
	 */
	protected void putUserData(JCFContext context, Object key, Object value) {

		// 共有データ領域に値を設定
		context.putUserData(useCaseID + "_" + key, value);
	}

	/**
	 * Method エラー画面遷移等でユースケースを指定して、他ユースケースの共有データを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param usecaseID     設定したい共有データのユースケースID
	 * @param key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
	 * @param value     共有データに設定する値
	 */
	protected void putUserData(JCFContext context, String usecaseID, Object key, Object value) {

		// 共有データ領域に値を設定
		context.putUserData(usecaseID + "_" + key, value);
	}

	/**
	 * Method 共有データを削除します。<BR>
	 * @param context CJFのコンテキスト
	 * @param key     共有データから削除したいキー名（内部的にはユースケースIDが付加される）
	 */
	protected void removeUserData(JCFContext context, Object key) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("ユースケースIDがセットされていません");
		}
		// 共有データ領域の値を削除
		context.removeUserData(useCaseID + "_" + key);
	}

	/**
	 * Method 汎用検索等で他ユースケースの共有データを削除します。<BR>
	 * @param context CJFのコンテキスト
	 * @param usecaseID     削除したい共有データのユースケースID
	 * @param key     共有データから削除する値のキー名（内部的にはユースケースIDが付加される）
	 */
	protected void removeUserData(JCFContext context, String usecaseID, Object key) throws Exception {

		if (useCaseID.equals("")) {
			throw new Exception("ユースケースIDがセットされていません");
		}
		// 共有データ領域の値を削除
		context.removeUserData(usecaseID + "_" + key);
	}

	/**
	 * Method ユースケース内のすべての共有データを削除します。<BR>
	 * @param context CJFのコンテキスト
	 */
	protected void removeUserData(JCFContext context) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("ユースケースIDがセットされていません");
		}
		//共有データのキーセットを取得		
		Set dataSet = (Set) context.userDataKeySet();

		Object[] keys = dataSet.toArray();

		for (int i=0; i<keys.length;i++) {
			String key = (String) keys[i];
			//同ユースケースなら
			if (key.startsWith(useCaseID)) {
				// 共有データ領域の値を削除
				context.removeUserData(key);
			}
		}

	}

	/**
	 * Method 汎用検索等で他ユースケース内のすべての共有データを削除します。<BR>
	 * @param context CJFのコンテキスト
	 */
	protected void removeUserData(JCFContext context, String usecaseID) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("ユースケースIDがセットされていません");
		}
		//共有データのキーセットを取得		
		Set dataSet = (Set) context.userDataKeySet();
		
		Object[] keys = dataSet.toArray();

		for (int i=0; i<keys.length;i++) {
			String key = (String) keys[i];
			//同ユースケースなら
			if (key.startsWith(usecaseID)) {
				// 共有データ領域の値を削除
				context.removeUserData(key);
			}
		}
	}

	/**
	 * Method ログイン情報を取得します。<BR>
	 * @param context CJFのコンテキスト
	 * @return SMSLoginInfo ログイン情報
	 */
	protected SMSLoginInfo getLoginInfo(JCFContext context) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfo loginInFo = (SMSLoginInfo) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		return loginInFo;
	}

	/**
	 * Method ログイン情報を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @return SMSLoginInfo ログイン情報
	 */
	private void setLoginInfo(JCFContext context, SMSLoginInfoImpl loginInfo) {

		//アプリケーションデータ領域へデータ設定
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * 
	 * @param context CJFのコンテキスト
	 */
	//protected void setReturnInfo( JCFReturnInfo returnInfo ) {
	//returnInfo = returnInfo;
	//}

	/**
	 * 
	 * @return SMSMenuAuthorityManager 権限情報
	 */
	//protected JCFReturnInfo getReturnInfo() {

	//if( returnInfo == null  ) {
	//return null;
	//}

	//return returnInfo;
	//}

	/**
	 * Method getFileDialog.現在使用してないメソッド！！
	 * @param title
	 * @return FileDialog
	 */
	protected FileDialog getFileDialog(String title) {
		//アプレットオブジェクトを取得		
		BaseContainer container = JCFContext.getBaseContainer();
		//GraphicsConfigurationオブジェットを取得
		GraphicsConfiguration gc = container.getGraphicsConfiguration();
		//Frameクラスを生成
		Frame frame = new Frame(gc);

		//ファイル選択ダイアログのインスタンスを生成
		FileDialog fileDialog = new FileDialog(frame, "", FileDialog.LOAD);

		return fileDialog;
	}

	/**
	 * ファイルのパーミッションチェック・サイズチェックを行い、ファイルを読み込みます。<BR>
	 * @param fileName ファイル名
	 * @param sizeChekcFlg ファイルサイズチェックフラグ true:チェックする, false:チェックしない
	 * @return MimeSource 読み込んだファイルのMimeSourceオブジェクト
	 */
	protected MimeSource readFile(String fileName, boolean sizeCheckFlg) throws SMSAppException, FileNotFoundException, AccessControlException {

		FilePermission filePm = new FilePermission(fileName, "read");

		AccessController.checkPermission(filePm);

		SMSFileUtil fileUtil = new SMSFileUtil();

		//ファイルサイズチェック
		if (sizeCheckFlg) {
			long size = fileUtil.getFileSize(fileName);

			String strMax = SMSClientInfo.getFileUploadMaxSize();
			long max = Long.parseLong(strMax);
			if (size > max) {
				SMSCLLog.trace("SMSCjfLogicBase#readFile() ファイルサイズチェックによるエラー");
				throw new SMSAppException(SMSMessageConst.YCSCMNMCW078,new String[]{strMax + "バイト"});
			}
		}

		// MimeSourceオブジェクトを作成
		BufferedInputStream bis = null;
		MimeSource ms = null;

		//ファイル読み込み
		bis = new BufferedInputStream(new FileInputStream(fileName));
		ms = new MimeSource(bis, fileName, 100000);

		return ms;
	}

	/**
	 * 例外と警告が発生した場合のメッセージセットを行います。<BR>
	 * @param context CJFのコンテキスト
	 * @param outParam 編集対象アダプタアウトパラメタ
	 * @return HashMap 編集後ハッシュマップ
	 */
	private HashMap checkRtnHash(JCFContext context, JCFAdapterOutParam outParam) throws Throwable {
		//エラーと警告の確認
		String errFlg = (String) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG);

		SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：エラーフラグ："+errFlg);
		
		if (errFlg.equals(SMSHashKeyConst.IS_WARNING)) {
			
			String wMsgID = (String) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_MSG_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：wMsgID："+wMsgID);	
			
			String[] wMsgContents = (String[]) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_MSG_PARAM_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：wMsgContents："+wMsgContents);

			Boolean wMsgPopup = (Boolean) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_POPUP_PARAM_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：wMsgPopup："+wMsgPopup);

/* 2014/01/24 システム統合開発プロジェクト コメントアウト
            //（補足）サブ画面ではスクリーンデータを取得できないため、ここでは呼び出せない
			JCFScreenData screenData = context.getCurrentScreenData();
			//フッタ部のパネルデータを取得
			JCFPanelData footerPanelData = screenData.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);			
			JCFItemData item = (JCFItemData) footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE);
*/

			JCFMessageOnWindow msgUtil = context.getMessageUtil();

			
//2014/01/24 システム統合開発プロジェクト Add Start

			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：警告メッセージID："+wMsgID);	
			
			//メニューが利用不可になっていた場合の警告
			if(wMsgID.equals(SMSMessageConst.SMSCMNMCE067)){
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：利用時間外の警告を表示");
				msgUtil.showMessage(SMSMessageConst.SMSCMNMCE067);
				
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：エラー画面に遷移");
				SMSRuntimeException ex = new SMSRuntimeException(SMSMessageConst.SMSCMNMCE067);
				ex.setCdError(SMSMessageConst.SMSCMNMCE067);
				throw ex;
				
			//その他の警告の場合
			}else{
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash：警告を表示");

				JCFScreenData screenData = context.getCurrentScreenData();

				//フッタ部のパネルデータを取得
				JCFPanelData footerPanelData = screenData.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);				
				JCFItemData item = (JCFItemData) footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE);

				if (wMsgContents != null) {
					//埋め文字あり
					item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
				} else {
					item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
				}
				//ポップアップ表示指定なら
				if (wMsgPopup.booleanValue()) {
					msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
				}
			}

//2014/01/24 システム統合開発プロジェクト Add End
/* 2014/01/24 システム統合開発プロジェクト コメントアウト
			if (wMsgContents != null) {
				//埋め文字あり
				item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
			} else {
				item.setValue(msgUtil.getMessage(wMsgID));
			}
			//ポップアップ表示指定なら
			if (wMsgPopup.booleanValue()) {
				msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
			}
*/

		} else if (errFlg.equals(SMSHashKeyConst.IS_ERROR)) {

			Throwable th = (Throwable) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_THROWABLE);
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
			throw th;

		}

		return outParam.getCommunicationData();
	}

	/**
	 * Method headerToMenu.ヘッダ部分の，メインメニューボタンが押されたときの処理です。<BR>
	 * @param event
	 * @param context
	 * @param returnInfo
	 * @throws Exception
	 */
	public void headerToMenu(JCFEvent event, JCFContext context, JCFReturnInfo returnInfo) throws Exception {
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID);
	}

	/**
	 * エラー画面に遷移します。
	 * @param event
	 * @param context
	 * @param returnInfo
	 * @throws Throwable
	 */
	public void error(JCFEvent event, JCFContext context, JCFReturnInfo returnInfo) throws Throwable {

		SMSCLLog.trace("LogicBase:error() start");
		//エラー画面に遷移するよう，CJFに通知
		returnInfo.setTransitionScreenID(ERROR_SCREEN_ID);
		SMSCLLog.trace("LogicBase:error() end");
	}

	/**
	 * エラー画面に遷移アダプタを呼び出します。
	 * @param context CJFのコンテキスト
	 * @param th 発生したThrowableオブジェクト
	 */
	public void callErrorAdapter(JCFContext context, Throwable th) {

		JCFLogicalDevice ev;
		JCFAdapterInParam inParam;
		try {
			putUserData(
				context,
				SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
				SMSHashKeyConst.PARAM_KEY_THROWABLE,
				th);
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG,"true");
			//2006/09/14 例外時ログアウト処理追加
			try {
// 2006/11/28 Mod start
				if(th instanceof SMSRuntimeException) {
					String cdError = ((SMSRuntimeException)th).getCdError();
					if(cdError != null && !cdError.equals(SMSMessageConst.SMSSYSMCE002)) {
						// タイムアウト発生以外ではログアウト処理を行う
						HashMap inData = new HashMap();
						inData.put(ST_TANMATSU, "01"); // 端末区分（アプレット）
						inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ログアウト処理
						HashMap logoutHash =
							(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);
					}
				} else {
//2014/1/24 システム統合開発プロジェクト（デバッグコメント追加）
					SMSCLLog.debug("SMSCjfLogicBase#callErrorAdapter:RuntimeException以外のエラー発生（ログアウト処理の実行）");
					HashMap inData = new HashMap();
					inData.put(ST_TANMATSU, "01"); // 端末区分（アプレット）
					inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ログアウト処理
					HashMap logoutHash =
						(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);
				}
// 2006/11/28 Mod end
			} catch (Throwable e) {
				e.printStackTrace();
			}
			//2006/09/14 例外時ログアウト処理追加

			ev = context.getLogicalDevice(ERROR_ADAPTER_NAME);

			//Servletに送信するパラメータ作成
			inParam = ev.createAdapterInParam(ERROR_FUNCTION_ID, false);

			//Servletにデータを送信して，結果を受け取る。
			ev.callAsync(ERROR_FUNCTION_ID, inParam);

			th.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * エラー画面に遷移アダプタを呼び出します。サブ画面で使用します。
	 * @param context CJFのコンテキスト
	 * @param th 発生したThrowableオブジェクト
	 */
	protected void callSubErrorAdapter(JCFContext context, Throwable th) throws JCFIllegalArgumentException, JCFIllegalConfigurationException, JCFIllegalStateException, JCFSecurityException {
		
		JCFLogicalDevice ev;
		JCFAdapterInParam inParam;
			
		try {
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_SUB_ERROR, th);
			
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG,"true");

			
			//2006/09/14 例外時ログアウト処理追加
			try {
				HashMap inData = new HashMap();
				inData.put(ST_TANMATSU, "01"); // 端末区分（アプレット）
				inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ログアウト処理
				
				HashMap logoutHash =
					(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);

				
			} catch (Throwable e) {
				//タイムアウト時はここを通る
				e.printStackTrace();
			}
			//2006/09/14 例外時ログアウト処理追加
			
			ev = context.getLogicalDevice(ERROR_SUB_ADAPTER_NAME);
			
			//Servletに送信するパラメータ作成
			inParam = ev.createAdapterInParam(ERROR_SUB_FUNCTION_ID, false);

			//Servletにデータを送信して，結果を受け取る。
			ev.callAsync(ERROR_SUB_FUNCTION_ID, inParam);

			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * ダイアログで例外が発生したか判断します。
	 * 表示前処理で使用します。
	 * @exception Throwable
	 */
	protected void checkDialogException(JCFContext context) throws Throwable{

		Throwable th = (Throwable)getUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_SUB_ERROR);
		if(th != null){
			throw th;
		}
	}

	/**
	 * 選択されているコンボボックスのIDを取得します。<BR>
	 * @param comboBoxData コンボボックスデータアイテム
	 * @return value コンボボックス要素ID 選択されていなかったら""を返します。
	 */
	public String getComboID(JCFComboBoxData comboBoxData) {

		String rtnID = "";
		JCFSelectableElement[] selectElement = comboBoxData.getSelectableElementValue();
		for (int i = 0; i < selectElement.length; i++) {
			if (selectElement[i].isSelected()) {
				rtnID = selectElement[i].getID();
			}
		}
		return rtnID;
	}

	/**
	 * Method プログラムIDを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String プログラムID
	 */
	protected void setCdProgram(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setCdProgram(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 画面IDを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 画面ID
	 */
	protected void setCdGamen(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setCdGamen(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 画面名を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 画面名
	 */
	protected void setNmGamen(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setNmGamen(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 最大検索件数を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 最大検索件数
	 */
	protected void setQtSaidaiKensaku(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiKensaku(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 最大表示件数を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 最大表示件数
	 */
	protected void setQtSaidaiHyouji(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiHyouji(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 表示済み数を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 表示済み数
	 */
	protected void setQtHyoujiZumi(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtHyoujiZumi(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 検索方向を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 検索方向
	 */
	protected void setStKensakuHoukou(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setStKensakuHoukou(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 表示頁を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String 表示頁
	 */
	protected void setQtHyoujiPage(JCFContext context, String value) {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtHyoujiPage(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method 頁情報をクリアします。<BR>
	 * @param context CJFのコンテキスト
	 */
	protected void clearPageInfo(JCFContext context) {
		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiKensaku("");
		loginInfo.setQtSaidaiHyouji("");
		loginInfo.setQtHyoujiZumi("");
		loginInfo.setStKensakuHoukou("");
		loginInfo.setQtKensaku("");
		loginInfo.setQtHyoujiPage("");
		loginInfo.setQtPage("");
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * 汎用検索画面を表示する前の準備処理を行います。<BR>
	 * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
	 * @param event
	 * @param context
	 * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
	 * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
	 * @param kidoKensaku true:起動時検索する false:起動時検索しない
	 * @param literalList リテラル条件に渡すパラメータ
	 * @param returnInfo
	 */
	public void geneSearchPrepare(JCFEvent event, JCFContext context, String[] cons, boolean[] enableCons, boolean kidoKensaku, List literalList) {

		//　イベントからアクションID（検索ID）を取得する。
		String searchID = event.getEventAdditionalInfo().getActionID();
		String ACTION_HEAD = "ACT_";
		//"ACT_"を取り除く
		searchID = searchID.substring(searchID.indexOf(ACTION_HEAD) + ACTION_HEAD.length());
		geneSearchPrepareWithID(event,context,searchID,cons,enableCons,kidoKensaku,literalList);

	}

	/**
	 * 汎用検索画面を表示する前の準備処理を行います。<BR>
	 * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
	 * @param event
	 * @param context
	 * @param searchID 汎用検索キー e.g GeneralSearch001 
	 * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
	 * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
	 * @param kidoKensaku true:起動時検索する false:起動時検索しない
	 * @param literalList リテラル条件に渡すパラメータ
	 * @param returnInfo
	 */
	public void geneSearchPrepareWithID(JCFEvent event, JCFContext context ,String searchID, String[] cons, boolean[] enableCons, boolean kidoKensaku, List literalList) {

		String USECASE = SMSHashKeyConst.PARAM_KEY_GENERALID;
		String SEARCHID = "searchID";
		SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() start");

		String[] jouken = new String[10];

		try {

			//　検索画面の【閉じる】ボタンチェックフラグ
			SMSPanelInitDataHolder.getInstance().setCloseButton(false);

			/**業務画面の項目値を取得して、共通領域に格納する。↓*/
			context.putUserData(SEARCHID, searchID);
			/**業務画面の項目値を取得して、共通領域に格納する。↑*/

			//　表示元の行列情報を保持する。
			JCFEventAdditionalInfo eventAddInfo = event.getEventAdditionalInfo();

			//　業務画面のスプレッド情報を保存する。						
			JCFSpreadAdditionalInfo spreadAddInfo = (JCFSpreadAdditionalInfo) eventAddInfo.getAdditionalInfo();

			if (spreadAddInfo != null) {
				putUserData(context, SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAddInfo.getCellPosition());
			}

			//　検索IDをパネル初期化データオブジェクトに格納する。			
			SMSPanelInitDataHolder.getInstance().setSearchID(searchID);

			//汎用検索で使用する条件を保存する。
			if (cons != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_VALUE, cons);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_VALUE);
			}
			//汎用検索で変更条件を保存する。
			if (enableCons != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_ENABLE_CONS, enableCons);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_ENABLE_CONS);
			}
			//初期表示時検索または非検索の情報を保存する。
			putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERA_SEARCH_START, new Boolean(kidoKensaku));
			//汎用検索でリテラル条件用パラメータを保存する。
			if (literalList != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_LITERAL_CONS);
			}

		} catch (Throwable e) {
			StringBuffer buf = new StringBuffer();

			if (e != null) {
				buf.append(e.toString() + "\n");
			}

			SMSCLLog.error("SMSCjfLogicBase:geneSearchPrepareWithID()…" + buf.toString());
			e.printStackTrace(System.out);
		}

		SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() end");

	}

	/**
	 * 汎用検索画面を表示する前の準備処理を行います。<BR>
	 * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。<BR>
	 * @param event
	 * @param context
	 * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
	 * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
	 * @param kidoKensaku true:起動時検索する false:起動時検索しない
	 * @param returnInfo
	 */
	public void geneSearchComboPrepare(JCFEvent event, JCFContext context, String comboName, List comboCondition) {

		String USECASE = SMSHashKeyConst.PARAM_KEY_GENERALID;
		String SEARCHID = "searchID";
		SMSCLLog.trace("SMSCjfLogicBase:geneSearchComboPrepare() start");

		try {

			//汎用検索で使用する条件を保存する。
			if (comboCondition != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, comboName, comboCondition);
			}

		} catch (Throwable e) {
			StringBuffer buf = new StringBuffer();

			if (e != null) {
				buf.append(e.toString() + "\n");
			}

			SMSCLLog.error("YCSCMNF060SLogic:geneSearchComboPrepare()…" + buf.toString());
			e.printStackTrace(System.out);
		}

		SMSCLLog.trace("YCSCMNF060SLogic:geneSearchComboPrepare() end");

	}

	/**
	 * Method ディレクトリを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String ディレクトリ
	 */
	protected void setStDirectory(JCFContext context, String value) throws SMSRuntimeException {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setStDirectory(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method ファイル名を設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param String ファイル名
	 */
	protected void setNmFile(JCFContext context, String value) throws SMSRuntimeException {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setNmFile(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method ファイルデータを設定します。<BR>
	 * @param context CJFのコンテキスト
	 * @param byte[] ファイルデータ
	 */
	protected void setFile(JCFContext context, byte[] value) throws SMSRuntimeException {

		//アプリケーションデータ領域からデータ取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setFile(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * 頁制御を実行した後に行う部品へのセット処理を行います。<BR>
	 * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
	 * @param context			CJFコンテキストオブジェクト
	 */
	protected void setPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		JCFScreenData current = context.getCurrentScreenData();
		JCFItemData itemForward = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_FORWARD);
		JCFItemData itemReverse = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_REVERSE);
		JCFItemData itemPageJump = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_JUMP);

		JCFFieldLongData itemFirst = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_FIRST_RECORD);
		JCFFieldLongData itemLast = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_LAST_RECORD);
		JCFFieldLongData itemTotal = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_RECORD);

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		//共通情報取得
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) getLoginInfo(context);
		//「次へ」「前へ」の活性非活性処理

		if (loginInfo.getStJiPage() != null){
			if (loginInfo.getStJiPage().booleanValue()) {
				itemForward.setEnabled(true);
			} else {
				itemForward.setEnabled(false);
				itemLast.setEnabled(false);
			}
		}

		if(loginInfo.getStZenPage() != null){
			if (loginInfo.getStZenPage().booleanValue()) {
				itemReverse.setEnabled(true);
			} else {
				itemReverse.setEnabled(false);
			}
		}

		//頁指定入力部品の背景色デフォルト
		itemCurrentPage.setBackground(SMSColor.DEFAULT);

		//頁指定の活性、非活性
		if (loginInfo.getQtPage() != null) {
			try {
				if (Integer.parseInt(loginInfo.getQtPage()) > 1) {
					itemPageJump.setEnabled(true);
					itemCurrentPage.setEnabled(true);
				} else {
					itemPageJump.setEnabled(false);
					itemCurrentPage.setEnabled(false);
				}
			} catch (NumberFormatException e) {
				itemPageJump.setEnabled(false);
				itemCurrentPage.setEnabled(false);
			}
		}

		//件数情報をセット
		int hyoujiZumi;
		int maxHyouji;
		int cnt;
		try {
			hyoujiZumi = Integer.parseInt(loginInfo.getQtHyoujiZumi());
			maxHyouji = Integer.parseInt(loginInfo.getQtSaidaiHyouji());
			cnt = Integer.parseInt(loginInfo.getQtKensaku());
			itemFirst.setValue(SMSPageTranUtil.getHyoujiKaishi(hyoujiZumi, maxHyouji, cnt));
			itemLast.setValue(hyoujiZumi);
			itemTotal.setValue(Long.parseLong(loginInfo.getQtKensaku()));
			itemCurrentPage.setValue(loginInfo.getQtHyoujiPage());
			itemTotalPage.setValue(loginInfo.getQtPage());
		} catch (NumberFormatException e) {
			//初期表示なしで本メソッドを実行した場合と想定。
			itemCurrentPage.setValue(0);
		}


	}

	/**
	 * 頁制御必要な部品の初期化処理を行います。<BR>
	 * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
	 * @param context			CJFコンテキストオブジェクト
	 */
	protected void initPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		JCFScreenData current = context.getCurrentScreenData();
		JCFItemData itemForward = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_FORWARD);
		JCFItemData itemReverse = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_REVERSE);
		JCFItemData itemPageJump = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_JUMP);

		JCFFieldLongData itemFirst = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_FIRST_RECORD);
		JCFFieldLongData itemLast = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_LAST_RECORD);
		JCFFieldLongData itemTotal = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_RECORD);

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		// 「次へ」「前へ」の非活性処理
		itemForward.setEnabled(false);
		itemReverse.setEnabled(false);
		// 「頁指定」の非活性処理
		itemPageJump.setEnabled(false);
		
		// 頁指定入力部品の非活性処理
		itemCurrentPage.setEnabled(false);

		//頁指定入力部品の背景色デフォルト
		itemCurrentPage.setBackground(SMSColor.DEFAULT);

		// 件数情報をセット
		itemFirst.setValue("0");
		itemLast.setValue("0");
		itemTotal.setValue("0");
		itemCurrentPage.setValue("0");
		itemTotalPage.setValue("0");

	}


	/**
	 * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。<BR>
	 * 汎用検索のSQLをそのまま用いるため、コードとの比較条件は'=','LIKE'のいずれかである必要があります。<BR>
	 * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。<BR>
	 * @param context
	 * @param searchID 汎用検索ID
	 * @param columnName 検索対象カラム名 *screen.propetiesのparamNameと対応
	 * @param code 検索対象コード
	 * @param literalList 文字列検索条件バインド値
	 * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
	 * @return 名称	
	 * @exception Throwable callEJB失敗時例外
	 */
	public String getNameByGeneralSearch(JCFContext context, String searchID,
					String columnName,String code,List literalList,String resultName) throws Throwable{
		
		String rtn = "";
		if(searchID == null || "".equals(searchID)){
			return rtn;
		}
		if(code == null || "".equals(code)){
			return rtn;
		}

		HashMap inData = new HashMap();
		HashMap outData = new HashMap();

		//***************** サーバー通信処理 ****************************

		try {
			//汎用検索キー
			inData.put(SEARCH_ID,searchID);				
			//汎用検索画面条件にあたるものをコードのみセット
			inData.put(columnName, code);
			//汎用検索親画面セット条件をセット
			inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			
			rtn = getNameByGeneralSearch(context,inData,resultName);

		} catch (Throwable e) {
			throw e;
		}
		return rtn;
	}

	/**
	 * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。<BR>
	 * 名称特定に複数条件（コードだけでなく）が必要な場合、使用します。<BR>
	 * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。<BR>
	 * @param context
	 * @param searchID 汎用検索ID
	 * @param conditionMap 検索対象カラム名をキー、検索条件を値とするHashMap
	 * @param literalList 文字列検索条件バインド値
	 * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
	 * @return 名称	
	 * @exception Throwable callEJB失敗時例外
	 */
	public String getNameByGeneralSearch(JCFContext context, String searchID,
					HashMap conditionMap,List literalList,String resultName) throws Throwable{
		
		String rtn = "";
		if(searchID == null || "".equals(searchID)){
			return rtn;
		}
		if(conditionMap == null || conditionMap.size()<1){
			return rtn;
		}

		HashMap inData = new HashMap();

		//***************** サーバー通信処理 ****************************

		try {
			//汎用検索キー
			inData.put(SEARCH_ID,searchID);				
			//汎用検索画面条件にあたるものをセット
			Set keySet = conditionMap.keySet();
			Iterator it = keySet.iterator();
			while (it.hasNext()){
				String key = (String)it.next();
				inData.put(key,conditionMap.get(key));
			}

			//汎用検索親画面セット条件をセット
			inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			
			rtn = getNameByGeneralSearch(context,inData,resultName);

		} catch (Throwable e) {
			throw e;
		}
		return rtn;
	}

	/**
	 * 頁遷移する前に行うチェック処理です。<BR>
	 * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
	 * @param context			CJFコンテキストオブジェクト
	 * @return true:指定ページは正常 false:指定ページが最大より大きい、または0,空白
	 */
	protected boolean checkPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		boolean rtn = false;
		JCFScreenData current = context.getCurrentScreenData();

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		long currentPage = itemCurrentPage.getLongValue();
		long totalPage = itemTotalPage.getLongValue();

		//指定ページが最大を超えている　または0
		if(currentPage > totalPage || currentPage == 0){
			//元の頁に戻す
			setPageInfo(context);
			itemCurrentPage.setBackground(SMSColor.WARNING);
			SMSHeaderFooterManager.showInformation(context,SMSMessageConst.SMSCMNMCA104,new String[]{"頁","1",Long.toString(totalPage)});
		}else{
			rtn = true;
		}

		return rtn;
	}

	/**
	 * 汎用検索呼び出しを行います。<BR>
	 * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。<BR>
	 * @param context
	 * @param inData 汎用検索呼び出し条件
	 * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
	 * @return 検索結果
	 */
	private String getNameByGeneralSearch(JCFContext context,HashMap inData,String resultName) throws Throwable {

		String rtn = "";
		HashMap outData = new HashMap();
		//EJB呼び出し
		HashMap data = callEJB(context, null, "SMSSYSCBS", "find", inData);
		outData = (HashMap) data.get(SMSHashKeyConst.PARAM_KEY_DATA);
		//　検索結果の値をマップから取得する。
		HashMap[] map = (HashMap[]) outData.get(RESULT_KEY);

		//検索結果が返っている
		if (map.length == 1) {
			rtn = (String) map[0].get(resultName);
		}
		if (map.length > 1) {
			throw new SMSRuntimeException("レコードが特定できません");
		}
		
		return rtn;
	}

	/**
	* 業務終了します。
	*
	* @param event ＣＪＦイベントオブジェクト
	* @param context ＣＪＦコンテキストオブジェクト
	* @param returnInfo ＣＪＦ復帰情報オブジェクト
	* @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
	*/
	public void exitSystem(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo)
		throws JCFIllegalArgumentException,
		JCFIllegalStateException,
		JCFIllegalConfigurationException{

		SMSCLLog.debug("exitSystem() start");

		//業務終了ボタンの活性状態を取得
		JCFScreenData current = context.getCurrentScreenData();

		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.EXIT_BUTTON);
		
		//業務終了ボタンが非活性の場合、終了
		if(!pushButton.isEnabled()) { 
			return;	
		}
			
		//メッセージの表示
		JCFMessageOnWindow msgUtil = context.getMessageUtil();
		String ret = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC077);
		
		//「いいえ」の場合
		if (ret.equals(JCFMessageOnWindow.BTN_NO)) {
			returnInfo.cancelScreenTransition();
			return;
			
		//「はい」の場合
		} else if (ret.equals(JCFMessageOnWindow.BTN_YES)) {
			//二重起動フラグ削除
			context.removeApplicationData(FG_INFRA);
			context.exit();
			
			// どのメニュー画面に戻るかを判断去るためのキーを初期化
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SCREEN, null);
		}

		SMSCLLog.debug("exitSystem() end");
	}

	/**
	* サブメニューに戻ります。
	*
	* @param event ＣＪＦイベントオブジェクト
	* @param context ＣＪＦコンテキストオブジェクト
	* @param returnInfo ＣＪＦ復帰情報オブジェクト
	* @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
	*/
	public void returnSubMenu(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo) 
		throws JCFIllegalArgumentException,
		JCFIllegalConfigurationException,
		JCFIllegalStateException
		{

		SMSCLLog.debug("returnSubMenu() start");

		//サブメニューボタンの活性状態を取得
		JCFScreenData current = context.getCurrentScreenData();
		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.RETURN_BUTTON);
		
		//業務終了ボタンが非活性の場合、終了
		if(!pushButton.isEnabled()) { 
			return;	
		}
			
		returnInfo.cancelScreenTransition();
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID, false);

		// どのメニュー画面に戻るかを判断去るためのキーを設定
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, "true");

		SMSCLLog.debug("returnSubMenu() end");
	}

	/**
	* メインメニューに戻ります。
	*
	* @param event ＣＪＦイベントオブジェクト
	* @param context ＣＪＦコンテキストオブジェクト
	* @param returnInfo ＣＪＦ復帰情報オブジェクト
	* @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
	*/
	public void returnMainMenu(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo)		
		throws JCFIllegalArgumentException,
		JCFIllegalConfigurationException,
		JCFIllegalStateException{

		SMSCLLog.debug("returnMainMenu() start");
		
		//サブメニューボタンの活性状態を取得
		JCFScreenData current = context.getCurrentScreenData();
		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.MENU_BUTTON);
		
		//業務終了ボタンが非活性の場合、終了
		if(!pushButton.isEnabled()) {
			return;	
		}
		
		returnInfo.cancelScreenTransition();
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID, false);
		
		// どのメインメニュー画面に戻るためのキーを設定
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
			
		SMSCLLog.debug("returnMainMenu() end");
	}

	/**
	* パネルデータ上のアイテムデータの値をアイテムIDをキーとして共有データにコピーします。<br>
	* コピーできるアイテムデータはgetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）<br>
	* アイテムIDが未入力場合はBean名がキーとして使用されます。
	* 共有データのキーにはユースケースIDが付加されます。<br>
	* 既存の共有データに同一キーが存在する場合、値は上書きされます。
	*
	* @param context ＣＪＦコンテキストオブジェクト
	* @param panelData コピー対象のパネルデータ
	* @param usecaseID 共有データのキーに付加されるユースケースID
	*/
	protected void copyPanelToUser(
		JCFContext context,
		JCFPanelData panelData,
		String usecaseID){
				
		SMSCLLog.debug("copyPanelToUser() start");

		//表示しようとしているパネル上にある全てのItemDataを取得。
		ArrayList array = panelData.getAllItemData();
		JCFItemData itemData = null;
		// ボタンの制御開始
		for (int i = 0; i < array.size(); i++) {
			// ItemData
			Object obj = array.get(i);
			// JCFItemDataの場合
			if (obj instanceof JCFItemData) {
				itemData = (JCFItemData) obj;
				String key = itemData.getItemID();
				Object value = itemData.getValue();
				if(key!=null && obj!=null){
					putUserData(context,usecaseID,key,value);
				}
			}
		}

		SMSCLLog.debug("copyPanelToUser() end");

	}

	/**
	* 共有データのキーと一致するアイテムIDのアイテムデータに値をコピーします<br>
	* コピーできるアイテムデータはsetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）<br>
	*
	* @param context ＣＪＦコンテキストオブジェクト
	* @param panelData コピー対象のパネルデータ
	* @param usecaseID 共有データのキーに付加されるユースケースID
	*/
	protected void copyUserToPanel(
		JCFContext context,
		JCFPanelData panelData,
		String usecaseID){
				
		SMSCLLog.debug("copyUserlToPanel() start");

		//表示しようとしているパネル上にある全てのItemDataを取得。
		ArrayList array = panelData.getAllItemData();
		JCFItemData itemData = null;
		// ボタンの制御開始
		for (int i = 0; i < array.size(); i++) {
			// ItemData
			Object obj = array.get(i);
			// JCFItemDataの場合
			if (obj instanceof JCFItemData) {
				itemData = (JCFItemData) obj;
				String key = itemData.getItemID();
				String userValue = (String)getUserData(context,usecaseID,key);
				//共有データにアイテムIDと等しいキーが存在する
				if(userValue!=null){
					itemData.setValue(userValue);
				}
			}
		}

		SMSCLLog.debug("copyUserlToPanel() end");

	}

	/** 
	 * パネルデータの復元
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @param screen_id 復元対象スクリーンID
	 */
	protected void deserialize(JCFContext context,String screen_id) throws Throwable {
		
		//フッタボタン復元
		deserialize(context,screen_id,SMSHeaderFooterManager.FRAME_FOOTER);
		
		//業務パネル復元
		deserialize(context,screen_id,SMSHeaderFooterManager.FRAME_MAIN);
		
		//フラグ削除
		removeUserData(context,(Object)screen_id);
	}
	
	/** 
	 * パネルデータの復元
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @param screen_id 復元対象スクリーンID
	 * @param frame_id 復元対象フレームID
	 */
	protected void deserialize(JCFContext context,String screen_id,String frame_id) throws Throwable {

		HashMap map = (HashMap)getUserData(context,screen_id + "_" + frame_id);
		// 項目データ取得
		JCFScreenData screenData = context.getCurrentScreenData();
		// BODY部のパネルデータを取得
		JCFPanelData panel =  screenData.getPanelData(frame_id);
		
		if ( map != null && panel != null ) {
			
			//パネル内のアイテムを全て取得			
			ArrayList arItems = panel.getAllItemData();
			
			for ( int i = 0; i < arItems.size(); i++ ) {	
			
				JCFItemData item = (JCFItemData)arItems.get(i);	
				
				if ( item.getItemID() != null ) {
					//アイテムの復元
					JCFItemData old = (JCFItemData)map.get(item.getItemID());
					if ( old != null ) {
						item.setDataAndAttributes(old);
					}
				}
			}
			//画面に復元後資源開放する
//2006.11.21 change start
//removeUserData(JCFContext, String)ではなく、removeUserData(JCFContext, Object)を実行するように変更
//			removeUserData(context,screen_id + "_" + frame_id);
			removeUserData(context, (Object)screen_id + "_" + frame_id);
//2006.11.21 change end
		}
		
	}
	
	
	/** 
	 * パネルデータの保存
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @param screen_id 保存対象スクリーンID
	 */
	protected void serialize(JCFContext context,String screen_id) throws Throwable {

		//フラグ保存
		putUserData(context,screen_id, true);

		//フッタボタン保存
		serialize(context,screen_id,SMSHeaderFooterManager.FRAME_FOOTER);
		
		//業務パネル保存
		serialize(context,screen_id,SMSHeaderFooterManager.FRAME_MAIN);

	}
	
	/** 
	 * パネルデータの保存
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @param screen_id 保存対象スクリーンID
	 * @param frame_id 保存対象フレームID
	 */
	protected void serialize(JCFContext context,String screen_id,String frame_id) throws Throwable {

		// 項目データ取得
		JCFScreenData screenData = context.getCurrentScreenData();
		// BODY部のパネルデータを取得
		JCFPanelData panel =  screenData.getPanelData(frame_id);
		
		ArrayList arItems = panel.getAllItemData();
		
		HashMap map = new HashMap();
		
		//パネル内のアイテムを全て取得	
		for ( int i = 0; i < arItems.size(); i++ ) {			
			//アイテムを取得
			JCFItemData item = (JCFItemData)arItems.get(i);	
			//アイテムをアイテムIDをキーに保存
			if ( item.getItemID() != null ) {
				map.put(item.getItemID(), item);
			}
		}
		
		putUserData(context,screen_id + "_" + frame_id, map);
	}
	
	/** 
	 * パネルデータが保存されているか確認します。
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @param screen_id 保存対象スクリーンID
	 * @return true:指定されたスクリーンIDのパネルデータが保存されている false:そうでない場合
	 */
	protected boolean isPanelSerialized(JCFContext context,String screen_id) throws Throwable {

		boolean rtn = false;

		//serializeメソッドで保存されるフラグの存在を確認します。
		Boolean fgPanelSerialized = (Boolean)getUserData(context,(Object)screen_id);
		if(fgPanelSerialized != null && fgPanelSerialized.booleanValue()){
			rtn = true;
		}
		
		return rtn;
	}

	/** 
	 * YUKIFieldFilledDateに入力された値が正当か判断します。
	 * GregorianCalendarクラスで正当性を判定します。
	 * @param date yyyyMMddフォーマットの日付文字列
	 * @return true:正常値 false:異常値
	 */
	protected boolean isValidFilledDate(String date) {

		return isValidFilledDate(true,date);

	}

	/** 
	 * YUKIFieldFilledDateに入力された値が正当か判断します。
	 * GregorianCalendarクラスで正当性を判定します。
	 * @param required true:必須 false:必須ではない
	 * @param date yyyyMMddフォーマットの日付文字列
	 * @return true:正常値 false:異常値
	 */
	protected boolean isValidFilledDate(boolean required,String date) {

		boolean rtn = false;

		//nullならエラー
		if(date == null){
			return rtn;
		}
		//"/"除去
		date = date.replaceAll("/","");
		//6桁なら年月までと判断して"01"追加
		if(date.length()==6){
			date += "01";
		}
		//8桁でなかったら
		if(date.length() != 8){
			return rtn;
		}

		//必須でなく"00000000"ならOK
		if(!required && "00000000".equals(date)){
			return true;
		}
		
		//妥当な日付でなかったらSMSCheckException発生
		SMSDateStringUtil.checkExistDay(date,null,null);

		int fromDate = Integer.parseInt(getValidFromDate());
		int toDate = Integer.parseInt(getValidToDate());

		if(Integer.parseInt(date) >= fromDate &&
		   Integer.parseInt(date) <= toDate){
			rtn = true;
		}
		
		return rtn;
	}

	/** 
	 * システムで妥当とされる日付開始をプロパティから取得します。
	 * @return システムで妥当とされる日付開始
	 */
	protected String getValidFromDate() {

		String value = (String)SMSPropsInfos.getProperty(PARAM_VALID_PROP,PARAM_VALID_FROM);
		if("".equals(value)){
			value = "19510101";
		}
		return value;

	}

	/** 
	 * システムで妥当とされる日付終了をプロパティから取得します。
	 * @return システムで妥当とされる日付終了
	 */
	protected String getValidToDate() {

		String value = (String)SMSPropsInfos.getProperty(PARAM_VALID_PROP,PARAM_VALID_TO);
		if("".equals(value)){
			value = "20501231";
		}
		return value;

	}

	/** 
	 * システムで妥当とされる日付開始、終了をプロパティから取得し、メッセージ用にフォーマットします。
	 * @param  obj 「XX」はYY～ZZの範囲で入力してください。　のXX
	 * @return [0]:システムで妥当とされる日付開始 [1]:システムで妥当とされる日付終了
	 */
	protected String[] getValidDatesMessage(String obj) {

		String[] dates = new String[3];
		
		dates[0] = obj;
		dates[1] = SMSDateStringUtil.conversion(getValidFromDate(),SMSDateStringUtil.YYYYMMDD);
		dates[2] = SMSDateStringUtil.conversion(getValidToDate(),SMSDateStringUtil.YYYYMMDD);

		return dates;

	}

// 2006/12/14 Add start

	/**
	 * システムエラーが発生したか判定します。
	 * @param context ＣＪＦコンテキストオブジェクト
	 * @return true：システムエラーが発生した　false：システムエラーが発生していない
	 */
	protected boolean isErrorOccurs(JCFContext context) {
		
		boolean ret = false;
		
		// アプリケーション領域のエラー情報フラグで判断する
		Object errorFlg = context.getApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
		return ret = (errorFlg != null) ? true : false;
	}

// 2006/12/14 Add end

//	/**
//	* 共有データを引継データにコピーします。引継データのキーからはユースケースIDが削除されます。<br>
//	* 引継データに同一キーが存在する場合、値は上書きされます。
//	*
//	* @param context ＣＪＦコンテキストオブジェクト
//	* @param usecaseID 共有データのキーから削除されるユースケースID
//	*/
//	public void copyUserToSucceed(
//		JCFContext context,
//		String usecaseID){
//				
//		SMSCLLog.debug("copyUserToSucceed() start");
//
//		Set dataSet = context.userDataKeySet();
//
//		if(dataSet!=null){
//			Object[] keys = dataSet.toArray();
//	
//			for (int i=0; i<keys.length;i++) {
//				String key = (String) keys[i];
//				//同ユースケースなら
//				if (key.startsWith(useCaseID)) {
//					key = key.substring(useCaseID.length(),key.length());
//					context.putSucceedData(key,context.getUserData(key));
//				}
//			}
//		}
//
//		SMSCLLog.debug("copyUserToSucceed() end");
//
//	}


}
