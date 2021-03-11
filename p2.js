// 第一階段：請寫 printBmi 函式，並印出對應狀態
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

const bmiHistoryData = []

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
function renderBmiStatus (stateName) {
  console.log(`您的體重${bmiStatesData[stateName].state}，健康指數為您的體重${bmiStatesData[stateName].color}`)
}
function addBmiData (stateName, bmiResult) {
  const obj = {}
  obj.stateName = stateName
  obj.bmi = bmiResult
  bmiHistoryData.push(obj)
}
function showHistoryData () {
  const lastBmiData = bmiHistoryData.length - 1
  // console.log(bmiHistoryData[lastBmiData].bmi)
  console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastBmiData].bmi}，體重${bmiStatesData[bmiHistoryData[lastBmiData].stateName].state}！健康指數為${bmiStatesData[bmiHistoryData[lastBmiData].stateName].color}！`)
}
function printBmi (height, weight) {
// console.log(height,weight);
  const bmiResult = bmiCalC(height, weight)
  if (bmiResult === 'NaN') {
    console.log('您的數值輸入錯誤，請重新輸入')
  } else {
    if (bmiResult < 18.5) {
      const stateName = 'overThin'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    } else if (bmiResult >= 18.5 && bmiResult < 24) {
      const stateName = 'normal'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    } else if (bmiResult >= 24 && bmiResult < 27) {
      const stateName = 'overWeight'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    } else if (bmiResult >= 27 && bmiResult < 30) {
      const stateName = 'mildFat'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    } else if (bmiResult >= 30 && bmiResult < 35) {
      const stateName = 'moderateFat'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    } else if (bmiResult >= 35) {
      const stateName = 'severeFat'
      renderBmiStatus(stateName)
      addBmiData(stateName, bmiResult)
    }
  }
}
function bmiCalC (height, weight) {
  const bmi = (weight / (height / 100) ** 2).toFixed(2)
  return bmi
  // console.log(bmi);
}

printBmi(178, 20)
printBmi(178, 70)
printBmi(178, 85)
// printBmi(178, 90)
// printBmi(178, 110)
// printBmi(178, 130)
// printBmi("身高","體重")
showHistoryData()
