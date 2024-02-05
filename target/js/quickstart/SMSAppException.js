/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    class SMSAppException extends quickstart.SMSException {
        constructor(messageCode, detail) {
            if (((typeof messageCode === 'string') || messageCode === null) && ((detail != null && detail instanceof Array && (detail.length == 0 || detail[0] == null || (typeof detail[0] === 'string'))) || detail === null)) {
                let __args = arguments;
                super(messageCode, detail);
                if (this.cdErrorKoumoku === undefined) {
                    this.cdErrorKoumoku = null;
                }
                if (this.qtErrorRecordPosition === undefined) {
                    this.qtErrorRecordPosition = null;
                }
                if (this.nmErrorColumn === undefined) {
                    this.nmErrorColumn = null;
                }
                if (this.fgPopup === undefined) {
                    this.fgPopup = null;
                }
                this.cdErrorKoumoku = "";
                this.qtErrorRecordPosition = "";
                this.nmErrorColumn = "";
                this.fgPopup = true;
            }
            else if (((typeof messageCode === 'string') || messageCode === null) && detail === undefined) {
                let __args = arguments;
                super(messageCode);
                if (this.cdErrorKoumoku === undefined) {
                    this.cdErrorKoumoku = null;
                }
                if (this.qtErrorRecordPosition === undefined) {
                    this.qtErrorRecordPosition = null;
                }
                if (this.nmErrorColumn === undefined) {
                    this.nmErrorColumn = null;
                }
                if (this.fgPopup === undefined) {
                    this.fgPopup = null;
                }
                this.cdErrorKoumoku = "";
                this.qtErrorRecordPosition = "";
                this.nmErrorColumn = "";
                this.fgPopup = true;
            }
            else
                throw new Error('invalid overload');
        }
        getCdErrorKoumoku() {
            return this.cdErrorKoumoku;
        }
        setCdErrorKoumoku(cdErrorKoumoku) {
            this.cdErrorKoumoku = cdErrorKoumoku;
        }
        getNmErrorColumn() {
            return this.nmErrorColumn;
        }
        getQtErrorRecordPosition() {
            return this.qtErrorRecordPosition;
        }
        setNmErrorColumn(nmErrorColumn) {
            this.nmErrorColumn = nmErrorColumn;
        }
        setQtErrorRecordPosition(qtErrorRecordPosition) {
            this.qtErrorRecordPosition = qtErrorRecordPosition;
        }
        getFgPopup() {
            return this.fgPopup;
        }
        setFgPopup(fgPopup) {
            this.fgPopup = fgPopup;
        }
    }
    quickstart.SMSAppException = SMSAppException;
    SMSAppException["__class"] = "quickstart.SMSAppException";
})(quickstart || (quickstart = {}));
