import { Component, Input } from "@angular/core";

@Component({
 selector: "app-lista-albuns",
 templateUrl: "./lista-albuns.component.html"
})
export class ListaAlbunsComponent {
 @Input() titulo = "";
}
