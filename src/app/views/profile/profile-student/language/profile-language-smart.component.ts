import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStore } from 'src/app/shared/models/store.interface';
import * as UserSelector from '../../../../shared/state/user/selectors/user.selector';
@Component({
  selector: 'app-profile-account-smart',
  template: `<app-profile-language
    [user]="users$|async"></app-profile-language>`,
  
})
export class ProfileLanguageSmartComponent implements OnInit {
  public users$: Observable<any> = this.store$.select(UserSelector.selectAll);
  
  constructor(private store$: Store<AppStore>) { }
  
  ngOnInit() {
  
  }

}
