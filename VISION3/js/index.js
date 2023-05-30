// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1，左上角的模块
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: [
      '#dd6b66',
      '#759aa0',
      '#e69d87',
      '#8dc1a9',
      '#ea7e53',
      '#eedd78',
      '#73a373',
      '#73b9bc',
      '#7289ab',
      '#91ca8c',
      '#f49f42'
    ],
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show:false,
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '成本构成%',
        type: 'pie',
        radius: '62%',
        data: [
          { value: 37, name: 'IGBT模块' },
          { value: 16, name: '控制电路板' },
          { value: 12, name: '驱动电路板' },
          { value: 12, name: '控制器壳体' },
          { value: 5, name: '电流传感器' },
          { value: 4, name: '接插件' },
          { value: 4, name: '门驱动电路' },
          { value: 4, name: '薄膜电容' },
          { value: 6, name: '其他' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();



// 柱状图模块2，右上角的模块
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    color: [
      '#e69d87',
      '#73a373',
      '#73b9bc',
      '#7289ab',
      '#91ca8c',
      '#f49f42'
    ],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '-1%',
      left: 'center',
      textStyle:{
        color:'#fff',
      }
    },
    series: [
      {
        top: '30%',
        name: '类型分布占比%',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            color:'#fff',
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 94.4, name: '永磁同步电机' },
          { value: 0.7, name: '他励同步电机' },
          { value: 4.9, name: '交流异步电机' }
        ]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      // year: "属性A", 
      data: [
        // 两个数组是因为有两条线
        [8, 10, 12, 20, 21, 23, 65],
        // [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    // {
    //   // year: "属性B", 
    //   data: [
    //     // 两个数组是因为有两条线
    //     [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
    //     [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    //   ]
    // }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '市场规模(亿元)',
        data: yearData[0].data[0]
      },
      // {
      //   type: 'line',
      //   smooth: true, // 圆滑的线
      //   name: '变量2',
      //   data: yearData[0].data[1]
      // }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换属性A 和 属性B 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["2016","2017","2018","2019","2020","2021","2022"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        // name: '属性A',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [55.9,85.3,134.4,132.4,146.3,298.3,419.4]
      },
      // {
      //   name: "属性B",
      //   type: "line",
      //   smooth: true,
      //   lineStyle: {
      //     normal: {
      //       color: "#00d887",
      //       width: 2
      //     }
      //   },
      //   areaStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(
      //         0,
      //         0,
      //         0,
      //         1,
      //         [{
      //             offset: 0,
      //             color: "rgba(0, 216, 135, 0.4)"
      //           },
      //           {
      //             offset: 0.8,
      //             color: "rgba(0, 216, 135, 0.1)"
      //           }
      //         ],
      //         false
      //       ),
      //       shadowColor: "rgba(0, 0, 0, 0.1)"
      //     }
      //   },
      //   // 设置拐点 小圆点
      //   symbol: "circle",
      //   // 拐点大小
      //   symbolSize: 5,
      //   // 设置拐点颜色以及边框
      //   itemStyle: {
      //     color: "#00d887",
      //     borderColor: "rgba(221, 220, 107, .1)",
      //     borderWidth: 12
      //   },
      //   // 开始不显示拐点， 鼠标经过显示
      //   showSymbol: false,
      //   data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      // }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "9"
      }
    },
    series: [{
      name: '电控系统装机量',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 136185,
          name: "比亚迪"
        },
        {
          value: 102477,
          name: "联合汽车电子"
        },
        {
          value: 52917,
          name: "北汽新能源"
        },
        {
          value: 26112,
          name: "上海电驱动"
        },
        {
          value: 25292,
          name: "奇瑞新能源"
        },
        {
          value: 20797,
          name: "巨一自动化"
        },
        {
          value: 19726,
          name: "深圳大地和"
        },
        {
          value: 19113,
          name: "长安"
        },
        {
          value: 12663,
          name: "博世"
        },
        {
          value: 12898,
          name: "汇川技术"
        },
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //   bottom: 0,
    //   itemWidth: 10,
    //   itemHeight: 10,
    //   textStyle: {
    //     color: "rgba(255,255,255,.5)",
    //     fontSize: 10
    //   }
    // },
    series: [{
      name: '电控系统市场份额',
      type: 'pie',
      radius: ["7%", "90%"],
      center: ['50%', '60%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 10,
        // 连接文字线长(横线)
        length2: 10
      },
      data: [{
        value: 22.4,
        name: "比亚迪"
      },
      {
        value: 16.8,
        name: "联合汽车电子"
      },
      {
        value: 8.7,
        name: "北汽新能源"
      },
      {
        value: 4.3,
        name: "上海电驱动"
      },
      {
        value: 4.2,
        name: "奇瑞新能源"
      },
      {
        value: 3.4,
        name: "巨一自动化"
      },
      {
        value: 3.2,
        name: "深圳大地和"
      },
      {
        value: 3.1,
        name: "长安"
      },
      {
        value: 2.1,
        name: "博世"
      },
      {
        value: 2.0,
        name: "汇川技术"
      },
    ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 模拟飞行路线地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };
  var XCData = [
    [{
      name: '乌鲁木齐'
    }, {
      name: '乌鲁木齐',
      value: 50000
    }],
    [{
      name: '贵阳'
    }, {
      name: '贵阳',
      value: 43900
    }],
    [{
      name: '兰州'
    }, {
      name: '兰州',
      value: 15000
    }],
    [{
      name: '西宁'
    }, {
      name: '西宁',
      value: 8594
    }],
    [{
      name: '呼和浩特'
    }, {
      name: '呼和浩特',
      value: 66700
    }],
    [{
      name: '拉萨'
    }, {
      name: '拉萨',
      value: 2105
    }],
    [{
      name: '银川'
    }, {
      name: '银川',
      value: 14037
    }],
  ];
  var YCData = [
    [{
      name: '福州'
    }, {
      name: '福州',
      value: 560000
    }],
    [{
      name: '广州'
    }, {
      name: '广州',
      value: 1560000
    }],
    [{
      name: '济南'
    }, {
      name: '济南',
      value: 733800
    }],
    [{
      name: '南京'
    }, {
      name: '南京',
      value: 991200
    }],
    [{
      name: '杭州'
    }, {
      name: '杭州',
      value: 1320000
    }],
    [{
      name: '郑州'
    }, {
      name: '郑州',
      value: 667255
    }],
    [{
      name: '上海'
    }, {
      name: '上海',
      value: 945000
    }],
  ];

  // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  var planePath = 'none';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
  var series = [];
  [
    ['新能源汽车保有量前七名', YCData],
    ['新能源汽车保有量后七名', XCData]
  ].forEach(function (item, i) {
    series.push({
      name: item[0],
      type: 'lines',
      zlevel: 1,
      effect: {
        show: false,
        period: 6,
        trailLength: 0.7,
        color: 'red', //arrow箭头的颜色
        symbolSize: 1
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0],
      type: 'lines',
      zlevel: 2,
      symbol: ['none', 'arro'],
      symbolSize: 10,
      effect: {
        show: false,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 5
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    }, {
      name: item[0],
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: function (val) {
        return 10;//圆形link大小
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    });
  });
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "新能源汽车保有量：" /*+ params.data.name + ""*/ + params.data.value[2] + " 辆";
        } 
        // else if (params.seriesType == "lines") {
        //   return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        // } 
        else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['新能源汽车保有量前七名','新能源汽车保有量后七名'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      // 把地图放大1.2倍
      zoom: 1.2,
      label: {
        // 鼠标移动显示区域名称
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: false,
      // 地图样式修改
      itemStyle: {
        normal: {
          areaColor: 'rgba(34, 70, 168, 0.3)',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: 'rgba(119, 139, 224, 0.548)'
        }
      }
    },
    series: series
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();