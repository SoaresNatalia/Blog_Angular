import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { dataFake } from '../../components/data/dataFake';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {

  @Input()
  fotoConteudo :string = '';
  @Input()
  tituloCont :string = '';
  @Input()
  textoCont :string ='';

  private id :string|null = '0'

  constructor(private route:ActivatedRoute){

  }

  ngOnInit() :void{

    //Pegando Id do Artigo que foi clicado no site para identificar onde houve o clique
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  //Recebe o Id do artigo clicado e busca as informações no Data Fake pelo Id, adiciona infos nos atributos
  setValuesToComponent(id :string|null){

    //result é um vetor na posição 0 que tem as informações
    const result = dataFake.filter( artigo => artigo.id == id)[0]


    this.fotoConteudo = result.foto
    this.tituloCont = result.titulo
    this.textoCont = result.texto


  }
}
