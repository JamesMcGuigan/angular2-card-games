import { Component, OnInit } from '@angular/core';
import { faAngleDown }       from '@fortawesome/free-solid-svg-icons';
import { Store }             from '@ngrx/store';
import { Observable }        from 'rxjs';
import * as PlayerActions    from '../../store/player/player.actions';
import * as PlayerSelectors  from '../../store/player/player.selectors';
import { PlayerState }       from '../../store/player/player.state';
import { AppState }          from '../../store/reducers';


@Component({
  selector: 'app-user-chip-stats',
  templateUrl: './user-chip-stats.component.html',
  styleUrls: ['./user-chip-stats.component.less']
})
export class UserChipStatsComponent implements OnInit {

  faAngleDown = faAngleDown;
  user$: Observable<PlayerState>;
  showDropdown = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.user$ = this.store.select(PlayerSelectors.selectFeature);

  }
  addChips(amount: number) {
    this.store.dispatch(new PlayerActions.BuyChips(amount));
  }
}
