import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
    public errors: string[] = [];
  
    public AboutUsText: string;

    constructor(public router: Router, public route: ActivatedRoute) { }

    public register(): void {
        /*this.accountService.register(model)
            .subscribe((res: Response) => {
                this.router.navigate(['../registerconfirmation'], { relativeTo: this.route, queryParams: { emailConfirmed: true } });
            },
            (errors: string[]) => {
                this.errors = errors;
            });
        */
    };

    public ngOnInit() {

        this.AboutUsText = "888 Philippines Software Development, Inc. offers a wide range of outsourced alternative solutions, systems and integrated IT and human resource services. These services are premised on the principles of quality and competence.";
        
    }

}
