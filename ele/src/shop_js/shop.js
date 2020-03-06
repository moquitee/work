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
			if ( index ){
				return i
			}
			else{
				return true
			}
		}
	}
	
	return false
};

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