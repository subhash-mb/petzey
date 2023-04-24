import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddDoctorComponent } from './add-doctor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AddVetService } from '../../services/add-vet.service';

describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDoctorComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [AddVetService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add vet', () => {
    const fixture = TestBed.createComponent(AddDoctorComponent);
    fixture.detectChanges();
    const vetData = fixture.nativeElement;
    expect(vetData.querySelector('.page-title').textContent).toContain(
      'Add Vets'
    );
  });

  
  it('should validate the length of the short biography', () => {
    const formControl = new FormControl(
      // contains characters more than 250
      'diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum',
      [Validators.maxLength(250)]
    );
    expect(formControl.valid).toBe(false);
    formControl.setValue(
      // contains Characters less than 250
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris eros.'
    );
    expect(formControl.valid).toBe(true);
  });


});

