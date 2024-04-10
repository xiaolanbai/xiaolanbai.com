---
layout: doc
# nav: false
---

<!-- ### 关于我
我是一只小蓝白
### 联系我
> [!TIP]Email
> hello@xiaolanbai.com -->

# 我们的团队

跟我们的超棒团队打个招呼吧。

<VPTeamMembers size="small" :members="members" />


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/image/avatar/xiaolanbai.jpg',
    name: '小蓝白',
    title: 'xiaolanbai',
    links: [
      { icon: 'github', link: 'https://github.com/xiaolanbai' },

    ]
  },
  {
    avatar: '/image/avatar/xiaomiao.jpg',
    name: '小喵',
    title: 'xiaomiao',
    links: [
    //   { icon: 'github', link: 'https://github.com/xiaolanbai' },
    ]
  },
]
</script>
