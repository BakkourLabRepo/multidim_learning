//range function
function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
};
//for getting random coordinated in shapes
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}
//for making shape trial lists
function fillArray(value, len) {
if (len == 0) return [];
var a = [value];
while (a.length * 2 <= len) a = a.concat(a);
if (a.length < len) a = a.concat(a.slice(0, len - a.length));
return a;
};

String.format = function (format) {
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
          ? args[number]
          : match;
      });
}

//random number with increments of 0.5 for angle
function getRandomNumber(start, end, increments) {
  var numbers = [];
  for(var n = start; n <= end; n += increments) {
      numbers.push(n);
  }

  var randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

// ********IN ANOTHER FILE  *********//


//generate random number within interval (min, max)
function n_interval(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)}

//random rgb color code generator
//range is (0,256)
function random_rgb_generator() {
  var r = n_interval(0, 255);
  var g = n_interval(0, 255);
  var b = n_interval(0,255);
  var color = 'rgb('+r + ',' +g + ','+ b + ')';
  return color};


  function random_rgb_generator(level) {
      if (level == 'pink_red') {
          var r = n_interval(155, 255);
          var g = n_interval(0, 50);
          var b = n_interval(0,90);

          var color = 'rgb('+r + ',' +g + ','+ b + ')';
          return color
      }

      else if (level == 'orange_yellow') {
          var r = n_interval(255, 255);
          var g = n_interval(120, 155);
          var b = n_interval(0,0);
          var color = 'rgb('+r + ',' +g + ','+ b + ')';
          return color
      }
      else if (level == 'green') {
          var r = n_interval(0, 0);
          var g = n_interval(60, 255);
          var b = n_interval(0,30);
          var color = 'rgb('+r + ',' +g + ','+ b + ')';
          return color

      }
      else if (level == 'blue') {
          var r = n_interval(0, 30);
          var g = n_interval(0, 120);
          var b = n_interval(220,255);
          var color = 'rgb('+r + ',' +g + ','+ b + ')';
          return color
      }
          };

var shape_num = 60;
var half_shape= shape_num/2;
var color_num = 72;
var half_color = color_num/2
var angle_num = 96
var half_angle = angle_num/2


var pink_red = [];
var orange_yellow = [];
var green = [];
var blue = [];

//generate arrays of length (trial num for category/ 2) for each level
for (var i=0; i< half_color; i++) {
  pink_red.push(random_rgb_generator('pink_red'))
  orange_yellow.push(random_rgb_generator('orange_yellow'))
  green.push(random_rgb_generator('green'))
  blue.push(random_rgb_generator('blue')) };

function list_rand_n(start, end, length) {
    var lst = [];
    while(lst.length < length) {
        var new_no = n_interval(start, end);
        if  (lst.indexOf(new_no) === -1) {
        lst.push(new_no) }}
    return lst };


var q1 =  list_rand_n(201,250, half_angle);  //right of vertical to left of horizontal i.e. 5, 85
var q2 = list_rand_n(291,340, half_angle);
var q3 = list_rand_n(21,70, half_angle);
var q4 = list_rand_n(110,159, half_angle);


var three = fillArray(3,half_shape);
var four = fillArray(4, half_shape);
var five = fillArray(5,half_shape);
var eight = fillArray(8,half_shape);


var shape_choice = jsPsych.randomization.sampleWithoutReplacement([0,1], 1);
if (shape_choice==0){
     var stim_def_shape = {
        'three':{'stimuli':three,
                'value':80},
        'four':{'stimuli':four,
                'value':60},
        'five':{'stimuli':five,
                'value':40},
        'eight':{'stimuli':eight,
                'value':20}
    }
} else {
    var stim_def_shape = {
        'three':{'stimuli':three,
                'value':20},
        'four':{'stimuli':four,
                'value':40},
        'five':{'stimuli':five,
                'value':60},
        'eight':{'stimuli':eight,
                'value':80}
    }
};

var color_choice = jsPsych.randomization.sampleWithoutReplacement([0,1], 1);
if (color_choice == 0){
     var stim_def_color = {
        'pink_red':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(pink_red),
                'value':80},
        'orange_yellow':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(orange_yellow),
                'value':60},
        'green':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(green),
                'value':40},
        'blue':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(blue),
                'value':20}
    }
} else {
    var stim_def_color = {
        'pink_red':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(pink_red),
                'value':20},
        'orange_yellow':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(orange_yellow),
                'value':40},
        'green':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(green),
                'value':60},
        'blue':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(blue),
                'value':80}
    }
};

var angle_choice = jsPsych.randomization.sampleWithoutReplacement([0,1], 1);
if (angle_choice == 0){
     var stim_def_angle = {
        'q1':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q1),
                'value':80},
        'q2':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q2),
                'value':60},
        'q3':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q3),
                'value':40},
        'q4':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q4),
                'value':20}
    }
} else {
    var stim_def_angle = {
        'q1':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q1),
                'value':20},
        'q2':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q2),
                'value':40},
        'q3':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q3),
                'value':60},
        'q4':{'stimuli':jsPsych.randomization.sampleWithoutReplacement(q4),
                'value':80}
    }
};

//finnnnnnnnn

var age = [];
var age_check = {
      type: 'survey-html-form',
      data: { ttype: 'age_check' },
      preamble: '<p class = "instruct" > In order to identify if you are qualified to participate in our study, please input your <b>year and month of birth</b> below</p>',
      html: '<p>Year: <input name="age_year" type="number" min=1900 max=2021 required/> Month: <input name="age_month" type="number" min=1 max=12 required/></p>',
      button_label: 'Submit'
    };
    age.push(age_check);

    //instruction to quit the task if failed to pass the age check
    var age_incorrect = {
        type: 'html-keyboard-response',
        data: { ttype: 'age_incorrect' },
        stimulus: 'You are not qualified for this study. You must quit and return the HIT.',
        response_ends_trial: false //end the task here to prevent participant from moving on
    };

    //conditional timeline variable to determine if they are between 18-35
    var if_age_incorrect = {
        timeline: [age_incorrect],
        conditional_function: function(){
          var response = jsPsych.data.get().last(1).values()[0].responses;
          var age_year = Number(JSON.parse(response).age_year);
          var age_month = Number(JSON.parse(response).age_month);
          var year = new Date().getFullYear();
          var month = new Date().getMonth()+1;
          if( (year-18) > age_year && age_year > (year-35)){
            return false;
          }
          else if (age_year == year-18 & age_month < month) {
            return false;
          }
          else if (age_year == year-35 & age_month > month) {
            return false;
          }
          else {return true;}
        }
    }
    age.push(if_age_incorrect);


var trials=[];
var totval=0;
var stim_val_blank='';

var instructions1 = {
	type: 'html-keyboard-response',
	data: { ttype: 'block' },
	stimulus: '<p class="title">Learning Task</b></p>\
	<p class="instruct2">Pairs of stimuli will be shown and <strong>you must choose the item of higher value</strong>. You will be given feedback on the value of the chosen stimulus. Some stimuli will be worth more than others.</p>\
	<p class="instruct2">Press <strong>"j"</strong> to select the stimulus on the <strong>left </strong>and <strong>"k"</strong> to select the stimulus on the <strong>right</strong>. You will have up to 4 seconds to make your choice and will then be shown the value for 1s.</p>\
  <p class="instruct">Press "j" or "k" to continue.',
	choices: ['j','k']
};


var instructions2 = {
	type: 'html-keyboard-response',
	data: { ttype: 'block' },
	stimulus: '<p class="instruct2"><strong>Responding more quickly will not allow you to finish the experiment early.</strong> </b></p>\
	<p class="instruct2">You will encounter attention checks throughout the experiment, your payment will depend on whether you answer them correctly.</p>\
	<p class="instruct2"><strong>You will receive a final code at the end of the experiment, input it in the AMT page.</strong></p>\
	<p class="instruct2"><strong>Worker ID inputs will not be accepted and your HIT will be rejected.</strong></p>\
  <p class="instruct">Press "j" or "k" to continue.',
	choices: ['j','k']
};



var ShapePairTypeS1Arr = [];
var ShapePairTypeV1Arr = [];
var ShapePairTypeS2Arr = [];
var ShapePairTypeV2Arr = [];
var ColorPairTypeS1Arr = [];
var ColorPairTypeV1Arr = [];
var ColorPairTypeS2Arr = [];
var ColorPairTypeV2Arr = [];
var AnglePairTypeS1Arr = [];
var AnglePairTypeV1Arr = [];
var AnglePairTypeS2Arr = [];
var AnglePairTypeV2Arr = [];

//n = 4
var nums = ["three", "four", "five", "eight"];
var colors = ["pink_red", "orange_yellow", "green", "blue"];
var angles = ["q1","q2", "q3", "q4"];


var numscnt = [0,0,0,0];
var colorcnt = [0,0,0,0];
var anglescnt = [0,0,0,0];

var cnt_s = 0
var cnt_a = 0
var cnt_c = 0

// number of levels per category
var n = 4

//coefficients for trial number for all categories
var c_shape = 5 // 60 trials
var c_color = 6 // 72 trials
var c_angle = 8  // 96 trials


// stimuli arryay length  = 2*(n-1)*numexperiment ==> 6 for numex = 1
//for number of trial = 6*numex *2
//for now we can change stimuli array size as a multiple of 6 which is kind of annoying

for(var k = 0; k < c_shape; k++)
{
  for(var i = 0; i < n; i++)
  {
    for(var j = i+1; j < n; j++)
    {
      //console.log(i,j)
      ShapePairTypeS1Arr[cnt_s] = [stim_def_shape[nums[i]].stimuli[numscnt[i]],stim_def_shape[nums[i]].stimuli[numscnt[i]+1]];
      ShapePairTypeV1Arr[cnt_s] = [stim_def_shape[nums[i]].value,stim_def_shape[nums[i]].value];

      ShapePairTypeS2Arr[cnt_s] = [stim_def_shape[nums[j]].stimuli[numscnt[j]],stim_def_shape[nums[j]].stimuli[numscnt[j]+1]];
      ShapePairTypeV2Arr[cnt_s] = [stim_def_shape[nums[j]].value,stim_def_shape[nums[j]].value];

      numscnt[i]+= 2;
      numscnt[j]+= 2;
      cnt_s += 1;
    }

  }
};

for(var k = 0; k < c_color; k++)
{
  for(var i = 0; i < n; i++)
  {
    for(var j = i+1; j < n; j++)
    {

      ColorPairTypeS1Arr[cnt_c] = [stim_def_color[colors[i]].stimuli[colorcnt[i]],stim_def_color[colors[i]].stimuli[colorcnt[i]+1]];
      ColorPairTypeV1Arr[cnt_c] = [stim_def_color[colors[i]].value,stim_def_color[colors[i]].value];

      ColorPairTypeS2Arr[cnt_c]= [stim_def_color[colors[j]].stimuli[colorcnt[j]],stim_def_color[colors[j]].stimuli[colorcnt[j]+1]];
      ColorPairTypeV2Arr[cnt_c] = [stim_def_color[colors[j]].value,stim_def_color[colors[j]].value];

      colorcnt[i]+= 2;
      colorcnt[j]+= 2;
      cnt_c +=1

    }

  }
};

for(var k = 0; k < c_angle; k++)
{
  for(var i = 0; i < n; i++)
  {
    for(var j = i+1; j < n; j++)
    {

      AnglePairTypeS1Arr[cnt_a] = [stim_def_angle[angles[i]].stimuli[anglescnt[i]],stim_def_angle[angles[i]].stimuli[anglescnt[i]+1]];
      AnglePairTypeV1Arr[cnt_a] = [stim_def_angle[angles[i]].value,stim_def_angle[angles[i]].value];

      AnglePairTypeS2Arr[cnt_a] = [stim_def_angle[angles[j]].stimuli[anglescnt[j]],stim_def_angle[angles[j]].stimuli[anglescnt[j]+1]];
      AnglePairTypeV2Arr[cnt_a] = [stim_def_angle[angles[j]].value,stim_def_angle[angles[j]].value];

      anglescnt[i]+= 2;
      anglescnt[j]+=2;
      cnt_a += 1;
    }

  }
};

//console.log(ShapePairTypeV1Arr)

var color_side1_stim = [];
var color_side1_val = [];
var color_side2_stim = [];
var  color_side2_val = [];
var  shape_side1_stim  = [];
var  shape_side1_val= [];
var  shape_side2_stim= [];
var  shape_side2_val= [];
var  angle_side1_stim = [];
var  angle_side1_val = [];
var  angle_side2_stim = [];
var  angle_side2_val = [];

for(var i = 0; i < cnt_s; i++)
{
  shape_side1_stim = shape_side1_stim.concat(ShapePairTypeS1Arr[i])
  shape_side1_val = shape_side1_val.concat(ShapePairTypeV1Arr[i])
  shape_side2_stim = shape_side2_stim.concat(ShapePairTypeS2Arr[i])
  shape_side2_val = shape_side2_val.concat(ShapePairTypeV2Arr[i])
};

for(var i = 0; i < cnt_c; i++)
{

  color_side1_stim = color_side1_stim.concat(ColorPairTypeS1Arr[i])
  color_side1_val = color_side1_val.concat(ColorPairTypeV1Arr[i])
  color_side2_stim = color_side2_stim.concat(ColorPairTypeS2Arr[i])
  color_side2_val = color_side2_val.concat(ColorPairTypeV2Arr[i])

};


for(var i = 0; i < cnt_a; i++)
{

  angle_side1_stim = angle_side1_stim.concat(AnglePairTypeS1Arr[i])
  angle_side1_val = angle_side1_val.concat(AnglePairTypeV1Arr[i])
  angle_side2_stim = angle_side2_stim.concat(AnglePairTypeS2Arr[i])
  angle_side2_val = angle_side2_val.concat(AnglePairTypeV2Arr[i])
};


//console.log(color_side1_stim.length)

side1_stim = color_side1_stim.concat(shape_side1_stim, angle_side1_stim);
side1_val = color_side1_val.concat(shape_side1_val, angle_side1_val);
side2_stim = color_side2_stim.concat(shape_side2_stim, angle_side2_stim);
side2_val = color_side2_val.concat(shape_side2_val, angle_side2_val);

//console.log(side1_stim.length, side1_val.length)


let color = fillArray('color', color_num)  // trial number as param 2
let angle = fillArray('angle', angle_num)
let shape = fillArray('shape', shape_num)
var ttype_list = [color, shape, angle];
var trial_list = [];

for(var i = 0; i < 3; i++)
{
  trial_list.push.apply(trial_list, ttype_list[i]);
}
//console.log(trial_list);
//console.log(ttype_list);
pair_order=jsPsych.randomization.sampleWithoutReplacement(range(0,side1_stim.length-1));


//timeline_variable_array=[]
side_order=jsPsych.randomization.sampleWithoutReplacement(Array(side1_stim.length/2).fill(0).concat(Array(side1_stim.length/2).fill(1)));
timeline_variable_array=[];
//for 1 to 12
for (var i = 0; i < side1_stim.length; i++) {
  if (side_order[i]==0){
    //stimulus left
    stim_l=side1_stim[pair_order[i]];
//    //value of stimulus on left
    val_l=side1_val[pair_order[i]];
//    //stimulus on right
   stim_r=side2_stim[pair_order[i]];
//    // value of stimulus on right
    val_r=side2_val[pair_order[i]];
    ttype = trial_list[pair_order[i]];
  } else {
    stim_l=side2_stim[pair_order[i]];
    val_l=side2_val[pair_order[i]];
    stim_r=side1_stim[pair_order[i]];
    val_r=side1_val[pair_order[i]];
    ttype = trial_list[pair_order[i]];
  }
  timeline_variable_array[i]={stim_l: stim_l, stim_r: stim_r, val_l: val_l, val_r: val_r, ttype: ttype};
};


var A = timeline_variable_array.slice(0,29); //30th trial is attn check
var B = timeline_variable_array.slice(29, 59); // 60th trial is attn check
var C = timeline_variable_array.slice(59, 139); //140th trial is attn check
var D = timeline_variable_array.slice(139, 199);
var E = timeline_variable_array.slice(199, 228);// 200th trial is attn check

var learn_trial_a = {
    type: 'canvas-keyboard-response',
    choices: ['j','k'],
    trial_duration: 4000,
    response_ends_trial: true,
    prompt: '<p> J or K  </p>',
    data: {stimL:jsPsych.timelineVariable('stim_l'), stimR:jsPsych.timelineVariable('stim_r'), valueL: jsPsych.timelineVariable('val_l'),  valueR: jsPsych.timelineVariable('val_r'), ttype: jsPsych.timelineVariable('ttype')},
    stimulus:  function drawtrial(c) {
      var ttype=jsPsych.timelineVariable('ttype',true);
      var stim_r=jsPsych.timelineVariable('stim_r',true);
      var stim_l=jsPsych.timelineVariable('stim_l',true);
      var ctx = c.getContext('2d');
      if (ttype == 'shape') {
          var centerL_X=125;
          var centerL_Y=250;
          var radius=100;
          var points_L=[];

          for(var degree=0;degree<360;degree+=9){
            var radians = degree * Math.PI/180;
            var x_L = centerL_X + radius * Math.cos(radians);
            var y_L = centerL_Y + radius * Math.sin(radians);
            points_L.push({x:x_L,y:y_L}); //40 points, don't use the last one.
          }
          var n_L = stim_l;
          var step_L = Math.floor(40 / n_L);
          var coords_L = [];
          var min_L = 0;
          for(var i=0; i < n_L; i++){
              coords_L.push(getRandomInt(step_L) + min_L);
              min_L += step_L
          }
          ctx.beginPath();
          //start points of right side shape
          ctx.moveTo(points_L[coords_L[0]].x,points_L[coords_L[0]].y);
          for(var i=1;i<coords_L.length; i++){

            ctx.lineTo(points_L[coords_L[i]].x,points_L[coords_L[i]].y);

          }
          ctx.closePath();
          ctx.stroke();

          //right circle params
          var centerR_X=400;
          var centerR_Y=250;
          var radius_R=100;
          var points_R=[];
          //get right circle points
          for(var degree=0;degree<360;degree+=9){
            var radians_R = degree * Math.PI/180;
            var x_R = centerR_X + radius_R * Math.cos(radians_R);
            var y_R = centerR_Y + radius_R * Math.sin(radians_R);
            points_R.push({x:x_R,y:y_R});
          }
          var n_R = stim_r;
          var step_R = Math.floor(40 / n_R);
          var coords_R = [];
          var min_R = 0;
          for(var i=0; i < n_R; i++){
              coords_R.push(getRandomInt(step_R) + min_R);
              min_R += step_R
          }

          ctx.beginPath();
          //start points of right side shape
          ctx.moveTo(points_R[coords_R[0]].x,points_R[coords_R[0]].y);
          for(var i=1;i<coords_R.length; i++){
            ctx.lineTo(points_R[coords_R[i]].x,points_R[coords_R[i]].y);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
      }
      else if (ttype == 'color') {
        //canvas_size: [1000, 1000],
          ctx.beginPath();
          ctx.arc(100, 250, 90, 0, 2 *Math.PI);
            // complete custom shape
          ctx.closePath();
          ctx.lineWidth = 5;
          ctx.fillStyle = stim_l;
          ctx.fill();
          ctx.strokeStyle = 'white';
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(400, 250, 90, 0, 2 *Math.PI);
          ctx.lineWidth = 5;
          ctx.strokeStyle = 'white';
          ctx.stroke();
          ctx.fillStyle = stim_r;
          ctx.fill();
      }
      else if (ttype == 'angle') {
          var angleL = stim_l;
          var x_l = 130;
          var y_l = 200;
          var width_l  = 22;
          var height_l = 165;
          var centerx_l = x_l + 0.5 * width_l;
          var centery_l = y_l + 0.5 * height_l;
          ctx.save();
          ctx.translate(127, 200);
          ctx.rotate( (Math.PI / 180) * angleL);
          ctx.translate(-127, -200); ///this is bad
          //ctx.restore();  //uncommented
          /*
          ctx.fillRect(120, 200, 2, 165);
          ctx.fillRect(130, 200, 2, 165);
          ctx.fillRect(140, 200, 2, 165);
          */
          ctx.fillRect(125, 200, 4, 120);
          //ctx.fillRect(110, 190, 42,10);
          ctx.beginPath;
          ctx.arc(127, 200, 7.5, 0, 2 *Math.PI);
          ctx.fillStyle = 'black';
          ctx.fill();
          //ctx.closePath;
          ctx.restore();

          var angleR = stim_r;
          var x_r = 360;
          var y_r = 200;
          var width_r  = 22;
          var height_r = 165;
          ctx.save();
          var centerx_r = x_r + 0.5 * width_r;
          var centery_r = y_r + 0.5 * height_r;
          ctx.translate(378, 200);
          ctx.rotate( (Math.PI / 180) * angleR);
          ctx.translate(-378, -200);
          /*
          ctx.fillRect(350, 200, 2, 165); //changed from 150 to 175
          ctx.fillRect(360, 200, 2, 165); // y value changed from 325 to 250
          ctx.fillRect(370, 200, 2, 165); // thinning rectangle by -2
          */
          ctx.fillRect(385, 200, 4, 120); // y value changed from 325 to 250
          //ctx.fillRect(370, 190, 42, 10);
          ctx.beginPath;
          ctx.arc(387, 200, 7.5, 0, 2 *Math.PI);
          ctx.fillStyle = 'black';
          ctx.fill();
          ctx.restore();
      }
    },
    on_finish: function(data) {

      var accuracy = false;
        if (data.valueL > data.valueR && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')) {
          accuracy = true;
        }

        else if (data.valueR > data.valueL && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('k')) {
          accuracy = true;
        }
        data.trial_accuracy = accuracy;
        // Update the total value
        if (data.key_press == null) {

          return;
        } else if (data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')) {
          totval += data.valueL;
        } else {
          totval += data.valueR;
        }


        }
      };
var additional_time = 0;
var total_feedback_time = 3000;
var learn_trial_b = {
      type: 'html-keyboard-response',
      data: { ttype: 'feedback' },
      stimulus: function() {
          var last_trial = jsPsych.data.get().last(1).values()[0];
        if (last_trial.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')) {
          return(String.format(
            '<div>\
              <div id="rbox2">{0}</div>\
              <div id="rbox2">{1}</div>\
              <p class="subtitle2">&nbsp;</p>\
            </div>',
            last_trial.valueL.toString() + '&#162', stim_val_blank
          ));
        } else if (last_trial.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('k')) {
          return(String.format(
            '<div>\
              <div id="rbox2">{0}</div>\
              <div id="rbox2">{1}</div>\
              <p class="subtitle2">&nbsp;</p>\
            </div>',
            stim_val_blank, last_trial.valueR.toString() + '&#162'
          ));
        } else {
          return("<div style='font-size:40px'>Too Slow<br /><br />(Press j=left / k=right)</div>");
        }
      },
      choices: jsPsych.NO_KEYS,
      response_ends_trial: false,

      on_trial_start: function() {
        var last_trial = jsPsych.data.get().last(1).values()[0];
        if (last_trial.key_press !== null) {
        if (last_trial.rt < 300) {
          additional_time = 6000 - last_trial.rt;
          total_feedback_time += additional_time;

        }
        }
        //var trial_dur = total_feedback_time;

      },
        trial_duration: 1000,
      //trial_duration: total_feedback_time,


};


var learn_trial_c = {
    type: 'html-keyboard-response',
    data: { ttype: 'fix' },
    stimulus: '<div><div class="fix">+</div><p class="subtitle2">&nbsp;</p></div>',
    choices: jsPsych.NO_KEYS,
    stimulus_duration: 500,
    trial_duration: 500,
    response_ends_trial: false
}

var learn_feedback = {
  type: 'html-keyboard-response',
  data: { ttype: 'block_feedback' },
  trial_duration: 12000,
  response_ends_trial: true,
  choices: jsPsych.ALL_KEYS,
  stimulus: function() {
    return(String.format(
      '<p class="subtitle2"><b>Congratulations, you got ${0} in this value learning block! Press any key to continue to Part 2.</b></p>\
      <p class="instruct">(press "j" or "k" to continue)</p>',
      (totval*0.01).toFixed(2)
    ))
  },
  on_start: function(trial) {
    trial.data.totval = totval;
  }
};


var code = jsPsych.randomization.randomID(7);

var get_code = {
    type: 'html-keyboard-response',
    data: { ttype: 'code' },
    stimulus: code,
    choices: jsPsych.NO_KEYS,
    stimulus_duration: 12000,
    trial_duration: 12000,
    response_ends_trial: false
};



var trials_A = {     //red on left
      timeline: [learn_trial_a, learn_trial_b, learn_trial_c],
      timeline_variables: A,
      randomize_order: false
};



var trials_B = {     //red on left
      timeline: [learn_trial_a, learn_trial_b, learn_trial_c],
      timeline_variables: B,
      randomize_order: false
};

var trials_C = {     //red on left
      timeline: [learn_trial_a, learn_trial_b, learn_trial_c],
      timeline_variables: C,
      randomize_order: false
};

var trials_D = {     //red on left
      timeline: [learn_trial_a, learn_trial_b, learn_trial_c],
      timeline_variables: D,
      randomize_order: false
};

var trials_E = {     //red on left
      timeline: [learn_trial_a, learn_trial_b, learn_trial_c],
      timeline_variables: E,
      randomize_order: false
};

var attention_one = {
  type: 'html-keyboard-response',
  data: {ttype: 'attention'},
  stimulus: '<p class="instruct">This is an attention check. Press the <strong>k</strong>ey on your keybo<strong>a</strong>rd that corresponds to the <strong>t</strong>hird bold letter i<strong>n</strong> this sentence to proceed. </p> ',
  response_ends_trial: true,
  choices: jsPsych.ALL_KEYS,
  trial_duration: 12000,
  on_finish: function(data) {

      var accuracy = false;
        if (data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('t')) {
          accuracy = true;
        }
        else { accuracy =false;}
        data.trial_accuracy = accuracy;
}
};

var attention_two = {
  type: 'html-keyboard-response',
  data: {ttype: 'attention'},
  stimulus: '<p class="instruct">This is an attention check. Press the <strong>k</strong>ey on your keybo<strong>a</strong>rd that corresponds to the <strong>s</strong>econd bold letter i</strong>n</strong> this sentence to proceed. </p> ',
  response_ends_trial: true,
  choices: jsPsych.ALL_KEYS,
  trial_duration: 12000,
  on_finish: function(data) {

      var accuracy = false;
        if (data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('a')) {
          accuracy = true;
        }
        else { accuracy =false;}
        data.trial_accuracy = accuracy;
}
};

var attn_code = jsPsych.randomization.randomID(6);
var attention_three = {
      type: 'survey-html-form',
      data: { ttype: 'attention_code', code: attn_code},
      preamble: '<p class = "instruct" > This is an attention check. Please enter the <b>first two characters </b>of the code below and click submit to continue. </p>',
      html: '<p>Code: <input name="code" required/> '+attn_code+' </p>',
      button_label: 'Submit',
      on_finish: function(data) {

      var accuracy = false;
        if (data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('a')) {
          accuracy = true;
        }
        else { accuracy =false;}
        data.trial_accuracy = accuracy;
}
    };

var att_code = jsPsych.randomization.randomID(9);
var attention_four = {
      type: 'survey-html-form',
      data: { ttype: 'attention_code', code: att_code },
      preamble: '<p class = "instruct" > This is an attention check. Please enter the <b>first four characters </b>of the code below and click submit to continue. </p>',
      html: '<p>Code: <input name="code" required/> '+att_code+' </p>',
      button_label: 'Submit'
    };

//stim defs
var color_lst = ['red', 'yellow', 'green', 'blue'];
var num_sides_lst = [3, 4, 5, 8];
var angle_lst = [[21, 70], [110, 159], [201, 250], [291, 340]];

var trial_num = 5;

//use category X_choice bianry value to get the corresponding compound stim dict
function get_dict(shape_choice, color_choice, angle_choice){
  if (shape_choice == 0) {
    if (color_choice == 0) {
        if (angle_choice == 0) {
            dict = {'color': {'red': 80, 'yellow': 60, 'green': 40, 'blue': 20},
            'num_sides': {'three': 80, 'four': 60, 'five': 40, 'eight': 20},
            'angle_ranges': {'first_q': 80, 'second_q': 60, 'third_q': 40, 'fourth_q': 20} //fix angle in stim gen function
    };
        }
        if (angle_choice == 1) {
            dict = {'color': {'red': 80, 'yellow': 60, 'green': 40, 'blue': 20},
            'num_sides': {'three': 80, 'four': 60, 'five': 40, 'eight': 20},
            'angle_ranges': {'first_q': 20, 'second_q': 40, 'third_q': 60, 'fourth_q': 80}

        };
    }
}

    if (color_choice == 1) {
        if (angle_choice == 0) {
            dict = {'color': {'red': 20, 'yellow': 40, 'green': 60, 'blue': 80},
            'num_sides': {'three': 80, 'four': 60, 'five': 40, 'eight': 20},
            'angle_ranges': {'first_q': 80, 'second_q': 60, 'third_q': 40, 'fourth_q': 20}

        };
    }

        if (angle_choice == 1) {
            dict = {'color': {'red': 20, 'yellow': 40, 'green': 60, 'blue': 80},
            'num_sides': {'three': 80, 'four': 60, 'five': 40, 'eight': 20},
            'angle_ranges': {'first_q': 20, 'second_q': 40, 'third_q': 60, 'fourth_q': 80}

        };
        }


    }
};

if (shape_choice == 1) {
        if (color_choice == 0) {
                if (angle_choice == 0) {
                    dict = {'color': {'red': 80, 'yellow': 60, 'green': 40, 'blue': 20},
                    'num_sides': {'three': 20, 'four': 40, 'five': 60, 'eight': 80},
                    'angle_ranges': {'first_q': 80, 'second_q': 60, 'third_q': 40, 'fourth_q': 20} //fix angle in stim gen function
            };
                }
                if (angle_choice == 1) {
                    dict = {'color': {'red': 80, 'yellow': 60, 'green': 40, 'blue': 20},
                    'num_sides': {'three': 20, 'four': 40, 'five': 60, 'eight': 80},
                    'angle_ranges': {'first_q': 20, 'second_q': 40, 'third_q': 60, 'fourth_q': 80}

                };
            }
        }

            if (color_choice == 1) {
                if (angle_choice == 0) {
                    dict = {'color': {'red': 20, 'yellow': 40, 'green': 60, 'blue': 80},
                    'num_sides': {'three': 20, 'four': 40, 'five': 60, 'eight': 80},
                    'angle_ranges': {'first_q': 80, 'second_q': 60, 'third_q': 40, 'fourth_q': 20}

                };
            }

                if (angle_choice == 1) {
                    dict = {'color': {'red': 20, 'yellow': 40, 'green': 60, 'blue': 80},
                    'num_sides': {'three': 20, 'four': 40, 'five': 60, 'eight': 80},
                    'angle_ranges': {'first_q': 20, 'second_q': 40, 'third_q': 60, 'fourth_q': 80}

                };
                }


            }

          }
        return dict
      };


//outcome stimdef of coinflip
var experiment_dict = get_dict(shape_choice, color_choice, angle_choice);
//range function with step param
function range(start, stop, step) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}
//random integer in specified range
function rand_in_range(min, max) {
  return Math.round((Math.random() * (max - min) + min));
};

function area_of_triangle(x_1, y_1, x_2, y_2, x_3, y_3){
  return 0.5*Math.abs(x_1*(y_2 - y_3) + x_2*(y_3-y_1)+x_3*(y_1 - y_2))
}

function area_four_sided(x_1, x_2, x_3, x_4, y_1, y_2, y_3, y_4){

  a = x_1*y_2 - y_1*x_2
  b = x_2*y_3 - y_3*x_2
  c = x_3*y_4 - y_4*x_3
  d = x_4*y_1 - y_1*x_4
  return Math.abs((a+b+c+d)/2)
}

function round_nearest_ten(num) {
	num = parseFloat(num);
	return (Math.round(num/10) * 10);
};

function degs_to_rads(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
};

function rgb_to_hex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function hex_code(r,g,b) {
  var red = rgb_to_hex(r);
  var green = rgb_to_hex(g);
  var blue = rgb_to_hex(b);
  return '#' + String(red+green+blue);
};

function handle_color(color){
  if (color == 'red'){
    r = rand_in_range(200, 255);
    g = rand_in_range(0, 100);
    b = rand_in_range(0, 100);
    while (g < b){
      g = rand_in_range(0, 100);
      b = rand_in_range(0, 100);
    }
  } if (color == 'blue') {
    r = 0;
    g = rand_in_range(0, 255);
    b = rand_in_range(70, 255);
    while ((b+20) < g){
      g = rand_in_range(0, 255);
      b = rand_in_range(70, 255);
    }
  } if (color == 'green'){
    r = rand_in_range(0, 128);
    g = rand_in_range(128, 255);
    b = rand_in_range(0, 128);
  } if (color == 'yellow') {
    r = rand_in_range(180, 255);
    g = rand_in_range(128, 255);
    b = 0;
    while (r < g){
      r = rand_in_range(180, 255);
      g = rand_in_range(128, 255);
    }
  }
  return hex_code(r, g, b)
}

function choose_angles() {

  var ranges = jsPsych.randomization.sampleWithoutReplacement(angle_lst, 2);
  angle_range_1 = ranges[0];
  angle_range_2 = ranges[1];

  min_1 = angle_range_1[0];
  max_1 = angle_range_1[1];
  min_2 = angle_range_2[0];
  max_2 = angle_range_2[1];

  angle_1 = rand_in_range(min_1, max_1);
  angle_2 = rand_in_range(min_2, max_2);

  return [angle_1, angle_2]
};

function generate_3_points(stimulus) {

  if (stimulus == 0){
    x_1 = rand_in_range(105, 170);
    x_2 = rand_in_range(180, 245);
    x_3 = rand_in_range(105, 245);
  } else{
    x_1 = rand_in_range(305, 375);
    x_2 = rand_in_range(380, 445);
    x_3 = rand_in_range(305, 445);
  }
  y_1 = rand_in_range(55, 120);
  y_2 = rand_in_range(130, 195);
  y_3 = rand_in_range(90, 160);
  area = area_of_triangle(x_1, y_1, x_2, y_2, x_3, y_3);

  while (area < 4500){
    if (stimulus == 0){
    x_1 = rand_in_range(105, 170);
    x_2 = rand_in_range(180, 245);
    x_3 = rand_in_range(105, 245);
    } else{
    x_1 = rand_in_range(305, 345);
    x_2 = rand_in_range(355, 395);
    x_3 = rand_in_range(305, 395);
    }
    y_1 = rand_in_range(55, 120);
    y_2 = rand_in_range(130, 195);
    y_3 = rand_in_range(90, 160);
    area = area_of_triangle(x_1, y_1, x_2, y_2, x_3, y_3);
  }
  points = [[x_1, y_1], [x_2, y_2], [x_3, y_3]]
  return points
}

function generate_4_points(stimulus){

  if (stimulus == 0){
  x_1 = rand_in_range(105, 170);
  x_2 = rand_in_range(180, 245);
  x_3 = rand_in_range(180, 245);
  x_4 = rand_in_range(105, 170);
  } else {
    x_1 = rand_in_range(305, 370);
    x_2 = rand_in_range(380, 445);
    x_3 = rand_in_range(380, 445);
    x_4 = rand_in_range(305, 370);
  }
  y_1 = rand_in_range(55, 120);
  y_2 = rand_in_range(55, 120);
  y_3 = rand_in_range(130, 195);
  y_4 = rand_in_range(130, 195);

  area = area_four_sided(x_1, x_2, x_3, x_4, y_1, y_2, y_3, y_4);

  while (area < 4500) {
    if (stimulus == 0){
    x_1 = rand_in_range(105, 170);
    x_2 = rand_in_range(180, 245);
    x_3 = rand_in_range(180, 245);
    x_4 = rand_in_range(105, 170);
    } else {
      x_1 = rand_in_range(305, 370);
      x_2 = rand_in_range(380, 445);
      x_3 = rand_in_range(380, 445);
      x_4 = rand_in_range(305, 370);
    }
    y_1 = rand_in_range(55, 120);
    y_2 = rand_in_range(55, 120);
    y_3 = rand_in_range(130, 195);
    y_4 = rand_in_range(130, 195);

    area = area_four_sided(x_1, x_2, x_3, x_4, y_1, y_2, y_3, y_4)
  }
  points = [[x_1, y_1], [x_2, y_2], [x_3, y_3], [x_4, y_4]];
  return points
}

function generate_5_points(stimulus){

  if (stimulus == 0){
  x_1 = rand_in_range(150, 200);
  x_2 = rand_in_range(105, 145);
  x_3 = rand_in_range(105, 145);
  x_4 = rand_in_range(205, 245);
  x_5 = rand_in_range(205, 245);
  } else {
    x_1 = rand_in_range(350, 400);
    x_2 = rand_in_range(305, 345);
    x_3 = rand_in_range(305, 345);
    x_4 = rand_in_range(405, 445);
    x_5 = rand_in_range(405, 445);
  }
  y_1 = rand_in_range(55, 95);
  y_2 = rand_in_range(105, 145);
  y_3 = rand_in_range(155, 195);
  y_4 = rand_in_range(155, 195);
  y_5 = rand_in_range(105, 145);

  points = [[x_1, y_1], [x_2, y_2], [x_3, y_3], [x_4, y_4],
            [x_5, y_5]]
  return points
}

function generate_8_points(stimulus){
  if (stimulus == 0){
    x_1 = rand_in_range(105, 145);
    x_2 = rand_in_range(155, 195);
    x_3 = rand_in_range(205, 245);
    x_4 = rand_in_range(205, 245);
    x_5 = rand_in_range(205, 245);
    x_6 = rand_in_range(155, 195);
    x_7 = rand_in_range(105, 145);
    x_8 = rand_in_range(105, 145);
  } else {
    x_1 = rand_in_range(305, 345);
    x_2 = rand_in_range(355, 395);
    x_3 = rand_in_range(405, 445);
    x_4 = rand_in_range(405, 445);
    x_5 = rand_in_range(405, 445);
    x_6 = rand_in_range(355, 395);
    x_7 = rand_in_range(305, 345);
    x_8 = rand_in_range(305, 345);
  }
  y_1 = rand_in_range(155, 195);
  y_2 = rand_in_range(155, 195);
  y_3 = rand_in_range(155, 195);
  y_4 = rand_in_range(105, 145);
  y_5 = rand_in_range(55, 95);
  y_6 = rand_in_range(55, 95);
  y_7 = rand_in_range(55, 95);
  y_8 = rand_in_range(105, 145);

  while (Math.abs(y_1 - y_2) < 15){
    y_2 = rand_in_range(155, 195);
  }
  while (Math.abs(y_2 - y_3) < 15){
    y_3 = rand_in_range(155, 195);
  }
  points = [[x_1, y_1], [x_2, y_2], [x_3, y_3], [x_4, y_4],
            [x_5, y_5], [x_6, y_6], [x_7, y_7], [x_8, y_8]]
  return points
}


function draw_shape_canvas(ctx, stimulus){
    ctx.strokeStyle = 'red';
    if (stimulus==0){
    ctx.strokeRect(100, 162, 150, 150);
    } if (stimulus==1){
    ctx.strokeRect(300, 162, 150, 150);
    }
};

function draw_mid_point(ctx, mid_x, mid_y){
  ctx.beginPath();
  ctx.arc(mid_x, mid_y, 4, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function draw(ctx, points, color){

  ctx.beginPath();
  [x_1, y_1] = points[0];
  ctx.moveTo(x_1, y_1);
  for (i=1; i<points.length; i++) {
    [x_i, y_i] = points[i]
    ctx.lineTo(x_i, y_i);
  }
  ctx.fillStyle = color;
  ctx.fill();
  ctx.bord
}


function draw_line(ctx, mid_x, mid_y, stimulus){
  r = 75;
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(mid_x, mid_y);
  ctx.lineTo(mid_x + r*Math.cos(degs_to_rads(angles[stimulus])),
             mid_y + r*Math.sin(degs_to_rads(angles[stimulus])));
  ctx.stroke();
}

function get_points(n, stimulus){
  if (n==3){
    points = generate_3_points(stimulus);
  } if (n==4){
    points = generate_4_points(stimulus);
  } if (n==5){
    points = generate_5_points(stimulus);
  } if (n==8) {
    points = generate_8_points(stimulus);
  }
  return points
}

function avg(lst){
  var total = 0;
  for (i=0; i<lst.length; i++){
    total += lst[i];
  }
  return total/lst.length
}

function avg_coord(points, axis){
  var total = 0;
  for (i=0; i< points.length; i++) {
    total += points[i][axis];
  }
  return total/points.length
}

function get_dict_color(color){
  if (color == 'red'){
    return experiment_dict.color.red
  }
  if (color == 'yellow'){
    return experiment_dict.color.yellow
  }
  if (color  == 'green'){
    return experiment_dict.color.green
  }
  if (color == 'blue'){
    return experiment_dict.color.blue
  }
}

function get_dict_num_sides(num_sides){
  if (num_sides == 3){
    return experiment_dict.num_sides.three
  }
  if (num_sides == 4){
    return experiment_dict.num_sides.four
  }
  if (num_sides  == 5){
    return experiment_dict.num_sides.five
  }
  if (num_sides == 8){
    return experiment_dict.num_sides.eight
  }
}

function get_dict_angle(angle){
  first_q_ranges = list_rand_n(201, 250, 50);
  second_q_ranges = list_rand_n(291, 340, 50);
  third_q_ranges = list_rand_n(21, 70, 50);
  fourth_q_ranges = list_rand_n(110, 159, 50);


  if (first_q_ranges.includes(angle)){
    return experiment_dict.angle_ranges.first_q
  }
  if (second_q_ranges.includes(angle)){
    return experiment_dict.angle_ranges.second_q
  }
  if (third_q_ranges.includes(angle)){
    return experiment_dict.angle_ranges.third_q
  }
  if (fourth_q_ranges.includes(angle)){
    return experiment_dict.angle_ranges.fourth_q
  }
};

var compound_totval = 0;

var compound_trial = {
    type: 'canvas-keyboard-response',
    data: { ttype: 'compound_phase' },
    choices: ['j', 'k'],
    stimulus: function(c) {
        ctx  = c.getContext('2d');
        trial_colors = jsPsych.randomization.sampleWithoutReplacement(color_lst, 2);
        trial_color_l = trial_colors[0];
        trial_color_r = trial_colors[1];

        color_l = handle_color(trial_color_l);
        color_r = handle_color(trial_color_r);
        angles = choose_angles();
        num_sides = jsPsych.randomization.sampleWithoutReplacement(num_sides_lst, 2);

        points_l = get_points(num_sides[0], 0)
        points_r = get_points(num_sides[1], 1)

        mid_x_l = avg_coord(points_l, 0);
        mid_y_l = avg_coord(points_l, 1);
        mid_x_r = avg_coord(points_r, 0);
        mid_y_r = avg_coord(points_r, 1);

        draw(ctx, points_l, color_l);
        draw_mid_point(ctx, mid_x_l, mid_y_l);
        draw_line(ctx, mid_x_l, mid_y_l, 0);

        draw(ctx, points_r, color_r);
        draw_mid_point(ctx, mid_x_r, mid_y_r);
        draw_line(ctx, mid_x_r, mid_y_r, 1);
    },
    canvas_size: [200, 500],
    on_finish: function(data) {
        data.color_l = trial_color_l;
        data.color_r = trial_color_r;
        data.color_code_l = color_l;
        data.color_code_r = color_r;
        data.angle_l = angles[0];
        data.angle_r = angles[1];
        data.shape_l = num_sides[0];
        data.shape_r = num_sides[1];
        data.points_l = points_l;
        data.points_r = points_r;
        data.mid_x_l = mid_x_l;
        data.mid_y_l = mid_y_l;
        data.mid_x_r = mid_x_r;
        data.mid_y_r = mid_y_r;

        data.color_value_l = get_dict_color(trial_color_l);
        data.color_value_r = get_dict_color(trial_color_r);
        data.num_sides_value_l = get_dict_num_sides(num_sides[0]);
        data.num_sides_value_r = get_dict_num_sides(num_sides[1]);
        data.angle_val_l = get_dict_angle(angles[0]);
        data.angle_val_r = get_dict_angle(angles[1]);

        data.value_l = avg([data.color_value_l, data.num_sides_value_l, data.angle_val_l]);
        data.value_r = avg([data.color_value_r, data.num_sides_value_r, data.angle_val_r]);
        data.delta_value = data.value_l - data.value_r
        data.compound_totval = compound_totval;
    }
}

function adjust_points(points){
  for (i=0; i<points.length; i++){
    points[i][1] += 112
  }
  return points
}

var feedback = {
  type: 'canvas-keyboard-response',
  trial_duration: 500,
  stimulus: function(c){
    var last_trial = jsPsych.data.get().last(1).values()[0];
    var ctx = c.getContext('2d');
    if (last_trial.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')) {
      draw_shape_canvas(ctx, 0);
      adjusted_pts = adjust_points(last_trial.points_l);
      draw(ctx, adjusted_pts, last_trial.color_code_l);
      draw_mid_point(ctx, last_trial.mid_x_l, last_trial.mid_y_l+112);
      draw_line(ctx, last_trial.mid_x_l, last_trial.mid_y_l+112, 0);
      compound_totval += last_trial.value_l;

    } if (last_trial.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('k')) {
      draw_shape_canvas(ctx, 1);
      adjusted_pts = adjust_points(last_trial.points_r);
      draw(ctx, adjusted_pts, last_trial.color_code_r);
      draw_mid_point(ctx, last_trial.mid_x_r, last_trial.mid_y_r+112);
      draw_line(ctx, last_trial.mid_x_r, last_trial.mid_y_r+112, 1);
      compound_totval += last_trial.value_r;

    }
  }
}

var fixation_point = {
  type: "html-keyboard-response",
  stimulus: "<div style='font-size: 55px'>+</div>",
  trial_duration: 1000
};


var instructions3 = {
	type: 'html-keyboard-response',
	data: { ttype: 'block' },
	stimulus: '<p class="title">Part 2</b></p>\
	<p class="instruct2">Pairs of objects that combine previous types of stimuli will be shown and <strong>you must choose the object of higher value</strong>. You will not find out how much you earned on each trial, but the computer will keep a tally of your total earnings in the background. One object will be worth more than the other.</p>\
	<p class="instruct2">Press <strong>"j"</strong> to select the object on the <strong>left </strong>and <strong>"k"</strong> to select the object on the <strong>right</strong></p>\
	<p class="instruct2">Take a couple of seconds to really think about your decision based on what you have learned in part 1.</p>\
  <p class="instruct">Press "j" or "k" to continue.',
	choices: ['j','k']
};

var fin = {
	type: 'html-keyboard-response',
	data: { ttype: 'block' },
	stimulus: '<p class="title">You are done. Press j or k to get your code</b></p>',
	choices: ['j','k']
};


var comp_phase1 = [];
var comp_phase2 = [];
//Can change number of trials in for loop here
for (i=0; i<50; i++){
  comp_phase1.push(compound_trial, feedback, fixation_point);
};

for (i=0; i<50; i++){
  comp_phase2.push(compound_trial, feedback, fixation_point);
};


var trial_array = age.concat(instructions1,instructions2,
                            trials_A, attention_one, trials_B,
                            attention_two, trials_C, attention_three, trials_D, trials_E, learn_feedback,
                            instructions3,
                            comp_phase1, attention_four, comp_phase2, fin, get_code);


//var trial_array = comp_phase;



//var t = trial_array.slice(0,4);

jsPsych.init({
    timeline: trial_array,
    //preload_images: all_imgs,
    //show_progress_bar: true,

  on_trial_finish: function(data) {
      console.log('A trial just ended.');
      console.log(JSON.stringify(data));
      //console.log(interaction_data.json());
  }
});
