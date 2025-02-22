import { TaskManager } from "./taskManager";
import * as readline from "readline-sync";

const taskManager = new TaskManager();

function mainMenu() {
    while (true) {
        console.log("\n=== To Do List ===");
        console.log("1. Tambah Tugas");
        console.log("2. Tampilkan Tugas");
        console.log("3. Tandai Tugas");
        console.log("4. Hapus Tugas");
        console.log("5. Keluar");

        const choice = readline.question("Pilih menu: ");

        switch(choice) {
            case "1":
                const title = readline.question("Masukan Nama tugas: ");
                taskManager.addTask(title);
                console.log("Tugas berhasil ditambahkan");
                break;
            case "2":
                taskManager.showTasks()
                break;
            case "3":
                taskManager.showTasks()
                const doneIndex = readline.questionInt("Masukan nomor tugas yang selesai: ");
                taskManager.markAsDone(doneIndex - 1);
                break;
            case "4":
                taskManager.showTasks()
                const deleteIndex = readline.questionInt("Masukan nomor tugas yang akan dihapus: ");
                taskManager.deleteTask(deleteIndex - 1);
                break;
            case "5":
                console.log("Keluar dari aplikasi.....")
                process.exit();
            default:
                console.log("Pilihan tidak valid")
        }
    }
}

mainMenu()