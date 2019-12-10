/**
 * 交易客户台账-客户详情
 */
define('Mysoft.Slxt.M00110609.CustomerEdit', function (require, exports, module) {

    var _ = require("underscore"),
        mapcontrol = require("mapcontrol"),
        appform = require("appform"),
        dialog = require('dialog'),
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
            //设置交互明细为编辑
            this.form.setMode("subGrid_s_ReminderList_BusinessGUID", appform.MODE.EDIT);
            var self = this;
            //监听交互明细关闭事件刷新网格
            utility.messageOn(messageEnum.ReminderListEditClosed, function () {
                var grid = self.form.get("subGrid_s_ReminderList_BusinessGUID").getGrid();
                grid.reload();
            });
        },


        // 建模事件，弹出层加载完成事件
        _appGrid3_btn_NewMessage_dialogLoaded: function (e) {


        },

        _appGrid3_mEditRow_beforeOpen: function (e) {

            var title = "";
            var url = "";
            switch (e.data.ReminderTypeEnum) {
                case 5:     //短信
                    url = '/std/00110609/fe1a83c0-17ec-11e6-b366-4437e6cc96ba.aspx';
                    title = "{##[lang:TradeMng_ReminderType_0005]##}";
                    break;
                case 6:     //电话
                    url = '/std/00110609/3ddcd57b-1831-11e6-b366-4437e6cc96ba.aspx';
                    title = "{##[lang:TradeMng_ReminderType_0006]##}";
                    break;
                case 7:     //信函
                    url = '/std/00110609/d6baae88-1835-11e6-b366-4437e6cc96ba.aspx';
                    title = "{##[lang:TradeMng_ReminderType_0007]##}";
                    break;
                case 8:     //会面
                    url = '/std/00110609/e9742f3f-1837-11e6-b366-4437e6cc96ba.aspx';
                    title = "{##[lang:TradeMng_ReminderType_0008]##}";
                    break;
            }
            var param = { mode: 2, oid: e.data.ReminderListGUID };
            e.options.url = utility.buildUrl(url, param);
            e.options.title = title;
        }



    }

    module.exports = ns;

});
