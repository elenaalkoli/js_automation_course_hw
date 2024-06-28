/* 
Task 2
Перед вами структура компании, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
*/

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/*
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
Пример:
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/
console.log("-------------------task_1-------------------")

function structureOfCompany(array) {
  array.forEach((enterprise) => {
    const totalEmployees = enterprise.departments.reduce((sum, { employees_count }) => sum + employees_count, 0);
    if (totalEmployees === 0) {
      console.log(`${enterprise.name} (нет сотрудников)`)
    }
    else {
      console.log(`${enterprise.name} (${totalEmployees} сотрудников)`)//или (`(${totalEmployees === 0 ? "нет" : totalEmployees} сотрудников)`);
    };
    enterprise.departments.forEach((department) => {
      if (department.employees_count === 0) {
        console.log(`- ${department.name} (нет сотрудников)`); //или (`(${department.employees_count === 0 ? "нет" : department.employees_count} сотрудников)`);
      } else {
        console.log(`- ${department.name} (${department.employees_count} сотрудников)`)
      };
    })
  })
}

structureOfCompany(enterprises);


/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/
console.log("-------------------task_2-------------------")

function getEnterpriseName(nameOrId) {
  if (!nameOrId) {
    return console.log("Please, provide a valid id or name")
  }
  for (let object of enterprises) {
    if (object.departments.find((department) => (department.name === nameOrId || department.id === nameOrId))) {
      return object.name;
    };
  }
};
console.log(getEnterpriseName("Отдел тестирования"));
console.log(getEnterpriseName(7));

/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")
*/
console.log("-------------------task_3-------------------")

function addNewEnterprise(name) {
  let newDepartment = {
    id: getLastId(),
    name,
    departments: null
  };
  return [...enterprises, newDepartment];
}

function getLastId() {
  let id = 0;
  enterprises.forEach((object) => {
    if (object.id > id) {
      id = object.id;
    }
    object.departments.forEach((department) => {
      if (department.id > id) {
        id = department.id;
      }
    })
  })
  return id += 1;
}

console.log(addNewEnterprise("Elena's department"))


/*
4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела")
*/

console.log("-------------------task_4-------------------")

function addNewDepartment(id, depName) {
  const foundedDepartment = getNewDepartmentById(id);
  const newDepartment = createNewDepartmentByName(depName);
  foundedDepartment.departments.push(newDepartment);
  return foundedDepartment.departments;
}

function getNewDepartmentById(id, depName) { //найти по id департамент
  const foundedDepartment = enterprises.find((object) => object.id === id);
  if (!foundedDepartment) {
    console.log(`No department found by id: ${id}`);
  }
  return foundedDepartment;
}

function createNewDepartmentByName(name) { //создание нового департамента
  const newDepartment = {
    id: getLastId(),
    name,
    employees_count: null,
  }
  return newDepartment;
}

console.log(addNewDepartment(5, "Elena's department"))

/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")
*/
console.log("-------------------task_5-------------------")

function editDepartmentName(id, newDepName) {
  foundedDepartment = enterprises.find((object) => object.id = id);
  foundedDepartment.name = newDepName;
  return foundedDepartment;
}
editDepartmentName(1, "Новое название предприятия")
console.log(enterprises)

/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")
*/
console.log("-------------------task_6-------------------")

// вынесу отдельно ф - цию поиска департамента по id
function getDepartmentById(id) {
  for (const object of enterprises) {
    const foundDept = object.departments.find((department) => department.id === id);
    if (foundDept) {
      return foundDept;
    }
  }
  return console.log(`No department found by id: ${id}`);
};

function editDepartment(id, newEnterpName) { //присваиваем ему newEnterpName
  const foundedDepartment = getDepartmentById(id);
  foundedDepartment.name = newEnterpName;
};

editDepartment(6, "Elena's department")
console.log(...enterprises)

/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)
*/
console.log("-------------------task_7-------------------")

function deleteEnterprise(id) {
  const newEnterprises = enterprises.filter((object) => object.id !== id); //новый массив
  return console.log(newEnterprises);
}
deleteEnterprise(1)

/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3)
*/
console.log("-------------------task_8-------------------")

function deleteDepartment(id) {
  for (let object of enterprises) {
    const newStructure = object.departments.filter(enterprise => enterprise.id !== id && enterprise.employees_count !== 0);
    if (!newStructure) {
      return console.log(`"No department found by id: ${id}`);
    }
    return console.log(newStructure);
  }
}
deleteDepartment(10)

/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3)
*/
console.log("-------------------task_9-------------------")

function moveEmployees(idFrom, idTo) {
  const departmentFrom = getDepartmentById(idFrom); //отдел откуда переносим employees_count
  const departmentTo = getDepartmentById(idTo); //отдел куда 
  departmentTo.employees_count += departmentFrom.employees_count;
  departmentFrom.employees_count = 0;
  return console.log(...enterprises);
}
moveEmployees(2, 3)
