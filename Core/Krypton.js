
let root;
let root_template;
// method to render template to dom 
 export let renderDom=(root_id,template)=>{
root_template=template;
root=document.getElementById(root_id);
root.innerHTML=root_template;
}

// setstate method 
export let setState=(template)=>{
    let updateState=template;
    template=updateState;
    update_ui_state();
}

function update_ui_state(){
    renderDom(root,root_template);
}