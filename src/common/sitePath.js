/**
 * 网站路径的相关方法
 * */
//获得路劲第一个'/'后面的字符串
export function getPathSplitArray(path){
  return path.split('/').slice(1)
}
