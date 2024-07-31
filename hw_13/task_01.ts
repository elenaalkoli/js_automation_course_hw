// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
    name: string,
    salary: number,
    isManager: boolean
};

const QA: IEmployee = {
    name: 'Elena',
    salary: 1000,
    isManager: false,
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей EmployeeKeys (использовать keyof)

type EmployeeKeys = keyof IEmployee; // тип, состоящий из ключей интерфейса EmployeeKeys "name" | "salary" | "isManager"

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA (использовать keyof и typeof)

type QaKeys = keyof typeof QA; // typeof QA => будет тип из QA = {name: string; salary: number; isManager: boolean}
// keyof typeof QA => типизациция по ключам {}

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof QA; //{name: string; salary: number; isManager: boolean}

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type OptionalType = Partial<IEmployee>; //можно передать например только {name: string},  и все

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameAndSalaryType = Pick<IEmployee, "name" | "salary">;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type AllExceptIsManager = Omit<IEmployee, "isManager">;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type ReadonlyFields = Readonly<IEmployee>;

// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

type ArrayOfObjects = { [key: string]: number | string | boolean }[];