
  let employee = {
    name: "Sam",
    streetAddress: "" }
     
function updateEmployeeWithKeyAndValue(employee, key, value){
   const newemployee = {...employee}
   newemployee[key] = value;
   return newemployee;
  }

 function destructivelyUpdateEmployeeWithKeyAndValue(newemployee, key, value){
    
    newemployee[key] = value;
    return newemployee;
  }
  const newemployee = {streetAddress:'12 Broadway', name: 'Sam' }
  //destructivelyUpdateEmployeeWithKeyAndValue(newemployee, 'streetAddress', '12 Broadway')
 // assert.deepEqual(newemployee,{streetAddress: '12 Broadway', name: 'Sam' })ite your solution in this file!
 function deleteFromEmployeeByKey(employee, key, value){
    const newemployee ={...employee}
    newemployee[key] = value;
    delete newemployee.name;
     return newemployee;
 }
 function destructivelyDeleteFromEmployeeByKey(newemployee, key, value){
    newemployee[key] = value;
     return newemployee;
 }
