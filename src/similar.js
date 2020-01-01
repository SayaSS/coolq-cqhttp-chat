var LevenshteinDistance = {
    _str1:null,
    _str3:null,
    _matrix:null,
    _isString:function(s){
        return Object.prototype.toString.call(s) === '[object String]';
    },
    _isNumber:function(s){
        return Object.prototype.toString.call(s) === '[object Number]';
    },
    init:function(str1,str2){
        if(!this._isString(str1) || !this._isString(str2)) return;
        this._str1 = str1;
        this._str2 = str2;
        str1.length &&  str2.length && this._createMatrix(str1.length+1,str2.length+1);
        this._matrix && this._initMatrix();
        return this;
    },
    get:function(){
        return 1 - this._getDistance()/Math.max(this._str1.length,this._str2.length);
    },
    //计算编辑距离
    _getDistance:function(){
        var len1 = this._str1.length,
            len2 = this._str2.length;
        if(!len1 || !len2) return Math.max(len1,len2);
        var str1 = this._str1.split(''),
            str2 = this._str2.split('');
        var i = 0,j = 0,temp = 0;
        while(i++ < len1){
            j = 0;
            while(j++ < len2){
                temp = str1[i-1] === str2[j-1] ? 0 : 1;
                this._matrix[i][j] = Math.min(this._matrix[i-1][j]+1,this._matrix[i][j-1]+1,this._matrix[i-1][j-1]+temp);
            }
        }
        return this._matrix[i-1][j-1];
    },
    /*
     * 初始化矩阵
     * 为第一行、第一列赋值
     */
    _initMatrix:function(){
        var cols = this._matrix[0].length,
            rows = this._matrix.length;
        var l = Math.max(cols,rows);
        while(l--){
            cols-1 >= l && (this._matrix[0][l] = l);
            rows-1 >= l && (this._matrix[l][0] = l);
        }
    },
    /*
     * 创建矩阵
     * n:行
     * m:列
     */
    _createMatrix:function(n,m){
        if(!this._isNumber(n) || !this._isNumber(m) || n<1 || m<1) return;
        this._matrix = new Array(n),i = 0;
        while(i<n) this._matrix[i++] = new Array(m);
    }
}

module.exports={
    LevenshteinDistance
};