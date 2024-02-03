import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){

    state.isRunning = document.documentElement.classList.toggle('running');

    //inicia o timer
    timer.countdown();

    //tocar o som dos botões
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    resetButtons();

    sounds.buttonPressAudio.play()
}

export function addTime(){
    sounds.buttonPressAudio.play()
    timer.updateDisplay(Number(el.minutes.textContent) + 5, Number(el.seconds.textContent));
}

export function decreaseTime(){
    //se falta menos de 5 minutos ao clicar em menos, define como zero
    let minute = Number(el.minutes.textContent) - 5 < 0 ? 0 : Number(el.minutes.textContent) - 5

    sounds.buttonPressAudio.play()
    timer.updateDisplay(minute, Number(el.seconds.textContent));
}

export function toggleMusic(e){
    const btn = e.target.classList
    if(e.target.id != 'bgSoundsControl'){
        sounds.stopAll()
        if(btn.contains('playing')){
            btn.remove('playing')
        }else{
            resetButtons();
            btn.toggle('playing')
        }
    }

    switch (e.target.dataset.action){
        
        case 'toggleForestAudio':
            if(btn.contains('playing'))
                sounds.forestAudio.play();
            break
        
        case 'toggleRainAudio':
            if(btn.contains('playing'))
                sounds.rainAudio.play();
            break

        case 'toggleCafeteriaAudio':
            if(btn.contains('playing'))
                sounds.cafeteriaAudio.play();
            break

        case 'toggleFireplaceAudio':
            if(btn.contains('playing'))
                sounds.fireplaceAudio.play();
            break
    }

}

    function resetButtons(){
        for(let f of document.querySelectorAll('.playing')){
            f.classList.remove('playing')
        }
    }