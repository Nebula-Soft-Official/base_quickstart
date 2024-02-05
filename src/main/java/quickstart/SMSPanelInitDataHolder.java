package quickstart;

//Decompiled by Jad v1.5.8g. Copyright 2001 Pavel Kouznetsov.
//Jad home page: http://www.kpdus.com/jad.html
//Decompiler options: packimports(3) 
//Source File Name:   SMSPanelInitDataHolder.java



import java.util.ArrayList;
import java.util.HashMap;

//Referenced classes of package com.fujitsu.sms.sol.sys.cjf.logic:
//         SMSScreenInfo

public class SMSPanelInitDataHolder
{

 private SMSPanelInitDataHolder()
 {
     closeFlg = false;
     searchFlg = false;
     data = new HashMap();
 }

 public static SMSPanelInitDataHolder getInstance()
 {
     if(ins == null)
         ins = new SMSPanelInitDataHolder();
     return ins;
 }

 public void setData(String key, Object obj)
 {
     data.put(key, obj);
 }

 public Object getData(String key)
 {
     return data.get(key);
 }

 public void setValue(String str)
 {
     value = str;
 }

 public String getValue()
 {
     return value;
 }

 public void setSearchID(String str)
 {
     searchID = str;
 }

 public String getSearchID()
 {
     return searchID;
 }

 public void setScreenInfo(SMSScreenInfo sci)
 {
     screenInfo = sci;
 }

 public SMSScreenInfo getScreenInfo()
 {
     return screenInfo;
 }

 public void setCloseButton(boolean closeFlg)
 {
     this.closeFlg = closeFlg;
 }

 public boolean getCloseButton()
 {
     return closeFlg;
 }

 public void setSearchFlg(boolean searchFlg)
 {
     this.searchFlg = searchFlg;
 }

 public boolean isSearchFlg()
 {
     return searchFlg;
 }

 public void setErrorMessage(String errorMessage)
 {
     this.errorMessage = errorMessage;
 }

 public String getErrorMessage()
 {
     return errorMessage;
 }

 public static final String RESULT_DATA = "DLG_DATA";
 public static final String KEY_PANEL_DATA = "PANEL_DATA";
 public static final String KEY_SPREAD_EVENT_POS = "SPREAD_EVENT_POS";
 private static SMSPanelInitDataHolder ins;
 private HashMap data;
 private String searchID;
 private String value;
 private String errorMessage;
 private boolean closeFlg;
 private boolean searchFlg;
 private SMSScreenInfo screenInfo;
 private ArrayList searchResultLst;
}
