const p1 = "Player X's Turn !";
const p2 = "Player O's Turn !";
let turn = 1;
// let stateX = 0;
// let stateO = 0;
let stateval = [];


$(document).keypress(()=>{
    $('.turn').html(p1);
    $('.i-c').click(gameplay);
});
function firstclick(){
    $(document).trigger('keypress');
    removeEventListener('click',firstclick);
}
addEventListener('click',firstclick);


const gameplay = (event)=>{
    if($(event.currentTarget).html()===""){
        if(turn===1){
            $(event.currentTarget).html('X');
            const index = Number(event.currentTarget.id);
            // stateX = stateX + index ;
            stateval[index] = 'X';
            turn = 2;
            $('.turn').html(p2);
        }
        else{
            $(event.currentTarget).html('O');
            const index = Number(event.currentTarget.id);
            // stateO = stateO + index ;
            stateval[index] = 'O';
            turn =1;
            $('.turn').html(p1);
        }
    }
    checkState(stateval);   
}
const checkState = (s)=>{
    let winner;
    if(s[5]===s[9] && s[5]===s[1] || s[5]===s[3] && s[5]===s[7])
        winner =s[5];
    else if(s[5]===s[2] && s[5]===s[8] || s[5]===s[4] && s[5]===s[6])
        winner =s[5];
    else if(s[4]===s[2] && s[4]===s[9] || s[4]===s[3] && s[4]===s[8])
        winner =s[4];
    else if(s[6]===s[2] && s[6]===s[7] || s[6]===s[1] && s[6]===s[8])
        winner =s[6];

// console.log(winner);
    
    if(!(winner == null)){
        wins(winner);
    }
    // if(stateX===15||stateO===15)
    //     setTimeout(wins,500);
}


const wins =(winner)=>{
    $('.o-cont').hide(1000);

    $('.turn').html("Player "+winner+" wins !🥳🥳");
    console.log($('.turn').addClass('large-font'));
    $('.end-reload').show();
    $('.end-reload').click(()=>{
        location.reload();
    })
}

// Player "++" wins !🥳🥳
























// console.log($(".i-c")[0].id);

// $(".i-c").each(function(){
//     switch(this.id){
//         case "one":
//             console.log($("#one"));
//             break;
//         case "two": break;
//         case "three": break;
//         case "four": break;
//         case "five": break;
//         case "six": break;
//         case "seven": break;
//         case "eight": break;
//         case "nine": break;

//         default: console.log("Error");
//     }
// });

//     if(s[1]===s[2] && s[1]===s[3] || s[1]===s[5] && s[1]===s[9])
//     if(s[1]===s[2] && s[1]===s[3] || s[1]===s[2] && s[1]===s[3])
//     if(s[1]===s[2] && s[1]===s[3] || s[1]===s[2] && s[1]===s[3])
//     if(s[1]===s[2] && s[1]===s[3] || s[1]===s[2] && s[1]===s[3])