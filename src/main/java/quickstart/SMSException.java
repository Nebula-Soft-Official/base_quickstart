package quickstart;

/******************************************************************************
 * SMSException
 * 
 * ソリューション名 : SMS
 * システム名       : 販売管理ソリューション
 * サブシステム名   : システム共通
 * プログラム名     : 例外部品
 * 担当者           : 販売管理WG
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要                         
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2004/12/20 | 販売管理WG        | 新規作成
 * +-------+------------+-------------------+----------------------------------
 * | 1.01  | 2007/05/29 | 富士通)小渡       | printStackTrace実行時に保持しているメッセージを表示するように
 * |       |            |                   | getMessageメソッドをオーバライド
 * +-------+------------+-------------------+----------------------------------
 * 
 * All Rights Reserved. Copyright (C) Fujitsu Limited, 2004 - 2005.
 ******************************************************************************/


/**
 * <PRE>
 * 異常例外を通知する上位クラスです。<br>
 * </PRE> 
 * @author  販売管理WG
 */
public class SMSException extends Exception {

	/** メッセージ **/
	private String message;

	// 例外保持領域
	private String messageCode;
	private String[] messageDetail;

	/** 原因例外 **/
	private Throwable rootCause;
	
	/**
	 * コンストラクタです。<br>
	 * @param String messageCode
	 * @param String[] detail
	 */
	public SMSException(String messageCode, String[] detail) {
		this.messageCode = messageCode;
		this.messageDetail = detail;
	}

	/**
	 * コンストラクタです。<br>
	 * @param String messageCode
	 */
	public SMSException(String messageCode) {
		this.messageCode = messageCode;
		this.messageDetail = null;
	}

	/**
	 * コンストラクタです。<br>
	 */
	public SMSException() {
	}

	/**
	 * コンストラクタです。<br>
	 */
	public SMSException(Throwable ex) {
		this.rootCause = ex;
	}

	/**
	 * メッセージコードを取得します。<br>
	 * @return String メッセージコード
	 */
	public String getMessageCode(){
		return this.messageCode;
	}

	/**
	 * メッセージ補足（置換パラメタ）を取得します。<br>
	 * @return String メッセージ補足
	 */
	public String[] getMessageDetail(){
		return this.messageDetail;
	}

// 2007/05/29 Add start
	/**
	 * メッセージを取得します。
	 * ・メッセージコードがセット
	 *  ・メッセージ置換文字列がセット：SMSMessageMgr#getMessage(String, String[])を実行
	 *  ・メッセージ置換文字列がnull　：SMSMessageMgr#getMessage(String)を実行
	 * ・メッセージコードがnull
	 *  ・super#getMessageを実行
	 * 
	 * @return String メッセージ
	 */
	public String getMessage() {
		//メッセージコード存在チェック
		if (messageCode != null && messageCode.length() > 0) {

			//メッセージ補足(置換パラメタ)存在チェック
			if (messageDetail != null && messageDetail.length > 0) {
				//メッセージコード、メッセージ補足(置換パラメタ)を使って、メッセージ文字列を取得
				return SMSMessageMgr.getMessage(messageCode, messageDetail);
			} else {
				//メッセージコードを使ってメッセージ文字列を取得
				return SMSMessageMgr.getMessage(messageCode);
			}

		//メッセージコードがセットされていない
		} else {
			return super.getMessage();
		}
	}
// 2007/05/29 Add end

}
