/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var quickstart;
(function (quickstart) {
    /**
     * This class is used within the webapp/index.html file.
     * @class
     * @extends quickstart.Ex
     */
    class QuickStart extends quickstart.Ex {
        static main(args) {
            console.info("Hello, World!");
        }
        compareDate(date1, date2) {
            const aaa = 0;
            if (date1 === QuickStart.ID_GAMEN) {
                switch ((aaa)) {
                    case 1:
                        if (date2 == null) {
                            return 0;
                        }
                        return 1;
                    case 2:
                        if (date2 == null) {
                            return 0;
                        }
                        break;
                    case 3:
                        if (date2 == null) {
                            return 0;
                        }
                        break;
                    case 4:
                        if (date2 == null) {
                            return 0;
                        }
                        return -1;
                    default:
                }
            }
            return 1;
        }
    }
    QuickStart.ID_GAMEN = "YSDBSSF412S";
    quickstart.QuickStart = QuickStart;
    QuickStart["__class"] = "quickstart.QuickStart";
})(quickstart || (quickstart = {}));
quickstart.QuickStart.main(null);
