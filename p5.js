// 第一階段：請寫 printBmi 函式，並印出對應狀態
// function printBmi (height, weight) {
//   // console.log(height, weight)
//   const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2)
//   renderBmiTxt(bmi)
// }
// function renderBmiTxt (bmi) {
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
// printBmi(178, 20)
// // >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70)
// // >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)
// //  >> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)
// // >> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)
// // >> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)
// // >> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi('身高', '體重')
// // >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第二階段
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
//   // console.log(height, weight)
//   const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2)
//   renderBmiTxt(bmi)
// }
// function renderBmiTxt (bmi) {
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
// printBmi(178, 20)
// printBmi(178, 70)
// printBmi(178, 85)
// printBmi(178, 90)
// printBmi(178, 110)
// printBmi(178, 130)
// printBmi('身高', '體重')

// 第三階段

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」
const bmiHistoryData = []

function printBmi (height, weight) {
  const bmi = bmiCalc(height, weight)
  renderBmiTxt(bmi)
}

// 計算bmi
function bmiCalc (height, weight) {
  return (weight / ((height / 100) * (height / 100))).toFixed(2)
}

// 狀態分類
function renderBmiTxt (bmi) {
  let stateName = ''
  if (isNaN(bmi)) {
    console.log('您的數值輸入錯誤，請重新輸入')
  } else {
    if (bmi < 18.5) {
      stateName = 'overThin'
      bmiTxtMaker(stateName)
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
    // 存紀錄
    pushBmiDate(bmi, stateName)
  }
}

// bmi文字產生與渲染
function bmiTxtMaker (stateName) {
  console.log(`您的體重${bmiStatesData[stateName].state}，健康指數為${bmiStatesData[stateName].color}`)
}

// 儲存紀錄
function pushBmiDate (bmi, stateName) {
  const obj = {}
  obj.bmi = bmi
  obj.stateName = stateName
  bmiHistoryData.push(obj)
}

// 顯示最後紀錄
function showHistoryData () {
  const lastTime = bmiHistoryData.length - 1
  console.log(`您總共計算 ${lastTime + 1} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastTime].bmi}，${bmiStatesData[bmiHistoryData[lastTime].stateName].state}！健康指數為${bmiStatesData[bmiHistoryData[lastTime].stateName].color}！`)
}

printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
printBmi(178, 90)
// printBmi(178, 110)
// printBmi(178, 130)
// printBmi('身高', '體重')
showHistoryData()
