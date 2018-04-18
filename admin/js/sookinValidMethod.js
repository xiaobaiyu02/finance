var valid = function (method, val){
	if(method === "_6_2w"){
		//6-20个字母、数字、下划线
		var patrn=/^(\w){6,20}$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	else if(method === "notNull"){
		if(val !== undefined){
			if(val.length > 0){
				return true;
			}
			return false;
		}
		return false;
	}
	

	//邮箱地址
	else if(method === "email"){
		var patrn=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//网站地址
	else if(method === "url"){
		var patrn=/^(\w+:\/\/)?\w+(\.\w+)+$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//手机号码
	else if(method === "mobile"){
		var patrn=/^13[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//任意汉字
	else if(method === "s"){
		var patrn=/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/m;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//6-16位汉字
	else if(method === "s6_16"){
		var patrn=/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,16}$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//任意数字
	else if(method === "num"){
		var patrn=/^\d+$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//6-18位数字
	else if(method === "n6_16"){
		var patrn=/^\d{6,16}$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//任意字符
	else if(method === "all"){
		var patrn=/.+/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	//6-16位字符
	else if(method === "all6_16"){
		var patrn=/^.{6,16}$/;
		if (!patrn.test(val)) return false;
		return true;
	}
	
	
	else{
		return false;
	}
}

