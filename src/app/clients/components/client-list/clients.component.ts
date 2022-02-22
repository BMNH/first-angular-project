import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'createAt', 'edit', 'delete'];

  constructor(public clientService: ClientService, public clientStore: ClientStoreService) { 
    this.clientStore.clientRequest();
    this._clients$ = this.clientStore.selectClients();
  }

  ngOnInit(): void {

  }

  ngAfterContentInit() {
    this.clients$ = this.clientService.getClients();
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
          this.clientService.deleteClient(client.id)
          .subscribe(
            response => {
              console.log(this.clients$)              
              this.clients$ = this.clientService.getClients()
              swal(
                'Client deleted',
                `The client ${client.name} was updated deleted`,
                'success'
              )
            }
          )
        }
      }
      )}


}
