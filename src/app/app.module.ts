import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthModule, CoreModule, TranslateLoaderService, provideTranslations } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { provideAppConfig, provideActions, provideWidgets, provideNavigation } from '@app/sdk';
import { appSidebar } from './app.sidebar';
import { appToolbar } from './app.toolbar';
import { appConfig } from './app.config';
import { appActions } from './app.actions';
import { appWidgets } from './app.widgets';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AuthModule.forRoot({ useHash: true }),
    CoreModule.forRoot(),
    ContentModule.forRoot(),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateLoaderService }
    })
  ],
  declarations: [AppComponent],
  providers: [
    provideTranslations('app', 'assets'),
    provideNavigation(appSidebar,appToolbar),
    provideAppConfig(appConfig),
    provideActions(appActions),
    provideWidgets(appWidgets)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
  }
}
