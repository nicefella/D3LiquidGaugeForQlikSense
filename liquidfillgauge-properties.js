/**
 * @owner Ismail Baygin
 */

define( [], function () {

	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: {
				uses: "dimensions",
				min: 0,
				max: 0
			},
			measures: {
				uses: "measures",
				min: 1,
				max: 1
			},
			sorting: {
				uses: "sorting"
			},
			settings: {
						uses: "settings",
						items: {
                           minValue: {
								type: "integer",
                                ref: "minValue",
								label: "minValue",
								defaultValue: 0
							},
                           maxValue: {
								type: "integer",
                                ref: "maxValue",
								label: "maxValue",
								defaultValue: 100
							},
                          
                           circleFillGap: {
								type: "number",
                                ref: "circleFillGap",
								label: "circleFillGap",
								defaultValue: 0.05
							},
                           waveHeight: {
								type: "number",
                                ref: "waveHeight",
								label: "waveHeight",
								defaultValue: 0.05
							},      
                           waveCount: {
								type: "integer",
                                ref: "waveCount",
								label: "waveCount",
								defaultValue: 1
							},
                          
                           waveRiseTime: {
								type: "integer",
                                ref: "waveRiseTime",
								label: "waveRiseTime",
								defaultValue: 1000
							},
                           waveAnimateTime: {
								type: "integer",
                                ref: "waveAnimateTime",
								label: "waveAnimateTime",
								defaultValue: 18000
							},
                           circleThickness: {
								type: "number",
                                ref: "circleThickness",
								label: "circleThickness",
								defaultValue: 0.05
							},
						  waveHeightScaling: {
								type: "boolean",
                                ref: "waveHeightScaling",
								label: "waveHeightScaling",
								defaultValue: true
							},
                           textVertPosition: {
								type: "number",
                                ref: "textVertPosition",
								label: "textVertPosition",
								defaultValue: 0.5
							},
                           textSize: {
								type: "integer",
                                ref: "textSize",
								label: "textSize",
								defaultValue: 1
							},
                          waveRise: {
								type: "boolean",
                                ref: "waveRise",
								label: "waveRise",
								defaultValue: true
							},
                          waveAnimate: {
								type: "boolean",
                                ref: "waveAnimate",
								label: "waveAnimate",
								defaultValue: true
							},
                          waveColor: {
								type: "integer",
                                component: "color-picker",
                                ref: "waveColor",
								label: "waveColor",
								defaultValue: 4
							},
                          waveTextColor: {
								type: "integer",
                                component: "color-picker",
                                ref: "waveTextColor",
								label: "waveTextColor",
								defaultValue: 11
							},
                          valueCountUp: {
								type: "boolean",
                                ref: "valueCountUp",
								label: "valueCountUp",
								defaultValue: true
							},
                          displayPercent: {
								type: "boolean",
                                ref: "displayPercent",
								label: "displayPercent",
								defaultValue: true
							},
                          circleColor: {
                    			type: "integer",  
                    			component: "color-picker",  
                                ref: "circleColor",
								label: "circleColor",
								defaultValue: 11
							},
                          textColor: {
								type: "integer",  
                    			component: "color-picker",
                                ref: "textColor",
								label: "textColor",
								defaultValue: 10
							}
						}
					  }
		}
	};

} );
