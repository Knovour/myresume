export const info = [{
  tag: 'name',
  value: 'Knovour Zheng',
  icon: 'face'
}, {
  tag: 'email',
  value: 'knovour@gmail.com',
  icon: 'email-open'
}, {
  tag: 'code',
  value: 'Node.js',
  icon: 'code'
}, {
  tag: 'blog',
  value: 'https://notes.knovour.ninja',
  icon: 'account'
}, {
  tag: 'github',
  value: 'https://github.com/Knovour',
  icon: 'github'
}, {
  tag: 'bookshelf',
  value: 'https://goo.gl/8YRO8V',
  icon: 'book-image'
}, {
  tag: 'location',
  value: 'Taiwan',
  icon: 'pin'
}];

export const experience = [{
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
    work: 'Logo、名片、產品傳單設計',
    detail: 'Powerd By Affinity Designer',
    images: [
      'legal.webp',
      '2015-10.webp',
      '2015-11.webp',
      '2015-12_1.webp',
      '2015-12_2.webp',
    ]
  }, {
    work: '立信鐘錶',
    detail: '網頁設計、即時聊天功能',
    link: 'https://www.lihsin-watch1963.com/'
  }, {
    work: '流量控管系統',
    detail: '前後端架設、封包擷取、網頁爬蟲'
  }]
}];

export const education = [{
  place: '輔仁大學',
  time: {
    from: '1995/09/01',
    to: '2012/01/31'
  },
  list: [{
    work: '資訊工程學系',
  }]
}];

export const github = [{
  name: 'myresume',
  hasAvatar: true,
  description: '簡歷原始程式碼'
}, {
  name: 'generator-koat',
  hasAvatar: true,
  description: 'Yeoman template，以 Koa.js 為底'
}, {
  name: 'json-web-crawler',
  description: '將爬蟲所需要寫的程式碼縮成 json 來表示'
}, {
  name: 'jquery-textavatar',
  hasAvatar: true,
  description: '以名稱拼出文字大頭貼'
}];
