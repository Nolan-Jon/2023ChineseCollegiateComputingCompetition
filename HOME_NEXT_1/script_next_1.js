

let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ["世界之宝", "污染之源", "何去何从"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {//图例
    textStyle:{
      color:'#fff',
      fontFamily:'Amonospace',
    },
    width:500,
    top: '15%',
    left: '20%',
    data: ['全球石油产量', '全球石油销量']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false},
      axisLabel:{
        // 坐标轴刻度标签的相关设置
        show: true,
        textStyle: {
          color: '#fff', // 字体颜色
          // fontSize: 20 // 刻度字体大小
        }
      },
      data: ['2015', '2016', '2017', '2018', '2019','2020','2021']
    },

  ],
  yAxis: [
    {
      show:false,
      min:50,max:105,
      type: 'value'
    }
  ],
  series: [
    {
      name: '全球石油产量',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
            itemStyle: {
        borderRadius: 0,
        borderColor: '#eee',
        borderWidth: 0,
        shadowColor: 'rgb(0, 0, 0)',
        shadowBlur: 80,
        opacity:0.9
      },
      data: [89.18,91.35,92.61,94.42,96.46,98.69,100.6,101.44,92.89,97.61]
    },
    {
      name: '全球石油销量',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
            itemStyle: {
        borderRadius: 0,
        borderColor: '#eee',
        borderWidth: 0,
        shadowColor: 'rgb(0, 0, 0)',
        shadowBlur: 80,
        opacity:0.9
      },
      data: [89.37,91.64,92.78,94.57,96.73,99.23,100.34,101.55,91.56,97.42]
    },
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

// window.addEventListener('resize', myChart.resize);
