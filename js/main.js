    AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "startDuration": 1,
                    "categoryAxis": {
                        "gridPosition": "start"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "id": "AmGraph-1",
                            "tabIndex": 0,
                            "title": "exam",
                            "valueField": "column-1"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": ""
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "useGraphSettings": true
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": ""
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "11",
                            "column-1": 8
                        },
                        {
                            "category": "12",
                            "column-1": 6
                        },
                        {
                            "category": "13",
                            "column-1": 2
                        },
                        {
                            "category": "14",
                            "column-1": 1
                        },
                        {
                            "category": "14",
                            "column-1": 2
                        },
                        {
                            "category": "15",
                            "column-1": 3
                        },
                        {
                            "category": "16",
                            "column-1": 6
                        }
                    ]
                }
            );