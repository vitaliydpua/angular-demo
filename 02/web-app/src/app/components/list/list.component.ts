import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, EventEmitter, ViewChild, ContentChild, ViewChildren, ContentChildren, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';


/**
 * OnInit               - срабатывает за первым вызовом OnChanges (при создании компонента)
 * OnChanges            - когда изменяются входные св-ва
 * DoCheck              - когда срабатывает какое либо событие
 * AfterContentInit     - в шаблон включается контент, который задан между тегами
 * AfterContentChecked  - аналог DoCheck, только используется для содержимого между тегами
 * AfterViewInit        - инициализация компонентов внутри шаблона
 * AfterViewChecked     - аналог DoCheck, используется для дочерних компонентов
 * OnDestroy            - когда компонента разрушается
 */


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  items: string[];

  @Output() viewItemEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild (ItemComponent) viewChild: ItemComponent;
  @ContentChild (ItemComponent) contentChild: ItemComponent;
  @ViewChildren (ItemComponent) viewChildren;
  @ContentChildren (ItemComponent) contentChildren;

  clear() {
    
  }

  itemSelect(val: string) {
    this.viewItemEvent.emit(val);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  }
}
