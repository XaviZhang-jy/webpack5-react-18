import Mock from "mockjs"
Mock.mock("mock/footerMain/data","get",()=>{
  return{
  success: true,
  "footerMainData": [
    {id:'1',url:'https://www.kingdee.com/',content:'金蝶官网'},
    {id:'2',url:'https://dev.kingdee.com/',content:'开发者门户'},
    {id:'3',url:'https://club.kdcloud.com/ifinclub/56403552855748352',content:'开发者社区'},
    {id:'4',url:'https://vip.kingdee.com/school',content:'金蝶学习与成长中心'},
    {id:'5',url:'https://kingdee.design/footer/page/protocol',content:'用户协议'},
    {id:'6',url:'https://account.kdcloud.com/privacy?id=3515729708820185088',content:'金蝶中国隐私政策'}]
  }
});