import Mock from "mockjs"
Mock.mock("mock/bannerPicture","get",()=>{
  return{
    success: true,
    "bannerPicture":[
              'https://kui.kingdee.com/kd/api/static/banner/product/ea09dfdb6b73f2f90732516a7636437f.svg',
              'https://kui.kingdee.com/kd/api/static/banner/product/bfae66a456c3aa2da58d4cf50b56ec9a.svg',
              'https://kui.kingdee.com/kd/api/static/banner/product/7ee6766e03bbb6e2fdacec19da6d8e8b.svg']
  }
});