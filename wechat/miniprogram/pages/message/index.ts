interface ChatItem {
  id: string
  title: string
  initial: string
  content: string
  time: string
  unread: number
}

Page({
  data: {
    activeNav: 'message',
    hasMessages: true,
    chats: [
      {
        id: 'm1',
        title: '星光课后托管中心',
        initial: '星',
        content: '您好，17:30后可提供延时托管，欢迎预约到店参观。',
        time: '10:21',
        unread: 2,
      },
      {
        id: 'm2',
        title: '接送专员 · 李老师',
        initial: '李',
        content: '今天路线已确认，放学后会发送实时到达提醒。',
        time: '昨天',
        unread: 0,
      },
    ] as ChatItem[],
  },
  onToggleMockMode() {
    this.setData({ hasMessages: !this.data.hasMessages })
  },
  onTapChat(event: WechatMiniprogram.BaseEvent) {
    const title = String(event.currentTarget.dataset.title)
    wx.showToast({
      title: `进入与${title}的会话`,
      icon: 'none',
    })
  },
  onSwitchTab(event: WechatMiniprogram.BaseEvent) {
    const key = String(event.currentTarget.dataset.key)
    if (key === 'message') {
      return
    }
    wx.reLaunch({ url: `/pages/${key}/index` })
  },
})
