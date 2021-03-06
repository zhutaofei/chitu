interface HammerRecognizerOptions {
    direction?: number;
    domEvents?: boolean;
    threshold?: number;
    enable?: boolean;
}

interface Point {
    x: number,
    y: number
}

interface PanEvent extends Event {
    angle: number
    center: Point
    changedPointers: Array<any>
    deltaTime: number
    deltaX: number
    deltaY: number
    direction: number
    distance: number
    eventType: number
    isFinal: boolean
    isFirst: boolean
    offsetDirection: number
    pointerType: string
    pointers: Array<any>
    rotation: number
    scale: number
    srcEvent: TouchEvent
    target: HTMLElement
    timeStamp: number
    type: string
    velocity: number
    velocityX: number
    velocityY: number
}
// 

// 
// declare class Hammer {
// 
//     static INPUT_START: number;
//     static INPUT_MOVE: number;
//     static INPUT_END: number;
//     static INPUT_CANCEL: number;
// 
//     static STATE_POSSIBLE: number;
//     static STATE_BEGAN: number;
//     static STATE_CHANGED: number;
//     static STATE_ENDED: number;
//     static STATE_RECOGNIZED: number;
//     static STATE_CANCELLED: number;
//     static STATE_FAILED: number;
// 
//     static DIRECTION_NONE: number;
//     static DIRECTION_LEFT: number;
//     static DIRECTION_RIGHT: number;
//     static DIRECTION_UP: number;
//     static DIRECTION_DOWN: number;
//     static DIRECTION_ALL: number;
//     static DIRECTION_HORIZONTAL: number;
//     static DIRECTION_VERTICAL: number;
// 
//     static Pan: (options?: HammerRecognizerOptions) => Recognizer;
// 
//     constructor(element: HTMLElement);//, options: Object = undefined
//     constructor(element: HTMLElement, options: Object);//, options: Object = undefined
//     
//     element: HTMLElement;
//     handlers: { [idnex: string]: Array<Function> };
//     input: TouchInput;
// 
//     on(event: string, callback: (event: any) => void);
//     'get'(recognizer: string): Recognizer;
//     add(recognizer: Recognizer);
// 
// }
// 
// declare class TouchInput {
//     callback: (manager, eventType, input) => void
//     domHandler: (ev) => void;
//     element: HTMLElement;
//     evTarget: string;
// }
// 
// 
// 

declare module Hammer {
    const INPUT_START: number;
    const INPUT_MOVE: number;
    const INPUT_END: number;
    const INPUT_CANCEL: number;

    const STATE_POSSIBLE: number;
    const STATE_BEGAN: number;
    const STATE_CHANGED: number;
    const STATE_ENDED: number;
    const STATE_RECOGNIZED: number;
    const STATE_CANCELLED: number;
    const STATE_FAILED: number;

    const DIRECTION_NONE: number;
    const DIRECTION_LEFT: number;
    const DIRECTION_RIGHT: number;
    const DIRECTION_UP: number;
    const DIRECTION_DOWN: number;
    const DIRECTION_ALL: number;
    const DIRECTION_HORIZONTAL: number;
    const DIRECTION_VERTICAL: number;

 
    // 

    // 
    class Recognizer {
        'set'(options: HammerRecognizerOptions);
        state: number;
    }

    class TouchInput {
        callback: (manager, eventType, input) => void
        domHandler: (ev) => void;
        element: HTMLElement;
        evTarget: string;
    }

    class Manager {
        constructor(element: HTMLElement);//, options: Object = undefined
        constructor(element: HTMLElement, options: Object);//, options: Object = undefined
    
        element: HTMLElement;
        handlers: { [idnex: string]: Array<Function> };
        input: TouchInput;

        on(event: string, callback: (event: any) => void);
        'get'(recognizer: string): Recognizer;
        add(recognizer: Recognizer);
    }

    class Pan extends Recognizer {
        constructor(options?: HammerRecognizerOptions);
    }
}

declare module 'hammer' {

    export = Hammer;
}

