define([], function() {
		var ColorsSection = {
			component: "expandable-items",
			label: "Colors",
			items: {
				ColorsSwitch: {
						type: "boolean",
						component: "switch",
						label: "Semaphore Switch",
						ref: "props.colorsSwitch",
						options: [{
							value: true,
							label: "On"
						}, {
							value: false,
							label: "Off"
						}],
						defaultValue: false
					},
				header1: {
					type: "items",
					label: "Color 1",
					items: {
						    Color1: {
								type: "integer",  
                    			component: "color-picker",
                                ref: "props.Color1",
								label: "Color1",
								defaultValue: 7
							}
					}
				},
				header2: {
					type: "items",
					label: "Color 2",
					items: {
						    Color2: {
								type: "integer",  
                    			component: "color-picker",
                                ref: "props.Color2",
								label: "Color2",
								defaultValue: 8
							},
						    Value: {
								type: "integer",
                                ref: "props.inferiorLimit1",
								label: "inferior Limit",
								defaultValue: 33.33
							}
					}
				},
				
				header3: {
					type: "items",
					label: "Color 3",
					items: {
						    Color3: {
								type: "integer",  
                    			component: "color-picker",
                                ref: "props.Color3",
								label: "Color3",
								defaultValue: 9
							},
						    Value: {
								type: "integer",
                                ref: "props.inferiorLimit2",
								label: "inferior Limit",
								defaultValue: 66.66
							}
					}
				}
			}
		};
		return 	ColorsSection;
})