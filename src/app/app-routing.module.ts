import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AreaDoAlunoComponent } from './components/area-do-aluno/area-do-aluno.component';
import { CadastramentoComponent } from './components/cadastramento/cadastramento.component';
import { CadastramentoComSucessoComponent } from './components/cadastramento-com-sucesso/cadastramento-com-sucesso.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { FaqComponent } from './components/faq/faq.component';
import { IconesInferiorDireitoComponent } from './components/icones-inferior-direito/icones-inferior-direito.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuLateralComItensComponent } from './components/menu-lateral-com-itens/menu-lateral-com-itens.component';
import { PoliticaDeSegurancaComponent } from './components/politica-de-seguranca/politica-de-seguranca.component';
import { PortalAprendizComponent } from './components/portal-aprendiz/portal-aprendiz.component';
import { SobreOPortalComponent } from './components/sobre-oportal/sobre-oportal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'areaAluno', component: AreaDoAlunoComponent },
  { path: 'cadastramento', component: CadastramentoComponent },
  { path: 'cadastramentoSucesso', component: CadastramentoComSucessoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'politica', component: PoliticaDeSegurancaComponent },
  { path: 'portalAprendiz', component: PortalAprendizComponent },
  { path: 'sobrePortal', component: SobreOPortalComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
