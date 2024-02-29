components inside Module
main.ts

BASIC COMMANDS
----------------
1. project creation - ng new app-name
2. project run - ng s -o
3. component creation - ng g c component-name
4. service creation- ng g s service-folder/service-name
5. routing enabled user module creation : ng g m users --route users --module app.module
6. creating pipe: ng g p pipe-folder
7. Installation of ANgular Material:ng add @angular/material


BASIC CONCEPTS
-----------------

1.Module- root module:used to hold components
2.components: part of UI,combination of ts file,html file,css file,Root component- App component
3.Set up path for component - use routing-module.ts file
    -use Routes array, specify path of each component as an object in the array
    -use router-outlet selector in root component- used to switch component template according to the user requested path.
4.Data binding: Data sharing within a component
    -one way binding
        -ts(component) to html(view)
            -String interpolation : use {{class property}} in html
            -property binding : [attribute]="class property" in html
        -html(view) to ts(component)
            -event binding:(event-name)="function call()"
            -event binding using $event : (event-name)="function call($event)" in html
            - event binding using template reference variable: #variable-name in html,
            in html if we use #ex in one place then to get that data no need to use #,just ex
    -Two way binding: using ngModel Directives
        -Import FormsModule to Module file(app.module.ts=>type in imports:{}), then use [(ngModel)]="class-property
        (ngModel) handles input tag of form
5.Angular Directive: are classes that add additional behavior to html elements
    (Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.)
   -Prebuilt Directives
        -component directive: component selector used to display component template
        -ngModel Directive: used to manage form input controls
        -ngForm directive - used to mangae form
        -Structural Directive: used to add/remove elements from angular app
            - *ngIf="condition"
            - *ngFor="let array-item of array-name" (map function/ForEach) 
6.Dependency Injection : When two classes are dependent then one clas can access other properties and functions,
 it should provide in constructor- constructorin ts file befor functions(impppp)
    -syntax: access-specifier(private) variable-name:dependent-class-name(Router)
     
     between a component and any type of class in that component
     not between 2 components

7.Angular services: To share common logic with all component

8.Angular Forms
    -Template driven form (inside html-validation and all)
      directive-ngForm
    -Model driven form

9.Handling Asynchronous function: RxJS Library
    -observable-
        -subscribe(callback/observer object) : resolves state
    -API call : use http methods in httpClient class (API CALL)
            - Import HttpClientModule to your Module file

10   

11.Angular Pipes: used to transform input to another data 
12.Parent Child Communication
13:Angular Guards: ng g g guard-folder/guard
