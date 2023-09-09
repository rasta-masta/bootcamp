//no.02
function toStr(arr) {
  const res = arr.join(' ')
  console.log(res)
}

const a = ['welcome..!', 'selamat', 'datang', 'di Purwadika']
a.push('and')
toStr(a);

//no.3
function toArr(text){
  const res = text.split(' ')
  console.log(res)
}

let b = "selamat bergabung" 
toArr(b);