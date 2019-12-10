/**
 * 订单信息查询列表
 */
define("Mysoft.Slxt.Mx_00110622.x_List_7261",function (require, exports, module) {

	var _ = require("underscore"),
		mapcontrol = require("mapcontrol"),
		dialog = require("dialog");

    var ns = {

        grid:null,

        gridId:"x_appGrid",

        /**
         *建模事件，页面加载完成
         */
        _pageReady:function() {

            this.grid = mapcontrol.get(this.gridId);
			
        },
		//调用保存按钮
        _x_appGrid_button_save_click:function(e){
          //var value = e.value;
		  alert("请调用后台方法");
        }		
    }

    module.exports = ns;

});
