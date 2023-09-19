import Mock from "mockjs"
Mock.mock("mock/itemProps","get",()=>{
  return{
    success: true,
    "itemProps":
    [
      {
        backgroundImage: "url('https://kingdee.design/static/design1.85c948bd.svg')",
        firstTitle: "设计规范",
        secondTitle: "企业级产品设计规范，提升产品体验的一致性",
        itemTitles: ["PC端", "移动端", "可视化"],
        itemDetails: [
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-rule1.6eafb556.svg",
              itemDetailText: "PC组件设计规范",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-rule2.23970ac1.svg",
              itemDetailText: "PC典型页面",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-rule3.8b19d42d.svg",
              itemDetailText: "移动组件设计规范",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-rule4.ee94af7c.svg",
              itemDetailText: "移动典型页面",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-rule5.6a9d6e86.svg",
              itemDetailText: "可视化概览",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-rule6.686b17c5.svg",
              itemDetailText: "可视化组件设计",
            },
          ],
        ],
      },
      {
        backgroundImage: "url('https://kingdee.design/static/design3.89f257b9.svg')",
        firstTitle: "设计资源",
        secondTitle: "KDesign 组件资源，帮助你创造优秀的产品设计",
        itemTitles: ["PC端", "移动端", "通用资源"],
        itemDetails: [
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-resources1.e837a83f.svg",
              itemDetailText: "Sketch 组件",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-resources2.addf9ce4.svg",
              itemDetailText: "Axure 组件",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-resources1.e837a83f.svg",
              itemDetailText: "Sketch 组件",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-resources2.addf9ce4.svg",
              itemDetailText: "Axure 组件",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/design-resources5.2ce4437f.svg",
              itemDetailText: "图标资源",
            },
            {
              itemDetailImg: "https://kingdee.design/static/design-resources6.7e17ffed.svg",
              itemDetailText: "插画资源",
            },
          ],
        ],
      },
      {
        backgroundImage: "url('https://kingdee.design/static/design2.5736fcc6.svg')",
        firstTitle: "开发资源",
        secondTitle: "组件用于更快速、更简便的 Web 开发",
        itemTitles: ["PC端", "可视化", "通用资源"],
        itemDetails: [
          [
            {
              itemDetailImg: "https://kingdee.design/static/development-resources1.9249987c.svg",
              itemDetailText: "React 组件库",
            },
            {
              itemDetailImg: "https://kingdee.design/static/development-resources2.53a08a34.svg",
              itemDetailText: "KDesign Pro",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/development-resources3.8e64b442.svg",
              itemDetailText: "可视化图表组件库",
            },
            {
              itemDetailImg: "https://kingdee.design/static/development-resources4.e02e3eba.svg",
              itemDetailText: "可视化大屏脚手架",
            },
          ],
          [
            {
              itemDetailImg: "https://kingdee.design/static/development-resources5.bf5730ce.svg",
              itemDetailText: "React SVG 图标库",
            },
            {
              itemDetailImg: "https://kingdee.design/static/development-resources6.fff8aad8.svg",
              itemDetailText: "Vue SVG 图标库",
            },
          ],
        ],
      }
    ]
  }
});
