import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    @Input() diameter?: number;
    @Input() showText?: boolean;
    public color: string;
    public strokeWidth: number;

    constructor() {}

    ngOnInit() {
        this.color = 'primary';
        this.strokeWidth = 4;
        if (!this.diameter) {
            this.diameter = 50;
        }
        if (typeof(this.showText) === 'undefined') {
            this.showText = true;
        }
    }
}
