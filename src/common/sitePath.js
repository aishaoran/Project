/**
 * 网站路径的相关方法
 * */
//获得路劲第一个'/'后面的字符串
export function getPathSplitArray(path){
  return path.split('/').slice(1)
}
//当路径文件夹多一级的话,判断第一级的文件夹路径,若是多一级就将第二级赋给顶部导航,第三级赋给左边导航
export function getUserSitePosition(pathArr){
  var left,top;
  if(pathArr[0]=='insight'){
    left = pathArr.slice(2)
    top = pathArr[1]
  }else{
    left = pathArr.slice(1)
    top = null;
  }
  return {
    left,
    top
  }
}
