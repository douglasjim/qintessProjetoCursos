import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuLateralComItensComponent } from './components/menu-lateral-com-itens/menu-lateral-com-itens.component';
import { LoginComponent } from './components/login/login.component';
import { CadastramentoComponent } from './components/cadastramento/cadastramento.component';
import { CadastramentoComSucessoComponent } from './components/cadastramento-com-sucesso/cadastramento-com-sucesso.component';
import { AreaDoAlunoComponent } from './components/area-do-aluno/area-do-aluno.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SobreOPortalComponent } from './components/sobre-oportal/sobre-oportal.component';
import { FaqComponent } from './components/faq/faq.component';
import { PoliticaDeSegurancaComponent } from './components/politica-de-seguranca/politica-de-seguranca.component';
import { PortalAprendizComponent } from './components/portal-aprendiz/portal-aprendiz.component';
import { IconesInferiorDireitoComponent } from './components/icones-inferior-direito/icones-inferior-direito.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuLateralComItensComponent,
    LoginComponent,
    CadastramentoComponent,
    CadastramentoComSucessoComponent,
    AreaDoAlunoComponent,
    CursosComponent,
    SobreOPortalComponent,
    FaqComponent,
    PoliticaDeSegurancaComponent,
    PortalAprendizComponent,
    IconesInferiorDireitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
