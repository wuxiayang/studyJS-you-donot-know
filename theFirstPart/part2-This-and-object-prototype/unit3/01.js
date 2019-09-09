// 有一个列表['aababbc','badabcab']，去除列表中的‘ab’；需要同样适配其他同类列表，例如['aaababbbc','badabcab']
function splitAB(array){
   if (array.length>0){
    array.forEach(
      function(value,i,array){
        n=(value.split('a')).length;
        m=(value.split('b')).length;
        average=parseInt((m+n)/2);
        array[i]=double(value,average);
        return array;
      }
    );
    return array;
  }
}
function double(value,average){
  if(average>1){
    value1 = value.replace(/ab/g,"");
    double(value1,--average);
    return  value1
  }
}
var list=['aababbc','badabcab'];
// var list=['aaababbbc','badabcaba'];
splitAB(list);
console.log(list);