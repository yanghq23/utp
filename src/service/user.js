import { doGet,doPost } from '@/lib/utils/request'


const url = 'http://localhost:8088/'

export const getHeSuanXMList = (params) => {
  //mock测试
  return doGet(url + 'heSuanXM',params);
}
