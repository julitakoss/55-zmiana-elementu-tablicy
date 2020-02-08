const tab = [24,1,34];
syf(tab);
function syf(qr){
    if (qr[0] > 10) {
        qr[0] = 5;     
    }
    if (qr[1] > 10){
        qr[1] = 5;
    }
    if (qr[2] > 10){
        qr[2] = 5;
    }
    console.log(qr);
}
