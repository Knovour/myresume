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
    brief: '虛擬機器 + 管理軟體安裝設定、網站架設、網頁設計'
  }]
}, {
  place: '安通 ATCC',
  time: {
    from: '2013/04/30',
    to: '2015/02/28'
  },
  list: [{
    work: 'Google Adwords Challenge 數位行銷精英培訓計畫',
    brief: '網站維護、功能開發',
    images: [
      'gac.webp'
    ]
  }, {
    work: '交點 x 2013 年會官網',
    brief: '網站前後端設計開發',
    detail: '不含圖片設計的部份',
    images: [
      'cp2013.webp'
    ]
  }, {
    work: 'Yiamas 官網上線倒數頁面',
    brief: '',
    images: [
      'yiamas_landing.webp'
    ]
  }, {
    work: '2014 ATCC 全國大專院校商業個案大賽',
    brief: '報名頁面設計、後續功能開發',
    images: [
      '2014_atcc.webp'
    ]
  }, {
    work: 'TiC100 活動報名網站',
    brief: '前台功能開發、後台建置維護',
    link: 'http://sign-up.tic100.org.tw/',
    detail: '不含頁面設計的部份',
    images: [
      'tic100.webp'
    ]
  }, {
    work: 'Google ignite 數位火星計劃',
    brief: ' 網頁設計',
    images: [
      'ignite.webp'
    ]
  }, {
    work: 'Google 企業相關課程合作',
    brief: '活動合作、爬蟲爬取網頁資料分析',
    detail: '爬取人力銀行、黃頁以及特定企業相關工會、網站等資料，分析適合的企業並發送邀請信，主要有廣告投放、流量資料分析等課程。'
  }]
}, {
  place: 'SiFi 矽緋國際',
  time: {
    from: '2015/05/15',
    to: '2016/03/15'
  },
  list: [{
    work: 'Logo、名片、產品傳單設計',
    brief: 'Powerd By Affinity Designer',
    images: [
      'legal.webp',
      '2015-10.webp',
      '2015-11.webp',
      '2015-12_1.webp',
      '2015-12_2.webp',
    ]
  }, {
    work: '立信鐘錶',
    brief: '網頁設計、即時聊天功能',
    link: 'https://www.lihsin-watch1963.com/',
    detail: '即時聊天功能部份由 Sails.js 完成',
    images: [
      'li-hsin.webp'
    ]
  }, {
    work: '流量控管系統',
    brief: '前後端架設、封包擷取、網頁爬蟲',
    detail: '給學校使用的期刊下載流量管理，封包擷取部份用 Go 語言完成，擷取的封包做初步整理後傳給 node-restify 建成的 service 做進一步處理並存進資料庫，數據分析顯示的部份則由 Koa.js 建立的 service 負責，各個區塊用 Docker 打包拆分。另外用爬蟲爬取期刊網站資料，以便讓網站能分析並顯示更詳細的資料。'
  }, {
    work: '楷壘工作室',
    brief: '網頁設計',
    images: [
      'klai.webp'
    ]
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
