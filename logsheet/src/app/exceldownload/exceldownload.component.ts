import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-exceldownload',
  templateUrl: './exceldownload.component.html',
  styleUrls: ['./exceldownload.component.css']
})
export class ExceldownloadComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  userList = [

    {
    
    "id": 1,
    
    "name": "Leanne Graham",
    
    "username": "Bret",
    
    "email": "Sincere@april.biz"
    
    },
    
    {
    
    "id": 2,
    
    "name": "Ervin Howell",
    
    "username": "Antonette",
    
    "email": "Shanna@melissa.tv"
    
    },
    
    {
    
    "id": 3,
    
    "name": "Clementine Bauch",
    
    "username": "Samantha",
    
    "email": "Nathan@yesenia.net"
    
    },
    
    {
    
    "id": 4,
    
    "name": "Patricia Lebsack",
    
    "username": "Karianne",
    
    "email": "Julianne.OConner@kory.org"
    
    },
    
    {
    
    "id": 5,
    
    "name": "Chelsey Dietrich",
    
    "username": "Kamren",
    
    "email": "Lucio_Hettinger@annie.ca"
    
    }
    
    ]
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
 