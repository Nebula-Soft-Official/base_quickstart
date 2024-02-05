package quickstart;

//Decompiled by Jad v1.5.8g. Copyright 2001 Pavel Kouznetsov.
//Jad home page: http://www.kpdus.com/jad.html
//Decompiler options: packimports(3) 
//Source File Name:   SMSAppException.java




//Referenced classes of package com.fujitsu.sms.sol.sys:
//         SMSException

public class SMSAppException extends SMSException
{

 public SMSAppException(String messageCode, String detail[])
 {
     super(messageCode, detail);
     cdErrorKoumoku = "";
     qtErrorRecordPosition = "";
     nmErrorColumn = "";
     fgPopup = true;
 }

 public SMSAppException(String messageCode)
 {
     super(messageCode);
     cdErrorKoumoku = "";
     qtErrorRecordPosition = "";
     nmErrorColumn = "";
     fgPopup =true;
 }

 public String getCdErrorKoumoku()
 {
     return cdErrorKoumoku;
 }

 public void setCdErrorKoumoku(String cdErrorKoumoku)
 {
     this.cdErrorKoumoku = cdErrorKoumoku;
 }

 public String getNmErrorColumn()
 {
     return nmErrorColumn;
 }

 public String getQtErrorRecordPosition()
 {
     return qtErrorRecordPosition;
 }

 public void setNmErrorColumn(String nmErrorColumn)
 {
     this.nmErrorColumn = nmErrorColumn;
 }

 public void setQtErrorRecordPosition(String qtErrorRecordPosition)
 {
     this.qtErrorRecordPosition = qtErrorRecordPosition;
 }

 public Boolean getFgPopup()
 {
     return fgPopup;
 }

 public void setFgPopup(Boolean fgPopup)
 {
     this.fgPopup = fgPopup;
 }

 private String cdErrorKoumoku;
 private String qtErrorRecordPosition;
 private String nmErrorColumn;
 private Boolean fgPopup;
}

