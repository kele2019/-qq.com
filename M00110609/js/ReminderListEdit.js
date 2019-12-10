/**
 * 交互明细-表单页面
 */
define('Mysoft.Slxt.M00110609.ReminderListEdit', function (require, exports, module) {

    var _ = require("underscore"),
		mapcontrol = require("mapcontrol"),
		dialog = require('dialog'),
        appservice = require('Mysoft.Slxt.TradeMng.AppServices.CstLedgerAppService'),
        lang = require("Mysoft.Slxt.TradeMngLangRes"),
	    utility = require("utility");

    var messageEnum = {
        "ReminderListEditClosed": "Mysoft.Slxt.M00110609.ReminderListEdit.FormClosed"
    }

    var ns = {
        form: null,
        formId: 'appForm',
        /**
         *建模事件，页面加载完成
         */
        _pageReady: function () {
            this.form = mapcontrol.get(this.formId);
            this.form.setSubmitService('Mysoft.Slxt.TradeMng.AppServices.CstLedgerAppService');
            this.form.setSubmitAction('SaveSmsMessage');
        },
        // 建模事件，表单加载完成事件
        _appForm_load: function (e) {

        },
        // 建模事件，保存并发送点击事件
        _appForm_mSave_click: function (e) {
            return this.saveEvent();
        },
        // 建模事件，保存并关闭点击事件
        _appForm_msaveadnclose_click: function (e) {
            return this.saveEvent();
        },
        //保存
        saveEvent: function () {
            var self = this;
            this.urlParams = utility.getUrlParams();
            var dfd = $.Deferred();
            if (self.form.validate() && this.saveEventValidate()) {
                dfd.resolve();
            } else {
                dfd.reject();
            }
            return dfd.then(function () {
                var saveData = self.form.populateSaveData();
                return appservice.SaveSmsMessage(saveData, [self.urlParams.BUGUID, self.urlParams.ProjGUID]);
            }).then(function (reminderGuid) {
                dialog.tipSuccess(lang.TradeMngCommonSaveSuccess /*'保存成功'*/);
                //触发关闭事件
                utility.messageTrigger(messageEnum.ReminderListEditClosed, null);
                self.form.resetChangeState();
                utility.closeOwnerDialog();
                return reminderGuid;
            });
        },
        //保存前校验
        saveEventValidate: function () {
            var tel = this.form.getData("Tel");
            if (tel.length < 7 || tel.length > 15 || !_.isFinite(tel)) {
                dialog.tipAlert(lang.TradeMngJs0020/*手机规则不正确！*/);
                return false;
            }

            return true;
        }
    }

    module.exports = ns;

});
