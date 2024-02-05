package quickstart;

import java.io.Serializable;

public abstract class SMSLoginInfo
    implements Serializable
{

    public SMSLoginInfo()
    {
        kaishaCode = "";
        kaishaName = "";
        bushoCode = "";
        bushoName = "";
        userId = "";
        userName = "";
    }

    public String getKaishaCode()
    {
        return kaishaCode;
    }

    public String getKaishaName()
    {
        return kaishaName;
    }

    public String getBushoCode()
    {
        return bushoCode;
    }

    public String getBushoName()
    {
        return bushoName;
    }

    public String getUserId()
    {
        return userId;
    }

    public String getUserName()
    {
        return userName;
    }

    public void setKaishaCode(String kaishaCode)
    {
        this.kaishaCode = kaishaCode;
    }

    public void setKaishaName(String kaishaName)
    {
        this.kaishaName = kaishaName;
    }

    public void setBushoCode(String bushoCode)
    {
        this.bushoCode = bushoCode;
    }

    public void setBushoName(String bushoName)
    {
        this.bushoName = bushoName;
    }

    public void setUserId(String userId)
    {
        this.userId = userId;
    }

    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    private String kaishaCode;
    private String kaishaName;
    private String bushoCode;
    private String bushoName;
    private String userId;
    private String userName;
}
