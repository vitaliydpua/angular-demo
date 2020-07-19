import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app-ui-demo';
  someForm: FormGroup;
  public map: any = { lat: 48.460282, lng: 35.032533 };

  constructor(private formBuilder: FormBuilder) {
    /*this.someForm = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      items: new FormArray([
        new FormControl('')
      ])
    })*/

    this.someForm = formBuilder.group({
      name: ['Default name', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      age: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      items: formBuilder.array([
        ["...", Validators.required]
      ])
    })
    
    
    //подписка на изменение всех полей
    /*this.someForm.valueChanges.subscribe(v => {
      console.log(v);
    });*/
    //отслеживание изменений конкретного поля
    /*this.someForm.get('name').valueChanges.subscribe(v => {
      console.log(v);
    })*/
    //отслеживание статуса VALID
    /*this.someForm.statusChanges.subscribe(st => {
      console.log(st);
    })*/
  }

  onClickAdd() {
    console.log(this.someForm);
  }

  onClickReset() {
    //сброс всех полей
    //this.someForm.reset();

    /*let name = this.someForm.get('name').value
    this.someForm.reset({
      name: name
    });*/

    // выборочная установка новых значений
    //this.someForm.patchValue({age: 10});

    //обязательная установка новыйх значений во все поля формы
    //this.someForm.setValue({age: 10, name: 'Unknown'});
  }
  onClickAddNewItem() {
    (this.someForm.controls['items'] as FormArray).push(new FormControl("...", Validators.required));
  }

  get ctrlName() {
    return this.someForm.get('name');
  }
}
