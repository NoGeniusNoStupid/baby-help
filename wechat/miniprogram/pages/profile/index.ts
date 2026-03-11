interface ToolItem {
  title: string
  subtitle: string
}

Page({
  data: {
    activeNav: 'profile',
    name: '家长用户',
    stats: [
      { label: '发布需求', value: 12 },
      { label: '沟通中', value: 4 },
      { label: '已完成', value: 8 },
    ],
    tools: [
      { title: '我的需求', subtitle: '查看发布与状态进度' },
      { title: '我的收藏', subtitle: '收藏的托管班与服务方' },
      { title: '联系记录', subtitle: '沟通历史一键回看' },
      { title: '平台客服', subtitle: '人工客服 09:00-21:00' },
    ] as ToolItem[],
  },
  onTapTool(event: WechatMiniprogram.BaseEvent) {
    const title = String(event.currentTarget.dataset.title)
    wx.showToast({
      title: `${title}功能已就绪`,
      icon: 'none',
    })
  },
  onGoPublish() {
    wx.navigateTo({ url: '/pages/publish/index' })
  },
  onSwitchTab(event: WechatMiniprogram.BaseEvent) {
    const key = String(event.currentTarget.dataset.key)
    if (key === 'profile') {
      return
    }
    wx.reLaunch({ url: `/pages/${key}/index` })
  },
})
