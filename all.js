// console.log('hi');
// 第一階段：請寫 printBmi 函式，並印出對應狀態
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
// BMI值計算器depart.femh.org.tw › dietary › bmi
// BMI值計算公式: BMI = 體重(公斤) / 身高2(公尺2). 
// BMI ＜ 18.5
// -

// 正常範圍
// 18.5≦BMI＜24
// -

// 異常範圍
// 　　過重：24≦BMI＜27
// 輕度肥胖：27≦BMI＜30
// 中度肥胖：30≦BMI＜35
// 重度肥胖：BMI≧35　
//第一階段
//本次作法先做數值計算，如果是NaN就顯示數值錯誤，請重新輸入。其他就會進行分類。
function printBmi(height,weight){
// console.log(weight,height);
//計算bmi數值
let bmi = weight/((height/100)*(height/100));
let bmiResult = bmi.toFixed(2);
// console.log(bmiResult);
//分配體重範圍
if(bmiResult == 'NaN'){
    console.log(`您的數值輸入錯誤，請重新輸入`);
}else{
    if(bmiResult < 18.5){
        console.log(`您的體重過輕`);
    }else if(18.5<= bmiResult && bmiResult < 24){
        console.log(`您的體重正常`);
    }else if(24<= bmiResult && bmiResult < 27){
        console.log(`您的體重過重`);
    }else if(27<= bmiResult && bmiResult < 30){
        console.log(`您的體重輕度肥胖`);
    }else if(30<= bmiResult && bmiResult < 35){
        console.log(`您的體重中度肥胖`);
    }else if(35<= bmiResult){
        console.log(`您的體重重度肥胖`);
    }
}
}
//執行結果
// printBmi(178, 20);
// printBmi(178, 70);
// printBmi(178, 85);
// printBmi(178, 90);
// printBmi(178, 110);
// printBmi("身高","體重");

//第二階段
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }
//   console.log(bmiStatesData.overThin.color);
  function printBmi(height,weight){
    // console.log(weight,height);
    //計算bmi數值
    let bmi = weight/((height/100)*(height/100));
    let bmiResult = bmi.toFixed(2);
    // console.log(bmiResult);
    //分配體重範圍
    if(bmiResult == 'NaN'){
        console.log(`您的數值輸入錯誤，請重新輸入`);
    }else{
        if(bmiResult < 18.5){
            console.log(`您的體重過輕，健康指數為${bmiStatesData.overThin.color}`);
        }else if(18.5<= bmiResult && bmiResult < 24){
            console.log(`您的體重正常，健康指數為${bmiStatesData.normal.color}`);
        }else if(24<= bmiResult && bmiResult < 27){
            console.log(`您的體重過重，健康指數為${bmiStatesData.overWeight.color}`);
        }else if(27<= bmiResult && bmiResult < 30){
            console.log(`您的體重輕度肥胖，健康指數為${bmiStatesData.mildFat.color}`);
        }else if(30<= bmiResult && bmiResult < 35){
            console.log(`您的體重中度肥胖，健康指數為${bmiStatesData.moderateFat.color}`);
        }else if(35<= bmiResult){
            console.log(`您的體重重度肥胖，健康指數為${bmiStatesData.severeFat.color}`);
        }
    }
    }
//執行結果
// printBmi(178, 20);
// printBmi(178, 70);
// printBmi(178, 85);
// printBmi(178, 90);
// printBmi(178, 110);
// printBmi("身高","體重");

//第三階段
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

//建立變數bmiHistoryData
let bmiHistoryData=[];

function printBmi(height,weight){
    // console.log(weight,height);
    //計算bmi數值
    let bmi = weight/((height/100)*(height/100));
    let bmiResult = bmi.toFixed(2);
    // console.log(bmiResult);
    //分配體重範圍
    if(bmiResult == 'NaN'){
        console.log(`您的數值輸入錯誤，請重新輸入`);
    }else{
        bmiHistoryData.push(bmiResult);
        if(bmiResult < 18.5){
            console.log(`您的體重過輕，健康指數為${bmiStatesData.overThin.color}`);
        }else if(18.5<= bmiResult && bmiResult < 24){
            console.log(`您的體重正常，健康指數為${bmiStatesData.normal.color}`);
        }else if(24<= bmiResult && bmiResult < 27){
            console.log(`您的體重過重，健康指數為${bmiStatesData.overWeight.color}`);
        }else if(27<= bmiResult && bmiResult < 30){
            console.log(`您的體重輕度肥胖，健康指數為${bmiStatesData.mildFat.color}`);
        }else if(30<= bmiResult && bmiResult < 35){
            console.log(`您的體重中度肥胖，健康指數為${bmiStatesData.moderateFat.color}`);
        }else if(35<= bmiResult){
            console.log(`您的體重重度肥胖，健康指數為${bmiStatesData.severeFat.color}`);
        }
    }
    console.log(bmiHistoryData);
}
//建立showHistoryData()
function showHistoryData(){
let lastBmiNumber = bmiHistoryData[(bmiHistoryData.length)-1];

    function bmiColor(bmiResult){
        if(bmiResult < 18.5){
            return bmiStatesData.overThin.color;
        }else if(18.5<= bmiResult && bmiResult < 24){
            return bmiStatesData.normal.color;
        }else if(24<= bmiResult && bmiResult < 27){
            return bmiStatesData.overWeight.color;
        }else if(27<= bmiResult && bmiResult < 30){
            return bmiStatesData.mildFat.color;
        }else if(30<= bmiResult && bmiResult < 35){
            return bmiStatesData.moderateFat.color;
        }else if(35<= bmiResult){
            return bmiStatesData.severeFat.color;
        }
    }
let lastBmiColor = bmiColor(lastBmiNumber);
function bmiState(bmiResult){
    if(bmiResult < 18.5){
        return bmiStatesData.overThin.state;
    }else if(18.5<= bmiResult && bmiResult < 24){
        return bmiStatesData.normal.state;
    }else if(24<= bmiResult && bmiResult < 27){
        return bmiStatesData.overWeight.state;
    }else if(27<= bmiResult && bmiResult < 30){
        return bmiStatesData.mildFat.state;
    }else if(30<= bmiResult && bmiResult < 35){
        return bmiStatesData.moderateFat.state;
    }else if(35<= bmiResult){
        return bmiStatesData.severeFat.state;
    }
}
let lastBmiState = bmiState(lastBmiNumber);

console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為${lastBmiNumber}，體重${lastBmiState}！健康指數為${lastBmiColor}！`)
}

//執行結果
// printBmi(178, 20);
// printBmi(178, 70);
// printBmi(178, 85);
// showHistoryData();