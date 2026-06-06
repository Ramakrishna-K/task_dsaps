class ChatQueue {
    constructor() {
        this.queue = [];
    }

    addMessage(message) {
        this.queue.push(message);
    }

    processMessage() {
        return this.queue.shift();
    }

    showQueue() {
        console.log(this.queue);
    }
}

let chat = new ChatQueue();

chat.addMessage("Hello");
chat.addMessage("Hi");
chat.addMessage("How are you?");

chat.showQueue();

console.log(chat.processMessage());

chat.showQueue();
