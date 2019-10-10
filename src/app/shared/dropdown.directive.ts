import { Directive, HostListener, HostBinding} from '@angular/core';
@Directive({
    selector: "[dd]" 
})
export class DropdownDirective{
    private isOpen = false;
    @HostListener('click') 
    open(){
        this.isOpen = true;
    }
    @HostListener('mouseleave')
    close(){
        this.isOpen = false; 
    }
    @HostBinding('class.open')
    get opened(){
        return this.isOpen;
    }
}