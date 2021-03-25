import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-daily-home',
  templateUrl: './daily-home.component.html',
  styleUrls: ['./daily-home.component.scss']
})
export class DailyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  download() {
    const docDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(docDefinition).open();
  }

  getDocumentDefinition() {

    return {
      content: [
        {
          text: 'Daily Attendance Report',
          style: 'header'
        },
        {
          text: '21-03-2021',
          style: 'subheader'
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 0]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 0]
        },
      }
    };
  }

}
