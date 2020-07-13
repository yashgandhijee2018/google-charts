 var data=[
  {
     "PName": "JAI PRAKASH JI",
     "Age": 41,
     "Gender": "M",
     "Center": "Gurgaon",
     "WorkOrderID": 10001910579,
     "LabID": 10001910579,
     "DoctorApprovedDateTime": "20-12-2019 17:31",
     "PackageProfileID": "G11S01T32",
     "PackageProfileName": "Health Kind Complete",
     "TestID": "G03S05T75",
     "TestName": "VITAMIN D (25 Hydroxy)",
     "TestTechnique": "",
     "TestResultValue": "8.2",
     "TestMeasuringUnit": "",
     "TestParameterMinRangeValue": 30,
     "TestParameterMaxRangeValue": 100,
     "TestParameterMinCriticalRangeValue": null,
     "TestParameterMaxCriticalRangeValue": null,
     "sampletype": null,
     "BarcodeNo": 6611980,
     "SamplecollectedDate": "20-12-2019",
     "SampleReceiveDate": "20-12-2019 09:41",
     "ResultEnteredDate": "20-12-2019 00:00",
     "LastPrintedDateTime": "21-12-2019 15:20",
     "ApprovedDate": "20-12-2019 15:11",
     "DoctorName": "ARUN GARG",
     "TestParameterMachineTestedOn": null,
     "TestParameterMachineReading": null
   },
   {
     "PName": "JAI PRAKASH JI",
     "Age": 41,
     "Gender": "M",
     "Center": "Gurgaon",
     "WorkOrderID": 10001910579,
     "LabID": 10001910579,
     "DoctorApprovedDateTime": "20-12-2019 17:31",
     "PackageProfileID": "G11S01T32",
     "PackageProfileName": "Health Kind Complete",
     "TestID": "G03S05T75",
     "TestName": "VITAMIN D (25 Hydroxy)",
     "TestTechnique": "",
     "TestResultValue": "15.6",
     "TestMeasuringUnit": "",
     "TestParameterMinRangeValue": 30,
     "TestParameterMaxRangeValue": 100,
     "TestParameterMinCriticalRangeValue": null,
     "TestParameterMaxCriticalRangeValue": null,
     "sampletype": null,
     "BarcodeNo": 6611980,
     "SamplecollectedDate": "20-12-2019",
     "SampleReceiveDate": "20-12-2019 09:41",
     "ResultEnteredDate": "20-12-2019 00:00",
     "LastPrintedDateTime": "21-12-2019 15:20",
     "ApprovedDate": "16-03-2020 15:11",
     "DoctorName": "ARUN GARG",
     "TestParameterMachineTestedOn": null,
     "TestParameterMachineReading": null
   },
   {
     "PName": "JAI PRAKASH JI",
     "Age": 41,
     "Gender": "M",
     "Center": "Gurgaon",
     "WorkOrderID": 10001910579,
     "LabID": 10001910579,
     "DoctorApprovedDateTime": "20-12-2019 17:31",
     "PackageProfileID": "G11S01T32",
     "PackageProfileName": "Health Kind Complete",
     "TestID": "G03S05T75",
     "TestName": "VITAMIN D (25 Hydroxy)",
     "TestTechnique": "",
     "TestResultValue": "10.2",
     "TestMeasuringUnit": "",
     "TestParameterMinRangeValue": 30,
     "TestParameterMaxRangeValue": 100,
     "TestParameterMinCriticalRangeValue": null,
     "TestParameterMaxCriticalRangeValue": null,
     "sampletype": null,
     "BarcodeNo": 6611980,
     "SamplecollectedDate": "20-12-2019",
     "SampleReceiveDate": "20-12-2019 09:41",
     "ResultEnteredDate": "20-12-2019 00:00",
     "LastPrintedDateTime": "25-05-2020 15:20",
     "ApprovedDate": "25-05-2020 15:11",
     "DoctorName": "ARUN GARG",
     "TestParameterMachineTestedOn": null,
     "TestParameterMachineReading": null
   },
   {
    "PName": "JAI PRAKASH JI",
    "Age": 41,
    "Gender": "M",
    "Center": "Gurgaon",
    "WorkOrderID": 10001910579,
    "LabID": 10001910579,
    "DoctorApprovedDateTime": "20-12-2019 17:31",
    "PackageProfileID": "G11S01T32",
    "PackageProfileName": "Health Kind Complete",
    "TestID": "G03S05T75",
    "TestName": "VITAMIN D (25 Hydroxy)",
    "TestTechnique": "",
    "TestResultValue": "22.2",
    "TestMeasuringUnit": "",
    "TestParameterMinRangeValue": 30,
    "TestParameterMaxRangeValue": 100,
    "TestParameterMinCriticalRangeValue": null,
    "TestParameterMaxCriticalRangeValue": null,
    "sampletype": null,
    "BarcodeNo": 6611980,
    "SamplecollectedDate": "20-12-2019",
    "SampleReceiveDate": "20-12-2019 09:41",
    "ResultEnteredDate": "20-12-2019 00:00",
    "LastPrintedDateTime": "21-12-2019 15:20",
    "ApprovedDate": "17-12-2020 15:11",
    "DoctorName": "ARUN GARG",
    "TestParameterMachineTestedOn": null,
    "TestParameterMachineReading": null
   }
]

/*
(function () {

    var chart = new CanvasJS.Chart("comparative_chart", {
        animationEnabled: true,
        title:{
            text: "text"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Value",
            includeZero: false,
            suffix: "mkkm"
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip:{
            shared: true
        },
        data: [{
            name:"gd",
            type: "spline",
            yValueFormatString: "#0.## ",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,1,24), y: 8.2 },
                { x: new Date(2017,3,25), y: 9.8 },
                { x: new Date(2017,5,26), y: 9.9 },
                { x: new Date(2017,7,27), y: 10.2 },
                { x: new Date(2017,9,28), y: 42.7 },
                { x: new Date(2017,11,29), y: 53.8 },
                { x: new Date(2018,3,30), y: 54.2 }
            ]
        },
        {
            name: "Vitamin C",
            type: "spline",
            yValueFormatString: "#0.## ng/mL",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,1,24), y: 19.1 },
                { x: new Date(2017,3,25), y: 22.4 },
                { x: new Date(2017,5,26), y: 26.7 },
                { x: new Date(2017,7,27), y: 27.2 },
                { x: new Date(2017,9,28), y: 56.3 },
                { x: new Date(2017,11,29), y: 46.2 },
                { x: new Date(2018,3,30), y: 49.2 }
            ]
        }
    
        ],
    
    });
    chart.render();
    
    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    })();
    */
   function chartPlot() {

    var chart = new CanvasJS.Chart("chart_comparative", {
        animationEnabled: false, // if true, will increase rendering time
        zoomEnabled: true,
        theme:"light2",
        backgroundColor: "#FFFFFF",
        height:300,
        subtitles:[
            {
                text: "Critical",
                fontColor: "red",
                fontSize: 14,
                cornerRadius: 4,
            }
            ],
        title:{
            text: data[0].TestName,
            fontColor: "#008B8B",
            fontFamily: "arial",
            fontSize: 20,
        },
        axisX: {
            valueFormatString: "DD MMM,YY",
            labelFontColor: "#FF8C00",
            tickThickness: 2,
            tickColor: "#FF6600",
            lineColor: "#000000",
            lineThickness: 2,
            gridThickness: 0,
            //stripLines:get_stripLines(),
            crosshair:{
                enabled: true, //disable here
                snapToDataPoint: true,
                color: "#00FF00",
                labelBackgroundColor: "#33CC00",
                opacity: .9,
                labelWrap: true,
            } 
        },
        axisY: {
            title: "Value",
            includeZero: true,
            suffix: get_unit(),
            gridThickness: 0,
            titleFontColor: "#008B8B",
            titleFontSize: 14,
            margin: 0,
            labelFontColor: "#269900",
        },
        legend:{
            cursor: "pointer",
            fontSize: 15,
            itemclick: toggleDataSeries
        },
        toolTip:{
            shared: true,
            fontColor: "#008B8B",
            Content: "{x} : {y}",
            cornerRadius: 8
        },
    
        data: [{
            name: data[0].TestName,
            type: "spline",
            yValueFormatString: "#0.## "+get_unit(),
            showInLegend: true,
            dataPoints: generate_data_points(),
            markerSize: 10,
            color:"#2eb82e",
            lineColor: "#008B8B",
            indexLabel: "{y}",
            indexLabelMaxWidth:50,
            indexLabelFontSize: 12,
            indexLabelFontColor: "#993366",
        }
        /*{
            name: "Martha Vineyard",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 20 },
                { x: new Date(2017,6,25), y: 20 },
                { x: new Date(2017,6,26), y: 25 },
                { x: new Date(2017,6,27), y: 25 },
                { x: new Date(2017,6,28), y: 25 },
                { x: new Date(2017,6,29), y: 25 },
                { x: new Date(2017,6,30), y: 25 }
            ]
        },
        {
            name: "Nantucket",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 22 },
                { x: new Date(2017,6,25), y: 19 },
                { x: new Date(2017,6,26), y: 23 },
                { x: new Date(2017,6,27), y: 24 },
                { x: new Date(2017,6,28), y: 24 },
                { x: new Date(2017,6,29), y: 23 },
                { x: new Date(2017,6,30), y: 23 }
            ]
        }*/],
    
    });
    chart.render();
    
    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
    }

    chartPlot();

    //for getting the unit of the y axis
    function get_unit(){
        if(data[0].TestMeasuringUnit==""){
            return " ng/mL";
        }
        else{
            return data[0].TestMeasuringUnit;
        }
    }

    //for getting the data value for y axis 
    function get_TestResultValue(){
        var arr=new Array();
        for(var i=0;i<data.length;i++){
            arr[i]=parseFloat(data[i].TestResultValue);
            //console.log(arr[i]);
        }
        return arr;
    }

    //for getting the dates for x axis 
    function get_ApprovedDate(){
        var arr=new Array(data.length);
        for(var i=0;i<data.length;i++){
            arr[i]=new Array(3);
        }

        for(var i=0;i<data.length;i++){
            
            arr[i][0]=parseInt(data[i].ApprovedDate.substring(6,10));
            arr[i][1]=parseInt(data[i].ApprovedDate.substring(3,5));
            arr[i][2]=parseInt(data[i].ApprovedDate.substring(0,2));
            //console.log(arr[i][0]);
        }
        return arr;
    }

    //generate point from x and y value arrays
    function generate_data_points(){
        var yval=get_TestResultValue();
        var xval=get_ApprovedDate();

        var arr=new Array();
        for(var i=0;i<data.length;i++){
            arr[i]={x: new Date(xval[i][0],xval[i][1],xval[i][2]), y:yval[i]};
            console.log(arr[i]);
        }
        return arr;
    }

    //for plotting the vertical lines using the x values and label using y values
    function get_stripLines(){
        var xval=get_ApprovedDate();
        var yval=get_TestResultValue();
        var res=new Array();
        for(var i=0;i<xval.length;i++){
            res[i]={
                value:new Date(xval[i][0],xval[i][1],xval[i][2]),
                label:yval[i],
                labelPlacement:"inside",
                labelAlign: "center",//"center", "near"
                labelFontSize:12
            };
            console.log(res[i]);
        }
        return res;
    }