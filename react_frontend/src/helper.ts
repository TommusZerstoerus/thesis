export const calculateMedian = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sortedArr = [...arr].sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedArr.length / 2)
    return sortedArr.length % 2 === 0
        ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
        : sortedArr[middleIndex]
}

export const calculateMean = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum / arr.length
}