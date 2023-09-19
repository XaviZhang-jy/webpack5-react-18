import Mock from "mockjs"
Mock.mock("mock/navTitles","get",()=>{
  return{
    success: true,
    "navTitles":
      ['首页', '全局规则', '设计规范', '开发', '资源']
  }
});
Mock.mock("mock/version","get",()=>{
  return {
  success: true,
  "version":'v 2.0.0',
  }
});