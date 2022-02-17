import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ClientFormComponent implements OnInit {
  public client: Client = {
    id: null,
    createAt: null,
    name: null,
    surname: null,
    email: null
  };
  public title: string = "create client";
  clientForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.min(13)])
  });

  constructor(private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClient()
  }

  loadClient(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clientService.getClient(id).subscribe(
          client => {
            this.clientForm = new FormGroup({
              id: new FormControl(client.id),
              name: new FormControl(client.name, Validators.required),
              surname: new FormControl(client.surname, Validators.required),
              email: new FormControl(client.email, [Validators.email, Validators.min(13)])
            });
            this.clientForm.get('name').valueChanges.subscribe(val => {
              console.log(val)
              if (val === "toto") {
                this.clientForm.get('email').setValue(null);
              }
            })
          }

        )
      }
    }
    )
  }


  public create(): void {
    if (this.clientForm.valid) {
      this.clientService.create(this.clientForm.value)
        .subscribe(
          client => {
            this.router.navigate(['/clients'])
            swal('New Client', `Client ${client.name} was created successfully`, 'success')
          }
        )
    } else {
      swal('Invalid', `Please validate the form`, 'warning')

    }
  }

  updateCLient(): void {
    if (this.clientForm.valid) {
      this.clientService.updateClient(this.clientForm.value)
        .subscribe(client => {
          this.router.navigate(['/clients'])
          swal('Client Updated', `The client ${client.name} was updated successfully`, 'success')
        })
    } else {
      swal('Invalid', `Please validate the form`, 'warning')

    }

  }


}
