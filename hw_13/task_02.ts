// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}. 
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище. 
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ. 
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище 
//     Если на вход подан объект с айди - запушить его в хранилище 
//     Для типизации используйте Utility Types 
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден 
//   - getAll(), возвращает все объекты в хранилище 


class NewStorage<T extends { id: number } & Partial<Record<string, unknown>>> { // или заэкстэндить интерфейс IUser {id: number; [key: string]: unknown;}
    private array: T[] = []; //приватный массив
    constructor(optionalItem?: T[]) { //constructor должен принимать необзятельный массив объектов соответствующего типа
        if (optionalItem) {
            this.array.push(...optionalItem);
        }
    }

    //   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ. 
    //     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище 
    //     Если на вход подан объект с айди - запушить его в хранилище 
    //     Для типизации используйте Utility Types 

    add(item: T): void; //метод принимает объект типа Т
    add(item: Omit<T, "id">): void; //метод принимает объект типа Т без id
    add(item: T | Omit<T, "id">): void { //реализация метода
        if ("id" in item) { //если ключ id есть в пришедшем {}
            this.array.push(item as T); //запушили {} в приватный []
        }
        else {
            const itemWithId = { id: this.generateNewId(), ...item } as T;
            this.array.push(itemWithId);
        }
    }

    //генерация нового id
    private generateNewId(): number { //сделаем приватным - не наследуемый и обращаемся только в этом классе 
        return this.array.length > 0 ? Math.max(...this.array.map(el => el.id)) + 1 : 1 //
        //... - разворачиваем эл-ты массива и передаем как отд.аргументы, map - созд.новый [] из значений по ключу id, ищем максимум и +1
    }

    //   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
    update(item: Pick<T, 'id'> & Partial<T>): void { //типы объединяются через &
        const index = this.array.findIndex(el => el.id === item.id); //нашли индекс {} c id
        if (index !== -1) {
            this.array[index] = { ...this.array[index], ...item };//перезапишет повторяющиеся значения по ключам
        }
        else throw new Error(`object with id ${item.id} not found`);
    }
    //   - remove, принимающий на вход id и удаляющий объект из массива
    remove(id: number): void {
        const index = this.array.findIndex(el => el.id === id);
        if (index !== -1) {
            this.array.splice(index, 1);
        }
        else throw new Error(`object with id ${id} not found`);
    }
    //   - getById(id), возвращающий объект по айди если найден 

    getById(id: number): T { // вернем {} типа T
        const findedObjectById = this.array.find(el => el.id === id)
        if (findedObjectById) {
            return findedObjectById;
        }
        else throw new Error(`object with id ${id} not found`);
    }
    //   - getAll(), возвращает все объекты в хранилище 

    getAll(): T[] {
        return this.array;
    }
}

const storage = new NewStorage();
storage.add({ id: 1, name: 'Elena' }); //{} c id 
storage.add({ name: 'Marat', age: 4 });//{} без id 

storage.update({ id: 1, name: 'Elena', age: 31 });
storage.update({ id: 2, name: 'Evgeniy', age: 35 });

storage.remove(2);
console.log(storage.getById(1));

console.log(storage.getAll());