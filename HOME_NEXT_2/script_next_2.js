

let navbarItem_1 = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem_1.length; i++) {
    navbarItem_1[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem_1.length; i++) {
            navbarItem_1[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed_1 = new Typed(".multiple-text-1", {
    strings: ["立人之本", "居住之源", "如何保护"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


var myChart_1 = echarts.init(document.querySelector(".home-chart-1"));
var option_1 = {
  tooltip: {
    trigger: 'item-1'
  },
  legend: {//对图例进行修改
    show:false,
    textStyle:{
      show:false,
      color:'#fff',
      fontFamily:'Amonospace',
    },
    width:500,
    top: '10%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70s%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#eee',
        borderWidth: 0,
        shadowColor: 'rgb(0, 0, 0)',
        shadowBlur: 80,
        opacity:0.9
      },
      label: {
        show: false,
        position: 'center',
        normal: {
          show: true,
          fontStyle:'normal',
          fontSize:12,
          color:'#fff',
          formatter: '{b}: {d}%' //自定义显示格式(b:name, c:value, d:百分比)
      }

      },
      emphasis: {
        label: {
          color:'#fff',//中间显示的字体的颜色
          show: true,
          fontStyle:'normal',
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 14, name: '电力' },
        { value: 5, name: '工业' },
        { value: 3, name: '其他' },
        { value: 14, name: '浪费' },
        { value: 18, name: '农业' },
        { value: 8, name: '土地使用' },
        { value: 14, name: '建筑' },
        { value: 24, name: '交通' }
      ]
    }
  ]
};

myChart_1.setOption(option_1);
