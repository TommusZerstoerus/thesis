double calculateMedian(List<double> arr) {
  if (arr.isEmpty) return 0;

  List<double> sortedArr = List.from(arr)..sort();
  int middleIndex = sortedArr.length ~/ 2;

  if (sortedArr.length % 2 == 0) {
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  } else {
    return sortedArr[middleIndex];
  }
}

double calculateMean(List<double> arr) {
  if (arr.isEmpty) return 0;

  double sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
}