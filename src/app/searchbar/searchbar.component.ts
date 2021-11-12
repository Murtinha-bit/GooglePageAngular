import { Component } from "@angular/core";


@Component({
    selector:'search',
    template: `
        
        <form>
            <div>
                <img src="../../assets/search-solid.svg" alt="search" id="pesquisa">
            </div>
            <input (keydown.enter)="onEnter()" type="search" id="googlepesquisar" name="q" >
            <div>
                <img src="../../assets/keyboard-solid.svg" alt="keyboard" id="teclado">
            </div>

        </form>
    `,
    styleUrls:['./searchbar.component.scss']
})
export class SearchBarComponent {
    
    onEnter(){
        var pesquisa = (document.getElementById("googlepesquisar") as HTMLInputElement).value;
        var url=`https://www.google.com/search?q=${pesquisa}`
        window.open(url, '_blank')
    }

    
}