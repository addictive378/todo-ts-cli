import { Task } from "./task";

export class TaskManager{
    private tasks: Task[] = [];

    addTask(title: string) {
        this.tasks.push(new Task(title));
    };

    showTasks(){
        if (this.tasks.length === 0) {
            console.log("📭 Anda belum mempunyai tugas");
        } else {
            this.tasks.forEach((task, index) => {
                const status = task.isCompleted ? "✅" : "❌";
                console.log(`${index + 1}, ${status} ${task.title}`);
            });
        };
    };

    markAsDone(index: number) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markDone();
            console.log('Tugas ditandai selesai');
        } else {
            console.log('Nomor tugas tidak valid');
        };
    };

    deleteTask(index: number) {
        if (index >= 0 && index < this.tasks.length){
            this.tasks.splice(index);
            console.log('Tugas berhasil dihapus');
        } else {
            console.log('Nomor tidak valid')
        }

    }
}