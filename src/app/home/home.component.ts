import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	cards = [
		{
			title: 'Projeto para algos',
			subTitle: 'Projetamos e construímos  tanques e lagos de peixes, oferecendo uma experiência única de harmonia com a natureza.',
			image: '../../assets/images/card-peixe.png',
			route: 'lago',
		},
		{
			title: 'Tanques de irrigação',
			subTitle: 'Revitalize seus projetos agrícolas com tanques equipados com geomembranas, proporcionando eficiência no manejo hídrico.',
			image: '../../assets/images/card-irrigacao.png',
			route: '',
		},
		{
			title: 'Mini escavadeira',
			subTitle: 'Execução de tarefas especializadas, desde a fundação de sapatas até a escavação precisa de tubulações para piscinas e tanques.',
			image: '../../assets/images/card-escavadeira.png',
			route: '',
		},

	];
  constructor() { }

  ngOnInit() {
  }

}
