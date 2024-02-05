package quickstart;


//Referenced classes of package com.fujitsu.jcf.ctrl:
//         JCFException

public class JCFSecurityException extends JCFException
{

 public JCFSecurityException()
 {
 }

 public JCFSecurityException(String message)
 {
     super(message);
 }

 public JCFSecurityException(String message, Throwable cause)
 {
     super(message, cause);
 }

 public static final String CLASS_VERSION = "V01L01";
 public static final String COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
 public static final String FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
 private static final String CLASS_NAME = "JCFSecurityException";
}
