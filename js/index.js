$(document).ready(function () {
  // 给默认 选中的定义样式
  $(".headerTitle a").eq(0).addClass("active");

  const monitor = [
    // 实时交易详情数据
    [
      {
        id: 1,
        time: "11:00:01",
        area: "北京市海淀区",
        money: 1000.0,
      },
      {
        id: 2,
        time: "12:00:01",
        area: "北京市东城区",
        money: 1000.0,
      },
      {
        id: 3,
        time: "13:00:01",
        area: "北京市房山区",
        money: 1000.0,
      },
      {
        id: 4,
        time: "14:00:01",
        area: "北京市朝阳区",
        money: 1000.0,
      },
      {
        id: 5,
        time: "15:00:01",
        area: "北京市大兴区",
        money: 1000.0,
      },
      {
        id: 6,
        time: "11:00:01",
        area: "北京市海淀区",
        money: 1000.0,
      },
      {
        id: 7,
        time: "12:00:01",
        area: "北京市东城区",
        money: 1000.0,
      },
      {
        id: 8,
        time: "13:00:01",
        area: "北京市房山区",
        money: 1000.0,
      },
      {
        id: 9,
        time: "14:00:01",
        area: "北京市朝阳区",
        money: 1000.0,
      },
      {
        id: 10,
        time: "15:00:01",
        area: "北京市大兴区",
        money: 1000.0,
      },
    ],
    // 实时注册详情数据
    [
      {
        id: 1,
        time: "10:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 2,
        time: "11:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 3,
        time: "10:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 4,
        time: "11:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 5,
        time: "12:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 1,
        time: "14:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 2,
        time: "17:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 3,
        time: "10:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 4,
        time: "11:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
      {
        id: 5,
        time: "12:00:07",
        area: "福建省厦门市湖里区",
        sex: "男",
      },
    ],
  ];
  // 实现排他思想
  $(".headerTitle a").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let _index = $(this).index();
    console.log(_index);
    $(".item-con").eq(_index).show().siblings(".item-con").hide();
    asyncLoadMonitor(_index);
  });

  function asyncLoadMonitor(index) {
    let src = "";
    console.log(1, index);
    monitor[index].forEach((item) => {
      src += `
            <div class="row">
                <span class="col">${item.time}</span>
                <span class="col">${item.area}</span>
                <span class="col">${item.money ? item.money : item.sex}</span>
            </div>
            `;
    });
    $(".inner  .item-con .view").eq(index).html(src);
    cloneData();
  }
  asyncLoadMonitor(0);

  function cloneData() {
    $(".inner  .item-con .view").each(function () {
      const rows = $(this).children().clone();
      $(this).append(rows);
    });
  }
  cloneData();
});

// 饼图
// .pic-left
$(function () {
  let chart = echarts.init(document.querySelector(".pic-left"));

  let option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "销售统计",
        type: "pie",
        radius: ["10%", "50%"],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 0,
        },

        label: {
          fontSize: 10, // 设置线条旁边文字的长度
        },
        labelLine: {
          show: true, // 是否显示线条
          length: 6, // 设置第一段线条的长度
          length2: 8, // 设置第二段线条的长度
        },
        data: [
          { value: 22, name: "云南", label: { color: "#006cff" } },
          { value: 28, name: "北京", label: { color: "#60cda0" } },
          { value: 25, name: "山东", label: { color: "#ed8884" } },
          { value: 25, name: "河北", label: { color: "#ff9f7f" } },
          { value: 32, name: "江苏", label: { color: "#0096ff" } },
          { value: 22, name: "浙江", label: { color: "#9fe6b8" } },
          { value: 31, name: "四川", label: { color: "#32c5e9" } },
          { value: 42, name: "上海", label: { color: "#1d9dff" } },
        ],
      },
    ],
  };
  chart.setOption(option);
  // 实现图表自适应
  window.addEventListener("resize", () => {
    chart.resize();
  });
});

// 中间模块
// 树状图
$(function () {
  const item = {
    value: 1200,
    itemStyle: {
      color: "#254065",
    },
    tooltip: {
      extraCssText: "opacity:0",
    },
  };
  let chart = echarts.init(document.querySelector(".bar-left"));
  const option = {
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      // 渐变颜色
      colorStops: [
        {
          offset: 0,
          color: "#00fffb", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "#0061ce", // 100% 处的颜色
        },
      ],
      global: false,
    },
    tooltip: {
      formatter: "{a}<br />{b}: {c}",
      backgroundColor: "rgba(0,0,0,0.5)",
      borderColor: "rgba(0,0,0,0)",
      textStyle: {
        color: "#fff",
      },
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
    // 网格
    grid: {
      top: "3%",
      left: "0%",
      right: "3%",
      bottom: "3%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0,240,255,0.3)",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        // x轴坐标轴刻度相关设置
        axisTick: {
          alignWithLabel: false, //保证刻度线和标签对齐
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)",
          },
        },
        axisLabel: {
          show: true,
          color: "#4c9bfd",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#4c9bfd",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "用户总量",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
      },
    ],
  };
  chart.setOption(option);
  // 实现图表自适应
  window.addEventListener("resize", () => {
    chart.resize();
  });
});

// 订单 销售量 模块
$(function () {
  const data = {
    day365: {
      orders: "30,321,988",
      amount: 99882,
    },
    day90: {
      orders: "301,987",
      amount: 9876,
    },
    day30: {
      orders: "1,987",
      amount: 3834,
    },
    day1: {
      orders: "987",
      amount: 835,
    },
  };
  let order = $(".order-item h4").eq(0);
  let amount = $(".order-item h4").eq(1);
  order.html(data["day365"].orders);
  amount.html(data["day365"].amount);
  $(".order .order-header a").eq(0).addClass("active");
  $(".order .order-header a").on("click", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    let index = this.dataset.type;
    order.html(data[index].orders);
    amount.html(data[index].amount);
  });
});

// 销售额统计  模块
$(function () {
  // 年季月周 切换
  let _index = 0;
  let time;
  const data = {
    year: {
      info: [
        "2099年",
        "2199年",
        "2299年",
        "2399年",
        "2499年",
        "2599年",
        "2699年",
        "2799年",
        "2899年",
        "2999年",
        "3099年",
        "3199年",
      ],
      detail: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    quarter: {
      info: ["1季度", "2季度", "3季度", "4季度"],
      detail: [
        [23, 75, 12, 97],
        [43, 31, 65, 23],
      ],
    },
    month: {
      info: [
        "1⽉",
        "2⽉",
        "3⽉",
        "4⽉",
        "5⽉",
        "6⽉",
        "7⽉",
        "8⽉",
        "9⽉",
        "10⽉",
        "11⽉",
        "12⽉",
      ],
      detail: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
      ],
    },
    week: {
      info: ["近1周", "近2周", "近3周", "近4周", "近5周", "近6周"],
      detail: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
      ],
    },
  };
  let chare = echarts.init(document.querySelector(".line"));
  let option = {
    color: ["red", "green"],
    title: {
      text: "单位:万",
      left: "10%",
      textStyle: {
        color: "#3c89dc",
        fontWeight: 100,
        fontSize: 12,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["预期销售额", "实际销售额"],
      right: "5%",
      textStyle: {
        color: "#4c9bfd",
        fontSize: 10,
      },
    },
    grid: {
      show: true,
      top: "20%",
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      borderColor: "#012f4a",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],

      axisLabel: {
        color: "#4c9bfd",
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#4c9bfd",
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 80],
        smooth: true,
        axisLine: {
          show: true,
        },
      },
      {
        name: "实际销售额",
        type: "line",
        smooth: true,

        data: [220, 182, 191, 234, 290, 330, 132, 101, 134, 90, 230, 310],
      },
    ],
  };
  chare.setOption(option);
  window.addEventListener("resize", () => {
    chare.resize();
  });

  $(".line-box .line-header a").eq(_index).addClass("active");
  function update() {
    time = setInterval(() => {
      _index++;
      if (_index == 4) {
        _index = 0;
      }
      asyncAddClass(_index);
      asyncUpdata(_index);
    }, 3000);
  }
  update();

  $(".line-box").hover(
    () => {
      clearInterval(time);
    },
    () => {
      update();
    }
  );

  function asyncAddClass(index) {
    $(".line-box .line-header a")
      .eq(index)
      .addClass("active")
      .siblings("a")
      .removeClass("active");
  }

  $(".line-box .line-header a").on("click", function () {
    _index = $(this).index() - 1;
    asyncAddClass(_index);
    asyncUpdata(_index);
  });

  function asyncUpdata(index) {
    let currentArr = $(".line-box .line-header a").get(index).dataset.type;
    option.xAxis.data = data[currentArr].info;
    option.series[0].data = data[currentArr].detail[0];
    option.series[1].data = data[currentArr].detail[1];
    chare.setOption(option);
  }
  asyncUpdata(0);
});

// 雷达图
$(function () {
  let chare = echarts.init(document.querySelector(".radar-item"));
  let option = {
    tooltip: {
      show: true,
      position: ["55%", "50%"],
      backgroundColor: "rgba(0,0,0,0.5)",
      textStyle: {
        fontSize: 8,
        color: "#fff",
      },
      backgroundColor : 'rgba(0,0,0,0.5)',
            borderColor: 'rgba(0,0,0,0.5)',
    },
    radar: {
      center: ["50%", "50%"],
      radius: "50%",
      shape: "circle",
      splitNumber: 4,
      name: {
        textStyle: {
          color: "#4c9bfd",
        },
      },
      indicator: [
        { name: "淘宝", max: 120 },
        { name: "京东", max: 120 },
        { name: "苏宁", max: 120 },
        { name: "微商", max: 120 },
        { name: "其他", max: 120 },
      ],
    },
    series: [
      {
        name: "北京",
        type: "radar",
        data: [
          {
            value: [110, 90, 80, 60, 30],
          },
        ],
      },
    ],
  };

  chare.setOption(option);
  window.addEventListener("resize", function () {
    chare.resize();
  });
});

// 一年度销售进度
$(function () {
  let chare = echarts.init(document.querySelector(".gauge"));
  let option = {
    series: [
      {
        name: "",
        startAngle: 180,
        type: "pie",
        radius: ["130%", "150%"],
        center: ["50%", "88%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 100,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00c9e0" },
                { offset: 1, color: "#005fc1" },
              ]),
            },
          },
          {
            value: 100,
            itemStyle: {
              color: "#12274d",
            },
          },
          {
            value: 200,
            itemStyle: {
              color: "transparent",
            },
          },
        ],
      },
    ],
  };

  chare.setOption(option);
  window.addEventListener("resize", function () {
    chare.resize();
  });
});

// 各省热销
$(function () {
  let _index = 0;
  let time;
  const hotData = [
    {
      city: "北京", // 城市
      sales: "35, 279", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "华为", num: "9,086", flag: true },
        { name: "小米", num: "8,341", flag: true },
        { name: "oppo", num: "7,407", flag: false },
        { name: "vivo", num: "6,080", flag: false },
        { name: "荣耀", num: "6,724", flag: false },
        { name: "iphone", num: "2,170", flag: true },
      ],
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "华为", num: "3,457", flag: false },
        { name: "小米", num: "2,124", flag: true },
        { name: "oppo", num: "8,907", flag: false },
        { name: "vivo", num: "6,080", flag: true },
        { name: "荣耀", num: "1,724", flag: false },
        { name: "iphone", num: "1,170", flag: false },
      ],
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "华为", num: "2,345", flag: true },
        { name: "小米", num: "7,109", flag: true },
        { name: "oppo", num: "3,701", flag: false },
        { name: "vivo", num: "6,080", flag: false },
        { name: "荣耀", num: "2,724", flag: false },
        { name: "iphone", num: "2,998", flag: true },
      ],
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "华为", num: "2,156", flag: false },
        { name: "小米", num: "2,456", flag: true },
        { name: "oppo", num: "9,737", flag: true },
        { name: "vivo", num: "2,080", flag: true },
        { name: "荣耀", num: "8,724", flag: true },
        { name: "iphone", num: "1,770", flag: false },
      ],
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "华为", num: "9,567", flag: true },
        { name: "小米", num: "2,345", flag: false },
        { name: "oppo", num: "9,037", flag: false },
        { name: "vivo", num: "1,080", flag: true },
        { name: "荣耀", num: "4,724", flag: false },
        { name: "iphone", num: "9,999", flag: true },
      ],
    },
  ];

  let str = "";
  hotData.forEach((item) => {
    str += `
          <li>
              <span>${item.city}</span>
              <span>${item.sales} <i class="${
      item.flag ? "icon-up" : "icon-down"
    }"  ></i></span>
          </li>
      `;
  });
  $(".sup").html(str);

  $(".sup li").eq(_index).addClass("active").siblings().removeClass("active");

  function update() {
    time = setInterval(() => {
      _index++;
      if (_index == 5) {
        _index = 0;
      }
      asyncAddClass(_index);
      handleToggleData(_index);
    }, 1000);
  }
  update();

  function asyncAddClass(index) {
    $(".sup li").eq(index).addClass("active").siblings().removeClass("active");
  }
  asyncAddClass(0);

  function handleToggleData(i) {
    const currentFirstChild = hotData[i].brands;
    let childStr = "";
    currentFirstChild.forEach((item) => {
      console.log(item);
      childStr += `
         <li>
            <span>${item.name}</span>
            <span>${item.num}<i class="${
        item.flag ? "icon-up" : "icon-down"
      }" ></i></span>
         </li>
    `;
    });
    // 将数据渲染到.sub这个dom节点里面
    $(".sub").html(childStr);
  }
  handleToggleData(_index);



  $(".sup li").hover(
    function () {
      clearInterval(time)
        time = null
        $(this).addClass("active").siblings().removeClass("active")
        _index = $(this).index()
        handleToggleData(_index)
    },
    function () {
      if(time === null){
        update()
    }
    }
  );
});
