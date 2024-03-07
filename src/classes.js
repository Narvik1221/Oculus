import {css, wrapper} from "./utils";


export class Block{
    constructor(content, tag, style) {
        this.content =content;
        this.tag=tag;
        this.style=style;


    }
    toHtml(){
        return wrapper(this.content,this.tag,css(this.style.styles));
    }
}
