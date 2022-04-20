require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveData } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');


const main = async () => {

    let opt = ``;
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // CreateTask
                const desc = await readInput('Description: ');
                tasks.createTasks( desc ); 
                break;

            case '2':
                // ListTasks
                console.log(tasks.listArray);
                break;

            default:
                break;
        }

        saveData( tasks.listArray );

        await pause();

    } while (opt !== '0');
}

main();