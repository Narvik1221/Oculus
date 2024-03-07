import {Block} from './classes'
import {css} from "./utils";

const style={
    ' font-weight': '400',
    'font-size': '36px',
    'line-height': '41px',
    'text-transform':' uppercase',
    background: 'linear-gradient(180deg, #BC10D8 0%, rgba(80, 0, 250, 0.93) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'margin': '20px',
}
const cssStyle= css(style);
export const carsList = [
    new Block('Tesla','h5',{
        tag:'h6',
        styles:{
          cssStyle
        }
    }),
    new Block('Ssmesla','h6',{
        tag:'h6',
        styles:{
            cssStyle
        }
    }),
    new Block('BMW','h1',{
        tag:'h6',
        styles:{
            cssStyle
        }
    }),

]