class Browserhistory{
    constructor(){
        this.history = [];
    }
    visit (page){
        this.history.push(page)
    }
      back() {
        return this.history.pop();
    }
    showHistory(){
        console.log(this.history)
    }
}

let browser = new Browserhistory()

browser.visit("ram")
browser.visit("Hello this Ramakrishna")
browser.visit("name of my startup")
browser.showHistory()
console.log(browser.back())
browser.showHistory()
