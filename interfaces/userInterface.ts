export interface IUser{
    id: number
    name: string
    username: string
    email: string
    address: { // якщо нам буде потріьно окремо адрес то можна винести в Interface, а потім назву інтерфейсу добавити замість вулиці і тд
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
}