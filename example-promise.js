//function getTempCallback(location, callback) {
//  callback(undefined, 78);
//  callback('city not found');
//}//

//getTempCallback('Philadelphia', function (err, temp) {
//  if (err) {
//    console.log('error',err);
//  } else {
//    console.log('success', temp);
//  }
//});//

//function getTempPromise (location) {
//  return new Promise(function(resolve, reject){
//    setTimeout(function () {
//      resolve(79);
//      reject('City not found');
//    }, 1000);
//  });
//}
//getTempPromise('Philadelphia').then(function (temp) {
//  console.log('Promise success', temp);
//}, function(err){
//  console.log('Promise error', err);
//})

//Challenge Area
function addPromise (a,b){
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
  resolve(a+b);
}else {
 reject('not numbers');
    }
  });
}


addPromise(3,2).then(function(sum) {
  console.log('success', sum);
}, function(err) {
  console.log('err', error);
});

addPromise("a",2).then(function(sum) {
  console.log('this shouldn\'t show up');
}, function(err) {
  console.log('err', err);
});
