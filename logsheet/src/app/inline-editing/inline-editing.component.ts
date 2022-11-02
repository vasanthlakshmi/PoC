import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css'],
  providers:[DatePipe]
})

export class InlineEditingComponent implements OnInit {
  myDate = new Date();

  //  Mon!: 8;
  // Tue!: 8;
  TotalHours!:any;
  constructor(public datepipe: DatePipe) { 

  }

  logdata =[
    {
      "id":1,
      "ProjectID": "PRJ1",
      "TaskID": "Tsk1",
      "WorkingHours": "Regular",
       Mon: 8,
       Tue: 8,
      Wed: 8,
      Thu: 8,
      Fri: 8,
      Sat: 0,
      Sun: 0,
      TotalHours: 8 + 8 + 8 + 8 + 8 + 0 + 0,
      //TotalHours: Mon + Tue + Wed + Thu + Fri + Sat + Sun,

      //TotalHours: +this.Mon + +this.Tue,

      // "TotalHours": "Mon"+"Tue"+"Wed"+"Thu"+"Fri"+"Sat"+"Sun",
      "Comments": "",
      "isEdit": false

    },
    {
      "id":2,

      "ProjectID": "PRJ2",
      "TaskID": "Tsk1",
      "WorkingHours": "Regular",
      "Mon": "",
      "Tue": "",
      "Wed": "",
      "Thu": "",
      "Fri": "",
      "Sat": "",
      "Sun": "",
      "Total Hours": "",
      "Comments": "",
      "isEdit": false

    },
    {
      "id":3,

      "ProjectID": "PRJ2",
      "TaskID": "Tsk2",
      "WorkingHours": "Regular",
      "Mon": "",
      "Tue": "",
      "Wed": "",
      "Thu": "",
      "Fri": "",
      "Sat": "",
      "Sun": "",
      "Total Hours": "",
      "Comments": "",
      "isEdit": false

    },
    {
      "id":4,

      "ProjectID": "PRJ1",
      "TaskID": "Tsk2",
      "WorkingHours": "Regular",
      "Mon": "",
      "Tue": "",
      "Wed": "",
      "Thu": "",
      "Fri": "",
      "Sat": "",
      "Sun": "",
      "Total Hours": "",
      "Comments": "",
      "isEdit": false

    },
  ]


  ngOnInit(): void {
  }
  onEdit(item:any){
item.isEdit = true;
  }
  
}
