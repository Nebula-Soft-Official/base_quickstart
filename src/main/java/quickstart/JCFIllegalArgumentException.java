package quickstart;
public class JCFIllegalArgumentException extends JCFException
{

    public JCFIllegalArgumentException()
    {
    }

    public JCFIllegalArgumentException(String message)
    {
        super(message);
    }

    public JCFIllegalArgumentException(String message, Throwable cause)
    {
        super(message, cause);
    }

    public static final String CLASS_VERSION = "V01L01";
    public static final String COPYRIGHT = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";
    public static final String FUJITSU_CONFIDENTIAL = "FUJITSU CONFIDENTIAL";
    private static final String CLASS_NAME = "JCFIllegalArgumentException";
}