interface DiscoverCard {
  id: string
  title: string
  district: string
  price: string
  tags: string[]
  score: string
}

Page({
  data: {
    activeNav: 'discover',
    categories: ['全部', '放学接送', '晚托托管', '周末看护', '寒暑假班'],
    activeCategory: '全部',
    cards: [
      {
        id: 'c1',
        title: '星光课后托管中心',
        district: '南山区 · 科技园',
        price: '1880 元/月起',
        tags: ['作业辅导', '可接晚点', '营养晚餐'],
        score: '4.9',
      },
      {
        id: 'c2',
        title: '安心放学接送站',
        district: '福田区 · 梅林',
        price: '35 元/次起',
        tags: ['固定路线', '定位提醒', '可拼单'],
        score: '4.8',
      },
      {
        id: 'c3',
        title: '暖橙托育成长营',
        district: '宝安区 · 新安',
        price: '260 元/天起',
        tags: ['全天托管', '兴趣活动', '小班看护'],
        score: '5.0',
      },
    ] as DiscoverCard[],
  },
  onTapCategory(event: WechatMiniprogram.BaseEvent) {
    const category = String(event.currentTarget.dataset.category)
    this.setData({ activeCategory: category })
  },
  onTapCard(event: WechatMiniprogram.BaseEvent) {
    const title = String(event.currentTarget.dataset.title)
    wx.showToast({
      title: `已打开 ${title}`,
      icon: 'none',
    })
  },
  onGoPublish() {
    wx.navigateTo({ url: '/pages/publish/index' })
  },
  onGoHall() {
    wx.navigateTo({ url: '/pages/hall/index' })
  },
  onSwitchTab(event: WechatMiniprogram.BaseEvent) {
    const key = String(event.currentTarget.dataset.key)
    if (key === 'discover') {
      return
    }
    wx.reLaunch({ url: `/pages/${key}/index` })
  },
})
