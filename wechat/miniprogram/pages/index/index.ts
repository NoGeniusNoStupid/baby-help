interface QuickAction {
  title: string
  subtitle: string
  url: string
  badge: string
}

interface DemandCard {
  id: string
  title: string
  district: string
  schedule: string
  budget: string
  tags: string[]
  collected: boolean
}

Page({
  data: {
    city: '深圳',
    greeting: '',
    activeNav: 'index',
    activeBanner: 0,
    quickActions: [
      { title: '发布需求', subtitle: '1分钟发布接送或托管', url: '/pages/publish/index', badge: 'HOT' },
      { title: '信息大厅', subtitle: '筛选同城优质服务方', url: '/pages/hall/index', badge: 'NEW' },
    ] as QuickAction[],
    banners: [
      '平台严选已认证托管班，信息更透明',
      '晚高峰接送专场已上线，响应更快',
      '新用户可领取首次发布权益礼包',
    ],
    serviceTags: ['放学接送', '晚托托管', '作业辅导', '周末看护', '寒暑假班'],
    demandCards: [
      {
        id: 'd1',
        title: '福田区放学接送',
        district: '深圳 · 福田',
        schedule: '周一到周五 17:20',
        budget: '1600 元/月',
        tags: ['固定接送', '需女性', '可沟通路线'],
        collected: false,
      },
      {
        id: 'd2',
        title: '南山区晚托班',
        district: '深圳 · 南山',
        schedule: '周一到周五 18:30-20:30',
        budget: '220 元/天',
        tags: ['作业辅导', '可试托', '急招'],
        collected: true,
      },
    ] as DemandCard[],
  },
  onLoad() {
    const hour = new Date().getHours()
    const greeting = hour < 12 ? '上午好，安心接送每一天' : hour < 18 ? '下午好，放学高峰已准备就绪' : '晚上好，晚托需求持续响应'
    this.setData({ greeting })
  },
  onBannerChange(event: WechatMiniprogram.CustomEvent) {
    const current = event.detail.current as number
    this.setData({ activeBanner: current })
  },
  onTapQuickAction(event: WechatMiniprogram.BaseEvent) {
    const index = Number(event.currentTarget.dataset.index)
    const target = this.data.quickActions[index]
    wx.navigateTo({ url: target.url })
  },
  onGoHall() {
    wx.navigateTo({ url: '/pages/hall/index' })
  },
  onToggleCollect(event: WechatMiniprogram.BaseEvent) {
    const id = String(event.currentTarget.dataset.id)
    const nextCards = this.data.demandCards.map((item) => {
      if (item.id === id) {
        return { ...item, collected: !item.collected }
      }
      return item
    })
    this.setData({ demandCards: nextCards })
  },
  onTapServiceTag(event: WechatMiniprogram.BaseEvent) {
    const tag = String(event.currentTarget.dataset.tag)
    wx.showToast({
      title: `${tag}专题准备中`,
      icon: 'none',
    })
  },
  onSwitchTab(event: WechatMiniprogram.BaseEvent) {
    const key = String(event.currentTarget.dataset.key)
    if (key === 'index') {
      return
    }
    wx.reLaunch({ url: `/pages/${key}/index` })
  },
})
