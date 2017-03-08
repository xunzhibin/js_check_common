/**
 * check共同 （变量类型、正整形、最小长度、最大长度) start
 *
 **/
var is ={
    //types : ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
    //字符串类型、数字类型、数组、布尔类型、对象、时间、正则、函数
    types : ["String", "Number", "Array", "Boolean", "Object", "Date", "RegExp", "Function"],

    //检测是否为 正整数
    PositiveInteger : function (mixed)
    {
        if(!is.String && !is.Number(mixed))
        {
            console.log("It is not the number and stirng...");

            return false;
        }

        var num_str = is.String(mixed) ? mixed.trim() : String(mixed);

        var reg = new RegExp(/^[1-9]\d*$/);

        return reg.test(num_str);
    },

    //检查 最小长度
    MinLength : function (mixed, length)
    {
        if(!is.PositiveInteger(length))
        {
            console.log("The value of length  is not the positive integer...");

            return false;
        }

        return (get.Length(mixed) >= length);
    },

    //检查 最大长度
    MaxLength : function (mixed, length)
    {
        if(!is.PositiveInteger(length))
        {
            console.log("The value of length  is not the positive integer...");

            return false;
        }

        return (get.Length(mixed) <= length);
    }
};

//check变量类型
for(var i = 0, c; c = is.types[i ++ ]; )
{
    is[c] = (function(type){
        return function(obj)
        {
           return Object.prototype.toString.call(obj) == "[object " + type + "]";
        }
    })(c);
}

/**
 *
 * check共同 (变量类型、正整形、最小长度、最大长度) end
 *
 **/



/**
 *
 * 获取共同 (长度) start 
 *
 **/
var get = {
    Length : function (mixed)
    {
        var length_int = 0;

        if(is.String(mixed) || is.Array(mixed))
        {
            length_int = mixed.length;
        }
        else if(is.Number(mixed))
        {
            length_int = String(mixed).length;
        }
        else if(is.Object(mixed))
        {
            length_int = Object.keys(mixed).length;
        }

        return length_int;
    }
};
/**
 *
 * 获取共同 (长度) end
 *
 **/

/**
 *
 * 去除字符串前后空格(全角、半角)
 *
 * @param string str 去除前后空格的字符串变量
 *
 * @return string
 *
 **/
function trim(str)
{
    //去除字符串前的空格
	str = str.replace(/^(\s|[\u3000])*/g, "");
    //去除字符串后的空格
	str = str.replace(/(\s|[\u3000])*$/g, "");

	return str;
}

