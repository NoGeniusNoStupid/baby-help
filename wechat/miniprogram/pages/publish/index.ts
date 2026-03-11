type MatchMode = '系统智能匹配' | '自己挑选服务方'

Page({
  data: {
    serviceTypes: ['放学接送', '晚托托管', '周末看护', '寒暑假托管'],
    serviceTypeIndex: 0,
    districts: ['福田区', '南山区', '宝安区', '龙华区'],
    districtIndex: 0,
    timeOptions: ['17:00-18:00', '18:00-19:30', '19:30-21:00'],
    timeIndex: 0,
    frequency: 5,
    budget: 1800,
    urgent: false,
    note: '',
    couponAmount: 100,
    matchMode: '系统智能匹配' as MatchMode,
    estimateTotal: '1700 元',
  },
  onChangeService(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ serviceTypeIndex: Number(event.detail.value) })
  },
  onChangeDistrict(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ districtIndex: Number(event.detail.value) })
  },
  onChangeTime(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ timeIndex: Number(event.detail.value) })
  },
  onChangeFrequency(event: WechatMiniprogram.CustomEvent<{ value: number }>) {
    this.setData({ frequency: event.detail.value })
    this.updateEstimate()
  },
  onInputBudget(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
    const value = Number(event.detail.value || 0)
    this.setData({ budget: value > 0 ? value : 0 })
    this.updateEstimate()
  },
  onToggleUrgent(event: WechatMiniprogram.CustomEvent<{ value: boolean }>) {
    this.setData({ urgent: event.detail.value })
    this.updateEstimate()
  },
  onInputNote(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
    this.setData({ note: event.detail.value })
  },
  onChooseMode(event: WechatMiniprogram.BaseEvent) {
    const mode = String(event.currentTarget.dataset.mode) as MatchMode
    this.setData({ matchMode: mode })
  },
  updateEstimate() {
    const urgentFee = this.data.urgent ? 120 : 0
    const total = Math.max(this.data.budget - this.data.couponAmount + urgentFee, 0)
    this.setData({ estimateTotal: `${total} 元` })
  },
  onSubmit() {
    wx.showToast({
      title: '需求已提交（演示）',
      icon: 'success',
    })
  },
})
