import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Motif } from './models/motif.model';
import { MotifService } from './services/templates.service';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  motifs$: Observable<Motif[]>;
  displayedColumns: string[] = ['title'];


  constructor(public motifService: MotifService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.motifs$ = this.motifService.getMotifs();
  }

}
