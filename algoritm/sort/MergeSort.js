// تا وقتیکه ارایه بیش از یک عنصر داره اونو به دو نیم تقسیم کن
// [8, 3, 5, 2, 7, 4]
// [8, 3, 5]   |   [2, 7, 4]
// [8] [3] [5] [2] [7] [4]
// آرایه‌ی یک‌ عنصری خودش از قبل مرتبه
// دو تا آرایه‌ی مرتب رو می‌گیریم و
// [3, 8] + [2, 5]
// از اول هر کدوم مقایسه می‌کنیم
// عدد کوچیک‌تر رو می‌ذاریم توی نتیجه
// اشاره‌گر همون آرایه جلو میره

function MergeSort(arr) {
  if (arr.length <= 1) return arr
  const midArr = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midArr)
  const rightArr = arr.slice(midArr)
  return merge(MergeSort(leftArr), MergeSort(rightArr))
}


function merge(leftArr, rightArr) {
  const resault = []
  let i = 0
  let j = 0
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      resault.push(leftArr[i])
      i++
    }
    else {
      resault.push(rightArr[j])
      j++
    }
  }
  return resault.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

const arr = [-1, 10, -9, -3, 6, 0, 2, 19]
console.log(MergeSort(arr))

// BigO(nlogn) 