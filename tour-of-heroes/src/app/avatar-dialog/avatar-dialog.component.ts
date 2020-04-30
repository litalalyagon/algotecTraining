import {Component, OnInit, Inject, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from '../image';

export interface DialogData {
  picUrl: string;
}

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.css']
})
export class AvatarDialogComponent implements OnInit {

  @Input() avatarPics: Image[];
  pageData: Image[];
  jsonPath = 'api/images';
  avatarPlaceholder = 'https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg';

  dataLength: number;
  pageSize = 10;
  // pageEvent: PageEvent;
  page = 0;

  constructor(public dialogRef: MatDialogRef<AvatarDialogComponent>,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {  }

  clickCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.avatarPics = data;
      this.dataLength = data.length;
      this.pageData = this.avatarPics.slice(this.page, this.pageSize);
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get(this.jsonPath);
  }


  getPageData(obj) {
    console.log('get page data');
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.pageData = this.avatarPics.slice(startingIndex, (endingIndex > this.dataLength ? this.dataLength : endingIndex));
    console.log(obj.pageSize);
  }


}
// heroes.slice(0, 4)
