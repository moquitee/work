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
			valid_arr.push(i)
		}
	}
	return valid_arr;
};

shop.my_some = function(arr,value){
	if ( arr[0] == null ){
		return false
	}
	
	for ( let i = 0 ; i < arr.length ; i++){
		if ( arr[i].icon_name == value ){
			return true
		}
	}
};

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