import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  // 站点级选项

  title: "一只小蓝白",

  description: "This is xiaolanbai.com",
  themeConfig: {
    // 主题级选项
    logo: '/image/base/logo.svg',

    // Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。
    nav: [
      { text: '主页', link: '/' },
      {
        text: '文档',
        link: '/wd/',
        // 当前页面位于匹配路径下时，导航菜单项将突出显示。
        // 如果想自定义要匹配的路径，请将 activeMatch 属性和正则表达式定义为字符串值。
        activeMatch: '/wd/'
      }
    ],

    sidebar: {
      '/demo/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/demo/markdown-examples' },
            { text: 'Runtime API Examples', link: '/demo/api-examples' }
          ]
        }
      ],
      // 当用户位于 `wd` 目录时，会显示此侧边栏
      '/wd/': [
        { text: '开始', link: '/wd/' },
        {
          text: '服务器',
          items: [
            { text: 'Linux服务器', link: '/wd/linux' },
            { text: 'Runtime API Examples', link: '/demo/api-examples' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细列表',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaolanbai' }
    ],
    footer: {
      message: '一只小蓝白 Copyright © 2023',
      copyright: `
      <a href="http://beian.miit.gov.cn">鲁ICP备2020045959号-2</a>
       <img src="/image/base/jinghui.png" style="display: inline;width: 18px;height: 18px;vertical-align: middle;margin-left: 10px;" alt="示例图片">
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37172302372086">
          鲁公网安备37172302372086号
        </a>
      `,
    },
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/xiaolanbai/xiaolanbai.com/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    // 自定义出现在上一页和下一页链接上方的文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: "主题模式",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
  },
})
