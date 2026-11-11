const { prisma } = require("../prisma/prisma-client");

/*
* @route GET /api/employees
* @desc Получение всех сотрудников
* @access Public
*/
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            message: 'Неудалось получить сотрудников',
        })
    }
}

/*
* @route GET /api/employees/singe
* @desc Получение одного сотрудника
* @access Public
*/
const single = async (req, res) => {
    console.log('get singe employees')
}

/*
* @route POST /api/employees/add
* @desc Добавление сотрудника
* @access Public
*/
const add = async (req, res) => {
    try {
        const data = req.body;
        if(!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({
                message: "Все поля обязательны"
            })
        }
        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id,
            }
        })

        return res.status(201).json(employee)
    } catch (error) {
        console.error('add employee error:', error);
        res.status(500).json({
            message: 'Неудалось добавить сотрудника',
        })
    }
}

/*
* @route POST /api/employees/remove
* @desc Логин
* @access Public
*/
const remove = async (req, res) => {
    console.log('remove employee')
}


/*
* @route POST /api/employees/edit
* @desc Логин
* @access Public
*/
const edit = async (req, res) => {
    console.log('edit employee')
}

module.exports = {
    all,
    add,
    single,
    remove,
    edit
}