// 小步測試，反覆驗證





// 第一階段：請寫 printBmi 函式，並印出對應狀態
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
//第二階段：
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
//   console.log(bmiStatesData['overThin'].state)
let bmiHistoryData = [];

function showHistoryData(){
    let textTime = bmiHistoryData.length-1;
    console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[textTime].bmi}，體重${bmiStatesData[bmiHistoryData[textTime].state].state}！健康指數為${bmiStatesData[bmiHistoryData[textTime].state].color}！`)
}

function bmiAddData(bmi,statusName){
    let obj = {} ;
    obj.bmi = bmi;
    obj.state = statusName ; 
    bmiHistoryData.push(obj)
}
function checkBmiStatus(statusName){
    console.log(`您的體重${bmiStatesData[statusName].state}，健康指數為${bmiStatesData[statusName].color}`);
}
function printBmi(height,weight){
    let bmi = (weight/((height/100)*(height/100))).toFixed(2);
    // console.log(bmi);
    if(bmi<18.5){
        let statusName = 'overThin';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else if(18.5 <= bmi && bmi < 24){
        let statusName = 'normal';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else if(24 <= bmi && bmi < 27){
        let statusName = 'overWeight';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else if(27 <= bmi && bmi < 30){
        let statusName = 'mildFat';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else if(30 <= bmi && bmi < 35){
        let statusName = 'moderateFat';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else if(35 <= bmi){
        let statusName = 'severeFat';
        checkBmiStatus(statusName);
        bmiAddData(bmi,statusName);
    }else{
        console.log(`您的數值輸入錯誤，請重新輸入`);
    }
}
printBmi(178, 20) 
// >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70) 
// >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85)
// 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)
// // >> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)
// // >> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)
// // >> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")
// // >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
console.log(bmiHistoryData);
showHistoryData() 
// >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

// const bmiStatesData = {
//     "overThin": {
//       "state": "過輕",
//       "color": "藍色"
//     },
//     "normal": {
//       "state": "正常",
//       "color": "紅色"
//     },
//     "overWeight": {
//       "state": "過重",
//       "color": "澄色"
//     },
//     "mildFat": {
//       "state": "輕度肥胖",
//       "color": "黃色"
//     },
//     "moderateFat": {
//       "state": "中度肥胖",
//       "color": "黑色"
//     },
//     "severeFat": {
//       "state": "重度肥胖",
//       "color": "綠色"
//     },
//   }
//   function bmiStatesText(state){
//     console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`)
//   }
//   function printBmi(height, weight) {
//     // let height = 178;
//     // let weight = 130;
//     let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
//     // console.log(bmi);
//     if (bmi < 18.5) {
//       //overThin
//       bmiStatesText("overThin");
      
//     } else if (18.5 <= bmi && bmi < 24) {
//       //normal
//       bmiStatesText("normal");
//     } else if (24 <= bmi && bmi < 27) {
//       //overWeight
//       bmiStatesText("overWeight");
//     } else if (27 <= bmi && bmi < 30) {
//       //mildFat
//       bmiStatesText("mildFat");
//     } else if (30 <= bmi && bmi < 35) {
//       //moderateFat
//       bmiStatesText("moderateFat");
//     } else if (bmi >= 35) {
//       //severeFat
//       bmiStatesText("severeFat");
//     } else {
//       console.log("您的數值輸入錯誤，請重新輸入")
//     }
//   }
//   // 輸入數據，顯示對應物件內容
//   printBmi(178, 20);
//   printBmi(178, 70);
//   printBmi(178, 85);
//   printBmi(178, 90);
//   printBmi(178, 110);
//   printBmi(178, 130);
//   printBmi("身高", "體重");





// function printBmi(height, weight) {
//     // let height = 178;
//     // let weight = 130;
//     let bmi = (Weight / ((Height / 100) * (Height / 100))).toFixed(2);
//     console.log(bmi);
//     if (bmi < 18.5) {
//       console.log("您的體重過輕")
//     } else if (18.5 <= bmi && bmi < 24) {
//       console.log("您的體重正常")
//     } else if (24 <= bmi && bmi < 27) {
//       console.log("您的體重過重")
//     } else if (27 <= bmi && bmi < 30) {
//       console.log("您的體重輕度肥胖");
//     } else if (30 <= bmi && bmi < 35) {
//       console.log("您的體重中度肥胖");
//     } else if (bmi >= 35) {
//       console.log("您的體重重度肥胖");
//     } else {
//       console.log("您的數值輸入錯誤，請重新輸入")
//     }
//   }
//   // 輸入數據，顯示對應物件內容
//   printBmi(178, 20);
//   printBmi(178, 70);
//   printBmi(178, 85);
//   printBmi(178, 90);
//   printBmi(178, 110);
//   printBmi(178, 130);
//   printBmi("身高", "體重");