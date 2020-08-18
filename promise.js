function getAge(currentYear,birthYear){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            let age = currentYear - birthYear;
            if(age>18)
            {
                
                resolve('Major');
            }
            else{
                resolve('Minor');
            }
        }, 2000);
    })
}

function getSalaryOnAge(age)
{
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            if(age == 'Major')
            {
                resolve(25000);
            }
            else{
                reject('Minor');
            }
        },2000);
    })
}

getAge(2020,1996).then(function(age){
    return getSalaryOnAge(age);
})
.then(function(salary){
    console.log(salary);
})
.catch(function(err){
    console.error(err);
})