
const getCategoryLabel = (seriesName, index) => {
  if (seriesName=='Item1' && index==0){
    return "SpringMVC";
  }
  else if (seriesName=='Item2' && index==0){
    return "Java General";
  }
  else if (seriesName=='Item1' && index==1){
    return "Django";
  }
  else if (seriesName=='Item2' && index==1){
    return "Flask";
  }
  else if (seriesName=='Item3' && index==1){
    return "Falcon";
  }
  else if (seriesName=='Item1' && index==2){
    return "NextJS/TS";
  }
  else if (seriesName=='Item2' && index==2){
    return "React";
  }
  else if (seriesName=='Item3' && index==2){
    return "jQuery";
  }
  else if (seriesName=='Item1' && index==3){
    return "Flutter";
  }
  else if (seriesName=='Item2' && index==3){
    return "React Native";
  }
  else if (seriesName=='Item1' && index==4){
    return "Github + CI/CD";
  }
  else if (seriesName=='Item2' && index==4){
    return "Gitlab + CI/CD";
  }
  else if (seriesName=='Item1' && index==5){
    return "Docker";
  }
  else if (seriesName=='Item1' && index==6){
    return "Linux";
  }
  else if (seriesName=='Item2' && index==6){
    return "Windows";
  }
  else if (seriesName=='Item1' && index==7){
    return "RestAPI";
  }
  else if (seriesName=='Item2' && index==7){
    return "Websocket";
  }
  else if (seriesName=='Item1' && index==8){
    return "Tensorflow";
  }
  else if (seriesName=='Item2' && index==8){
    return "Pytorch";
  }
  
};

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: (seriesName, index) => {
          return getCategoryLabel(seriesName, index.dataPointIndex);
        },
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Java",
      "Python",
      "WebJS",
      "MobileJS",
      "VControl",
      "Container",
      "OS",
      "API",
      "AI/ML",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
  
};
