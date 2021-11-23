import { Component, Input } from "@angular/core";
import { Album } from "src/app/models/album.model";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html"
})
export class AlbumComponent {
  @Input() album = {} as Album;
}
