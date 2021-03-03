import food from "../img/food.jpg"
import todolist from "../img/todolist.jpg"
import bank from "../img/bank.jpg"
import portfolio from "../img/portfolio.jpeg"

const projects=[
    {
        id: 1,
        category: 'web development',
        link1: 'https://gitcoder-pawan.github.io/todolist/',
        link2: 'https://github.com/gitcoder-pawan/todolist',
        image: todolist,
        title: 'To-do list'
    },
    {
        id: 2,
        category: 'Python',
        link2: 'https://github.com/gitcoder-pawan/Banking-System',
        image: bank,
        title: 'Banking system'
    },
    {
        id: 3,
        category: 'web development',
        link1: '/home',
        link2: 'www.github.com',
        image: portfolio,
        title: 'My Portfolio'
    },
    {
        id: 4,
        category: 'web development',
        link1: 'https://gitcoder-pawan.github.io/vrindavan_blu/',
        link2: 'https://github.com/gitcoder-pawan/vrindavan_blu',
        image: food,
        title: 'Food Website - Bakery'
    }
    
]
export default projects