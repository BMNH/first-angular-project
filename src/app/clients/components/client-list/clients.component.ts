import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { ClientStoreService } from '../../store/client-store.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  _clients$: Observable<Client[]>;
  client$: Observable<Client[]>;
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'createAt', 'edit', 'delete'];

  clientForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.min(13)])
  });

  constructor(public clientService: ClientService, private router: Router, public clientStore: ClientStoreService) {
    this.clientStore.clientsRequest();
    this._clients$ = this.clientStore.selectClients();

  }

  ngOnInit(): void {

  }

  ngAfterContentInit() {
  }

  deleteClient(client: Client): void {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    } as any)
      .then((result) => {
        if (result.value) {
          this.clientStore.deleteClient(client)
        }
      })
  }
}
