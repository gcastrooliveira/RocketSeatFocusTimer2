import {controls, bgSoundsControl} from './elements.js';
import * as actions from './actions.js'

export function registerControls(){
    controls.addEventListener('click', (event) => {

        //pega o valor do atributo 'data-action' lá do HTML
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function")
            return

        //executa a função cujo nome foi puxado do dataset acima
        actions[action]();

    })

    bgSoundsControl.addEventListener('click', actions.toggleMusic)
}