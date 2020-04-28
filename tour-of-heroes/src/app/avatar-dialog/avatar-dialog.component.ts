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

  private jsonPath = 'api/images';
  avatarPlaceholder = 'https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg';

  constructor(public dialogRef: MatDialogRef<AvatarDialogComponent>,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {  }

  clickCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.avatarPics = data;
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get(this.jsonPath);
  }

}
