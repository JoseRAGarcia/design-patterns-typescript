import MyDatabaseFunction from "./db/MyDatabaseFunction"
import './module_a'

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({name: 'Roberto', age: 30})
myDatabaseClassic.add({name: 'Joana', age: 50})
myDatabaseClassic.add({name: 'Luiza', age: 25})
myDatabaseClassic.show()
