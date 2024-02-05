package quickstart;

//Decompiled by Jad v1.5.8g. Copyright 2001 Pavel Kouznetsov.
//Jad home page: http://www.kpdus.com/jad.html
//Decompiler options: packimports(3) 
//Source File Name:   SMSRuntimeException.java





public class SMSRuntimeException extends RuntimeException
{

 public SMSRuntimeException(String message)
 {
     
 }

 public SMSRuntimeException(Throwable th)
 {
   
 }

 public SMSRuntimeException(String message, Throwable th)
 {
    
 }

 public Throwable getException()
 {
     return th;
 }

 public void printStackTrace()
 {
 }

 public void printStackTrace(Object ps)
 {
     
 }



 public String getCdError()
 {
     return cdError;
 }

 public void setCdError(String cdError)
 {
     this.cdError = cdError;
 }

 private Throwable th;
 private String cdError;
}
