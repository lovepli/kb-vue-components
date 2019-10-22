const left_menu_data = [
  {
    label: '首页',
    to: '/index',
    img: '../../static/icon/home.png',
    home_hide: true
  },
  {
    label: '高亮编译器',
    to: '/ace',
    img: '../../static/icon/ace.png',
    // img: '../static/icon/ace.png',
    title: 'ACE代码高亮编译器',
    description: '使用Brace插件实现代码高亮编辑器，方便你实现在线的代码编写工具。',
    url: '/ace',
    course: ""
  },
  {
    label: '文本对比',
    to: '/diff',
    img: '../../static/icon/diff.png',
    title: '文本比对控件',
    description: '前端文本比对找了几个库: 分别是: CodeMirror、DiffMatchPatch、Mergely、vue-code-diff，最后选择用：vue-code-diff。',
    url: '/diff',
    course: ""
  },
  {
    label: '手机事件',
    to: '/vuetouch',
    img: '../../static/icon/vuetouch.png',
    title: '手机事件监听',
    description: '使用vue-touch插件手机事件的处理，可方便实现手机端各种手势事件的监听处理。',
    url: '/vuetouch',
    course: ""
  },
  {
    label: '复制文件',
    to: '/clipboard',
    img: '../../static/icon/clipboard.png',
    title: '复制文本控件',
    description: '复制文本控件使用的是vue-clipboard2,可方便的实现复制需求。',
    url: '/clipboard',
    course: ""
  },
  {
    label: 'Echarts词云',
    to: '/wordcloud',
    img: '../../static/icon/wordcloud.png',
    title: 'Echarts词云控件',
    description: 'Echarts词云控件，可方便的对词组进行可视化的显示。',
    url: '/wordcloud',
    course: ""
  },
]

export {left_menu_data}
