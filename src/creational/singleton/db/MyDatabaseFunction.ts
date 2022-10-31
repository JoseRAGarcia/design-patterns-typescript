import IUser from "../interfaces/IUser"

const MyDatabaseFunction = (function () {
    const users: IUser[] = []
    return {
        add(user: IUser): void {
            users.push(user)
        },

        remove(index: number): void {
            users.splice(index, 1)
        },

        show(): void {
            users.forEach(user => {
                console.log(user);
            })
        }
    }
})()

export default MyDatabaseFunction
