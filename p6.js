// 第一階段：請寫 printBmi 函式，並印出對應狀態

// function printBmi (height, weight) {
//   const bmi = bmiCalc(height, weight)
//   // console.log(bmi)
//   if (isNaN(bmi)) {
//     console.log('您的數值輸入錯誤，請重新輸入')
//   } else {
//     if (bmi < 18.5) {
//       console.log('您的體重過輕')
//     } else if (bmi >= 18.5 && bmi < 24) {
//       console.log('您的體重正常')
//     } else if (bmi >= 24 && bmi < 27) {
//       console.log('您的體重過重')
//     } else if (bmi >= 27 && bmi < 30) {
//       console.log('您的體重輕度肥胖')
//     } else if (bmi >= 30 && bmi < 35) {
//       console.log('您的體重中度肥胖')
//     } else if (bmi >= 35) {
//       console.log('您的體重重度肥胖')
//     }
//   }
// }

// function bmiCalc (height, weight) {
//   return (weight / ((height / 100) * (height / 100))).toFixed(2)
// }

// printBmi(178, 20)
// // 您的體重過輕
// printBmi(178, 70)
// // 您的體重正常
// printBmi(178, 85)
// // 您的體重過重
// printBmi(178, 90)
// // 您的體重輕度肥胖
// printBmi(178, 110)
// // 您的體重中度肥胖
// printBmi(178, 130)
// // 您的體重重度肥胖
// printBmi('身高', '體重')
// // 您的數值輸入錯誤，請重新輸入

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
const bmiStatesData = {
  overThin: {
    state: '過輕',
    color: '藍色'
  },
  normal: {
    state: '正常',
    color: '紅色'
  },
  overWeight: {
    state: '過重',
    color: '澄色'
  },
  mildFat: {
    state: '輕度肥胖',
    color: '黃色'
  },
  moderateFat: {
    state: '中度肥胖',
    color: '黑色'
  },
  severeFat: {
    state: '重度肥胖',
    color: '綠色'
  }
}

// function printBmi (height, weight) {
//   const bmi = bmiCalc(height, weight)
//   // console.log(bmi)
//   let stateName = ''
//   if (isNaN(bmi)) {
//     console.log('您的數值輸入錯誤，請重新輸入')
//   } else {
//     if (bmi < 18.5) {
//       stateName = 'overThin'
//       bmiTxtMaker(stateName)
//     } else if (bmi >= 18.5 && bmi < 24) {
//       stateName = 'normal'
//       bmiTxtMaker(stateName)
//     } else if (bmi >= 24 && bmi < 27) {
//       stateName = 'overWeight'
//       bmiTxtMaker(stateName)
//     } else if (bmi >= 27 && bmi < 30) {
//       stateName = 'mildFat'
//       bmiTxtMaker(stateName)
//     } else if (bmi >= 30 && bmi < 35) {
//       stateName = 'moderateFat'
//       bmiTxtMaker(stateName)
//     } else if (bmi >= 35) {
//       stateName = 'severeFat'
//       bmiTxtMaker(stateName)
//     }
//   }
// }
// function bmiTxtMaker (stateName) {
//   console.log(`您的體重${bmiStatesData[stateName].state}，健康指數為${bmiStatesData[stateName].color}`)
// }
// function bmiCalc (height, weight) {
//   return (weight / ((height / 100) * (height / 100))).toFixed(2)
// }
// printBmi(178, 20)
// // 您的體重過輕
// printBmi(178, 70)
// // 您的體重正常
// printBmi(178, 85)
// // 您的體重過重
// printBmi(178, 90)
// // 您的體重輕度肥胖
// printBmi(178, 110)
// // 您的體重中度肥胖
// printBmi(178, 130)
// // 您的體重重度肥胖
// printBmi('身高', '體重')
// 您的數值輸入錯誤，請重新輸入
// printBmi(178, 20)
// 您的體重過輕，健康指數為藍色
// printBmi(178, 70)
// 您的體重正常，健康指數為紅色
// printBmi(178, 85)
// 您的體重過重，健康指數為澄色
// printBmi(178, 90)
// 您的體重輕度肥胖，健康指數為黃色
// printBmi(178, 110)
// 您的體重中度肥胖，健康指數為黑色
// printBmi(178, 130)
// 您的體重重度肥胖，健康指數為綠色
// printBmi("身高","體重")
// 您的數值輸入錯誤，請重新輸入

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
const bmiHistoryData = []
function printBmi (height, weight) {
  const bmi = bmiCalc(height, weight)
  // console.log(bmi)
  let stateName = ''
  if (isNaN(bmi)) {
    console.log('您的數值輸入錯誤，請重新輸入')
  } else {
    if (bmi < 18.5) {
      stateName = 'overThin'
      bmiTxtMaker(stateName)
      addBmiData(bmi, stateName)
    } else if (bmi >= 18.5 && bmi < 24) {
      stateName = 'normal'
      bmiTxtMaker(stateName)
    } else if (bmi >= 24 && bmi < 27) {
      stateName = 'overWeight'
      bmiTxtMaker(stateName)
    } else if (bmi >= 27 && bmi < 30) {
      stateName = 'mildFat'
      bmiTxtMaker(stateName)
    } else if (bmi >= 30 && bmi < 35) {
      stateName = 'moderateFat'
      bmiTxtMaker(stateName)
    } else if (bmi >= 35) {
      stateName = 'severeFat'
      bmiTxtMaker(stateName)
    }
    addBmiData(bmi, stateName)
  }
}
function bmiTxtMaker (stateName) {
  console.log(`您的體重${bmiStatesData[stateName].state}，健康指數為${bmiStatesData[stateName].color}`)
}
function bmiCalc (height, weight) {
  return (weight / ((height / 100) * (height / 100))).toFixed(2)
}
function addBmiData (bmi, stateName) {
  const obj = {}
  obj.bmi = bmi
  obj.stateName = stateName
  bmiHistoryData.push(obj)
}
function showHistoryData () {
  const lastTime = bmiHistoryData.length - 1
  console.log(`您總共計算 ${lastTime + 1} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastTime].bmi}，${bmiStatesData[bmiHistoryData[lastTime].stateName].state}！健康指數為${bmiStatesData[bmiHistoryData[lastTime].stateName].color}！`)
}
printBmi(178, 20)
// 「您的體重過輕，健康指數為藍色
printBmi(178, 70)
// 「您的體重正常，健康指數為紅色
printBmi(178, 85)
// 「您的體重過重，健康指數為澄色
showHistoryData()
// 「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！
// bmiHistoryData
