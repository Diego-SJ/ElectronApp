const electron = require('electron')

const ipc = electron.ipcRenderer

const uiGraphic = document.getElementById('uiGraphic');
const uiAboutPm = document.getElementById('uiAboutPm');
const uiAboutApp = document.getElementById('uiAboutApp');

uiGraphic.style.display = "block";
uiAboutPm.style.display = "none";
uiAboutApp.style.display = "none";

document.getElementById('btnGraphic').addEventListener('click', () => {
    ipc.send('graphic-pm')
})
document.getElementById('btnAboutPm').addEventListener('click', () => {
    ipc.send('about-pm')
})
document.getElementById('btnAboutApp').addEventListener('click', () => {
    ipc.send('about-app')
})
document.getElementById('btnExitApp').addEventListener('click', () => {
    ipc.send('exit-application')
})


ipc.on('uiGraphic', () => {
    uiGraphic.style.display = "block";
    uiAboutPm.style.display = "none";
    uiAboutApp.style.display = "none";
})
ipc.on('uiAboutPm', () => {
    uiGraphic.style.display = "none";
    uiAboutPm.style.display = "block";
    uiAboutApp.style.display = "none";
})
ipc.on('uiAboutApp', () => {
    uiGraphic.style.display = "none";
    uiAboutPm.style.display = "none";
    uiAboutApp.style.display = "block";
})

const amplitude = document.getElementById("range_portadora");
const val_amp = document.getElementById("a_am");
amplitude.addEventListener("change", setValAmpl);
function setValAmpl(){
    console.log(parseInt(amplitude.value));
    val_amp.value = parseInt(amplitude.value);
}

const frecunency = document.getElementById("range_moduladora");
const val_fre = document.getElementById("f_am");
frecunency.addEventListener("change", setValFrec);
function setValFrec(){
    console.log(parseInt(frecunency.value));
    val_fre.value = parseInt(frecunency.value);
}

const periodos = document.getElementById("range_modulada");
const val_p = document.getElementById("p_pm");
periodos.addEventListener("change", setValPer);
function setValPer(){
    console.log(parseInt(periodos.value));
    val_p.value = parseFloat((periodos.value)/10000);
}