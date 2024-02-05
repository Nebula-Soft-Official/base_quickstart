package quickstart;


/*
 * �쐬��:2005/07/19
 *
 */





import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;



/**
 * <PRE>
 * ��ʃ��W�b�N�N���X�̊��N���X�ł��B���W�b�N�N���X���ʂ̏�����񋟂��܂��B<BR>
 * ��ʃ��W�b�N�N���X�͂��̃N���X��K���������Ă��������B<BR>
 * </PRE>
 * @author �x�m��)utsunomiya
 * @version
 */
public abstract class SMSCjfLogicBase {

	//�t���[��ID
	public static final String SUB_HEADER = "FLM_SUB_HEAD";
	public static final String SUB_MAIN = "FLM_SUB_BODY";
	public static final String SUB_FOOTER = "FLM_SUB_FOOT";

	public static final String MENU_MANAGER = "sms_menu_manager";
	public static final String MENU_AUTH_MANAGER = "sms_menu_auth_manager";

	/**	�����R�[�h�{�^�� itemID */
	public static final String ITEM_PAGE_FORWARD = "page_forward";
	/**	�O���R�[�h�{�^�� itemID */
	public static final String ITEM_PAGE_REVERSE = "page_reverse";
	/**	�őJ�ڃ{�^�� itemID */
	public static final String ITEM_PAGE_JUMP = "page_jump";

	/**	�\���J�n���R�[�h itemID */
	public static final String ITEM_FIRST_RECORD = "first_record";
	/**	�\���I�����R�[�h itemID */
	public static final String ITEM_LAST_RECORD = "last_record";
	/**	���v���R�[�h�� itemID */
	public static final String ITEM_TOTAL_RECORD = "total_record";

	/**	�\���� itemID */
	public static final String ITEM_CURRENT_PAGE = "current_page";
	/**	�Ő� itemID */
	public static final String ITEM_TOTAL_PAGE = "total_page";

	/** CSV�_�E�����[�h�T�[�u���b�g */
	private static final String SERVLET_NAME_DW_LOCAL = "/SMSDWServlet?uji.verb=downloadLocal";
	/** PDF�_�E�����[�h�T�[�u���b�g */
	private static final String SERVLET_NAME_DW_REMOTE = "/SMSDWServlet?uji.verb=downloadRemote";
	/** �_�E�����[�h�t�@�C���^�C�v �t�@�C����AP�T�[�o�� */
	protected static final int DW_LOCAL = 0;
	/** �_�E�����[�h�t�@�C���^�C�v �t�@�C����AP�T�[�o�ł͂Ȃ� */
	protected static final int DW_REMOTE = 1;
// 2007/08/14 Add start
	/** ���N�G�X�g�p�����[�^��؂蕶�� */
	protected static final String PARAM_DELIM = "&";

// 2007/08/14 Add end

	/** ���[�X�P�[�XID�@���L�f�[�^�̈�̒l���擾�A�ݒ肷��ۂɗ��p���܂�*/
	protected String useCaseID = "";

	private static final String CONTEXT_ROOT_KEY = "contextRoot";
	private static final String PROTCOL = "http://";
	/** �_�E�����[�h�T�[�u���b�g */
	private static final String SERVLET_NAME_DW = "/SMSDWServlet?uji.verb=download";

	/** ���ʃA�_�v�^�� */
	private static final String ADAPTER_NAME = "SVADAPTER";
	/** �t�@���N�V����ID */
	private static final String ADAPTER_FUNCTION_ID = "EXECUTE";
	/** �G���[�X�N���[��ID */
	private static final String ERROR_SCREEN_ID = "ERROR";
	/** �G���[�A�_�v�^�� */
	private static final String ERROR_ADAPTER_NAME = "EVADAPTER";
	/** �T�u�G���[�A�_�v�^�� */
	private static final String ERROR_SUB_ADAPTER_NAME = "EVSUBADAPTER";
	/** �G���[�t�@���N�V����ID */
	private static final String ERROR_FUNCTION_ID = "ERROR";
	/** �T�u�G���[�t�@���N�V����ID */
	private static final String ERROR_SUB_FUNCTION_ID = "ERRORSUB";

	/** �ėp����ID  */
    private static final String SEARCH_ID = "searchID";
	/** �������ʃL�[ */
    private static final String RESULT_KEY = "resultList";

	/** ���j���[�T�u�V�X�e��ID */
	private String MENU_SUBSYSTEM_ID = "YCSCMNF030M";
	/** �T�u���j���[���ʃt���O */
	private String FG_SUB_MENU = "fgSubMenu";

	/** ��ՃV�X�e���N���`�F�b�N�p�L�[ */
	private static final String FG_INFRA = "fgInfra";

	/** �V�X�e���őÓ��������t�v���p�e�B�t�@�C���L�[ */
	public static final String PARAM_VALID_PROP = "SMSValidDate";

	/** �V�X�e���őÓ��������t�J�n�L�[ */
	public static final String PARAM_VALID_FROM = "fromDate";

	/** �V�X�e���őÓ��������t�I���L�[ */
	public static final String PARAM_VALID_TO = "toDate";

	//2006/09/14 add
    /** CBS�� */
    private static final String LOGIN_CBS = SMSClientInfo.getLoginCBSName();
    /** verb�i���O�A�E�g�j*/
    private static final String VERB_LOGOUT = "logout";
	/** �[���敪�p�L�[ */
	private static final String ST_TANMATSU = "stTammatsu";
	/** �폜�t���O�i���O�C���Ǘ��e�[�u���j�p�L�[ */
	private static final String FG_SAKUJO_LOGIN_KANRI = "fgSakujoLoginKanri";
	//2006/09/14 add


	/** 
	 * �R���X�g���N�^ <BR>
	 */
	public SMSCjfLogicBase() {
		setUseCaseID();
	}

	/**
	 * ���[�X�P�[�XID���Z�b�g���܂��B<BR>
	 * �h����ł�
	 * �ȉ��̗p�Ɏ������Ă��������B<BR>
	 * <pre>
	 * 	protected void setUseCaseID() {
	 *  	super.useCaseID = USECASE; 
	 *  }
	 * </pre>
	 */
	protected abstract void setUseCaseID();

	/**
	 * Method callEJB. EJB�Ăяo�����s���܂��B<BR>
	 * ���s����CBSHandler���\�b�h�̌��ʂ�Ԃ��܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param event �C�x���g�N���X
	 * @param cbsName �Ăяo������CBS��EJB�A�v���P�[�V������
	 * @param cbsVerb �Ăяo������CBS�ɓn��verb
	 * @param data (HashMap)CBS�ɓn���f�[�^
	 * @return HashMap EJB�Ăяo�����ʃf�[�^(�x���A�G���[����null)
	 * @throws Throwable
	 * @see com.fujitsu.sms.sol.sys.SMSHashKeyConst
	 */
	protected HashMap callEJB(JCFContext context, JCFEvent event, String cbsName, String cbsVerb, HashMap data) throws Throwable {

		return callEJB(context, event, ADAPTER_FUNCTION_ID, cbsName, cbsVerb, data);

	}

	/**
	 * Method callEJB. �t�@���N�V����ID���w�肵�ăA�_�v�^���Ăяo��<BR>
	 * 					EJB�Ăяo�����s���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param event �C�x���g�N���X
	 * @param functionID �Ăяo�������A�_�v�^�̃t�@���N�V����ID
	 * @param cbsName �Ăяo������CBS��EJB�A�v���P�[�V������
	 * @param cbsVerb �Ăяo������CBS�ɓn��verb
	 * @param data CBS�ɓn���f�[�^
	 * @return HashMap EJB�Ăяo�����ʃf�[�^
	 * @throws Throwable
	 */
	protected HashMap callEJB(JCFContext context, JCFEvent event, String functionID, String cbsName, String cbsVerb, HashMap data) throws Throwable {

		//******* �T�[�o�[�ʐM���� **********************************************
		//�_���f�o�C�X�I�u�W�F�N�g�̐���
		JCFLogicalDevice dvSV01 = context.getLogicalDevice(ADAPTER_NAME);

		//Servlet�ɑ��M����p�����[�^�쐬
		JCFAdapterInParam inParam = dvSV01.createAdapterInParam(functionID, false);

		//�f�[�^�r�[����verb���p�����[�^��set
		HashMap paramMap = new HashMap();

		paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_NAME, cbsName);
		paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_VERB, cbsVerb);
		paramMap.put(SMSHashKeyConst.PARAM_KEY_DATA, data);

//2014/01/24 �V�X�e�������J���v���W�F�N�g Add Start
		if(event != null){
			SMSCLLog.debug("SMSCjfLogicBase�FSubSystemID:"+event.getSubsystemID());
			paramMap.put(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, event.getSubsystemID());
		}else{
			SMSCLLog.debug("SMSCjfLogicBase�FSubSystemID:null�i�����j");
			paramMap.put(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, null);
		}
//2014/01/24 �V�X�e�������J���v���W�F�N�g Add End
		
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl)getLoginInfo(context);
		//�v���O����ID���Z�b�g����(loginInfo��null�Ȃ̂̓��O�C�����̂�)
		if(loginInfo!=null) {
			loginInfo.setCdProgram(useCaseID.substring(0,10));
		} else {
// 2006/11/27 Add start
			loginInfo = new SMSLoginInfoImpl();
// 2006/11/27 Add end
		}
		paramMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);

		inParam.setCommunicationData(paramMap);

		//Servlet�Ƀf�[�^�𑗐M���āC���ʂ��󂯎��B

		JCFAdapterOutParam outParam = null;

		try {
			outParam = dvSV01.callSync(functionID, inParam);
		} finally {
//2007/04/24 Mod start
/*
			// �t�@�C���A�b�v���[�h�p�t�@�C���f�[�^��close����
			HashMap fileUploadMap = (HashMap) data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);
			SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^�F" + ((fileUploadMap != null) ? "�L": "��"));
			if (fileUploadMap != null) {
				SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^�̉������ start");
				MimeSource fileData = (MimeSource) fileUploadMap.get(SMSHashKeyConst.F_U_FILELIST);
				fileData.getInputStream().close();
				SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^�̉������ end");
			}
*/
//�����t�@�C��(HashMap�z��)�Ή��ǉ�
			// �t�@�C���A�b�v���[�h�p�t�@�C���f�[�^��close����
			//�t�@�C���I�u�W�F�N�g�擾
			Object obj = data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);

			//�t�@�C���f�[�^�����݂��邩�m�F
			if (obj != null) {
				SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^�̉������ start");
				//1�t�@�C���Ή�
				if (obj instanceof HashMap) {
					//HashMap�ɕϊ�
					HashMap fileUploadMap = (HashMap)obj;

					SMSCLLog.debug("�t�@�C�����F1");

					//MimeSource���擾
					MimeSource fileData = (MimeSource) fileUploadMap.get(SMSHashKeyConst.F_U_FILELIST);
					if (fileData != null) {
						fileData.getInputStream().close();
						SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^��close�������s");
					}
				//�����t�@�C���Ή�
				} else if (obj instanceof HashMap[]) {
					//HashMap�z��ɕϊ�
					HashMap[] fileUploadMap = (HashMap[])obj;

					SMSCLLog.debug("�t�@�C�����F" + fileUploadMap.length);

					//�z�񕪂����t�@�C��close���������s
					for (int i = 0; i < fileUploadMap.length; i++) {
						//MimeSource���擾
						MimeSource fileData = (MimeSource) fileUploadMap[i].get(SMSHashKeyConst.F_U_FILELIST);
						if (fileData != null) {
							fileData.getInputStream().close();
							SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^��close�������s(" + i + "���)");
						}
					}
				} else {
					//���蓾�Ȃ�����
					//throw new SMSRuntimeException("�z�肵�Ă��Ȃ��I�u�W�F�N�g���Z�b�g����Ă��܂�");
					SMSCLLog.debug("�z�肵�Ă��Ȃ��I�u�W�F�N�g���Z�b�g����Ă��܂�");
				}
				SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^�̉������ end");
			} else {
				SMSCLLog.debug("�t�@�C���A�b�v���[�h�p�t�@�C���f�[�^��null�ׁ̈A�������Ȃ�");
			}

//2007/04/24 Mod end
		}
		
		//�G���[�`�F�b�N
		if (outParam.isExceptionThrown()) {
			Exception e = outParam.getException();
			e.printStackTrace(System.out);
			throw e;
			//			callErrorAdapter(context,e);
		}
		//�G���[�ƌx���̎�舵��
		HashMap rtn = new HashMap();
		try {
			rtn = checkRtnHash(context, outParam);
			//���ʏ�񂪖߂��Ă�����A�v���P�[�V�����̈�ɍăZ�b�g
			SMSLoginInfoImpl outLoginInfo = (SMSLoginInfoImpl) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_COMMON);
			if (outLoginInfo != null) {
				setLoginInfo(context, outLoginInfo);
			}

		} catch (Throwable th) {
			StringBuffer buf = new StringBuffer();
			buf.append(th.toString() + "\n");
//			 StackTraceElement[] elm = th.getStackTrace();
//			for (int i = 0; i < elm.length; i++) {
//				buf.append(elm[i].toString() + "\n");
//			}

			if( th instanceof SMSRuntimeException){
				String cdError = ((SMSRuntimeException)th).getCdError();
				//�ُ�ԍ������݂�����o��
				if(cdError != null && !cdError.equals("")){
					SMSCLLog.error("�ُ�ԍ�:" + cdError);
				}
			}

			Throwable cause = th.getCause();
			if (cause != null) {
				buf.append("cause:" + cause.toString() + "\n");
//				StackTraceElement[] causeElm = cause.getStackTrace();
//				for (int i = 0; i < causeElm.length; i++) {
//					buf.append(causeElm[i].toString() + "\n");
//				}
			}
			SMSCLLog.error(buf.toString());
			//			callErrorAdapter(context,th);
			throw th;
		}
		return rtn;
	}

	/**
	 * �t�@�C���_�E�����[�h���s���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param fileLocation �_�E�����[�h����t�@�C���̏���
	 * @throws Throwable
	 */
	protected void downloadFile(JCFContext context, int fileLocation) throws Throwable{

		//Adapter�N���X�Ɏ������ׂ����H�@�V�R
		SMSCLLog.trace("--------LogicBase#downloadFile() start");

		BaseContainer applet = JCFContext.getBaseContainer();
		String serverName = applet.getCodeBase().getHost();
		String contextRoot = applet.getParameter(CONTEXT_ROOT_KEY);

		String servletName = SERVLET_NAME_DW;
		switch(fileLocation){
			case(DW_REMOTE):
				//PDF�t�@�C���_�E�����[�h
				servletName = SERVLET_NAME_DW_REMOTE;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
				break;
			
			case(DW_LOCAL):
				//CSV�t�@�C���_�E�����[�h
				servletName = SERVLET_NAME_DW_LOCAL;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
				break;
				
			default:
				//���肦�Ȃ��ꍇ
				//���O�ɏo�͂���PDF�_�E�����[�h��verb���Z�b�g
				SMSCLLog.debug("SMSCjfLogicBase#downloadFile() ����`�̃t�@�C���^�C�v.fileType = " + fileLocation);
				servletName = SERVLET_NAME_DW_LOCAL;
//SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
		}
		
// 2007/08/14 Mod start
//		URL url = new URL(PROTCOL + serverName + contextRoot + servletName);
		String timestamp = SMSDateStringUtil.getTimeStamp();
		String userid = ((SMSLoginInfoImpl) getLoginInfo(context)).getUserId();
		URL url = new URL(PROTCOL + serverName + contextRoot + servletName + PARAM_DELIM + userid + timestamp);

// 2007/08/14 Mod end

//2014/01/24 �V�X�e�������J���v���W�F�N�g Mod Start
//DWH(window1)�A�d�q���[(window2)�Əd�����Ȃ��悤�Ɂ�window3�ƏC��
//		context.showDocument(url, "window1");
		context.showDocument(url, "window3");
//2014/01/24 �V�X�e�������J���v���W�F�N�g Mod End

	}

	/**
	 * Method ���L�f�[�^���擾���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param key     ���L�f�[�^����擾����l�̃L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 * @return Object ���L�f�[�^����擾����l
	 */
	protected Object getUserData(JCFContext context, Object key) {

		// ���L�f�[�^�̈悩��f�[�^�擾
		Object obj = context.getUserData(useCaseID + "_" + key);
		return obj;
	}

	/**
	 * Method �ėp�������ő����[�X�P�[�X�̋��L�f�[�^���擾���邽�߃��[�X�P�[�X���w�肵�ċ��L�f�[�^���擾���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param usecaseID     �擾���������L�f�[�^�̃��[�X�P�[�XID
	 * @param key     ���L�f�[�^����擾����l�̃L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 * @return Object ���L�f�[�^����擾����l
	 */
	protected Object getUserData(JCFContext context, String usecaseID, Object key) {

		// ���L�f�[�^�̈悩��f�[�^�擾
		Object obj = context.getUserData(usecaseID + "_" + key);
		return obj;
	}

	/**
	 * Method ���L�f�[�^��ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param key     ���L�f�[�^�ɐݒ肷��L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 * @param key     ���L�f�[�^�ɐݒ肷��l
	 */
	protected void putUserData(JCFContext context, Object key, Object value) {

		// ���L�f�[�^�̈�ɒl��ݒ�
		context.putUserData(useCaseID + "_" + key, value);
	}

	/**
	 * Method �G���[��ʑJ�ړ��Ń��[�X�P�[�X���w�肵�āA�����[�X�P�[�X�̋��L�f�[�^��ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param usecaseID     �ݒ肵�������L�f�[�^�̃��[�X�P�[�XID
	 * @param key     ���L�f�[�^�ɐݒ肷��L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 * @param value     ���L�f�[�^�ɐݒ肷��l
	 */
	protected void putUserData(JCFContext context, String usecaseID, Object key, Object value) {

		// ���L�f�[�^�̈�ɒl��ݒ�
		context.putUserData(usecaseID + "_" + key, value);
	}

	/**
	 * Method ���L�f�[�^���폜���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param key     ���L�f�[�^����폜�������L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 */
	protected void removeUserData(JCFContext context, Object key) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("���[�X�P�[�XID���Z�b�g����Ă��܂���");
		}
		// ���L�f�[�^�̈�̒l���폜
		context.removeUserData(useCaseID + "_" + key);
	}

	/**
	 * Method �ėp�������ő����[�X�P�[�X�̋��L�f�[�^���폜���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param usecaseID     �폜���������L�f�[�^�̃��[�X�P�[�XID
	 * @param key     ���L�f�[�^����폜����l�̃L�[���i�����I�ɂ̓��[�X�P�[�XID���t�������j
	 */
	protected void removeUserData(JCFContext context, String usecaseID, Object key) throws Exception {

		if (useCaseID.equals("")) {
			throw new Exception("���[�X�P�[�XID���Z�b�g����Ă��܂���");
		}
		// ���L�f�[�^�̈�̒l���폜
		context.removeUserData(usecaseID + "_" + key);
	}

	/**
	 * Method ���[�X�P�[�X���̂��ׂĂ̋��L�f�[�^���폜���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 */
	protected void removeUserData(JCFContext context) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("���[�X�P�[�XID���Z�b�g����Ă��܂���");
		}
		//���L�f�[�^�̃L�[�Z�b�g���擾		
		Set dataSet = (Set) context.userDataKeySet();

		Object[] keys = dataSet.toArray();

		for (int i=0; i<keys.length;i++) {
			String key = (String) keys[i];
			//�����[�X�P�[�X�Ȃ�
			if (key.startsWith(useCaseID)) {
				// ���L�f�[�^�̈�̒l���폜
				context.removeUserData(key);
			}
		}

	}

	/**
	 * Method �ėp�������ő����[�X�P�[�X���̂��ׂĂ̋��L�f�[�^���폜���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 */
	protected void removeUserData(JCFContext context, String usecaseID) {

		if (useCaseID.equals("")) {
			throw new SMSRuntimeException("���[�X�P�[�XID���Z�b�g����Ă��܂���");
		}
		//���L�f�[�^�̃L�[�Z�b�g���擾		
		Set dataSet = (Set) context.userDataKeySet();
		
		Object[] keys = dataSet.toArray();

		for (int i=0; i<keys.length;i++) {
			String key = (String) keys[i];
			//�����[�X�P�[�X�Ȃ�
			if (key.startsWith(usecaseID)) {
				// ���L�f�[�^�̈�̒l���폜
				context.removeUserData(key);
			}
		}
	}

	/**
	 * Method ���O�C�������擾���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @return SMSLoginInfo ���O�C�����
	 */
	protected SMSLoginInfo getLoginInfo(JCFContext context) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfo loginInFo = (SMSLoginInfo) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		return loginInFo;
	}

	/**
	 * Method ���O�C������ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @return SMSLoginInfo ���O�C�����
	 */
	private void setLoginInfo(JCFContext context, SMSLoginInfoImpl loginInfo) {

		//�A�v���P�[�V�����f�[�^�̈�փf�[�^�ݒ�
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * 
	 * @param context CJF�̃R���e�L�X�g
	 */
	//protected void setReturnInfo( JCFReturnInfo returnInfo ) {
	//returnInfo = returnInfo;
	//}

	/**
	 * 
	 * @return SMSMenuAuthorityManager �������
	 */
	//protected JCFReturnInfo getReturnInfo() {

	//if( returnInfo == null  ) {
	//return null;
	//}

	//return returnInfo;
	//}

	/**
	 * Method getFileDialog.���ݎg�p���ĂȂ����\�b�h�I�I
	 * @param title
	 * @return FileDialog
	 */
	protected FileDialog getFileDialog(String title) {
		//�A�v���b�g�I�u�W�F�N�g���擾		
		BaseContainer container = JCFContext.getBaseContainer();
		//GraphicsConfiguration�I�u�W�F�b�g���擾
		GraphicsConfiguration gc = container.getGraphicsConfiguration();
		//Frame�N���X�𐶐�
		Frame frame = new Frame(gc);

		//�t�@�C���I���_�C�A���O�̃C���X�^���X�𐶐�
		FileDialog fileDialog = new FileDialog(frame, "", FileDialog.LOAD);

		return fileDialog;
	}

	/**
	 * �t�@�C���̃p�[�~�b�V�����`�F�b�N�E�T�C�Y�`�F�b�N���s���A�t�@�C����ǂݍ��݂܂��B<BR>
	 * @param fileName �t�@�C����
	 * @param sizeChekcFlg �t�@�C���T�C�Y�`�F�b�N�t���O true:�`�F�b�N����, false:�`�F�b�N���Ȃ�
	 * @return MimeSource �ǂݍ��񂾃t�@�C����MimeSource�I�u�W�F�N�g
	 */
	protected MimeSource readFile(String fileName, boolean sizeCheckFlg) throws SMSAppException, FileNotFoundException, AccessControlException {

		FilePermission filePm = new FilePermission(fileName, "read");

		AccessController.checkPermission(filePm);

		SMSFileUtil fileUtil = new SMSFileUtil();

		//�t�@�C���T�C�Y�`�F�b�N
		if (sizeCheckFlg) {
			long size = fileUtil.getFileSize(fileName);

			String strMax = SMSClientInfo.getFileUploadMaxSize();
			long max = Long.parseLong(strMax);
			if (size > max) {
				SMSCLLog.trace("SMSCjfLogicBase#readFile() �t�@�C���T�C�Y�`�F�b�N�ɂ��G���[");
				throw new SMSAppException(SMSMessageConst.YCSCMNMCW078,new String[]{strMax + "�o�C�g"});
			}
		}

		// MimeSource�I�u�W�F�N�g���쐬
		BufferedInputStream bis = null;
		MimeSource ms = null;

		//�t�@�C���ǂݍ���
		bis = new BufferedInputStream(new FileInputStream(fileName));
		ms = new MimeSource(bis, fileName, 100000);

		return ms;
	}

	/**
	 * ��O�ƌx�������������ꍇ�̃��b�Z�[�W�Z�b�g���s���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param outParam �ҏW�ΏۃA�_�v�^�A�E�g�p�����^
	 * @return HashMap �ҏW��n�b�V���}�b�v
	 */
	private HashMap checkRtnHash(JCFContext context, JCFAdapterOutParam outParam) throws Throwable {
		//�G���[�ƌx���̊m�F
		String errFlg = (String) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG);

		SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�F�G���[�t���O�F"+errFlg);
		
		if (errFlg.equals(SMSHashKeyConst.IS_WARNING)) {
			
			String wMsgID = (String) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_MSG_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�FwMsgID�F"+wMsgID);	
			
			String[] wMsgContents = (String[]) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_MSG_PARAM_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�FwMsgContents�F"+wMsgContents);

			Boolean wMsgPopup = (Boolean) outParam.getCommunicationData().get(SMSHashKeyConst.WARNING_POPUP_PARAM_KEY);
			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�FwMsgPopup�F"+wMsgPopup);

/* 2014/01/24 �V�X�e�������J���v���W�F�N�g �R�����g�A�E�g
            //�i�⑫�j�T�u��ʂł̓X�N���[���f�[�^���擾�ł��Ȃ����߁A�����ł͌Ăяo���Ȃ�
			JCFScreenData screenData = context.getCurrentScreenData();
			//�t�b�^���̃p�l���f�[�^���擾
			JCFPanelData footerPanelData = screenData.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);			
			JCFItemData item = (JCFItemData) footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE);
*/

			JCFMessageOnWindow msgUtil = context.getMessageUtil();

			
//2014/01/24 �V�X�e�������J���v���W�F�N�g Add Start

			SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�F�x�����b�Z�[�WID�F"+wMsgID);	
			
			//���j���[�����p�s�ɂȂ��Ă����ꍇ�̌x��
			if(wMsgID.equals(SMSMessageConst.SMSCMNMCE067)){
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�F���p���ԊO�̌x����\��");
				msgUtil.showMessage(SMSMessageConst.SMSCMNMCE067);
				
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�F�G���[��ʂɑJ��");
				SMSRuntimeException ex = new SMSRuntimeException(SMSMessageConst.SMSCMNMCE067);
				ex.setCdError(SMSMessageConst.SMSCMNMCE067);
				throw ex;
				
			//���̑��̌x���̏ꍇ
			}else{
				SMSCLLog.debug("SMSCjfLogicBase#checkRtnHash�F�x����\��");

				JCFScreenData screenData = context.getCurrentScreenData();

				//�t�b�^���̃p�l���f�[�^���擾
				JCFPanelData footerPanelData = screenData.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);				
				JCFItemData item = (JCFItemData) footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE);

				if (wMsgContents != null) {
					//���ߕ�������
					item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
				} else {
					item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
				}
				//�|�b�v�A�b�v�\���w��Ȃ�
				if (wMsgPopup.booleanValue()) {
					msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
				}
			}

//2014/01/24 �V�X�e�������J���v���W�F�N�g Add End
/* 2014/01/24 �V�X�e�������J���v���W�F�N�g �R�����g�A�E�g
			if (wMsgContents != null) {
				//���ߕ�������
				item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
			} else {
				item.setValue(msgUtil.getMessage(wMsgID));
			}
			//�|�b�v�A�b�v�\���w��Ȃ�
			if (wMsgPopup.booleanValue()) {
				msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
			}
*/

		} else if (errFlg.equals(SMSHashKeyConst.IS_ERROR)) {

			Throwable th = (Throwable) outParam.getCommunicationData().get(SMSHashKeyConst.PARAM_KEY_THROWABLE);
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
			throw th;

		}

		return outParam.getCommunicationData();
	}

	/**
	 * Method headerToMenu.�w�b�_�����́C���C�����j���[�{�^���������ꂽ�Ƃ��̏����ł��B<BR>
	 * @param event
	 * @param context
	 * @param returnInfo
	 * @throws Exception
	 */
	public void headerToMenu(JCFEvent event, JCFContext context, JCFReturnInfo returnInfo) throws Exception {
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID);
	}

	/**
	 * �G���[��ʂɑJ�ڂ��܂��B
	 * @param event
	 * @param context
	 * @param returnInfo
	 * @throws Throwable
	 */
	public void error(JCFEvent event, JCFContext context, JCFReturnInfo returnInfo) throws Throwable {

		SMSCLLog.trace("LogicBase:error() start");
		//�G���[��ʂɑJ�ڂ���悤�CCJF�ɒʒm
		returnInfo.setTransitionScreenID(ERROR_SCREEN_ID);
		SMSCLLog.trace("LogicBase:error() end");
	}

	/**
	 * �G���[��ʂɑJ�ڃA�_�v�^���Ăяo���܂��B
	 * @param context CJF�̃R���e�L�X�g
	 * @param th ��������Throwable�I�u�W�F�N�g
	 */
	public void callErrorAdapter(JCFContext context, Throwable th) {

		JCFLogicalDevice ev;
		JCFAdapterInParam inParam;
		try {
			putUserData(
				context,
				SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
				SMSHashKeyConst.PARAM_KEY_THROWABLE,
				th);
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG,"true");
			//2006/09/14 ��O�����O�A�E�g�����ǉ�
			try {
// 2006/11/28 Mod start
				if(th instanceof SMSRuntimeException) {
					String cdError = ((SMSRuntimeException)th).getCdError();
					if(cdError != null && !cdError.equals(SMSMessageConst.SMSSYSMCE002)) {
						// �^�C���A�E�g�����ȊO�ł̓��O�A�E�g�������s��
						HashMap inData = new HashMap();
						inData.put(ST_TANMATSU, "01"); // �[���敪�i�A�v���b�g�j
						inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ���O�A�E�g����
						HashMap logoutHash =
							(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);
					}
				} else {
//2014/1/24 �V�X�e�������J���v���W�F�N�g�i�f�o�b�O�R�����g�ǉ��j
					SMSCLLog.debug("SMSCjfLogicBase#callErrorAdapter:RuntimeException�ȊO�̃G���[�����i���O�A�E�g�����̎��s�j");
					HashMap inData = new HashMap();
					inData.put(ST_TANMATSU, "01"); // �[���敪�i�A�v���b�g�j
					inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ���O�A�E�g����
					HashMap logoutHash =
						(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);
				}
// 2006/11/28 Mod end
			} catch (Throwable e) {
				e.printStackTrace();
			}
			//2006/09/14 ��O�����O�A�E�g�����ǉ�

			ev = context.getLogicalDevice(ERROR_ADAPTER_NAME);

			//Servlet�ɑ��M����p�����[�^�쐬
			inParam = ev.createAdapterInParam(ERROR_FUNCTION_ID, false);

			//Servlet�Ƀf�[�^�𑗐M���āC���ʂ��󂯎��B
			ev.callAsync(ERROR_FUNCTION_ID, inParam);

			th.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * �G���[��ʂɑJ�ڃA�_�v�^���Ăяo���܂��B�T�u��ʂŎg�p���܂��B
	 * @param context CJF�̃R���e�L�X�g
	 * @param th ��������Throwable�I�u�W�F�N�g
	 */
	protected void callSubErrorAdapter(JCFContext context, Throwable th) throws JCFIllegalArgumentException, JCFIllegalConfigurationException, JCFIllegalStateException, JCFSecurityException {
		
		JCFLogicalDevice ev;
		JCFAdapterInParam inParam;
			
		try {
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_THROWABLE, th);
			putUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_SUB_ERROR, th);
			
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG,"true");

			
			//2006/09/14 ��O�����O�A�E�g�����ǉ�
			try {
				HashMap inData = new HashMap();
				inData.put(ST_TANMATSU, "01"); // �[���敪�i�A�v���b�g�j
				inData.put(FG_SAKUJO_LOGIN_KANRI, "0"); // ���O�A�E�g����
				
				HashMap logoutHash =
					(HashMap) callEJB(context, null, LOGIN_CBS, VERB_LOGOUT, inData);

				
			} catch (Throwable e) {
				//�^�C���A�E�g���͂�����ʂ�
				e.printStackTrace();
			}
			//2006/09/14 ��O�����O�A�E�g�����ǉ�
			
			ev = context.getLogicalDevice(ERROR_SUB_ADAPTER_NAME);
			
			//Servlet�ɑ��M����p�����[�^�쐬
			inParam = ev.createAdapterInParam(ERROR_SUB_FUNCTION_ID, false);

			//Servlet�Ƀf�[�^�𑗐M���āC���ʂ��󂯎��B
			ev.callAsync(ERROR_SUB_FUNCTION_ID, inParam);

			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * �_�C�A���O�ŗ�O���������������f���܂��B
	 * �\���O�����Ŏg�p���܂��B
	 * @exception Throwable
	 */
	protected void checkDialogException(JCFContext context) throws Throwable{

		Throwable th = (Throwable)getUserData(context, SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID, SMSHashKeyConst.PARAM_KEY_SUB_ERROR);
		if(th != null){
			throw th;
		}
	}

	/**
	 * �I������Ă���R���{�{�b�N�X��ID���擾���܂��B<BR>
	 * @param comboBoxData �R���{�{�b�N�X�f�[�^�A�C�e��
	 * @return value �R���{�{�b�N�X�v�fID �I������Ă��Ȃ�������""��Ԃ��܂��B
	 */
	public String getComboID(JCFComboBoxData comboBoxData) {

		String rtnID = "";
		JCFSelectableElement[] selectElement = comboBoxData.getSelectableElementValue();
		for (int i = 0; i < selectElement.length; i++) {
			if (selectElement[i].isSelected()) {
				rtnID = selectElement[i].getID();
			}
		}
		return rtnID;
	}

	/**
	 * Method �v���O����ID��ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �v���O����ID
	 */
	protected void setCdProgram(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setCdProgram(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method ���ID��ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String ���ID
	 */
	protected void setCdGamen(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setCdGamen(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method ��ʖ���ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String ��ʖ�
	 */
	protected void setNmGamen(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setNmGamen(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �ő匟��������ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �ő匟������
	 */
	protected void setQtSaidaiKensaku(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiKensaku(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �ő�\��������ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �ő�\������
	 */
	protected void setQtSaidaiHyouji(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiHyouji(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �\���ςݐ���ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �\���ςݐ�
	 */
	protected void setQtHyoujiZumi(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtHyoujiZumi(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method ����������ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String ��������
	 */
	protected void setStKensakuHoukou(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setStKensakuHoukou(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �\���ł�ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �\����
	 */
	protected void setQtHyoujiPage(JCFContext context, String value) {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtHyoujiPage(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �ŏ����N���A���܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 */
	protected void clearPageInfo(JCFContext context) {
		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setQtSaidaiKensaku("");
		loginInfo.setQtSaidaiHyouji("");
		loginInfo.setQtHyoujiZumi("");
		loginInfo.setStKensakuHoukou("");
		loginInfo.setQtKensaku("");
		loginInfo.setQtHyoujiPage("");
		loginInfo.setQtPage("");
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * �ėp������ʂ�\������O�̏����������s���܂��B<BR>
	 * ����ID(�A�N�V�����R�[�h)�����ɁC��ʒ�`�v���p�e�B�t�@�C������`��ǂݍ��݂܂��B<BR>
	 * @param event
	 * @param context
	 * @param cons �e��ʂŎg�p����A�C�e��ID�̔z�� null�w��Ŕėp������ʂւ̈��p���Ȃ�
	 * @param enableCons �e��ʂŕύX�s�̏������w�肷�� null�w��ŕύX�s�����Ȃ�
	 * @param kidoKensaku true:�N������������ false:�N�����������Ȃ�
	 * @param literalList ���e���������ɓn���p�����[�^
	 * @param returnInfo
	 */
	public void geneSearchPrepare(JCFEvent event, JCFContext context, String[] cons, boolean[] enableCons, boolean kidoKensaku, List literalList) {

		//�@�C�x���g����A�N�V����ID�i����ID�j���擾����B
		String searchID = event.getEventAdditionalInfo().getActionID();
		String ACTION_HEAD = "ACT_";
		//"ACT_"����菜��
		searchID = searchID.substring(searchID.indexOf(ACTION_HEAD) + ACTION_HEAD.length());
		geneSearchPrepareWithID(event,context,searchID,cons,enableCons,kidoKensaku,literalList);

	}

	/**
	 * �ėp������ʂ�\������O�̏����������s���܂��B<BR>
	 * ����ID(�A�N�V�����R�[�h)�����ɁC��ʒ�`�v���p�e�B�t�@�C������`��ǂݍ��݂܂��B<BR>
	 * @param event
	 * @param context
	 * @param searchID �ėp�����L�[ e.g GeneralSearch001 
	 * @param cons �e��ʂŎg�p����A�C�e��ID�̔z�� null�w��Ŕėp������ʂւ̈��p���Ȃ�
	 * @param enableCons �e��ʂŕύX�s�̏������w�肷�� null�w��ŕύX�s�����Ȃ�
	 * @param kidoKensaku true:�N������������ false:�N�����������Ȃ�
	 * @param literalList ���e���������ɓn���p�����[�^
	 * @param returnInfo
	 */
	public void geneSearchPrepareWithID(JCFEvent event, JCFContext context ,String searchID, String[] cons, boolean[] enableCons, boolean kidoKensaku, List literalList) {

		String USECASE = SMSHashKeyConst.PARAM_KEY_GENERALID;
		String SEARCHID = "searchID";
		SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() start");

		String[] jouken = new String[10];

		try {

			//�@������ʂ́y����z�{�^���`�F�b�N�t���O
			SMSPanelInitDataHolder.getInstance().setCloseButton(false);

			/**�Ɩ���ʂ̍��ڒl���擾���āA���ʗ̈�Ɋi�[����B��*/
			context.putUserData(SEARCHID, searchID);
			/**�Ɩ���ʂ̍��ڒl���擾���āA���ʗ̈�Ɋi�[����B��*/

			//�@�\�����̍s�����ێ�����B
			JCFEventAdditionalInfo eventAddInfo = event.getEventAdditionalInfo();

			//�@�Ɩ���ʂ̃X�v���b�h����ۑ�����B						
			JCFSpreadAdditionalInfo spreadAddInfo = (JCFSpreadAdditionalInfo) eventAddInfo.getAdditionalInfo();

			if (spreadAddInfo != null) {
				putUserData(context, SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAddInfo.getCellPosition());
			}

			//�@����ID���p�l���������f�[�^�I�u�W�F�N�g�Ɋi�[����B			
			SMSPanelInitDataHolder.getInstance().setSearchID(searchID);

			//�ėp�����Ŏg�p���������ۑ�����B
			if (cons != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_VALUE, cons);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_VALUE);
			}
			//�ėp�����ŕύX������ۑ�����B
			if (enableCons != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_ENABLE_CONS, enableCons);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_ENABLE_CONS);
			}
			//�����\���������܂��͔񌟍��̏���ۑ�����B
			putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERA_SEARCH_START, new Boolean(kidoKensaku));
			//�ėp�����Ń��e���������p�p�����[�^��ۑ�����B
			if (literalList != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			}else{
				//ST-0563-000
				removeUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, SMSHashKeyConst.GENERAL_LITERAL_CONS);
			}

		} catch (Throwable e) {
			StringBuffer buf = new StringBuffer();

			if (e != null) {
				buf.append(e.toString() + "\n");
			}

			SMSCLLog.error("SMSCjfLogicBase:geneSearchPrepareWithID()�c" + buf.toString());
			e.printStackTrace(System.out);
		}

		SMSCLLog.trace("SMSCjfLogicBase:geneSearchPrepareWithID() end");

	}

	/**
	 * �ėp������ʂ�\������O�̏����������s���܂��B<BR>
	 * ����ID(�A�N�V�����R�[�h)�����ɁC��ʒ�`�v���p�e�B�t�@�C������`��ǂݍ��݂܂��B<BR>
	 * @param event
	 * @param context
	 * @param cons �e��ʂŎg�p����A�C�e��ID�̔z�� null�w��Ŕėp������ʂւ̈��p���Ȃ�
	 * @param enableCons �e��ʂŕύX�s�̏������w�肷�� null�w��ŕύX�s�����Ȃ�
	 * @param kidoKensaku true:�N������������ false:�N�����������Ȃ�
	 * @param returnInfo
	 */
	public void geneSearchComboPrepare(JCFEvent event, JCFContext context, String comboName, List comboCondition) {

		String USECASE = SMSHashKeyConst.PARAM_KEY_GENERALID;
		String SEARCHID = "searchID";
		SMSCLLog.trace("SMSCjfLogicBase:geneSearchComboPrepare() start");

		try {

			//�ėp�����Ŏg�p���������ۑ�����B
			if (comboCondition != null) {
				putUserData(context, SMSHashKeyConst.PARAM_KEY_GENERALID, comboName, comboCondition);
			}

		} catch (Throwable e) {
			StringBuffer buf = new StringBuffer();

			if (e != null) {
				buf.append(e.toString() + "\n");
			}

			SMSCLLog.error("YCSCMNF060SLogic:geneSearchComboPrepare()�c" + buf.toString());
			e.printStackTrace(System.out);
		}

		SMSCLLog.trace("YCSCMNF060SLogic:geneSearchComboPrepare() end");

	}

	/**
	 * Method �f�B���N�g����ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �f�B���N�g��
	 */
	protected void setStDirectory(JCFContext context, String value) throws SMSRuntimeException {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setStDirectory(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �t�@�C������ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param String �t�@�C����
	 */
	protected void setNmFile(JCFContext context, String value) throws SMSRuntimeException {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setNmFile(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * Method �t�@�C���f�[�^��ݒ肵�܂��B<BR>
	 * @param context CJF�̃R���e�L�X�g
	 * @param byte[] �t�@�C���f�[�^
	 */
	protected void setFile(JCFContext context, byte[] value) throws SMSRuntimeException {

		//�A�v���P�[�V�����f�[�^�̈悩��f�[�^�擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) context.getApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON);
		loginInfo.setFile(value);
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);
	}

	/**
	 * �Ő�������s������ɍs�����i�ւ̃Z�b�g�������s���܂��B<BR>
	 * �g�p����ɂ͕őJ�ڂɕK�v�ȕ��i���p�l���ɔz�u����K�v������܂��B<BR>
	 * @param context			CJF�R���e�L�X�g�I�u�W�F�N�g
	 */
	protected void setPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		JCFScreenData current = context.getCurrentScreenData();
		JCFItemData itemForward = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_FORWARD);
		JCFItemData itemReverse = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_REVERSE);
		JCFItemData itemPageJump = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_JUMP);

		JCFFieldLongData itemFirst = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_FIRST_RECORD);
		JCFFieldLongData itemLast = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_LAST_RECORD);
		JCFFieldLongData itemTotal = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_RECORD);

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		//���ʏ��擾
		SMSLoginInfoImpl loginInfo = (SMSLoginInfoImpl) getLoginInfo(context);
		//�u���ցv�u�O�ցv�̊����񊈐�����

		if (loginInfo.getStJiPage() != null){
			if (loginInfo.getStJiPage().booleanValue()) {
				itemForward.setEnabled(true);
			} else {
				itemForward.setEnabled(false);
				itemLast.setEnabled(false);
			}
		}

		if(loginInfo.getStZenPage() != null){
			if (loginInfo.getStZenPage().booleanValue()) {
				itemReverse.setEnabled(true);
			} else {
				itemReverse.setEnabled(false);
			}
		}

		//�Ŏw����͕��i�̔w�i�F�f�t�H���g
		itemCurrentPage.setBackground(SMSColor.DEFAULT);

		//�Ŏw��̊����A�񊈐�
		if (loginInfo.getQtPage() != null) {
			try {
				if (Integer.parseInt(loginInfo.getQtPage()) > 1) {
					itemPageJump.setEnabled(true);
					itemCurrentPage.setEnabled(true);
				} else {
					itemPageJump.setEnabled(false);
					itemCurrentPage.setEnabled(false);
				}
			} catch (NumberFormatException e) {
				itemPageJump.setEnabled(false);
				itemCurrentPage.setEnabled(false);
			}
		}

		//���������Z�b�g
		int hyoujiZumi;
		int maxHyouji;
		int cnt;
		try {
			hyoujiZumi = Integer.parseInt(loginInfo.getQtHyoujiZumi());
			maxHyouji = Integer.parseInt(loginInfo.getQtSaidaiHyouji());
			cnt = Integer.parseInt(loginInfo.getQtKensaku());
			itemFirst.setValue(SMSPageTranUtil.getHyoujiKaishi(hyoujiZumi, maxHyouji, cnt));
			itemLast.setValue(hyoujiZumi);
			itemTotal.setValue(Long.parseLong(loginInfo.getQtKensaku()));
			itemCurrentPage.setValue(loginInfo.getQtHyoujiPage());
			itemTotalPage.setValue(loginInfo.getQtPage());
		} catch (NumberFormatException e) {
			//�����\���Ȃ��Ŗ{���\�b�h�����s�����ꍇ�Ƒz��B
			itemCurrentPage.setValue(0);
		}


	}

	/**
	 * �Ő���K�v�ȕ��i�̏������������s���܂��B<BR>
	 * �g�p����ɂ͕őJ�ڂɕK�v�ȕ��i���p�l���ɔz�u����K�v������܂��B<BR>
	 * @param context			CJF�R���e�L�X�g�I�u�W�F�N�g
	 */
	protected void initPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		JCFScreenData current = context.getCurrentScreenData();
		JCFItemData itemForward = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_FORWARD);
		JCFItemData itemReverse = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_REVERSE);
		JCFItemData itemPageJump = (JCFItemData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_PAGE_JUMP);

		JCFFieldLongData itemFirst = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_FIRST_RECORD);
		JCFFieldLongData itemLast = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_LAST_RECORD);
		JCFFieldLongData itemTotal = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_RECORD);

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		// �u���ցv�u�O�ցv�̔񊈐�����
		itemForward.setEnabled(false);
		itemReverse.setEnabled(false);
		// �u�Ŏw��v�̔񊈐�����
		itemPageJump.setEnabled(false);
		
		// �Ŏw����͕��i�̔񊈐�����
		itemCurrentPage.setEnabled(false);

		//�Ŏw����͕��i�̔w�i�F�f�t�H���g
		itemCurrentPage.setBackground(SMSColor.DEFAULT);

		// ���������Z�b�g
		itemFirst.setValue("0");
		itemLast.setValue("0");
		itemTotal.setValue("0");
		itemCurrentPage.setValue("0");
		itemTotalPage.setValue("0");

	}


	/**
	 * �ėp�����̌������W�b�N��p���ăR�[�h�ɑΉ��������̂��擾���܂��B<BR>
	 * �ėp������SQL�����̂܂ܗp���邽�߁A�R�[�h�Ƃ̔�r������'=','LIKE'�̂����ꂩ�ł���K�v������܂��B<BR>
	 * �R�[�h��������ӂɂȂ�Ȃ������ꍇSMSRuntimeException�𔭐����܂��B<BR>
	 * @param context
	 * @param searchID �ėp����ID
	 * @param columnName �����ΏۃJ������ *screen.propeties��paramName�ƑΉ�
	 * @param code �����ΏۃR�[�h
	 * @param literalList �����񌟍������o�C���h�l
	 * @param resultName �������ʃL�[�� *sql.propeties��result.key�ƑΉ�
	 * @return ����	
	 * @exception Throwable callEJB���s����O
	 */
	public String getNameByGeneralSearch(JCFContext context, String searchID,
					String columnName,String code,List literalList,String resultName) throws Throwable{
		
		String rtn = "";
		if(searchID == null || "".equals(searchID)){
			return rtn;
		}
		if(code == null || "".equals(code)){
			return rtn;
		}

		HashMap inData = new HashMap();
		HashMap outData = new HashMap();

		//***************** �T�[�o�[�ʐM���� ****************************

		try {
			//�ėp�����L�[
			inData.put(SEARCH_ID,searchID);				
			//�ėp������ʏ����ɂ�������̂��R�[�h�̂݃Z�b�g
			inData.put(columnName, code);
			//�ėp�����e��ʃZ�b�g�������Z�b�g
			inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			
			rtn = getNameByGeneralSearch(context,inData,resultName);

		} catch (Throwable e) {
			throw e;
		}
		return rtn;
	}

	/**
	 * �ėp�����̌������W�b�N��p���ăR�[�h�ɑΉ��������̂��擾���܂��B<BR>
	 * ���̓���ɕ��������i�R�[�h�����łȂ��j���K�v�ȏꍇ�A�g�p���܂��B<BR>
	 * �R�[�h��������ӂɂȂ�Ȃ������ꍇSMSRuntimeException�𔭐����܂��B<BR>
	 * @param context
	 * @param searchID �ėp����ID
	 * @param conditionMap �����ΏۃJ���������L�[�A����������l�Ƃ���HashMap
	 * @param literalList �����񌟍������o�C���h�l
	 * @param resultName �������ʃL�[�� *sql.propeties��result.key�ƑΉ�
	 * @return ����	
	 * @exception Throwable callEJB���s����O
	 */
	public String getNameByGeneralSearch(JCFContext context, String searchID,
					HashMap conditionMap,List literalList,String resultName) throws Throwable{
		
		String rtn = "";
		if(searchID == null || "".equals(searchID)){
			return rtn;
		}
		if(conditionMap == null || conditionMap.size()<1){
			return rtn;
		}

		HashMap inData = new HashMap();

		//***************** �T�[�o�[�ʐM���� ****************************

		try {
			//�ėp�����L�[
			inData.put(SEARCH_ID,searchID);				
			//�ėp������ʏ����ɂ�������̂��Z�b�g
			Set keySet = conditionMap.keySet();
			Iterator it = keySet.iterator();
			while (it.hasNext()){
				String key = (String)it.next();
				inData.put(key,conditionMap.get(key));
			}

			//�ėp�����e��ʃZ�b�g�������Z�b�g
			inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
			
			rtn = getNameByGeneralSearch(context,inData,resultName);

		} catch (Throwable e) {
			throw e;
		}
		return rtn;
	}

	/**
	 * �őJ�ڂ���O�ɍs���`�F�b�N�����ł��B<BR>
	 * �g�p����ɂ͕őJ�ڂɕK�v�ȕ��i���p�l���ɔz�u����K�v������܂��B<BR>
	 * @param context			CJF�R���e�L�X�g�I�u�W�F�N�g
	 * @return true:�w��y�[�W�͐��� false:�w��y�[�W���ő���傫���A�܂���0,��
	 */
	protected boolean checkPageInfo(JCFContext context) throws JCFIllegalStateException, JCFIllegalArgumentException, JCFDataException {

		boolean rtn = false;
		JCFScreenData current = context.getCurrentScreenData();

		JCFFieldLongData itemCurrentPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_CURRENT_PAGE);
		JCFFieldLongData itemTotalPage = (JCFFieldLongData) current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, ITEM_TOTAL_PAGE);

		long currentPage = itemCurrentPage.getLongValue();
		long totalPage = itemTotalPage.getLongValue();

		//�w��y�[�W���ő�𒴂��Ă���@�܂���0
		if(currentPage > totalPage || currentPage == 0){
			//���̕łɖ߂�
			setPageInfo(context);
			itemCurrentPage.setBackground(SMSColor.WARNING);
			SMSHeaderFooterManager.showInformation(context,SMSMessageConst.SMSCMNMCA104,new String[]{"��","1",Long.toString(totalPage)});
		}else{
			rtn = true;
		}

		return rtn;
	}

	/**
	 * �ėp�����Ăяo�����s���܂��B<BR>
	 * �g�p����ɂ͕őJ�ڂɕK�v�ȕ��i���p�l���ɔz�u����K�v������܂��B<BR>
	 * @param context
	 * @param inData �ėp�����Ăяo������
	 * @param resultName �������ʃL�[�� *sql.propeties��result.key�ƑΉ�
	 * @return ��������
	 */
	private String getNameByGeneralSearch(JCFContext context,HashMap inData,String resultName) throws Throwable {

		String rtn = "";
		HashMap outData = new HashMap();
		//EJB�Ăяo��
		HashMap data = callEJB(context, null, "SMSSYSCBS", "find", inData);
		outData = (HashMap) data.get(SMSHashKeyConst.PARAM_KEY_DATA);
		//�@�������ʂ̒l���}�b�v����擾����B
		HashMap[] map = (HashMap[]) outData.get(RESULT_KEY);

		//�������ʂ��Ԃ��Ă���
		if (map.length == 1) {
			rtn = (String) map[0].get(resultName);
		}
		if (map.length > 1) {
			throw new SMSRuntimeException("���R�[�h������ł��܂���");
		}
		
		return rtn;
	}

	/**
	* �Ɩ��I�����܂��B
	*
	* @param event �b�i�e�C�x���g�I�u�W�F�N�g
	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	* @param returnInfo �b�i�e���A���I�u�W�F�N�g
	* @exception JCFDataException CJF�ŗ�O�����������ꍇ�ɽ۰������O��޼ު��
	*/
	public void exitSystem(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo)
		throws JCFIllegalArgumentException,
		JCFIllegalStateException,
		JCFIllegalConfigurationException{

		SMSCLLog.debug("exitSystem() start");

		//�Ɩ��I���{�^���̊�����Ԃ��擾
		JCFScreenData current = context.getCurrentScreenData();

		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.EXIT_BUTTON);
		
		//�Ɩ��I���{�^�����񊈐��̏ꍇ�A�I��
		if(!pushButton.isEnabled()) { 
			return;	
		}
			
		//���b�Z�[�W�̕\��
		JCFMessageOnWindow msgUtil = context.getMessageUtil();
		String ret = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC077);
		
		//�u�������v�̏ꍇ
		if (ret.equals(JCFMessageOnWindow.BTN_NO)) {
			returnInfo.cancelScreenTransition();
			return;
			
		//�u�͂��v�̏ꍇ
		} else if (ret.equals(JCFMessageOnWindow.BTN_YES)) {
			//��d�N���t���O�폜
			context.removeApplicationData(FG_INFRA);
			context.exit();
			
			// �ǂ̃��j���[��ʂɖ߂邩�𔻒f���邽�߂̃L�[��������
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
			context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SCREEN, null);
		}

		SMSCLLog.debug("exitSystem() end");
	}

	/**
	* �T�u���j���[�ɖ߂�܂��B
	*
	* @param event �b�i�e�C�x���g�I�u�W�F�N�g
	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	* @param returnInfo �b�i�e���A���I�u�W�F�N�g
	* @exception JCFDataException CJF�ŗ�O�����������ꍇ�ɽ۰������O��޼ު��
	*/
	public void returnSubMenu(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo) 
		throws JCFIllegalArgumentException,
		JCFIllegalConfigurationException,
		JCFIllegalStateException
		{

		SMSCLLog.debug("returnSubMenu() start");

		//�T�u���j���[�{�^���̊�����Ԃ��擾
		JCFScreenData current = context.getCurrentScreenData();
		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.RETURN_BUTTON);
		
		//�Ɩ��I���{�^�����񊈐��̏ꍇ�A�I��
		if(!pushButton.isEnabled()) { 
			return;	
		}
			
		returnInfo.cancelScreenTransition();
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID, false);

		// �ǂ̃��j���[��ʂɖ߂邩�𔻒f���邽�߂̃L�[��ݒ�
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, "true");

		SMSCLLog.debug("returnSubMenu() end");
	}

	/**
	* ���C�����j���[�ɖ߂�܂��B
	*
	* @param event �b�i�e�C�x���g�I�u�W�F�N�g
	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	* @param returnInfo �b�i�e���A���I�u�W�F�N�g
	* @exception JCFDataException CJF�ŗ�O�����������ꍇ�ɽ۰������O��޼ު��
	*/
	public void returnMainMenu(
		JCFEvent event,
		JCFContext context,
		JCFReturnInfo returnInfo)		
		throws JCFIllegalArgumentException,
		JCFIllegalConfigurationException,
		JCFIllegalStateException{

		SMSCLLog.debug("returnMainMenu() start");
		
		//�T�u���j���[�{�^���̊�����Ԃ��擾
		JCFScreenData current = context.getCurrentScreenData();
		JCFPushButtonData pushButton;
		pushButton =
			(JCFPushButtonData) current.getItemData(
				SMSHeaderFooterManager.FRAME_HEADER,
				SMSHeaderFooterManager.MENU_BUTTON);
		
		//�Ɩ��I���{�^�����񊈐��̏ꍇ�A�I��
		if(!pushButton.isEnabled()) {
			return;	
		}
		
		returnInfo.cancelScreenTransition();
		returnInfo.setSubsystemID(MENU_SUBSYSTEM_ID, false);
		
		// �ǂ̃��C�����j���[��ʂɖ߂邽�߂̃L�[��ݒ�
		context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null);
			
		SMSCLLog.debug("returnMainMenu() end");
	}

	/**
	* �p�l���f�[�^��̃A�C�e���f�[�^�̒l���A�C�e��ID���L�[�Ƃ��ċ��L�f�[�^�ɃR�s�[���܂��B<br>
	* �R�s�[�ł���A�C�e���f�[�^��getValue(String)���\�b�h���L����JCFItemData�̔h���N���X�݂̂ł��B�i�X�v���b�h�͕s�j<br>
	* �A�C�e��ID�������͏ꍇ��Bean�����L�[�Ƃ��Ďg�p����܂��B
	* ���L�f�[�^�̃L�[�ɂ̓��[�X�P�[�XID���t������܂��B<br>
	* �����̋��L�f�[�^�ɓ���L�[�����݂���ꍇ�A�l�͏㏑������܂��B
	*
	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	* @param panelData �R�s�[�Ώۂ̃p�l���f�[�^
	* @param usecaseID ���L�f�[�^�̃L�[�ɕt������郆�[�X�P�[�XID
	*/
	protected void copyPanelToUser(
		JCFContext context,
		JCFPanelData panelData,
		String usecaseID){
				
		SMSCLLog.debug("copyPanelToUser() start");

		//�\�����悤�Ƃ��Ă���p�l����ɂ���S�Ă�ItemData���擾�B
		ArrayList array = panelData.getAllItemData();
		JCFItemData itemData = null;
		// �{�^���̐���J�n
		for (int i = 0; i < array.size(); i++) {
			// ItemData
			Object obj = array.get(i);
			// JCFItemData�̏ꍇ
			if (obj instanceof JCFItemData) {
				itemData = (JCFItemData) obj;
				String key = itemData.getItemID();
				Object value = itemData.getValue();
				if(key!=null && obj!=null){
					putUserData(context,usecaseID,key,value);
				}
			}
		}

		SMSCLLog.debug("copyPanelToUser() end");

	}

	/**
	* ���L�f�[�^�̃L�[�ƈ�v����A�C�e��ID�̃A�C�e���f�[�^�ɒl���R�s�[���܂�<br>
	* �R�s�[�ł���A�C�e���f�[�^��setValue(String)���\�b�h���L����JCFItemData�̔h���N���X�݂̂ł��B�i�X�v���b�h�͕s�j<br>
	*
	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	* @param panelData �R�s�[�Ώۂ̃p�l���f�[�^
	* @param usecaseID ���L�f�[�^�̃L�[�ɕt������郆�[�X�P�[�XID
	*/
	protected void copyUserToPanel(
		JCFContext context,
		JCFPanelData panelData,
		String usecaseID){
				
		SMSCLLog.debug("copyUserlToPanel() start");

		//�\�����悤�Ƃ��Ă���p�l����ɂ���S�Ă�ItemData���擾�B
		ArrayList array = panelData.getAllItemData();
		JCFItemData itemData = null;
		// �{�^���̐���J�n
		for (int i = 0; i < array.size(); i++) {
			// ItemData
			Object obj = array.get(i);
			// JCFItemData�̏ꍇ
			if (obj instanceof JCFItemData) {
				itemData = (JCFItemData) obj;
				String key = itemData.getItemID();
				String userValue = (String)getUserData(context,usecaseID,key);
				//���L�f�[�^�ɃA�C�e��ID�Ɠ������L�[�����݂���
				if(userValue!=null){
					itemData.setValue(userValue);
				}
			}
		}

		SMSCLLog.debug("copyUserlToPanel() end");

	}

	/** 
	 * �p�l���f�[�^�̕���
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @param screen_id �����ΏۃX�N���[��ID
	 */
	protected void deserialize(JCFContext context,String screen_id) throws Throwable {
		
		//�t�b�^�{�^������
		deserialize(context,screen_id,SMSHeaderFooterManager.FRAME_FOOTER);
		
		//�Ɩ��p�l������
		deserialize(context,screen_id,SMSHeaderFooterManager.FRAME_MAIN);
		
		//�t���O�폜
		removeUserData(context,(Object)screen_id);
	}
	
	/** 
	 * �p�l���f�[�^�̕���
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @param screen_id �����ΏۃX�N���[��ID
	 * @param frame_id �����Ώۃt���[��ID
	 */
	protected void deserialize(JCFContext context,String screen_id,String frame_id) throws Throwable {

		HashMap map = (HashMap)getUserData(context,screen_id + "_" + frame_id);
		// ���ڃf�[�^�擾
		JCFScreenData screenData = context.getCurrentScreenData();
		// BODY���̃p�l���f�[�^���擾
		JCFPanelData panel =  screenData.getPanelData(frame_id);
		
		if ( map != null && panel != null ) {
			
			//�p�l�����̃A�C�e����S�Ď擾			
			ArrayList arItems = panel.getAllItemData();
			
			for ( int i = 0; i < arItems.size(); i++ ) {	
			
				JCFItemData item = (JCFItemData)arItems.get(i);	
				
				if ( item.getItemID() != null ) {
					//�A�C�e���̕���
					JCFItemData old = (JCFItemData)map.get(item.getItemID());
					if ( old != null ) {
						item.setDataAndAttributes(old);
					}
				}
			}
			//��ʂɕ����㎑���J������
//2006.11.21 change start
//removeUserData(JCFContext, String)�ł͂Ȃ��AremoveUserData(JCFContext, Object)�����s����悤�ɕύX
//			removeUserData(context,screen_id + "_" + frame_id);
			removeUserData(context, (Object)screen_id + "_" + frame_id);
//2006.11.21 change end
		}
		
	}
	
	
	/** 
	 * �p�l���f�[�^�̕ۑ�
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @param screen_id �ۑ��ΏۃX�N���[��ID
	 */
	protected void serialize(JCFContext context,String screen_id) throws Throwable {

		//�t���O�ۑ�
		putUserData(context,screen_id, true);

		//�t�b�^�{�^���ۑ�
		serialize(context,screen_id,SMSHeaderFooterManager.FRAME_FOOTER);
		
		//�Ɩ��p�l���ۑ�
		serialize(context,screen_id,SMSHeaderFooterManager.FRAME_MAIN);

	}
	
	/** 
	 * �p�l���f�[�^�̕ۑ�
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @param screen_id �ۑ��ΏۃX�N���[��ID
	 * @param frame_id �ۑ��Ώۃt���[��ID
	 */
	protected void serialize(JCFContext context,String screen_id,String frame_id) throws Throwable {

		// ���ڃf�[�^�擾
		JCFScreenData screenData = context.getCurrentScreenData();
		// BODY���̃p�l���f�[�^���擾
		JCFPanelData panel =  screenData.getPanelData(frame_id);
		
		ArrayList arItems = panel.getAllItemData();
		
		HashMap map = new HashMap();
		
		//�p�l�����̃A�C�e����S�Ď擾	
		for ( int i = 0; i < arItems.size(); i++ ) {			
			//�A�C�e�����擾
			JCFItemData item = (JCFItemData)arItems.get(i);	
			//�A�C�e�����A�C�e��ID���L�[�ɕۑ�
			if ( item.getItemID() != null ) {
				map.put(item.getItemID(), item);
			}
		}
		
		putUserData(context,screen_id + "_" + frame_id, map);
	}
	
	/** 
	 * �p�l���f�[�^���ۑ�����Ă��邩�m�F���܂��B
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @param screen_id �ۑ��ΏۃX�N���[��ID
	 * @return true:�w�肳�ꂽ�X�N���[��ID�̃p�l���f�[�^���ۑ�����Ă��� false:�����łȂ��ꍇ
	 */
	protected boolean isPanelSerialized(JCFContext context,String screen_id) throws Throwable {

		boolean rtn = false;

		//serialize���\�b�h�ŕۑ������t���O�̑��݂��m�F���܂��B
		Boolean fgPanelSerialized = (Boolean)getUserData(context,(Object)screen_id);
		if(fgPanelSerialized != null && fgPanelSerialized.booleanValue()){
			rtn = true;
		}
		
		return rtn;
	}

	/** 
	 * YUKIFieldFilledDate�ɓ��͂��ꂽ�l�����������f���܂��B
	 * GregorianCalendar�N���X�Ő������𔻒肵�܂��B
	 * @param date yyyyMMdd�t�H�[�}�b�g�̓��t������
	 * @return true:����l false:�ُ�l
	 */
	protected boolean isValidFilledDate(String date) {

		return isValidFilledDate(true,date);

	}

	/** 
	 * YUKIFieldFilledDate�ɓ��͂��ꂽ�l�����������f���܂��B
	 * GregorianCalendar�N���X�Ő������𔻒肵�܂��B
	 * @param required true:�K�{ false:�K�{�ł͂Ȃ�
	 * @param date yyyyMMdd�t�H�[�}�b�g�̓��t������
	 * @return true:����l false:�ُ�l
	 */
	protected boolean isValidFilledDate(boolean required,String date) {

		boolean rtn = false;

		//null�Ȃ�G���[
		if(date == null){
			return rtn;
		}
		//"/"����
		date = date.replaceAll("/","");
		//6���Ȃ�N���܂łƔ��f����"01"�ǉ�
		if(date.length()==6){
			date += "01";
		}
		//8���łȂ�������
		if(date.length() != 8){
			return rtn;
		}

		//�K�{�łȂ�"00000000"�Ȃ�OK
		if(!required && "00000000".equals(date)){
			return true;
		}
		
		//�Ó��ȓ��t�łȂ�������SMSCheckException����
		SMSDateStringUtil.checkExistDay(date,null,null);

		int fromDate = Integer.parseInt(getValidFromDate());
		int toDate = Integer.parseInt(getValidToDate());

		if(Integer.parseInt(date) >= fromDate &&
		   Integer.parseInt(date) <= toDate){
			rtn = true;
		}
		
		return rtn;
	}

	/** 
	 * �V�X�e���őÓ��Ƃ������t�J�n���v���p�e�B����擾���܂��B
	 * @return �V�X�e���őÓ��Ƃ������t�J�n
	 */
	protected String getValidFromDate() {

		String value = (String)SMSPropsInfos.getProperty(PARAM_VALID_PROP,PARAM_VALID_FROM);
		if("".equals(value)){
			value = "19510101";
		}
		return value;

	}

	/** 
	 * �V�X�e���őÓ��Ƃ������t�I�����v���p�e�B����擾���܂��B
	 * @return �V�X�e���őÓ��Ƃ������t�I��
	 */
	protected String getValidToDate() {

		String value = (String)SMSPropsInfos.getProperty(PARAM_VALID_PROP,PARAM_VALID_TO);
		if("".equals(value)){
			value = "20501231";
		}
		return value;

	}

	/** 
	 * �V�X�e���őÓ��Ƃ������t�J�n�A�I�����v���p�e�B����擾���A���b�Z�[�W�p�Ƀt�H�[�}�b�g���܂��B
	 * @param  obj �uXX�v��YY�`ZZ�͈̔͂œ��͂��Ă��������B�@��XX
	 * @return [0]:�V�X�e���őÓ��Ƃ������t�J�n [1]:�V�X�e���őÓ��Ƃ������t�I��
	 */
	protected String[] getValidDatesMessage(String obj) {

		String[] dates = new String[3];
		
		dates[0] = obj;
		dates[1] = SMSDateStringUtil.conversion(getValidFromDate(),SMSDateStringUtil.YYYYMMDD);
		dates[2] = SMSDateStringUtil.conversion(getValidToDate(),SMSDateStringUtil.YYYYMMDD);

		return dates;

	}

// 2006/12/14 Add start

	/**
	 * �V�X�e���G���[���������������肵�܂��B
	 * @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
	 * @return true�F�V�X�e���G���[�����������@false�F�V�X�e���G���[���������Ă��Ȃ�
	 */
	protected boolean isErrorOccurs(JCFContext context) {
		
		boolean ret = false;
		
		// �A�v���P�[�V�����̈�̃G���[���t���O�Ŕ��f����
		Object errorFlg = context.getApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
		return ret = (errorFlg != null) ? true : false;
	}

// 2006/12/14 Add end

//	/**
//	* ���L�f�[�^�����p�f�[�^�ɃR�s�[���܂��B���p�f�[�^�̃L�[����̓��[�X�P�[�XID���폜����܂��B<br>
//	* ���p�f�[�^�ɓ���L�[�����݂���ꍇ�A�l�͏㏑������܂��B
//	*
//	* @param context �b�i�e�R���e�L�X�g�I�u�W�F�N�g
//	* @param usecaseID ���L�f�[�^�̃L�[����폜����郆�[�X�P�[�XID
//	*/
//	public void copyUserToSucceed(
//		JCFContext context,
//		String usecaseID){
//				
//		SMSCLLog.debug("copyUserToSucceed() start");
//
//		Set dataSet = context.userDataKeySet();
//
//		if(dataSet!=null){
//			Object[] keys = dataSet.toArray();
//	
//			for (int i=0; i<keys.length;i++) {
//				String key = (String) keys[i];
//				//�����[�X�P�[�X�Ȃ�
//				if (key.startsWith(useCaseID)) {
//					key = key.substring(useCaseID.length(),key.length());
//					context.putSucceedData(key,context.getUserData(key));
//				}
//			}
//		}
//
//		SMSCLLog.debug("copyUserToSucceed() end");
//
//	}


}
