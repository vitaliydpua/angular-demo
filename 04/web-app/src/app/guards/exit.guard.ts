import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface ExitCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class ExitGuard implements CanDeactivate<ExitCanDeactivate> {
    canDeactivate(component: ExitCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       return component.canDeactivate ? component.canDeactivate() : true
    }

}