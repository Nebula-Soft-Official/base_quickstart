package quickstart;

import java.util.HashMap;

public class Tran {
	private static final Object SHIKAKARIHIN_MEISAI_CBMMSG_LIST = null;
	private static final Object QT_SHIKAKARI_JURYO = null;
	private static final Object IF_TANI = null;

	public void shokika()
			throws Exception {	
				
				//SMSCLLog.trace("YPMSGSF070MLogic:shokika() start");

				try {
					
					if ( showMessage( SMSMessageConst.YPMSGSMCC009, null, true ).equals(JCFMessageOnWindow.BTN_YES) == true ) {
						// ADD 2006.06.28 更新入力後の画面遷移対応
						//キー項目変更チェック
						if ( ! isChkJokenData() ) {
							this.jokenDataChange();
						}
						// 表示データの初期化処理を実行してよろしいですか。
						HashMap []saveData = this.getSaveData();
					//KK-00363-000 2011.06.07 KASHIMURA -START（初期化ボタン押下時の不具合修正）
						String[] saveJuryo = this.getSaveJuryo();
					//KK-00363-000 2011.06.07 KASHIMURA -END
						
						HashMap gyomuMap = new HashMap();
						
						gyomuMap.put(SHIKAKARIHIN_MEISAI_CBMMSG_LIST, saveData);
					//KK-00363-000 2011.06.07 KASHIMURA -START（初期化ボタン押下時の不具合修正）
						gyomuMap.put(QT_SHIKAKARI_JURYO, saveJuryo[0]);
						gyomuMap.put(IF_TANI, saveJuryo[1]);
					//KK-00363-000 2011.06.07 KASHIMURA -END
						
						this.createSpreadData(gyomuMap);
						
			
					}
					
				} catch (Throwable th) {
					//super.callErrorAdapter(getContext(), th);
				}
				
				//SMSCLLog.trace("YPMSGSF070MLogic:shokika() end");

			}

	private Object showMessage(String ypmsgsmcc009, Object object, boolean b) {
		// TODO Auto-generated method stub
		return null;
	}

	private String[] getSaveJuryo() {
		// TODO Auto-generated method stub
		return null;
	}

	private void createSpreadData(HashMap gyomuMap) {
		// TODO Auto-generated method stub
		
	}

	private HashMap[] getSaveData() {
		// TODO Auto-generated method stub
		return null;
	}

	private void jokenDataChange() {
		// TODO Auto-generated method stub
		
	}

	private boolean isChkJokenData() {
		// TODO Auto-generated method stub
		return false;
	}
}
