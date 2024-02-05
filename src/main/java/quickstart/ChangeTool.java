package quickstart;

import java.util.HashMap;

/**
 * This class is used within the webapp/index.html file.
 */
public class ChangeTool {
	private static final String ID_GAMEN = "YSDBSSF412S";
	private static final Object RESULT_KEY = null;

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

	private HashMap callEJB(JCFContext context, Object object, String string, String string2, HashMap inData) {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}

}
