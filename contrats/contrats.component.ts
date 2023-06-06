import { Component } from '@angular/core';
import { ContratService } from '../services/contrats/contrat.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css'],
})
export class ContratsComponent {
  tabAllContratcts: any;
  constructor(private all_Contracts: ContratService) {}
  public ngOnInit(): void {
    this.getAllContracts();
  }
  public getAllContracts() {
    this.tabAllContratcts = this.all_Contracts.contrats;
  }
}
