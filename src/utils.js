export function wrapper(content='', tag = "div", style = '') {
    return ` <${tag} class="" style="${css(style)}">${content} </${tag}>`
}

export function css(styles = {}) {
   if(typeof styles==='string') return styles
    return Object.keys(styles).map(keys =>
        `${keys}: ${styles[keys]}`
    ).join(';');
}