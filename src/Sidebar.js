import {Block} from "./classes";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.el = document.querySelector(selector);
        this.update=updateCallback;
        this.init();
    }

    init() {
        this.el.insertAdjacentHTML('beforeend',this.template)
        this.el.addEventListener('submit',this.add.bind(this))

    }

    get template() {
        return block('text')
    }
    add(event){
        event.preventDefault();
        const name=event.target.name.value;
        const styles=event.target.style.value;
        let newBlock;
        newBlock=new Block(name,'div',{styles:styles});
        this.update(newBlock);
        this.el.insertAdjacentHTML('afterbegin',newBlock.toHtml());
    }

}

export function block(type) {
    return `
       <form class="form" name="${type}">
            <h5 class="form__title">${type}</h5>
            <div class="form__inner">
                <input  name="name" placeholder="name">
            </div>   
            <div class="form__inner">
                <input  name="style" placeholder="style">
            </div>      
            <button class="form__button" type="submit">Добавитб</button>
       </form>    
    `
}