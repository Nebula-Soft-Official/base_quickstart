package quickstart;

// Decompiled by Jad v1.5.8g. Copyright 2001 Pavel Kouznetsov.
// Jad home page: http://www.kpdus.com/jad.html
// Decompiler options: packimports(3) 
// Source File Name:   JCFException.java




public class JCFException extends Exception
{

    public JCFException()
    {
        cause = null;
    }

    public JCFException(String message)
    {
        super(message);
        cause = null;
    }

    public JCFException(String message, Throwable cause)
    {
        this(message);
        this.cause = cause;
    }

    public Throwable getCause()
    {
        return cause;
    }

    public void printStackTraceWithCause()
    {
//        printStackTrace();
        if(cause != null)
            cause.printStackTrace();
    }

    public void printStackTraceWithCause(Object s)
    {

    }

   
    public String getStackTraceString()
    {
        return getStackTrace(this);
    }

    public String getStackTraceStringOfCause()
    {
        return getStackTrace(cause);
    }

    private String getStackTrace(Throwable th)
    {
        String trace = null;

        return trace;
    }

    public static final String CLASS_VERSION = "V01L20";
    public static final String COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
    public static final String FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
    private static final String CLASS_NAME = "JCFException";
    private Throwable cause;
}
