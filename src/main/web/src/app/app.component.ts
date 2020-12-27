import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <h1>CSV Coding Exercise</h1>
      <h2>By Ryan Colantuono</h2>
      <p>Generted using Spring Boot with Java 11. Parses CSV files with <a href="http://opencsv.sourceforge.net/">Opencvs</a>. 
      Front end built with angular 11, with the multiselect dropdown handled by <a href="https://github.com/nileshpatel17/ng-multiselect-dropdown">
      ng-multiselect-dropdown</a>. Pulling in Angular for the simple front end might have been over kill, 
      but I figured I would go with something closer to Applause's tech stack for this, and it let me pull in the multiselect directive to use. </p>
      <tester-bug-count></tester-bug-count>
    </div>
  `
})
export class AppComponent {
  title = 'Csv Coding Exercise';
}
