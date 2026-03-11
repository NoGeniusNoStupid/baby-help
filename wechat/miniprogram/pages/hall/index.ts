interface HallItem {
  id: string
  title: string
  area: string
  frequency: string
  budget: string
  urgent: boolean
}

Page({
  data: {
    filters: ['全部', '接送', '托管', '急单'],
    activeFilter: '全部',
    demands: [
      {
        id: 'h1',
        title: '南山科技园放学接送',
        area: '南山区 · 17:30',
        frequency: '每周5次',
        budget: '1800 元/月',
        urgent: true,
      },
      {
        id: 'h2',
        title: '福田晚托托管',
        area: '福田区 · 18:00-20:30',
        frequency: '每周5次',
        budget: '220 元/天',
        urgent: false,
      },
      {
        id: 'h3',
        title: '宝安周末看护',
        area: '宝安区 · 周六日',
        frequency: '每周2次',
        budget: '300 元/天',
        urgent: false,
      },
    ] as HallItem[],
  },
  onFilter(event: WechatMiniprogram.BaseEvent) {
    const filter = String(event.currentTarget.dataset.filter)
    this.setData({ activeFilter: filter })
  },
  onApply(event: WechatMiniprogram.BaseEvent) {
    const id = String(event.currentTarget.dataset.id)
    wx.showToast({
      title: `已报名需求 ${id}`,
      icon: 'none',
    })
  },
})
