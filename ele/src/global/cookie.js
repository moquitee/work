/*在文件的开始先定义一个对象*/
const cookie = {}
// 要全局变量的话
// cookie.name = "张三"

// 定义方法
cookie.set = function ( name , value , days ){
	let d = new Date;
	d.setTime(d.getTime() + 24*60*60*1000*days );
	window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString();
};

cookie.get = function ( name ){
	var strcookie = document.cookie;//获取cookie字符串
	var arrcookie = strcookie.split("; ");//分割
	//遍历匹配
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name){
			return arr[1];
		}
	}
	return "";
};

cookie.del = function ( name ){
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval = cookie.get(name); 
    if(cval!=null){ 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
	}
}; 


export default cookie