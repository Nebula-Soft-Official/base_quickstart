/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    /**
     * This class is used within the webapp/index.html file.
     * @class
     * @extends quickstart.Ex
     */
    export class QuickStart extends quickstart.Ex {
        static ID_GAMEN: string = "YSDBSSF412S";

        public static main(args: string[]) {
            console.info("Hello, World!");
        }

        public compareDate(date1: string, date2: number): number {
            const aaa: number = 0;
            if (date1 === QuickStart.ID_GAMEN){
                switch((aaa)) {
                case 1:
                    if (date2 == null){
                        return 0;
                    }
                    return 1;
                case 2:
                    if (date2 == null){
                        return 0;
                    }
                    break;
                case 3:
                    if (date2 == null){
                        return 0;
                    }
                    break;
                case 4:
                    if (date2 == null){
                        return 0;
                    }
                    return -1;
                default:
                }
            }
            return 1;
        }
    }
    QuickStart["__class"] = "quickstart.QuickStart";

}


quickstart.QuickStart.main(null);
