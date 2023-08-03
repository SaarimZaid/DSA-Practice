function timeConversion(s) {
    let str = s.split(':');
    let hour = parseInt(str[0]);
    let time = str[2][2];
    if(hour === 12 && time === 'P'){
        let convertedTime = [];
        for(let i=0;i<s.length-2;i++){
            convertedTime.push(s[i]);
        }
        return convertedTime.join('');
    }else if(hour === 12 && time === 'A'){
        let convertedTime = ['00:',str[1],':',str[2].slice(0, 2)];
        return convertedTime.join('');
    }
    else if(time === 'P'){
        hour = 12 + hour;
        let convertedTime = [hour,":",str[1],":",str[2].slice(0, 2)];
        return convertedTime.join('');
    }else{
        return s.slice(0, 8)
    }
}

console.log(timeConversion('12:01:00PM'))