import {animate, state, style, transition, trigger} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [

    state('show', style({
    })),
    transition('void => show', [ // void для отсутствующих элементов в доме
        style({
            opacity: 0
        }), animate(500, style({
            opacity: 1
        }))
    ]),
    transition('show => void',
       animate(500, style({
           opacity: 0
       })) )
]);

export const clickedDiv =  trigger('clickedDiv', [
    state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
    })),
    state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
    })),
    state('active', style({
        backgroundColor: 'orange',
        width: '170px',
        height: '170px'
    })),
    transition('start <=> end', animate(800)),
    transition('start => active', animate(400)),
    transition('active => end', animate(400))
]);

export const multi = trigger('multi', [
    state('start', style({
        width: '150px',
        height: '150px',
        border: '5px solid black'
    })),
    state('end', style({
        width: '170px',
        height: '170px',
        background: 'blue'
    })),
    transition('start <=> end', [
        style({
            background: 'red'
        }),
        animate(1500, style({
            background: 'yellow'
        })),
        animate(1000, style({
            width: '200px',
            height: '200px',
        }))
    ])
]);
