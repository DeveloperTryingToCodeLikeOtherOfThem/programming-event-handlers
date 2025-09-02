//% block="program controls"
//% advanced=true
namespace programControl {
    // not used for the extension it is broken
    let _pressed = false
    /**
     * This block is used to handle events for a given source (`src`) and value (`value`),
 * optionally using `flags` to control the behavior.
     */
    //% blockId="on_event" block="on event %src %value || %flags"
    export function onEvent(src: number, value: number, handler: () => void, flags?: number) {
        control.internalOnEvent(src, value, handler)
        if (flags)
            control.internalOnEvent(src, value, handler, flags)
    }
    // this function is broken for now sorry.
    function isPressed() {
        return _pressed;
    }
     //% blockId="button event" block="%button %event"
    //% help=docs/button-events
    export function buttonEvent(button: ControllerButton, event: ControllerButtonEvent, handler: () => void) {
        onEvent(0, button, handler, 0)
    }
    // this block is private because it is a advanced used block not meant for beginners even advanced must be a dev and understand with permission before using it.
    export function _warning(warning: any) {
        throw warning
    }
 
    /**
     * making the controller to set it move a sprite or button events enabled or disabled.
     * 
     */
    // this block is marked private only for users who know what they are doing and can do advanced stuff can start using this.
    //% help=docs/user-events
    export function _setUserEventsEnabled(enabled: boolean) {
        controller._setUserEventsEnabled(enabled)
    }
}

