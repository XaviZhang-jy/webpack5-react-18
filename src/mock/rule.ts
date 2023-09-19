import Mock from "mockjs"
Mock.mock("mock/ruleData","get",()=>{
    return {
        success: true,
        "ruleData":[
            {
                title: '各种页面视觉标注,一键查看',
                changeUrl: 'https://kingdee.design/pc/page/workbench/workbench',
                changeText: '查看所有页面标注',
                rulePicture: "https://kingdee.design/static/rule-info-image.ab588246.svg",
            },
            {
                title: '基于 React 的高代码实现，开源共享',
                changeUrl: 'https://pro.kingdee.design/',
                changeText: '查看 KDesign React Pro',
                rulePicture: "https://kingdee.design/static/rule-develop-image.e014d5b4.svg",
            }
        ]
    }
});