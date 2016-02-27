import React from 'react'
import EventBlock from '../components/EventBlock'

const eventlist = [{
  place: '台北醫學大學',
  time: {
    from: '2011/09/01',
    to: '2012/03/31'
  },
  list: [{
    work: '虛擬環境架設',
    detail: '虛擬機器 + 管理軟體安裝設定、網站架設、網頁設計'
  }]
}, {
  place: '安通 ATCC',
  time: {
    from: '2013/04/30',
    to: '2015/02/28'
  },
  list: [{
    work: 'Google Adwords Challenge 數位行銷精英培訓計畫',
    detail: '網站維護、功能開發'
  }, {
    work: '2014 ATCC 全國大專院校商業個案大賽',
    detail: '報名頁面設計、後續功能開發'
  }, {
    work: '交點 x 2013 年會',
    detail: '網站前後端設計開發'
  }, {
    work: 'TiC100 活動報名網站',
    detail: '前台功能開發、後台建置維護',
    link: 'http://sign-up.tic100.org.tw/'
  }, {
    work: 'Google 企業相關課程合作',
    detail: '活動合作、爬蟲爬取網頁資料分析'
  }]
}, {
  place: 'SiFi 矽緋國際',
  time: {
    from: '2015/05/15',
    to: '2016/01/31'
  },
  list: [{
    work: '立信鐘錶',
    detail: '網頁設計、即時聊天功能',
    link: 'https://www.lihsin-watch1963.com/'
  }, {
    work: '流量控管系統',
    detail: '前後端架設、封包擷取、網頁爬蟲'
  }]
}]

const Experience = React.createClass({
  render() {
    const blocks = eventlist.map((event, i) => <EventBlock key={i} event={event}/>)

    return (
      <article>
        <header>
          <h1>EXPERIENCE</h1>
        </header>
        {blocks}
      </article>
    )
  }
})

export default Experience
