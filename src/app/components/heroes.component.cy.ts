import { HeroesComponent } from "./heroes.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { HEROES } from "../models/mock-heroes";
import { Hero } from "../models/hero";


describe('HeroesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  it('can mount', () => {
    cy.mount(HeroesComponent);
  })
  
})


       
