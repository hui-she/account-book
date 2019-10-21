/**
 * 去掉所有的空格 针对input中的值
 */
export const replaceAllSpace = (str) => {
    str = str.replace(/\s*/g, "");
    return str;
};
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== "string") {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    var value = window.localStorage.getItem(name);
    if (value !== null) {
        try {
            value = JSON.parse(value);
        } catch (err) {
            console.log(err);
        }
    }
    return value;
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
};
/**
 * 判断设备类型
 **/
export const getDevType = () => {
    let getUa = navigator.userAgent.toLowerCase();
    let devType = "2";
    let regExp = /(iPhone|iPod|iTouch|iOS|ipad)/i;
    if (regExp.test(getUa)) {
        devType = "1"; // ios
    } else {
        devType = "2"; // android
    }
    return devType;
};
/**
 * 获取地址栏参数
 **/
export const getParam = (paraName) => {
    let url = document.location.toString();
    let arrObj = url.split("?");
    if (arrObj.length > 1) {
        let arrPara = arrObj[1].split("&");
        let arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return "";
    }else {
        return "";
    }
}
/**
 * 获取指定时间
 * type: monthStart,monthEnd,weekStart,weekEnd,year
 * timestamp:Boolean
 */
export const getAppointTime = (type) => {
    let date = new Date();
    // 本周一的日期
    date.setDate(date.getDate() - date.getDay() + 1);
    let begin = date;
  
    // 本周日的日期
    date.setDate(date.getDate() + 6);
    let end = date;
    // console.log(begin,end)
    
    let nowYear = date.getFullYear(); //当前年 
    let nowMonth = date.getMonth(); //当前月 
    //本月的开始时间
    let monthStartDate = new Date(nowYear, nowMonth, 1); 
    //本月的结束时间
    let monthEndDate = new Date(nowYear, nowMonth+1, 0);

    switch (type){
        case "monthStart" :
            return {
                tip: getFullDate(monthStartDate),
                timestamp: monthStartDate
            };
        case "monthEnd" :
            return {
                tip: getFullDate(monthEndDate),
                timestamp: monthEndDate
            };
        case "weekStart" :
            return {
                tip: getFullDate(begin),
                timestamp: begin
            };
        case "weekEnd" :
            return {
                tip: getFullDate(end),
                timestamp: end
            };
        case "year" :
            return {
                tip: `${nowYear}年`,
                timestamp: ''
            };
        default :
            return "";
    }
};

/**
 * 调整时间格式
 */
export const getFullDate = (targetDate)=> {
        let D, m, d;
        if (targetDate) {
            D = new Date(targetDate);
            m = D.getMonth() + 1;
            d = D.getDate();
        }
        m = m > 9 ? m : '0' + m;
        d = d > 9 ? d : '0' + d;
        return m + '月' + d + "日";
    };