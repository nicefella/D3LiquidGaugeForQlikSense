/*globals define, console*/

define(["jquery", "./liquidfillgauge-properties", "./source-d3liquidfillgauge", "./d3"], function($, properties) {'use strict';
	return {
		type : "D3 Liquid Fill Gauge",
		//Refer to the properties file
		definition : properties,

		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 2,
					qHeight : 50
				}]
			},
			fontSize : {
				min : 8,
				max : 24
			}
		},
		snapshot : {
			canTakeSnapshot : true
		},
		paint : function($element, layout) {
			var self = this;
			var w = $element.width(), h = $element.height();
			var i;

			//check that we have data to render
			if(layout.qHyperCube.qDataPages[0].qMatrix.length) {
              
				$.each(layout.qHyperCube.qDataPages[0].qMatrix, function(key, row) {

				var  measure = row[0];
                  
   				 var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                  svg.id = "fillgauge" + Math.floor(Math.random() * (10000000 - 1)) + 1;
                  svg.setAttribute('width', '85%');
                  svg.setAttribute('height', '85%');
                  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                  $element.html(svg);
 

                    var gaugeConfig = liquidFillGaugeDefaultSettings();
                 	  gaugeConfig.minValue  = layout.minValue,
                      gaugeConfig.maxValue  = layout.maxValue,
                      gaugeConfig.circleFillGap  = layout.circleFillGap,
                      gaugeConfig.waveHeight  = layout.waveHeight,
                      gaugeConfig.waveCount  = layout.waveCount,
                      gaugeConfig.waveRiseTime = layout.waveRiseTime,
                      gaugeConfig.waveAnimateTime = layout.waveAnimateTime,
                      gaugeConfig.waveHeightScaling = layout.waveHeightScaling,
                      gaugeConfig.textVertPosition = layout.textVertPosition,
                      gaugeConfig.textSize = layout.textSize,                
                      gaugeConfig.circleColor = getColorHex(layout.circleColor);
                      gaugeConfig.textColor = getColorHex(layout.textColor);
                      gaugeConfig.waveTextColor = getColorHex(layout.waveTextColor);
              	      gaugeConfig.waveColor = getColorHex(layout.waveColor);
                      gaugeConfig.circleThickness = layout.circleThickness;
                  	  gaugeConfig.waveRise = layout.waveRise;
                  	  gaugeConfig.waveAnimate = layout.waveAnimate;
                      gaugeConfig.valueCountUp = layout.valueCountUp;
                      gaugeConfig.displayPercent = layout.displayPercent;
					  
                      var currentcolor;
					  					  
					  if(layout.props.colorsSwitch)
					  {
						if(measure.qNum <= layout.props.inferiorLimit1)
						{
							currentcolor = layout.props.Color1;	
						}
						else if(measure.qNum > layout.props.inferiorLimit2)
						{
							currentcolor = layout.props.Color3;	
						}
						else
						{
							currentcolor = layout.props.Color2;	
						}
					
					  gaugeConfig.circleColor = getColorHex(currentcolor);
					  gaugeConfig.textColor = getColorHex(currentcolor);
					  }
					  
                      loadLiquidFillGauge(svg.id, measure.qNum, gaugeConfig);

				});
              
			}
          
          

          
		},
		clearSelectedValues : function($element) {
			//jQuery can not change class of SVG element, need d3 for that
			d3.select($element[0]).selectAll(".selected").classed("selected", false);
		}
	};
});