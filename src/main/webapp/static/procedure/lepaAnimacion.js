
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cargandoDatos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CEJA
	this.instance = new lib.PARPADOS();
	this.instance.setTransform(415.6,142.1,0.969,0.112,-10.1,0,0,40.4,-0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:40.3,regY:0.1,scaleY:0.97,x:415.2,y:141.7},4,cjs.Ease.get(1)).wait(4).to({regX:40.4,regY:-0.1,scaleY:0.12,x:415.6,y:142},4,cjs.Ease.get(1)).to({_off:true},1).wait(132).to({regX:40.3,regY:0.1,scaleY:0.14,x:415.2,y:141.5,_off:false},0).to({scaleY:0.97},4,cjs.Ease.get(1)).wait(4).to({scaleY:0.14},3,cjs.Ease.get(1)).to({_off:true},1).wait(50));

	// Capa 2
	this.instance_1 = new lib.cabezaAdan();
	this.instance_1.setTransform(422.4,177.9,0.96,0.96,0,0,0,87.7,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(236));

	// Capa 6
	this.instance_2 = new lib.numerosCargando();
	this.instance_2.setTransform(426.3,205.2,0.698,0.698,0,0,0,16.9,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(236));

	// Capa 3
	this.instance_3 = new lib.cuerpoAdan();
	this.instance_3.setTransform(425.8,225.5,0.96,0.96,0,0,0,48.2,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(236));

	// Capa 4
	this.instance_4 = new lib.brazoOtroAdan();
	this.instance_4.setTransform(379,212.4,0.96,0.96,0,0,0,48.6,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(236));

	// <Group>_1
	this.instance_5 = new lib.brasoderecheAdan();
	this.instance_5.setTransform(474.6,207,0.958,0.956,0,169.7,-10.2,13,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(236));

	// <Path>_4
	this.instance_6 = new lib.cuello_Adan();
	this.instance_6.setTransform(425.7,188.4,0.96,0.96,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(236));

	// <Path>_6
	this.instance_7 = new lib.piesAdan();
	this.instance_7.setTransform(426.9,263.4,0.96,0.96,0,0,0,68.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(236));

	// numerosCargando
	this.instance_8 = new lib.numerosCargando();
	this.instance_8.setTransform(152.5,280.1,1.425,1.425,0,0,0,17.1,10.7);
	this.instance_8.alpha = 0.512;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(235));

	// numerosCargando
	this.instance_9 = new lib.numerosCargando();
	this.instance_9.setTransform(152.5,318.5,1.425,1.425,0,0,0,17.1,10.7);
	this.instance_9.alpha = 0.512;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).wait(234));

	// numerosCargando
	this.instance_10 = new lib.numerosCargando();
	this.instance_10.setTransform(152.5,353.1,1.425,1.425,0,0,0,17.1,10.7);
	this.instance_10.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(236));

	// Capa 2
	this.instance_11 = new lib.CARGADEDATOS();
	this.instance_11.setTransform(91.3,250.7,1.208,1.208,0,0,0,88.7,89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(236));

	// Capa 11
	this.instance_12 = new lib.Símbolo2();
	this.instance_12.setTransform(194,328.2,1,1,0,0,0,13.5,13.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96).to({_off:false},0).wait(1).to({regX:13.4,regY:13.4,x:199.8,y:329.3},0).wait(1).to({x:206.4,y:331.5},0).wait(1).to({x:212.9,y:333.9},0).wait(1).to({x:219.3,y:336.2},0).wait(1).to({x:225.7,y:338.6},0).wait(1).to({x:232.2,y:341},0).wait(1).to({x:238.8,y:343.2},0).wait(1).to({x:245.3,y:345.4},0).wait(1).to({x:252,y:347.4},0).wait(1).to({x:258.7,y:349.3},0).wait(1).to({x:265.4,y:351.1},0).wait(1).to({x:272.1,y:352.7},0).wait(1).to({x:278.8,y:354.2},0).wait(1).to({x:285.5,y:355.5},0).wait(1).to({x:292.3,y:356.8},0).wait(1).to({x:299,y:357.9},0).wait(1).to({x:305.8,y:358.9},0).wait(1).to({x:312.7,y:359.8},0).wait(1).to({x:319.5,y:360.6},0).wait(1).to({x:326.3,y:361.4},0).wait(1).to({x:333.2,y:362},0).wait(1).to({x:340.2,y:362.6},0).wait(1).to({x:347.2,y:362.9},0).wait(1).to({x:354,y:363.3},0).wait(1).to({x:360.8,y:363.4},0).wait(1).to({x:367.7},0).wait(1).to({x:374.6,y:363.1},0).wait(1).to({x:381.7,y:362.7},0).wait(1).to({x:388.5,y:362},0).wait(1).to({x:395.2,y:360.9},0).wait(1).to({x:401.8,y:359.3},0).wait(1).to({x:408.3,y:356.9},0).wait(1).to({x:413.7,y:353.1},0).wait(1).to({x:416.9,y:346.9},0).wait(1).to({x:416.7,y:340},0).wait(1).to({x:414.2,y:333.6},0).wait(1).to({x:409.5,y:328.6},0).wait(1).to({x:403.5,y:325.1},0).wait(1).to({x:396.8,y:322.9},0).wait(1).to({x:390.1,y:321.4},0).wait(1).to({x:383.3,y:320.5},0).wait(1).to({x:376.4,y:320},0).wait(1).to({x:369.6,y:319.7},0).wait(1).to({x:362.6},0).wait(1).to({x:355.7},0).wait(1).to({x:348.9,y:319.6},0).wait(1).to({x:342,y:319.3},0).wait(1).to({x:335.2,y:318.5},0).wait(1).to({x:328.5,y:317.2},0).wait(1).to({x:321.9,y:315.1},0).wait(1).to({x:315.7,y:312.3},0).wait(1).to({x:309.8,y:308.5},0).wait(1).to({x:305.3,y:303.2},0).wait(1).to({x:303.4,y:296.7},0).wait(1).to({x:304.4,y:289.9},0).wait(1).to({x:307.8,y:284.3},0).wait(1).to({x:313.2,y:280.1},0).wait(1).to({x:319.9,y:277.5},0).wait(1).to({x:326.7,y:276.7},0).wait(1).to({x:333.6,y:277.1},0).wait(1).to({x:340.4,y:278.2},0).wait(1).to({x:347.4,y:279},0).wait(1).to({x:354.1,y:277.9},0).wait(1).to({x:360,y:275.1},0).wait(1).to({x:366.3,y:271.7},0).wait(1).to({x:372.9,y:269.3},0).wait(1).to({x:376.7,y:268.5},0).to({_off:true},1).wait(72));

	// Capa 11
	this.instance_13 = new lib.Símbolo2();
	this.instance_13.setTransform(194.5,327.2,1,1,0,0,0,13.5,13.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(157).to({_off:false},0).wait(1).to({regX:13.4,regY:13.4,x:202.2,y:329.4},0).wait(1).to({x:210.2,y:332.2},0).wait(1).to({x:218.2,y:335.1},0).wait(1).to({x:226.1,y:338},0).wait(1).to({x:233.7,y:340.8},0).wait(1).to({x:241.7,y:343.5},0).wait(1).to({x:249.8,y:346.1},0).wait(1).to({x:258,y:348.4},0).wait(1).to({x:265.9,y:350.6},0).wait(1).to({x:274,y:352.5},0).wait(1).to({x:282.3,y:354.3},0).wait(1).to({x:290.6,y:355.9},0).wait(1).to({x:299,y:357.3},0).wait(1).to({x:307.1,y:358.5},0).wait(1).to({x:315.4,y:359.6},0).wait(1).to({x:323.7,y:360.5},0).wait(1).to({x:332.2,y:361.4},0).wait(1).to({x:340.6,y:362},0).wait(1).to({x:348.9,y:362.6},0).wait(1).to({x:357.3,y:362.9},0).wait(1).to({x:365.6},0).wait(1).to({x:374,y:362.7},0).wait(1).to({x:382.3,y:362.2},0).wait(1).to({x:390.7,y:361.3},0).wait(1).to({x:399,y:359.7},0).wait(1).to({x:407,y:357.2},0).wait(1).to({x:413.9,y:352.9},0).wait(1).to({x:417.5,y:345.4},0).wait(1).to({x:416.6,y:337.1},0).wait(1).to({x:412.2,y:330},0).wait(1).to({x:405.2,y:325.2},0).wait(1).to({x:397.3,y:322.3},0).wait(1).to({x:389.3,y:320.7},0).wait(1).to({x:380.8,y:319.8},0).wait(1).to({x:372.4,y:319.3},0).wait(1).to({x:364.1,y:319.2},0).wait(1).to({x:355.7},0).wait(1).to({x:347.3,y:319.1},0).wait(1).to({x:338.8,y:318.5},0).wait(1).to({x:330.5,y:317},0).wait(1).to({x:322.6,y:314.7},0).wait(1).to({x:315,y:311.2},0).wait(1).to({x:308.5,y:306.3},0).wait(1).to({x:304.3,y:298.9},0).wait(1).to({x:304.6,y:290.5},0).wait(1).to({x:308.6,y:283.5},0).wait(1).to({x:315.6,y:278.6},0).wait(1).to({x:323.8,y:276.4},0).wait(1).to({x:332},0).wait(1).to({x:340.3,y:277.5},0).wait(1).to({x:348.7,y:278.5},0).wait(1).to({x:356.6,y:276.6},0).wait(1).to({x:364.2,y:272.6},0).wait(1).to({x:371.9,y:269.3},0).wait(1).to({x:377.2,y:268},0).to({_off:true},1).wait(23));

	// Capa 11
	this.instance_14 = new lib.Símbolo2();
	this.instance_14.setTransform(194.5,327.7,1,1,0,0,0,13.5,13.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({_off:false},0).wait(1).to({regX:13.4,regY:13.4,x:200,y:329.2},0).wait(1).to({x:205.8,y:331.1},0).wait(1).to({x:211.6,y:333.2},0).wait(1).to({x:217.2,y:335.3},0).wait(1).to({x:222.9,y:337.4},0).wait(1).to({x:228.6,y:339.5},0).wait(1).to({x:234.4,y:341.6},0).wait(1).to({x:240.2,y:343.5},0).wait(1).to({x:245.8,y:345.4},0).wait(1).to({x:251.6,y:347.1},0).wait(1).to({x:257.5,y:348.8},0).wait(1).to({x:263.5,y:350.4},0).wait(1).to({x:269.3,y:351.9},0).wait(1).to({x:275.1,y:353.2},0).wait(1).to({x:281.1,y:354.5},0).wait(1).to({x:287.1,y:355.7},0).wait(1).to({x:293.2,y:356.9},0).wait(1).to({x:299,y:357.8},0).wait(1).to({x:305,y:358.7},0).wait(1).to({x:311,y:359.5},0).wait(1).to({x:317.2,y:360.3},0).wait(1).to({x:323.2,y:361},0).wait(1).to({x:329.1,y:361.6},0).wait(1).to({x:335.1,y:362.1},0).wait(1).to({x:341.2,y:362.6},0).wait(1).to({x:347.4,y:362.9},0).wait(1).to({x:353.5,y:363.2},0).wait(1).to({x:359.6,y:363.4},0).wait(1).to({x:365.6},0).wait(1).to({x:371.6,y:363.3},0).wait(1).to({x:377.6,y:363},0).wait(1).to({x:383.7,y:362.6},0).wait(1).to({x:389.8,y:361.9},0).wait(1).to({x:395.8,y:360.9},0).wait(1).to({x:401.8,y:359.5},0).wait(1).to({x:407.5,y:357.5},0).wait(1).to({x:412.5,y:354.6},0).wait(1).to({x:416.5,y:349.8},0).wait(1).to({x:417.6,y:343.8},0).wait(1).to({x:416.7,y:337.9},0).wait(1).to({x:414.1,y:332.7},0).wait(1).to({x:409.6,y:328.3},0).wait(1).to({x:404.6,y:325.4},0).wait(1).to({x:398.6,y:323.2},0).wait(1).to({x:392.8,y:321.8},0).wait(1).to({x:386.8,y:320.9},0).wait(1).to({x:380.7,y:320.3},0).wait(1).to({x:374.6,y:319.9},0).wait(1).to({x:368.7,y:319.7},0).wait(1).to({x:362.5},0).wait(1).to({x:356.4},0).wait(1).to({x:350.2,y:319.6},0).wait(1).to({x:344.3,y:319.4},0).wait(1).to({x:338.3,y:318.9},0).wait(1).to({x:332.3,y:317.9},0).wait(1).to({x:326.3,y:316.4},0).wait(1).to({x:320.5,y:314.4},0).wait(1).to({x:315.3,y:311.9},0).wait(1).to({x:310.3,y:308.4},0).wait(1).to({x:306.3,y:304},0).wait(1).to({x:304.1,y:298.2},0).wait(1).to({x:304.3,y:292.1},0).wait(1).to({x:306.5,y:286.7},0).wait(1).to({x:310.6,y:282.2},0).wait(1).to({x:316,y:278.9},0).wait(1).to({x:321.6,y:277.3},0).wait(1).to({x:327.7,y:276.7},0).wait(1).to({x:333.9,y:277},0).wait(1).to({x:339.8,y:278},0).wait(1).to({x:345.7,y:278.9},0).wait(1).to({x:351.8,y:278.7},0).wait(1).to({x:357.4,y:276.7},0).wait(1).to({x:362.9,y:273.8},0).wait(1).to({x:368.3,y:271.1},0).wait(1).to({x:374.1,y:269.2},0).wait(1).to({x:377.2,y:268.5},0).to({_off:true},1).wait(137));

	// Capa 9
	this.instance_15 = new lib.Símbolo2();
	this.instance_15.setTransform(407.7,105.2,0.574,0.574,0,0,0,13.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(236));

	// Capa 12
	this.instance_16 = new lib.Símbolo2();
	this.instance_16.setTransform(194.5,327.7,1,1,0,0,0,13.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:13.4,regY:13.4,x:200.1,y:329.3},0).wait(1).to({x:206.2,y:331.3},0).wait(1).to({x:211.9,y:333.3},0).wait(1).to({x:217.9,y:335.5},0).wait(1).to({x:223.8,y:337.7},0).wait(1).to({x:229.6,y:339.8},0).wait(1).to({x:235.4,y:341.9},0).wait(1).to({x:241.4,y:343.9},0).wait(1).to({x:247.2,y:345.8},0).wait(1).to({x:253.3,y:347.6},0).wait(1).to({x:259.2,y:349.3},0).wait(1).to({x:265.2,y:350.9},0).wait(1).to({x:271.5,y:352.4},0).wait(1).to({x:277.4,y:353.7},0).wait(1).to({x:283.5,y:355},0).wait(1).to({x:289.8,y:356.3},0).wait(1).to({x:295.7,y:357.3},0).wait(1).to({x:302,y:358.3},0).wait(1).to({x:308.2,y:359.2},0).wait(1).to({x:314.3,y:359.9},0).wait(1).to({x:320.6,y:360.7},0).wait(1).to({x:326.7,y:361.4},0).wait(1).to({x:332.9,y:361.9},0).wait(1).to({x:339.2,y:362.4},0).wait(1).to({x:345.4,y:362.9},0).wait(1).to({x:351.5,y:363.2},0).wait(1).to({x:357.8,y:363.4},0).wait(1).to({x:364.2},0).wait(1).to({x:370.3,y:363.3},0).wait(1).to({x:376.5,y:363.1},0).wait(1).to({x:382.7,y:362.7},0).wait(1).to({x:389.1,y:362},0).wait(1).to({x:395.1,y:361.1},0).wait(1).to({x:401.1,y:359.7},0).wait(1).to({x:407.1,y:357.6},0).wait(1).to({x:412.4,y:354.7},0).wait(1).to({x:416.5,y:349.8},0).wait(1).to({x:417.5,y:343.7},0).wait(1).to({x:416.7,y:337.7},0).wait(1).to({x:413.7,y:332.2},0).wait(1).to({x:409.3,y:328.1},0).wait(1).to({x:403.6,y:325},0).wait(1).to({x:397.7,y:323},0).wait(1).to({x:391.7,y:321.6},0).wait(1).to({x:385.5,y:320.7},0).wait(1).to({x:379.2,y:320.1},0).wait(1).to({x:373.1,y:319.8},0).wait(1).to({x:366.6,y:319.7},0).wait(1).to({x:360.6},0).wait(1).to({x:354.3},0).wait(1).to({x:347.9,y:319.6},0).wait(1).to({x:341.9,y:319.3},0).wait(1).to({x:335.6,y:318.5},0).wait(1).to({x:329.4,y:317.3},0).wait(1).to({x:323.6,y:315.6},0).wait(1).to({x:317.8,y:313.2},0).wait(1).to({x:312.6,y:310.2},0).wait(1).to({x:307.8,y:306},0).wait(1).to({x:304.7,y:300.6},0).wait(1).to({x:304,y:294.3},0).wait(1).to({x:305.5,y:288.4},0).wait(1).to({x:309.2,y:283.3},0).wait(1).to({x:314.1,y:279.9},0).wait(1).to({x:320.2,y:277.6},0).wait(1).to({x:326.2,y:276.7},0).wait(1).to({x:332.5,y:276.9},0).wait(1).to({x:338.7,y:277.8},0).wait(1).to({x:344.7,y:278.8},0).wait(1).to({x:351.1},0).wait(1).to({x:356.9,y:277},0).wait(1).to({x:362.5,y:274},0).wait(1).to({x:368,y:271.2},0).wait(1).to({x:373.9,y:269.2},0).wait(1).to({x:377.2,y:268.5},0).to({_off:true},1).wait(161));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E3E77").ss(4.1,1,1).p("AxgB0QBBAPB1ArQDXBPARAGQFTB2FhAzQHUBCE1gYQFXgcAOiGQAVjGkSgzQhbgRiNgDQgEAAgFAAQgEAAgEAAQgCAAgCAAQhgAAhOgBQi+gBiFhAQiZhOAbiAQANhJBFgrQBYg3CQAVQAdAFAcAFQA9AMAtgJQAggHAqgXQA+giASgIQA2gYBCgJ");
	this.shape.setTransform(305.1,315.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.4,24.6,514.7,342.5);


// symbols:
(lib.numerosCargando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("ABaAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAPAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgPAAgIgJgABngbQgDAFAAALIAAAWQAAAMADAFQADAFAHAAQAGAAADgFQADgFAAgMIAAgWQAAgLgDgFQgDgFgGAAQgHAAgDAFgAgiAvIgGAAQgJgBgHgGQgJgHAAgMIASgBQAAAGAEADIADADIAGABIACgBQAFAAACgEQADgEAAgIQAAgIgDgFQgDgDgHAAQgFAAgDABQgDACgBADIgQgBIAFgyIA0AAIAAAPIglAAIgCAWIAGgEIAIgBQANAAAIAIQAHAGAAAPQAAANgIAJQgIAIgNABIgCAAgAAHAuIAAgMIAeggIAJgLQADgFAAgEQAAgGgDgEQgDgEgGAAQgHAAgDAFQgDAEAAAHIgSAAIAAAAQgBgNAJgIQAIgJAPAAQAOAAAIAHQAIAIAAAMQAAAJgEAHQgFAFgKALIgRASIAnAAIAAAPgAhoAuIAAgUIgmAAIgBgLIAng8IASAAIAAA4IALAAIAAAPIgLAAIAAAUgAhqgRIgTAcIAVAAIAAgfg");
	this.shape.setTransform(16.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D183A").s().p("ABaAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAPAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgPAAgIgJgABngbQgDAFAAALIAAAWQAAAMADAFQADAFAHAAQAGAAADgFQADgFAAgMIAAgWQAAgLgDgFQgDgFgGAAQgHAAgDAFgAgxAuIgJgDIACgNIAIACIAJABQAIAAAEgGQAFgFAAgKIAAgFQgDAEgFACQgEACgFAAQgNAAgHgIQgIgHAAgOQAAgOAJgJQAJgJANAAQAPAAAIAKQAJAJAAASIAAAUQAAARgKAJQgJAKgQAAIgKgBgAgtgbQgDAGAAAHQAAAIADAFQADADAGAAQAFAAADgCQAEAAACgDIAAgIQAAgKgEgFQgDgGgGAAQgGAAgEAFgAAHAuIAAgMIAeggIAJgLQADgFAAgEQAAgGgDgEQgDgEgGAAQgHAAgDAFQgDAEAAAHIgSAAIAAAAQgBgNAJgIQAIgJAPAAQAOAAAIAHQAIAIAAAMQAAAJgEAHQgFAFgKALIgRASIAnAAIAAAPgAhoAuIAAgUIgmAAIgBgLIAng8IASAAIAAA4IALAAIAAAPIgLAAIAAAUgAhqgRIgTAcIAVAAIAAgfg");
	this.shape_1.setTransform(16.8,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D183A").s().p("ABYAoQgKgHABgMIASAAQAAAFAEADQADAEAGAAQAGAAAEgEQAEgDAAgGQAAgIgEgDQgEgDgHAAIgKAAIAAgMIAKAAQAHAAADgEQADgDAAgGQAAgGgDgDQgDgEgGAAQgFAAgEADQgEADABAFIgSAAIAAAAQgBgLAJgHQAJgHAMAAQAPAAAJAHQAIAHAAAMQAAAGgEAGQgEAFgGADQAHABAEAGQAFAFAAAIQAAANgKAHQgJAHgPAAQgNAAgIgHgAAOAmQgJgKAAgSIAAgTQAAgSAJgJQAJgKAOAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgOAAgJgJgAAbgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQACgFAAgMIAAgWQAAgLgCgFQgEgFgGAAQgGAAgEAFgAiFAoQgIgHAAgNQAAgHADgGQAFgFAHgCQgGgDgEgFQgDgFgBgHQAAgMAIgHQAJgHANAAQANAAAIAHQAIAHAAAMQAAAHgEAFQgDAFgHADQAIACAEAFQAEAGABAHQAAANgJAHQgJAHgOAAQgOAAgJgHgAh4AJQgDAEAAAGQAAAHADADQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgGgEgEQgEgDgFAAQgGAAgEADgAh2gcQgDADAAAGQAAAFADAEQACADAGAAQAFAAADgDQADgEAAgFQAAgGgDgDQgDgEgFAAQgGAAgCAEgAhDAuIAAgMIAeggIAKgLQACgFAAgEQAAgGgDgEQgDgEgGAAQgGAAgEAFQgDAEAAAHIgSAAIAAAAQAAgNAIgIQAJgJAOAAQAOAAAJAHQAIAIAAAMQgBAJgEAHQgEAFgLALIgQASIAmAAIAAAPg");
	this.shape_2.setTransform(16.9,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AAKAmQgIgKAAgSIAAgTQAAgSAIgJQAJgKAOAAQAOAAAJAKQAIAJAAASIAAATQAAASgIAKQgJAJgOAAQgOAAgJgJgAAXgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQADgFAAgMIAAgWQAAgLgDgFQgEgFgGAAQgGAAgEAFgABwAuIAAgUIglAAIgBgLIAmg8IATAAIAAA4IAKAAIAAAPIgKAAIAAAUgABvgRIgUAcIAVAAIAAgfgAhGAuIAAgMIAdggIAKgLQACgFAAgEQAAgGgDgEQgDgEgGAAQgGAAgDAFQgEAEAAAHIgSAAIAAAAQAAgNAIgIQAJgJAOAAQAPAAAIAHQAIAIAAAMQAAAJgFAHQgEAFgLALIgQASIAnAAIAAAPgAh6AuIAAhKIgSAAIAAgNIAlgEIAABbg");
	this.shape_3.setTransform(17.3,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D183A").s().p("ABgAuIABgKQACgUAIgQQAHgQAMgOIgvAAIAAgPIBBAAIAAAPQgPARgFANQgGAPgCAVIgBAKgAAWAuIABgKQACgUAHgQQAHgQANgOIgwAAIAAgPIBBAAIAAAPQgOARgGANQgFAPgDAVIgBAKgAgzAuIABgKQACgUAIgQQAHgQAMgOIgvAAIAAgPIBBAAIAAAPQgPARgFANQgGAPgCAVIgBAKgAh9AuIABgKQACgUAHgQQAHgQANgOIgwAAIAAgPIBBAAIAAAPQgOARgGANQgFAPgDAVIgBAKg");
	this.shape_4.setTransform(16.8,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D183A").s().p("ABZAmQgIgKAAgSIAAgTQAAgSAIgJQAJgKAOAAQAOAAAJAKQAIAJAAASIAAATQAAASgIAKQgJAJgOAAQgOAAgJgJgABmgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQADgFAAgMIAAgWQAAgLgDgFQgEgFgGAAQgGAAgEAFgAAQAoQgJgHAAgMIASgBQAAAGAEADQADAEAGAAQAGAAADgFQADgEAAgIQAAgIgDgFQgDgDgHAAQgFAAgDABQgDACgBADIgQgBIAFgyIA0AAIAAAPIglAAIgCAWIAGgEIAIgBQANAAAIAIQAHAGAAAPQAAANgIAJQgIAJgPAAQgNAAgJgHgAiFAoQgKgHABgMIASAAQAAAFAEADQADAEAGAAQAHAAADgEQAEgDAAgGQAAgIgEgDQgDgDgHAAIgLAAIAAgMIALAAQAGAAADgEQAEgDAAgGQAAgGgEgDQgDgEgGAAQgFAAgEADQgDADAAAFIgSAAIAAAAQgBgLAJgHQAJgHANAAQAOAAAJAHQAIAHAAAMQAAAGgEAGQgDAFgHADQAIABAEAGQAEAFAAAIQAAANgKAHQgJAHgOAAQgNAAgJgHgAgzAuIABgKQACgUAIgQQAHgQAMgOIgvAAIAAgPIBBAAIAAAPQgPARgFANQgGAPgCAVIgBAKg");
	this.shape_5.setTransform(16.8,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D183A").s().p("ABWAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAPAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgPAAgIgJgABjgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQACgFAAgMIAAgWQAAgLgCgFQgEgFgGAAQgGAAgEAFgAg9AmQgJgKABgSIAAgTQgBgSAJgJQAJgKAOAAQAOAAAJAKQAIAJAAASIAAATQAAASgIAKQgJAJgOAAQgOAAgJgJgAgwgbQgDAFAAALIAAAWQAAAMADAFQADAFAHAAQAGAAADgFQADgFABgMIAAgWQgBgLgDgFQgDgFgGAAQgHAAgDAFgAAbAuIAAhKIgTAAIAAgNIAlgEIAABbgAh5AuIAAhKIgSAAIAAgNIAlgEIAABbg");
	this.shape_6.setTransform(17.2,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D183A").s().p("Ag6AlQgJgKAAgRIAAgQQAAgTALgKQAKgLAQAAQAFAAAFABIAJADIgEANIgHgCIgIAAQgIAAgFAGQgFAGAAALIAAABQADgEAFgBQAFgCAGAAQAMAAAHAJQAHAGAAAOQAAAOgIAJQgJAJgOAAQgPAAgJgKgAgrAAIgFAEIAAAGQAAALAEAGQAEAGAGAAQAGAAADgFQAEgGAAgHQAAgIgEgEQgDgDgGAAQgFAAgEAAgAiFAoQgJgHAAgNQAAgHAEgGQAEgFAIgCQgHgDgDgFQgEgFAAgHQAAgMAIgHQAIgHAOAAQAGAAAFABQAGACAEAEQAIAHAAAMQAAAHgEAFQgDAFgHADQAIACAEAFQAEAGAAAHQAAANgJAHQgEAEgHACQgFABgGAAQgPAAgIgHgAh4AJQgDAEAAAGQAAAHADADQAEAEAGAAQAFAAAEgEIACgDQACgDAAgEQAAgEgCgCIgCgEQgEgDgFAAQgGAAgEADgAh2gcQgDADAAAGQAAAFADAEQACADAGAAQAFAAADgDQACgEAAgFQAAgGgCgDQgDgEgFAAQgGAAgCAEgABfAuIABgKQACgUAIgQQAHgQAMgOIgvAAIAAgPIBBAAIAAAPQgPARgFANQgGAPgCAVIgBAKgAAVAuIABgKQACgUAHgQQAHgQANgOIgwAAIAAgPIBBAAIAAAPQgOARgGANQgFAPgDAVIgBAKg");
	this.shape_7.setTransform(16.9,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D183A").s().p("AgxAoQgJgHAAgMIASAAQAAAFAEADQAEAEAGAAQAGAAAEgEQAEgDAAgGQAAgIgEgDQgEgDgHAAIgKAAIAAgMIAKAAQAHAAADgEQADgDAAgGQAAgGgDgDQgDgEgGAAQgFAAgEADQgEADAAAFIgSAAIAAAAQAAgLAJgHQAIgHANAAQAPAAAIAHQAHAHAAAMQAAAGgDAGQgDAFgHADQAIABACAGQAEAFAAAIQAAANgHAHQgJAHgPAAQgNAAgJgHgAByAuIAAhKIgSAAIAAgNIAlgEIAABbgAA0AuIAAgUIglAAIgBgLIAmg8IATAAIAAA4IAKAAIAAAPIgKAAIAAAUgAAzgRIgUAcIAVAAIAAgfgAiCAuIAAgMIAdggIAKgLQACgFAAgEQAAgGgDgEQgDgEgGAAQgGAAgDAFQgEAEAAAHIgSAAIAAAAQAAgNAIgIQAEgEAFgDQAGgCAIAAQAPAAAIAHQAIAIAAAMQAAAJgFAHQgEAFgLALIgQASIAnAAIAAAPg");
	this.shape_8.setTransform(15.8,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D183A").s().p("ABkAtQgGgCgEgFQgJgKAAgSIAAgTQAAgSAJgJQAEgFAGgDQAGgCAHAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgHAAgGgCgABngbQgCADgBAFIAAAIIAAAWIAAAIQABAGACADQADAFAHAAQAGAAADgFQADgFAAgMIAAgWQAAgLgDgFQgDgFgGAAQgHAAgDAFgAg4AoQgJgHAAgMIASgBQAAAGAEADQADAEAGAAQAGAAADgFQADgEAAgIQAAgIgDgFQgDgDgHAAQgFAAgDABQgDACgBADIgQgBIAFgyIA0AAIAAAPIglAAIgCAWIAGgEIAIgBQANAAAIAIQAHAGAAAPQAAANgIAJQgIAJgPAAQgNAAgJgHgAAHAuIAAgMIAeggIAJgLQADgFAAgEQAAgGgDgEQgDgEgGAAQgHAAgDAFQgDAEAAAHIgSAAIAAAAQgBgNAJgIQAIgJAPAAQAOAAAIAHQAIAIAAAMQAAAJgEAHQgFAFgKALIgRASIAnAAIAAAPgAhoAuIAAgUIgmAAIgBgLIAng8IASAAIAAA4IALAAIAAAPIgLAAIAAAUgAhqgRIgTAcIAVAAIAAgfg");
	this.shape_9.setTransform(16.8,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D183A").s().p("AgwAoQgKgHABgMIASAAQAAAFAEADQADAEAGAAQAHAAADgEQAEgDAAgGQAAgIgEgDQgDgDgHAAIgLAAIAAgMIALAAQAGAAADgEQAEgDAAgGQAAgGgEgDQgDgEgGAAQgFAAgEADQgDADAAAFIgSAAIAAAAQgBgLAJgHQAJgHANAAQAOAAAJAHQAGAHAAAMQAAAGgDAGQgCAFgHADIAHACIADAFQAEAFAAAIQAAANgIAHQgJAHgOAAQgNAAgJgHgAh7AoQgJgHAAgMIASAAQAAAFAEADQAEAEAGAAQAGAAAEgEQAEgDAAgGQAAgIgEgDQgEgDgHAAIgKAAIAAgMIAKAAQAHAAADgEQADgDAAgGQAAgGgDgDQgDgEgGAAQgFAAgEADQgEADAAAFIgSAAIAAAAQAAgLAJgHQAIgHANAAQAPAAAIAHQAJAHAAAMQAAAGgEAGQgEAFgHADIAIACIAEAFQAEAFAAAIQAAANgJAHQgJAHgPAAQgNAAgJgHgABzAuIAAhKIgTAAIAAgNIAlgEIAABbgAA1AuIAAgUIgmAAIgBgLIAng8IASAAIAAA4IALAAIAAAPIgLAAIAAAUgAAzgRIgTAcIAVAAIAAgfg");
	this.shape_10.setTransform(15.8,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("ABWAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAPAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgPAAgIgJgABjgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQACgFAAgMIAAgWQAAgLgCgFQgEgFgGAAQgGAAgEAFgAAMAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAOAAQAOAAAJAKQAJAJAAASIAAATQAAASgJAKQgJAJgOAAQgOAAgIgJgAAYgbQgDAFABALIAAAWQAAAMADAFQADAFAGAAQAHAAADgFQADgFAAgMIAAgWQAAgLgDgFQgDgFgHAAQgGAAgEAFgAg9AmQgJgKABgSIAAgTQgBgSAJgJQAJgKAOAAQAOAAAJAKQAIAJAAASIAAATQAAASgIAKQgJAJgOAAQgOAAgJgJgAgwgbQgDAFAAALIAAAWQAAAMADAFQADAFAHAAQAGAAADgFQADgFABgMIAAgWQgBgLgDgFQgDgFgGAAQgHAAgDAFgAh5AuIAAhKIgSAAIAAgNIAlgEIAABbg");
	this.shape_11.setTransform(17.2,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D183A").s().p("ABWAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAPAAQAOAAAIAKQAJAJAAASIAAATQAAASgJAKQgIAJgOAAQgPAAgIgJgABjgbQgDAFAAALIAAAWQAAAMAEAFQADAFAGAAQAGAAAEgFQACgFAAgMIAAgWQAAgLgCgFQgEgFgGAAQgGAAgEAFgAAMAmQgJgKAAgSIAAgTQAAgSAJgJQAIgKAOAAQAOAAAJAKQAJAJAAASIAAATQAAASgJAKQgJAJgOAAQgOAAgIgJgAAYgbQgDAFABALIAAAWQAAAMADAFQADAFAGAAQAHAAADgFQADgFAAgMIAAgWQAAgLgDgFQgDgFgHAAQgGAAgEAFgAghAuIAAgUIgmAAIgBgLIAng8IASAAIAAA4IALAAIAAAPIgLAAIAAAUgAgjgRIgUAcIAWAAIAAgfgAh5AuIAAhKIgSAAIAAgNIAlgEIAABbg");
	this.shape_12.setTransform(17.2,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,6.2,28.9,9.6);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#1D1D1B"],[0,1],-65.8,5.6,25.5,33.7).s().p("EgWpgh7IARgFMAsNAIAIAnBKMAAOAvXQpcDXqfCkQkmBK0PEbg");
	this.shape.setTransform(145.1,217.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,290.1,435.6);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape_1.setTransform(7.6,12.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.cerrarOjos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DAIAAl/IFpAAIAAETIgGAAIAAANIgCAAIAAADIgCAAIAAAEIAAAAIAAADIgCAAIAAACIgCAAIAAAFIgBAAIAAACIgDAAIAAAHIgCAAIAAABIgHAAIAAAMIgBAAIAAADIgFAAIAAAJIgCAAIgBADIgGAAIAAAKIgFAAIAAAGIgBAAIAAADIgIAAIAAAJIgCAAIAAAFIgHgBIAAAJg");
	this.shape.setTransform(18.1,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,38.6);


(lib.cargabibracion = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F7A600").ss(4.1,1,1).p("ACbAAQAABAgtAuQguAthAAAQg/AAgugtQgtguAAhAQAAg/AtguQAugtA/AAQBAAAAuAtQAtAuAAA/g");
	this.shape.setTransform(15.6,15.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.1,31.1);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A600").s().p("AhdBeQgognAAg3QAAg2AognQAngoA2AAQA4AAAmAoQAoAnAAA2QAAA3goAnQgmAog4AAQg2AAgngog");
	this.shape.setTransform(13.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(18));

	// Capa 2
	this.instance = new lib.cargabibracion();
	this.instance.setTransform(13.5,13.6,0.704,0.704,0,0,0,15.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.29,scaleY:1.29,y:13.5,alpha:0},10).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,26.9);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.PARPADOS = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cerrarOjos();
	this.instance.setTransform(65.6,0.7,0.828,0.81,0,0,180,18.1,0.8);

	this.instance_1 = new lib.cerrarOjos();
	this.instance_1.setTransform(14.5,2.3,0.797,0.797,0,0,0,18.1,0.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,32.4);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(46.1,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(54.4,24.4);

	// Capa 1
	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.4,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlTByQg/hRgphUQgmhRAAgoQAAhHCOgrQCGgpDNgBQDOABCHApQCNArAABHQAAAogmBRQgpBVg+BQQimDWivAAQiuAAiljWg");
	this.shape_2.setTransform(48.2,32.5);

	this.addChild(this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.CARGADEDATOS = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("AwUHUQi/gxiFg3QiqhHh+hjQgrgggpgxQgyg8gBg9QAAhCA2g0QB8h1Bxg9QDRhuEAhDQDTg3EWghQKKhPJ6BnQDiAlCrAyQDRA+CnBbQB0BACFCDQAwAugBA6QABA4guAyQhmBuhgA3QjNB1j3BIQjZA+kJAgQh+APi4AQIk4AaQo+gQnWh5g");
	this.shape.setTransform(140.7,85.1,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DADADA").s().p("Aj/LxQoSgZm8iKQingziAg9QiWhHh2heQhrhWgzhoQg2htAFiFQAFiAgBi9IgClDQBwDuDvCNQCbBcE+BhQFlBtGYAgQFjAcGlgcQE3gVEDg3QEohAD8hxQC6hUBthTQCQhvBKiZIAADhIgBDUQAAB+ACBWQAHDZi3CcQiOB7jCBWQiaBFjdA7QlEBWlkAfQjKASjZAAQiDAAiKgHg");
	this.shape_1.setTransform(140.6,136.5,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DADADA").s().p("AscRtQjlgmi6g5QjXhCizhhQhtg6hJg7QhbhIg5hYQhAhjgBiBIAArfQAAiFBIhsQA8haB3hWQC4iCDvhWQDBhEEKgyQKpiCKbBKQD/AcDHApQDvAyDJBOQCsBCBuBBQCQBWBfByQBmB4gBCbIAAFxQAAAygDBkQgBBaAFA8QAOCohQCDQhGBziVBhQilBsjNBKQivBAjfAvQnPBgncAAQmMAAmWhDgAopvCQkWAhjTA3QkBBDjQBuQhyA9h7B1Qg2A0AABCQAAA/AyA8QApAxArAgQB/BjCqBHQCFA1C/AxQHWB5I+AQIE3gaQC5gQB+gPQEJggDYg+QD4hGDNh1QBfg3BnhuQAtgyAAg6QAAg6gvguQiFiDh0hAQiohbjQg+QisgyjhglQlog7ltAAQkVAAkaAjg");
	this.shape_2.setTransform(140.6,95,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DADADA").s().p("AkKL4IjYgaQiBgPhXgMQkbgqjSg+QkChNjMh6QiZhbhih5QgmgugYg+QgZg/gCg5QgHiTAAjTQADjxAAh8QBrDlDjCLQCYBdEsBeQFNBoFzAnQFRAjF8gQQEzgNEHgtQEmgzEEhdQC3hBB3hEQCbhZBmh4QAXgbAdgvIA2hYIAABWQAABcgDC2QgBCiAFBwQAGCPhBB0Qg7Bqh7BYQkjDSmDBPQiXAgjfAhQj7Akh+ATIgyAMg");
	this.shape_3.setTransform(140.6,167,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D9D9C").s().p("A/OUaMAAAgozMA+eAAAMAAAAozg");
	this.shape_4.setTransform(140.6,135.8,0.253,0.253);

	this.instance = new lib.Path();
	this.instance.setTransform(97.2,111,0.253,0.253,0,0,0,145.3,217.7);
	this.instance.alpha = 0.148;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006460").s().p("ApRhvISjjlQAAFfgCBWQAAAKgNALQgNALgLADQkQA3pVB1Ii0Akg");
	this.shape_5.setTransform(76.4,133,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006460").s().p("ArOheIWckBIABDcQAAB+gDBXQAAAJgQAKQgOALgOADI0MDtg");
	this.shape_6.setTransform(73.2,103.7,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006460").s().p("A0BG4QgPgGgFgYIhSmBQgBgEABgHIAAgOMApugG4IBhGtIjwArIpZBmItqCVIuTCcQgOACgJAAQgIAAgEgBg");
	this.shape_7.setTransform(83.9,72.5,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006460").s().p("EgQjAruMgOjhCaIjKufQgGgaAHgLQAIgMAagEQD6giFig0IOciIIPuiRIS7iyQAHgBALgEIATgGIAyAAMAIJAkSIi+AAIkSzEMg2WAInIACAcQABAQACAKIC5NCID9SMIENTNQB4IjAnC5QAGAbAMAIQAMAHAcgFQEBg3LxibQBggUDHgnIAABrQAAA7gCArQgBAHgNAKQgMAIgMADIrpCdIrNCVQgmifgHggg");
	this.shape_8.setTransform(79.1,92.1,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgkYgdlMA4+gMjMAPzBHuMg4+AMjg");
	this.shape_9.setTransform(89,95.8,0.253,0.253);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.4,16.4,168,169.9);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.reasignacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// usuario
	this.instance = new lib.usuario();
	this.instance.setTransform(365.4,200.5,0.467,0.467,0,0,0,15,19.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165).to({_off:false},0).to({scaleX:2.34,scaleY:2.34,alpha:1},10).to({scaleX:2.2,scaleY:2.2},4).wait(40).to({x:195.5},28,cjs.Ease.get(-0.99)).wait(47).to({regX:14.9,scaleX:0.35,scaleY:0.35,x:195.4,alpha:0},17,cjs.Ease.get(1)).to({_off:true},4).wait(5));

	// usuario
	this.instance_1 = new lib.usuario();
	this.instance_1.setTransform(201.5,200.5,0.294,0.294,0,0,0,15,19.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:201.7,alpha:1},10).to({scaleX:2.2,scaleY:2.2,x:201.6},4).wait(40).to({x:368.1},28,cjs.Ease.get(-0.99)).wait(47).to({regX:14.9,regY:19.2,scaleX:0.45,scaleY:0.45,x:368,alpha:0},17,cjs.Ease.get(1)).to({_off:true},4).wait(5));

	// mesaArmadaFinal
	this.instance_2 = new lib.mesaArmadaFinal();
	this.instance_2.setTransform(363.4,200.5,0.153,0.153,0,0,0,69.4,44.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({regY:44.3,scaleX:1.02,scaleY:1.02,y:202.5,alpha:1},9,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92},3,cjs.Ease.get(1)).wait(38).to({x:201.7},28,cjs.Ease.get(-0.99)).wait(42).to({regX:69.3,regY:44.5,scaleX:0.09,scaleY:0.09,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(162));

	// mesaArmadaFinal
	this.instance_3 = new lib.mesaArmadaFinal();
	this.instance_3.setTransform(204,200.4,0.156,0.156,0,0,0,69.5,44.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:69.4,regY:44.2,scaleX:1,scaleY:1,x:204.1,y:202.4,alpha:1},9,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94},3,cjs.Ease.get(1)).wait(38).to({x:367.6},28,cjs.Ease.get(-0.99)).wait(42).to({regX:69.5,regY:44.5,scaleX:0.07,scaleY:0.07,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(162));

	// Capa 1
	this.instance_4 = new lib.FLECHAACTUALIZAR();
	this.instance_4.setTransform(285,200.1,0.277,0.277,0,0,0,312.8,313);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({regX:312.9,regY:313.1,scaleX:0.35,scaleY:0.35},20,cjs.Ease.get(1)).to({regX:312.8,regY:313,scaleX:0.28,scaleY:0.28},19).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.8,92.9,214.5,214.5);


// symbols:
(lib.usuario = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUC+QAAgjAJgUQANgbAhgTQAGgDAJgIIAQgLIAHgFQAaAPAdABIAOgBQAWgDAUgMIAGAFIARALIAPALQAiATAMAbQAJAUAAAjgAg7AxQgbgSgNgeQgEAFgFAAQgIAAgFgKQgFgMAAgRQAAgKACgJQACgJAEgFQAAg4AZgfQAdgkA/gBIABAAQA9ABAcAiQAXAcADA2QAGADAFAKQAFAMAAAPQAAARgGAMQgFAKgIAAQgFAAgEgGQgKAXgTAQQgSARgYAGIgBABQgPAFgPAAQgfAAgdgTg");
	this.shape.setTransform(15,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,38.2);


(lib.patas = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00436F").s().p("AgZFxIAArhIAzAAIAALhg");
	this.shape.setTransform(100.2,23.6,0.637,0.637);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00436F").s().p("AgeFxIAArhIA9AAIAALhg");
	this.shape_1.setTransform(22.1,23.6,0.637,0.637);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00436F").s().p("AgrI1IAAxpIBXAAIAARpg");
	this.shape_2.setTransform(124.6,36,0.637,0.637);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00436F").s().p("AgrI1IAAxpIBXAAIAARpg");
	this.shape_3.setTransform(4.8,36,0.637,0.637);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,0,125.5,72.1);


(lib.mesa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00436F").s().p("AqzATIAAglIAFAAIVfAAIADAAIAAADIAAACIAAAgg");
	this.shape.setTransform(76.1,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#458DB0").s().p("AKwBmIAAgCIADACgAqyBhICzjGIPXAAIDVDGg");
	this.shape_1.setTransform(76.4,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-6.1,138.7,23.9);


(lib.FlechaActualizarSinAnimar = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("EgDdA5UIgfgGQgTgFgNgBQmMgklNhgQp3i3oKmAQlaj+kFk0IjXkHQgTALgHAGQkmERiUCHQgqAng/A2IhqBcMAAAgjtMAmoAACIAIAMIxdQDQA9BcAKANQGlJGJ8EtQKoFDLshGQJQg3H1keQLamhF6rjQC0liBAlsQAHgnASgPQASgOAoABQCkACDlAAIGJAAIBKAAIgdCtQgRBkgPBCQh9I0khHqQkAGxlxFlQmGF3niD6QmtDcmgBVQhwAWilAYQi6AZhcAOIguALgAVknJIC0i5IKyqyIA2g1QAdgfACgaQACgWgagkQgggngOgUQm/qCrGk7QqIkhrGBCQpEA1nxEXQrmGil+LsQixFahKGKQgFAXgIAKQgLALgXAAItYgBIgggGIAaifQAPheAOg/QCBpIEqn1QECmyF4lnQIMnzKykMQHli7IygtQAIAAAMgEIATgGIHHAAIAzALQBaAPC1AZQCiAYBtAXQKfCPJbGlQGwEtFAGTICkDTIFClJIFJlCMAAAAjtg");
	this.shape.setTransform(313,313);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.8,-53.8,733.7,733.7);


(lib.mesaArmadaFinal = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.mesa();
	this.instance.setTransform(64.4,21,0.727,0.727,0,0,0,69.3,11.9);

	this.instance_1 = new lib.patas();
	this.instance_1.setTransform(68.1,46,0.727,0.727,0,0,0,62.8,36.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,7.9,100.9,64.3);


(lib.FLECHAACTUALIZAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.FlechaActualizarSinAnimar();
	this.instance.setTransform(313,313,1,1,3.2,0,0,313,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-73.9,774,774);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
/*By Edgardo Paredes // edgardoparedes.com*/ 
// stage content:
(lib.lesa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.AVIONPAPELENVIO();
	this.instance.setTransform(279.3,202,0.09,0.09,0,0,0,108,67.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({scaleX:1,scaleY:1,x:263.3,y:196.6,alpha:1},5,cjs.Ease.get(1)).wait(31).to({scaleX:0.58,scaleY:0.58,skewX:1.5,x:297.7,y:168.3},15).wait(42).to({regX:107.9,skewX:31.5,skewY:30,x:276.9,y:191.9},11,cjs.Ease.get(1)).to({regX:108,scaleX:0.58,scaleY:0.58,skewX:31.4,skewY:29.9,x:293,y:188.4},3,cjs.Ease.get(1)).to({regX:107.9,scaleX:0.58,scaleY:0.58,skewX:31.5,skewY:30,x:353.7,y:175.3},24).to({x:290.5,y:208.1},37).to({x:303.3,y:176.1},45,cjs.Ease.get(1)).to({x:243.5,y:189.4},57,cjs.Ease.get(1)).to({x:456.1,y:176.1,alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Capa 9
	this.instance_1 = new lib.cabezaAdan();
	this.instance_1.setTransform(174,176.6,0.161,0.161,0,0,0,87.6,82.7);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(203).to({_off:false},0).to({regX:87.8,regY:82.9,scaleX:1,scaleY:1,rotation:5.5,x:180,y:190.4,alpha:1},12,cjs.Ease.get(1)).wait(6).to({regX:87.7,rotation:11.8},9,cjs.Ease.get(1)).wait(15).to({rotation:0},14,cjs.Ease.get(1)).wait(25).to({scaleX:0.88,scaleY:0.88,x:105.4,y:187.7,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// Capa 11
	this.instance_2 = new lib.cuerpoAdan();
	this.instance_2.setTransform(174.5,184.7,0.161,0.161,0,0,0,48,33.1);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({regX:48.2,regY:32.9,scaleX:1,scaleY:1,x:183.6,y:240,alpha:1},12,cjs.Ease.get(1)).wait(69).to({regX:48.1,scaleX:0.88,scaleY:0.88,x:108.5,y:231.1,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// Capa 16
	this.instance_3 = new lib.brazoOtroAdan();
	this.instance_3.setTransform(167.4,182.1,0.15,0.15,0,0,0,48.6,7.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(203).to({_off:false},0).to({regY:7.5,scaleX:1,scaleY:1,x:134.8,y:226.3,alpha:1},12,cjs.Ease.get(1)).wait(69).to({regX:26.3,regY:24.3,x:112.5,y:243.1},0).to({scaleX:0.88,scaleY:0.88,x:46.4,y:233.8,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// <Group>_1
	this.instance_4 = new lib.brasoderecheAdan();
	this.instance_4.setTransform(183.1,182.3,0.161,0.161,0,0,0,13,46.1);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(203).to({_off:false},0).to({regX:13.1,regY:46.3,scaleX:1,scaleY:1,rotation:45,x:236.5,y:225.4,alpha:1},12,cjs.Ease.get(1)).to({rotation:0},20).wait(25).to({rotation:7},0).to({regY:46.4,rotation:30,y:225.5},7).wait(17).to({scaleX:0.88,scaleY:0.88,x:154.9,y:218.4,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// <Path>_4
	this.instance_5 = new lib.cuello_Adan();
	this.instance_5.setTransform(174.5,178.4,0.161,0.161,0,0,0,5.9,5.9);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(203).to({_off:false},0).to({regX:6,regY:6,scaleX:1,scaleY:1,x:183.5,y:201.3,alpha:1},12,cjs.Ease.get(1)).wait(69).to({scaleX:0.88,scaleY:0.88,x:108.5,y:197.2,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// <Path>_6
	this.instance_6 = new lib.piesAdan();
	this.instance_6.setTransform(174.7,191,0.161,0.161,0,0,0,68.8,27.3);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(203).to({_off:false},0).to({scaleX:1,scaleY:1,x:184.7,y:279.5,alpha:1},12,cjs.Ease.get(1)).wait(69).to({scaleX:0.88,scaleY:0.88,x:109.6,y:265.7,alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(156));

	// Capa 8
	this.instance_7 = new lib.movimientoRallitas();
	this.instance_7.setTransform(253.6,196.5,1,0.641,0,0,0,124,98.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(260).wait(29).to({_off:false},0).wait(133).to({alpha:0},13).to({_off:true},1).wait(22));

	// Capa 3
	this.instance_8 = new lib.cartaCompletaSobre();
	this.instance_8.setTransform(276.1,268.9,1,1,0,0,0,164,106.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:278.6,y:202.6},7,cjs.Ease.get(1)).wait(38).to({scaleX:1,scaleY:1},0).to({regX:164.5,scaleX:0.05,scaleY:0.05,x:278.5,alpha:0},6,cjs.Ease.get(1)).to({_off:true},8).wait(283));

	// Capa 10
	this.instance_9 = new lib.DESTELLO();
	this.instance_9.setTransform(282,199.8,0.408,0.408,0,0,0,16,166.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(167).to({_off:false},0).to({_off:true},14).wait(277));

	// Capa 5
	this.instance_10 = new lib.bolaaccion();
	this.instance_10.setTransform(279.8,197.6,0.033,0.033,0,0,0,151.7,151.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,alpha:0.949},2).to({scaleX:0.86,scaleY:0.86,alpha:0.859},3).to({scaleX:0.04,scaleY:0.04,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(279));

	// Capa 1
	this.instance_11 = new lib.partearribacartaAmarilla();
	this.instance_11.setTransform(275.5,161,1,0.021,0,0,0,163.6,-2.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96).wait(6).to({_off:false},0).to({regY:-1.5,scaleY:1,y:161.1},5).to({_off:true},9).wait(342));

	// SOBRE-DELANTE
	this.instance_12 = new lib.SOBREDELANTE();
	this.instance_12.setTransform(276.1,366.5,0.09,0.09,0,0,0,334.6,217.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({regX:334.5,regY:217.6,scaleX:0.49,scaleY:0.49,x:275.9,y:269.5},12,cjs.Ease.get(1)).wait(24).to({_off:true},33).wait(342));

	// CARTA
	this.instance_13 = new lib.CARTA();
	this.instance_13.setTransform(279.7,303.1,0.022,0.022,0,0,0,174.2,461);
	this.instance_13.alpha = 0.18;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({regY:461.1,scaleX:0.47,scaleY:0.48,y:337.5,alpha:0.961},11,cjs.Ease.get(1)).to({regX:174.5,regY:460.9,scaleX:0.49,scaleY:0.5,y:339.1,alpha:1},3).wait(70).to({scaleY:0.17,y:365.1},18,cjs.Ease.get(1)).to({_off:true},3).wait(347));

	// Capa 2
	this.instance_14 = new lib.sobrearriba();
	this.instance_14.setTransform(275.5,161,1,1,0,0,0,163.6,114.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(96).to({_off:false},0).to({scaleY:0.04},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(356));

	// SOBRE-YRAZ
	this.instance_15 = new lib.SOBREYRAZ();
	this.instance_15.setTransform(276.1,348.3,0.09,0.09,0,0,0,334.6,252.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).to({regX:334.5,regY:252.5,scaleX:0.49,scaleY:0.49,x:275.9,y:170.3},12,cjs.Ease.get(1)).wait(24).to({_off:true},13).wait(362));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("A5mKYIAA0tIAEgCMAzFAAAIAEACIAAUtg");
	this.shape.setTransform(275.9,227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:227.5}}]},96).to({state:[{t:this.shape,p:{y:229.3}}]},7).to({state:[]},13).to({state:[]},269).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.sobrearriba = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("A5jI8QFakfF4kdQL2o/CdAFQCgAELyI6QF3EcFZEcg");
	this.shape.setTransform(163.6,57.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,327.2,114.4);


(lib.SOBREYRAZ = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("Eg0QAncMAAAgqSQLEpNMEpLQYKyWFDAKQFFAJYDSPQMDJHLAJFMAAAAqSg");
	this.shape.setTransform(334.5,252.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,669,504.8);


(lib.PREDESTELLO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgAbIk/AAIAAg1IE/AAg");
	this.shape.setTransform(16,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AifAaIAAg0IE/AAIAAA0g");
	this.shape_1.setTransform(16,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhEIE/AAIAACJIk/AAIAAiJ");
	this.shape_2.setTransform(16,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CA598").s().p("AifBFIAAiJIE/AAIAACJg");
	this.shape_3.setTransform(16,75.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhvIE/AAIAADfIk/AAIAAjf");
	this.shape_4.setTransform(16,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA598").s().p("AifBwIAAjfIE/AAIAADfg");
	this.shape_5.setTransform(16,71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifiaIE/AAIAAE1Ik/AAIAAk1");
	this.shape_6.setTransform(16,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CA598").s().p("AifCbIAAk1IE/AAIAAE1g");
	this.shape_7.setTransform(16,67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjFIE/AAIAAGLIk/AAIAAmL");
	this.shape_8.setTransform(16,62.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA598").s().p("AifDGIAAmLIE/AAIAAGLg");
	this.shape_9.setTransform(16,62.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjwIE/AAIAAHhIk/AAIAAnh");
	this.shape_10.setTransform(16,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CA598").s().p("AifDxIAAnhIE/AAIAAHhg");
	this.shape_11.setTransform(16,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkbIE/AAIAAI3Ik/AAIAAo3");
	this.shape_12.setTransform(16,54.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CA598").s().p("AifEcIAAo3IE/AAIAAI3g");
	this.shape_13.setTransform(16,54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflGIE/AAIAAKNIk/AAIAAqN");
	this.shape_14.setTransform(16,49.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CA598").s().p("AifFHIAAqNIE/AAIAAKNg");
	this.shape_15.setTransform(16,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflxIE/AAIAALjIk/AAIAArj");
	this.shape_16.setTransform(16,45.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4CA598").s().p("AifFyIAArjIE/AAIAALjg");
	this.shape_17.setTransform(16,45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgmcIAAM5Ik/AAIAAs5g");
	this.shape_18.setTransform(16,41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4CA598").s().p("AifGdIAAs5IE/AAIAAM5g");
	this.shape_19.setTransform(16,41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(178,178,178,0)").ss(1,1,1).p("AiflYIE/AAIAAKxIk/AAIAAqx");
	this.shape_20.setTransform(16,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4CA598").s().p("AifFZIAAqxIE/AAIAAKxg");
	this.shape_21.setTransform(16,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifleIEcAAIAjHwIAAApIAACkIkcAAIgjnwIAAikIAAgp");
	this.shape_22.setTransform(16,35.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(143,143,143,0)").ss(1,1,1).p("AifkVIE/AAIAAIrIk/AAIAAor");
	this.shape_23.setTransform(16,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4CA598").s().p("AifEWIAAorIE/AAIAAIrg");
	this.shape_24.setTransform(16,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkfID5AAIBGGMIAAAkIAACPIj5AAIhGmMIAAiQIAAgj");
	this.shape_25.setTransform(16,28.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(107,107,107,0)").ss(1,1,1).p("AifjRIE/AAIAAGjIk/AAIAAmj");
	this.shape_26.setTransform(16,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4CA598").s().p("AifDSIAAmjIE/AAIAAGjg");
	this.shape_27.setTransform(16,21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjhIDWAAIBpEpIAAAfIAAB7IjWAAIhpkpIAAh8IAAge");
	this.shape_28.setTransform(16,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(71,71,71,0)").ss(1,1,1).p("AifiOIE/AAIAAEdIk/AAIAAkd");
	this.shape_29.setTransform(16,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4CA598").s().p("AifCPIAAkdIE/AAIAAEdg");
	this.shape_30.setTransform(16,14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifijICzAAICMDFIAAAaIAABoIizAAIiMjFIAAhoIAAga");
	this.shape_31.setTransform(16,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(36,36,36,0)").ss(1,1,1).p("AifhKIE/AAIAACVIk/AAIAAiV");
	this.shape_32.setTransform(16,7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4CA598").s().p("AifBLIAAiVIE/AAIAACVg");
	this.shape_33.setTransform(16,7.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhlICSAAICtBkIAAATIAABUIiSAAIithkIAAhSIAAgV");
	this.shape_34.setTransform(16,10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifgXIAAA/IE/AAIAAg/AifgXIAAgQIE/AAIAAAQ");
	this.shape_35.setTransform(16,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4CA598").s().p("AifAIIAAgPIE/AAIAAAPg");
	this.shape_36.setTransform(16,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.2,32,66.5);


(lib.partearribacartaAmarilla = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBD966").s().p("AuTABQl5kxlak0MAzNAAAQlYEwl5ExQr0JjifAEIgDABQihAArypkg");
	this.shape.setTransform(164,61.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,122.6);


(lib.movimiento = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AgyAfIAAg+IBlAAIAAA+g");
	this.shape.setTransform(238.8,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyAfIAAg+IBlAAIAAA+g");
	this.shape_1.setTransform(238.8,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfAfIAAg+IC/AAIAAA+g");
	this.shape_2.setTransform(234.3,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiMAfIAAg+IEZAAIAAA+g");
	this.shape_3.setTransform(229.8,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai5AfIAAg+IFzAAIAAA+g");
	this.shape_4.setTransform(225.3,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjmAfIAAg+IHNAAIAAA+g");
	this.shape_5.setTransform(220.8,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkTAfIAAg+IInAAIAAA+g");
	this.shape_6.setTransform(216.3,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlAAfIAAg+IKBAAIAAA+g");
	this.shape_7.setTransform(211.8,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AltAfIAAg+ILbAAIAAA+g");
	this.shape_8.setTransform(207.4,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmaAfIAAg+IM1AAIAAA+g");
	this.shape_9.setTransform(202.9,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AnHAfIAAg+IOPAAIAAA+g");
	this.shape_10.setTransform(198.4,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("An0AfIAAg+IPpAAIAAA+g");
	this.shape_11.setTransform(193.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AohAfIAAg+IRDAAIAAA+g");
	this.shape_12.setTransform(189.4,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ApOAfIAAg+ISdAAIAAA+g");
	this.shape_13.setTransform(184.9,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ap6AfIAAg+IT1AAIAAA+g");
	this.shape_14.setTransform(180.4,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AqnAfIAAg+IVPAAIAAA+g");
	this.shape_15.setTransform(175.9,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ArUAfIAAg+IWpAAIAAA+g");
	this.shape_16.setTransform(171.4,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AsBAfIAAg+IYDAAIAAA+g");
	this.shape_17.setTransform(166.9,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AsuAfIAAg+IZdAAIAAA+g");
	this.shape_18.setTransform(162.4,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AtbAfIAAg+Ia3AAIAAA+g");
	this.shape_19.setTransform(157.9,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AuIAfIAAg+IcRAAIAAA+g");
	this.shape_20.setTransform(153.4,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Au1AfIAAg+IdrAAIAAA+g");
	this.shape_21.setTransform(149,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AviAfIAAg+IfFAAIAAA+g");
	this.shape_22.setTransform(144.5,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AwPAfIAAg+MAgfAAAIAAA+g");
	this.shape_23.setTransform(140,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Aw8AfIAAg+MAh5AAAIAAA+g");
	this.shape_24.setTransform(135.5,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AxpAfIAAg+MAjTAAAIAAA+g");
	this.shape_25.setTransform(131,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AyWAfIAAg+MAktAAAIAAA+g");
	this.shape_26.setTransform(126.5,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AzDAfIAAg+MAmGAAAIAAA+g");
	this.shape_27.setTransform(122,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AyYAfIAAg+MAkxAAAIAAA+g");
	this.shape_28.setTransform(117.8,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AxuAfIAAg+MAjdAAAIAAA+g");
	this.shape_29.setTransform(113.5,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AxDAfIAAg+MAiHAAAIAAA+g");
	this.shape_30.setTransform(109.3,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AwZAfIAAg+MAgzAAAIAAA+g");
	this.shape_31.setTransform(105.1,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AvvAfIAAg+IffAAIAAA+g");
	this.shape_32.setTransform(100.8,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AvEAfIAAg+IeJAAIAAA+g");
	this.shape_33.setTransform(96.6,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AuaAfIAAg+Ic1AAIAAA+g");
	this.shape_34.setTransform(92.3,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AtwAfIAAg+IbhAAIAAA+g");
	this.shape_35.setTransform(88.1,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AtFAfIAAg+IaLAAIAAA+g");
	this.shape_36.setTransform(83.9,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AsbAfIAAg+IY3AAIAAA+g");
	this.shape_37.setTransform(79.6,3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ArwAfIAAg+IXhAAIAAA+g");
	this.shape_38.setTransform(75.4,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ArGAfIAAg+IWNAAIAAA+g");
	this.shape_39.setTransform(71.2,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AqcAfIAAg+IU5AAIAAA+g");
	this.shape_40.setTransform(66.9,3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ApxAfIAAg+ITjAAIAAA+g");
	this.shape_41.setTransform(62.7,3.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ApHAfIAAg+ISPAAIAAA+g");
	this.shape_42.setTransform(58.4,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AodAfIAAg+IQ7AAIAAA+g");
	this.shape_43.setTransform(54.2,3.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AnyAfIAAg+IPlAAIAAA+g");
	this.shape_44.setTransform(50,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AnIAfIAAg+IORAAIAAA+g");
	this.shape_45.setTransform(45.7,3.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AmdAfIAAg+IM7AAIAAA+g");
	this.shape_46.setTransform(41.5,3.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AlzAfIAAg+ILnAAIAAA+g");
	this.shape_47.setTransform(37.3,3.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AlJAfIAAg+IKTAAIAAA+g");
	this.shape_48.setTransform(33,3.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkeAfIAAg+II9AAIAAA+g");
	this.shape_49.setTransform(28.8,3.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Aj0AfIAAg+IHpAAIAAA+g");
	this.shape_50.setTransform(24.5,3.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AjKAfIAAg+IGVAAIAAA+g");
	this.shape_51.setTransform(20.3,3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AifAfIAAg+IE/AAIAAA+g");
	this.shape_52.setTransform(16.1,3.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ah1AfIAAg+IDrAAIAAA+g");
	this.shape_53.setTransform(11.8,3.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhLAfIAAg+ICXAAIAAA+g");
	this.shape_54.setTransform(7.6,3.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0)").s().p("AhLAfIAAg+ICXAAIAAA+g");
	this.shape_55.setTransform(7.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.6,0,10.4,6.4);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape.setTransform(7.6,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.Path_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,-0.7,-1.2,3.9).s().p("AhUgpICpAVIh+A+g");
	this.shape.setTransform(8.6,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,8.6);


(lib.Path_19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-3.6,1.2,2.1,-0.5).s().p("Ag1BGIgCiLIBtAAIABCLg");
	this.shape.setTransform(5.6,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,14);


(lib.Path_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],3.9,-0.6,-2,1.1).s().p("Ag4BGIACiLIBvAAIgDCLg");
	this.shape.setTransform(5.7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,14.1);


(lib.Path_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.7,0.4,4.5,-2.8).s().p("AiJBiIBmkGICtBEIhpEFg");
	this.shape.setTransform(13.9,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,33.2);


(lib.Path_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,0,-2.9,0).s().p("AgnBeIAAi8IBPAAIAAC8g");
	this.shape.setTransform(4,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,19);


(lib.Path_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.5,0,4.6,0).s().p("Agtg3QAWgIAQgRQANgTAFgXIAhAXIACDDQgqAVgxAFg");
	this.shape.setTransform(4.6,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,24.6);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-3,1.1,0.7,-1.1).s().p("AhPgrIgFheICpDIIgfAXIAAA0g");
	this.shape.setTransform(8.5,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,27.8);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],3.4,-0.8,-0.2,1.3).s().p("AhNg5IAigYIAAg0IB5CtIAABeg");
	this.shape.setTransform(7.9,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,26.9);


(lib.Path_21_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,-0.7,-1.2,3.9).s().p("AhUgpICpAVIh+A+g");
	this.shape_1.setTransform(8.6,4.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,8.6);


(lib.Path_19_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-3.6,1.2,2.1,-0.5).s().p("Ag1BGIgCiLIBtAAIABCLg");
	this.shape_1.setTransform(5.6,7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,14);


(lib.Path_18_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],3.9,-0.6,-2,1.1).s().p("Ag4BGIACiLIBvAAIgDCLg");
	this.shape_1.setTransform(5.7,7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,14.1);


(lib.Path_16_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.7,0.4,4.5,-2.8).s().p("AiJBiIBmkGICtBEIhpEFg");
	this.shape_1.setTransform(13.9,16.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,33.2);


(lib.Path_14_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,0,-2.9,0).s().p("AgnBeIAAi8IBPAAIAAC8g");
	this.shape_1.setTransform(4,9.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,19);


(lib.Path_12_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.5,0,4.6,0).s().p("Agtg3QAWgIAQgRQANgTAFgXIAhAXIACDDQgqAVgxAFg");
	this.shape_1.setTransform(4.6,12.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,24.6);


(lib.Path_8_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-3,1.1,0.7,-1.1).s().p("AhPgrIgFheICpDIIgfAXIAAA0g");
	this.shape_1.setTransform(8.5,13.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,27.8);


(lib.Path_7_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],3.4,-0.8,-0.2,1.3).s().p("AhNg5IAigYIAAg0IB5CtIAABeg");
	this.shape_1.setTransform(7.9,13.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,26.9);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.bolaaccion = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA598").s().p("AwvQvQm8m7AAp0QAApzG8m8QG8m8JzAAQJ0AAG7G8QG9G8AAJzQAAJ0m9G7Qm7G9p0AAQpzAAm8m9g");
	this.shape.setTransform(151.7,151.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,303.3,303.3);


(lib.AVIONPAPELENVIO = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBCC54").s().p("AsTBFIAAgBIYnrkI1VNXIjSHqg");
	this.shape.setTransform(136.9,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD966").s().p("Ag/FUIAAAAIgcgQIjDhyIVVtXIpsULgAw2jwMAhtgGVI4oLkIAAABIgCAAg");
	this.shape_1.setTransform(107.8,64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1AF43").s().p("AgFjzIDBBxIAcAQIAAABImvFlg");
	this.shape_2.setTransform(79.7,110.2);

	// Capa 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCAC1C").s().p("AnxBFIgCAAIpDlQIT/jwINuilIjdHNImDMmIgMAYIgPgJIn7kpImxFog");
	this.shape_3.setTransform(108.1,67.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,216.2,134.9);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.movimientoRallitas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.instance = new lib.movimiento();
	this.instance.setTransform(59.6,43.6,1,1,0,0,0,122,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(60));

	// Capa 2
	this.instance_1 = new lib.movimiento();
	this.instance_1.setTransform(173.2,150.8,1,1,0,0,0,122,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(60));

	// Capa 1
	this.instance_2 = new lib.movimiento();
	this.instance_2.setTransform(122,3.2,1,1,0,0,0,122,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(171.2,0,124,154);


(lib.DESTELLO = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.PREDESTELLO();
	this.instance.setTransform(123.5,63.5,1.002,1.476,0,45,41.3,16.1,41.2);

	this.instance_1 = new lib.PREDESTELLO();
	this.instance_1.setTransform(122.7,281.5,1,1.476,135,0,0,16.1,41.3);

	this.instance_2 = new lib.PREDESTELLO();
	this.instance_2.setTransform(-90.4,274.8,1,1.476,-134.9,0,0,16.1,41.3);

	this.instance_3 = new lib.PREDESTELLO();
	this.instance_3.setTransform(-90.3,62.7,1,1.476,-44.9,0,0,16.1,41.3);

	this.instance_4 = new lib.PREDESTELLO();
	this.instance_4.setTransform(12,300,1,1,180,0,0,16,41.3);

	this.instance_5 = new lib.PREDESTELLO();
	this.instance_5.setTransform(-106.7,173.3,1,1,-89.9,0,0,16,41.3);

	this.instance_6 = new lib.PREDESTELLO();
	this.instance_6.setTransform(150.6,173.3,1,1,90,0,0,16,41.3);

	this.instance_7 = new lib.PREDESTELLO();
	this.instance_7.setTransform(16,41.3,1,1,0,0,0,16,41.3);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,77.3,185.6,186.8);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(44.7,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(53,24.6);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_2.setTransform(53.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape_3.setTransform(44.7,32.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.8,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlTBzQg/hRgphWQgmhQAAgoQAAhHCOgsQCGgoDNAAQDOAACHAoQCNAsAABHQAAAogmBQQgpBWg+BRQimDWivAAQiuAAiljWg");
	this.shape_4.setTransform(48.2,32.9);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.CARTA = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005550").s().p("AD7EeIAAjnICKAAIAAA/IhAAAIAAAWIA6AAIAAA9Ig6AAIAAAUIBCAAIAABBgAA5EeIAAi3IgNADIAAC0IhIAAIg9hwIAABwIhIAAIAAjnIBIAAIA/B1IAAhlIgFgUIiJAAIAAlQIFRAAIAAFQIgHAAIABAEQAfACAVAVQAWAYgBAkQAAAjgSAWQgSAWgeAAIgnAAIAABFgACDCeIANAAQAKAAAGgGQAFgGAAgKQABgIgGgGQgEgEgIAAIgRAAgAgphHQgDAEgGADIAsCtICigqIhDkIIgaAHIAaB8QACALgLAJIgLAIQgOAGgNgHIgLgJIgIAJQgKAKgHABQgHACgKgDQgKgEgDgFIgHgWIgEgRQgBADgFADgAiaAmIB4AAIgahiQgJACgLgEIgKgEQgCAHgKADIgKADQgRADgIgRQgEgGgJgkIgEgUgAB1kAIAFAMQAIAWgNAfQgFALgFAIIAwDDIAAknIgwAAIAKAQgAgOhBQAEAOAKACQADAAAFgBQAJgDAAgNIgBgLIgQhOIAVgGIAMAvIAMA0QACAHAHABIAGAAQAHgCAAgKIgCgKIggiEIAUgFIAEAOIAngKQADgHAAgNQABgHgDgIQgDgIgHgKIgJgKIjlAAQgCAJAAAKIABAJIAAALQAAAHAEAgIAGAqQADARAPAtIAEAIQAEAGAGgBQAGgCABgHIgBgHIgIgiIAWgFIAJAmQABAGAGAEQAHAEAIgEQAJgDAAgNIgBgLIgHgdIAYgGgAloD/QgVgWgGgfQgDgPAAgQQAAgQADgPQAGgfAVgWQAdggAvAAQAwAAAeAgQAdAgAAA0QAAAzgdAhQgeAfgwAAQgvAAgdgfgAk1CLQgKANAAATQAAATAKANQAKAMAPAAQAPAAAKgMQAKgMAAgVQAAgTgKgMQgKgNgPAAQgPAAgKANg");
	this.shape.setTransform(64.8,52.6);

	// Capa 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCAC1C").s().p("AhvBtIAAjZIDeAAIAADZg");
	this.shape_1.setTransform(61.9,264.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CA598").s().p("Aw4AfIAAg9MAhxAAAIAAA9g");
	this.shape_2.setTransform(198.1,264.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCAC1C").s().p("AhvBtIAAjZIDeAAIAADZg");
	this.shape_3.setTransform(61.9,428.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4CA598").s().p("Aw4AfIAAg9MAhxAAAIAAA9g");
	this.shape_4.setTransform(198.1,428.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA598").s().p("Aw4AfIAAg9MAhxAAAIAAA9g");
	this.shape_5.setTransform(198.1,387.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCAC1C").s().p("AhvBtIAAjZIDeAAIAADZg");
	this.shape_6.setTransform(61.9,387.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CA598").s().p("Aw4AfIAAg9MAhxAAAIAAA9g");
	this.shape_7.setTransform(198.1,346.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCAC1C").s().p("AhvBtIAAjZIDeAAIAADZg");
	this.shape_8.setTransform(61.9,346.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA598").s().p("Aw4AfIAAg9MAhxAAAIAAA9g");
	this.shape_9.setTransform(198.1,305.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCAC1C").s().p("AhvBtIAAjZIDeAAIAADZg");
	this.shape_10.setTransform(61.9,305.3);

	// Capa 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005550").s().p("AAMGcQgugKgogXQhGgqgyhaICNhNQAfAzAiAbQAnAcArAAQAQAAAOgDQAXgGASgOQAegYAAgeQAAgagWgbQgWgchMg4QiPhpgqg6Qgrg7AAg5QAAhTBIg8QAoghAxgPQAlgLAsAAQApAAAnALQAYAGAWALQA8AbBHBKIh8BkQhDhUhFABQghAAgVAQQgUAPAAAWQAAATAOASQAUAXBoBPQBhBKAUASQAzAuAWArQAWArAAAyQAABjhNBAQg/A2hiAIQgRACgRAAQgpAAglgIgARpGQIhGilIlpAAIhIClIiuAAIFVsfICrAAIFUMfgAL4BXIDuAAIh3kSgAr4GQIAAsfIHkAAIAACUIk8AAIAACTIE8AAIAACPIk8AAIAADTIE8AAIAACWgA0XGQIAAsfICpAAIAAKOID2AAIAACRg");
	this.shape_11.setTransform(175.3,154.8);

	// Capa 5
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AnNHeIAAu7IObO7g");
	this.shape_12.setTransform(302.6,48.2);

	// Capa 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CA598").s().p("AgqA0QgJAAgGgDQgHgEAAgGIAAhJQAAgHAHgFQAHgFAIAAIBZAAQAIAAAEAFQAFAFABAHIAABJQAAANgSAAg");
	this.shape_13.setTransform(302.4,209.6,0.266,0.266);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CA598").s().p("AgvA0QgIAAgGgDQgHgEAAgHIAAhIQAAgHAHgFQAGgFAIAAIBjAAQAHAAAFAFQAFAFAAAHIAABIQAAAOgRAAg");
	this.shape_14.setTransform(292.7,221,0.266,0.266);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CA598").s().p("AhWA0QgOAAAAgNIALgcIBhg+IBJAAQAHAAAGAFQAHAFAAAHIAABJQAAAHgHADQgGADgHAAg");
	this.shape_15.setTransform(244.6,221.2,0.266,0.266);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4CA598").s().p("AhQA0QgHAAgGgDQgHgDAAgHIAAhJQAAgHAHgFQAGgFAHAAIBJAAIBhA+IALAcQAAANgPAAg");
	this.shape_16.setTransform(257,221.2,0.266,0.266);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4CA598").s().p("AhDA0QgIAAgHgEQgGgDgBgHIAAhIQABgHAGgGQAHgEAIAAICMAAQAHAAAFAEQAEAGAAAHIAABIQAAAOgQAAg");
	this.shape_17.setTransform(263,221.4,0.266,0.266);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4CA598").s().p("AhHA0QgIAAgFgDQgHgEAAgGIAAhJQAAgHAHgFQAFgFAIAAICSAAQAHAAAFAFQAFAFAAAHIAABJQAAANgRAAg");
	this.shape_18.setTransform(287.3,220.9,0.266,0.266);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4CA598").s().p("AAqD5IkenxIDRAAIEYHxg");
	this.shape_19.setTransform(297.4,215.2,0.266,0.266);

	this.instance = new lib.Path_7();
	this.instance.setTransform(302.1,218.7,0.266,0.266,0,0,0,9.1,14.5);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(293.3,212.5,0.266,0.266,0,0,0,8.3,13.4);
	this.instance_1.alpha = 0.18;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4CA598").s().p("AhAD5IAAnxICBAAIAAHxg");
	this.shape_20.setTransform(302.4,215.2,0.266,0.266);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4CA598").s().p("AhFD5IAAnxICLAAIAAHxg");
	this.shape_21.setTransform(292.7,215.2,0.266,0.266);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4CA598").s().p("AhbCKIAAkTIC3AAIAAETg");
	this.shape_22.setTransform(287.3,218.2,0.266,0.266);

	this.instance_2 = new lib.Path_12();
	this.instance_2.setTransform(284.5,218.7,0.266,0.266,0,0,0,4.2,13.2);
	this.instance_2.alpha = 0.18;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4CA598").s().p("AhZD5IAAnxICyAAIAAHxg");
	this.shape_23.setTransform(263,215.8,0.266,0.266);

	this.instance_3 = new lib.Path_14();
	this.instance_3.setTransform(266,219.9,0.266,0.266,0,0,0,4.5,9.4);
	this.instance_3.alpha = 0.18;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4CA598").s().p("AAQEhIjlpBIDLAAIDgI1QgCACgBADIgDAHg");
	this.shape_24.setTransform(253.9,214.7,0.266,0.266);

	this.instance_4 = new lib.Path_16();
	this.instance_4.setTransform(249.2,211.5,0.266,0.266,0,0,0,13.8,17.2);
	this.instance_4.alpha = 0.18;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4CA598").s().p("Ai+C/QhPhPAAhwQAAhuBPhQQBPhPBvAAQBvAABQBPQBPBQAABuQAABwhPBPQhQBPhvAAQhuAAhQhPgAhDg6QgbAbAAAjQAAAmAbAaQAaAbAmAAQAjAAAbgbQAagaAAgmQAAgjgagbQgbgagjAAQgmAAgaAag");
	this.shape_25.setTransform(282.5,214.7,0.266,0.266);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4CA598").s().p("AkID5IAAnxIE0AAQBcAABABGQBBBIAABmQAABphABIQhFBMhYAAgAhUA7IBhAAQAeAAASgSQAVgVAAgbQAAgdgVgVQgUgVgcAAIhhAAg");
	this.shape_26.setTransform(267.6,215.8,0.266,0.266);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4CA598").s().p("AjPEhQACgJgIgEIDgo0IDLAAIjlJBg");
	this.shape_27.setTransform(247.7,214.7,0.266,0.266);

	this.instance_5 = new lib.Path_18();
	this.instance_5.setTransform(248.4,218.7,0.266,0.266,0,0,0,5.1,7);
	this.instance_5.alpha = 0.18;

	this.instance_6 = new lib.Path_19();
	this.instance_6.setTransform(253,218.7,0.266,0.266,0,0,0,5.9,7);
	this.instance_6.alpha = 0.18;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4CA598").s().p("AioBGIAAiLIFRAAIAACLg");
	this.shape_28.setTransform(251,218.7,0.266,0.266);

	this.instance_7 = new lib.Path_21();
	this.instance_7.setTransform(285.3,207.2,0.266,0.266,0,0,0,7.7,4.4);
	this.instance_7.alpha = 0.18;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4CA598").s().p("Ah9AKIDQhpIArBWIjPBog");
	this.shape_29.setTransform(286.3,205.8,0.266,0.266);

	// Capa 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(214,214,214,0)").ss(0.1,1,1).p("A1110MArqAAAMAAAArpMgrqAAAg");
	this.shape_30.setTransform(176.2,249.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E6E6").s().p("AAAAAIABAAIAAABg");
	this.shape_31.setTransform(255.9,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F6F6F6").s().p("EgZYAkAQgyABgigkQgkgjAAgxMAAAhERQAAgyAkgiQAigkAyAAMAmEAAAIACADIAAO+IOeAAIueu+IAAgDIOjPCMAAAA3HQgBAxgiAjQgkAkgygBgA1kYvMArqAAAMAAAgroMgrqAAAMArqAAAMAAAAroMgrqAAAMAAAgroMAAAArog");
	this.shape_32.setTransform(174.5,230.5);

	// Capa 4
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EgZYAkBQgygBgigiQgkgkABgyMAAAhEPQgBgyAkgkQAigiAygBMAmEAAAIACADIAAO9IAEAAIAAu6IgEgDIAAgDIOjPCMAAAA3GQgBAygiAkQgkAigyABg");
	this.shape_33.setTransform(173.4,230.5);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.instance_7,this.shape_28,this.instance_6,this.instance_5,this.shape_27,this.shape_26,this.shape_25,this.instance_4,this.shape_24,this.instance_3,this.shape_23,this.instance_2,this.shape_22,this.shape_21,this.shape_20,this.instance_1,this.instance,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,350.1,461.1);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);


(lib.ADANBLANCOLOGO = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA0QgJAAgGgDQgHgEAAgGIAAhJQAAgHAHgFQAHgFAIAAIBZAAQAIAAAEAFQAFAFABAHIAABJQAAANgSAAg");
	this.shape.setTransform(227.7,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA0QgIAAgGgDQgHgEAAgHIAAhIQAAgHAHgFQAGgFAIAAIBjAAQAHAAAFAFQAFAFAAAHIAABIQAAAOgRAAg");
	this.shape_1.setTransform(191.2,67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWA0QgOAAAAgNIALgcIBhg+IBJAAQAHAAAGAFQAHAFAAAHIAABJQAAAHgHADQgGADgHAAg");
	this.shape_2.setTransform(10.2,67.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQA0QgHAAgGgDQgHgDAAgHIAAhJQAAgHAHgFQAGgFAHAAIBJAAIBhA+IALAcQAAANgPAAg");
	this.shape_3.setTransform(56.7,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDA0QgIAAgHgEQgGgDgBgHIAAhIQABgHAGgGQAHgEAIAAICMAAQAHAAAFAEQAEAGAAAHIAABIQAAAOgQAAg");
	this.shape_4.setTransform(79.2,68.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHA0QgIAAgFgDQgHgEAAgGIAAhJQAAgHAHgFQAFgFAIAAICSAAQAHAAAFAFQAFAFAAAHIAABJQAAANgRAAg");
	this.shape_5.setTransform(170.6,66.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqD5IkenxIDRAAIEYHxg");
	this.shape_6.setTransform(208.8,45.3);

	this.instance = new lib.Path_7_1();
	this.instance.setTransform(225.5,57.5,1,1,0,0,0,7.9,13.5);
	this.instance.alpha = 0.191;

	this.instance_1 = new lib.Path_8_1();
	this.instance_1.setTransform(192.7,34.9,1,1,0,0,0,8.5,13.9);
	this.instance_1.alpha = 0.191;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAD5IAAnxICBAAIAAHxg");
	this.shape_7.setTransform(227.7,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFD5IAAnxICLAAIAAHxg");
	this.shape_8.setTransform(191.2,45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbCKIAAkTIC3AAIAAETg");
	this.shape_9.setTransform(170.6,56.5);

	this.instance_2 = new lib.Path_12_1();
	this.instance_2.setTransform(160,58,1,1,0,0,0,4.6,12.3);
	this.instance_2.alpha = 0.191;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhZD5IAAnxICyAAIAAHxg");
	this.shape_10.setTransform(79.2,47.3);

	this.instance_3 = new lib.Path_14_1();
	this.instance_3.setTransform(90.2,62.8,1,1,0,0,0,4,9.5);
	this.instance_3.alpha = 0.191;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQEhIjlpBIDLAAIDgI1QgCACgBADIgDAHg");
	this.shape_11.setTransform(45.1,43.4);

	this.instance_4 = new lib.Path_16_1();
	this.instance_4.setTransform(26.6,31.1,1,1,0,0,0,13.9,16.6);
	this.instance_4.alpha = 0.191;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai+C/QhPhPAAhwQAAhuBPhQQBPhPBvAAQBvAABQBPQBPBQAABuQAABwhPBPQhQBPhvAAQhuAAhQhPgAhDg6QgbAbAAAjQAAAmAbAaQAaAbAmAAQAjAAAbgbQAagaAAgmQAAgjgagbQgbgagjAAQgmAAgaAag");
	this.shape_12.setTransform(152.8,43.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkID5IAAnxIE0AAQBcAABABGQBBBIAABmQAABphABIQhFBMhYAAgAhUA7IBhAAQAeAAASgSQAVgVAAgbQAAgdgVgVQgUgVgcAAIhhAAg");
	this.shape_13.setTransform(96.7,47.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjPEhQACgJgIgEIDgo0IDLAAIjlJBg");
	this.shape_14.setTransform(21.7,43.4);

	this.instance_5 = new lib.Path_18_1();
	this.instance_5.setTransform(23.7,58.3,1,1,0,0,0,5.7,7);
	this.instance_5.alpha = 0.191;

	this.instance_6 = new lib.Path_19_1();
	this.instance_6.setTransform(40.3,58.3,1,1,0,0,0,5.6,7);
	this.instance_6.alpha = 0.191;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AioBGIAAiLIFRAAIAACLg");
	this.shape_15.setTransform(34.2,58.3);

	this.instance_7 = new lib.Path_21_1();
	this.instance_7.setTransform(162.7,15,1,1,0,0,0,8.6,4.3);
	this.instance_7.alpha = 0.191;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah9AKIDQhpIArBWIjPBog");
	this.shape_16.setTransform(166.8,9.6);

	this.addChild(this.shape_16,this.instance_7,this.shape_15,this.instance_6,this.instance_5,this.shape_14,this.shape_13,this.shape_12,this.instance_4,this.shape_11,this.instance_3,this.shape_10,this.instance_2,this.shape_9,this.shape_8,this.shape_7,this.instance_1,this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234.2,73.8);


(lib.SOBREDELANTE = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.ADANBLANCOLOGO();
	this.instance.setTransform(328.2,330.1,0.946,0.946,0,0,0,117.1,36.9);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBCC54").s().p("EgzvAgXQgOgbgTg8MAAAhAgIAQAJIAOAJIJHGjQA3AnBtBRQBiBIBHArIASARQAMAKAHAGIPvLWIMDIvQgyAihBA5IhtBfQjGCqmMFQI8wYtQgMAKgBAQQgigcgXgugEAxKAf4Ik4kOIrJpkImQlXIqBonIigiHQhehQhAg2IhbhNQg2gugggkIAOgNIWewJIC1h/QBrhMBHg6IAdgRQF5kQC9iHICvh/QBohMBKguMAAABAgQgdBMgCAGQgVAtggAZIhyhgg");
	this.shape.setTransform(334.5,214.5);

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1AF43").s().p("Egw2AShQhNgEhJg4QABgQAMgKIT+xEII9noIEqj8QC/ihBshcQAlggBJhBQBBg5AzgjIFzEIQBrBNBlAAQBiAABthNIGFkRQAfAkA3AuIBcBNQBAA3BfBRICgCHIKGInIGSFUILNJlIE6EOIBzBgQhGBChVADg");
	this.shape_1.setTransform(335,314.8);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,669,433.4);


(lib.cartaCompletaSobre = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.partearribacartaAmarilla();
	this.instance.setTransform(163.6,-1.3,1,1,0,0,0,163.6,-1.6);

	this.instance_1 = new lib.SOBREDELANTE();
	this.instance_1.setTransform(164.1,107.1,0.49,0.49,0,0,0,334.5,217.6);

	this.instance_2 = new lib.CARTA();
	this.instance_2.setTransform(167.9,202.7,0.49,0.169,0,0,0,174.5,460.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#405162").s().p("A5lKRIAA0hMAzMAAAIAAUhg");
	this.shape.setTransform(164.1,65.8);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,212.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.mesas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MENU
	this.instance = new lib.todo();
	this.instance.setTransform(96.9,284.7,1.243,1.243,0,0,0,-234,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.usuario2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA598").s().p("AkKFVQABg/AQgkQAWgyA8ggQALgGAQgNIAdgWIAKgHQAwAbA1AAQAMAAAOgCQAogFAjgUIAKAHIAdAWIAcATQA8AgAVAyQASAkgBA/gAhpBYQgxgggXg2QgIAJgIAAQgPAAgKgTQgIgWAAgdQAAgTAEgQQADgQAHgKQABhkAsg3QAzhABxgBIADAAQBtACAyA8QAqAyADBgQANAFAIAUQAJAUAAAcQgBAdgJAWQgKATgOAAQgJAAgHgKQgSAogiAdQghAdgqANIgBACQgbAHgaAAQg7AAgxghg");
	this.shape.setTransform(26.7,34.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,68.2);


(lib.usuario = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUC+QAAgjAJgUQANgbAhgTQAGgDAJgIIAQgLIAHgFQAaAPAdABIAOgBQAWgDAUgMIAGAFIARALIAPALQAiATAMAbQAJAUAAAjgAg7AxQgbgSgNgeQgEAFgFAAQgIAAgFgKQgFgMAAgRQAAgKACgJQACgJAEgFQAAg4AZgfQAdgkA/gBIABAAQA9ABAcAiQAXAcADA2QAGADAFAKQAFAMAAAPQAAARgGAMQgFAKgIAAQgFAAgEgGQgKAXgTAQQgSARgYAGIgBABQgPAFgPAAQgfAAgdgTg");
	this.shape.setTransform(15,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,38.2);


(lib.patas = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00436F").s().p("AgZFxIAArhIAzAAIAALhg");
	this.shape.setTransform(100.2,23.6,0.637,0.637);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00436F").s().p("AgeFxIAArhIA9AAIAALhg");
	this.shape_1.setTransform(22.1,23.6,0.637,0.637);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00436F").s().p("AgrI1IAAxpIBXAAIAARpg");
	this.shape_2.setTransform(124.6,36,0.637,0.637);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00436F").s().p("AgrI1IAAxpIBXAAIAARpg");
	this.shape_3.setTransform(4.8,36,0.637,0.637);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,0,125.5,72.1);


(lib.onpe = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEE6FF").s().p("ABfBjIggiAQAFgGADgJQAJgTgFgNQgFgNgIgJIAlAAIAADFgAhiBjIAAiAIABAKIAGAXIAIAaQAFAKAKgBQALgBACgHIAHACQAHACAGgBIADgBIAQBCgAAAAoQgGgBgCgIIgMgvIgPADIAEAQIABAHQAAAIgFACQgGACgEgCQgDgDgBgEIgFgVIgOAEIAFARQACAJgGABQgDACgDgEIgCgFQgJgagCgKIgEgaIgDgXQgBgTADgKICHAAIAJALQAIALAAAJQgBAMgDAEIAAAAIgVAFIgDgMIgNADIAUBPQAEAMgHACQgHACgCgHIgPg6IgNADIAKAtIAAAIQAAAIgGABIgCABIgCgBg");
	this.shape.setTransform(49.4,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21527C").s().p("ACaCuIAAiOIBUAAIAAAlIgnAAIAAAPIAkAAIAAAlIgkAAIAAAMIAoAAIAAApgAAiCuIAAh0IBBgRIgDgJQAWAAANAOQAOAOAAAXQAAAVgMANQgLAOgSAAIgYAAIAAArgABQBfIAIAAQAHAAACgEQAEgEAAgGQAAgFgDgDQgDgDgEgBIgLAAgAgRCuIgmhGIABBGIgtAAIAAiOIAtAAIAnBHIAAhHIABAAIAJAkIAggIIAABygAjcCaQgIgIgEgKQgGgPAAgSQgBggATgUQARgUAeABQAdgBASAUQASAUAAAgQAAASgGAPQgFAKgHAIQgSATgdABQgegBgRgTgAi9BTQgGAHAAANQAAAMAGAHQAGAIAKAAQAJAAAGgIQAGgHAAgMQAAgNgGgHQgGgIgJAAQgKAAgGAIgAgGgTQgHgDgBgDIgHgYQgEAHgHADIgDABQgGABgHgCIgHgDQgCAHgLABQgLACgEgLIgJgZIgFgZIgCgKIAAhFIAHAAQgCAKABASIACAYIAFAaQABAJAKAdIACAEQADAEADgBQAGgBgDgJIgEgUIANgEIAGAYQABADADADQAEACAFgCQAGgCAAgIIgBgHIgEgSIAOgDIANAyQACAIAGABIAEAAQAGgCAAgIIAAgHIgKgwIANgDIAPA9QABAGAIgCQAHgBgEgMIgUhRIAMgEIADANIATBPQACAGgHAGIgHAEQgJAEgIgFIgGgFQgJALgHABIgDABIgGgBgAA5h+QADgEABgMQAAgIgJgMIgIgKIASAAQAIAIAFANQAFAOgJASQgDAKgGAGg");
	this.shape_1.setTransform(49.5,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnpEVIAAopIPTAAIAAIpgACWCcIBVAAIAAgoIgoAAIAAgNIAkAAIAAglIgkAAIAAgOIAnAAIAAgmIhUAAgABfAYIhBAQIAAB0IAuAAIAAgrIAYAAQASAAALgNQAMgOAAgVQAAgXgOgOQgNgOgWAAgAgVCcIAsAAIAAhyIggAIIgJgkIgBAAIAABHIgnhHIgtAAIAACOIAtAAIgBhGgAjgAhQgTAUABAgQAAATAGAOQAEAKAIAIQARAUAeAAQAdAAASgUQAHgIAFgKQAGgOAAgTQAAgggSgUQgSgTgdAAQgeAAgRATgAA6h5IAhCAIAEAAIAAjFIglAAIgSAAIiIAAIgHAAIAABFIAACAIBTAAIgQhAQAHgDAEgHIAHAYQABAEAHACQAGACAEgBQAGgCAJgLIAGAFQAIAFAJgDIAHgFQAHgGgCgGIgThPIAWgFIAAgBgAjBBoQgGgHAAgMQAAgMAGgIQAGgIAKAAQAJAAAGAIQAGAHAAANQAAAMgGAHQgGAIgJAAQgKAAgGgIgABMBNIAAgZIALAAQAEAAADADQADADAAAFQAAAHgEADQgCAEgHAAg");
	this.shape_2.setTransform(49.9,27.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0,98.1,55.5);


(lib.mesa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00436F").s().p("AqzATIAAglIAFAAIVfAAIADAAIAAADIAAACIAAAgg");
	this.shape.setTransform(76.1,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#458DB0").s().p("AKwBmIAAgCIADACgAqyBhICzjGIPXAAIDVDGg");
	this.shape_1.setTransform(76.4,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-6.1,138.7,23.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-13.4,0,13.5,0).s().p("AiGgyIENhUIAAEKIhigBQhWAAhVAEg");
	this.shape.setTransform(13.5,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.3,-2.3,3.9,-0.1).s().p("AAUFFQgUg8gyhYQhYh2gMi/QgDg+ADhsQADh7gBguQAnAOAcAeQAeAfAJAqQANA1gXAxQgXAxgvAaIA6D4QBJgCA8AuQA9AwARBKQAQBHgeBBQgeBBg+AiQAMg7ghhYg");
	this.shape.setTransform(15.3,47.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,94.4);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],20.4,-3.5,-13.5,4.2).s().p("AhFELQgmgYgKgtIhGk/QgJgsAYgnQAZgmAsgKICEgdQAsgJAmAYQAmAZAKAsIAfCPQgQAwgSBuQgRBngVA0IhrAXQgLADgMAAQgeAAgbgSg");
	this.shape.setTransform(19.1,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,57);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.6,4.3,11.6,-0.2).s().p("AhtEUQgegMgTgaQAthmgJiIQgHhzgriGIALgDICGgdQAqgJAmAYQAnAZAJAsIBGE/QAKAtgZAmQgYAmgtAKIiEAdQgMACgLAAQgVAAgUgIg");
	this.shape.setTransform(17.4,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.8,57);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],4.4,3.2,-53.5,-7.1).s().p("AiaE0QhOhRhOhDIgggZQgTgQgIgNQguhHgXgzQgehHgGhDQgFg9AfgnQAggmA/gJQAcgEAlgBIBAgBQDNgDC9BBQCjA3CPBnQhfDniKCkg");
	this.shape.setTransform(47.6,30.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95.3,61.8);


(lib.cajita = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D5500").s().p("AgvAWIBEgrIAbAAIhEArg");
	this.shape.setTransform(8.1,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3ArIgBAAICIhVIBoAAIACAAIg1AhIhVA0gAgxAUIAbAAIBDgrIgaAAg");
	this.shape_1.setTransform(8.3,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E9D1").s().p("AhEhXIBUg2IA1ghIgCAAIACgBIgGDTIiDCMg");
	this.shape_2.setTransform(13.6,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBF3F7").s().p("AgyCEIAAkHIBlAAIAAEHg");
	this.shape_3.setTransform(1.4,27.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.8,5.1,24.5,35.4);


(lib.miembro = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21527C").s().p("AhoBLQgYgNgIgbQgIgaAOgXQAOgaAagGICQgiQAbgGAYAMQAZANAHAbQAHAagNAXQgNAZgbAGIiQAjQgJACgJAAQgRAAgQgIg");
	this.shape.setTransform(23.8,27.9,0.187,0.187,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21527C").s().p("AALMpQiegCiXg+QiUg8hzhsQh2hvg/iNQhEiWACikQACieA+iXQA9iUBshzQBuh2CNg/QCWhECkACQFPAFDrDkQDnDhARFKIAAAKIAAAKQgECZg7CSQg9CUhsBzQhuB2iOBAQiRBBifAAIgJAAgAgJqiQiFAGh8A3Qh6A2heBdQjLDJALESQAGCGA3B9QA2B6BdBdQDJDMESgMQEZgLC/jEQC+jEAEkYQgGiGg3h8Qg2h6hdheQi/jAkBAAIgcAAg");
	this.shape_1.setTransform(40,27.8,0.187,0.187,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21527C").s().p("AALMpQiegCiXg+QiUg9hzhsQh2hug/iNQhEiWACikQACieA+iXQA9iUBshzQBuh2COg/QCVhECkACQFPAEDrDlQDnDgARFKIABALIgBAKQgDCZg8CSQg8CUhsBzQhvB2iNA/QiRBCifAAIgKAAgAgIqiQiGAFh8A3Qh7A2hdBdQjLDKALESQAGCGA3B8QA2B6BcBeQDKDLESgLQEagMC+jEQC/jDADkYQgFiGg3h9Qg2h6hdhdQi/jBkCAAIgbABg");
	this.shape_2.setTransform(8.1,28.3,0.187,0.187,10.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(21.2,50.2,0.415,0.415,0,0,0,42.1,10.5);
	this.instance.alpha = 0.301;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21527C").s().p("AiKiKQBzgHBTBVQBVBSgGByIgjADIjyAAg");
	this.shape_3.setTransform(26.1,56.3,0.187,0.187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B2D46").s().p("Aj0CnQgJgfgCgeQgEhyBMhRQBMhRBuAEIAAD8ID6AAQAIAogNApg");
	this.shape_4.setTransform(22.6,58.2,0.187,0.187);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A2/MpQiuh8grjYIg0kEQgrjWBwi1QBxi1DKgoMAmVgHkQDKgpCtB8QCuB8ArDYIA0EEQArDWhwC1QhxC1jKAoMgmVAHlQgxAJgwAAQiTAAiDhdgArQh9QhUBFgTBiQgVBwA3BeQA2BfBsAmQBiAjBmgnQBmgnAyhcQAvhWgNhoQgNhmhAgxQgDBAgbAkQgaAkg0ANQgrAKgpgSQgpgSgWgkQg0hZBZhdIgKgBQhdAAhRBCgAFolPQhSBEgTBhQgVBtA2BbQA1BcBpAlQBgAiBjgmQBjgmAxhZQAthSgMhmQgNhmg+gvQgDA/gaAkQgaAkgyAMQgpAKgpgSQgogSgWglQgyhWBWhcIgIAAQhcAAhOBAg");
	this.shape_5.setTransform(23.5,31,0.187,0.187,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuEGcQhZiQg2iGQgzh/AAhAQAAijFBhiQExhdHUAAQHVAAExBdQFBBiAACjQAABAgzB/Qg2CGhaCQg");
	this.shape_6.setTransform(24,53.6,0.187,0.187);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ao3EXQAXguAdgqQDHklE6hyQCng9CzgBIA6AAQAgABAZADQA3AHAcAiQAdAigEA3QgDA7gbBAQgTAugnBAQgHAMgQAOIgcAXQhIBBhFBMg");
	this.shape_7.setTransform(-5.5,56.1,0.187,0.187);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(49.9,55.5,0.187,0.187,0,0,0,47.5,30.8);
	this.instance_1.alpha = 0.301;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlJE0QhPhRhNhDIgggZQgTgQgJgNQgthHgXgzQgfhHgGhDQgFg9AggnQAggmA+gJQAcgEAlgBIBBgBQDMgDDABBQFlB5DoFFQAoA4AaAzg");
	this.shape_8.setTransform(53.1,55.6,0.187,0.187);

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(24.2,43.4,0.187,0.187,0,0,0,14.5,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiGgyIEMhTIAAEJIhggBQhXAAhVAEg");
	this.shape_9.setTransform(23.9,43.5,0.187,0.187);

	this.instance_3 = new lib.Path_0();
	this.instance_3.setTransform(55,31.7,0.187,0.187,11,0,0,18.7,28.9);
	this.instance_3.alpha = 0.301;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhaELQgmgYgKgtIhFk/QgKgsAZgnQAYgmAsgKICEgdQAsgJAmAYQAnAZAKAsIBFFAQAKAsgYAmQgaAmgsAKIiEAdQgMADgNAAQgeAAgbgSg");
	this.shape_10.setTransform(55.2,31.8,0.187,0.187,11);

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(26.8,13.1,0.187,0.187,11,0,0,16.9,48.1);
	this.instance_4.alpha = 0.199;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ahej6IBIgQIB1IEIhIARg");
	this.shape_11.setTransform(24.2,13.1,0.187,0.187,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhUCIQg4gkgPhBQgPg/Akg4QAjg4BBgPQA/gPA4AkQA4AjAPBBQAPA/gjA4QgkA4hBAPQgTAEgQAAQgsAAgogYg");
	this.shape_12.setTransform(23.9,6.4,0.187,0.187,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwC1QhLgvgUhXQgUhUAvhLQAwhLBWgUQBUgUBLAvQBLAvAUBXQAUBUgvBLQgvBLhXAUQgaAGgWAAQg6AAg1ghg");
	this.shape_13.setTransform(24.2,18,0.187,0.187,10.9);

	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(-7.6,33.1,0.187,0.187,10.9,0,0,16.6,28.2);
	this.instance_5.alpha = 0.301;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaELQgmgZgKgsIhGlAQgJgsAYgmQAZgmAsgKICEgdQAtgJAmAYQAmAZAKAsIBFE/QAKAtgYAmQgZAmgsAKIiEAdQgNACgLAAQgfAAgcgRg");
	this.shape_14.setTransform(-8.4,33.1,0.187,0.187,10.9);

	this.addChild(this.shape_14,this.instance_5,this.shape_13,this.shape_12,this.shape_11,this.instance_4,this.shape_10,this.instance_3,this.shape_9,this.instance_2,this.shape_8,this.instance_1,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,3.5,81.5,57.9);


(lib.persona = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// usuario
	this.instance = new lib.usuario2();
	this.instance.setTransform(113.6,127.3,1,1,0,0,0,26.7,34.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).wait(30).to({_off:false},0).to({y:174.5,alpha:1},12,cjs.Ease.get(1)).wait(160));

	// usuario
	this.instance_1 = new lib.usuario();
	this.instance_1.setTransform(100.1,116.2,1.785,1.785,0,0,0,15,19.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).wait(22).to({_off:false},0).to({y:163.3,alpha:1},12,cjs.Ease.get(1)).wait(168));

	// usuario
	this.instance_2 = new lib.usuario2();
	this.instance_2.setTransform(94.6,101.3,1,1,0,0,0,26.7,34.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).wait(15).to({_off:false},0).to({y:148.4,alpha:1},12,cjs.Ease.get(1)).wait(175));

	// usuario
	this.instance_3 = new lib.usuario();
	this.instance_3.setTransform(84.7,86.5,1.785,1.785,0,0,0,15,19.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).wait(8).to({_off:false},0).to({y:133.7,alpha:1},12,cjs.Ease.get(1)).wait(182));

	// usuario
	this.instance_4 = new lib.usuario2();
	this.instance_4.setTransform(74.6,74.3,1,1,0,0,0,26.7,34.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(135).to({_off:false},0).to({y:121.5,alpha:1},12,cjs.Ease.get(1)).wait(190));

	// Capa 3
	this.instance_5 = new lib.cajita();
	this.instance_5.setTransform(33.1,58.4,0.275,0.275,0,0,0,12.2,17.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,y:58.5,alpha:1},8,cjs.Ease.get(1)).wait(296));

	// Capa 1
	this.instance_6 = new lib.mesa();
	this.instance_6.setTransform(66.4,141.6,1,1,0,0,0,69.4,12);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},12,cjs.Ease.get(1)).to({y:80.9},7,cjs.Ease.get(1)).wait(318));

	// Capa 2
	this.instance_7 = new lib.onpe();
	this.instance_7.setTransform(68.6,82.3,1,0.086,0,0,0,49.1,27.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({scaleY:1,x:72,y:114.5},21,cjs.Ease.get(1)).to({regY:27.7,scaleY:1},1).wait(257));

	// Capa 4
	this.instance_8 = new lib.miembro();
	this.instance_8.setTransform(73.9,71.7,1,0.187,0,0,0,25.2,32.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({scaleY:1,y:32.1},13,cjs.Ease.get(1)).wait(292));

	// Capa 5
	this.instance_9 = new lib.patas();
	this.instance_9.setTransform(70.2,81.6,1,0.067,0,0,0,62.7,36.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({scaleY:1,x:71.4,y:115.2},9).wait(309));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,123.5,138.7,23.9);


(lib.todo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.persona();
	this.instance.setTransform(127.5,51.6,1,1,0,0,0,69.4,81.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(246).to({x:-245.4,alpha:0},13,cjs.Ease.get(0.99)).to({x:-477.8},21).wait(1));

	// Capa 2
	this.instance_1 = new lib.persona();
	this.instance_1.setTransform(-55.1,51.6,1,1,0,0,0,69.4,81.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(260).to({x:-249.8,alpha:0},6,cjs.Ease.get(1)).to({x:-660.5},28).to({_off:true},1).wait(14));

	// MENU
	this.instance_2 = new lib.persona();
	this.instance_2.setTransform(-237.8,51.6,1,1,0,0,0,69.4,81.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(268).to({x:-254.8,alpha:0},10,cjs.Ease.get(1)).to({x:-843.2},34,cjs.Ease.get(1)).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;




(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
/*By Edgardo Paredes // edgardoparedes.com*/ 
// stage content:
(lib.actualizarSige = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PP
	this.instance = new lib.mapaPeru();
	this.instance.setTransform(274.5,212.9,0.029,0.029,0,0,0,461.7,674.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:460.9,regY:674.5,scaleX:0.18,scaleY:0.18,alpha:1},11,cjs.Ease.get(1)).wait(76).to({regX:460.2,regY:674.6,scaleX:0.03,scaleY:0.03,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(96).to({regX:461.7,regY:674.1,_off:false},0).to({regX:460.9,regY:674.5,scaleX:0.18,scaleY:0.18,alpha:1},11,cjs.Ease.get(1)).wait(63).to({regX:460.2,regY:674.6,scaleX:0.03,scaleY:0.03,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(27));

	// Modo de aislamiento
	this.instance_1 = new lib.SIGE();
	this.instance_1.setTransform(286.2,201.1,0.155,0.155,0,0,0,83.8,29.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).to({regX:83.9,scaleX:0.75,scaleY:0.75,alpha:1},9).wait(70).to({regX:83.8,scaleX:0.16,scaleY:0.16,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(118));

	// Capa 1
	this.instance_2 = new lib.FLECHAACTUALIZAR();
	this.instance_2.setTransform(285,200.1,0.047,0.047,0,0,0,313.2,313.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({regX:312.8,regY:313,scaleX:0.28,scaleY:0.28,alpha:1},8,cjs.Ease.get(1)).wait(72).to({regX:312.9,scaleX:0.38,scaleY:0.38},6,cjs.Ease.get(1)).wait(22).to({regX:312.8,scaleX:0.28,scaleY:0.28},6,cjs.Ease.get(1)).wait(55).to({regX:312.9,scaleX:0.38,scaleY:0.38},6,cjs.Ease.get(1)).wait(35).to({regX:312.8,scaleX:0.28,scaleY:0.28},10,cjs.Ease.get(1)).wait(65).to({regX:312.7,regY:313.4,scaleX:0.07,scaleY:0.07,y:200.2,alpha:0},7,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261.3,190.8,26.5,38.7);


// symbols:
(lib.SIGE = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWDkQhChBAAhoIAAh1QAAhnBAhCQA9hCBlAAQBoAAA4A0QA3AyABBTIAAADIhsAAQgDgugagaQgagbgyAAQg1AAggAoQggApAABAIAAB2QAABBAhApQAiApA4AAQAoAAAZgJQAYgIAMgNIAAhpIhlAAIAAhNIDYAAIAADWQgZAhg2AaQg2AahTAAQhpAAhAhBgAsCD2QhFgxAChWIAAgCIBwAAQAAAzAfAXQAfAYA4AAQAvAAAZgTQAYgUAAgfQAAgigXgUQgXgTg7gSQhmgeg0gmQg0gpAAhGQAAhHA8gsQA7gsBdgBQBfAAA7AzQA7AxgCBKIgBADIhvAAQAAgogagZQgbgYgwAAQguAAgZAUQgZAUAAAhQAAAdAbASQAbATBCAUQBfAbAwApQAxArAABHQAABJg6ArQg6AphfAAQhdAAhGgvgAHOEdIAAo5IF5AAIAABYIkGAAIAACQIDtAAIAABWIjtAAIAACjIEGAAIAABYgAkuEdIAAo5IBzAAIAAI5g");
	this.shape.setTransform(83.9,29.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167.8,58.8);


(lib.mapaPeru = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5FE0DA").p("ADDHaIgHgEIgjgnIABgQIAFgJIAagcIAGgKIAEgKIADgNIACgeIgEgWIgMgRIgVgTIAIgGIAJABIAJAEIAJAHIAHgGIAHgDIAGABIAFAIIAJgIIARgbIABgDACODoIgCACIgGAIIgKAGIgNADIhGAGIgCADIgFALIgFACIgIgCIgFgEIgDgFIgEgFIgUgIIgTgEIgPgIIgNgVIAGgDIADgFIAAgGIgEgGIgJAJIgGgCIgHgGIgIgBIghAXIgEABIgHgDIgIgEIgFgEIgGgIIAAgFIARgWIAwgxIAEgLIgDgLIgIgQIgCgJIAAgGIgBgFIgHgGIgHAAIgZAFIgPgCIgYgNIgNgFIg+gDIgbgJIgKgZIgBABIgDgBIgCgBIAAgEIACgCIAEgCIAEAAIACAAIADgBIADgCIACgGIgMgLIgJgEIgKAXIgQgEIgPgQIgHgWIgBgJIgDgLIgEgJIgFgEIgIgEIgEgQIgKgGIgPAEIgKAPIgOAmIAKAJIAbAIIAMAJIAHAMIgEAEIgZgBIgTAGIgNABIgFgKIgCgOIgGgLIgJgEIgNAGIgQgNIgsgGIgKgMIANgWIAEgNIgJgGIgJgEIgFgKIgEgYIABgOIAEgIIAIgEIAMgCIAIACIAEAEIAFACIAIgEIACgEIACgYIAEgGIAQgRIAGgKIACgQIgEgIIgGgGIgCgLIAFAAIAIAHIAMAIIAKAKIAFANIADAEIARAMIAEAKIgBAEIgCAEIgCAFIAAAFIADAEIAGAGIABADIAHAHIAPAKIASAJIAPACIANgGIgagYIgCgQIAFACIAHABIAFgCIgCgGIgFgCIgUgGIgDgJIhjitIgBgLIAGgOIAGgDIAIAAIAQABIAIgDIAMgOIAHgDIAHAAIAKAIIAEACIAHgDIAIgFIAFgGIgEgCIgMgCIgkgLIgIgHIADgIIAOgFIAegDIAHACIAFADIAFAEIAFACIAGABIATgGIAGgBIAQABIAIgDIAFgFIAAgGIgDgDIgNgCIgJgHIgDgIIAHgIIAOgDIALAFIAjAlIAFAIIACAGIACATIACAGIAJAFIAOABIAYgBIAIADIAMAHIAMALIAIAIIAlAdIAOAQIAFAaIAEAHIALgGIANgJIAMgFIAPAEIAEAJIgGAHIgNgEIAHAPIAIAGADDHaIADABIAUAFIAhASIAxAFIAWAIIAFgTIAAhBIgIgOIgbgDIgcgHIgKgLIAXgQIA0gLIAOACIAYAIIAMABIAPgFIAbgkIAEgCIAQgEIAKgHIAEgCIgGgGIgGgDIgGACIgGAHIgPgLIAAgFIAegLIAKgBIAcAOIAKABIAfgDIgKgKIgDgGIgCgHIACgKIADgBIAFAAIAFgHIAEgPIgDgIIgQgIIgEgFIgDgFIgEgEIgGgCIgHABIgUAFIgWAAIgcgGIglgTIgNgBIgKAIIgIAMIgIAHIgJgHIgBgGIACgQIgDgGIgJgOIghhCIALgEIAcgCIAFgCIADgLIAIgLIAKgKIAJgHIASgDIAIgEIAEgGIgCgIIgMgRIgIgGIgvgCIgXgJIgKgCIgHADIgFAFIgFADIgVgIIgigCIgJgFIAAgFIAIgTIACgIIgBgJIgEgPIAAgHIgEgRIgJgLIgWgQIgVgcIgKgKIgQgDIgOgBIgNgDIgMgFIgIgHIAEgKIANADIAHgGIAAgIIgHgEIgbgCIgVADIgagBIgKgbIgFgFIgHgEIAAgLIAEgVIABgBIACgEIgCgDIgRgEIgFgCIgJgPIgWgQACODoIAGgKIACgLIgJgFIgQgCIACgGIAVgNIAIgJIACgTIAFgIIgFgKIgbgWIgKgOIAPgGIAAADIARANIA6AdIAPAOIAMAbIANAGIAaAHIAuAoIALAGIACACIgEAGIgHAFIgIACIgKAAIgEgCIgCgEIgbgZIgPgLIgHAEIgCAG");
	this.shape.setTransform(871,1067.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5FE0DA").ss(5.6,1,1).p("ALm0RIAKgEIAJgQIABgQIAFgLIAEgMIgEgSIgVgkIgDgNIARAAIAdALIANABIAQgGIAbgQIAMgEIATgBIAdABIANgCIANgHIAIgPIgCgNIgGgOIgIgfIgyhIIgGgRIAEgSIAKgVIAThCIABgoIAFgMIAHgJIAegTIAIgJIAJgSIAJgJIAUgMIAlgdIA6giIAxgqIAcgRIAagYIAPgFIAzgBIAhgIIAZgNIAUgVIARgeIAMgeIADgQIAAgQIgFgRIgQghIgEgRIgHg6IgFgNIgjgnIgGgSIABghIALgcIAPgZIAqhcIAZgXIBMhlIARgpIAMhEIAAgUIgJgwIAGgXIAVgtIAEgLIAFgfIAFgLIAIgKIAGgKIABgLIgEgtIgDgLIgHgLIgFgNIADgKIARgFIAJAAIAGgCIAKgFIABgDIABgKIACgEIAEAAIAJADIADAAIAegGIANgFIAJgMIAJgHIAOABIAPAEIAnAAIAGgBIAIgHIABgGIABgHIAEgIIAJgJIAUgKIARgTIAMgJIANgGIAOgCIAKAAIAFgEIABgGIAEgHIABgDIAAgIIADgEIADgCIAKAAIADgBIAQgIIAMgIIAIgMIAFgoIAIgIIAegIIADgEIADgGIADgEIAJgDIAbAEIAKAAIAMgFIAOgHIAkgcIAogWIAOgLIAJgLIAMgaIAGgGIAGAAIAOAGIAGgBIAHgFIALgKIAWgHIAighIASgNIANgEIA8gGIAFgCIACgDIABgFIADgFIAGgDIAHABIARAIIAHACIAOgCIAJgGIAHgCIATAQIAGADIAGgBIAJgDIAPgPIAIgCIgEAQIAigPIAKgBIASAEIAGABIADgFIAFgQIAFgGIAKgEIALgCIAWAAIAigFIAKABIAGAGIAFAHIAGAFIAKgEIACgDIAHgIIAEgDIAFABIAEACIADABIAGgKIAAgHIgBgHIACgJIAMgKIARgEIARADIAUAXIAJgLIALgSIAMgGIAFAEIAHARIAGAFIAMACIAGgEIAKgQIASgHIAlAPIAOgLIAEgQIAaAbIAPgPIAHgOIAJgMIAWgVIAHgMIAEgNIAFgLIALgFIALgEIADgHIgGgRIACgKIAJgJIAjgQIAHgBIAtAMIANAAIAIgGIAIgWIAGgIIANgFIALADIABAKIgDANIABALIAiAUIAGgHIADgNIAFgNIAMgGIALAFIAEAKIABALIAIAFIALgEIAegYIALgFIAKgCIALABIAMAFIASAQIAJACIAOgVIAJADIAIAKIAFAKIACAPIgHAbIACAOIAHAJIAjAcIAHADIAHgBIAFACIAFAHIAGALIAIAKIANgMIANgbIAJgOIANgHIAQgBIAOAFIAJANIADASIAEAGIAJAJIAJAGIAKADIAKgCIAZgRIAMgSIAHgTIgCgUIgUgoIgbgkIgWgSIhJglIgUgUIgHgYIgEgaIgJgZIgSgZIgXgZIgcgUIgbgJIgVACIgPAJIgdAaIgTAIIgTAAIgmgKIgIgFIhjgzIgfgEIHvsGIAAAAIgEgCIgIgGIgGgJIgFgLIgJggIgIgFIgPAKIgEAHIgDAHIgEAGIgGACIgHgEIgBgGIAAgIIgCgHIgOgLIgNADIgMAGIgOgFIgHgNIgKgfIgJgNIgQgIIgOAFIgPAIIgSAFIgDgCIgFgFIgDgHIgBgGIAEgDIAMgFIAEgCIADgQIgJgHIgfgCIgIACIgRAIIgIAAIgJgEIgEgGIgCgHIgEgIIgJgIIgagLIgMgBIgMgGIgJgKIgJgGIgNAIIgCAHIABAIIgBAHIgFADIgeAAIgFgEIgDgbIgEgHIgXgTIgDgCIAAgVIgBgGIgEgDIgggGIgbgJIgZgRIglgoIgXgNIgPAHIgRgEIgfgNIgVAAIgHAKIABAQIAHATIgHADIgIABIgJgCIgTgLIgJAAIgVAEIgQAHIgOAjIgUAKIgOALIgHABIgJgCIgIgGIgIgCIgKAEIgPAIIgOADIgGgKIgzAZIgZAGIgIgQIADgFIAKgJIACgGIgDgIIgRgWIgNgWIgHgDIgKALIgHAbIgGAIIgMgFIgFgLIAAgfIgEgNIgIgGIgqgJIgPgIIgbgTIgSgDIgYAMIgOADIgHgNIACgZIgFgEIgRAHIgpAbIgIAAIgDAIIgaAoIgjAaIgFAGIgDAQIgKAJIgMADIgtgGIgYAAIgUAIIgUARIghAlIgLADIgugKIgIAAIgSAEIgDADIAAAPIgCAFIgHACIgQACIgdAHIgQACIgOgDIgMgHIgKgJIgEgJIgGgFIhKgMIgOgEIghgbIgNgHIgNgCIgJAMIgTAnIgJAJIgNAEIgDgCIgDgTIgCgHIgDgHIgEgFIgJAFIgGAFIgDAHIgCAJIgTgOIgMgEIgSAJIgVAHIgIAIIgKAEIgfAGIgHAAIgGgEIgGgMIgNgiIgKgJIgCgEIgygcIgDAIIgIAQIgJAJIgFgPIgGgHIgggIIgLgIIgDgFIgDgWIgDgEIgJgHIgCgEIgCgEIgHgLIgBgHIAAgIIADgEIAHgIIAagYIAGgQIAWgjIgKgJIgOgtIgNgTIgFgJIgCgMIAAgKIAKgZIgFgMIgRgUIgEgKIAGgbIgFgIIgNgHIgHgFIgUgWIgHAAIgDAUIgFACIgYgGIgLABIgLALIgGAIIgIgBIgRgPIgJgGIgbgCIgIABIgEgBIAAgCIgDgKIgBgDIgugcIgPgSIABgcIAJgYIAGgLIASgLIABgOIgJgeIgBgYIgGgIIgPgLIgJgNIgagMIgHgLIAMgOIADgIIgMgFIgEgFIgDgGIgCgFIgBgPIAAgGIgDgGIgCAAIgKABIgEgBIgBgDIAAgIIgGgLIgCgIIgDgHIgSgEIgOgLIgYgFIgOgIIgKgLIgGgNIgLAEIgMATIgLAHIgJgBIgMgCIgTgHIgKgGIgIgIIgMgUIgMgdIgDgHIgNgEIgWAFIgKgFIgBgGIAHgNIgBgGIgHgFIgDACIgDAEIgCADIgIAEIgEAEIgEABIgJgEIgFgFIgEgGIgRgyIgIgIIgLAVIgUABIgsgRIgsgIIgTgKIgQgWIgLggIgGgKIgTgMIgEgHIAFgIIAJgCIALACIAKAAIAFgIIgEgJIgIgIIgEgIIAGgMIgGgCIgMgBIgHgCIgFgDIgZgbIgFgLIAAgOIAEgGIAJgIIACgFIgjhKIgBgHIAAAAIgDgQIgDgDIgKAAIgEgCIgGgKIgKgLIgIgHIgsgaIgTgPIgfghIgUgiIgHgFIgIABIgGAEIgEADIgEACIgKgBIgEgCIgDgEIgDgDIgFgEIgDgDIgFgDIgSgBIgOgEIgIgBIgNgEIAHgKIAUgPIgZgyIgKgPIgQgNIgJACIgSAdIgHAGIgIABIgMgEIgZgGIgPgHIgKgHIgeggIgCgEIgHgCIgNAAIgGgCIgIgIIgdgnIgNgLIgQgIIgggJIgPgBIgLACIgHAHIgCAOIgEAKIgJAKIgLAJIgLAEIgJALIgQAMIgKAEIgJADIgMABIgZgDIgGAAIgTANIgTgCIgzgbIgKgDIgKAAIgNACIglgLIgLADIgEANIAEAQIAHAOIAGAIIAHABIAQgBIAHABIAJAFIAPAOIAJAFIAPAFIAMAHIAIALIAXBSIAOAeIAUAdIAOANIAIAFIAHABIAJgBIAEADIADAEIAdAWIADADIADAIIADAEIAEABIAHgEIADABIAIANIADANIgCAdIAAAGIADALIgCAGIgGAHIgRAKIgDAIIABAHIADAOIAAAHIgBAHIgFANIAAAJIAgBuIgBATIABAGIAGAJIAHAGIAFAHIAAAFIhYAEIgHgGIgEgIIgegeIgFAHIh0G8IgRAUIgoAlIk+FzImDEpIgrAaIsvEdIAAABIALBPIARA4IACANIADA8IAEAXIAkA/IAVAxIAIAcIAIBBIAPAtIACAKIAAAKIgEAqIACATIAGAZIADAIIAgAsIAMAaIADAMIAHAvIAEAUIAIAUIgBAJIgLAVIgGAbIgIB+IgBBiIgFAWIgGANIgQAeIgWAzIgTAfIgEAGIgLAJIgOAPIgaAlIgRArIgGAZIgDAmIABAUIACAOIATBFIAKBnIAQBFIAzByIAPATIAgAXIAUAMIBVAhIAuAYIAcAYIAGAKIASATIAlAfIAdAPIAVAFICWAHIAZAIIAQAIIA4AnIAUAZIAMAXIAXBJIARAhIAXAYIAVAPIAOAGIAUAGIAPACIAOgBIAVgFIAUgJIBqhLIAWgHIAbAEIAMAGIAKAIIAiAsIA6A7IAMAJIAPAIIAaAKIAQABIAPgBIAdgGIBCgFIAwADICAAcIAtASIAWANIAyAzIAGAHIAQAfIADAFIADAJIABATIgVDRIACAbIgBAIIgOA6IgDAJIgFAKIglA3IgPAeIgFAIIgIAHIgKAFIgLABIgLgBIgJgFIgIgHIg/hPIgogdIgPgHIgbgIIgSgDIgjADIgQAEIgJAFIgPAMIgXAjIglBNIgMAoIgBAGIABAGIARAvIACAZIgKChIAEApIAZBUICwF3IAYBKIADArIgJAXIgGAKIhFBUIgGALIgEAOIgNBNIgSBBIgBABIgBAEIgPA4IBJgiIAdgZIAWgYIAXgUIAyghIAOgNIASgYIALgMIAMgGIAQgBIALAEIALAFIA+A0IAaALIAQAAIAKgGIACgLIgCgLIgGgKIglgsIgNgSIgEgKIgIgcIAAgPIACgNIAIgOIAJgKIAOgJIALgEIAIgBIAJAAIARgBIAHgGIAGgIIAEgKIABgLIALgbIAJgIIAIgBIAJADIAMAHIBbgBIAigIIATgHIAOgHIApgdIAXgMIA7gUICkgcIAUgHIAtgYIANgJIAKgKIAHgKIAEgLIACgMIADhBIgMhCIADguIgBgaIgShiIgGgUIgFgKIgEgMIAAgOIAGgQIAIgJIAKgEIAMgBIAcAEIBGArIAhAKIAyABIATADIAmAJIB1AtIAiAQIAJAFIAIAIIAIAIIABAAgEAxdAHfIABhMIAGgeIAEgIIAGgGIAHgGIAHgEIAFAAIAHAFIAEgBIAEgEIABgJIADgEIAJgNIAFgMIACgOIgFgPIgJgLIgVgRIgJgLIgKglIgGgOIAEgBIATAAIADABIAKACIAHgCIgKgRIACgKIAFgHIAKgCIgCgDIgCgFIgBgDIAOgGIADgJIACgMIAJgPIgCgKIgtAHIgNAHIgPANIgaAfIgNANIgxAcIgPALIgaAcIgPALIgkAUIgMANIgVAfIgIAHIgSALIgJAHIgGAJIgJATIgFAIIgOAKIgtAMIgwAWIgMAJIgKAQIgGARIgKAOIgjAMIgZAUIgPAIIgKAAIgFgDIgFgFIgJgCIgKABIgEAEIgCAFIgIAGIgNADIpGAAIAIgQIAAgNIgBgNIABgPIAFgHIAKgOIADgJIgDgIIgFgPIgCgIIgQgdIgzggIgIgcIAIgcIADgOIgEgNIgUgYIgHgMIgCgPIABgWIgBgHIgEgGIgHAAIgJABIgHgBIgNgJIgUgRIgOgIIgPgDIgsADIghgDIgNgFIgegPIgrgMIgEABIgFAEIgEABIgEgBIgGgGIgEgCIhXgRIkjgCIAPgYIAmgnIARgVIAMgXIAIgMIAIgFIAXgFIAKgFIAEgJIAAgUIAhgbIAIgJIAFgOIAEgWIgIg9IgFgMIgUgfIgJgKIgbgSIgKgJIg4hRIgNggIgIgNIgNgNIgOgHIgpgJIgPgIIgOgNIgfgoIgEgMIgBgOIAHghIgBgOIgFgOIgKgKIgGgDIgPgCIgIgDIgHgGIgLgQIgJgGIg5ggIgKgKIgFgOIgEgeIgHgTIgVgcIgJgRIgCgOIAFgbIgBgOIgIgSIgYggIgFgQIgMgYIg6gbIgWgQIgEgKIgIgkIABgNIALAAIAYAJIAXgPIAIgcIgGgdIgWgRIgbgIIgXgKIgUgOIhfhjIgcgSIgHgMIAYgLAf1XDIAIAAIAEACIAAgPIACgWIAFgPIAIgTIA1hgIADgVIgGgMIgngyIgBgIIABgIIAGgHIAOgFIAaABIAPAEIANAGIAeAXIAGADIARAEIBmgEIARgDIAGgDIFCinIA+gTIAPgGIAcgSIAqgiIAlgYIAsglIANgHIARgOIBGhTIAXgjIAJgYIAGgZIAGhmIAOgxIALgOIAXgWIBghHIAAAAEg+Og7rIAAAAIAGgSIAIgSIAIgMIALgHIANgEIAPgBIAPABIAPAEIAeARIAOACIAPgHIAhgtIA4gaIAMgNIAAgGIAAgBIgEgEIgHgFIgGgHIgCgGIAAgOIgBgGIgGgPIgPgXIgDgPIABgFIADgFIACgGIAAgHIgFgOIAAgNIABgGIAFgOIABgHIgBgIIgEgOIAAgIIgCgHIgOgFIgFgFIABgGIAFgTIACgOIgBgHIgBgHIgFgFIgMgFIgEgEIgCgPIAFgPIABgNIgKgIIgcgHIgQgJIAAAHIgEAIIgJARIgCAIIgFAMIgMAKIgPAGIgOADIgygBIgLAEIgHAEIgHABIgGACIgEAPIgfAtIgUAUIhzBFIgaAVIgUAZIgNAZIgFAPIgCARIgEAPIgLAKIgdARIgcAVIgWAYIgnA7IgLAWIAwAtIANAIIAkAJIBOgDIAZAHIBFAaIAJABIAEgBIAFgCIAFgFIAPgTIBahPgEhEcg7dIgBABIgIAIIgaAIIgLAMIgNAYIgRAQIg/AsIgSAZIgIARIgDAPIAKApIAAAQIgKAZIgGAIIgEAEIgFAEIgIAGIgDALIAFAOIAHAPIAEANIgBAMIgGAlIAGAQIACAPIgLAKIgIAFIgEAKIBTBdIA1BQIAXARIAYAZIAQAjIgEAZIgLAQIgVACIgMgMIgNAHIgLgCIgHALIAHAcIgLADIAAAJIAGAIIACAIIgFAPIgKAEIgFAGIgDAHIAOAWIATAVIAPAYIARAMIAKgDIAQAEIAMAQIBaBaIAkBQIATA4IgGBEIgdAzIgaAaIgXgDIgwgUIgOgWIgNgBIgHAJIgBAMIgHAQIgRABIgDAFIgEAOIgPANIAAAHIgBA8IAPArIAVAbIA/AxIBAAlIA1AkIAtAsIB0A5IAQgNIAZgeIA9hdIAEgJIAJgdIAEgKIAMgSIBXhnIASgMIDhhAIAagSIAGgGIAEgMIADgVIgChMIgNhHIAEgQIAEgDIADAAIATANIBMA/IAIAIIALAQIADAKIAIANIALAMIAGAJIABAHIgBAIIgOAZIgCAMIAAAEIABAHIADAGIAHAFIALADIAUACIAJADIAJAFIALAJIAKAPIAKAUIAFAGIAIAEIAWACIAfgHIAJgBIAJABIAdAJIAJAFIAGAEIANAXIANgIIAZgaIAQgMIAHgDIAIgLIgHgdIgJgKIgJgHIgBgBIgBgDIgDgFIgCgIIgBgTIgBgHIgKgVIgCgIIgBgNIAQhYIAAgOIAAgEIgBgEIgFgKIgCgIIAAgEIABgDIAMgeIADgDIAHgCIANABIAIACIAHADIAKAAIADgPIgGhkIgFgIIgGgFIgHgDIgFgHIgDgKIACgSIgBgMIgBgJIgRgrIAAgJIAGgMIATgVIAMgLIAIgLIANgcIAIgHIAQgEIAHgdIAFgJIASgSIghABIgRgFIgKgMIgIgPIgJgOIgHgEIgOgGIgGgEIgEgGIgFgPIgEgGIgMgJIgPgIIgNgKIgFgQIgCgNIAAgBIgTgkIgIgrIgWgfIABgQIARgdIABgLIgEgHIgOgIIgSAAIgEgDIgLgHIgFgDIglgkIgUgKIgaADIgZAPIgxAPIgagEIgSgTIgQgWIgSgRIgTgFIgTAAIgSgDIgUgKIgPgLIgXgZIgNgLIgNgFIgagGIgFgIIgCABIgeADIgPAHIgGAFIgGAKIgIAZIgFAMIgLAMIg4ArIgeAQIgHAGIgFABIgNAAIgMgEIghgTIgKgJIgGgPIADgMIBgiAIAHgQIghAEIgfAKIgagDIgPggIAAgHIADgOIAAgGIgEgKIgMgQIgEgJIACgOEgp1g1xIgHAFIhDAbIgeARIghAeIgOATIgIAUIABAUIAQAhIAEARIgIAOIgRAEIgTAAIgOAEIgIAMIgIAjIgFAQIgoAlIgNgNIgIgGIgIgEIgHgBIgMADIgHAAIgNgCIgYgJIgNgCIgSABEgfqhIHIgcAKIgOAHIg1AuIhJBjIgjAdIgKALIgXArIgJANIgaATIgJALIAAAPIAJAOIALAIIAJAKIACAUIgHAPIgLAFIgNACIgLAKIgKAFIgHgOIgKguIgGgLIgJgHIgfgJIgPgCIgMADIgIAOIAAAFIAFAOIgBAIIgFAfIgJAeIgPAgIgFAPIgBAOIAAAaIADAPIAAAHIgGAEIgJACIgEABIAAAEIAAAJIAJAvIgEAOIgSARIgGAEIgJAEIgEADIgNAcIgHA2IAAAFIgDADIgKAFIgJADIgJABIgIACIgHAIIgEALIABAsIgIAgIgsBcIgHAgIgGAOIgNALIgGAQIAAAbIAGAbIAJAOIARAKIgCAMIgVAfIgCANIABAOIgBAOIgHAMIgUANIAKAZIAcA1IANBCIAKAdIAQAXIALAUIACAJIAGAnIAAAMIgCALIgFANIgGAIIgNAJIgEAGIgSA2IgEATIgBANIABAMIADANIAOAmIANBjIgEBBIABANIACAGIABAHIAAAFIgJATIgNANIgEADIgnA8IgCACIgQAaIgDAEIgCACIgKAEIgDACIgCAEIABAGIABACIACACIAJADIADACIABAEIAAAFIgJAMIgCACIgMAGIgFAHIgHATIgBAKIACAVIAGALIAOATIAEAFIAUAsIAGAJIAxAwIAFAKIADAMIABADIADAEIAFAEIALAGIAKACIAGAAIAKAAIAEAAIAJAFIAQAQIA0AiIAHAMIAKAdIAaAoIAeBAIASAUIApAUIAWATIAiANIALAHIAEAHIAHATIABAEIAUASIAIAMIAdBPIAoBCIAGAPIADAPIABAhIgCAEIgGACIgFADIgCAIIACAEIAKAKIADAGIgBANIgFAQIgCAQIAJATIABATIACAHIAGAGQABAAAAABIADACIAOgEIAfgGIAQgHIAYgDIAmALIAQABIApgGIgMgJIgGgGIgGgKIgDgLIgBgRIADgWIAUhAIAIhHIAAgqIAFgYIAFgMIAGgIIATgMIAOADIA0AbIAMADIAMABIAngDIAvADIAxgNIAOgHIAMgMIAOggIAGgWIAFgLIAXgbIBAg3IASgYIAAgXIgXhGIgJgSIgSgeIgQgSIgNgKIg9gbIh6ghIgUgLIgLgLIgSgZIgTgtIhFh/IgHggIANgVIAEgKIABgcIgMhGIAAgLIAHgWIAVgeIAbgXEghtgaKIADADQABABABACQADADADACIADAOIANAVIAKAyIADAKIAGAIIAIAGIAHAHIAGARIAEADIAGADIAFAEIAFAHIAAAGIgCAGIAAATIABADIAEAGIAEADIAFABIAEABIABAIIAAAZIAGAbIAOAPIATAMIARAOIAMAaIgVgEIgIAAIgYADIgJAAIgJACIgJADIgnAZIgEAJIAHAoIgBASIgGAXIgIAWIgFAGIgIA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AQIACAMIAUASIABAhIAcASIAIAIIABAIIgGAHIACAHIAYAgIAIAQIgCAMIAiAbIAJASIgCAIIAQAbIAUgQIAEgCIATgHIAGgGIAGgIIAJgYIABgGIgBgFIgDgMIAAgHIABgHIALgfIABgHIACgeIADgFIAJgEIAJgCIApAFIALALIADAEIAGAPIgJAbIgEAGIgFAGIgLAJIgSAMIgKAJIgCADIgCAFIACAHIAGAFIAMAEIAKABIAagBIAIACIANAOIAIAGIAUAIIAHAFIAEAJIABAHIgBAIIgFAPIgCAPIACAPIAGAPIABAHIABAJIgBAIIAAAHIAEAFIANACIAsABIALgCIAlgOIAYgQIAaguIBJgqIASgOIAlgjIAPgXIAIgQIACgIIADglIADgIIADgGIAggUIB+g1IgCgnEggkAO7IAeA0IAQAOIAGAHIAIAQIALAIIAVAUIgBAFIAMASIgEAGIAAALIAgAbIgBAMIAdArIAGAPIgBAKIAMAaIgHAHIgDAHIANAQIAGAPIgDAGIAIANIgEAHIAPARIgEAJIARAcIABATIgDAMIgIACIgHAFIgJgDIgHABIgFAGIACAGIgFAFIADAOIACARIgCAKIAcAWIBwA8IAYAUIAfAOIANAIIAJANIAFAGIAIACIAHADIAPAbIANAPIADAFIAAAHIgFAHIACAFIAMAQIAJAIIAJADIALAGIAKAOIAIASIACAIIABgBIAUgOIATgGIACgCIgCgIIAAgFIADgHIAHgFIANgRIAHgZIACgCIADgCIAJABIAGADIAFAEIAGAEIAKAKIADAEIAAAEIgKAcIAAAQIADAEIADADIAPAEIAGgBIAFABIACACIABAIIAFASIAHAIIAEAEIAEAFIAIAEIAFgBIAHgGIAEgGIAJgDIAMABIAOAFIATACIAIADIACAEIgEAGIgTAZIgFADIgIABIgFgBIgFABIgFACIgDAFIgBAMIgEAHIgMAKIgBAGIAAAHIACAJIAEADIAHgBIAIABIACAFIABAEIgEAFIgCADIgCADIgCAMIABAMIAAAFIgDAHIACAJIADAEIACABIADgBIAHAAIAZgKIAMgDIAGgDIAEgFIAGgFIAIgDIAFgDIAcgcIAJgMIAEAAIAKAGIAGAFIARARIAPAaIADAHIAAAGIgHAJIgMAJIgGABIgFACIgIAFIgCAHIAAAXIADADIADACIAFABIAHACIAOALIAKAKIALAOIACAEIgDABIgTgKIgEAAIgMAJIgDAIIAEAJIAJAKIADAHIABAIIAFALIAFAHIAFADIADAEIAMAXIAOANIACAFIABAFIgCAMIgGARIgHALIgDAIIgDAGIgDADIgGAKIgCAHIgBANIACADIACADIADACIABACIgCAEIgDAEIgGAEIgpASIgFAUIgBAJIABAHIAAAJIgEAIIgKAJIgFAEIgGACIgFADIAuAgIAXAfIALAMIAFAHIABAHIgBAUIAHAJIAfA9IANASIAyArIAIAJIALATIADAeIgDAbIAIAgIAKAQIAGASICAClIAXAWIASAZIAigZIAMgRIAbgzIAGgIIBohVIAHgIIAFgIIAKgZIAFgIIAGgEIAFAAIACAAIABABIAlATIASAEIAxgCIBEgKIALgDIATgNIATgJIAKgbIAIgtIAGgNIAGgJIAZgPIAfgdIATgaIAQgiIABgVIgpgfIgbgOIgGgEIgEgJIAAgMIAFgXIALgaIAEgQIAHhBIgJgcIgKgLIgzhuIgJgNIgCgPIAOgaIgEgNIgEgGIgjgdIg4gVIgTgMIgGgEIgGgEIg6gaIgKgCIgPABIgJADIgjAQIgNADIgHgBIgKgJIgHgJIgchBIgYgTIgOgJIgGgFIgEgHIgFgXIgFgKIghggIgEgHIgDgLIgBgeIgGghIAAghIgCgJIgEgHIgIgGIgPgEIgKABIgLAIIgGAAIgIgKIgHgHIgSgJIgIgHIgGgLIgMgPIgXhLIgDgQIgJgPIgkgkIgHggIgFhLIADgzIACgKIgBgKIgHgTIgLgKIgigVIgFgGIgDgRIACgpIgEhAIgKgRIgWgYIgPgXIgIgvIgKgYIgagvIgNg6IgGgOIgSgeA1qLqIgEgYEgFKgh7IgGgOA03oiIA9gNIAYACIAYAIIA+ANIARAGIBlARIAbgBIAWgGIAMgOIAGgQIAEghIgBg2IACgQIAEgIIAHgHIAMgHIAJAAIAHAFIAMAXIADAHIABAIIAAAQIACAHIAEAHIASAQIABADIADANIADAHIAGAIIAKAIIAFAHIAEAIIATA8IADAdIAKAQIAKAIIAIADIAUABIAUgPIAJgMIAFgMIAZgqIAKgMIAIgIIAjgVAFZECIieBKIiZAbIgGABIhTgNIgNgBIgLACIiKBCIgVAHIg5AMIguAFIhYgEIg1AGIgMACIgTAHIgiAVIgPAOIgHANIgHARIgGAjIAAAjIAaCFIAQAmIgHAMIgTAOIhlAtIgFgDAvYLCIgGAAIhYgBIgoAJIgJAEIgIAIIgvBCIgSAPIgyAgIATAeIAGAPIANA5IAaAvIAJAYIAIAvIAPAXIAWAYIALARIAEBAIgCApIADARIAFAGIAiAVIAKALIAHASIABAKIgBAKIAAAAIApAEIASAAIBdgPIAGgcIAAgLIgFgbIgDgoIACgQIADgJIAAAAIADAAIAVAHQADAAACABIATADIAGABIARgBIAlgLIAwglIAJgEIABAAIAHABIAMASIAEAFIAJAFIABAAIAEABICugDIDfhEIBHgBIAZgFIAZgLIBwgcIAKgGIALgMIAIgGIARgJIAMgEIANgBIABABIAHAAIAIADIBDAlIA1ArIAKAHIAeAPIBBASIAEABIB3gCIAIAAIAfgRIAnghIApgrIAQgNIAeggIANgJIAggSIAhgLIAIgEIAEgIIABgJIgEgJIgHgJIgIgHIgKgFIg1gUIgHgEIgFgEIgCgEIgIgjIgOgeIgGgLIgXg5IgCgMIAAgLIAJhsIgBgSIgJgVIgjg+IgLgiIgBgaIADgcIgEgZIgthvIgIgNIgSgVIgFADArhMWIiHgJIgFgBArDSPIgDAAIgJgDIgFgDIgFgFIgLgSADwRyIgFAAIhFgUIgdgOIgLgHIg1gsIhCgkIgHgCAFVD+IAEAEAGDTaIAUAeIALAHIANAEIAVACIAegIIAZgOIAKgFIANgDIAqADIAQgCIAMgDIANgHIAngLIBCgJIAhAEIAWAAIAKgEIAMgFIASgRIA3hNIAcgyIAKgIIAKACIAQAHIAQAFIAhAHIAJADIAGADIAWATIAcAiIAaAtIAYA0IABAFIAAAcIgQBhIACAQIAPAsIAMAWIAQATIAPAKIAIACIAAgBIANADIAggKIASgDIA1ABIBdgNIAdgIIAXgJIAGgEIAFgFIAaglIAGgFIAIgDIAEADIAFgCIAHAGIAFAGIAEARIADAHIAEAHIAJAKIAEAGIACAPIADAHIATAPIAcAJIAHADIARAPIAFACIAUgBIAJABIAAAAIAHgBIAHgCIAPgKIANgBIAEACIAFgBIAHAEIAEAHIACAIIAEAGIAEACIACAAIACACIAGAAIAHADIARANIAQAHIAYAFIAYgEIAIgEIAGgEIAFgGIANgJIASgHIAGgFIApghIAagLIAzgPIAGgDIAGACIABAAIABAAIAHABIAMAJIAGADIACAAIATgGIAKAAIAGABIABABIgIgBIgTAGIgIAAIgDgBAZ+XlIgJABIgVAMIgIAAIgIgBAacYBIgCAAIgCgCAZQXxIgYACIgFgCAe1W6IgFADIgzAOIgaALIgoAiIgGAEIgTAIIgNAJIgFAFIgGAEIgHAEIgZAEIgIgBAW5V2IgDACIgGAEIgZAlIgGAFIgHAEIgzARIheANIg0gBIgTADIggALIgIgCAR9XRIgHAVIgfBGIgqA+IhEA4IgZAPIgFAFIgDAGIACAIIAEAEIABAAIAGABIAQgBIACAAIAHABIAHACIAdANIAVAFIAHADIAgAYIAHAJIACAPIAAANIgKA/IgDAHIhGBoIgCAHIgEAQIADAmIgEAgIgFAQIgPAcIgEAFIgJALIgMAIIgZAJIhUAYIgaADIg6ABIgQAAIABABIATAiIAcAiIAFAJIADAUIAEAJIAIAKIAFAEIACAGIABANIgDAUIACAJIANAEIAIAEIAEALIAFAUIAnA1IAEACIAHAGIABgEIADgHIAAAAIABgEIALAHIAkAlIAGAKIAGAZIAFANIALARIADAKIACAbIAIAbIAIALIAFAMIALAnIADAHIAGADIAHACIAFAFIACAFIgEADIgGAMIAOA6IgKAQIAAAFIAlAUIAKAIIAPAdIAFAFIAXAHIAUASIAmAwIASAgIAOAPIADAKIAGAGIAiAWIAUASIAFAHIAaAIIAFAEIABABIAFACIAFgDIAFgEIACgBIADgBIAOAFIALALIAHADIAGADIARgKIAMgNIAFgCIAHgCIADgBIADABIAFADIACABIAEABIAEgBIACgBIAWgRIAKgEIAZgDIALAAIAHAAIAEACIABAHIADAIIAFAGIACACIACABIAuACIADABIAHABIAYAMIAvAmIA1AeIAIACIAGACIAGALIAEABIADABIAYABIAGABIAcAIIAFADIACADIAFADIAAAAIAKACIAZAAIAFAAIAJAEIAJAJIAPAWIgFAGIAIAKIANAKIAcAPIAFACIAGABIAdgCIAHgBIAEAFIAWARIAGACIAHAHIAnAkIAKAQ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");
	this.shape_1.setTransform(458.1,576.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CA598").s().p("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IgBgHIAAgJIAGgUIAogSIAGgEIADgEIACgEIAAgCIgDgCIgDgDIgCgDIACgNIACgHIAGgKIADgDIADgGIACgIIAHgLIAGgRIADgMIgCgFIgCgFIgNgNIgNgXIgCgEIgFgDIgGgHIgEgLIgBgIIgEgHIgJgKIgEgJIADgIIAMgJIAEAAIAUAKIACgBIgBgEIgLgOIgKgKIgOgLIgHgCIgFgBIgDgCIgDgDIgBgXIACgHIAJgFIAEgCIAGgBIANgJIAHgJIgBgGIgCgHIgQgaIgQgRIgHgFIgJgGIgFAAIgJAMIgcAcIgFADIgIADIgFAFIgFAFIgGADIgLADIgaAKIgGAAIgDABIgDgBIgCgEIgCgJIACgHIABgFIgBgMIABgMIACgDIADgDIADgFIAAgEIgCgFIgIgBIgHABIgFgDIgCgJIAAgHIABgGIAMgKIAEgHIABgMIADgFIAFgCIAFgBIAGABIAIgBIAFgDIATgZIADgGIgCgEIgHgDIgTgCIgPgFIgLgBIgJADIgFAGIgHAGIgEABIgIgEIgEgFIgFgEIgGgIIgGgSIAAgIIgCgCIgFgBIgHABIgOgEIgEgDIgCgEIgBgQIALgcIAAgEIgDgEIgLgKIgGgEIgFgEIgFgDIgJgBIgEACIgCACIgHAZIgMARIgIAFIgCAHIgBAFIADAIIgDACIgTAGIgTAOIgCABIgBgIIgIgSIgLgOIgLgGIgJgDIgIgIIgMgQIgDgFIAFgHIAAgHIgDgFIgMgPIgQgbIgGgDIgIgCIgGgGIgJgNIgMgIIgfgOIgYgUIhwg8IgcgWIABgKIgBgRIgEgOIAFgFIgCgGIAGgGIAHgBIAIADIAHgFIAIgCIADgMIAAgTIgSgcIAFgJIgPgRIADgHIgHgNIADgGIgGgPIgOgQIADgHIAIgHIgNgaIABgKIgFgPIgegrIACgMIgggbIAAgLIAEgGIgNgSIABgFIgVgUIgLgIIgIgQIgFgHIgQgOIgfg0IAUgQIAEgCIAUgHIAGgGIAGgIIAIgYIABgGIAAgFIgDgMIgBgHIACgHIAKgfIACgHIABgeIAEgFIAJgEIAIgCIApAFIALALIADAEIAHAPIgKAbIgEAGIgEAGIgLAJIgSAMIgLAJIgBADIgCAFIABAHIAGAFIANAEIAKABIAagBIAHACIAOAOIAHAGIAUAIIAHAF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IgFAMIAEAIIAHAIIAEAJIgEAIIgKAAIgMgCIgJACIgFAIIAFAHIASAMIAHAKIAKAgIAQAWIAUAKIArAIIAsARIAUgBIALgVIAIAIIARAyIAEAGIAFAFIAJAEIAEgBIAEgEIAIgEIADgDIACgEIAEgCIAGAFIABAGIgHANIABAGIAKAFIAXgFIAMAEIAEAHIALAdIANAUIAHAIIAKAGIATAHIAMACIAJABIAMgHIALgTIALgEIAGANIAKALIAOAIIAZAFIAOALIARAEIADAHIACAIIAGALIABAIIABADIADABIAKgBIACAAIADAGIABAGIABAPIABAFIAEAGIAEAFIALAFIgDAIIgMAOIAHALIAbAMIAIANIAPALIAGAIIACAYIAIAeIgBAOIgSALIgGALIgIAYIgCAcIAPASIAuAcIACADIACAKIABACIADABIAIgBIAbACIAJAGIASAPIAHABIAGgIIALgLIAMgBIAYAGIAEgCIADgUIAIAAIATAWIAHAFIANAHIAFAIIgGAbIAEAKIARAUIAFAMIgJAZIgBAKIACAMIAFAJIANATIAOAtIAKAJIgVAjIgHAQIgaAYIgHAIIgCAEIgBAIIABAHIAHALIACAEIACAEIAKAHIACAEIAEAWIACAFIALAIIAgAIIAGAHIAFAPIAJgJIAJgQIACgIIAyAcIACAEIALAJIAMAiIAHAMIAFAEIAHAAIAfgGIAKgEIAIgIIAVgHIASgJIAMAEIATAOIACgJIAEgHIAFgFIAJgFIAEAFIADAHIACAHIADATIAEACIAMgEIAJgJIATgnIAJgMIANACIANAHIAhAbIAOAEIBKAMIAGAFIAEAJIAKAJIANAHIANADIAQgCIAdgHIARgCIAGgCIACgFIAAgPIADgDIATgEIAHAAIAvAKIALgDIAgglIAUgRIAUgIIAYAAIAtAGIANgDIAJgJIADgQIAFgGIAjgaIAagoIADgIIAIAAIAqgbIAQgHIAFAEIgBAZIAGANIAOgDIAZgMIARADIAbATIAPAIIAqAJIAIAGIAEANIABAfIAFALIALAFIAGgIIAHgbIAKgLIAHADIANAWIARAWIADAIIgCAGIgKAJIgDAFIAIAQIAZgGIAzgZIAGAKIAOgDIAPgIIAKgEIAIACIAJAGIAIACIAHgBIAOgLIAVgKIANgjIARgHIAUgEIAKAAIASALIAJACIAIgBIAHgDIgHgTIgBgQIAHgKIAVAAIAfANIASAEIAPgHIAWANIAlAoIAZARIAbAJIAgAGIAEADIACAGIAAAVIACACIAXATIAFAHIACAbIAFAEIAeAAIAFgDIABgHIgBgIIACgHIANgIIAJAGIAJAKIAMAGIAMABIAaALIAJAIIAEAIIADAHIAEAGIAIAEIAIAAIARgIIAIgCIAfACIAJAHIgDAQIgEACIgMAFIgEADIABAGIADAHIAFAFIAEACIARgFIAPgIIAOgFIAQAIIAJANIAKAfIAIANIANAFIAMgGIANgDIAOALIACAHIAAAIIABAGIAHAEIAGgCIAEgGIADgHIAEgHIAPgKIAIAFIAJAgIAFALIAGAJIAIAGIAEACIAAAAInvMGIAgAEIBiAzIAIAFIAmAKIAUAAIASgIIAdgaIAPgJIAVgCIAcAJIAbAUIAXAZIASAZIAJAZIAEAaIAHAYIAUAUIBJAlIAWASIAbAkIAUAoIACAUIgHATIgMASIgZARIgKACIgKgDIgJgGIgJgJIgEgGIgDgSIgIgNIgPgFIgQABIgNAHIgJAOIgMAbIgOAMIgIgKIgGgLIgFgHIgFgCIgHABIgHgDIgjgcIgHgJIgCgOIAHgbIgBgPIgGgKIgIgKIgJgDIgOAVIgJgCIgSgQIgMgFIgKgBIgLACIgLAFIgeAYIgLAEIgHgFIgCgLIgEgKIgLgFIgMAGIgFANIgDANIgGAHIgigUIgBgLIADgNIgBgKIgLgDIgMAFIgHAIIgIAWIgIAGIgNAAIgtgMIgHABIgjAQIgJAJIgCAKIAGARIgCAHIgMAEIgLAFIgFALIgEANIgHAMIgWAVIgJAMIgHAOIgPAPIgagbIgDAQIgOALIgmgPIgSAHIgKAQIgGAEIgMgCIgGgFIgHgRIgFgEIgMAGIgLASIgJALIgUgXIgRgDIgRAEIgMAKIgCAJIACAHIAAAHIgHAKIgDgBIgEgCIgFgBIgEADIgHAIIgCADIgKAEIgGgFIgFgHIgGgGIgKgBIgiAFIgWAAIgLACIgKAEIgFAGIgEAQIgEAFIgGgBIgSgEIgKABIghAPIADgQIgIACIgOAPIgKADIgGABIgGgDIgTgQIgHACIgIAGIgOACIgIgCIgRgIIgHgBIgGADIgCAFIgBAFIgDADIgFACIg8AGIgMAEIgTANIgiAhIgVAHIgMAKIgHAFIgGABIgOgGIgGAAIgFAGIgNAaIgJALIgNALIgoAWIglAcIgNAHIgNAFIgKAAIgbgEIgJADIgDAEIgCAGIgEAEIgeAIIgIAIIgFAoIgIAMIgLAIIgQAIIgEABIgKAAIgDACIgCAEIgBAIIAAADIgEAHIgCAGIgFAEIgKAAIgOACIgNAGIgLAJIgSATIgUAKIgJAJIgEAIIAAAHIgCAGIgHAHIgHABIgnAAIgPgEIgOgBIgJAHIgJAMIgNAFIgdAGIgEAAIgJgDIgEAAIgCAEIAAAKIgBADIgKAFIgGACIgJAAIgSAFIgDAKIAFANIAHALIAEALIAEAtIgCALIgGAKIgIAKIgFALIgFAfIgDALIgVAtIgHAXIAJAwIAAAUIgMBEIgRApIhMBlIgZAXIgpBcIgQAZIgLAcIgBAhIAHASIAjAnIAEANIAIA6IAEARIAQAhIAFARIAAAQIgEAQIgLAeIgSAeIgTAVIgaANIggAIIgzABIgQAFIgaAYIgcARIgxAqIg6AiIglAdIgUAMIgJAJIgJASIgHAJIgeATIgIAJIgFAMIgBAoIgSBCIgKAVIgFASIAHARIAyBIIAHAfIAGAOIACANIgIAPIgMAHIgOACIgdgBIgSABIgNAEIgaAQIgQAGIgOgBIgdgLIgQAAIACANIAVAkIAFASIgEAMIgGALIgBAQIgJAQIgJAEIgBAAIgBAAIgHgIIgJgIIgJgFIghgQIh2gtIglgJIgTgDIgygBIgigKIhFgrIgcgEIgMABIgKAEIgIAJIgHAQIABAOIADAMIAFAKIAHAUIARBiIABAaIgDAuIAMBCIgDBBIgCAMIgEALIgHAKIgJAKIgOAJIgtAYIgTAHIilAcIg5AUIgYAMIgpAdIgPAHIgSAHIgjAIIhbABIgMgHIgJgDIgHABIgKAIIgKAbIgCALIgDAKIgGAIIgHAGIgRABIgJAAIgJABIgLAEIgNAJIgKAKIgHAOIgCANIAAAPIAHAcIAFAKIAMASIAmAsIAFAKIADALIgDALIgKAGIgQAAIgagLIg+g0IgKgFIgMgEIgPABIgNAGIgLAMIgSAYIgNANIgyAhIgXAUIgWAYIgeAZIhJAiIAQg4IABgEIAAgBIAShBIANhNIAFgOIAFgLIBFhUIAHgKIAJgXIgEgrIgYhKIiwl3IgYhUIgFgpIAKihIgCgZIgQgvIgBgGIABgGIAMgoIAkhNIAXgjIAPgMIAKgFIAPgEIAjgDIASADIAcAIIAOAHIApAdIA+BPIAIAHIAKAFIALABIALgBIAJgFIAIgHIAGgIIAOgeIAmg3IAFgKIADgJIAOg6IAAgIIgBgbIAVjRIgCgTIgDgJIgCgEIAFANIACATIgVDRIABAbIAAAIIgOA6IgDAJIgFAKIgmA3IgOAeIgGAIIgIAHIgJAFIgLABIgLgBIgKgFIgIgHIg+hPIgpgdIgOgHIgcgIIgSgDIgjADIgPAEIgKAFIgPAMIgXAjIgkBNIgMAoIgBAGIABAGIAQAvIACAZIgKChIAFApIAYBUICwF3IAYBKIAEArIgJAXIgHAKIhFBUIgFALIgFAOIgNBNIgSBBIAAABIgBAEIgkAVIgHAIIgKAMIgZAqIgFAMIgJAMIgVAPIgTgBIgIgDIgKgIIgKgQIgEgdIgTg8IgDgIIgFgHIgKgIIgGgIIgEgHIgCgNIgCgDIgRgQIgEgHIgDgHIABgQIgBgIIgDgHIgNgXIgGgFIgKAAIgLAHIgHAHIgEAIIgDAQIACA2IgEAhIgHAQIgMAOIgWAGIgbABIhlgRIgRgGIg9gNIgZgIIgXgCIg+ANIA+gNIAXACIAZAIIA9ANIARAGIBlARIAbgBIAWgGIAMgOIAHgQIAEghIgCg2IADgQIAEgIIAHgHIALgHIAKAAIAGAFIANAXIADAHIABAIIgBAQIADAHIAEAHIARAQIACADIACANIAEAHIAGAIIAKAIIAFAHIADAIIATA8IAEAdIAKAQIAKAIIAIADIATABIAVgPIAJgMIAFgMIAZgqIAKgMIAHgIIAkgVIgQA4IBJgiIAegZIAWgYIAXgUIAyghIANgNIASgYIALgMIANgGIAPgBIAMAEIAKAFIA+A0IAaALIAQAAIAKgGIADgLIgDgLIgFgKIgmgsIgMgSIgFgKIgHgcIAAgPIACgNIAHgOIAKgKIANgJIALgEIAJgBIAJAAIARgBIAHgGIAGgIIADgKIACgLIAKgbIAKgIIAHgBIAJADIAMAHIBbgBIAjgIIASgHIAPgHIApgdIAYgMIA5gUIClgcIATgHIAtgYIAOgJIAJgKIAHgKIAEgLIACgMIADhBIgMhCIADguIgBgaIgRhiIgHgUIgFgKIgDgMIgBgOIAHgQIAIgJIAKgEIAMgBIAcAEIBFArIAiAKIAyABIATADIAlAJIB2AtIAhAQIAJAFIAJAIIAHAIIABAAIABAAIgZALIAHAMIAdASIBeBjIAUAOIAXAKIAbAIIAWARIAHAdIgIAcIgYAPIgYgJIgLAAIgBANIAIAkIAFAKIAWAQIA6AbIAMAYIAFAQIAYAgIAHASIABAOIgEAbIACAOIAJARIAVAcIAGATIAEAeIAFAOIAKAKIA6AgIAIAGIALAQIAIAGIAHADIAPACIAGADIALAKIAFAOIAAAOIgGAhIAAAOIAFAMIAfAoIANANIAPAIIAqAJIAOAHIAMANIAIANIANAgIA4BRIALAJIAbASIAJAKIAUAfIAEAMIAIA9IgDAWIgGAOIgIAJIghAbIAAAUIgEAJIgKAFIgWAFIgJAFIgIAMIgMAXIgQAVIgnAnIgPAYIEjACIBYARIADACIAHAGIAEABIADgBIAGgEIADgBIArAMIAeAPIAOAFIAgADIAsgDIAPADIAOAIIAUARIANAJIAHABIAJgBIAHAAIAFAGIAAAHIAAAWIABAPIAHAMIAUAYIAEANIgCAOIgJAcIAJAcIAzAgIAPAdIACAIIAGAPIACAIIgCAJIgLAOIgEAHIgCAPIACANIgBANIgIAQIJGAAIANgDIAIgGIACgFIAEgEIALgBIAIACIAFAFIAGADIAKAAIAOgIIAZgUIAkgMIAJgOIAHgRIAJgQIAMgJIAxgWIAtgMIANgKIAFgIIAJgTIAGgJIAJgHIASgLIAJgHIAUgfIAMgNIAkgUIAPgLIAbgcIAPgLIAwgcIANgNIAagfIAPgNIAOgHIAtgHIABAKIgJAPIgCAMIgDAJIgOAGIACADIABAFIACADIgJACIgGAHIgCAKIAKARIgHACIgJgCIgEgBIgTAAIgEABIAHAOIAKAlIAIALIAVARIAJALIAFAPIgCAOIgFAMIgJANIgCAEIgCAJIgEAEIgEABIgHgFIgEAAIgIAEIgGAGIgGAGIgFAIIgGAeIgBBMIAAAAIhgBHIgWAWIgMAOIgNAxIgHBmIgGAZIgJAYIgXAjIhFBTIgSAOIgMAHIgtAlIglAYIgqAiIgcASIgOAGIg/ATIlBCnIgHADIgRADIhlAEIgSgEIgGgDIgegXIgMgGIgQgEIgagBIgNAFIgHAHIgBAIIABAIIAnAyIAGAMIgDAVIg1BgIgIATIgFAPIgCAWIAAAPIgEgCIgHAAIAHAAIAEACIAAgPIACgWIAFgPIAIgTIA1hgIADgVIgGgMIgngyIgBgIIABgIIAHgHIANgFIAaABIAQAEIAMAGIAeAXIAGADIASAEIBlgEIARgDIAHgDIFBinIA/gTIAOgGIAcgSIAqgiIAlgYIAtglIAMgHIASgOIBFhTIAXgjIAJgYIAGgZIAHhmIANgxIAMgOIAWgWIBghHIAAAAIgBMJIA+gyIAPgEIAUARIAgAnIASARIAiAQIAkAHIAlgCIAlgHIAdgLICwhaIAeACIAOAEIAOABIAdgCIAUABIAMAFIAbASIAYAFIBagKIAOABIKHR6IgIADIgEAHIgEAPIgGALIgJALIgKAKIgWALIgKAJIgGALIgBAMIAGAHIAYAGIAHAIIgRAiIgFAGIg8AQIgPALIgLAPIgJAVIgQgCIgJAOIgHASIgXARIgEARIAAAgIAJBJIABALIgFBYIACAeIAKA6IgJCSIADARIgLAkIgGAJIgPARIgGAJIgCAKIACAJIAAAJIgHAIIgIACIgWgEIgJABIgLARIAPAVIAnAgIAIALIAAAJIgDAIIgDAMIABAKIAKAdIAMATIADA0IAEAYIAKAOIAnAaIAHALIAEALIAFAaIASAyIADAaIgOAPIgxAGIgYAHIgSANIgEANIgBArIAGANIAKAPIADAPIgOAOIgvAaIgPALIgcAhIgFACIgNAEIgEADIgCANIACAiIgEAJIgQgBIgRgDIgOABIgJAPIgFBgIgKAVIgLAHIgpALIgQAKIgGAKIgBANIADA+IgCAFIgMAcIgDAOIAFANIAbAaIAqBBIAMAMIArAgIAMAMIASAZIARARIgCAOIgLAJIgRgBIgOABIgKAdIgYAIIgOANIgMAPIgEAMIAIAXIAAAGIgFAEIgUAGIgHAEIgKAOIgJAsIgKAOIgIgGIgHgPIAOAEIAFgHIgEgJIgPgEIgLAFIgNAJIgLAGIgFgHIgFgaIgOgQIgkgdIgIgIIgNgLIgMgHIgIgDIgYABIgOgBIgJgFIgCgGIgCgTIgBgGIgFgIIgkglIgKgFIgOADIgIAIIADAIIAKAHIANACIADADIgBAGIgEAFIgIADIgRgBIgGABIgSAGIgHgBIgFgCIgEgEIgGgDIgHgCIgeADIgNAFIgEAIIAJAHIAkALIAMACIADACIgFAGIgIAFIgHADIgDgCIgKgIIgHAAIgHADIgNAOIgHADIgQgBIgJAAIgFADIgHAOIABALIBjCtIADAJIAVAGIAEACIACAGIgEACIgHgBIgGgCIADAQIAZAYIgNAGIgPgCIgSgJIgPgKIgGgHIgBgDIgHgGIgCgEIAAgFIABgFIACgEIABgEIgDgKIgRgMIgEgEIgEgNIgLgKIgLgIIgJgHIgEAAIACALIAFAGIAFAIIgDAQIgGAKIgQARIgDAGIgDAYIgCAEIgHAEIgFgCIgFgEIgIgCIgMACIgHAEIgEAIIgBAOIADAYIAFAKIAJAEIAJAGIgDANIgNAWIAJAMIAtAGIAPANIAOgGIAJAEIAFALIACAOIAGAMIAMgBIAUgIIAZABIAEgEIgIgMIgLgJIgbgIIgLgJIAOgmIALgPIAPgEIAJAGIAEAQIAJAEIAEAEIAEAJIADALIABAJIAHAWIAQAQIAPAEIALgXIAIAEIAMALIgCAGIgDACIgCABIgCABIgFABIgDACIgCACIAAAEIACABIACABIABgBIAKAZIAcAJIA9ADIAOAFIAYANIAOACIAagFIAGAAIAIAGIABAFIgBAGIACAJIAJAQIADALIgFALIgwAxIgQAWIAAAFIAFAIIAGAEIAHAEIAHADIAFgBIAhgXIAIABIAGAGIAHACIAIgJIAEAGIABAGIgDAFIgHADIAOAVIAPAIIASAEIAXAIIAEAFIADAFIAEAEIAIACIAGgCIAFgLIACgDIBGgGIAMgDIAKgGIAHgIIABgCIAMAAIAIgEIAOgLIAIgCIAIAAIAYAIIAUgHIAOAJIgBADIgRAbIgJAIIgFgIIgGgBIgHADIgHAGIgIgHIgJgEIgJgBIgJAGIAWATIAMARIAEAWIgDAeIgCANIgEAKIgHAKIgaAcIgEAJIgBAQIAiAnIAIAEIgCAWIAEANIATAbIgVAbIgMAJIgqAWIgOAEIgZACIgMAIIgHAKIgOApIgKAQIhJBPIgTAqIgJAKIgfATIgEAFIgDAHIADAEIAFADIADAEIgDAMIgQATIgTAHIgVAEIgTAIIgXAPIgnAkIgEABIgNACIgDABIgIARIgLAqIgNATIACAAIgCABIgIADIgZAFIgFAAIgFAAIgFgCIgGgFIgMgPIgJgTIgDgDIgEgCIgHgBIgFABIgUAHIgEAAIgFAAIgGgEIgVgPIgIgEIgGgDIgKgCIgDgBIg4gvIgGgDIgDAAIgGgBIgFgDIgQgYIgohLIgvhHIgOgiIgCgJIAAgPIABgXIACgGIAGgIIAJgFIAHgDIAWgDIAJgDIAHgFIATgUIAdgXIAFgNIgRgZIgugHIgHgDIgLgHIgMgKIglgnIgXglIgFgHIgHgGIgfgTIgKgKIgKgZIgMgtIgLgcIgBgGIABgPIAEgRIAKgaIABgIIgDgKIgGgKIgcgQIgJgKIgEgPIACgvIgCgMIgFgKIgIgIIgKgFIgOAAIgMACIgbgDIgugcIgXAIIgIAGIgLAGIgJAGIgWAIIgNABIgUgFIgSgIIgpgdIgCgCIgGgEIgQgHIgQADIAHgYIADgSIgEgTIgegWIgIgNIgLgbIgRgWIgDgHIAAgJIADgNIATggIADgHIABgJIgDgKIgHgNIgGgIIgdgYIgKgKIgXgeIgDgIIgCgKIADgZIACgJIAAgFIgBgIIgFgJIgFgHIgEgJIgCgMIAGgxIgDgYIADgDIAFAEIAJgHIAQgGIAFgDIAFgHIACgLIABg7IgEgaIgGgSIgHgOIgFgGIgCgIIgBgLIAEgaIAFgMIgBgDIAAgEIgLgPIAAgXIAGgOIARgaIABgLIgDgOIgIgZIgCgNIgBgKIAJgjIgCgJIgGgIIgPgIIgHgBIAHABIAPAIIAGAIIACAJIgJAjIABAKIACANIAIAZIADAOIgBALIgRAaIgGAOIAAAXIALAPIAAAEIABADIgFAMIgEAaIABALIACAIIAFAGIAHAOIAGASIAEAaIgBA7IgCALIgFAHIgFADIgQAGIgJAHIgFgEIgIgHIgPgXIgggcIgMgGIgTgHIgLgGIgFgGIgCgHIACggIADgQIABgKIgCgJIgFgNIgGgIIgGgGIgNgHIgHgCIgEAAIADAAIANAIIAGAGIAFAIIAGANIABAJIAAAJIgDARIgDAgIACAGIAFAHIAfAMIAMAHIAUAQIALAMIAQAWIANAMIADAYIgGAxIACAMIAEAJIAFAHIAFAJIABAIIAAAFIgCAJIgDAZIACAKIADAIIAXAeIAKAKIAdAYIAGAIIAHANIADAKIgBAJIgDAHIgTAgIgDANIAAAJIADAHIARAWIALAbIAIANIAeAWIAEATIgDASIgHAYIgKCkIgIArIgSAXIggAgIgGAHIgFAJIgCAJIgBAHIAAAGIAHAZIABAKIgBAOIgEAIIgGAGIgZALIgEABIgGgBIgGgEIgJgLIgGgEIgHgCIgIACIgPAFIgJABIgYAAIgIACIgkAQIgJAGIgMAMIghAzIgYAYIgEAIIgCAJIAGAiIAAAJIgCAWIgCAJIgFAHIgGAEIgYAHIgRAJIglAiIgGAIIgHAOIgCAJIAAAIIACAQIAEAQIAYA1IAtAiIAGAHIAFAJIgLATIgRBDIgCAHIgDAGIgUAYIgHAPIgHAYIgIANIgnAggEAJ1BI1IABAHIADAHIAHADIAMgBIA3geIAHgGIAFgHIAJgXIAdgtIAFgFIAKgFIANgCIBNABIBKgMIAhgCIAggHIBVgnIAqARIA2AGIAegBIgBgHIgEgOIgCggIAEgWIAEgGIAHgDIAIgBIAPABIARAEIAWAIIAFABIAGgBIAGgEIAEgEIAJgNIAXguIAGgIIArgoIAIgMIAHgeIAJhCIAEgMIABgIIgCgKIgEgKIgKgNIgGgQIAGgiIAEgIIAIgMIAJgJIAHgEIANgGIAJgCIAJAAIAhAEIASgBIAQgFIAHgDIAFgEIABgHIgHgSIgCgYIgvgWIgJgGIgXgSIgSgKIgPgLIgVgLIgMATIgFAGIgHADIgKABIgMgBIgIAAIgHADIgKAKIgGAEIgHADIgcAEIgeALIgiAFIgRgCIgMgDIgQgHIgIgCIgHAAIgFAFIgFAPIgEAHIgEAGIgPAPIgFAGIgGAOIgFAGIgGAEIgHACIgXACIggAIIgLgLIgchPIgBgFIAIgBIAQACIAIgDIAGgIIARg/IgBgRIgeg1IAAgOIAKhhIgFg8IABgMIgCgKIgDgMIgpg+IgFgLIgPgvIgGgxIhSicIgDgRIAfgJIAIgDIAEgEIAAgLIgQgTIgPgbIgFgGIgFgFIgHgDIgHgCIgMgCIgGgEIgGgIIgKgXIgDgMIgDgzIgHgcIgBgbIgIgPIgCgGIgDgaIABgLIAEgKIAQgVIAFgOIgKgPIgCgHIABgHIAIgMIAFgQIADgHIAFgGIAGgDIAJACIAIAFIAKAKIAJAQIAOANIB+BQIAMAKIAdAdIAVAKIBMANIAOAGIAJABIAWABIAZAGIAIAAIAHgEIAFgHIAGgWIAEgIIgEAIIgGAWIgFAHIgHAEIgIAAIgZgGIgWgBIgJgBIgOgGIhMgNIgVgKIgdgdIgMgKIh+hQIgOgNIgJgQIgKgKIgIgFIgJgCIgGADIgFAGIgDAHIgFAQIgIAMIgBAHIACAHIAKAPIgFAOIgQAVIgEAKIgBALIADAaIACAGIAIAPIABAbIAHAcIADAzIADAMIAKAXIAGAIIAGAEIAMACIAHACIAHADIAFAFIAFAGIAPAbIAQATIAAALIgEAEIgIADIgfAJIADARIBSCcIAGAxIAPAvIAFALIApA+IADAMIACAKIgBAMIAFA8IgKBhIAAAOIAeA1IABARIgRA/IgGAIIgIADIgQgCIgIABIABAFIAcBPIALALIAggIIAXgCIAHgCIAGgEIAFgGIAGgOIAFgGIAPgPIAEgGIAEgHIAFgPIAFgFIAHAAIAIACIAQAHIAMADIARACIAigFIAegLIAcgEIAHgDIAGgEIAKgKIAHgDIAIAAIAMABIAKgBIAHgDIAFgGIAMgTIAVALIAPALIASAKIAXASIAJAGIAvAWIACAYIAHASIgBAHIgFAEIgHADIgQAFIgSABIghgEIgJAAIgJACIgNAGIgHAEIgJAJIgIAMIgEAIIgGAiIAGAQIAKANIAEAKIACAKIgBAIIgEAMIgJBCIgHAeIgIAMIgrAoIgGAIIgXAuIgJANIgEAEIgGAEIgGABIgFgBIgWgIIgRgEIgPgBIgIABIgHADIgEAGIgEAWIACAgIAEAOIABAHIgeABIg2gGIgqgRIhVAnIggAHIghACIhKAMIhNgBIgNACIgKAFIgFAFIgdAtIgJAXIgFAHIgHAGIg3AeIgMABIgHgDIgDgHIgBgHIAAgHIAFgiIgBgHIgDgGIgJgKIAAgCIgBgCIgCgWIgBgHIgHgGIgHgBIgGADIgSANIgSAKIgRAGIgRADIgOgCIgQgEIgMgHIAMAHIAQAEIAOACIARgDIARgGIASgKIASgNIAGgDIAHABIAHAGIABAHIACAWIABACIAAACIAJAKIADAGIABAHIgFAiIAAAHgEAFfBElIABALIAHAPIARAaIALAcIACAIIAEAIIAJAHIAbAJIAPAKIAAAQIACAHIADAHIAEAGIAYAbIAGAEIACABIgIgFIgYgbIgEgGIgDgHIgCgHIAAgQIgPgKIgbgJIgJgHIgEgIIgCgIIgLgcIgRgaIgHgPIgBgLIACgHIACgIIgCgGIgFgEIgHgDIgbgFIg3gSIg3gJIgUgIIgHgFIgFgGIgDgHIgDgQIADAQIADAHIAFAGIAHAFIAUAIIA3AJIA3ASIAbAFIAHADIAFAEIACAGIgCAIIgCAHgEApTBDVIAFABIAIAAIAHgEIAUgVIAGgEIAHgDIAHgCIADAAIgDAAIgHACIgHADIgGAEIgUAVIgHAEIgIAAIgFgBIgFgCIgIgEIgpgmIgMgHIgKgDIgCAAIAEACIALAHIAqAmIAHAEIAKADIAEAAgEAlQBDRIAGADIAHgCIATgPIAMgGIAHgCIARgDIAIAAIARACIAJAAIAIgCIAIgDIAEgFIADgHIgCgGIgFgOIABgHIAEgCIgEACIgBAHIAFAOIACAGIgDAHIgEAFIgIADIgIACIgJAAIgRgCIgIAAIgRADIgHACIgMAGIgTAPIgHACIgGgDIgBAAIgIgFIgIgDIhbgYIgSgJIgJgJIABgIIAHgNIACgGIABgFIgBgHIgHgnIABgIIAEgGIAGgEIANgHIAGgFIAEgGIADgHIABgGIgDgGIgRgEIgQgEIgJgEIgHgGIgFgGIgNgeIgwhGIgQgQIgFgEIgEgBIgGgCIgFgBIADABIAJAFIAPARIAxBGIAJAXIAEAHIAEAGIAHAFIAJAFIAPAEIAKABIAIADIADAFIgBAHIgCAHIgFAGIgFAEIgOAHIgGAFIgEAGIAAAHIAHAoIAAAHIgBAFIgCAGIgGANIgCAHIAJAKIATAJIBbAXIAIADIAIAGIAHACIACgBgEAnxBCgIAGACIAOgDIgOADIgGgCIgFgBIgXgSIgJgCIgBABIABAAIAXARIAMAEIACgBgEAgkBAmIABAAIAHABIAHgDIATgcIACgGIAAgIIACgIIAIgQIACgHIAAgWIgCgIIgMgTIgCgHIAAgIIAGgOIAFgFIAHgCIACAAIgCAAIgHACIgFAFIgGAOIAAAIIACAHIAMATIACAIIAAAWIgCAHIgIAQIgCAIIAAAIIgCAGIgTAcIgHADIgHgBIgBAAIgFgEIgEgGIgIgNIgIgXIgEgGIgFgGIgHgDIgJgCIgCAAIACAAIAHAEIAGAFIADAHIAJAXIADAHIAJAMIAGAEIAGABIABAAgEAdzBAJIBWgSIAhgPIAGgBIgGABIghAPIhWASIgHgBIAHABgEAb7A+WIgDAOIAAAHIACAHIAEAHIAtA5IARAKIAuAMIACAAIgngKIgRgLIgtg5IgFgHIgCgHIAAgGIAEgOIAGgyIgCgJIgCgHIgLgUIgCgHIAAgJIACgHIAEgHIAMgQIAIgFIAKgFIAQgFIAMgFIAMgKIAGgIIAFgIIAFgGIAIgFIAbgFIALgFIAZgHIAGgGIAUgoIAHgKIAogvIAFgEIAZgRIAFgFIAMgUIAWhQIgBiBIgJgWIgNgUIgDgIIgQgeIgIgSIgKgQIgngkIgHgHIgFgCIgXgRIgEgFIgHABIgdACIgGgBIgFgCIgcgPIgNgKIgIgKIAFgGIgPgWIgIgJIgKgEIgFAAIgZAAIgJgCIgBAAIgEgDIgDgDIgFgDIgbgIIgHAAIgXgCIgEgBIgEgBIgGgLIgFgCIgJgCIg0geIgwgmIgXgMIgIgBIgDAAIgugDIgCgBIgCgCIgEgGIgDgIIgCgHIgEgCIgGAAIgMAAIgZADIgKAEIgWARIgCABIgDABIgEgBIgDgBIgFgDIgDgBIgDABIgGACIgGACIgMANIgRAKIgGgDIgHgDIgLgLIgOgFIgCABIgCABIgFAEIgGADIgFgCIAAgBIgGgEIgagIIgFgHIgUgSIgigWIgGgGIgDgKIgNgPIgTggIglgwIgVgSIgXgHIgEgFIgQgdIgKgIIglgUIAAgFIAKgQIgOg6IAHgMIADgDIgCgFIgFgFIgHgCIgGgDIgDgHIgKgnIgFgMIgJgLIgHgbIgDgbIgDgKIgLgRIgFgNIgGgZIgGgKIgjglIgMgHIgBAEIAAAAIgDAHIAAAEIgIgGIgDgCIgng1IgGgUIgEgLIgIgEIgMgEIgDgJIADgUIgBgNIgCgGIgFgEIgIgKIgDgJIgEgUIgFgJIgbgiIgUgiIAAgBIAPAAIA6gBIAagDIBVgYIAYgJIAMgIIAKgLIAEgFIAOgcIAFgQIAEggIgCgmIADgQIADgHIBGhoIACgHIAKg/IABgNIgDgPIgGgJIghgYIgGgDIgWgFIgcgNIgIgCIgHAAIgBgBIgRABIgGgBIAAAAIgFgEIgCgIIAEgGIAFgFIAYgPIBEg4IAqg+IAghGIAGgVIAAgBIAOADIAHACIAhgLIATgDIA0ABIBegNIAzgRIAGgEIAGgFIAZglIAGgEIADgCIAFgCIAHAGIAFAGIAEARIADAHIAEAHIAKAKIADAGIACAPIADAHIATAPIAdAJIAGADIASAPIAFACIAFACIAXgCIAAAAIAIABIAIAAIAVgMIAKgBIAEgBIAHAEIAEAHIACAIIAEAGIAEACIACACIACAAIAGAAIAHADIARANIARAHIAXAFIAIABIAZgEIAIgEIAGgEIAFgFIANgJIASgIIAGgEIApgiIAagLIAzgOIAEgDIABAAIAHABIAMAJIAGADIADABIAIAAIATgGIAJABIgBgBIgHgBIgKAAIgSAGIgDAAIgGgDIgMgJIgHgBIgBAAIgBAAIgGgCIgGADIgzAPIgaALIgoAhIgHAFIgSAHIgNAJIgFAGIgGAEIgIAEIgYAEIgXgFIgRgHIgRgNIgHgDIgGAAIgCgCIgCAAIgEgCIgEgGIgCgIIgEgHIgHgEIgEABIgEgCIgOABIgPAKIgGACIgIABIAAAAIgIgBIgUABIgFgCIgSgPIgGgDIgdgJIgTgPIgDgHIgCgPIgDgGIgKgKIgEgHIgDgHIgEgRIgFgGIgHgGIgFACIgDgDIgIADIgGAFIgaAlIgFAFIgHAEIgXAJIgcAIIheANIg0gBIgTADIgfAKIgOgDIAAABIgIgCIgPgKIgQgTIgLgWIgPgsIgCgQIAQhhIgBgcIgBgFIgYg0IgagtIgbgiIgWgTIgHgDIgIgDIgigHIgQgFIgPgHIgLgCIgJAIIgcAyIg3BNIgTARIgLAFIgLAEIgWAAIgggEIhDAJIgnALIgNAHIgMADIgPACIgqgDIgNADIgLAFIgYAOIgeAIIgVgCIgOgEIgKgHIgUgeIAUAeIAKAHIAOAEIAVACIAegIIAYgOIALgFIANgDIAqADIAPgCIAMgDIANgHIAngLIBDgJIAgAEIAWAAIALgEIALgFIATgRIA3hNIAcgyIAJgIIALACIAPAHIAQAFIAiAHIAIADIAHADIAWATIAbAiIAaAtIAYA0IABAFIABAcIgQBhIACAQIAPAsIALAWIAQATIAPAKIgHAWIgfBGIgqA+IhEA3IgZAQIgFAFIgDAFIABAJIAFADIAGACIADAAIAAAAIAGABIARgBIABABIAjANIAVAGIATALIAUAPIADAEIAEAGIACAPIAAANIgKA/IgDAGIhGBpIgCAHIgEAQIACAmIgEAgIgFAQIgOAbIgNARIgNAIIgYAJIhUAXIhMAGIgPAAIAAABIgIAAIgBgCIgeADIgLAAIgTgLIgMgEIgGAAIgGABIgGADIgKAGIgSASIgLAHIgNAEIgGABIgGgBIgfgJIgIgEIgGgEIgWgTIgOgRIgFgDIgIgEIgYgJIgGgDIgDgCIgCgDIgJgbIgDgEIgNgPIgmgeIguguIgHgFIgaAAIghgZIgNgHIgTgCIgdgHIgMAAIgEACIgCACIgFAFIgJASIgDADIgFADIgkAKIgQAAIgMgBIgegIIgJABIgcAJIgSADIgUgBIgYgKIgLgIIgFgEIgNgUIgFgEIgIgEIgFAEIgDAFIgFAKIgHALIgQAOIgFAFIgDAGIABAIIAGANIAIANIARAOIAFAFIAEAHIACAHIACASIAAAJIgBAIIgaAwIgJANIgIAGIgPAFIgLACIgEACIgCABIACAIIABADIAHAOIADARIABADIAGAJIADAEIAHADIguAKIgRAKIgWAgIgHAIIgJADIgKACIgNAEIgJAHIg3A4IgNARIgKAeIgGAGIgHADIgHACIgIAEIgEAGIgDAIIgDAPIAAAIIAAgIIADgPIADgIIAEgGIAIgEIAHgCIAHgDIAGgGIAKgeIANgRIA3g4IAJgHIANgEIAKgCIAJgDIAHgIIAWggIARgKIAugKIgHgDIgDgEIgGgJIgBgDIgDgRIgHgOIgBgDIgCgIIACgBIAEgCIALgCIAPgFIAIgGIAJgNIAagwIABgIIAAgJIgCgSIgCgHIgEgHIgFgFIgRgOIgIgNIgGgNIgBgIIADgGIAFgFIAQgOIAHgLIAFgKIADgFIAFgEIAIAEIAFAEIANAUIAFAEIALAIIAYAKIAUABIASgDIAcgJIAJgBIAeAIIAMABIAQAAIAkgKIAFgDIADgDIAJgSIAFgFIACgCIAEgCIAMAAIAdAHIATACIANAHIAhAZIAaAAIAHAFIAuAuIAmAeIANAPIADAEIAJAbIACADIADACIAGADIAYAJIAIAEIAFADIAOARIAWATIAGAEIAIAEIAfAJIAGABIAGgBIANgEIALgHIASgSIAKgGIAGgDIAGgBIAGAAIAMAEIATALIALAAIAegDIABACIATAhIAcAiIAFAIIADAUIAEAJIAHALIAFAEIADAGIAAANIgDAUIADAJIANADIAIAFIAEAKIAFAVIAnA0IALAJIABgEIAAgBIAIAGIAAgEIADgHIAAAAIAEACIAkAkIAGAKIAGAaIAFANIALARIADAJIACAbIAHAcIAEAFIAFAFIAFANIALAmIADAHIAGADIAHADIAFAFIABAFIgDACIgHANIAPA6IgKAQIAAAFIAMAFIAZAOIAKAJIAPAdIAEAEIAXAIIAVASIAmAvIASAhIAOAPIADAJIAFAHIAjAVIATASIAGAIIAZAIIAHAFIAFACIADgCIAAABIAFACIAGgDIAFgEIACgBIAHADIAMALIANAFIACgBIAGADIARgKIAMgNIAGgCIAGgCIAFADIAEAAIACAAIADABIAEABIADgBIACgBIAWgRIAKgEIAZgDIAMAAIACABIABAHIADAIIAEAGIAEACIAHABIACABIAuADIADAAIAWAMIAwAmIA1AeIAIABIAGADIAGALIAHACIAFAAIAEABIAXACIAaAHIAEACIADAEIAFADIAIABIABAAIAJACIAZAAIAGACIAJAKIAPAWIgGAFIAIAKIAOALIAcAPIAKADIADAAIAGABIAdgCIADACIAWASIAGABIAGAIIAnAjIAKAQIAZAwIADAIIAWAqIAACCIgVBPIgMAVIgFAFIgZAQIgLAKIgRAYIgRASIgHAKIgUAnIgHAHIgZAGIgKAGIgcAFIgIAFIgFAGIgEAIIgGAIIgMAKIgMAFIgRAFIgKAEIgIAGIgMAPIgGAPIAAAIIACAIIAOAbIABAIIgEAlIg9AQIgOACIgNgBIgIgEIgIgEIgKgCIgOgBIgWABIgWgGIgGgEIgXgIIgLACIgNAHIgTASIgSAbIASgbIATgSIANgHIALgCIAXAIIAGAEIAWAGIAWgBIAOABIAKACIAIAEIAIAEIANABIAOgCIA9gQgEAreA+CIAAAHIACAIIAEAGIARAZIANAPIAGAGIAFACIACABIAIAAIAJAAIADAAIgCgBIgUAAIgFgCIgGgGIgNgPIgRgZIgEgGIgCgIIAAgHIAFgKIANgDIAUgCIAHgCIAIgEIAdgeIANgLIAEgFIABgHIAAgIIgIgOIgDgMIAFgWIANgiIAGgGIAHgEIAlABIAHgFIAEgFIADgGIAYhcIASgtIARhjIgBgQIgHgRIgJgIIgIgKIgFgLIAOg+IAKhMIAKgGIA7gKIAUgGIAJgHIAMgUIBEilIAWgmIAZggIAVgSIArgtIALgRIASgqIAGgUIAAgRIgLgsIACgbIAThTIgIgBIAMgKIAMACIHnDzIAUAEIAMgDIHIjnIABAAIgBAAInIDnIgMADIgUgEInnjzIgMgCIgMAKIgQgEIgDgBIADABIAQAEIAIABIgTBTIgCAbIALAsIAAARIgGAUIgSAqIgLARIgrAtIgVASIgZAgIgWAmIhEClIgMAUIgJAHIgUAGIg7AKIgKAGIgKBMIgOA+IAFALIAIAKIAJAIIAHARIABAQIgRBjIgSAtIgYBcIgDAGIgEAFIgHAFIglgBIgHAEIgGAGIgNAiIgFAWIADAMIAIAOIAAAIIgBAHIgEAFIgNALIgdAeIgIAEIgHACIgUACIgNADIgFAKgEAwiAsHIBbgGIAOgGIAJgHIAAgJIgGgHIgSgMIgJgHIgHgIIgEgJIADgLIAIgEIAKgCIAUACIgFgBIgXgCIgLACIgHAEIgEAKIAEAKIAHAIIAJAHIATALIAFAIIABAJIgJAHIgPAGIhYAFIgmgGIgNgCIiSgbICSAbIANACIAmAGgEAnQApGIAKADIAIADIARAOIANAHIBMAdIBvAfIALAGIBbA6IAJADIACABIAYACIATgBIgIgBIgUABIgRgCIgJgDIhbg6IgLgGIhvgfIhMgdIgNgHIgRgOIgIgDIgKgDIgDAAgEAy2Aq4IAngEIAUACIgFgBIgYgCIgkAEIgcgGIgDAAIADAAIAcAGgEAmJApJIATABIAlgEIAMAAIgFgBIgPAAIgmAEIgKAAIgEgBgEAikAmzIAFAMIAIAMIAdA5IAWAQIATAJICFAqIADABIAGAAIgJgBIiFgqIgTgJIgWgQIgdg5IgIgMIgFgMIAAgTIAEgNIAMghIAAgRIgPg6IgohaIgGgKIgJgKIgHgFIgRgFIgIgBIAIABIARAFIAHAFIAJAKIAGAKIAoBaIAPA6IAAARIgMAhIgEANIAAATgAdPdxIABALIAMA+IACAHIAFAHIANANIA7AlIA0AaIAKAHIAHAMIAGAQIAVBNIAGAMIAHAJIAJAIIAVAJIAKABIAEABIACAAIAIACIgBgBIgHgBIgCAAIgEgBIgKgBIgVgJIgJgIIgHgJIgGgMIgVhNIgGgQIgHgMIgKgHIg0gaIg7glIgNgNIgFgHIgCgHIgMg+IgBgLIAGgcIAHgUIAMhLIANgoIBeiyIAMgnIAEgtIgJgDIAJADIgEAtIgMAnIheCyIgNAoIgMBLIgHAUIgGAcgAFYTKIABAGIAEAKIgFgQIgThZgAuCSmIACAAIAGABIARgBIAmgLIAwglIAIgEIgIAEIgwAlIgmALIgRABIgGgBIgSgDgAuwSbIADABIANAEIAIACIAGABIgGgBIgUgHIgEAAgAsLRyIAMASIAEAFIAFADIAJADIADAAIABAAIAFABICtgDIDfhEIBHgBIAagFIAYgLIBxgcIAJgGIAMgMIAIgGIAQgJIANgEIANgBIACAAIgCAAIgNABIgNAEIgQAJIgIAGIgMAMIgJAGIhxAcIgYALIgaAFIhHABIjfBEIitADIgFgBIgBAAIgIgFIgFgFIgMgSIgHgBgADNRzIB4gCIAIAAIAegRIAnghIAqgrIAQgNIAeggIAMgJIAggSIAhgLIAIgEIAFgIIAAgJIgEgJIgHgJIgIgHIgKgFIg1gUIgHgEIgEgEIgCgEIgJgjIgOgeIgGgLIgWg5IgDgMIAAgLIAJhsIgBgSIgJgVIgjg+IgLgiIAAgaIADgcIgFgZIgthvIgIgNIgSgVIgFADIAFgDIASAVIAIANIAtBvIAFAZIgDAcIAAAaIALAiIAjA+IAJAVIABASIgJBsIAAALIADAMIAWA5IAGALIAOAeIAJAjIACAEIAEAEIAHAEIA1AUIAKAFIAIAHIAHAJIAEAJIAAAJIgFAIIgIAEIghALIggASIgMAJIgeAgIgQANIgqArIgnAhIgeARIgIAAIh4ACIgEgBIhBgSIgdgPIgLgHIg1grIhAglIgIgDIgIgBIAHADIBAAkIA1AsIALAHIAdAOIBGAUIAEAAIAEABgAoRG2IgfAKIgiAUIgPAOIgHANIgHASIgIA2IACAQIAaCEIAQAnIgHAMIgTAOIhhArIAEADIBlgtIAUgOIAHgMIgRgmIgaiFIAAgjIAGgjIAHgRIAIgNIAPgOIAigVIASgHIANgCIA1gGIBYAEIAugFIA4gMIAVgHICLhCIAKgCIAOABIBUANIAGgBICYgbICdhKIgDgEIhfiMIgNgPIgKgRIgLgdIgDgJIABgMIAjh+IACgSIgBgJIgIggIAAgIIABgJIAFgPIAMgTIATgpIAGgZIADhIIACgIIADgHIAFgGIAHgEIApgVIANgKIAEgHIACgIIAAgHIgEgYIgIgWIgEgGIgLgKIgMgIIgQgFIhDgFIgQACIhJAbIgMAIIg/A1IgHAFIgjARIgRANIg9BCIgsBDIgRAWIgKASIgJAWIgDAHIgRAYIgHANIgLAdIgFAHIgWAXIgQAZIgKAIIgPAIIgxARIgUADIgHAEIhYBHIgHAEIgSAJIgRAEIgYgBIgKgHIgJgLIgihBIgEgFIgLgKIgYgSIgFgJIgFgNIgFgYIgBgNIACgmIgDgPIgDgIIgOgbIgHgJIgIgHIgUgJIgHgGIgCgEIgBgGIgLiAIgDgMIgFgOIgggwIgLgVIgDgdIADAdIALAVIAgAwIAFAOIADAMIALCAIABAGIACAEIAHAGIAUAJIAIAHIAHAJIAOAbIADAIIADAPIgCAmIABANIAFAYIAFANIAFAJIAYASIALAKIAEAFIAiBBIAJALIAKAHIAYABIARgEIASgJIAHgEIBYhHIAHgEIAUgDIAxgRIAPgIIAKgIIAQgZIAWgXIAFgHIALgdIAHgNIARgYIADgHIAJgWIAKgSIARgWIAshDIA9hCIARgNIAjgRIAHgFIA/g1IAMgIIBJgbIAQgCIBDAFIAQAFIAMAIIALAKIAEAGIAIAWIAEAYIAAAHIgCAIIgEAHIgNAKIgpAVIgHAEIgFAGIgDAHIgCAIIgDBIIgGAZIgTApIgMATIgFAPIgBAJIAAAIIAIAgIABAJIgCASIgjB+IgBAMIADAJIALAdIAKARIANAPIBfCMIijBNIiYAbIgFAAIhVgNIgNAAIgLACIiKBCIhOATIguAEIhYgEgAuPMNICHAJIAGABIAiANIAaATIgagTIgigNIgGgBIgDgBIiJgKgEgmAgHTIgRAFIgnAbIhnAjIgbAVIgQAeIgHA+IgIAZIgDAGIgHAGIgNADIANgDIAHgGIADgGIAIgZIAHg+IAQgeIAbgVIBngjIAngbIARgFIASgDIATAAIADABIAGgCIAXgtIgDgMIgGgNIgCgIIABgHIAFgKIAXgcIAagtIADgHIABgGIAAgIIADgNIAQgYIACgHIACgMIADgIIAHgJIBvhfIAMgOIAIgNIAMgkIAFgIIAGgHIAMgBIAJACIAJADIAQAEIASABIAagGIAVgKIATgFIAagLIAMgJIAOgHIgEANIADAOIAIANIAMANIgFAHIgBAJIADAKIADAIIALAQIA0AxIAPAGIAHADIAFAEIAJAJIAtBIIA0BBIAOAZIAGAUIAAAbIBwgBIARgDIANgEIAKgGIAjgMIAMAAIAIAAIADADIAEAFIAIATIAFAiIAEAJIAGAGIAJABIAKgDIALAAIAfAJIALgBIAIgFIANgTIAHgQIgLgOIgFgTIgQilIgHgcIgvg4IgFgFIghgTIgOgGIgggKIgYgLIhOgXIgZgBIgOAHIgKADIgPABIgTgFIgJgHIgEgIIgDgHIgEgHIgSgTIgDgFIgBgDIABgDIAIgPIACgEIABgHIAAgXIgDgKIgFgMIgdgqIgNgbIgKgeIgEgfIAAgYIADgTIAQgoIABgLIgBgOIgHgLIgUgWIgTgfIgGgIIgUgOIgNgOIgSgZIgVguIgFgpIATgoIABgKIAAgOIgFgKIgIgJIgmgaIgIgIIgRg2IgKgTIgHgLIgJgKIAJAKIAHALIAKATIARA2IAIAIIAmAaIAIAJIAFAKIAAAOIgBAKIgTAoIAFApIAVAuIASAZIANAOIAUAOIAGAIIATAfIAUAWIAHALIABAOIgBALIgQAoIgDATIAAAYIAEAfIAKAeIANAbIAdAqIAFAMIADAKIAAAXIgBAHIgCAEIgIAPIgBADIABADIADAFIASATIAEAHIADAHIAEAIIAJAHIATAFIAPgBIAKgDIAOgHIAZABIBOAXIAYALIAgAKIAOAGIAhATIAFAFIAvA4IAHAcIAQClIAFATIALAOIgHAQIgNATIgIAFIgLABIgfgJIgLAAIgKADIgJgBIgGgGIgEgJIgFgiIgIgTIgEgFIgDgDIgIAAIgMAAIgjAMIgKAGIgNAEIgRADIhwABIAAgbIgGgUIgOgZIg0hBIgthIIgJgJIgFgEIgHgDIgPgGIg0gxIgLgQIgDgIIgDgKIABgJIAFgHIgMgNIgIgNIgDgOIAEgNIgOAHIgMAJIgaALIgTAFIgVAKIgaAGIgSgBIgQgEIgJgDIgJgCIgMABIgGAHIgFAIIgMAkIgIANIgMAOIhvBfIgHAJIgDAIIgCAMIgCAHIgQAYIgDANIAAAIIgBAGIgDAHIgaAtIgXAcIgFAKIgBAHIACAIIAGANIADAMIgXAtIgGACIgDgBIgTAAgEBEnBUqIgxgFIghgSIgUgFIgDgBIgIgEIgignIABgQIAEgJIAagcIAHgKIAEgKIACgNIADgeIgEgWIgMgRIgWgTIAJgGIAJABIAJAEIAIAHIAHgGIAHgDIAGABIAFAIIAJgIIARgbIABgDIACgGIAHgEIAPALIAbAZIACAEIAFACIAJAAIAIgCIAIgFIAEgGIgCgCIgLgGIgugoIgbgHIgNgGIgLgbIgQgOIg5gdIgRgNIgBgDIgOAGIAJAOIAcAWIAEAKIgEAIIgDATIgHAJIgVANIgCAGIAPACIAJAFIgCALIgGAKIgBACIgHAIIgKAGIgMADIhGAGIgCADIgFALIgGACIgIgCIgEgEIgDgFIgEgFIgXgIIgSgEIgPgIIgOgVIAHgDIADgFIgBgGIgEgGIgIAJIgHgCIgGgGIgIgBIghAXIgFABIgHgDIgHgEIgGgEIgFgIIAAgFIAQgWIAwgxIAFgLIgDgLIgJgQIgCgJIABgGIgBgFIgIgGIgGAAIgaAFIgOgCIgYgNIgOgFIg9gDIgcgJIgKgZIgBABIgCgBIgCgBIAAgEIACgCIADgCIAFgBIACgBIACgBIADgCIACgGIgMgLIgIgEIgLAXIgPgEIgQgQIgHgWIgBgJIgDgLIgEgJIgEgEIgJgEIgEgQIgJgGIgPAEIgLAPIgOAmIALAJIAbAIIALAJIAIAMIgEAEIgZgBIgUAIIgMABIgGgMIgCgOIgFgLIgJgEIgOAGIgPgNIgtgGIgJgMIANgWIADgNIgJgGIgJgEIgFgKIgDgYIABgOIAEgIIAHgEIAMgCIAIACIAFAEIAFACIAHgEIACgEIADgYIADgGIAQgRIAGgKIADgQIgFgIIgFgGIgCgLIAEAAIAJAHIALAIIALAKIAEANIAEAEIARAMIADAKIgBAEIgCAEIgBAFIAAAFIACAEIAHAGIABADIAGAHIAPAKIASAJIAPACIANgGIgZgYIgDgQIAGACIAHABIAEgCIgCgGIgEgCIgVgGIgDgJIhjitIgBgLIAHgOIAFgDIAJAAIAQABIAHgDIANgOIAHgDIAHAAIAKAIIADACIAHgDIAIgFIAFgGIgDgCIgMgCIgkgLIgJgHIAEgIIANgFIAegDIAHACIAGADIAEAEIAFACIAHABIASgGIAGgBIARABIAIgDIAEgFIABgGIgDgDIgNgCIgKgHIgDgIIAIgIIAOgDIAKAFIAkAlIAFAIIABAGIACATIACAGIAJAFIAOABIAYgBIAIADIAMAHIANALIAIAIIAkAdIAOAQIAFAaIAFAHIALgGIANgJIALgFIAPAEIAEAJIgFAHIgOgEIAHAPIAIAGIAXAQIAJAPIAFACIASAEIACADIgBAEIgBABIgFAVIAAALIAHAEIAFAFIAKAbIAbABIAUgDIAbACIAIAEIAAAIIgHAGIgNgDIgFAKIAJAHIALAFIAOADIANABIARADIAKAKIAUAcIAXAQIAJALIADARIABAHIADAPIABAJIgCAIIgHATIgBAGIAKAGIAiACIAUAIIAGgDIAFgFIAHgDIAKACIAWAJIAwACIAHAGIAMARIADAIIgEAGIgJAEIgRADIgKAHIgKAKIgHALIgDALIgGACIgbACIgMAEIAhBCIAKAOIACAGIgBAQIABAGIAJAHIAHgHIAIgMIALgIIANABIAlATIAbAGIAWAAIAUgFIAHgBIAHACIAEAEIACAFIAFAFIAQAIIACAIIgDAPIgFAHIgFAAIgEABIgBAKIABAHIAEAGIAKAKIggADIgKgBIgbgOIgLABIgdALIAAAFIAOALIAGgHIAGgCIAHADIAGAGIgEACIgLAHIgPAEIgFACIgbAkIgOAFIgMgBIgYgIIgOgCIg0ALIgYAQIALALIAbAHIAbADIAIAOIAABBIgFATgEAudBNkgEgN8A5sIgMgJIgJgFIAAgIIAFgDIANADIAFAIIACAHIAHAEIgDAFgEgBOA37gEgRAA0mIgGgCIACgJIAGgGIACgIIAHABIACAFIAFACIAAAIIgDAHIgHACgEA0EAq7gEgU9AkoIAPgTIAGgcIgGgcIgZgVIgVglIhFgnIgpgSIgIAAIgDgEIgMgMIgFgHIgCgKIACgHIADgFIACgIIgMgeIgZgSIgTgGIAEgKIABgTIgDgRIgVgPIgDgxIgMgnIgDgIIgLgRIgEgPIAEgTIgLgRIAAgHIANACIAIgKIgDgPIgRgiIgCgHIACgBIATgOIATgGIADgCIgDgIIABgFIACgHIAIgFIAMgRIAHgZIACgCIAEgCIAJABIAFADIAFAEIAGAEIALAKIADAEIAAAEIgLAcIABAQIACAEIAEADIAOAEIAHgBIAFABIACACIAAAIIAGASIAGAIIAFAEIAEAFIAIAEIAEgBIAHgGIAFgGIAJgDIALABIAPAFIATACIAHADIACAEIgDAGIgTAZIgFADIgIABIgGgBIgFABIgFACIgDAFIgBAMIgEAHIgMAKIgBAGIAAAHIACAJIAFADIAHgBIAIABIACAFIAAAEIgDAFIgDADIgCADIgBAMIABAMIgBAFIgCAHIACAJIACAEIADABIADgBIAGAAIAagKIALgDIAGgDIAFgFIAFgFIAIgDIAFgDIAcgcIAJgMIAFAAIAJAGIAHAFIAQARIAQAaIACAHIABAGIgHAJIgNAJIgGABIgEACIgJAFIgCAHIABAXIADADIADACIAFABIAHACIAOALIAKAKIALAOIABAEIgCABIgUgKIgEAAIgMAJIgDAIIAEAJIAJAKIAEAHIABAIIAEALIAGAHIAFADIACAEIANAXIANANIACAFIACAFIgDAMIgGARIgHALIgCAIIgDAGIgDADIgGAKIgCAHIgCANIACADIADADIADACIAAACIgCAEIgDAEIgGAEIgoASIgGAUIAAAJIABAHIgBAJIgEAIIgJAJIgGAEIgFACIgFADgA2WKrgEglzgRtIgCgcIgBgGIgDgEIgHgEIgPgDIgMgFIgMgJIgKgPIgHgEIgHgDIgfAFIgggHIgQgJIgVgTIgfgUIgXgFIgXABIgVAFIgNAHIgFAAIgFgCIgRgLIgcgKIgIAAIgEABIgSAMIgdAMIgMABIgVgBIgRAHIgNAHIgFAFIgGAHIgDAHIgCAEIgDARIgCADIgIAHIgCADIgKARIgEAAIgGgCIglgdIgEgHIgBgMIABgIIAHgTIABgGIAAgIIgEgPIgVgkIgDgLIgHgKIgygtIgRgLIgXgGIgMgBIhNgaIgMgHIgGgEIgEgHIgDgGIAFgTIAOgRIANgcIADgRIgBgKIgDgHIgMgVIAJhvIgUgQIhDgTIgLgBIgHADIgEADIh6B2IgSAXIABgEIABgTIgOgRIhyhzIgIgPIgnghIgKgXIgDgXIgLgYIgdgiIhThCIiChNIjxh6IARgNIAYgeIA+hdIAEgJIAIgdIAFgKIALgSIBYhnIASgMIDghAIAagSIAGgGIAEgMIAEgVIgDhMIgMhHIAEgQIAEgDIADAAIATANIBLA/IAIAIIALAQIAEAKIAIANIAKAMIAGAJIACAHIgBAIIgPAZIgCAMIAAAEIABAHIAEAGIAGAFIAMADIAUACIAJADIAJAFIALAJIAKAPIAJAUIAGAGIAIAEIAWACIAfgHIAIgBIAKABIAdAJIAIAFIAGAEIANAXIANgIIAagaIAQgMIAHgDIAIgLIgHgdIgKgKIgIgHIgBgBIgCgDIgCgFIgDgIIAAgTIgCgHIgJgVIgCgIIgBgNIAQhYIAAgOIgBgEIgBgEIgFgKIgBgIIAAgEIAAgDIAMgeIAEgDIAHgCIANABIAHACIAHADIALAAIADgPIgHhkIgEgIIgHgFIgHgDIgFgHIgCgKIABgSIAAgMIgCgJIgRgrIABgJIAFgMIAUgVIAMgLIAIgLIAMgcIAJgHIAPgEIAHgdIAGgJIASgSIASgBIAMACIAYAJIANACIAHAAIAMgDIAIABIAHAEIAIAGIAOANIAnglIAGgQIAIgjIAHgMIAPgEIATAAIARgEIAHgOIgDgRIgRghIAAgUIAIgUIANgTIAhgeIAfgRIBCgbIAIgFIAJAZIAdA1IANBCIAJAdIARAXIAKAUIADAJIAFAnIAAAMIgBALIgGANIgGAIIgMAJIgFAGIgRA2IgEATIgBANIABAMIADANIAOAmIANBjIgFBBIABANIACAGIACAHIgBAFIgJATIgMANIgEADIgoA8IgBACIgRAaIgDAEIgCACIgKAEIgDACIgBAEIABAGIABACIACACIAIADIADACIACAEIgBAFIgIAMIgCACIgNAGIgFAHIgHATIAAAKIABAVIAGALIAPATIADAFIAVAsIAGAJIAwAwIAFAKIADAMIACADIADAEIAFAEIAKAGIAKACIAHAAIAJAAIAEAAIAKAFIAPAQIA1AiIAGAMIALAdIAaAoIAdBAIASAUIAqAUIAVATIAjANIAKAHIAEAHIAIATIAAAEIAUASIAIAMIAeBPIAnBCIAHAPIACAPIABAhIgCAEIgFACIgFADIgDAIIADAEIAJAKIADAGIgBANIgEAQIgCAQIAIATIACATIACAHIAGAGIAAABIAGAFIADADIAFAFIADAOIAOAVIAJAyIAEAKIAGAIIAIAGIAHAHIAFARIAFADIAGADIAFAEIAFAHIAAAGIgCAGIgBATIABADIAEAGIAFADIAEABIAEABIACAIIAAAZIAFAbIAOAPIATAMIARAOIAMAaIgVgEIgIAAIgYADIgIAAIgJACIgKADIgnAZIgDAJIAGAoIgBASIgFAXIgJAWIgFAGIgHADIgcgBIgKABIgoAQIgKACIgJgDIgGgFIgKgLIgGgEIgIAAIgKAEIggAiIgdAXIgKAEIgTADIgIAEIgMABgEgxWgaYIgCAFIgEAFIgFACIgJAAIAJAAIAFgCIAEgFIACgFIACgMIgCg6IADgIIAHgGIAfgNIAPgMIAYgjIAJgGIANgGIAGgEIAEgHIACgHIAAgSIgCgIIgGgHIgGgEIgkgIIgVgLIgiABIgKgGIgJgMIgOgdIgNgkIgLgRIgJgGIgJAAIgHABIgIAAIgGgGIgEgFIgEgiIAHgSIACgIIgBgHIgDgHIgLgTIgDgGIABgIIACgJIAHgLIAHgJIALgLIAIgGIAMgGIARgGIA6gLIAZgbIAGgUIABgKIgDgGIgLgFIgKgDIgHgGIgDgJIAAgJIADgHIAEgGIAqgnIAEgGIADgHIACgIIAAgIIgDgHIgHgFIgKgFIgRgFIgOgGIgEgEIgMgIIgHAAIgJADIgJAJIgPAMIgDgGIgBgDIgCgHIgFgEIgHgCIgUAHIgHAEIgIABIgKgJIAKAJIAIgBIAHgEIAUgHIAHACIAFAEIACAHIABADIADAGIAPgMIAJgJIAJgDIAHAAIAMAIIAEAEIAOAGIARAFIAKAFIAHAFIADAHIAAAIIgCAIIgDAHIgEAGIgqAnIgEAGIgDAHIAAAJIADAJIAHAGIAKADIALAFIADAGIgBAKIgGAUIgZAbIg6ALIgRAGIgMAGIgIAGIgLALIgHAJIgHALIgCAJIgBAIIADAGIALATIADAHIABAHIgCAIIgHASIAEAiIAEAFIAGAGIAIAAIAHgBIAJAAIAJAGIALARIANAkIAOAdIAJAMIAKAGIAigBIAVALIAkAIIAGAEIAGAHIACAIIAAASIgCAHIgEAHIgGAEIgNAGIgJAGIgYAjIgPAMIgfANIgHAGIgDAIIACA6gEhB+giSIgugsIg1gkIg/glIhAgxIgVgbIgPgrIACg8IgBgHIAPgNIAEgOIAEgFIAQgBIAIgQIABgMIAGgJIANABIAOAWIAwAUIAXADIAbgaIAcgzIAGhEIgSg4IglhQIhZhaIgMgQIgQgEIgKADIgRgMIgPgYIgTgVIgPgWIAEgHIAFgGIAJgEIAGgPIgDgIIgGgIIABgJIAKgDIgGgcIAGgLIAMACIAMgHIAMAMIAWgCIALgQIADgZIgQgjIgYgZIgWgRIg2hQIhShdIADgKIAJgFIALgKIgCgPIgGgQIAGglIAAgMIgEgNIgHgPIgEgOIADgLIAHgGIAFgEIAFgEIAFgIIALgZIAAgQIgLgpIAEgPIAIgRIASgZIA/gsIAQgQIAOgYIAKgMIAbgIIAIgIIAAgBIALgWIAng7IAXgYIAbgVIAegRIALgKIAEgPIACgRIAFgPIANgZIATgZIAagVIBzhFIAVgUIAegtIAFgPIAGgCIAHgBIAGgEIALgEIAzABIAOgDIAPgGIALgKIAFgMIACgIIAKgRIADgIIAAgHIARAJIAbAHIALAIIgCANIgEAPIABAPIAFAEIAMAFIAEAFIACAHIAAAHIgBAOIgGATIAAAGIAFAFIANAFIACAHIAAAIIAEAOIABAIIgBAHIgFAOIgBAGIABANIAEAOIABAHIgCAGIgEAFIgBAFIAEAPIAOAXIAGAPIABAGIAAAOIACAGIAHAHIAGAFIAFAEIgBABIAAAGIgLANIg5AaIghAtIgPAHIgNgCIgfgRIgPgEIgPgBIgOABIgOAEIgKAHIgIAMIgJASIgGASIAAAAIAAABIhbBPIgOATIgGAFIgFACIgDABIgKgBIhFgaIgYgHIhPADIgjgJIgOgIIgwgtIAwAtIAOAIIAjAJIBPgDIAYAHIBFAaIAKABIADgBIAFgCIAGgFIAOgTIBbhPIAAgBIgBAOIADAJIAMAQIAEAKIAAAGIgCAOIAAAHIAPAgIAZADIAggKIAhgEIgIAQIhgCAIgCAMIAGAPIAKAJIAgATIAMAEIANAAIAGgBIAHgGIAdgQIA4grIALgMIAGgMIAHgZIAGgKIAHgFIAPgHIAdgDIACgBIAFAIIAbAGIAMAFIANALIAYAZIAOALIAUAKIATADIASAAIATAFIATARIAPAWIASATIAbAEIAxgPIAZgPIAagDIAUAKIAkAkIAGADIAKAHIAFADIARAAIAPAIIAEAHIgCALIgRAdIAAAQIAVAfIAIArIATAkIAAABIADANIAFAQIAMAKIAPAIIANAJIAEAGIAEAPIAEAGIAHAEIAOAGIAGAEIAKAOIAHAPIALAMIAQAFIAigBIgSASIgGAJIgHAdIgPAEIgJAHIgMAcIgIALIgMALIgUAVIgFAMIgBAJIARArIACAJIAAAMIgBASIACAKIAFAHIAHADIAHAFIAEAIIAHBkIgDAPIgLAAIgHgDIgHgCIgNgBIgHACIgEADIgMAeIAAADIAAAEIABAIIAFAKIABAEIABAEIAAAOIgQBYIABANIACAIIAJAVIACAHIAAATIADAIIACAFIACADIABABIAIAHIAKAKIAHAdIgIALIgHADIgQAMIgaAaIgNAIIgNgXIgGgEIgIgFIgdgJIgKgBIgIABIgfAHIgWgCIgIgEIgGgGIgJgUIgKgPIgLgJIgJgFIgJgDIgUgCIgMgDIgGgFIgEgGIgBgHIAAgEIACgMIAPgZIABgIIgCgHIgGgJIgKgMIgIgNIgEgKIgLgQIgIgIIhLg/IgTgNIgDAAIgEADIgEAQIAMBHIADBMIgEAVIgEAMIgGAGIgaASIjgBAIgSAMIhYBnIgLASIgFAKIgIAdIgEAJIg+BdIgYAeIgRANg");
	this.shape_2.setTransform(462,576.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-98.1,924,1349);


(lib.FlechaActualizarSinAnimar = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("EgDdA5UIgfgGQgTgFgNgBQmMgklNhgQp3i3oKmAQlaj+kFk0IjXkHQgTALgHAGQkmERiUCHQgqAng/A2IhqBcMAAAgjtMAmoAACIAIAMIxdQDQA9BcAKANQGlJGJ8EtQKoFDLshGQJQg3H1keQLamhF6rjQC0liBAlsQAHgnASgPQASgOAoABQCkACDlAAIGJAAIBKAAIgdCtQgRBkgPBCQh9I0khHqQkAGxlxFlQmGF3niD6QmtDcmgBVQhwAWilAYQi6AZhcAOIguALgAVknJIC0i5IKyqyIA2g1QAdgfACgaQACgWgagkQgggngOgUQm/qCrGk7QqIkhrGBCQpEA1nxEXQrmGil+LsQixFahKGKQgFAXgIAKQgLALgXAAItYgBIgggGIAaifQAPheAOg/QCBpIEqn1QECmyF4lnQIMnzKykMQHli7IygtQAIAAAMgEIATgGIHHAAIAzALQBaAPC1AZQCiAYBtAXQKfCPJbGlQGwEtFAGTICkDTIFClJIFJlCMAAAAjtg");
	this.shape.setTransform(313,313);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.8,-53.8,733.7,733.7);


(lib.FLECHAACTUALIZAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.FlechaActualizarSinAnimar();
	this.instance.setTransform(313,313,1,1,3.2,0,0,313,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-73.9,774,774);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


/*By Edgardo Paredes // edgardoparedes.com*/ 


(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.lepaEnviar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.BARRACARGAANIMADA();
	this.instance.setTransform(358.6,343.2,1,1,0,0,0,490.4,214);

	this.instance_1 = new lib.BARRACARGAANIMADA();
	this.instance_1.setTransform(450.9,350.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},9).to({state:[]},8).to({state:[{t:this.instance_1},{t:this.instance}]},332).to({state:[]},55).to({state:[]},15).wait(101));

	// Capa 1
	this.instance_2 = new lib.BARRACARGAANIMADA();
	this.instance_2.setTransform(-131.8,129.2);

	this.instance_3 = new lib.BARRACARGAANIMADA();
	this.instance_3.setTransform(450.9,350.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},9).to({state:[]},8).to({state:[{t:this.instance_3},{t:this.instance_2}]},201).to({state:[]},56).to({state:[]},145).wait(101));

	// Capa 1
	this.instance_4 = new lib.BARRACARGAANIMADA();
	this.instance_4.setTransform(358.6,343.2,1,1,0,0,0,490.4,214);

	this.instance_5 = new lib.BARRACARGAANIMADA();
	this.instance_5.setTransform(450.9,350.2);

	this.instance_6 = new lib.DESTELLO();
	this.instance_6.setTransform(423.8,250.6,0.316,0.316,0,0,0,21.8,170.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},9).to({state:[]},8).to({state:[{t:this.instance_5},{t:this.instance_4}]},83).to({state:[]},57).to({state:[{t:this.instance_6}]},243).to({state:[]},16).to({state:[]},3).wait(101));

	// Capa 1
	this.instance_7 = new lib.DESTELLO();
	this.instance_7.setTransform(423.8,250.6,0.316,0.316,0,0,0,21.8,170.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).wait(255).to({_off:false},0).to({_off:true},14).wait(234));

	// Capa 1
	this.instance_8 = new lib.DESTELLO();
	this.instance_8.setTransform(423.8,250.6,0.316,0.316,0,0,0,21.8,170.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).wait(120).to({_off:false},0).to({_off:true},16).wait(367));

	// EDIFICIO
	this.instance_9 = new lib.EDIFICIO();
	this.instance_9.setTransform(402.9,92.3,0.428,0.428,0,0,0,173.9,200);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(315).wait(16).to({_off:false},0).to({x:402.6,y:215.8,alpha:1},16,cjs.Ease.get(1)).wait(75).to({y:304.1,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(83));

	// LETRERO ONPE
	this.instance_10 = new lib.LETREROONPE();
	this.instance_10.setTransform(435.3,130.7,0.428,0.006,0,0,0,79.4,141.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(317).wait(38).to({_off:false},0).to({regY:142.3,scaleY:0.43},7,cjs.Ease.get(1)).wait(60).to({regY:72.5,y:100.8},0).to({y:189.9,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(83));

	// EDIFICIO
	this.instance_11 = new lib.EDIFICIO();
	this.instance_11.setTransform(402.9,92.3,0.428,0.428,0,0,0,173.9,200);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(178).wait(19).to({_off:false},0).to({x:402.6,y:215.8,alpha:1},14,cjs.Ease.get(1)).wait(82).to({y:304.1,alpha:0},13,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// LETRERO ONPE
	this.instance_12 = new lib.LETREROONPE();
	this.instance_12.setTransform(435.3,130.7,0.428,0.006,0,0,0,79.4,141.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(203).wait(16).to({_off:false},0).to({regY:142.3,scaleY:0.43},7,cjs.Ease.get(1)).wait(67).to({regY:72.5,y:100.8},0).to({y:189.9,alpha:0},13,cjs.Ease.get(1)).to({_off:true},1).wait(213));

	// EDIFICIO
	this.instance_13 = new lib.EDIFICIO();
	this.instance_13.setTransform(402.9,92.3,0.428,0.428,0,0,0,173.9,200);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17).wait(65).to({_off:false},0).to({x:402.6,y:215.8,alpha:1},13,cjs.Ease.get(1)).wait(69).to({y:304.1,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(343));

	// LETRERO ONPE
	this.instance_14 = new lib.LETREROONPE();
	this.instance_14.setTransform(435.3,130.7,0.428,0.006,0,0,0,79.4,141.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(82).wait(21).to({_off:false},0).to({regY:142.3,scaleY:0.43},7,cjs.Ease.get(1)).wait(54).to({regY:72.5,y:100.8},0).to({y:189.9,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(343));

	// Capa 20
	this.instance_15 = new lib.carta2();
	this.instance_15.setTransform(182.8,337,0.572,0.572,0,-14.9,-15.8,29.1,39);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({regY:39.1,skewX:-14.6,skewY:-15.6,x:181.9,alpha:1},8,cjs.Ease.get(1)).to({regY:39,skewX:-14.8,skewY:-15.7,x:26.2},17,cjs.Ease.get(1)).wait(413).to({y:337.9},0).to({x:180.2,y:325.5},13,cjs.Ease.get(1)).wait(5).to({y:323.5},0).to({regX:28.9,regY:39.5,scaleX:0.07,scaleY:0.07,skewX:-14.6,skewY:-15.6,y:323.1,alpha:0},13,cjs.Ease.get(1)).to({regX:29.1,regY:39,scaleX:0.57,scaleY:0.57,skewX:-14.8,skewY:-15.7,y:322.5},5).to({_off:true},1).wait(36));

	// CEJA
	this.instance_16 = new lib.PARPADOS();
	this.instance_16.setTransform(115.2,224.9,1,0.138,0,0,0,40.3,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(174).to({_off:false},0).to({scaleY:1},3,cjs.Ease.get(1)).wait(5).to({scaleY:0.15},3,cjs.Ease.get(1)).to({_off:true},1).wait(334));

	// Capa 9
	this.instance_17 = new lib.cabezaAdan();
	this.instance_17.setTransform(268,263.3,1,1,0,0,0,87.7,82.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).to({x:268.1,alpha:1},8,cjs.Ease.get(1)).to({x:116},17,cjs.Ease.get(1)).wait(96).to({rotation:10},24,cjs.Ease.get(1)).wait(50).to({rotation:0},28,cjs.Ease.get(1)).wait(215).to({y:264.2},0).to({x:270,y:251.8},13,cjs.Ease.get(1)).wait(5).to({y:249.8},0).to({x:269.4,y:250.9},13,cjs.Ease.get(1)).to({x:269,y:251.8},25).to({x:270,y:250.8,alpha:0},5).wait(12));

	// Capa 11
	this.instance_18 = new lib.cuerpoAdan();
	this.instance_18.setTransform(271.6,312.9,1,1,0,0,0,48.2,32.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({_off:false},0).to({x:271.7,alpha:1},8,cjs.Ease.get(1)).to({x:119.6},17,cjs.Ease.get(1)).wait(413).to({y:313.8},0).to({x:273.6,y:301.4},13,cjs.Ease.get(1)).wait(5).to({y:299.4},0).to({x:272.6,y:301.4},38,cjs.Ease.get(1)).to({x:273.6,y:300.4,alpha:0},5).wait(12));

	// Capa 16
	this.instance_19 = new lib.brazoOtroAdan();
	this.instance_19.setTransform(222.8,299.3,1,1,0,0,0,48.6,7.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({_off:false},0).to({x:222.9,alpha:1},8,cjs.Ease.get(1)).to({x:70.8},17,cjs.Ease.get(1)).wait(413).to({y:300.1},0).to({x:224.8,y:287.8},13,cjs.Ease.get(1)).wait(5).to({y:285.7},0).to({x:223.8,y:287.8},38,cjs.Ease.get(1)).to({x:224.8,y:286.8,alpha:0},5).wait(12));

	// <Group>_1
	this.instance_20 = new lib.brasoderecheAdan();
	this.instance_20.setTransform(324.4,298.3,1,1,30,0,0,13,46.4);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).to({regX:13.1,regY:46.3,scaleX:1,scaleY:1,rotation:29.9,x:324.7,y:298.2,alpha:1},8,cjs.Ease.get(1)).to({regX:13,regY:46.4,scaleX:1,scaleY:1,rotation:30,x:172.4,y:298.3},17,cjs.Ease.get(1)).to({regX:13.1,scaleX:1,scaleY:1,rotation:24.3},6).to({scaleX:1,scaleY:1,rotation:-14.8,x:172.5},7).wait(65).to({rotation:-14.8},0).to({rotation:30,x:172.4},7,cjs.Ease.get(1)).wait(11).to({rotation:-14.8,x:172.5},9,cjs.Ease.get(1)).wait(85).to({rotation:-14.8},0).to({regX:13,rotation:36.4,x:172.3},10,cjs.Ease.get(1)).wait(13).to({regX:13.1,rotation:-14.8,x:172.5},10,cjs.Ease.get(1)).wait(104).to({rotation:-14.8},0).to({rotation:15,x:172.4,y:298.4},9,cjs.Ease.get(1)).to({rotation:15},13,cjs.Ease.get(0.99)).to({rotation:-14.8,x:172.5,y:298.3},9,cjs.Ease.get(0.99)).wait(55).to({rotation:-14.8,y:299.2},0).to({rotation:7.5,x:326.5,y:286.9},13,cjs.Ease.get(1)).to({rotation:30,y:284.8},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.9,x:325.4,y:286.8},38,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:30,x:326.5,y:285.9,alpha:0},5).wait(12));

	// <Path>_4
	this.instance_21 = new lib.cuello_Adan();
	this.instance_21.setTransform(271.5,274.2,1,1,0,0,0,6,6);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).to({x:271.6,alpha:1},8,cjs.Ease.get(1)).to({x:119.5},17,cjs.Ease.get(1)).wait(413).to({y:275.1},0).to({x:273.5,y:262.7},13,cjs.Ease.get(1)).wait(5).to({y:260.7},0).to({x:272.5,y:262.7},38,cjs.Ease.get(1)).to({x:273.5,y:261.7,alpha:0},5).wait(12));

	// <Path>_6
	this.instance_22 = new lib.piesAdan();
	this.instance_22.setTransform(272.8,352.4,1,1,0,0,0,68.8,27.3);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9).to({_off:false},0).to({x:272.9,alpha:1},8,cjs.Ease.get(1)).to({x:120.7},17,cjs.Ease.get(1)).wait(413).to({x:120.8,y:353.3},0).to({x:274.7,y:340.9},13,cjs.Ease.get(1)).wait(5).to({y:338.9},0).to({x:273.7,y:340.9},38,cjs.Ease.get(1)).to({x:274.7,y:339.9,alpha:0},5).wait(12));

	// usuario
	this.instance_23 = new lib.usuario();
	this.instance_23.setTransform(128.5,309.6,1,1,0,0,0,15,19.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(17).wait(19).to({_off:false},0).to({x:52.1,y:93.5},28,cjs.Ease.get(0.99)).wait(309).to({regX:14.9,scaleX:0.24,scaleY:0.24,x:424.5,y:257.8},36,cjs.Ease.get(1)).to({_off:true},1).wait(110));

	// usuario
	this.instance_24 = new lib.usuario();
	this.instance_24.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(17).wait(22).to({_off:false},0).to({x:93.4,y:140},27,cjs.Ease.get(1)).wait(310).to({regX:14.9,scaleX:0.31,scaleY:0.31,x:424.4,y:254.4},29,cjs.Ease.get(1)).to({_off:true},5).wait(110));

	// usuario
	this.instance_25 = new lib.usuario();
	this.instance_25.setTransform(129.5,309.6,1,1,0,0,0,15,19.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(17).wait(22).to({_off:false},0).to({x:217.4,y:48.9},28,cjs.Ease.get(1)).wait(313).to({scaleX:0.3,scaleY:0.3,x:422.7,y:257.2},31,cjs.Ease.get(1)).to({_off:true},1).wait(108));

	// usuario
	this.instance_26 = new lib.usuario();
	this.instance_26.setTransform(123.3,314.9,1,1,0,0,0,15,19.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(17).wait(19).to({_off:false},0).to({x:176,y:48.9},28,cjs.Ease.get(1)).wait(307).to({scaleX:0.33,scaleY:0.33,x:428,y:256.7},35,cjs.Ease.get(1)).to({_off:true},2).wait(112));

	// usuario
	this.instance_27 = new lib.usuario();
	this.instance_27.setTransform(129.5,314.9,1,1,0,0,0,15,19.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(17).wait(24).to({_off:false},0).to({x:176,y:93.5},27,cjs.Ease.get(1)).wait(168).to({scaleX:0.32,scaleY:0.32,x:424.8,y:254.7},35,cjs.Ease.get(1)).to({_off:true},8).wait(241));

	// usuario
	this.instance_28 = new lib.usuario();
	this.instance_28.setTransform(123.3,310.9,1,1,0,0,0,15,19.1);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(17).wait(24).to({_off:false},0).to({x:134.7,y:93.5},27,cjs.Ease.get(1)).wait(174).to({regX:15.1,scaleX:0.28,scaleY:0.28,x:426,y:256.6},39,cjs.Ease.get(1)).to({_off:true},1).wait(238));

	// usuario
	this.instance_29 = new lib.usuario();
	this.instance_29.setTransform(114.6,307.7,1,1,0,0,0,15,19.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(17).wait(23).to({_off:false},0).to({x:217.4,y:140},28,cjs.Ease.get(1)).wait(171).to({regY:19,scaleX:0.23,scaleY:0.23,x:425.6,y:257.4},40,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// usuario
	this.instance_30 = new lib.usuario();
	this.instance_30.setTransform(134.7,303.1,1,1,0,0,0,15,19.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(17).wait(24).to({_off:false},0).to({x:93.4,y:48.9},25,cjs.Ease.get(0.84)).wait(172).to({scaleX:0.32,scaleY:0.32,x:425.3,y:254.3},34,cjs.Ease.get(1)).to({_off:true},4).wait(244));

	// usuario
	this.instance_31 = new lib.usuario();
	this.instance_31.setTransform(132.6,313.5,1,1,0,0,0,15,19.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(17).wait(19).to({_off:false},0).to({x:52.1,y:48.9},26,cjs.Ease.get(1)).wait(182).to({regY:19.2,scaleX:0.25,scaleY:0.25,x:426,y:256.6},37,cjs.Ease.get(1)).to({_off:true},4).wait(235));

	// usuario
	this.instance_32 = new lib.usuario();
	this.instance_32.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(17).wait(19).to({_off:false},0).to({x:52.1,y:140},28,cjs.Ease.get(1)).wait(53).to({regX:14.9,scaleX:0.27,scaleY:0.27,x:425.3,y:256.2},36,cjs.Ease.get(1)).to({_off:true},1).wait(366));

	// usuario
	this.instance_33 = new lib.usuario();
	this.instance_33.setTransform(123.3,303.4,1,1,0,0,0,15,19.1);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(17).wait(19).to({_off:false},0).to({x:217.4,y:93.5},28,cjs.Ease.get(1)).wait(56).to({scaleX:0.3,scaleY:0.3,x:424.3,y:255.5},36,cjs.Ease.get(1)).to({_off:true},1).wait(363));

	// usuario
	this.instance_34 = new lib.usuario();
	this.instance_34.setTransform(123.3,313.5,1,1,0,0,0,15,19.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(17).wait(27).to({_off:false},0).to({x:134.7,y:140},26,cjs.Ease.get(1)).wait(46).to({scaleX:0.27,scaleY:0.27,x:424.9,y:255.7},36,cjs.Ease.get(1)).to({_off:true},1).wait(367));

	// usuario
	this.instance_35 = new lib.usuario();
	this.instance_35.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(17).wait(19).to({_off:false},0).to({x:93.4,y:93.5},28,cjs.Ease.get(0.99)).wait(55).to({scaleX:0.2,scaleY:0.2,x:425.3,y:256.2},36,cjs.Ease.get(1)).to({_off:true},1).wait(364));

	// usuario
	this.instance_36 = new lib.usuario();
	this.instance_36.setTransform(138.2,310.9,1,1,0,0,0,15,19.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(17).wait(19).to({_off:false},0).to({x:176,y:140},28,cjs.Ease.get(1)).wait(56).to({scaleX:0.34,scaleY:0.34,x:425.3,y:256.2},36,cjs.Ease.get(1)).to({_off:true},4).wait(360));

	// usuario
	this.instance_37 = new lib.usuario();
	this.instance_37.setTransform(134.7,306.7,1,1,0,0,0,15,19.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(18).wait(18).to({_off:false},0).to({y:48.9},28,cjs.Ease.get(1)).wait(58).to({regY:19.2,scaleX:0.31,scaleY:0.31,x:427.2,y:256.9},38,cjs.Ease.get(1)).to({_off:true},3).wait(357));

	// Capa 2
	this.instance_38 = new lib.recuadroLepa();
	this.instance_38.setTransform(137.7,94.7,0.142,0.142,0,0,0,119.8,84);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(36).to({_off:false},0).to({regX:119.9,scaleX:1,scaleY:1,x:137.8,alpha:1},7,cjs.Ease.get(1)).wait(329).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.usuario = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUC+QAAgjAJgUQANgbAhgTQAGgDAJgIIAQgLIAHgFQAaAPAdABIAOgBQAWgDAUgMIAGAFIARALIAPALQAiATAMAbQAJAUAAAjgAg7AxQgbgSgNgeQgEAFgFAAQgIAAgFgKQgFgMAAgRQAAgKACgJQACgJAEgFQAAg4AZgfQAdgkA/gBIABAAQA9ABAcAiQAXAcADA2QAGADAFAKQAFAMAAAPQAAARgGAMQgFAKgIAAQgFAAgEgGQgKAXgTAQQgSARgYAGIgBABQgPAFgPAAQgfAAgdgTg");
	this.shape.setTransform(15,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,38.2);


(lib.recuadroLepa = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA598").s().p("Aw1NHQgxAAgkgjQgjgjAAgyIAA2dQAAgyAjgjQAkgjAxAAMAhrAAAQAyAAAjAjQAjAjAAAyIAAWdQAAAygjAjQgjAjgyAAg");
	this.shape.setTransform(119.9,84);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239.7,167.9);


(lib.PREDESTELLO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgAbIk/AAIAAg1IE/AAg");
	this.shape.setTransform(16,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AifAaIAAg0IE/AAIAAA0g");
	this.shape_1.setTransform(16,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhEIE/AAIAACJIk/AAIAAiJ");
	this.shape_2.setTransform(16,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CA598").s().p("AifBFIAAiJIE/AAIAACJg");
	this.shape_3.setTransform(16,75.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhvIE/AAIAADfIk/AAIAAjf");
	this.shape_4.setTransform(16,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA598").s().p("AifBwIAAjfIE/AAIAADfg");
	this.shape_5.setTransform(16,71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifiaIE/AAIAAE1Ik/AAIAAk1");
	this.shape_6.setTransform(16,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CA598").s().p("AifCbIAAk1IE/AAIAAE1g");
	this.shape_7.setTransform(16,67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjFIE/AAIAAGLIk/AAIAAmL");
	this.shape_8.setTransform(16,62.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA598").s().p("AifDGIAAmLIE/AAIAAGLg");
	this.shape_9.setTransform(16,62.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjwIE/AAIAAHhIk/AAIAAnh");
	this.shape_10.setTransform(16,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CA598").s().p("AifDxIAAnhIE/AAIAAHhg");
	this.shape_11.setTransform(16,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkbIE/AAIAAI3Ik/AAIAAo3");
	this.shape_12.setTransform(16,54.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CA598").s().p("AifEcIAAo3IE/AAIAAI3g");
	this.shape_13.setTransform(16,54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflGIE/AAIAAKNIk/AAIAAqN");
	this.shape_14.setTransform(16,49.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CA598").s().p("AifFHIAAqNIE/AAIAAKNg");
	this.shape_15.setTransform(16,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflxIE/AAIAALjIk/AAIAArj");
	this.shape_16.setTransform(16,45.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4CA598").s().p("AifFyIAArjIE/AAIAALjg");
	this.shape_17.setTransform(16,45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgmcIAAM5Ik/AAIAAs5g");
	this.shape_18.setTransform(16,41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4CA598").s().p("AifGdIAAs5IE/AAIAAM5g");
	this.shape_19.setTransform(16,41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(178,178,178,0)").ss(1,1,1).p("AiflYIE/AAIAAKxIk/AAIAAqx");
	this.shape_20.setTransform(16,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4CA598").s().p("AifFZIAAqxIE/AAIAAKxg");
	this.shape_21.setTransform(16,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifleIEcAAIAjHwIAAApIAACkIkcAAIgjnwIAAikIAAgp");
	this.shape_22.setTransform(16,35.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(143,143,143,0)").ss(1,1,1).p("AifkVIE/AAIAAIrIk/AAIAAor");
	this.shape_23.setTransform(16,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4CA598").s().p("AifEWIAAorIE/AAIAAIrg");
	this.shape_24.setTransform(16,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkfID5AAIBGGMIAAAkIAACPIj5AAIhGmMIAAiQIAAgj");
	this.shape_25.setTransform(16,28.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(107,107,107,0)").ss(1,1,1).p("AifjRIE/AAIAAGjIk/AAIAAmj");
	this.shape_26.setTransform(16,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4CA598").s().p("AifDSIAAmjIE/AAIAAGjg");
	this.shape_27.setTransform(16,21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjhIDWAAIBpEpIAAAfIAAB7IjWAAIhpkpIAAh8IAAge");
	this.shape_28.setTransform(16,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(71,71,71,0)").ss(1,1,1).p("AifiOIE/AAIAAEdIk/AAIAAkd");
	this.shape_29.setTransform(16,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4CA598").s().p("AifCPIAAkdIE/AAIAAEdg");
	this.shape_30.setTransform(16,14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifijICzAAICMDFIAAAaIAABoIizAAIiMjFIAAhoIAAga");
	this.shape_31.setTransform(16,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(36,36,36,0)").ss(1,1,1).p("AifhKIE/AAIAACVIk/AAIAAiV");
	this.shape_32.setTransform(16,7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4CA598").s().p("AifBLIAAiVIE/AAIAACVg");
	this.shape_33.setTransform(16,7.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhlICSAAICtBkIAAATIAABUIiSAAIithkIAAhSIAAgV");
	this.shape_34.setTransform(16,10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifgXIAAA/IE/AAIAAg/AifgXIAAgQIE/AAIAAAQ");
	this.shape_35.setTransform(16,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4CA598").s().p("AifAIIAAgPIE/AAIAAAPg");
	this.shape_36.setTransform(16,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.2,32,66.5);


(lib.LETREROONPE = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG+EwQgfggAAgxIAAgwQAAgxAfgfQAeghAxAAQAxAAAgAhQAfAfAAAxIAAAwQAAAxgfAgQggAggxAAQgxAAgegggAHjB9QgPATAAAfIAAAwQAAAgAPAUQAPATAbABQAcgBAPgTQAPgUAAggIAAgwQAAgfgPgTQgPgWgcABQgbgBgPAWgABhExQgegfAAgxIAAg0QAAgwAdggQAegfAuAAQAyAAAcAaQAbAagBArIAAABIg0AAQAAgagNgPQgMgOgbAAQgYAAgOAUQgOATAAAeIAAA1QAAAfAPAUQAPATAZAAQAZgBAMgNQAMgNAAgaIA0AAIAAABQAAAqgaAaQgbAZgwAAQgwAAgegfgApgEwQgfggAAgxIAAgwQAAgxAfgfQAeghAyAAQAxAAAfAhQAfAfAAAxIAAAwQAAAxgfAgQgfAggxAAQgyAAgegggAo7B9QgPATAAAfIAAAwQAAAgAPAUQAQATAbABQAbgBAPgTQAPgUAAggIAAgwQAAgfgPgTQgPgWgbABQgcgBgPAWgANIFMIhri1IgBAAIAAC1Ig2AAIAAkKIA2AAIBsC2IAAAAIAAi2IA1AAIAAEKgAE9FMIAAkKIA1AAIAAEKgAgBFMIgTg5IhdAAIgSA5Ig2AAIBbkKIA3AAIBZEKgAhkDpIBDAAIghhoIAAAAgAlAFMIAAjhIhLAAIAAgpIDLAAIAAApIhKAAIAADhgAshFMIhbkKIA5AAIA8DTIABAAIADgPIA6jEIA5AAIhbEKgAHzAsIAkgvIA4AAIABABIgzAugAmEhcQgdgfAAgwIAAg1QAAgxAdgfQAdgfAvAAQAxAAAcAaQAbAaAAAqIgBABIgzAAQAAgagNgNQgMgPgbAAQgYAAgOAUQgOATAAAeIAAA2QAAAeAPATQAOAUAagBQAZAAALgMQANgOAAgaIAzAAIAAABQABAqgaAZQgbAZgwAAQgwAAgfgegAqDheQgfgfAAgxIAAgwQAAgwAfghQAfggAxAAQAxAAAgAgQAeAhAAAwIAAAwQAAAxgeAfQggAhgxgBQgxABgfghgApdkRQgPATAAAgIAAAwQAAAgAPAUQAPATAbAAQAbAAAQgTQAPgUAAggIAAgwQAAgggPgTQgQgUgbAAQgcAAgOAUgALGhAIAAkLIC2AAIAAApIiAAAIAABDIBuAAIAAApIhuAAIAABLICAAAIAAArgAHShAIAAkLIBbAAQAxAAAfAgQAgAfAAAwIAAAsQAAAxggAfQgfAggxAAgAIHhrIAjAAQAdAAAQgSQARgUAAgfIAAgsQAAgfgRgTQgQgUgdAAIgjAAgABChAIAAkLIA2AAIAADgIB2AAIAAArgAgKhAIgTg6IhcAAIgTA6Ig1AAIBbkLIA3AAIBYELgAhtikIBEAAIghhoIgBAAgAtlhAIAAkLIA2AAIAADgIB2AAIAAArg");
	this.shape.setTransform(56.4,59);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE8C17").s().p("AAmKvIAAgDIAjAAIAAk9IqsAAINPwdIF4AAIAAQdImvAAIAAE9IgqAAIAAADg");
	this.shape_1.setTransform(104.8,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCAC1C").s().p("AnLKvIAAgDIgtAAIAAk9Il6AAIAAwdIblAAItRQdImGAAIAAE9IAkAAIAAADg");
	this.shape_2.setTransform(40.1,76.3);

	// Capa 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCAC1C").s().p("AHxI3IAAgDIAjAAIAAk9Iw0AAIAAE9IAkAAIAAADIiLAAIAAgDIguAAIAAk9Il5AAIAAstMAhdAAAIAAMtImvAAIAAE9IgqAAIAAADg");
	this.shape_3.setTransform(58.9,88.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.2,7.5,214.3,137.5);


(lib.GRAFICIRCULARPART3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("Ah7B8IAAj3QBogGBJBMQBMBJgGBlIgfADg");
	this.shape.setTransform(12.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.9);


(lib.GRAFICCIRCULAR = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTCtQg0gtgSg5QgJgcgBgeQgCgsAMgnQAPgyAmgoQBEhIBjADIAADjIDfAAQAOBOg/BHQg/BHhdALQgNABgLAAQhPAAhBg5g");
	this.shape.setTransform(22.9,23.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.9,46.2);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape.setTransform(7.6,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.Path_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,-0.7,-1.2,3.9).s().p("AhUgpICpAVIh+A+g");
	this.shape.setTransform(8.6,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,8.6);


(lib.Path_19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-3.6,1.2,2.1,-0.5).s().p("Ag1BGIgCiLIBtAAIABCLg");
	this.shape.setTransform(5.6,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,14);


(lib.Path_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],3.9,-0.6,-2,1.1).s().p("Ag4BGIACiLIBvAAIgDCLg");
	this.shape.setTransform(5.7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,14.1);


(lib.Path_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.7,0.4,4.5,-2.8).s().p("AiJBiIBmkGICtBEIhpEFg");
	this.shape.setTransform(13.9,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.8,33.2);


(lib.Path_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,0,-2.9,0).s().p("AgnBeIAAi8IBPAAIAAC8g");
	this.shape.setTransform(4,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,19);


(lib.Path_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.5,0,4.6,0).s().p("Agtg3QAWgIAQgRQANgTAFgXIAhAXIACDDQgqAVgxAFg");
	this.shape.setTransform(4.6,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,24.6);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-3,1.1,0.7,-1.1).s().p("AhPgrIgFheICpDIIgfAXIAAA0g");
	this.shape.setTransform(8.5,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,27.8);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],3.4,-0.8,-0.2,1.3).s().p("AhNg5IAigYIAAg0IB5CtIAABeg");
	this.shape.setTransform(7.9,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,26.9);


(lib.EDIFICIO = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6rfRMgABgm2IOaAAIAA3rMAm/AAAIkCFdIAAhNImXAAIAAGXICkAAInhKKIAAl7ImAAAIAAHEIFKAAIh1CfIjVAAIAAEhIlgHeImfAAIAAGXIByAAIunTygAxlTQIEmAAIAAjiIkmAAgA3mTQID5AAIAAjiIj5AAgAxlM5IEmAAIAAkPIkmAAgA3mM5ID5AAIAAkPIj5AAgAxlFIIEmAAIAAjjIkmAAgA3mFIID5AAIAAjjIj5AAgAmoALIHCAAIAAnCInCAAgAxlhOIEmAAIAAjiIkmAAgA3mhOID5AAIAAjiIj5AAgAmopWIHCAAIAAnEInCAAgAFX0pIGAAAIAAmXImAAAgAmo0pIHCAAIAAmXInCAAg");
	this.shape.setTransform(170.9,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AItfRIAAtbIo0AAIAANbI3bAAIOnzyIFSAAIAAmXIglAAIFgneIAAChIGAAAIAAnCIirAAIB1ifIA2AAIAAhJIHhqKIDzAAIAAlKIECldIA7AAMAAAA+hgAMPLfIGXAAIAAmXImXAAgABSLfIGAAAIAAmXImAAAgAMPALIGXAAIAAnCImXAAgAMPpWIGXAAIAAnEImXAAg");
	this.shape_1.setTransform(197,200.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AMUfQIAAtdIo6AAIAANdI+iAAMgABgm5IOVAAIAA3mMAn+AAAMAAAA+fgAx+TNIEiAAIAAjcIkiAAgA4ETNID6AAIAAjcIj6AAgAx+M+IEiAAIAAkZIkiAAgA4EM+ID6AAIAAkZIj6AAgAP6LjIGQAAIAAmaImQAAgAE+LjIF8AAIAAmaIl8AAgAnCLjIHCAAIAAmaInCAAgAx+FJIEiAAIAAjlIkiAAgA4EFJID6AAIAAjlIj6AAgAP6AJIGQAAIAAm/ImQAAgAE+AJIF8AAIAAm/Il8AAgAnCAJIHCAAIAAm/InCAAgAx+hPIEiAAIAAjcIkiAAgA4EhPID6AAIAAjcIj6AAgAP6pWIGQAAIAAnDImQAAgAE+pWIF8AAIAAnDIl8AAgAnCpWIHCAAIAAnDInCAAgAP60nIGQAAIAAmaImQAAgAE+0nIF8AAIAAmaIl8AAgAnC0nIHCAAIAAmaInCAAg");
	this.shape_2.setTransform(173.9,200.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347.8,400.3);


(lib.cerrarOjos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DAIAAl/IFpAAIAAETIgGAAIAAANIgCAAIAAADIgCAAIAAAEIAAAAIAAADIgCAAIAAACIgCAAIAAAFIgBAAIAAACIgDAAIAAAHIgCAAIAAABIgHAAIAAAMIgBAAIAAADIgFAAIAAAJIgCAAIgBADIgGAAIAAAKIgFAAIAAAGIgBAAIAAADIgIAAIAAAJIgCAAIAAAFIgHgBIAAAJg");
	this.shape.setTransform(18.1,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,38.6);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.PARPADOS = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cerrarOjos();
	this.instance.setTransform(65.6,0.7,0.828,0.81,0,0,180,18.1,0.8);

	this.instance_1 = new lib.cerrarOjos();
	this.instance_1.setTransform(14.5,2.3,0.797,0.797,0,0,0,18.1,0.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,32.4);


(lib.DESTELLO = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.PREDESTELLO();
	this.instance.setTransform(123.5,63.5,1.002,1.476,0,45,41.3,16.1,41.2);

	this.instance_1 = new lib.PREDESTELLO();
	this.instance_1.setTransform(122.7,281.5,1,1.476,135,0,0,16.1,41.3);

	this.instance_2 = new lib.PREDESTELLO();
	this.instance_2.setTransform(-90.4,274.8,1,1.476,-134.9,0,0,16.1,41.3);

	this.instance_3 = new lib.PREDESTELLO();
	this.instance_3.setTransform(-90.3,62.7,1,1.476,-44.9,0,0,16.1,41.3);

	this.instance_4 = new lib.PREDESTELLO();
	this.instance_4.setTransform(12,300,1,1,180,0,0,16,41.3);

	this.instance_5 = new lib.PREDESTELLO();
	this.instance_5.setTransform(-106.7,173.3,1,1,-89.9,0,0,16,41.3);

	this.instance_6 = new lib.PREDESTELLO();
	this.instance_6.setTransform(150.6,173.3,1,1,90,0,0,16,41.3);

	this.instance_7 = new lib.PREDESTELLO();
	this.instance_7.setTransform(16,41.3,1,1,0,0,0,16,41.3);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,77.3,185.6,186.8);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(44.7,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(53,24.6);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_2.setTransform(53.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape_3.setTransform(44.7,32.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.8,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlTBzQg/hRgphWQgmhQAAgoQAAhHCOgsQCGgoDNAAQDOAACHAoQCNAsAABHQAAAogmBQQgpBWg+BRQimDWivAAQiuAAiljWg");
	this.shape_4.setTransform(48.2,32.9);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.carta2 = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E3E77").s().p("ADXBKIgKggIg0AAIgKAgIgfAAIAziTIAfAAIAzCTgACgATIAmAAIgTg5IAAAAgAgKBKIAAiTIA5AAQAaAAAPANQAPANAAAVQAAAWgPALQgPANgaAAIgdAAIAAA2gAASgBIAdAAQANAAAGgHQAHgGAAgLQAAgLgHgHQgGgHgNAAIgdAAgAiDBKIAAiTIBmAAIAAAXIhIAAIAAAlIA+AAIAAAVIg+AAIAAArIBIAAIAAAXgAj1BKIAAiTIAeAAIAAB8IBCAAIAAAXg");
	this.shape.setTransform(30.4,23.3);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AgqA0QgJAAgGgDQgHgEAAgGIAAhJQAAgHAHgFQAHgFAIAAIBZAAQAIAAAEAFQAFAFABAHIAABJQAAANgSAAg");
	this.shape_1.setTransform(54.1,35.1,0.051,0.051);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4CA598").s().p("AgvA0QgIAAgGgDQgHgEAAgHIAAhIQAAgHAHgFQAGgFAIAAIBjAAQAHAAAFAFQAFAFAAAHIAABIQAAAOgRAAg");
	this.shape_2.setTransform(52.3,37.3,0.051,0.051);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CA598").s().p("AhWA0QgOAAAAgNIALgcIBhg+IBJAAQAHAAAGAFQAHAFAAAHIAABJQAAAHgHADQgGADgHAAg");
	this.shape_3.setTransform(43.1,37.3,0.051,0.051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4CA598").s().p("AhQA0QgHAAgGgDQgHgDAAgHIAAhJQAAgHAHgFQAGgFAHAAIBJAAIBhA+IALAcQAAANgPAAg");
	this.shape_4.setTransform(45.4,37.3,0.051,0.051);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA598").s().p("AhDA0QgIAAgHgEQgGgDgBgHIAAhIQABgHAGgGQAHgEAIAAICMAAQAHAAAFAEQAEAGAAAHIAABIQAAAOgQAAg");
	this.shape_5.setTransform(46.6,37.3,0.051,0.051);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4CA598").s().p("AhHA0QgIAAgFgDQgHgEAAgGIAAhJQAAgHAHgFQAFgFAIAAICSAAQAHAAAFAFQAFAFAAAHIAABJQAAANgRAAg");
	this.shape_6.setTransform(51.2,37.2,0.051,0.051);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CA598").s().p("AAqD5IkenxIDRAAIEYHxg");
	this.shape_7.setTransform(53.2,36.2,0.051,0.051);

	this.instance = new lib.Path_7();
	this.instance.setTransform(54.1,36.9,0.051,0.051,0,0,0,8.8,14.8);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(52.4,35.7,0.051,0.051,0,0,0,8.8,12.8);
	this.instance_1.alpha = 0.18;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CA598").s().p("AhAD5IAAnxICBAAIAAHxg");
	this.shape_8.setTransform(54.1,36.2,0.051,0.051);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA598").s().p("AhFD5IAAnxICLAAIAAHxg");
	this.shape_9.setTransform(52.3,36.2,0.051,0.051);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CA598").s().p("AhbCKIAAkTIC3AAIAAETg");
	this.shape_10.setTransform(51.2,36.7,0.051,0.051);

	this.instance_2 = new lib.Path_12();
	this.instance_2.setTransform(50.7,36.9,0.051,0.051,0,0,0,4,13.8);
	this.instance_2.alpha = 0.18;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CA598").s().p("AhZD5IAAnxICyAAIAAHxg");
	this.shape_11.setTransform(46.6,36.3,0.051,0.051);

	this.instance_3 = new lib.Path_14();
	this.instance_3.setTransform(47.1,37.1,0.051,0.051,0,0,0,4,9.8);
	this.instance_3.alpha = 0.18;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CA598").s().p("AAQEhIjlpBIDLAAIDgI1QgCACgBADIgDAHg");
	this.shape_12.setTransform(44.8,36.1,0.051,0.051);

	this.instance_4 = new lib.Path_16();
	this.instance_4.setTransform(43.9,35.5,0.051,0.051,0,0,0,12.8,17.7);
	this.instance_4.alpha = 0.18;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CA598").s().p("Ai+C/QhPhPAAhwQAAhuBPhQQBPhPBvAAQBvAABQBPQBPBQAABuQAABwhPBPQhQBPhvAAQhuAAhQhPgAhDg6QgbAbAAAjQAAAmAbAaQAaAbAmAAQAjAAAbgbQAagaAAgmQAAgjgagbQgbgagjAAQgmAAgaAag");
	this.shape_13.setTransform(50.3,36.1,0.051,0.051);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CA598").s().p("AkID5IAAnxIE0AAQBcAABABGQBBBIAABmQAABphABIQhFBMhYAAgAhUA7IBhAAQAeAAASgSQAVgVAAgbQAAgdgVgVQgUgVgcAAIhhAAg");
	this.shape_14.setTransform(47.5,36.3,0.051,0.051);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CA598").s().p("AjPEhQACgJgIgEIDgo0IDLAAIjlJBg");
	this.shape_15.setTransform(43.7,36.1,0.051,0.051);

	this.instance_5 = new lib.Path_18();
	this.instance_5.setTransform(43.8,36.9,0.051,0.051,0,0,0,5.9,6.9);
	this.instance_5.alpha = 0.18;

	this.instance_6 = new lib.Path_19();
	this.instance_6.setTransform(44.7,36.9,0.051,0.051,0,0,0,5.9,6.9);
	this.instance_6.alpha = 0.18;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4CA598").s().p("AioBGIAAiLIFRAAIAACLg");
	this.shape_16.setTransform(44.3,36.8,0.051,0.051);

	this.instance_7 = new lib.Path_21();
	this.instance_7.setTransform(50.9,34.7,0.051,0.051,0,0,0,7.9,4.9);
	this.instance_7.alpha = 0.18;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4CA598").s().p("Ah9AKIDQhpIArBWIjPBog");
	this.shape_17.setTransform(51,34.3,0.051,0.051);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(214,214,214,0)").ss(0.1,1,1).p("AjvELIgbAAIAAoVIIVAAIAAIVIgSAAAikELIggAA");
	this.shape_18.setTransform(30,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2E3E77").s().p("AiQGFIAAgMIGcAAIAAAMgAiQE3IAAgDIAAgJIGcAAIAAAJIAAADgAiQDpIAAgMIGcAAIAAAMgAiQCaIAAgMIGcAAIAAAMgAiQBMIAAgMIGcAAIAAAMgAiQkWIAAgtIAbAAIAAAMIgNAAIAAAFIAMAAIAAAMIgMAAIAAADIANAAIAAANgAi1kWIAAgkIgCABIAAAjIgPAAIgLgWIAAAWIgOAAIAAgtIAOAAIAMAXIAAgTIgBgEIgaAAIAAhBIBAAAIAABBIgBAAIAAAAQAGABAEAEQAEAEAAAHQAAAHgDAEQgDAEgGAAIgIAAIAAAOgAinkvIADAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIABgDIgBgDIgBgBIgEAAgAjIlbIgBABIAHAhIAggHIgNgzIgFABIAFAYQAAABAAAAQAAAAAAABQAAAAgBABQAAABgBAAIgCABQgCABgDgBIgCgCIgCACIgDADIgDgBIgDgCIgBgEIgBgDIgBABgAjGlGIgGgTIgDAAIgCgBIgDACIgCAAQgCABgCgDIgDgIIgBgEIAAAgIAYAAgAiql+IABACQACAEgDAGIgBAEIAJAlIAAg4IgJAAIABADgAjDlaIADADIACAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgDgRIAEgBIACAJIADAKIABABIACAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIgHgbIAEgBIABACIAIgBIAAgEIAAgDIgDgEIgCgBIgsAAIAAADIAAACIAAACIABAHIACAJIADAMIABABIABABIACgCIAAgBIgCgHIAFgBIACAIIAAABQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIgCgHIAFgCgAkFkcQgEgEgCgGIAAgGIAAgGQACgGAEgEQAFgHAKAAQAIAAAGAHQAFAGABAKQgBAJgFAHQgGAGgIAAQgKAAgFgGgAj7kyQgDACABAEQgBADADADQABACAEAAQACAAACgCQACgDAAgEQAAgDgCgCQgCgDgCAAQgEAAgBADg");
	this.shape_19.setTransform(28,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCAC1C").s().p("AgUCxIAAgqIApAAIAAAqgAgUBjIAAgSIAAgZIApAAIAAAZIAAASgAgUAUIAAgoIApAAIAAAogAgUg4IAAgqIApAAIAAAqgAgUiHIAAgpIApAAIAAApg");
	this.shape_20.setTransform(8.1,61.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("AhSBcIAAi1IAAgBICmCtIAAAJgAhThbIAAAAIAAABg");
	this.shape_21.setTransform(53.7,4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6F6F6").s().p("AkxG4QgJAAgHgGQgHgHAAgJIAAtDQAAgJAHgHQAHgGAJgBIHQAAIABABIAAC4IAAAAICpAAIAAKzQgGAEgJAAgAjnGPIArAAIAAgrIgrAAgAicF/IGcAAIAAgLImcAAgAjnEuIAAASIArAAIAAgSIAgAAIAAADIGcAAIAAgDIATAAIAAoUIoVAAIAAIUIAbAAIgbAAIAAoUIIVAAIAAIUIgTAAIAAgJImcAAIAAAJIggAAIAAgYIgrAAgAjnDyIArAAIAAgqIgrAAgAicDjIGcAAIAAgMImcAAgAjnCkIArAAIAAgrIgrAAgAicCVIGcAAIAAgMImcAAgAjnBVIArAAIAAgqIgrAAgAicBGIGcAAIAAgMImcAAgAickcIAbAAIAAgNIgNAAIAAgDIAMAAIAAgMIgMAAIAAgFIANAAIAAgLIgbAAgAjBkcIAOAAIAAgOIAIAAQAGAAADgDQADgFAAgGQAAgIgEgEQgEgEgGAAIAAgBIABAAIAAhBIhAAAIAABBIAaAAIABAEIAAATIgMgWIgOAAIAAAsIAOAAIAAgWIALAWIAPAAIAAgiIACgBgAkRlCQgEAEgCAGIAAAGIAAAGQACAGAEAEQAFAGAKAAQAIAAAGgGQAFgHABgJQgBgKgFgGQgGgGgIAAQgKAAgFAGgAEAEugAi8EugAkHksQgDgDABgDQgBgEADgCQABgDAEAAQACAAACADQACACAAADQAAAFgCACQgCADgCgBQgEABgBgDgAizk1IAAgIIAEAAIABABIABAEIgBACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAgAjVlgIABgBIABgBIABADIABAFIADABIADABIADgCIACgCIACACQADABACgBIACgBQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgFgYIAFgBIANAzIggAIgAjqlMIAAggIABAEIADAIQACAEACgCIACAAIADgCIACABIADAAIAGATgAi3l0IABgEQADgFgCgFIgBgCIgBgDIAJAAIAAA4gAjMlcIgDgEIgDgQIgFACIACAHQgBABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAgCIgCgHIgFABIACAGIAAACIgCABIgBgBIgBgBIgDgMIgCgJIgBgGIAAgDIAAgCIAAgDIAsAAIACABIADAEIAAADIAAAEIgIABIgBgCIgEABIAHAbQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgCAAIgBgBIgDgKIgCgJIgEABIADARQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCAAgACgm3IAAgBIAAABIAAABgACgm3g");
	this.shape_22.setTransform(29.2,39.1);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.instance_7,this.shape_16,this.instance_6,this.instance_5,this.shape_15,this.shape_14,this.shape_13,this.instance_4,this.shape_12,this.instance_3,this.shape_11,this.instance_2,this.shape_10,this.shape_9,this.shape_8,this.instance_1,this.instance,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.9,65.9,88.2);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);


(lib.BARRACARGAANIMADA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GRAFIC-CIRCULAR
	this.instance = new lib.GRAFICCIRCULAR();
	this.instance.setTransform(490.4,214,0.065,0.065,0,0,0,23.1,23.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.9,scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(1)).wait(32).to({alpha:0},14).wait(5));

	// GRAFICIRCULAR-PART3
	this.instance_1 = new lib.GRAFICIRCULARPART3();
	this.instance_1.setTransform(491.1,213.3,0.065,0.065,0,0,0,12.3,13.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:12.5,regY:12.5,scaleX:1,scaleY:1,x:501,y:203.4,alpha:1},11,cjs.Ease.get(1)).wait(5).to({scaleX:1.27,scaleY:1.27,x:510.5,y:194.6},10,cjs.Ease.get(1)).wait(15).to({alpha:0},14).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.9,212.5,3,3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

/*By Edgardo Paredes // edgardoparedes.com*/ 

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.historico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// EDIFICIO
	this.instance = new lib.EDIFICIO();
	this.instance.setTransform(462.1,159.4,0.23,0.23,0,0,0,173.8,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).wait(58).to({_off:false},0).to({y:89.3,alpha:1},15,cjs.Ease.get(0.92)).wait(329).to({y:139.7,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(26));

	// LETRERO ONPE
	this.instance_1 = new lib.LETREROONPE();
	this.instance_1.setTransform(479.6,145,0.23,0.23,0,0,0,79.5,142.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).wait(58).to({_off:false},0).to({y:43.7,alpha:1},15,cjs.Ease.get(0.92)).wait(329).to({y:94.1,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(26));

	// EDIFICIO
	this.instance_2 = new lib.EDIFICIO();
	this.instance_2.setTransform(297.9,146.3,0.23,0.23,0,0,0,173.8,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).wait(53).to({_off:false},0).to({x:303.7,y:89.3,alpha:1},15,cjs.Ease.get(1)).wait(330).to({y:139.7,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// LETRERO ONPE
	this.instance_3 = new lib.LETREROONPE();
	this.instance_3.setTransform(315.4,131.6,0.23,0.23,0,0,0,79.5,142.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).wait(53).to({_off:false},0).to({x:321.2,y:43.7,alpha:1},15,cjs.Ease.get(1)).wait(330).to({y:94.1,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// EDIFICIO
	this.instance_4 = new lib.EDIFICIO();
	this.instance_4.setTransform(120,136.7,0.23,0.23,0,0,0,173.8,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).wait(47).to({_off:false},0).to({y:89.3,alpha:1},15,cjs.Ease.get(0.99)).wait(330).to({y:144.5,alpha:0},16,cjs.Ease.get(1)).to({_off:true},1).wait(34));

	// LETRERO ONPE
	this.instance_5 = new lib.LETREROONPE();
	this.instance_5.setTransform(137.5,122,0.23,0.23,0,0,0,79.5,142.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).wait(47).to({_off:false},0).to({y:43.7,alpha:1},15,cjs.Ease.get(0.99)).wait(330).to({y:98.9,alpha:0},16,cjs.Ease.get(1)).to({_off:true},1).wait(34));

	// CEJA
	this.instance_6 = new lib.PARPADOS();
	this.instance_6.setTransform(115.2,224.9,1,0.138,0,0,0,40.3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).to({scaleY:1},3,cjs.Ease.get(1)).wait(5).to({scaleY:0.15},3,cjs.Ease.get(1)).to({_off:true},1).wait(200).to({scaleY:0.14,_off:false},0).to({scaleY:1},3,cjs.Ease.get(1)).wait(5).to({scaleY:0.15},3,cjs.Ease.get(1)).to({_off:true},1).wait(143));

	// Capa 9
	this.instance_7 = new lib.cabezaAdan();
	this.instance_7.setTransform(268,263.3,1,1,0,0,0,87.7,82.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:268.1,alpha:1},8,cjs.Ease.get(1)).to({x:116},17,cjs.Ease.get(1)).to({regX:87.8,rotation:10},51,cjs.Ease.get(1)).to({regY:83,scaleX:1,scaleY:1,rotation:9.5,x:116.1,y:263.4},77,cjs.Ease.get(0.98)).to({regX:87.7,regY:82.9,scaleX:1,scaleY:1,rotation:0,x:116,y:263.3},45).to({rotation:11,y:262.4},74).wait(32).to({rotation:0,y:263.3},51,cjs.Ease.get(1)).to({rotation:9.5},35,cjs.Ease.get(1)).to({rotation:0},23,cjs.Ease.get(1)).to({x:261.6},19,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Capa 11
	this.instance_8 = new lib.cuerpoAdan();
	this.instance_8.setTransform(271.6,312.9,1,1,0,0,0,48.2,32.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:271.7,alpha:1},8,cjs.Ease.get(1)).to({x:119.6},17,cjs.Ease.get(1)).wait(388).to({x:265.2},19,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Capa 16
	this.instance_9 = new lib.brazoOtroAdan();
	this.instance_9.setTransform(222.8,299.3,1,1,0,0,0,48.6,7.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({x:222.9,alpha:1},8,cjs.Ease.get(1)).to({x:70.8},17,cjs.Ease.get(1)).wait(388).to({x:216.4},19,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// <Group>_1
	this.instance_10 = new lib.brasoderecheAdan();
	this.instance_10.setTransform(324.4,298.3,1,1,30,0,0,13,46.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({regX:13.1,regY:46.3,scaleX:1,scaleY:1,rotation:29.9,x:324.7,y:298.2,alpha:1},8,cjs.Ease.get(1)).to({regX:13,regY:46.4,scaleX:1,scaleY:1,rotation:30,x:172.4,y:298.3},17,cjs.Ease.get(1)).to({regX:13.1,scaleX:1,scaleY:1,rotation:24.3},6).to({scaleX:1,scaleY:1,rotation:-14.8,x:172.5},7).to({rotation:15,x:172.4,y:298.4},24,cjs.Ease.get(1)).wait(29).to({rotation:-7.3,x:172.5},11).wait(89).to({rotation:-7.3},0).to({regX:13,rotation:22.5,x:172.3,y:298.3},16,cjs.Ease.get(0.99)).to({regX:13.1,rotation:-7.3,x:172.5,y:298.4},18,cjs.Ease.get(1)).wait(188).to({rotation:-14.8,y:298.3},0).to({rotation:8,x:318},19,cjs.Ease.get(1)).to({rotation:8,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// <Path>_4
	this.instance_11 = new lib.cuello_Adan();
	this.instance_11.setTransform(271.5,274.2,1,1,0,0,0,6,6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({x:271.6,alpha:1},8,cjs.Ease.get(1)).to({x:119.5},17,cjs.Ease.get(1)).wait(388).to({x:265.1},19,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// <Path>_6
	this.instance_12 = new lib.piesAdan();
	this.instance_12.setTransform(272.8,352.4,1,1,0,0,0,68.8,27.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:272.9,alpha:1},8,cjs.Ease.get(1)).to({x:120.7},17,cjs.Ease.get(1)).wait(388).to({x:266.3},19,cjs.Ease.get(1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// usuario
	this.instance_13 = new lib.usuario();
	this.instance_13.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).wait(196).to({_off:false},0).to({x:435.5,y:257.5},28,cjs.Ease.get(1)).wait(49).to({regY:19.2,scaleX:0.23,scaleY:0.23,x:474.4,y:110.8},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(138));

	// usuario
	this.instance_14 = new lib.usuario();
	this.instance_14.setTransform(129.5,309.6,1,1,0,0,0,15,19.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).wait(196).to({_off:false},0).to({x:481.4,y:309.9},29,cjs.Ease.get(1)).wait(62).to({regX:14.7,regY:19.2,scaleX:0.2,scaleY:0.2,x:131.9,y:110.5},21,cjs.Ease.get(0.99)).to({_off:true},1).wait(126));

	// usuario
	this.instance_15 = new lib.usuario();
	this.instance_15.setTransform(129.5,314.9,1,1,0,0,0,15,19.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(22).wait(198).to({_off:false},0).to({x:343.9,y:309.9},28,cjs.Ease.get(1)).wait(82).to({regY:19.2,scaleX:0.2,scaleY:0.2,x:474.5,y:110.3},19,cjs.Ease.get(0.99)).to({_off:true},1).wait(107));

	// usuario
	this.instance_16 = new lib.usuario();
	this.instance_16.setTransform(123.3,310.9,1,1,0,0,0,15,19.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(22).wait(198).to({_off:false},0).to({x:389.7,y:309.9},28,cjs.Ease.get(1)).wait(72).to({regY:19.2,scaleX:0.2,scaleY:0.2,x:132.5,y:110.6},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(113));

	// usuario
	this.instance_17 = new lib.usuario();
	this.instance_17.setTransform(114.6,307.7,1,1,0,0,0,15,19.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).wait(197).to({_off:false},0).to({x:298.1,y:257.5},29,cjs.Ease.get(1)).wait(57).to({regY:18.9,scaleX:0.21,scaleY:0.21,x:131.8,y:110.5},20,cjs.Ease.get(0.99)).to({_off:true},1).wait(131));

	// usuario
	this.instance_18 = new lib.usuario();
	this.instance_18.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(22).wait(193).to({_off:false},0).to({x:481.4,y:257.5},29,cjs.Ease.get(1)).wait(78).to({regX:14.9,scaleX:0.21,scaleY:0.21,x:315,y:110.7},22,cjs.Ease.get(0.99)).to({_off:true},1).wait(112));

	// usuario
	this.instance_19 = new lib.usuario();
	this.instance_19.setTransform(123.3,303.4,1,1,0,0,0,15,19.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(22).wait(193).to({_off:false},0).to({x:298.1,y:309.9},29,cjs.Ease.get(1)).wait(122).to({regX:14.9,regY:19.2,scaleX:0.21,scaleY:0.21,x:315.5,y:110.9},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(67));

	// usuario
	this.instance_20 = new lib.usuario();
	this.instance_20.setTransform(123.3,313.5,1,1,0,0,0,15,19.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(22).wait(201).to({_off:false},0).to({x:389.7,y:257.5},27,cjs.Ease.get(1)).wait(102).to({regY:18.9,scaleX:0.22,scaleY:0.22,x:474.2,y:110.9},25,cjs.Ease.get(0.99)).to({_off:true},1).wait(79));

	// usuario
	this.instance_21 = new lib.usuario();
	this.instance_21.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(22).wait(193).to({_off:false},0).to({x:435.5,y:309.9},29,cjs.Ease.get(0.99)).wait(125).to({regY:19.2,scaleX:0.21,scaleY:0.21,x:315.7,y:110.7},22,cjs.Ease.get(0.99)).to({_off:true},1).wait(65));

	// usuario
	this.instance_22 = new lib.usuario();
	this.instance_22.setTransform(138.2,310.9,1,1,0,0,0,15,19.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(22).wait(193).to({_off:false},0).to({x:343.9,y:257.5},29,cjs.Ease.get(1)).wait(98).to({regX:14.8,scaleX:0.21,scaleY:0.21,x:315.7,y:110.6},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(91));

	// usuario
	this.instance_23 = new lib.usuario();
	this.instance_23.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(22).wait(22).to({_off:false},0).to({x:435.5,y:257.5},23,cjs.Ease.get(1)).wait(49).to({regY:19.2,scaleX:0.23,scaleY:0.23,x:474.4,y:110.8},24,cjs.Ease.get(0.99)).to({_off:true},1).wait(316));

	// usuario
	this.instance_24 = new lib.usuario();
	this.instance_24.setTransform(129.5,309.6,1,1,0,0,0,15,19.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(22).wait(22).to({_off:false},0).to({x:481.4,y:309.9},24,cjs.Ease.get(1)).wait(62).to({regX:14.7,regY:19.2,scaleX:0.2,scaleY:0.2,x:131.9,y:110.5},21,cjs.Ease.get(0.99)).to({_off:true},1).wait(305));

	// usuario
	this.instance_25 = new lib.usuario();
	this.instance_25.setTransform(129.5,314.9,1,1,0,0,0,15,19.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(22).wait(24).to({_off:false},0).to({x:343.9,y:309.9},23,cjs.Ease.get(1)).wait(82).to({regY:19.2,scaleX:0.2,scaleY:0.2,x:474.5,y:110.3},19,cjs.Ease.get(0.99)).to({_off:true},1).wait(286));

	// usuario
	this.instance_26 = new lib.usuario();
	this.instance_26.setTransform(123.3,310.9,1,1,0,0,0,15,19.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(22).wait(24).to({_off:false},0).to({x:389.7,y:309.9},23,cjs.Ease.get(1)).wait(72).to({regY:19.2,scaleX:0.2,scaleY:0.2,x:132.5,y:110.6},18,cjs.Ease.get(0.99)).to({_off:true},1).wait(297));

	// usuario
	this.instance_27 = new lib.usuario();
	this.instance_27.setTransform(114.6,307.7,1,1,0,0,0,15,19.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(22).wait(23).to({_off:false},0).to({x:298.1,y:257.5},24,cjs.Ease.get(1)).wait(57).to({regY:18.9,scaleX:0.21,scaleY:0.21,x:131.8,y:110.5},20,cjs.Ease.get(0.99)).to({_off:true},1).wait(310));

	// usuario
	this.instance_28 = new lib.usuario();
	this.instance_28.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(22).wait(19).to({_off:false},0).to({x:481.4,y:257.5},24,cjs.Ease.get(1)).wait(78).to({regX:14.9,scaleX:0.21,scaleY:0.21,x:315,y:110.7},27,cjs.Ease.get(0.99)).to({_off:true},1).wait(286));

	// usuario
	this.instance_29 = new lib.usuario();
	this.instance_29.setTransform(123.3,303.4,1,1,0,0,0,15,19.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(22).wait(19).to({_off:false},0).to({x:298.1,y:309.9},24,cjs.Ease.get(1)).wait(138).to({regX:14.9,regY:19.2,scaleX:0.21,scaleY:0.21,x:315.5,y:110.9},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(230));

	// usuario
	this.instance_30 = new lib.usuario();
	this.instance_30.setTransform(123.3,313.5,1,1,0,0,0,15,19.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(22).wait(27).to({_off:false},0).to({x:389.7,y:257.5},22,cjs.Ease.get(1)).wait(105).to({regY:18.9,scaleX:0.22,scaleY:0.22,x:474.2,y:110.9},20,cjs.Ease.get(0.99)).to({_off:true},1).wait(260));

	// usuario
	this.instance_31 = new lib.usuario();
	this.instance_31.setTransform(117.7,306,1,1,0,0,0,15,19.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(22).wait(19).to({_off:false},0).to({x:435.5,y:309.9},24,cjs.Ease.get(0.99)).wait(125).to({regY:19.2,scaleX:0.21,scaleY:0.21,x:315.7,y:110.7},22,cjs.Ease.get(0.99)).to({_off:true},1).wait(244));

	// usuario
	this.instance_32 = new lib.usuario();
	this.instance_32.setTransform(138.2,310.9,1,1,0,0,0,15,19.1);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(22).wait(19).to({_off:false},0).to({x:343.9,y:257.5},24,cjs.Ease.get(1)).wait(98).to({regX:14.8,scaleX:0.21,scaleY:0.21,x:315.7,y:110.6},23,cjs.Ease.get(0.99)).to({_off:true},1).wait(270));

	// Capa 1
	this.instance_33 = new lib.recuadoHistorico();
	this.instance_33.setTransform(389,283.5,0.088,0.088,0,0,0,141.6,68);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(36).to({_off:false},0).to({regX:141.3,scaleX:1,scaleY:1,x:388.9,alpha:1},8,cjs.Ease.get(1)).wait(344).to({regX:141.5,scaleX:0.12,scaleY:0.12,x:389,alpha:0},11,cjs.Ease.get(1)).to({_off:true},3).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.usuario = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUC+QAAgjAJgUQANgbAhgTQAGgDAJgIIAQgLIAHgFQAaAPAdABIAOgBQAWgDAUgMIAGAFIARALIAPALQAiATAMAbQAJAUAAAjgAg7AxQgbgSgNgeQgEAFgFAAQgIAAgFgKQgFgMAAgRQAAgKACgJQACgJAEgFQAAg4AZgfQAdgkA/gBIABAAQA9ABAcAiQAXAcADA2QAGADAFAKQAFAMAAAPQAAARgGAMQgFAKgIAAQgFAAgEgGQgKAXgTAQQgSARgYAGIgBABQgPAFgPAAQgfAAgdgTg");
	this.shape.setTransform(15,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.9,38.2);


(lib.recuadoHistorico = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("A0MKnQgxAAgkgjQgjgkAAgxIAAxdQAAgyAjgjQAkgjAxAAMAoZAAAQAxAAAkAjQAjAjAAAyIAARdQAAAxgjAkQgkAjgxAAg");
	this.shape.setTransform(141.4,68);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,282.7,135.9);


(lib.LETREROONPE = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG+EwQgfggAAgxIAAgwQAAgxAfgfQAeghAxAAQAxAAAgAhQAfAfAAAxIAAAwQAAAxgfAgQggAggxAAQgxAAgegggAHjB9QgPATAAAfIAAAwQAAAgAPAUQAPATAbABQAcgBAPgTQAPgUAAggIAAgwQAAgfgPgTQgPgWgcABQgbgBgPAWgABhExQgegfAAgxIAAg0QAAgwAdggQAegfAuAAQAyAAAcAaQAbAagBArIAAABIg0AAQAAgagNgPQgMgOgbAAQgYAAgOAUQgOATAAAeIAAA1QAAAfAPAUQAPATAZAAQAZgBAMgNQAMgNAAgaIA0AAIAAABQAAAqgaAaQgbAZgwAAQgwAAgegfgApgEwQgfggAAgxIAAgwQAAgxAfgfQAeghAyAAQAxAAAfAhQAfAfAAAxIAAAwQAAAxgfAgQgfAggxAAQgyAAgegggAo7B9QgPATAAAfIAAAwQAAAgAPAUQAQATAbABQAbgBAPgTQAPgUAAggIAAgwQAAgfgPgTQgPgWgbABQgcgBgPAWgANIFMIhri1IgBAAIAAC1Ig2AAIAAkKIA2AAIBsC2IAAAAIAAi2IA1AAIAAEKgAE9FMIAAkKIA1AAIAAEKgAgBFMIgTg5IhdAAIgSA5Ig2AAIBbkKIA3AAIBZEKgAhkDpIBDAAIghhoIAAAAgAlAFMIAAjhIhLAAIAAgpIDLAAIAAApIhKAAIAADhgAshFMIhbkKIA5AAIA8DTIABAAIADgPIA6jEIA5AAIhbEKgAHzAsIAkgvIA4AAIABABIgzAugAmEhcQgdgfAAgwIAAg1QAAgxAdgfQAdgfAvAAQAxAAAcAaQAbAaAAAqIgBABIgzAAQAAgagNgNQgMgPgbAAQgYAAgOAUQgOATAAAeIAAA2QAAAeAPATQAOAUAagBQAZAAALgMQANgOAAgaIAzAAIAAABQABAqgaAZQgbAZgwAAQgwAAgfgegAqDheQgfgfAAgxIAAgwQAAgwAfghQAfggAxAAQAxAAAgAgQAeAhAAAwIAAAwQAAAxgeAfQggAhgxgBQgxABgfghgApdkRQgPATAAAgIAAAwQAAAgAPAUQAPATAbAAQAbAAAQgTQAPgUAAggIAAgwQAAgggPgTQgQgUgbAAQgcAAgOAUgALGhAIAAkLIC2AAIAAApIiAAAIAABDIBuAAIAAApIhuAAIAABLICAAAIAAArgAHShAIAAkLIBbAAQAxAAAfAgQAgAfAAAwIAAAsQAAAxggAfQgfAggxAAgAIHhrIAjAAQAdAAAQgSQARgUAAgfIAAgsQAAgfgRgTQgQgUgdAAIgjAAgABChAIAAkLIA2AAIAADgIB2AAIAAArgAgKhAIgTg6IhcAAIgTA6Ig1AAIBbkLIA3AAIBYELgAhtikIBEAAIghhoIgBAAgAtlhAIAAkLIA2AAIAADgIB2AAIAAArg");
	this.shape.setTransform(56.4,59);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE8C17").s().p("AAmKvIAAgDIAjAAIAAk9IqsAAINPwdIF4AAIAAQdImvAAIAAE9IgqAAIAAADg");
	this.shape_1.setTransform(104.8,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCAC1C").s().p("AnLKvIAAgDIgtAAIAAk9Il6AAIAAwdIblAAItRQdImGAAIAAE9IAkAAIAAADg");
	this.shape_2.setTransform(40.1,76.3);

	// Capa 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCAC1C").s().p("AHxI3IAAgDIAjAAIAAk9Iw0AAIAAE9IAkAAIAAADIiLAAIAAgDIguAAIAAk9Il5AAIAAstMAhdAAAIAAMtImvAAIAAE9IgqAAIAAADg");
	this.shape_3.setTransform(58.9,88.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.2,7.5,214.3,137.5);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape.setTransform(7.6,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.EDIFICIO = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6rfRMgABgm2IOaAAIAA3rMAm/AAAIkCFdIAAhNImXAAIAAGXICkAAInhKKIAAl7ImAAAIAAHEIFKAAIh1CfIjVAAIAAEhIlgHeImfAAIAAGXIByAAIunTygAxlTQIEmAAIAAjiIkmAAgA3mTQID5AAIAAjiIj5AAgAxlM5IEmAAIAAkPIkmAAgA3mM5ID5AAIAAkPIj5AAgAxlFIIEmAAIAAjjIkmAAgA3mFIID5AAIAAjjIj5AAgAmoALIHCAAIAAnCInCAAgAxlhOIEmAAIAAjiIkmAAgA3mhOID5AAIAAjiIj5AAgAmopWIHCAAIAAnEInCAAgAFX0pIGAAAIAAmXImAAAgAmo0pIHCAAIAAmXInCAAg");
	this.shape.setTransform(170.9,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AItfRIAAtbIo0AAIAANbI3bAAIOnzyIFSAAIAAmXIglAAIFgneIAAChIGAAAIAAnCIirAAIB1ifIA2AAIAAhJIHhqKIDzAAIAAlKIECldIA7AAMAAAA+hgAMPLfIGXAAIAAmXImXAAgABSLfIGAAAIAAmXImAAAgAMPALIGXAAIAAnCImXAAgAMPpWIGXAAIAAnEImXAAg");
	this.shape_1.setTransform(197,200.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AMUfQIAAtdIo6AAIAANdI+iAAMgABgm5IOVAAIAA3mMAn+AAAMAAAA+fgAx+TNIEiAAIAAjcIkiAAgA4ETNID6AAIAAjcIj6AAgAx+M+IEiAAIAAkZIkiAAgA4EM+ID6AAIAAkZIj6AAgAP6LjIGQAAIAAmaImQAAgAE+LjIF8AAIAAmaIl8AAgAnCLjIHCAAIAAmaInCAAgAx+FJIEiAAIAAjlIkiAAgA4EFJID6AAIAAjlIj6AAgAP6AJIGQAAIAAm/ImQAAgAE+AJIF8AAIAAm/Il8AAgAnCAJIHCAAIAAm/InCAAgAx+hPIEiAAIAAjcIkiAAgA4EhPID6AAIAAjcIj6AAgAP6pWIGQAAIAAnDImQAAgAE+pWIF8AAIAAnDIl8AAgAnCpWIHCAAIAAnDInCAAgAP60nIGQAAIAAmaImQAAgAE+0nIF8AAIAAmaIl8AAgAnC0nIHCAAIAAmaInCAAg");
	this.shape_2.setTransform(173.9,200.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347.8,400.3);


(lib.cerrarOjos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DAIAAl/IFpAAIAAETIgGAAIAAANIgCAAIAAADIgCAAIAAAEIAAAAIAAADIgCAAIAAACIgCAAIAAAFIgBAAIAAACIgDAAIAAAHIgCAAIAAABIgHAAIAAAMIgBAAIAAADIgFAAIAAAJIgCAAIgBADIgGAAIAAAKIgFAAIAAAGIgBAAIAAADIgIAAIAAAJIgCAAIAAAFIgHgBIAAAJg");
	this.shape.setTransform(18.1,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,38.6);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.PARPADOS = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cerrarOjos();
	this.instance.setTransform(65.6,0.7,0.828,0.81,0,0,180,18.1,0.8);

	this.instance_1 = new lib.cerrarOjos();
	this.instance_1.setTransform(14.5,2.3,0.797,0.797,0,0,0,18.1,0.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,32.4);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(44.7,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(53,24.6);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_2.setTransform(53.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape_3.setTransform(44.7,32.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.8,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlTBzQg/hRgphWQgmhQAAgoQAAhHCOgsQCGgoDNAAQDOAACHAoQCNAsAABHQAAAogmBQQgpBWg+BRQimDWivAAQiuAAiljWg");
	this.shape_4.setTransform(48.2,32.9);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

/*By Edgardo Paredes // edgardoparedes.com*/ 

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.retroceder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BARRA CARGANDO
	this.instance = new lib.BARRACARGAANIMADA();
	this.instance.setTransform(9.2,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},62).wait(223));

	// BARRA CARGANDO
	this.instance_1 = new lib.BARRACARGANDO();
	this.instance_1.setTransform(54.5,251.9,0.844,0.018,0,0,0,7.5,56.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({regY:57,scaleY:0.38},10).to({scaleY:0.31},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(87).to({regY:56.3,scaleY:0.02,alpha:1,_off:false},0).to({regY:57,scaleY:0.38},10).to({scaleY:0.31},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(17));

	// BARRA CARGANDO
	this.instance_2 = new lib.BARRACARGANDO();
	this.instance_2.setTransform(72.3,251.9,0.844,0.023,0,0,0,7.5,56.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({regY:57,scaleY:0.52},10).to({scaleY:0.46},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(87).to({regY:56.6,scaleY:0.02,alpha:1,_off:false},0).to({regY:57,scaleY:0.52},10).to({scaleY:0.46},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(17));

	// BARRA CARGANDO
	this.instance_3 = new lib.BARRACARGANDO();
	this.instance_3.setTransform(90.1,251.9,0.844,0.013,0,0,0,7.5,55.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({regY:57,scaleY:0.69},10).to({scaleY:0.62},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(87).to({regY:55.6,scaleY:0.01,alpha:1,_off:false},0).to({regY:57,scaleY:0.69},10).to({scaleY:0.62},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(17));

	// BARRA CARGANDO
	this.instance_4 = new lib.BARRACARGANDO();
	this.instance_4.setTransform(108,251.9,0.844,0.021,0,0,0,7.5,57.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({regY:57,scaleY:0.9},10).to({scaleY:0.84},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(87).to({regY:57.9,scaleY:0.02,alpha:1,_off:false},0).to({regY:57,scaleY:0.9},10).to({scaleY:0.84},9).wait(41).to({alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(17));

	// cerrarOjos
	this.instance_5 = new lib.cerrarOjos();
	this.instance_5.setTransform(317.2,133.3,0.828,0.101,0,0,180,18.1,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regY:0.8,scaleY:0.81,y:133.9},3,cjs.Ease.get(1)).wait(5).to({regY:0.5,scaleY:0.1,y:133.3},3,cjs.Ease.get(1)).to({_off:true},1).wait(88).to({_off:false},0).to({regY:0.8,scaleY:0.81,y:133.9},3,cjs.Ease.get(1)).wait(5).to({regY:0.5,scaleY:0.1,y:133.3},3,cjs.Ease.get(1)).to({_off:true},1).wait(147));

	// cerrarOjos
	this.instance_6 = new lib.cerrarOjos();
	this.instance_6.setTransform(266,133.5,0.797,0.1,0,0,0,18.1,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).to({regY:0.9,scaleY:0.8,y:135.5},3,cjs.Ease.get(1)).wait(5).to({regY:0.5,scaleY:0.1,y:133.5},3,cjs.Ease.get(1)).to({_off:true},1).wait(88).to({_off:false},0).to({regY:0.9,scaleY:0.8,y:135.5},3,cjs.Ease.get(1)).wait(5).to({regY:0.5,scaleY:0.1,y:133.5},3,cjs.Ease.get(1)).to({_off:true},1).wait(147));

	// Capa 9
	this.instance_7 = new lib.cabezaAdan();
	this.instance_7.setTransform(291.9,171.2,1,1,11.8,0,0,87.7,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(285));

	// Capa 11
	this.instance_8 = new lib.cuerpoAdan();
	this.instance_8.setTransform(286.9,219,1,1,0,0,0,48.2,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(285));

	// Capa 16
	this.instance_9 = new lib.brazoOtroAdan();
	this.instance_9.setTransform(238.1,205.3,1,1,0,0,0,48.6,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({rotation:30},12,cjs.Ease.get(1)).to({rotation:0},9,cjs.Ease.get(1)).to({rotation:15},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(75));

	// <Group>_1
	this.instance_10 = new lib.brasoderecheAdan();
	this.instance_10.setTransform(329.6,201.1,1,0.862,0,-172.9,7,13.1,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(170).to({regY:46.2,skewX:-217.9,skewY:-37.8},12,cjs.Ease.get(1)).to({regY:46.3,skewX:-172.8,skewY:7},9,cjs.Ease.get(1)).to({skewX:-202.9,skewY:-22.8},9,cjs.Ease.get(1)).to({skewX:-172.8,skewY:7},10,cjs.Ease.get(1)).wait(75));

	// <Path>_4
	this.instance_11 = new lib.cuello_Adan();
	this.instance_11.setTransform(287.9,181.3,1,1,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(285));

	// regresoanimado
	this.instance_12 = new lib.regresoanimado();
	this.instance_12.setTransform(286.4,194.1,1,1,0,0,0,108,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(285));

	// pies-Adan
	this.instance_13 = new lib.piesAdan();
	this.instance_13.setTransform(288.1,258.5,1,1,0,0,0,68.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.4,-7.6,322.7,310.3);


// symbols:
(lib.GRAFICIRCULARPART3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("Ah7B8IAAj3QBogGBJBMQBMBJgGBlIgfADg");
	this.shape.setTransform(12.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.9);


(lib.GRAFICCIRCULAR = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTCtQg0gtgSg5QgJgcgBgeQgCgsAMgnQAPgyAmgoQBEhIBjADIAADjIDfAAQAOBOg/BHQg/BHhdALQgNABgLAAQhPAAhBg5g");
	this.shape.setTransform(22.9,23.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.9,46.2);


(lib.FLECHAREGRESOPREMOVIENDOSE = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCAC1C").s().p("AloZTQipglichGICylaQDuBmEEgBQEAAADshjQDjhgCviwQCwivBhjkQBjjsAAkBQAAkBhjjrQhhjkiwivQiviwjjhgQjshjkAAAQlggBksC1QjiCIiXDQIEJB8IquFRIi6rmID7B0QBOh4BkhpQCYiiC9h1QDAh2DZg+QDehADrAAQFPAAE0CCQEpB+DmDlQDlDlB9EqQCDE0AAFPQAAFRiDEzQh9EpjlDmQjmDlkpB+Qk0CClPAAQiyAAitglg");
	this.shape.setTransform(164.6,165.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329.2,331.3);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape.setTransform(7.6,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.cerrarOjos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DAIAAl/IFpAAIAAETIgGAAIAAANIgCAAIAAADIgCAAIAAAEIAAAAIAAADIgCAAIAAACIgCAAIAAAFIgBAAIAAACIgDAAIAAAHIgCAAIAAABIgHAAIAAAMIgBAAIAAADIgFAAIAAAJIgCAAIgBADIgGAAIAAAKIgFAAIAAAGIgBAAIAAADIgIAAIAAAJIgCAAIAAAFIgHgBIAAAJg");
	this.shape.setTransform(18.1,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,38.6);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.BARRACARGANDO = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKEcIAAo4ICVAAIAAI4g");
	this.shape.setTransform(7.5,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,57);


(lib.regresoanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.FLECHAREGRESOPREMOVIENDOSE();
	this.instance.setTransform(108,108.7,0.656,0.656,0,0,0,164.6,165.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:164.5,regY:165.6,rotation:-132.1},11).to({rotation:-265.5},11).to({regX:164.6,regY:165.7,rotation:-359.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.9,217.3);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(44.7,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(53,24.6);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_2.setTransform(53.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape_3.setTransform(44.7,32.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.8,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlTBzQg/hRgphWQgmhQAAgoQAAhHCOgsQCGgoDNAAQDOAACHAoQCNAsAABHQAAAogmBQQgpBWg+BRQimDWivAAQiuAAiljWg");
	this.shape_4.setTransform(48.2,32.9);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);


(lib.BARRACARGAANIMADA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GRAFIC-CIRCULAR
	this.instance = new lib.GRAFICCIRCULAR();
	this.instance.setTransform(490.4,214,0.065,0.065,0,0,0,23.1,23.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.9,scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(1)).wait(32).to({alpha:0},14).wait(5));

	// GRAFICIRCULAR-PART3
	this.instance_1 = new lib.GRAFICIRCULARPART3();
	this.instance_1.setTransform(491.1,213.3,0.065,0.065,0,0,0,12.3,13.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:12.5,regY:12.5,scaleX:1,scaleY:1,x:501,y:203.4,alpha:1},11,cjs.Ease.get(1)).wait(5).to({scaleX:1.27,scaleY:1.27,x:510.5,y:194.6},10,cjs.Ease.get(1)).wait(15).to({alpha:0},14).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.9,212.5,3,3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

/********************************************************/
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cierreProceso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 7
	this.instance = new lib.adanlogo();
	this.instance.setTransform(278.8,191.6,0.153,0.153,0,0,0,129.1,39.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).wait(270).to({y:253.6,alpha:0},6).wait(9));

	// cerrarOjos
	this.instance_1 = new lib.cerrarOjos();
	this.instance_1.setTransform(319.9,194.1,1.038,0.101,0,0,180,18.1,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).to({regY:0.8,scaleY:1.02,y:194.9},6,cjs.Ease.get(1)).wait(29).to({regX:18.4,scaleX:0.06,scaleY:0.06,x:286.5,y:193,alpha:0},6,cjs.Ease.get(1)).wait(278).to({y:255},6).wait(9));

	// cerrarOjos
	this.instance_2 = new lib.cerrarOjos();
	this.instance_2.setTransform(255.7,196.2,1,0.088,0,0,0,18.1,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170).to({_off:false},0).to({regY:0.8,scaleY:1,y:196.9},6,cjs.Ease.get(1)).wait(29).to({regX:18.3,scaleX:0.06,scaleY:0.06,x:282.6,y:193.1,alpha:0},6,cjs.Ease.get(1)).wait(278).to({y:255.1},6).wait(9));

	// Capa 9
	this.instance_3 = new lib.cabezaAdan();
	this.instance_3.setTransform(288.6,142.6,0.25,0.25,0,0,0,87.8,82.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:87.7,regY:82.9,scaleX:1.29,scaleY:1.29,x:288.4,y:165.1,alpha:1},11,cjs.Ease.get(1)).wait(59).to({rotation:10.5,x:288.5},23,cjs.Ease.get(-0.94)).wait(58).to({y:241.9},6).wait(48).to({regX:87.5,regY:83,scaleX:0.08,scaleY:0.08,x:284.6,y:195.8,alpha:0},6,cjs.Ease.get(1)).wait(278).to({y:257.8},6).wait(9));

	// Capa 11
	this.instance_4 = new lib.cuerpoAdan();
	this.instance_4.setTransform(289.5,155,0.25,0.25,0,0,0,48.3,32.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:48.2,scaleX:1.29,scaleY:1.29,x:293,y:229,alpha:1},11,cjs.Ease.get(1)).wait(194).to({regX:48.4,scaleX:0.08,scaleY:0.08,x:284.9,y:195,alpha:0},6,cjs.Ease.get(1)).wait(278).to({y:257},6).wait(9));

	// Capa 16
	this.instance_5 = new lib.brazoOtroAdan();
	this.instance_5.setTransform(277.3,151.6,0.25,0.25,0,0,0,48.7,7.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:48.6,regY:7.5,scaleX:1.29,scaleY:1.29,x:230.3,y:211.4,alpha:1},11,cjs.Ease.get(1)).wait(132).to({regX:48.7,rotation:30,x:316.7,y:216},8,cjs.Ease.get(-0.99)).to({_off:true},9).wait(344));

	// <Group>_1
	this.instance_6 = new lib.brasoderecheAdan();
	this.instance_6.setTransform(302.7,151.3,0.249,0.249,8.7,0,0,13.1,46.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:46.3,scaleX:1.29,scaleY:1.29,x:361.2,y:210.1,alpha:1},11,cjs.Ease.get(1)).wait(132).to({rotation:23.7,x:273.1,y:237.7},8,cjs.Ease.get(-0.99)).to({_off:true},9).wait(344));

	// <Path>_4
	this.instance_7 = new lib.cuello_Adan();
	this.instance_7.setTransform(289.4,145.3,0.25,0.25,0,0,0,6,5.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:6,scaleX:1.29,scaleY:1.29,x:292.9,y:179.1,alpha:1},11,cjs.Ease.get(1)).wait(151).to({_off:true},33).wait(309));

	// <Path>_6
	this.instance_8 = new lib.piesAdan();
	this.instance_8.setTransform(289.7,164.8,0.25,0.25,0,0,0,68.8,27.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.29,scaleY:1.29,x:294.6,y:279.8,alpha:1},11,cjs.Ease.get(1)).wait(138).to({rotation:90,x:294.4,y:279.9},8,cjs.Ease.get(1)).to({scaleX:0.58,scaleY:0.58,x:293.1,y:231.1},13,cjs.Ease.get(1)).to({_off:true},1).wait(333));

	// Capa 5
	this.instance_9 = new lib.bolaaccion();
	this.instance_9.setTransform(279.8,197.6,0.033,0.033,0,0,0,151.7,151.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(201).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,alpha:0.949},2).to({scaleX:0.86,scaleY:0.86,alpha:0.859},3).to({scaleX:0.04,scaleY:0.04,alpha:0},6,cjs.Ease.get(1)).to({_off:true},29).wait(256));

	// Capa 1
	this.instance_10 = new lib.DESTELLO();
	this.instance_10.setTransform(273.1,198.7,0.408,0.408,0,0,0,16,166.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(208).to({_off:false},0).to({_off:true},14).wait(282));

	// rueda2 mopviendose
	this.instance_11 = new lib.rueda2mopviendose();
	this.instance_11.setTransform(417.2,117,0.177,0.177,0,0,0,49.9,49.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:50,scaleX:1.22,scaleY:1.22,x:417.3,y:116.9,alpha:1},11,cjs.Ease.get(1)).wait(23).to({regX:49.9,regY:49.7,scaleX:0.66,scaleY:0.66,x:285.8,y:225.1},20,cjs.Ease.get(-0.96)).to({_off:true},4).wait(446));

	// rueda2 mopviendose
	this.instance_12 = new lib.rueda2mopviendose();
	this.instance_12.setTransform(151.6,259.4,0.146,0.146,0,0,0,50,49.6);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,x:151.7,y:259.3,alpha:1},11,cjs.Ease.get(1)).wait(34).to({scaleX:0.61,scaleY:0.61,x:288.7,y:225.4},19,cjs.Ease.get(-0.99)).to({_off:true},4).wait(436));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.3,102.7,281.7,163.9);


// symbols:
(lib.rueda2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#056863").s().p("AjTDTQhYhYAAh7QAAh7BYhXQBZhYB6ABQB8gBBYBYQBYBXAAB7QAAB7hYBYQhYBXh8ABQh6gBhZhXgAhchcQgnAmABA2QgBA1AnAnQAoAmA0AAQA2AAAngmQAngngBg1QABg2gngmQgngmg2AAQg0AAgoAmg");
	this.shape.setTransform(49.9,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AA1GaQgZghgcAAQgaAAgaAhQgZAegRA4QhogUhWg6QAbg0AFgnQAFgpgUgTQgUgUgpAFQgnAFg0AbQg8hXgThnQA4gRAfgZQAhgZAAgbQAAgbghgZQgfgYg4gSQAThmA8hXQA0AbAnAFQApAFAUgUQAUgUgFgoQgFgogbgzQBYg7BmgTQASA3AYAfQAaAgAaAAQAcAAAZggQAYgfASg3QBmATBZA7QgbAzgGAoQgFAoAVAUQATAUApgFQAngFA1gbQA6BWAUBnQg4ASgfAYQggAZgBAbQABAbAgAZQAfAZA4ARQgUBog6BWQg1gbgngFQgpgFgTAUQgVATAFApQAGAnAbA0QhYA6hnAUQgSg3gYgfgAjUjRQhXBXAAB6QAAB8BXBYQBZBXB7AAQB8AABYhXQBXhYAAh8QAAh6hXhXQhZhYh7AAQh7AAhZBYg");
	this.shape_1.setTransform(50,49.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,99.4);


(lib.PREDESTELLO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgAbIk/AAIAAg1IE/AAg");
	this.shape.setTransform(16,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AifAaIAAg0IE/AAIAAA0g");
	this.shape_1.setTransform(16,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhEIE/AAIAACJIk/AAIAAiJ");
	this.shape_2.setTransform(16,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4CA598").s().p("AifBFIAAiJIE/AAIAACJg");
	this.shape_3.setTransform(16,75.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhvIE/AAIAADfIk/AAIAAjf");
	this.shape_4.setTransform(16,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA598").s().p("AifBwIAAjfIE/AAIAADfg");
	this.shape_5.setTransform(16,71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifiaIE/AAIAAE1Ik/AAIAAk1");
	this.shape_6.setTransform(16,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4CA598").s().p("AifCbIAAk1IE/AAIAAE1g");
	this.shape_7.setTransform(16,67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjFIE/AAIAAGLIk/AAIAAmL");
	this.shape_8.setTransform(16,62.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA598").s().p("AifDGIAAmLIE/AAIAAGLg");
	this.shape_9.setTransform(16,62.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjwIE/AAIAAHhIk/AAIAAnh");
	this.shape_10.setTransform(16,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CA598").s().p("AifDxIAAnhIE/AAIAAHhg");
	this.shape_11.setTransform(16,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkbIE/AAIAAI3Ik/AAIAAo3");
	this.shape_12.setTransform(16,54.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CA598").s().p("AifEcIAAo3IE/AAIAAI3g");
	this.shape_13.setTransform(16,54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflGIE/AAIAAKNIk/AAIAAqN");
	this.shape_14.setTransform(16,49.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CA598").s().p("AifFHIAAqNIE/AAIAAKNg");
	this.shape_15.setTransform(16,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AiflxIE/AAIAALjIk/AAIAArj");
	this.shape_16.setTransform(16,45.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4CA598").s().p("AifFyIAArjIE/AAIAALjg");
	this.shape_17.setTransform(16,45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("ACgmcIAAM5Ik/AAIAAs5g");
	this.shape_18.setTransform(16,41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4CA598").s().p("AifGdIAAs5IE/AAIAAM5g");
	this.shape_19.setTransform(16,41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(178,178,178,0)").ss(1,1,1).p("AiflYIE/AAIAAKxIk/AAIAAqx");
	this.shape_20.setTransform(16,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4CA598").s().p("AifFZIAAqxIE/AAIAAKxg");
	this.shape_21.setTransform(16,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifleIEcAAIAjHwIAAApIAACkIkcAAIgjnwIAAikIAAgp");
	this.shape_22.setTransform(16,35.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(143,143,143,0)").ss(1,1,1).p("AifkVIE/AAIAAIrIk/AAIAAor");
	this.shape_23.setTransform(16,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4CA598").s().p("AifEWIAAorIE/AAIAAIrg");
	this.shape_24.setTransform(16,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifkfID5AAIBGGMIAAAkIAACPIj5AAIhGmMIAAiQIAAgj");
	this.shape_25.setTransform(16,28.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(107,107,107,0)").ss(1,1,1).p("AifjRIE/AAIAAGjIk/AAIAAmj");
	this.shape_26.setTransform(16,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4CA598").s().p("AifDSIAAmjIE/AAIAAGjg");
	this.shape_27.setTransform(16,21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifjhIDWAAIBpEpIAAAfIAAB7IjWAAIhpkpIAAh8IAAge");
	this.shape_28.setTransform(16,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(71,71,71,0)").ss(1,1,1).p("AifiOIE/AAIAAEdIk/AAIAAkd");
	this.shape_29.setTransform(16,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4CA598").s().p("AifCPIAAkdIE/AAIAAEdg");
	this.shape_30.setTransform(16,14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifijICzAAICMDFIAAAaIAABoIizAAIiMjFIAAhoIAAga");
	this.shape_31.setTransform(16,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(36,36,36,0)").ss(1,1,1).p("AifhKIE/AAIAACVIk/AAIAAiV");
	this.shape_32.setTransform(16,7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4CA598").s().p("AifBLIAAiVIE/AAIAACVg");
	this.shape_33.setTransform(16,7.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifhlICSAAICtBkIAAATIAABUIiSAAIithkIAAhSIAAgV");
	this.shape_34.setTransform(16,10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AifgXIAAA/IE/AAIAAg/AifgXIAAgQIE/AAIAAAQ");
	this.shape_35.setTransform(16,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4CA598").s().p("AifAIIAAgPIE/AAIAAAPg");
	this.shape_36.setTransform(16,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.2,32,66.5);


(lib.Path_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0,-0.1,-0.2,1.1).s().p("AgWgKIAtAFIghAQg");
	this.shape.setTransform(2.4,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,2.4);


(lib.Path_19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.9,0.3,0.6,-0.1).s().p("AgNATIgBglIAdAAIAAAlg");
	this.shape.setTransform(1.6,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,4);


(lib.Path_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.1,-0.1,-0.5,0.3).s().p("AgOATIAAglIAdAAIAAAlg");
	this.shape.setTransform(1.6,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.2,4);


(lib.Path_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,0.1,1.3,-0.7).s().p("AglAaIAdhHIAuATIgdBHg");
	this.shape.setTransform(3.8,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,9.2);


(lib.Path_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0.4,0,-0.6,0).s().p("AgJAZIAAgxIATAAIAAAxg");
	this.shape.setTransform(1.1,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,5.2);


(lib.Path_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.1,0,1.3,0).s().p("AgLgOQALgFACgOIAJAHIABA0QgMAGgLACg");
	this.shape.setTransform(1.3,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,6.9);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.7,0.3,0.2,-0.2).s().p("AgUgLIgCgaIAtA2IgIAGIAAAPg");
	this.shape.setTransform(2.4,3.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,7.7);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0.9,-0.2,0,0.3).s().p("AgUgPIAJgJIAAgMIAgAvIAAAag");
	this.shape.setTransform(2.2,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,7.6);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,7.9,3.9,-26.3).s().p("AFaDGQhwgWgpgHQglgEh+gBQimgChIgDQlFgLhqg8QgpgXgEgtQgEgoAbgxQAcgxAyglQA2goBAgNQAdgGAdAAQBAAAA2AaQAxAYAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAngmA0gUQA1gWA7AAQBmAABOA8QBNA8AUBYQAiC8jFAHIgQABQg/AAhdgRg");
	this.shape.setTransform(68.6,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,43.1);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,0,6,0).s().p("Ag7gVIB2glIAAB0IgqAAIhMABg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,-4.1,-1.7,-20.3).s().p("AnNARQABhFCNgsQCGgpDNAAQCWAAB1AXQB4AXA3AqQihB1kEAqQinAbkoABQgnhQAAgpg");
	this.shape.setTransform(46.2,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,27.7);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,1.7,-0.9).s().p("AgWBOQgmg0gFhTQAChkgCgxQARAFANAOQANAOAEASQAFAYgKAVQgJAWgVALIAZBsQAfgBAbAUQAaAVAIAhQAHAfgNAdQgNAcgbAPQAIgrgwhWg");
	this.shape.setTransform(6.8,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,13.4,41.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],9,1.8,-5.9,-1.5).s().p("AgdB1QgRgLgFgTIgeiMQgEgTAKgRQALgRAUgEIA5gNQATgEARALQARALAEATIAOA/QgIAWgIAuQgHAugJAXIgvAKIgJABQgOAAgLgIg");
	this.shape.setTransform(8.4,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,25.1);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-2,0,5.1,1.9).s().p("AgvB6QgNgGgJgLQAlhVgriAIAFgCIA7gNQARgEARALQARALAEATIAfCMQAEATgKARQgLARgUAEIg5ANIgLABQgJAAgIgDg");
	this.shape.setTransform(7.6,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,25.1);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.3,-0.5,-24.1,4).s().p("AhhC2QgugBgMgCQgbgDgOgSQgOgRACgbQAEgzArhAQADgGAJgHIAOgLQBKhBBFhcQCBBWBIC0Qg8AthKAaQhQAchUAAIgIgBg");
	this.shape.setTransform(20.9,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,36.6);


(lib.cerrarOjos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0DAIAAl/IFpAAIAAETIgGAAIAAANIgCAAIAAADIgCAAIAAAEIAAAAIAAADIgCAAIAAACIgCAAIAAAFIgBAAIAAACIgDAAIAAAHIgCAAIAAABIgHAAIAAAMIgBAAIAAADIgFAAIAAAJIgCAAIgBADIgGAAIAAAKIgFAAIAAAGIgBAAIAAADIgIAAIAAAJIgCAAIAAAFIgHgBIAAAJg");
	this.shape.setTransform(18.1,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,38.6);


(lib.brazoOtroAdan = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AisDsQgGgCgXgNQg9gnABhPQAAhFAwhFQBYiCCIgyQBKgbBPAAQAmAAAMACQAZADAMAPQANAPgCAYQgDAtgkA7QgDAFgHAGIgMAKQhaBPhNB3QgGAKgjAuQgWAagkALQgaAIgmACIgGAAQgVAAgQgHg");
	this.shape.setTransform(26.3,24.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,48.7);


(lib.bolaaccion = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA598").s().p("AwvQvQm8m7AAp0QAApzG8m8QG8m8JzAAQJ0AAG7G8QG9G8AAJzQAAJ0m9G7Qm7G9p0AAQpzAAm8m9g");
	this.shape.setTransform(151.7,151.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,303.3,303.3);


(lib.rueda2mopviendose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.rueda2();
	this.instance.setTransform(50,49.6,1,1,0,0,0,50,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:49.9,rotation:45},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,99.4);


(lib.piesAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(68.9,21.5,1,1,0,0,0,68.6,21.5);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWD0Qg6gbgngwQgogigvgTQgzgTg0AAQgxAAg2AUQgkAOgzAeQgjAxg4ATQgsAPhFAAQh1AAhThKQhThLAAhpQAAhtBShMQBRhNB1ABQBAAAA2AaQAxAXAwAvIAAgCQBhBNBoAAQA2AAAygSQAygSAmgfQAnglA0gVQA1gVA7AAQB1AABTBMQBSBMAABqQAABshSBMQhTBNh1gBQhDAAg8gcg");
	this.shape.setTransform(68.8,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,54.6);


(lib.DESTELLO = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.PREDESTELLO();
	this.instance.setTransform(123.5,63.5,1.002,1.476,0,45,41.3,16.1,41.2);

	this.instance_1 = new lib.PREDESTELLO();
	this.instance_1.setTransform(122.7,281.5,1,1.476,135,0,0,16.1,41.3);

	this.instance_2 = new lib.PREDESTELLO();
	this.instance_2.setTransform(-90.4,274.8,1,1.476,-134.9,0,0,16.1,41.3);

	this.instance_3 = new lib.PREDESTELLO();
	this.instance_3.setTransform(-90.3,62.7,1,1.476,-44.9,0,0,16.1,41.3);

	this.instance_4 = new lib.PREDESTELLO();
	this.instance_4.setTransform(12,300,1,1,180,0,0,16,41.3);

	this.instance_5 = new lib.PREDESTELLO();
	this.instance_5.setTransform(-106.7,173.3,1,1,-89.9,0,0,16,41.3);

	this.instance_6 = new lib.PREDESTELLO();
	this.instance_6.setTransform(150.6,173.3,1,1,90,0,0,16,41.3);

	this.instance_7 = new lib.PREDESTELLO();
	this.instance_7.setTransform(16,41.3,1,1,0,0,0,16,41.3);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,77.3,185.6,186.8);


(lib.cuerpoAdan = function() {
	this.initialize();

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape.setTransform(44.7,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_1.setTransform(53,24.6);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("Ag8A9IAAh5QAzgDAjAmQAlAjgCAxIgPACg");
	this.shape_2.setTransform(53.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D183A").s().p("AhIBVQglgggCguQgCgxAhgkQAigkAvACIAABwIBuAAQAHAlgfAkQgfAjguAFIgLAAQgmAAghgcg");
	this.shape_3.setTransform(44.7,32.9);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(46.2,13.8,1,1,0,0,0,46.2,13.8);
	this.instance.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlTBzQg/hRgphWQgmhQAAgoQAAhHCOgsQCGgoDNAAQDOAACHAoQCNAsAABHQAAAogmBQQgpBWg+BRQimDWivAAQiuAAiljWg");
	this.shape_4.setTransform(48.2,32.9);

	this.addChild(this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,65.8);


(lib.cuello_Adan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7gVIB3glIAAB0IgrgBIhMACg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,11.9);


(lib.cabezaAdan = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AE3DOIptAAIAAmbIJtAAg");
	this.shape.setTransform(9,-56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogJIgBgiQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_1.setTransform(82.5,57.2);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E3E77").s().p("AlpGwQiSgChrhkQhvhoACiRQACiPBlhsQBnhuCRACQCVACBnBkQBCBBAbBUIAogKIgBghQABiRBlhsQBnhuCSACQCUACBnBkQBmBjAICPIAAAHIAAAFQgECNhjBpQhnBuiRgCQiSgChrhkQhKhGgXhYIglAJQADASABASIAAAHIAAAFQgECPhjBoQhlBtiOAAIgFAAgAlzjcQh5AGhXBWQhaBZAFB3QAFB6BXBWQBZBaB5gFQB8gFBUhXQBThWACh8QgFh3hWhXQhVhVhxAAIgNAAgAFrl1Qh5AGhXBWQhaBZAFB5QAFB4BXBWQBZBaB5gFQB8gFBUhXQBThWACh6QgFh5hWhXQhVhVhxAAIgNAAg");
	this.shape_2.setTransform(82.5,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAAjpQBgAABFBEQBFBFAABgQAABhhFBEQhFBFhgAAQhgAAhFhFQhEhEAAhhQAAhgBEhFQBFhEBgAAg");
	this.shape_3.setTransform(66.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqGFkQhNg3gThfIgXhyQgShdAxhQQAxhQBZgRIQ3jVQBZgSBMA2QBMA3ATBfIAXByQATBdgxBQQgyBQhZARIw2DVQgWAFgWAAQhAAAg5gpgAk8g2QglAegIAqQgKAxAYAqQAYAqAwARQArAPAtgRQAtgSAWgoQAUgmgFguQgGgsgcgVQgDA2gtAKQgSAFgSgIQgTgIgJgPQgXgmAngqIgEAAQgqAAgjAdgACeiSQgkAdgIArQgJAwAXAnQAYApAuAQQAqAPAsgRQArgRAWgnQAUgjgGgtQgFgtgcgVQgDA3grAKQgSAEgSgHQgSgIgJgQQgXgmAngoIgEAAQgpAAgiAcg");
	this.shape_4.setTransform(82.3,64.1);

	this.instance = new lib.Path_0();
	this.instance.setTransform(155.2,51.7,1,1,0,0,0,8.4,12.5);
	this.instance.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmB1QgRgLgFgTIgeiMQgFgTALgRQALgRATgEIA6gNQATgEARALQARALAEATIAeCMQAFATgLARQgLARgUAEIg4ANIgLABQgOAAgLgIg");
	this.shape_5.setTransform(156.1,51.7);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(81.2,21.2,1,1,0,0,0,6.8,20.8);
	this.instance_1.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgohtIAfgHIAzDiIggAHg");
	this.shape_6.setTransform(76.1,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA7QgYgPgIgdQgGgaAPgZQAQgZAcgGQAbgHAZAQQAYAPAIAdQAGAagPAZQgQAZgcAGQgJACgHAAQgTAAgRgLg");
	this.shape_7.setTransform(72.3,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBPQgggUgJgmQgJgkAVgiQAUghAngIQAjgJAhAVQAiAVAIAmQAJAkgVAhQgUAhgnAIQgLADgJAAQgZAAgYgPg");
	this.shape_8.setTransform(78.4,33.7);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(11.1,83.5,1,1,0,0,0,7.7,12.6);
	this.instance_2.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnB1QgRgKgEgUIgeiLQgFgUALgRQALgRAUgEIA4gNQAUgEARALQARALAEATIAeCMQAFATgLARQgLARgTAEIg5ANIgLABQgOAAgMgIg");
	this.shape_9.setTransform(9.3,83.4);

	// Capa 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AFSA8QgtAuhBAAQhAAAguguQgugtAAg/QAAhAAuguQAugtBAAAQBBAAAtAtQAuAuAABAQAAA/guAtgAhtCdQgvAvhCAAQhDAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBDAAQBCAAAvAvQAwAvAABBQAABCgwAvg");
	this.shape_10.setTransform(81.3,66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D183A").s().p("AlQCdQgugvgBhCQABhBAugvQAwgvBCAAQBCAAAwAvQAuAvABBBQgBBCguAvQgwAvhCAAQhCAAgwgvgAB2A8QgtgtAAg/QAAhAAtguQAugtBAAAQBAAAAuAtQAtAuAABAQAAA/gtAtQguAuhAAAQhAAAgugug");
	this.shape_11.setTransform(81.3,66.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.instance_2,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-76.8,187.5,180.7);


(lib.brasoderecheAdan = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(21,36.4,1,1,0,0,0,20.9,18.3);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ERIgdgBQgQAAgMgCQgcgEgOgRQgNgRACgcQAEgyAqhDQAEgGAIgGIAOgMQBohZBZiEQARgYAfgmQAZgeAqgMQAcgIAsgCQAdAAAVAIIAgATQBFAugDBZQgCBPg4BMQhmCSicA2QhSAchTAAIgJAAg");
	this.shape.setTransform(30.1,27.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,54.7);


(lib.adanlogo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAOQgGAAAAgEIAAgSQAAgFAGAAIAWAAQAFAAAAAFIAAASQAAAEgFAAg");
	this.shape.setTransform(251.3,22.8,3.988,3.988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQgGAAAAgDIAAgTQAAgFAGAAIAaAAQAFAAAAAFIAAATQAAADgFAAg");
	this.shape_1.setTransform(210.7,73.6,3.988,3.988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAPQgDAAgBgEIADgIIAagRIAUAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAATQAAAFgFAAg");
	this.shape_2.setTransform(11.2,72.1,3.988,3.988);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAPQgGAAAAgFIAAgTQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAEgCIAUAAIAaARIADAIQAAAEgFAAg");
	this.shape_3.setTransform(62.5,72.1,3.988,3.988);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAOQgGAAAAgEIAAgTQAAgEAGAAIAlAAQAEAAAAAEIAAATQAAAEgEAAg");
	this.shape_4.setTransform(87,73,3.988,3.988);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAOQgGAAAAgDIAAgTQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAEgBIAnAAQAEAAAAAFIAAATQAAADgEAAg");
	this.shape_5.setTransform(187.9,73.6,3.988,3.988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBJIhRiRIA5AAIBOCRg");
	this.shape_6.setTransform(230.7,48.3,3.988,3.988);

	this.instance = new lib.Path_7();
	this.instance.setTransform(249.2,62.6,3.988,3.988,0,0,0,2.4,3.8);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(211.8,35.7,3.988,3.988,0,0,0,2.4,3.9);
	this.instance_1.alpha = 0.398;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBJIAAiRIAhAAIAACRg");
	this.shape_7.setTransform(251.3,48.3,3.988,3.988);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBFIAAiJIAlAAIAACJg");
	this.shape_8.setTransform(210.7,46.7,3.988,3.988);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAABJg");
	this.shape_9.setTransform(187.9,62.4,3.988,3.988);

	this.instance_2 = new lib.Path_12();
	this.instance_2.setTransform(175.7,64.2,3.988,3.988,0,0,0,1.2,3.5);
	this.instance_2.alpha = 0.398;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXBFIAAiJIAvAAIAACJg");
	this.shape_10.setTransform(87,49.2,3.988,3.988);

	this.instance_3 = new lib.Path_14();
	this.instance_3.setTransform(98.9,66.8,3.988,3.988,0,0,0,1.2,2.6);
	this.instance_3.alpha = 0.398;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEBQIg+ifIA4AAIA9CcIgBABIgBACg");
	this.shape_11.setTransform(49.7,44.9,3.988,3.988);

	this.instance_4 = new lib.Path_16();
	this.instance_4.setTransform(28.7,31.1,3.988,3.988,0,0,0,4,4.5);
	this.instance_4.alpha = 0.398;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzA1QgWgXAAgeQAAgeAWgWQAWgWAdAAQAfAAAWAWQAVAWAAAeQAAAegVAXQgWAWgfAAQgdAAgWgWgAgRgPQgIAHAAAJQAAAKAIAIQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgHgJAAQgKAAgHAHg");
	this.shape_12.setTransform(168.4,48,3.988,3.988);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBFIAAiJIBUAAQAZAAASAUQASATAAAdQAAAcgSAUQgTAVgYAAgAgXASIAaAAQAJAAAFgGQAFgGAAgGQAAgIgFgGQgGgGgIAAIgaAAg");
	this.shape_13.setTransform(106.6,49.2,3.988,3.988);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4BQQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIA9ibIA4AAIg+Cfg");
	this.shape_14.setTransform(24,44.9,3.988,3.988);

	this.instance_5 = new lib.Path_18();
	this.instance_5.setTransform(25.2,61.8,3.988,3.988,0,0,0,1.6,2);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.Path_19();
	this.instance_6.setTransform(44.3,61.8,3.988,3.988,0,0,0,1.8,2);
	this.instance_6.alpha = 0.398;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtATIAAglIBbAAIAAAlg");
	this.shape_15.setTransform(38,61.7,3.988,3.988);

	this.instance_7 = new lib.Path_21();
	this.instance_7.setTransform(179.1,16.6,3.988,3.988,0,0,0,2.6,1.2);
	this.instance_7.alpha = 0.398;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghADIA3gcIANAYIg5Abg");
	this.shape_16.setTransform(183.8,10.6,3.988,3.988);

	this.addChild(this.shape_16,this.instance_7,this.shape_15,this.instance_6,this.instance_5,this.shape_14,this.shape_13,this.shape_12,this.instance_4,this.shape_11,this.instance_3,this.shape_10,this.instance_2,this.shape_9,this.shape_8,this.shape_7,this.instance_1,this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.2,79.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

/*******************************************************/
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cargando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 7
	this.instance = new lib.adanlogo();
	this.instance.setTransform(277.8,229.6,1,1,0,0,0,129.1,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(16));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(1,1,1).p("AAeAAIg7AA");
	this.shape.setTransform(120,235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(16));

	// rueda2 mopviendose
	this.instance_1 = new lib.rueda2mopviendose();
	this.instance_1.setTransform(281.7,146.5,0.924,0.924,-91.4,0,0,49.9,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(16));

	// rueda2 mopviendose
	this.instance_2 = new lib.rueda2mopviendose();
	this.instance_2.setTransform(339.4,105.6,0.443,0.443,0,-91.4,88.5,49.9,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.7,82.9,258.2,186.4);


// symbols:
(lib.rueda2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#056863").s().p("AjTDTQhYhYAAh7QAAh7BYhXQBZhYB6ABQB8gBBYBYQBYBXAAB7QAAB7hYBYQhYBXh8ABQh6gBhZhXgAhchcQgnAmABA2QgBA1AnAnQAoAmA0AAQA2AAAngmQAngngBg1QABg2gngmQgngmg2AAQg0AAgoAmg");
	this.shape.setTransform(49.9,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA598").s().p("AA1GaQgZghgcAAQgaAAgaAhQgZAegRA4QhogUhWg6QAbg0AFgnQAFgpgUgTQgUgUgpAFQgnAFg0AbQg8hXgThnQA4gRAfgZQAhgZAAgbQAAgbghgZQgfgYg4gSQAThmA8hXQA0AbAnAFQApAFAUgUQAUgUgFgoQgFgogbgzQBYg7BmgTQASA3AYAfQAaAgAaAAQAcAAAZggQAYgfASg3QBmATBZA7QgbAzgGAoQgFAoAVAUQATAUApgFQAngFA1gbQA6BWAUBnQg4ASgfAYQggAZgBAbQABAbAgAZQAfAZA4ARQgUBog6BWQg1gbgngFQgpgFgTAUQgVATAFApQAGAnAbA0QhYA6hnAUQgSg3gYgfgAjUjRQhXBXAAB6QAAB8BXBYQBZBXB7AAQB8AABYhXQBXhYAAh8QAAh6hXhXQhZhYh7AAQh7AAhZBYg");
	this.shape_1.setTransform(50,49.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,99.4);


(lib.Path_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0,-0.1,-0.2,1.1).s().p("AgWgKIAtAFIghAQg");
	this.shape.setTransform(2.4,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,2.4);


(lib.Path_19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.9,0.3,0.6,-0.1).s().p("AgNATIgBglIAdAAIAAAlg");
	this.shape.setTransform(1.6,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,4);


(lib.Path_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],1.1,-0.1,-0.5,0.3).s().p("AgOATIAAglIAdAAIAAAlg");
	this.shape.setTransform(1.6,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3.2,4);


(lib.Path_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,0.1,1.3,-0.7).s().p("AglAaIAdhHIAuATIgdBHg");
	this.shape.setTransform(3.8,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,9.2);


(lib.Path_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0.4,0,-0.6,0).s().p("AgJAZIAAgxIATAAIAAAxg");
	this.shape.setTransform(1.1,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,5.2);


(lib.Path_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.1,0,1.3,0).s().p("AgLgOQALgFACgOIAJAHIABA0QgMAGgLACg");
	this.shape.setTransform(1.3,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,6.9);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.7,0.3,0.2,-0.2).s().p("AgUgLIgCgaIAtA2IgIAGIAAAPg");
	this.shape.setTransform(2.4,3.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,7.7);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0.9,-0.2,0,0.3).s().p("AgUgPIAJgJIAAgMIAgAvIAAAag");
	this.shape.setTransform(2.2,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,7.6);


(lib.rueda2mopviendose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.rueda2();
	this.instance.setTransform(50,49.6,1,1,0,0,0,50,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:49.9,rotation:45},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,99.4);


(lib.adanlogo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAOQgGAAAAgEIAAgSQAAgFAGAAIAWAAQAFAAAAAFIAAASQAAAEgFAAg");
	this.shape.setTransform(251.3,22.8,3.988,3.988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQgGAAAAgDIAAgTQAAgFAGAAIAaAAQAFAAAAAFIAAATQAAADgFAAg");
	this.shape_1.setTransform(210.7,73.6,3.988,3.988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAPQgDAAgBgEIADgIIAagRIAUAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAATQAAAFgFAAg");
	this.shape_2.setTransform(11.2,72.1,3.988,3.988);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAPQgGAAAAgFIAAgTQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAEgCIAUAAIAaARIADAIQAAAEgFAAg");
	this.shape_3.setTransform(62.5,72.1,3.988,3.988);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAOQgGAAAAgEIAAgTQAAgEAGAAIAlAAQAEAAAAAEIAAATQAAAEgEAAg");
	this.shape_4.setTransform(87,73,3.988,3.988);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAOQgGAAAAgDIAAgTQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAEgBIAnAAQAEAAAAAFIAAATQAAADgEAAg");
	this.shape_5.setTransform(187.9,73.6,3.988,3.988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBJIhRiRIA5AAIBOCRg");
	this.shape_6.setTransform(230.7,48.3,3.988,3.988);

	this.instance = new lib.Path_7();
	this.instance.setTransform(249.2,62.6,3.988,3.988,0,0,0,2.4,3.8);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(211.8,35.7,3.988,3.988,0,0,0,2.4,3.9);
	this.instance_1.alpha = 0.398;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBJIAAiRIAhAAIAACRg");
	this.shape_7.setTransform(251.3,48.3,3.988,3.988);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBFIAAiJIAlAAIAACJg");
	this.shape_8.setTransform(210.7,46.7,3.988,3.988);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAABJg");
	this.shape_9.setTransform(187.9,62.4,3.988,3.988);

	this.instance_2 = new lib.Path_12();
	this.instance_2.setTransform(175.7,64.2,3.988,3.988,0,0,0,1.2,3.5);
	this.instance_2.alpha = 0.398;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXBFIAAiJIAvAAIAACJg");
	this.shape_10.setTransform(87,49.2,3.988,3.988);

	this.instance_3 = new lib.Path_14();
	this.instance_3.setTransform(98.9,66.8,3.988,3.988,0,0,0,1.2,2.6);
	this.instance_3.alpha = 0.398;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEBQIg+ifIA4AAIA9CcIgBABIgBACg");
	this.shape_11.setTransform(49.7,44.9,3.988,3.988);

	this.instance_4 = new lib.Path_16();
	this.instance_4.setTransform(28.7,31.1,3.988,3.988,0,0,0,4,4.5);
	this.instance_4.alpha = 0.398;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzA1QgWgXAAgeQAAgeAWgWQAWgWAdAAQAfAAAWAWQAVAWAAAeQAAAegVAXQgWAWgfAAQgdAAgWgWgAgRgPQgIAHAAAJQAAAKAIAIQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgHgJAAQgKAAgHAHg");
	this.shape_12.setTransform(168.4,48,3.988,3.988);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBFIAAiJIBUAAQAZAAASAUQASATAAAdQAAAcgSAUQgTAVgYAAgAgXASIAaAAQAJAAAFgGQAFgGAAgGQAAgIgFgGQgGgGgIAAIgaAAg");
	this.shape_13.setTransform(106.6,49.2,3.988,3.988);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4BQQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIA9ibIA4AAIg+Cfg");
	this.shape_14.setTransform(24,44.9,3.988,3.988);

	this.instance_5 = new lib.Path_18();
	this.instance_5.setTransform(25.2,61.8,3.988,3.988,0,0,0,1.6,2);
	this.instance_5.alpha = 0.398;

	this.instance_6 = new lib.Path_19();
	this.instance_6.setTransform(44.3,61.8,3.988,3.988,0,0,0,1.8,2);
	this.instance_6.alpha = 0.398;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtATIAAglIBbAAIAAAlg");
	this.shape_15.setTransform(38,61.7,3.988,3.988);

	this.instance_7 = new lib.Path_21();
	this.instance_7.setTransform(179.1,16.6,3.988,3.988,0,0,0,2.6,1.2);
	this.instance_7.alpha = 0.398;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghADIA3gcIANAYIg5Abg");
	this.shape_16.setTransform(183.8,10.6,3.988,3.988);

	this.addChild(this.shape_16,this.instance_7,this.shape_15,this.instance_6,this.instance_5,this.shape_14,this.shape_13,this.shape_12,this.instance_4,this.shape_11,this.instance_3,this.shape_10,this.instance_2,this.shape_9,this.shape_8,this.shape_7,this.instance_1,this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.2,79.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

