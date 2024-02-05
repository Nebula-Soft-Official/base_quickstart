/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace quickstart {
    export class Tran {
        static SHIKAKARIHIN_MEISAI_CBMMSG_LIST: any = null;

        static QT_SHIKAKARI_JURYO: any = null;

        static IF_TANI: any = null;

        public shokika() {
            try {
                if (/* equals */(<any>((o1: any, o2: any) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(this.showMessage(quickstart.SMSMessageConst.YPMSGSMCC009, null, true),quickstart.JCFMessageOnWindow.BTN_YES)) === true){
                    if (!this.isChkJokenData()){
                        this.jokenDataChange();
                    }
                    const saveData: any[] = this.getSaveData();
                    const saveJuryo: string[] = this.getSaveJuryo();
                    const gyomuMap: any = <any>({});
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>gyomuMap, Tran.SHIKAKARIHIN_MEISAI_CBMMSG_LIST, saveData);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>gyomuMap, Tran.QT_SHIKAKARI_JURYO, saveJuryo[0]);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>gyomuMap, Tran.IF_TANI, saveJuryo[1]);
                    this.createSpreadData(gyomuMap);
                }
            } catch(th) {
            }
        }

        /*private*/ showMessage(ypmsgsmcc009: string, object: any, b: boolean): any {
            return null;
        }

        /*private*/ getSaveJuryo(): string[] {
            return null;
        }

        /*private*/ createSpreadData(gyomuMap: any) {
        }

        /*private*/ getSaveData(): any[] {
            return null;
        }

        /*private*/ jokenDataChange() {
        }

        /*private*/ isChkJokenData(): boolean {
            return false;
        }
    }
    Tran["__class"] = "quickstart.Tran";

}

