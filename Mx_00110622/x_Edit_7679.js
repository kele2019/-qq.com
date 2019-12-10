/**
 * 佣金申请
 */
define("Mysoft.Slxt.Mx_00110622.x_Edit_7679",function (require, exports, module) {

	var _ = require("underscore"),
		mapcontrol = require("mapcontrol"),
		dialog = require("dialog");

    var ns = {

        form:null,

        formId:"x_appForm",

        /**
         *建模事件，页面加载完成
         */
        _pageReady:function() {

            this.form = mapcontrol.get(this.formId);
			 var me = this;
			 var cdate=new Date();
			 var Cyear=cdate.getFullYear();
			 var CMonth=cdate.getMonth()+1;
			 var CDay=cdate.getDate();
			 var CHour=cdate.getHours()+1;
			 var CMinints=cdate.getMinutes()+1;
			 var CSeconde=cdate.getSeconds();
			 var XieyiStr=Cyear+'-'+CMonth+CDay+CHour+CMinints+CSeconde;
			 me.form.setData("x_RequestNo",XieyiStr.replace('-',''));
        },
		_x_appGrid_button_save_click:function(e){
          //var value = e.value;
		  alert("test");
        }	
    }

    module.exports = ns;

});
