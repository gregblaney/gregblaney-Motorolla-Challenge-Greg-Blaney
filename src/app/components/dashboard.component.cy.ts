import { DashboardComponent } from "./dashboard.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";


describe('DashboardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  it('can mount', () => {
    cy.mount(DashboardComponent);
  });

  it('can display text in dashboard', () => {
    cy.mount(DashboardComponent, {
      componentProperties: {
       
      }
    });
  });
});