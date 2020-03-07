import cookie from '../global/cookie.js';

/*在文件的开始先定义一个对象*/
const shop = {};
// 要全局变量的话
// shop.name = "张三"

// 定义方法
shop.screen_valid_data = function(arr){
	let valid_arr = [];
	for( let i = 0 ; i < arr.length ; i++ ){
		if ( arr[i].foods.length ){
			valid_arr.push( arr[i] )
		}
	}
	return valid_arr;
};

shop.my_some = function(arr,key,value,index = false ){
	if ( arr[0] == null ){
		return false
	}
	
	for ( let i = 0 ; i < arr.length ; i++){
		if ( arr[i][key] == value ){
			if ( index != null ){
				return i
			}
			else{
				return true
			}
		}
	}
	
	return false
};

// 辅助函数 取两个数组的交集
shop.intersection = function ( arr1 , arr2 ){
	var arr = [];
			
		for(var i=0;i<arr1.length;i++){
			
			for(var j=0;j<arr2.length;j++){
			
				if(arr1[i] === arr2[j]) {
					arr.push(arr1[i])
					arr2[j]=null;
					break;
				}
			
			}
			
		}
		
	return arr;
};

/* 辅助函数 将两个object 合并成一个 仅此类object=>
obj1 = { 1:{3:{2:8}}}
obj2 = { 1:{4:{3:5}}}

输出 { 1:{ 3:{2:8} , 4:{3:5}} }
*/
shop.combinate = function ( obj1 , obj2 ){
	let keys1 = Object.keys(obj1);
	let keys2 = Object.keys(obj2);
	window.console.log('obj1')
	window.console.log(obj1)
	window.console.log('obj2')
	window.console.log(obj2)
	let intersection = shop.intersection( keys1 , keys2 )
	if ( intersection.length && intersection.length == 1 ){
		obj1[intersection[0]] = shop.combinate( obj1[intersection[0]] , obj2[intersection[0] ] )
	}
	else{
		return { ...obj1 , ...obj2 }
	}
	
	return obj1
}

// 辅助函数 数组求和
shop.sum = function ( arr ){
	let result = 0;
	for ( let i = 0 ; i < arr.length ; i++ ){
		result += arr[i]
	}
	if ( typeof(result) === 'number'){
		return result
	}
	else {
		window.console.log('function->sum() throw an type error , please make sure the array containing the number only ')
	}
}

// 辅助函数 挖掘object对象中 返回含有key的值的一个数组
// 如果value,find_key 定义了，则返回含有key的object且value也对应且object里有find_key的值 提取组成的一个数组
shop.deep_search_match = function ( obj , key , value = undefined , find_key = undefined ){
	let arr = [];
	
	if ( value != undefined && find_key != undefined ){
		(function f(obj){
			if ( obj[key] && obj[key] == value && obj[find_key] != null ){
				arr.push(obj[find_key])
			}
			
			for ( let i in obj ){
				if ( typeof(obj[i]) === 'object'){
					f(obj[i])
				}
			}
		})()
	}
	else {
		(function g(obj){
			if ( obj[key] != null ){
				arr.push(obj[key])
			}
			for ( let i in obj ){
				if ( typeof(obj[i]) === 'object' ){
					g(obj[i])
				}
			}
		})(obj)		
	}
	
	return arr
}

// 辅助函数 将一个object,第一层转换成一个数组
// obj = { b:1,c:2}
// 返回 array = [ { b:1 }, { c:2 } ]
shop.obj_to_arr = function (obj){
	let arr = [];
	for ( let i in obj ){
		arr.push({ [i]:obj[i] })
	}
	
	window.console.log(arr)
	return arr
}


shop.add_order = function ( food_id , anObject , days ){
	if ( cookie.get(food_id) ){
		let newObject = JSON.parse(cookie.get(food_id))
		newObject.order_num += 1
		cookie.set( food_id , JSON.stringify(newObject) , days )
	}
	else {
		cookie.set( food_id , JSON.stringify(anObject) , days )
	}
}


shop.reduce_order = function ( food_id , anObject , days ){
	if ( JSON.parse(cookie.get(food_id)).order_num > 1){
		let newObject = JSON.parse(cookie.get(food_id))
		newObject.order_num -= 1
		cookie.set( food_id , JSON.stringify(newObject) , days )
	}
	else {
		cookie.del( food_id )
	}
}


shop.get_valid_img_url = function ( url ){
	let valid_url = '';
	if ( url ){
		valid_url = url.substring(0,1) + '/' + url.substring(1,3) + '/' + url.substring(3)
	}
	return valid_url
}



export default shop