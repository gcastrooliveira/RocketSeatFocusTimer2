export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')

export const forestAudio = new Audio('./assets/forestAudio.wav')
export const rainAudio = new Audio('./assets/rainAudio.wav')
export const cafeteriaAudio = new Audio('./assets/cafeteriaAudio.wav')
export const fireplaceAudio = new Audio('./assets/fireplaceAudio.wav')

forestAudio.loop = true
rainAudio.loop = true
cafeteriaAudio.loop = true
fireplaceAudio.loop = true

export function stopAll(){
    forestAudio.pause();
    rainAudio.pause();
    cafeteriaAudio.pause();
    fireplaceAudio.pause();
}