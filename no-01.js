//reduce method
function minMax(arr) {
  const rsMax = arr.reduce((max, curr) => curr > max ? curr : max);  
  const rsMin = arr.reduce((min, curr) => curr < min ? curr : min); 
  const avg = (arr.reduce((count, curr) => count + curr))/arr.length
  const pembulatan = avg.toFixed(2) 

  console.log("Nilai maks: ", rsMax);
  console.log("Nilai min: ", rsMin);
  console.log("Nilai avg: ", pembulatan)
}

const nums = [5, 15, 8, 70, 35, 97];
minMax(nums);

// sort method
function findMinMax(arr){
  const resMax = arr.sort((a, b) => a - b);
  const avg = (arr.reduce((count, curr) => count + curr))/arr.length
  const pembulatan = avg.toFixed(2)

  console.log("Nilai maks :", resMax[arr.length -1])
  console.log("Nilai min : ", resMax[0])
  console.log("Nilai avg: ", pembulatan)
}

findMinMax([5, 15, 8, 70, 35, 97])

