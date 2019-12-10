
/**
*  AppService代理类
* @author 本代码由代码生成器自动生成，请不要手工调整
*/
define("Mysoft.Slxt.TradeMng.AppServices.CstLedgerAppService", function (require, exports, module) {
    var utility = require("utility");

    var service = "Mysoft.Slxt.TradeMng.AppServices.CstLedgerAppService";

    var ns = {
        /**
         * 
         * @param  
         */
        SaveSmsMessage: function (form, customData) {
            return utility.ajax({
                service: service,
                action: "SaveSmsMessage",
                data: {
                    form: form,
                    customData: customData
                }
            });
        }
    };
    module.exports = ns;
});