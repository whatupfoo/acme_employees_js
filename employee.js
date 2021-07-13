console.clear()
const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
]

const findEmployeeByName = (string, array) => {
  const result = array.filter(elem => elem.name === string)
  return result[0]
}

//console.log(findEmployeeByName('moe', employees))

function findManagerFor (func,array) {
  let managerId = func.managerId
  const manager = array.filter(elem => elem.id === managerId)
  return manager[0]
}

//console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }

const findCoworkersFor = (func,array) => {
  let coworkersManagerId = func.managerId
  const coworkers = array.filter(elem => elem.managerId === coworkersManagerId)
  console.log(coworkers)
}

console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));/*
