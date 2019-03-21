export  default {
  install(Vue,options){
    /**
     * 判断是否为空
     * @param Value
     * @returns {boolean}
     */
    Vue.prototype.isEmpty = function (Value) {
      return (null == Value || undefined == Value || "" == Value.trim()
        || "undefined" == Value.trim() || "null" == Value.trim()
        || "\"null\"" == Value.trim());
    };

    /**
     * 替换值
     * 如果传入值为空 ，返回替换值，否则返回传入值
     * @param value
     * @param relacevalue
     * @returns {*}
     */
    Vue.prototype.isNull = function (value,relacevalue) {
      return this.isEmpty(value) ? relacevalue : value
    }

  }
}
