/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

import { MessageService } from '../message.service';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ],
            providers: [ MessageService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display an h1', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Erdiko User Admin');
    });

    it('should display an ul element with 2 links', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelectorAll('ul')).toBeTruthy();
        expect(compiled.querySelectorAll('ul li').length).toBe(3);
    });

});
